const moduleSelect = document.getElementById("moduleSelect");
const moduleDetail = document.getElementById("moduleDetail");
const moduleCount = document.getElementById("moduleCount");
const questionCount = document.getElementById("questionCount");
const flashcardCount = document.getElementById("flashcardCount");
const learnedCount = document.getElementById("learnedCount");
const randomStudyToggle = document.getElementById("randomStudyToggle");
const randomStudyRefresh = document.getElementById("randomStudyRefresh");
const randomStudy = document.getElementById("randomStudy");
const examModeToggle = document.getElementById("examModeToggle");
const examModeRefresh = document.getElementById("examModeRefresh");
const examMode = document.getElementById("examMode");
const appModules = window.modules || [];

const SELECTED_MODULE_KEY = "lernapp-selected-module";
const LEARNED_MODULES_KEY = "lernapp-learned-modules";
const FLASHCARD_STATE_KEY = "lernapp-flashcards";
const RANDOM_QUESTION_COUNT = 10;
const RANDOM_FLASHCARD_COUNT = 10;
const EXAM_QUESTION_COUNT = 30;
const EXAM_PASS_PERCENTAGE = 70;

const learnedModules = new Set(loadLearnedModules());
const flashcardState = loadFlashcardState();
const questionRegistry = new Map();
let selectedModuleId = loadSelectedModuleId();
let randomStudyOpen = false;
let randomQuestions = [];
let randomFlashcards = [];
let randomFlashcardIndex = 0;
let randomFlashcardFlipped = false;
let examModeOpen = false;
let examQuestions = [];
let examSelections = {};
let examSubmitted = false;
let examResult = null;

function renderModuleCards() {
  moduleSelect.innerHTML = appModules
    .map((module) => {
      const learnedLabel = learnedModules.has(module.id) ? " - gelernt" : "";
      return `<option value="${module.id}">${module.title}${learnedLabel}</option>`;
    })
    .join("");

  moduleSelect.value = String(selectedModuleId);
}

function renderModuleDetail() {
  const module = appModules.find((entry) => entry.id === selectedModuleId);

  if (!module) {
    moduleDetail.innerHTML = `
      <div class="empty-state">
        <div>
          <h2>Kein Modul gefunden</h2>
          <p>Bitte waehle ein anderes Modul.</p>
        </div>
      </div>
    `;
    return;
  }

  const questionMarkup =
    module.questions.length > 0
      ? module.questions.map((question, index) => renderQuestion(question, index, module.color)).join("")
      : `
        <div class="tip-box">
          <strong>Noch keine Fragen hinterlegt.</strong>
          <p>Wenn du mir die PDF zu diesem Modul gibst, trage ich hier passende Quizfragen ein.</p>
        </div>
      `;

  const exerciseMarkup = module.exercises
    .map((exercise, index) => {
      const normalizedExercise =
        typeof exercise === "string"
          ? { title: `Uebung ${index + 1}`, text: exercise }
          : exercise;

      return `
        <article class="exercise-card" style="border-left-color:${module.color};">
          <h4>${normalizedExercise.title}</h4>
          <p class="exercise-text">${normalizedExercise.text}</p>
        </article>
      `;
    })
    .join("");

  const tipMarkup = module.tips.map((tip) => `<li>${tip}</li>`).join("");

  moduleDetail.innerHTML = `
    <div class="detail-head" style="--module-accent:${module.color}; --module-soft:${module.softColor};">
      <div class="detail-copy">
        <span class="badge" style="background:${module.softColor}; color:${module.color};">${module.title}</span>
        <h2>${module.topic}</h2>
        <p class="module-meta">${module.summary}</p>
        <p class="module-counts">${module.questions.length} Fragen - ${module.flashcards.length} Karten</p>
        ${learnedModules.has(module.id) ? '<p class="module-status">Als gelernt markiert</p>' : ""}
      </div>
      <button class="progress-toggle module-progress-toggle" type="button" data-module-id="${module.id}">
        ${learnedModules.has(module.id) ? "Als offen markieren" : "Als gelernt markieren"}
      </button>
    </div>

    <section>
      <h3 class="section-title">Quiz</h3>
      <p class="section-text">Geschlossene Fragen werden erst nach "Ergebnis ansehen" aufgeloest.</p>
      ${questionMarkup}
    </section>

    <section>
      <h3 class="section-title">Karteikarten</h3>
      <p class="section-text">Zum Lernen von Fachbegriffen, Definitionen und Modellen.</p>
      ${renderFlashcards(module)}
    </section>

    <section>
      <h3 class="section-title">Uebungen</h3>
      <div class="exercise-list">${exerciseMarkup}</div>
    </section>

    <section>
      <h3 class="section-title">Lerntipps</h3>
      <div class="tip-box">
        <ul>${tipMarkup}</ul>
      </div>
    </section>
  `;

  wireQuizInteractions();
  wireProgressToggle();
  wireFlashcards(module);
}

function renderQuestion(question, index, color, sourceLabel = "") {
  const questionKey = registerQuestion(question);
  const sourceMarkup = sourceLabel
    ? `<div class="question-source"><span class="source-badge" style="background:${color}15; color:${color};">${sourceLabel}</span></div>`
    : "";

  if (question.type === "open") {
    return `
      <article class="quiz-card open-question" data-question-key="${questionKey}">
        <div class="question-label" style="background:${color}15; color:${color};">Frage ${index + 1}</div>
        <h4>${question.prompt}</h4>
        ${sourceMarkup}
        <button class="sample-answer-toggle" type="button">Musterantwort anzeigen</button>
        <div class="sample-answer" hidden>
          <strong>Musterantwort:</strong>
          <p>${question.sampleAnswer}</p>
        </div>
      </article>
    `;
  }

  const options = question.options
    .map(
      (option, optionIndex) => `
        <button class="answer-option" type="button" data-option-index="${optionIndex}">
          ${option}
        </button>
      `,
    )
    .join("");

  return `
    <article class="quiz-card" data-question-type="${question.type}" data-question-key="${questionKey}">
      <div class="question-label" style="background:${color}15; color:${color};">Frage ${index + 1}</div>
      <h4>${question.prompt}</h4>
      ${sourceMarkup}
      <div class="quiz-options">${options}</div>
      <button class="check-answer" type="button">Ergebnis ansehen</button>
      <div class="quiz-result" aria-live="polite"></div>
      <div class="sample-answer" hidden>
        <strong>Begruendung:</strong>
        <p>${question.explanation}</p>
      </div>
    </article>
  `;
}

function registerQuestion(question) {
  const key = `question-${questionRegistry.size + 1}`;
  questionRegistry.set(key, question);
  return key;
}

function renderFlashcards(module) {
  if (!module.flashcards.length) {
    return `<div class="tip-box"><strong>Noch keine Karteikarten hinterlegt.</strong></div>`;
  }

  const state = getModuleFlashcardState(module.id, module.flashcards.length);
  const currentCard = module.flashcards[state.index];

  return `
    <div class="flashcard-wrap" style="--module-accent:${module.color}; --module-soft:${module.softColor};">
      <div class="flashcard-progress">Karte ${state.index + 1} von ${module.flashcards.length}</div>
      <button class="flashcard" type="button" data-flashcard-flip="${module.id}">
        <div class="flashcard-face ${state.flipped ? "is-hidden" : ""}">
          <small>Vorderseite</small>
          <h4>${currentCard.front}</h4>
        </div>
        <div class="flashcard-face ${state.flipped ? "" : "is-hidden"}">
          <small>Rueckseite</small>
          <p>${currentCard.back}</p>
        </div>
      </button>
      <div class="flashcard-actions">
        <button class="flashcard-nav" type="button" data-flashcard-action="prev" data-module-id="${module.id}">Zurueck</button>
        <button class="flashcard-nav" type="button" data-flashcard-action="flip" data-module-id="${module.id}">Karte drehen</button>
        <button class="flashcard-nav" type="button" data-flashcard-action="next" data-module-id="${module.id}">Weiter</button>
      </div>
    </div>
  `;
}

function renderRandomStudy() {
  if (!randomStudy) {
    return;
  }

  if (!randomStudyOpen) {
    randomStudy.hidden = true;
    randomStudy.innerHTML = "";
    randomStudyRefresh.hidden = true;
    randomStudyToggle.textContent = "Zufallsmodus öffnen";
    return;
  }

  if (!randomQuestions.length && !randomFlashcards.length) {
    generateRandomStudySet();
  }

  const questionMarkup = randomQuestions.length
    ? randomQuestions
        .map((entry, index) => renderQuestion(entry.question, index, entry.color, entry.title))
        .join("")
    : `<div class="tip-box"><strong>Noch keine Zufallsfragen verfügbar.</strong></div>`;

  randomStudy.hidden = false;
  randomStudyRefresh.hidden = false;
  randomStudyToggle.textContent = "Zufallsmodus schließen";
  randomStudy.innerHTML = `
    <div class="random-summary">
      <div class="tip-box">
        <strong>Gemischte Lernrunde</strong>
        <p>Hier lernst du modulübergreifend. Jede Frage und jede Karte zeigt dir, aus welchem Modul sie stammt.</p>
      </div>
    </div>
    <div class="random-grid">
      <section>
        <h3 class="section-title">10 Zufallsfragen</h3>
        <p class="section-text">Ideal zum Wiederholen über mehrere Themen hinweg.</p>
        ${questionMarkup}
      </section>
      <section class="random-sidebar">
        <h3 class="section-title">10 Zufallskarteikarten</h3>
        <p class="section-text">Zum schnellen Fachbegriffe-Training über mehrere Module hinweg.</p>
        <div id="randomFlashcardArea">${renderRandomFlashcard()}</div>
      </section>
    </div>
  `;

  wireQuizInteractions();
  wireRandomFlashcard();
}

function renderRandomFlashcard() {
  if (!randomFlashcards.length) {
    return `<div class="tip-box"><strong>Noch keine Zufallskarteikarten verfügbar.</strong></div>`;
  }

  const entry = randomFlashcards[randomFlashcardIndex];

  return `
    <div class="flashcard-wrap" style="--module-accent:${entry.color}; --module-soft:${entry.softColor};">
      <div class="flashcard-progress">Karte ${randomFlashcardIndex + 1} von ${randomFlashcards.length}</div>
      <span class="source-badge" style="background:${entry.color}15; color:${entry.color};">${entry.title}</span>
      <button class="flashcard" type="button" data-random-flashcard="true">
        <div class="flashcard-face ${randomFlashcardFlipped ? "is-hidden" : ""}">
          <small>Vorderseite</small>
          <h4>${entry.card.front}</h4>
        </div>
        <div class="flashcard-face ${randomFlashcardFlipped ? "" : "is-hidden"}">
          <small>Rueckseite</small>
          <p>${entry.card.back}</p>
        </div>
      </button>
      <div class="flashcard-actions">
        <button class="flashcard-nav" type="button" data-random-flashcard-action="prev">Zurueck</button>
        <button class="flashcard-nav" type="button" data-random-flashcard-action="flip">Karte drehen</button>
        <button class="flashcard-nav" type="button" data-random-flashcard-action="next">Weiter</button>
      </div>
    </div>
  `;
}

function generateRandomStudySet() {
  randomQuestions = sampleItems(buildQuestionPool(), RANDOM_QUESTION_COUNT);
  randomFlashcards = sampleItems(buildFlashcardPool(), RANDOM_FLASHCARD_COUNT);
  randomFlashcardIndex = 0;
  randomFlashcardFlipped = false;
}

function renderExamMode() {
  if (!examMode) {
    return;
  }

  if (!examModeOpen) {
    examMode.hidden = true;
    examMode.innerHTML = "";
    examModeRefresh.hidden = true;
    examModeToggle.textContent = "Prüfung starten";
    return;
  }

  if (!examQuestions.length) {
    generateExamSet();
  }

  examMode.hidden = false;
  examModeRefresh.hidden = !examSubmitted;
  examModeToggle.textContent = "Prüfungsmodus schließen";

  const wrongCount = examResult ? examResult.total - examResult.correctCount : 0;
  const resultMarkup = examResult ? renderExamResult() : "";
  const submitMarkup = examSubmitted
    ? ""
    : `
      <div class="exam-submit-row">
        <button id="examSubmitButton" class="progress-toggle" type="button">Prüfung auswerten</button>
      </div>
    `;

  examMode.innerHTML = `
    <div class="exam-summary">
      <div class="tip-box">
        <strong>Prüfungssimulation</strong>
        <p>${examQuestions.length} gemischte Fragen aus mehreren Modulen. Bestanden ab ${EXAM_PASS_PERCENTAGE}% richtiger Antworten. Offene Fragen lasse ich bewusst aus, damit die Auswertung fair automatisch funktioniert.</p>
        ${examResult ? `<p class="exam-meta">${examResult.correctCount} richtig, ${wrongCount} falsch.</p>` : ""}
      </div>
    </div>
    <div class="exam-list">
      ${examQuestions.map((entry, index) => renderExamQuestion(entry, index)).join("")}
    </div>
    ${submitMarkup}
    ${resultMarkup}
  `;

  wireExamInteractions();
}

function renderExamQuestion(entry, index) {
  const question = entry.question;
  const selected = getExamSelection(index);
  const correctIndices = question.type === "multi" ? question.correctIndices : [question.correctIndex];
  const isCorrect = examSubmitted ? selectionsMatch(selected, correctIndices) : null;
  const sourceMarkup = `<div class="question-source"><span class="source-badge" style="background:${entry.color}15; color:${entry.color};">${entry.title}</span></div>`;
  const statusMarkup = examSubmitted
    ? `<div class="quiz-result">${isCorrect ? "Richtig beantwortet." : "Nicht bestanden - siehe richtige Lösung unten."}</div>`
    : "";

  const optionsMarkup = question.options
    .map((option, optionIndex) => {
      const classNames = ["answer-option", "exam-answer-option"];

      if (selected.includes(optionIndex)) {
        classNames.push("selected");
      }

      if (examSubmitted) {
        if (correctIndices.includes(optionIndex)) {
          classNames.push("correct");
        }
        if (selected.includes(optionIndex) && !correctIndices.includes(optionIndex)) {
          classNames.push("incorrect");
        }
      }

      return `
        <button
          class="${classNames.join(" ")}"
          type="button"
          data-exam-question-index="${index}"
          data-option-index="${optionIndex}"
          ${examSubmitted ? "disabled" : ""}
        >
          ${option}
        </button>
      `;
    })
    .join("");

  return `
    <article class="quiz-card exam-question-card" data-exam-question-type="${question.type}" data-exam-question-index="${index}">
      <div class="question-label" style="background:${entry.color}15; color:${entry.color};">Prüfungsfrage ${index + 1}</div>
      <h4>${question.prompt}</h4>
      ${sourceMarkup}
      <div class="quiz-options">${optionsMarkup}</div>
      ${statusMarkup}
    </article>
  `;
}

function renderExamResult() {
  if (!examResult) {
    return "";
  }

  const statusClass = examResult.passed ? "is-passed" : "is-failed";
  const wrongAnswerMarkup = examResult.wrongAnswers.length
    ? examResult.wrongAnswers
        .map(
          (entry, index) => `
            <article class="exam-review-card">
              <div class="question-label" style="background:${entry.color}15; color:${entry.color};">Fehler ${index + 1}</div>
              <h4>${entry.prompt}</h4>
              <p class="exam-review-module">Modul: ${entry.title}</p>
              <p><strong>Deine Antwort:</strong> ${entry.selectedLabel}</p>
              <p><strong>Richtig wäre:</strong> ${entry.correctLabel}</p>
              <p><strong>Erklärung:</strong> ${entry.explanation}</p>
              <p><strong>Nochmal anschauen:</strong> ${entry.title} und die zugehörigen Quiz-Erklärungen bzw. Karteikarten.</p>
            </article>
          `,
        )
        .join("")
    : `
      <div class="tip-box">
        <strong>Starke Runde.</strong>
        <p>Du hast alle Prüfungsfragen richtig beantwortet. Zur Wiederholung kannst du trotzdem Zufallsmodus und Karteikarten nutzen.</p>
      </div>
    `;

  const moduleHintMarkup = examResult.reviewModules.length
    ? `
      <ul class="exam-review-list">
        ${examResult.reviewModules
          .map(
            (entry) => `<li>${entry.title} - ${entry.mistakes} Fehler. Schau dir dort besonders die Erklärungen und Karteikarten nochmal an.</li>`,
          )
          .join("")}
      </ul>
    `
    : `
      <p>Du musst aktuell kein Modul gezielt nacharbeiten.</p>
    `;

  return `
    <section class="exam-result">
      <div class="tip-box exam-result-summary ${statusClass}">
        <strong>${examResult.passed ? "Bestanden" : "Nicht bestanden"}</strong>
        <p>Du hast ${examResult.correctCount} von ${examResult.total} Fragen richtig beantwortet. Das sind ${examResult.scorePercentage}%.</p>
        <p>${examResult.passed ? "Stabil. Du liegst über der Bestehensgrenze." : `Für das Bestehen brauchst du mindestens ${EXAM_PASS_PERCENTAGE}%.`}</p>
      </div>

      <div class="tip-box">
        <strong>Was du dir am besten nochmal anschaust</strong>
        ${moduleHintMarkup}
      </div>

      <div class="exam-review-grid">
        ${wrongAnswerMarkup}
      </div>
    </section>
  `;
}

function generateExamSet() {
  examQuestions = sampleItems(buildClosedQuestionPool(), EXAM_QUESTION_COUNT);
  examSelections = {};
  examSubmitted = false;
  examResult = null;
}

function buildQuestionPool() {
  return readyModules().reduce((pool, module) => {
    module.questions.forEach((question) => {
      pool.push({
        question,
        title: module.title,
        color: module.color,
        softColor: module.softColor
      });
    });

    return pool;
  }, []);
}

function buildClosedQuestionPool() {
  return readyModules().reduce((pool, module) => {
    module.questions
      .filter((question) => question.type === "single" || question.type === "multi")
      .forEach((question) => {
        pool.push({
          question,
          title: module.title,
          color: module.color,
          softColor: module.softColor
        });
      });

    return pool;
  }, []);
}

function buildFlashcardPool() {
  return readyModules().reduce((pool, module) => {
    module.flashcards.forEach((card) => {
      pool.push({
        card,
        title: module.title,
        color: module.color,
        softColor: module.softColor
      });
    });

    return pool;
  }, []);
}

function readyModules() {
  return appModules.filter(
    (module) => !module.summary.startsWith("Dieses Modul ist als Platzhalter vorbereitet."),
  );
}

function sampleItems(items, count) {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled.slice(0, Math.min(count, shuffled.length));
}

function wireQuizInteractions() {
  document.querySelectorAll(".quiz-card").forEach((card) => {
    if (card.dataset.wired === "true") {
      return;
    }
    card.dataset.wired = "true";

    const sampleToggle = card.querySelector(".sample-answer-toggle");
    const sampleAnswer = card.querySelector(".sample-answer");

    if (sampleToggle && sampleAnswer) {
      sampleToggle.addEventListener("click", () => {
        const isHidden = sampleAnswer.hasAttribute("hidden");
        if (isHidden) {
          sampleAnswer.removeAttribute("hidden");
        } else {
          sampleAnswer.setAttribute("hidden", "");
        }
        sampleToggle.textContent = isHidden ? "Musterantwort ausblenden" : "Musterantwort anzeigen";
      });
    }

    if (card.dataset.questionType === "single" || card.dataset.questionType === "multi") {
      wireClosedQuestion(card);
    }
  });
}

function wireClosedQuestion(card) {
  const options = [...card.querySelectorAll(".answer-option")];
  const button = card.querySelector(".check-answer");
  const result = card.querySelector(".quiz-result");
  const sampleAnswer = card.querySelector(".sample-answer");
  const question = questionRegistry.get(card.dataset.questionKey);

  if (!question) {
    return;
  }

  options.forEach((option) => {
    option.addEventListener("click", () => {
      if (button.disabled) return;

      if (question.type === "single") {
        options.forEach((entry) => entry.classList.remove("selected"));
        option.classList.add("selected");
        return;
      }

      option.classList.toggle("selected");
    });
  });

  button.addEventListener("click", () => {
    const selected = options
      .filter((option) => option.classList.contains("selected"))
      .map((option) => Number(option.dataset.optionIndex));

    const correctIndices =
      question.type === "multi" ? question.correctIndices : [question.correctIndex];

    const isCorrect =
      selected.length === correctIndices.length &&
      selected.every((value) => correctIndices.includes(value));

    options.forEach((option) => {
      option.disabled = true;
      const optionIndex = Number(option.dataset.optionIndex);
      const isCorrectOption = correctIndices.includes(optionIndex);
      option.classList.toggle("correct", isCorrectOption);
      option.classList.toggle("incorrect", option.classList.contains("selected") && !isCorrectOption);
      option.classList.remove("selected");
    });

    button.disabled = true;
    result.textContent = isCorrect
      ? "Richtig. Gute Arbeit."
      : "Nicht ganz. Die gruen markierten Antworten sind korrekt.";
    sampleAnswer.removeAttribute("hidden");
  });
}

function wireRandomModeControls() {
  if (!randomStudyToggle || !randomStudyRefresh || !randomStudy) {
    return;
  }

  randomStudyToggle.addEventListener("click", () => {
    randomStudyOpen = !randomStudyOpen;
    if (randomStudyOpen) {
      generateRandomStudySet();
    }
    renderRandomStudy();
  });

  randomStudyRefresh.addEventListener("click", () => {
    generateRandomStudySet();
    renderRandomStudy();
  });
}

function wireExamModeControls() {
  if (!examModeToggle || !examModeRefresh || !examMode) {
    return;
  }

  examModeToggle.addEventListener("click", () => {
    examModeOpen = !examModeOpen;
    if (examModeOpen) {
      generateExamSet();
    }
    renderExamMode();
  });

  examModeRefresh.addEventListener("click", () => {
    generateExamSet();
    renderExamMode();
  });
}

function wireExamInteractions() {
  const submitButton = document.getElementById("examSubmitButton");
  if (submitButton) {
    submitButton.addEventListener("click", () => {
      evaluateExam();
      renderExamMode();
    });
  }

  document.querySelectorAll(".exam-answer-option").forEach((button) => {
    if (button.dataset.wired === "true") {
      return;
    }
    button.dataset.wired = "true";

    button.addEventListener("click", () => {
      if (examSubmitted) {
        return;
      }

      const questionIndex = Number(button.dataset.examQuestionIndex);
      const optionIndex = Number(button.dataset.optionIndex);
      const questionEntry = examQuestions[questionIndex];
      const selected = getExamSelection(questionIndex);

      if (questionEntry.question.type === "single") {
        examSelections[questionIndex] = [optionIndex];
        button.closest(".quiz-options").querySelectorAll(".exam-answer-option").forEach((entry) => {
          entry.classList.toggle("selected", Number(entry.dataset.optionIndex) === optionIndex);
        });
        return;
      }

      if (selected.includes(optionIndex)) {
        examSelections[questionIndex] = selected.filter((value) => value !== optionIndex);
        button.classList.remove("selected");
        return;
      }

      examSelections[questionIndex] = [...selected, optionIndex].sort((left, right) => left - right);
      button.classList.add("selected");
    });
  });
}

function getExamSelection(questionIndex) {
  return Array.isArray(examSelections[questionIndex]) ? examSelections[questionIndex] : [];
}

function selectionsMatch(selected, correctIndices) {
  return (
    selected.length === correctIndices.length &&
    selected.every((value) => correctIndices.includes(value))
  );
}

function evaluateExam() {
  const wrongAnswers = [];
  const reviewModules = new Map();
  let correctCount = 0;

  examQuestions.forEach((entry, index) => {
    const question = entry.question;
    const selected = getExamSelection(index);
    const correctIndices = question.type === "multi" ? question.correctIndices : [question.correctIndex];

    if (selectionsMatch(selected, correctIndices)) {
      correctCount += 1;
      return;
    }

    wrongAnswers.push({
      title: entry.title,
      color: entry.color,
      prompt: question.prompt,
      selectedLabel: formatOptionList(question.options, selected),
      correctLabel: formatOptionList(question.options, correctIndices),
      explanation: question.explanation
    });

    const moduleStats = reviewModules.get(entry.title) || { title: entry.title, mistakes: 0 };
    moduleStats.mistakes += 1;
    reviewModules.set(entry.title, moduleStats);
  });

  const total = examQuestions.length;
  const scorePercentage = total ? Math.round((correctCount / total) * 100) : 0;

  examSubmitted = true;
  examResult = {
    correctCount,
    total,
    scorePercentage,
    passed: scorePercentage >= EXAM_PASS_PERCENTAGE,
    wrongAnswers,
    reviewModules: [...reviewModules.values()].sort((left, right) => right.mistakes - left.mistakes)
  };
}

function formatOptionList(options, indices) {
  if (!indices.length) {
    return "Keine Antwort ausgewählt.";
  }

  return indices
    .map((index) => options[index])
    .filter(Boolean)
    .join(" / ");
}

function wireRandomFlashcard() {
  const randomFlashcardArea = document.getElementById("randomFlashcardArea");
  if (!randomFlashcardArea || !randomFlashcards.length) {
    return;
  }

  const cardButton = randomFlashcardArea.querySelector("[data-random-flashcard='true']");
  if (cardButton) {
    cardButton.addEventListener("click", () => {
      randomFlashcardFlipped = !randomFlashcardFlipped;
      updateRandomFlashcardArea();
    });
  }

  randomFlashcardArea.querySelectorAll("[data-random-flashcard-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.randomFlashcardAction;

      if (action === "prev") {
        randomFlashcardIndex = (randomFlashcardIndex - 1 + randomFlashcards.length) % randomFlashcards.length;
        randomFlashcardFlipped = false;
      }

      if (action === "next") {
        randomFlashcardIndex = (randomFlashcardIndex + 1) % randomFlashcards.length;
        randomFlashcardFlipped = false;
      }

      if (action === "flip") {
        randomFlashcardFlipped = !randomFlashcardFlipped;
      }

      updateRandomFlashcardArea();
    });
  });
}

function updateRandomFlashcardArea() {
  const randomFlashcardArea = document.getElementById("randomFlashcardArea");
  if (!randomFlashcardArea) {
    return;
  }

  randomFlashcardArea.innerHTML = renderRandomFlashcard();
  wireRandomFlashcard();
}

function wireProgressToggle() {
  const toggle = document.querySelector(".module-progress-toggle");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    const moduleId = Number(toggle.dataset.moduleId);
    if (learnedModules.has(moduleId)) {
      learnedModules.delete(moduleId);
    } else {
      learnedModules.add(moduleId);
    }

    persistLearnedModules();
    updateStats();
    renderModuleCards();
    renderModuleDetail();
  });
}

function wireFlashcards(module) {
  document.querySelectorAll(".flashcard-nav").forEach((button) => {
    button.addEventListener("click", () => {
      const moduleId = Number(button.dataset.moduleId);
      const action = button.dataset.flashcardAction;
      const state = getModuleFlashcardState(moduleId, module.flashcards.length);

      if (action === "prev") {
        state.index = (state.index - 1 + module.flashcards.length) % module.flashcards.length;
        state.flipped = false;
      }

      if (action === "next") {
        state.index = (state.index + 1) % module.flashcards.length;
        state.flipped = false;
      }

      if (action === "flip") {
        state.flipped = !state.flipped;
      }

      persistFlashcardState();
      renderModuleDetail();
    });
  });

  const card = document.querySelector(`[data-flashcard-flip="${module.id}"]`);
  if (card) {
    card.addEventListener("click", () => {
      const state = getModuleFlashcardState(module.id, module.flashcards.length);
      state.flipped = !state.flipped;
      persistFlashcardState();
      renderModuleDetail();
    });
  }
}

function wireModuleSelect() {
  moduleSelect.addEventListener("change", () => {
    selectedModuleId = Number(moduleSelect.value);
    persistSelectedModule();
    renderModuleCards();
    renderModuleDetail();
  });
}

function getModuleFlashcardState(moduleId, totalCards) {
  if (!flashcardState[moduleId]) {
    flashcardState[moduleId] = { index: 0, flipped: false };
  }

  if (flashcardState[moduleId].index >= totalCards) {
    flashcardState[moduleId].index = 0;
  }

  return flashcardState[moduleId];
}

function updateStats() {
  moduleCount.textContent = appModules.length;
  questionCount.textContent = appModules.reduce((sum, module) => sum + module.questions.length, 0);
  flashcardCount.textContent = appModules.reduce((sum, module) => sum + module.flashcards.length, 0);
  learnedCount.textContent = learnedModules.size;
}

function safeGetStorageItem(key) {
  try {
    return window.localStorage.getItem(key);
  } catch (error) {
    console.warn(`Storage read failed for ${key}.`, error);
    return null;
  }
}

function safeSetStorageItem(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch (error) {
    console.warn(`Storage write failed for ${key}.`, error);
  }
}

function loadSelectedModuleId() {
  const storedValue = Number(safeGetStorageItem(SELECTED_MODULE_KEY));
  const moduleExists = appModules.some((module) => module.id === storedValue);
  return moduleExists ? storedValue : 1;
}

function persistSelectedModule() {
  safeSetStorageItem(SELECTED_MODULE_KEY, String(selectedModuleId));
}

function loadLearnedModules() {
  try {
    const rawValue = safeGetStorageItem(LEARNED_MODULES_KEY);
    const parsed = rawValue ? JSON.parse(rawValue) : [];
    return Array.isArray(parsed)
      ? parsed.filter((moduleId) => appModules.some((module) => module.id === moduleId))
      : [];
  } catch (error) {
    return [];
  }
}

function persistLearnedModules() {
  safeSetStorageItem(LEARNED_MODULES_KEY, JSON.stringify([...learnedModules]));
}

function loadFlashcardState() {
  try {
    const rawValue = safeGetStorageItem(FLASHCARD_STATE_KEY);
    return rawValue ? JSON.parse(rawValue) : {};
  } catch (error) {
    return {};
  }
}

function persistFlashcardState() {
  safeSetStorageItem(FLASHCARD_STATE_KEY, JSON.stringify(flashcardState));
}

updateStats();
renderModuleCards();
renderModuleDetail();
renderRandomStudy();
renderExamMode();
wireModuleSelect();
wireRandomModeControls();
wireExamModeControls();

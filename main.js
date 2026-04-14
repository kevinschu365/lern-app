const moduleSelect = document.getElementById("moduleSelect");
const moduleDetail = document.getElementById("moduleDetail");
const moduleCount = document.getElementById("moduleCount");
const questionCount = document.getElementById("questionCount");
const flashcardCount = document.getElementById("flashcardCount");
const learnedCount = document.getElementById("learnedCount");

const SELECTED_MODULE_KEY = "lernapp-selected-module";
const LEARNED_MODULES_KEY = "lernapp-learned-modules";
const FLASHCARD_STATE_KEY = "lernapp-flashcards";

const learnedModules = new Set(loadLearnedModules());
const flashcardState = loadFlashcardState();
let selectedModuleId = loadSelectedModuleId();

function renderModuleCards() {
  moduleSelect.innerHTML = modules
    .map((module) => {
      const learnedLabel = learnedModules.has(module.id) ? " - gelernt" : "";
      return `<option value="${module.id}">${module.title}${learnedLabel}</option>`;
    })
    .join("");

  moduleSelect.value = String(selectedModuleId);
}

function renderModuleDetail() {
  const module = modules.find((entry) => entry.id === selectedModuleId);

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
        <p class="module-counts">${module.questions.length} Fragen Â· ${module.flashcards.length} Karten</p>
        ${learnedModules.has(module.id) ? '<p class="module-status">Als gelernt markiert</p>' : ""}
      </div>
      <button class="progress-toggle" type="button" data-module-id="${module.id}">
        ${learnedModules.has(module.id) ? "Als offen markieren" : "Als gelernt markieren"}
      </button>
    </div>

    <section>
      <h3 class="section-title">Quiz</h3>
      <p class="section-text">Enthaelt offene Fragen, Einzelauswahl und Mehrfachantworten.</p>
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

function renderQuestion(question, index, color) {
  if (question.type === "open") {
    return `
      <article class="quiz-card open-question">
        <div class="question-label" style="background:${color}15; color:${color};">Frage ${index + 1}</div>
        <h4>${question.prompt}</h4>
        <button class="sample-answer-toggle" type="button">Musterantwort anzeigen</button>
        <div class="sample-answer" hidden>
          <strong>Musterantwort:</strong>
          <p>${question.sampleAnswer}</p>
        </div>
      </article>
    `;
  }

  if (question.type === "multi") {
    const options = question.options
      .map(
        (option, optionIndex) => `
          <label class="multi-option">
            <input type="checkbox" value="${optionIndex}" />
            <span>${option}</span>
          </label>
        `,
      )
      .join("");

    return `
      <article class="quiz-card" data-question-type="multi">
        <div class="question-label" style="background:${color}15; color:${color};">Frage ${index + 1}</div>
        <h4>${question.prompt}</h4>
        <p class="question-hint">Mehrere Antworten koennen richtig sein.</p>
        <div class="multi-options">${options}</div>
        <button class="check-multi" type="button">Antwort pruefen</button>
        <div class="quiz-result" aria-live="polite"></div>
        <div class="sample-answer" hidden>
          <strong>Begruendung:</strong>
          <p>${question.explanation}</p>
        </div>
      </article>
    `;
  }

  const options = question.options
    .map(
      (option, optionIndex) => `
        <button class="quiz-option" type="button" data-correct="${optionIndex === question.correctIndex}">
          ${option}
        </button>
      `,
    )
    .join("");

  return `
    <article class="quiz-card" data-question-type="single">
      <div class="question-label" style="background:${color}15; color:${color};">Frage ${index + 1}</div>
      <h4>${question.prompt}</h4>
      <div class="quiz-options">${options}</div>
      <div class="quiz-result" aria-live="polite"></div>
    </article>
  `;
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

function wireQuizInteractions() {
  document.querySelectorAll(".quiz-card").forEach((card) => {
    const sampleToggle = card.querySelector(".sample-answer-toggle");
    const sampleAnswer = card.querySelector(".sample-answer");

    if (sampleToggle && sampleAnswer) {
      sampleToggle.addEventListener("click", () => {
        const isHidden = sampleAnswer.hasAttribute("hidden");
        sampleAnswer.toggleAttribute("hidden");
        sampleToggle.textContent = isHidden ? "Musterantwort ausblenden" : "Musterantwort anzeigen";
      });
    }

    if (card.dataset.questionType === "single") {
      wireSingleChoice(card);
    }

    if (card.dataset.questionType === "multi") {
      wireMultiChoice(card);
    }
  });
}

function wireSingleChoice(card) {
  const options = card.querySelectorAll(".quiz-option");
  const result = card.querySelector(".quiz-result");

  options.forEach((option) => {
    option.addEventListener("click", () => {
      const isCorrect = option.dataset.correct === "true";

      options.forEach((entry) => {
        entry.disabled = true;
        const entryCorrect = entry.dataset.correct === "true";
        entry.classList.toggle("correct", entryCorrect);
        entry.classList.toggle("incorrect", !entryCorrect && entry === option);
      });

      result.textContent = isCorrect
        ? "Richtig. Gute Arbeit."
        : "Noch nicht ganz. Die gruen markierte Antwort ist korrekt.";
    });
  });
}

function wireMultiChoice(card) {
  const button = card.querySelector(".check-multi");
  const checkboxes = [...card.querySelectorAll('input[type="checkbox"]')];
  const result = card.querySelector(".quiz-result");
  const sampleAnswer = card.querySelector(".sample-answer");
  const question = findQuestionByPrompt(card.querySelector("h4").textContent);

  button.addEventListener("click", () => {
    const selected = checkboxes
      .map((checkbox, index) => (checkbox.checked ? index : null))
      .filter((value) => value !== null);

    const isCorrect =
      selected.length === question.correctIndices.length &&
      selected.every((value) => question.correctIndices.includes(value));

    checkboxes.forEach((checkbox, index) => {
      checkbox.disabled = true;
      const label = checkbox.closest(".multi-option");
      const shouldBeChecked = question.correctIndices.includes(index);
      label.classList.toggle("correct", shouldBeChecked);
      label.classList.toggle("incorrect", checkbox.checked && !shouldBeChecked);
    });

    button.disabled = true;
    result.textContent = isCorrect
      ? "Richtig. Du hast alle passenden Antworten erkannt."
      : "Nicht ganz. Die gruen markierten Antworten sind richtig.";
    sampleAnswer.removeAttribute("hidden");
  });
}

function wireProgressToggle() {
  const toggle = document.querySelector(".progress-toggle");
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

function findQuestionByPrompt(prompt) {
  const module = modules.find((entry) => entry.id === selectedModuleId);
  return module.questions.find((question) => question.prompt === prompt);
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
  moduleCount.textContent = modules.length;
  questionCount.textContent = modules.reduce((sum, module) => sum + module.questions.length, 0);
  flashcardCount.textContent = modules.reduce((sum, module) => sum + module.flashcards.length, 0);
  learnedCount.textContent = learnedModules.size;
}

function loadSelectedModuleId() {
  const storedValue = Number(window.localStorage.getItem(SELECTED_MODULE_KEY));
  const moduleExists = modules.some((module) => module.id === storedValue);
  return moduleExists ? storedValue : 1;
}

function persistSelectedModule() {
  window.localStorage.setItem(SELECTED_MODULE_KEY, String(selectedModuleId));
}

function loadLearnedModules() {
  try {
    const rawValue = window.localStorage.getItem(LEARNED_MODULES_KEY);
    const parsed = rawValue ? JSON.parse(rawValue) : [];
    return Array.isArray(parsed)
      ? parsed.filter((moduleId) => modules.some((module) => module.id === moduleId))
      : [];
  } catch {
    return [];
  }
}

function persistLearnedModules() {
  window.localStorage.setItem(LEARNED_MODULES_KEY, JSON.stringify([...learnedModules]));
}

function loadFlashcardState() {
  try {
    const rawValue = window.localStorage.getItem(FLASHCARD_STATE_KEY);
    return rawValue ? JSON.parse(rawValue) : {};
  } catch {
    return {};
  }
}

function persistFlashcardState() {
  window.localStorage.setItem(FLASHCARD_STATE_KEY, JSON.stringify(flashcardState));
}

updateStats();
renderModuleCards();
renderModuleDetail();
wireModuleSelect();


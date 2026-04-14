const moduleGrid = document.getElementById("moduleGrid");
const moduleDetail = document.getElementById("moduleDetail");
const moduleCount = document.getElementById("moduleCount");
const questionCount = document.getElementById("questionCount");
const learnedCount = document.getElementById("learnedCount");

const SELECTED_MODULE_KEY = "lernapp-selected-module";
const LEARNED_MODULES_KEY = "lernapp-learned-modules";

const learnedModules = new Set(loadLearnedModules());
let selectedModuleId = loadSelectedModuleId();

function renderModuleCards() {
  moduleGrid.innerHTML = "";

  modules.forEach((module) => {
    const card = document.createElement("button");
    card.className = `module-card${module.id === selectedModuleId ? " active" : ""}`;
    card.type = "button";
    card.innerHTML = `
      <span class="badge">Modul ${module.id}</span>
      <h3>${module.title}</h3>
      <p class="module-meta">${module.topic}</p>
    `;

    if (learnedModules.has(module.id)) {
      card.insertAdjacentHTML(
        "beforeend",
        '<p class="module-status">Als gelernt markiert</p>',
      );
    }

    card.addEventListener("click", () => {
      selectedModuleId = module.id;
      persistSelectedModule();
      renderModuleCards();
      renderModuleDetail();
    });

    moduleGrid.appendChild(card);
  });
}

function renderModuleDetail() {
  const module = modules.find((entry) => entry.id === selectedModuleId);

  if (!module) {
    moduleDetail.innerHTML = `
      <div class="empty-state">
        <div>
          <h2>Kein Modul gefunden</h2>
          <p>Bitte wähle ein anderes Modul.</p>
        </div>
      </div>
    `;
    return;
  }

  const questionMarkup =
    module.questions.length > 0
      ? module.questions.map((question, index) => renderQuestion(question, index)).join("")
      : `
        <div class="tip-box">
          <strong>Noch keine Fragen hinterlegt.</strong>
          <p>Wenn du mir die PDF zu diesem Modul gibst, trage ich hier passende Quizfragen ein.</p>
        </div>
      `;

  const exerciseMarkup = module.exercises
    .map(
      (exercise) => `
        <article class="exercise-card">
          <h4>${exercise.title}</h4>
          <p class="exercise-text">${exercise.text}</p>
        </article>
      `,
    )
    .join("");

  const tipMarkup = module.tips.map((tip) => `<li>${tip}</li>`).join("");

  moduleDetail.innerHTML = `
    <div class="detail-head">
      <div class="detail-copy">
        <span class="badge">${module.title}</span>
        <h2>${module.topic}</h2>
        <p class="module-meta">${module.summary}</p>
      </div>
      <button class="progress-toggle" type="button" data-module-id="${module.id}">
        ${learnedModules.has(module.id) ? "Als offen markieren" : "Als gelernt markieren"}
      </button>
    </div>

    <section>
      <h3 class="section-title">Quiz</h3>
      ${questionMarkup}
    </section>

    <section>
      <h3 class="section-title">Übungen</h3>
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
}

function renderQuestion(question, index) {
  if (question.type === "open") {
    return `
      <article class="quiz-card open-question">
        <div class="question-label">Frage ${index + 1}</div>
        <h4>${question.prompt}</h4>
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
        <button class="quiz-option" type="button" data-correct="${optionIndex === question.correctIndex}">
          ${option}
        </button>
      `,
    )
    .join("");

  return `
    <article class="quiz-card">
      <div class="question-label">Frage ${index + 1}</div>
      <h4>${question.prompt}</h4>
      <div class="quiz-options">${options}</div>
      <div class="quiz-result" aria-live="polite"></div>
    </article>
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
        sampleToggle.textContent = isHidden
          ? "Musterantwort ausblenden"
          : "Musterantwort anzeigen";
      });
    }

    const options = card.querySelectorAll(".quiz-option");
    const result = card.querySelector(".quiz-result");

    if (!options.length || !result) {
      return;
    }

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
          : "Noch nicht ganz. Die grün markierte Antwort ist korrekt.";
      });
    });
  });
}

function wireProgressToggle() {
  const toggle = document.querySelector(".progress-toggle");

  if (!toggle) {
    return;
  }

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

function updateStats() {
  moduleCount.textContent = modules.length;
  questionCount.textContent = modules.reduce(
    (sum, module) => sum + module.questions.length,
    0,
  );
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
  window.localStorage.setItem(
    LEARNED_MODULES_KEY,
    JSON.stringify([...learnedModules]),
  );
}

updateStats();
renderModuleCards();
renderModuleDetail();

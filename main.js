"use strict";

/* ==========================================================================
   Lernwelt – App-Logik
   Navigation per Hash-Routen (#/...), damit es ohne Server und auf GitHub
   Pages funktioniert:
     #/                                  Startseite mit Themen-Karten
     #/weiterbildung                     Weiterbildung 2025 Ecomex
     #/weiterbildung/module              Modulübersicht
     #/weiterbildung/modul/<id>/<tab>    Modul (quiz | karten | uebungen | tipps)
     #/weiterbildung/zufall              Zufallsmodus
     #/weiterbildung/pruefung            Prüfungsmodus
     #/thema/<id>                        Themen-Bereich (z. B. SEO-Tutorial)
     #/thema/<id>/<bereich>              Audio, Video, Quiz, Lernkarten, ...
   ========================================================================== */

const appEl = document.getElementById("app");
const crumbsEl = document.getElementById("crumbs");
const backEl = document.getElementById("backBtn");

const wbModules = window.modules || [];
const themen = (window.LERN_THEMEN || []).filter((t) => t && t.id && t.titel);

const LEARNED_KEY = "lernapp-learned-modules";
const DECK_KEY = "lernapp-decks";
const RANDOM_QUESTION_COUNT = 10;
const RANDOM_CARD_COUNT = 10;
const EXAM_QUESTION_COUNT = 30;
const EXAM_PASS_PERCENTAGE = 70;

const WEITERBILDUNG = {
  titel: "Weiterbildung 2025 Ecomex",
  untertitel: "Online-Marketing",
  farbe: "#2563eb"
};

const learnedModules = new Set(
  loadJSON(LEARNED_KEY, []).filter((id) => wbModules.some((m) => m.id === id))
);
const deckState = loadJSON(DECK_KEY, {});

/* ---------- Icons (Lucide-Stil, inline SVG) ---------- */

const ICONS = {
  book: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  headphones: '<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>',
  play: '<circle cx="12" cy="12" r="10"/><path d="m10 8 6 4-6 4z"/>',
  film: '<rect x="2" y="6" width="14" height="12" rx="2"/><path d="m22 8-6 4 6 4z"/>',
  slides: '<path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/>',
  mindmap: '<circle cx="12" cy="5" r="3"/><circle cx="5" cy="19" r="3"/><circle cx="19" cy="19" r="3"/><path d="M12 8v3m0 0-5 5.5M12 11l5 5.5"/>',
  cards: '<rect x="3" y="7" width="14" height="14" rx="2"/><path d="M7 3h12a2 2 0 0 1 2 2v12"/>',
  quiz: '<circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
  table: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18"/>',
  report: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8m8 4H8m2-8H8"/>',
  shuffle: '<path d="M16 3h5v5M4 20 21 3m0 13v5h-5m-1-6 6 6M4 4l5 5"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M15.5 12.9 17 22l-5-3-5 3 1.5-9.1"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/>',
  arrowRight: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  external: '<path d="M15 3h6v6M10 14 21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  pencil: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  bulb: '<path d="M9 18h6m-5 4h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/>',
  sparkle: '<path d="M12 3v4m0 10v4M3 12h4m10 0h4M5.6 5.6l2.8 2.8m7.2 7.2 2.8 2.8m0-12.8-2.8 2.8m-7.2 7.2-2.8 2.8"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  arrowLeft: '<path d="M19 12H5m6-6-6 6 6 6"/>',
  chevLeft: '<path d="m15 18-6-6 6-6"/>',
  chevRight: '<path d="m9 18 6-6-6-6"/>',
  volume: '<path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/>',
  stop: '<rect x="6" y="6" width="12" height="12" rx="2"/>',
  maximize: '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',
  flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2-1-3-1.1-2.1-.2-4 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.2.4-2.3 1-3.2.3 1.4 1.2 2.7 2.5 2.7z"/>',
  chart: '<path d="M3 3v18h18"/><path d="M7 16v-4m5 4V8m5 8v-6"/>',
  save: '<path d="M12 3v12m-5-5 5 5 5-5"/><path d="M5 21h14"/>'
};

function icon(name, cls = "icon") {
  return `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;
}

/* ---------- Helfer ---------- */

function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function loadJSON(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    return fallback;
  }
}

function saveJSON(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    /* Speicher nicht verfügbar (z. B. privater Modus) – App läuft trotzdem. */
  }
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function sample(items, count) {
  return shuffle(items).slice(0, Math.min(count, items.length));
}

function plural(count, one, many) {
  return `${count} ${count === 1 ? one : many}`;
}

function hexToSoft(hex, alpha = 0.12) {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex || "");
  if (!m) return `rgba(37, 99, 235, ${alpha})`;
  const n = parseInt(m[1], 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
}

function readyModules() {
  return wbModules.filter((m) => !String(m.summary || "").startsWith("Dieses Modul ist als Platzhalter"));
}

/* Fragen aus beiden Formaten (Weiterbildung + Themen) vereinheitlichen. */
function normalizeQuestion(q) {
  if (!q) return null;
  if (q.type === "open") return { type: "open", prompt: q.prompt, sample: q.sampleAnswer || "" };
  if (q.type === "single") {
    return { type: "single", prompt: q.prompt, options: q.options, correct: [q.correctIndex], explanation: q.explanation || "" };
  }
  if (q.type === "multi") {
    return { type: "multi", prompt: q.prompt, options: q.options, correct: q.correctIndices || [], explanation: q.explanation || "" };
  }
  if (q.frage) {
    const prompt = esc(q.frage);
    if (!Array.isArray(q.optionen) || !q.optionen.length) {
      return { type: "open", prompt, sample: esc(q.antwort || q.erklaerung || "") };
    }
    const correct = (Array.isArray(q.richtig) ? q.richtig : [q.richtig]).map(Number);
    return {
      type: correct.length > 1 ? "multi" : "single",
      prompt,
      options: q.optionen.map(esc),
      correct,
      explanation: esc(q.erklaerung || "")
    };
  }
  return null;
}

function sameSelection(a, b) {
  return a.length === b.length && a.every((v) => b.includes(v));
}

/* ---------- Fortschritt: gewusste Karten, Fehler, zuletzt gelernt ---------- */

const KNOWN_KEY = "lernapp-known-cards";
const MISTAKES_KEY = "lernapp-mistakes";
const LAST_KEY = "lernapp-last";

const knownCards = new Set(loadJSON(KNOWN_KEY, []));
let mistakes = loadJSON(MISTAKES_KEY, []);

function hashText(text) {
  let h = 5381;
  const s = String(text || "");
  for (let i = 0; i < s.length; i += 1) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36);
}

function questionId(q) {
  return `q${hashText(`${q.type}|${q.prompt}`)}`;
}

function cardId(card) {
  return `c${hashText(`${card.front}|${card.back}`)}`;
}

function recordAnswer(q, correct, confidence = "") {
  if (!q || q.type === "open") return;
  trackActivity("frage", correct);
  const id = questionId(q);
  if (correct) srsRate(id, confidence === "geraten" ? 2 : confidence === "sicher" ? 4 : 3);
  else srsRate(id, 1, 1);
  const has = mistakes.includes(id);
  if (!correct && !has) mistakes.push(id);
  else if (correct && has) mistakes = mistakes.filter((x) => x !== id);
  else return;
  saveJSON(MISTAKES_KEY, mistakes);
}

function stripTags(text) {
  return String(text || "").replace(/<[^>]*>/g, " ");
}

/* Für Suche: Kleinbuchstaben, Umlaute vereinheitlicht (ä = ae), damit beide Schreibweisen treffen. */
function foldText(text) {
  return stripTags(text)
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ");
}

let questionIndexCache = null;
function allQuestions() {
  if (questionIndexCache) return questionIndexCache;
  const list = [];
  wbModules.forEach((m) =>
    m.questions.forEach((q) => {
      const n = normalizeQuestion(q);
      if (n) list.push({ q: n, label: m.title, color: m.color, href: `#/weiterbildung/modul/${m.id}/quiz` });
    })
  );
  themen.forEach((t) =>
    (t.quiz || []).forEach((q) => {
      const n = normalizeQuestion(q);
      if (n) list.push({ q: n, label: t.titel, color: t.farbe || "#0891b2", href: `#/thema/${encodeURIComponent(t.id)}/quiz` });
    })
  );
  questionIndexCache = list;
  return list;
}

function allCards() {
  const list = [];
  wbModules.forEach((m) =>
    m.flashcards.forEach((c) =>
      list.push({ front: c.front, back: c.back, label: m.title, color: m.color, href: `#/weiterbildung/modul/${m.id}/karten` })
    )
  );
  themen.forEach((t) =>
    (t.lernkarten || []).forEach((k) =>
      list.push({ front: esc(k.vorne), back: esc(k.hinten), label: t.titel, color: t.farbe || "#ea580c", href: `#/thema/${encodeURIComponent(t.id)}/lernkarten` })
    )
  );
  return list;
}

function mistakeEntries() {
  const ids = new Set(mistakes);
  const seen = new Set();
  return allQuestions().filter((entry) => {
    const id = questionId(entry.q);
    if (!ids.has(id) || seen.has(id)) return false;
    seen.add(id);
    return true;
  });
}


/* ---------- Wiederholung mit Abstand (Leitner-System, 5 Fächer) ----------
   Jede Karte und jede Frage hat ein Fach (1–5) und ein Fälligkeitsdatum.
   Gewusst = ein Fach weiter, längerer Abstand. Nicht gewusst = zurück in Fach 1. */

const SRS_KEY = "lernapp-srs";
const SRS_DAYS = [0, 2, 4, 8, 16, 35];
const NEW_CARDS_PER_DAY = 10;
const NEW_QUESTIONS_PER_DAY = 5;
let srs = loadJSON(SRS_KEY, {});
let srsMigrated = false;

function addDays(n) {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return dayKey(d);
}

function todayStr() {
  return dayKey(new Date());
}

/* Karten, die schon als „Weiß ich“ markiert waren, starten in Fach 2. */
function ensureSrsMigrated() {
  if (srsMigrated) return;
  srsMigrated = true;
  let changed = false;
  knownCards.forEach((id) => {
    if (!srs[id]) {
      srs[id] = { box: 2, due: addDays(3), n: 1, first: "migriert" };
      changed = true;
    }
  });
  if (changed) saveJSON(SRS_KEY, srs);
}

function isDue(id) {
  const e = srs[id];
  return !e || e.due <= todayStr();
}

function isDueReview(id) {
  const e = srs[id];
  return !!e && e.due <= todayStr();
}

function nextBox(id, rating) {
  const box = (srs[id] && srs[id].box) || 0;
  if (rating === 1) return 1;
  if (rating === 2) return Math.max(1, box);
  if (rating === 3) return Math.min(5, box + 1);
  return Math.min(5, box + 2);
}

function previewDays(id, rating) {
  if (rating === 1) return 0;
  if (rating === 2) return 1;
  return SRS_DAYS[nextBox(id, rating)];
}

function srsRate(id, rating, overrideDays = null) {
  const e = srs[id] || {};
  const box = nextBox(id, rating);
  const days = overrideDays !== null ? overrideDays : previewDays(id, rating);
  srs[id] = { box, due: addDays(days), n: (e.n || 0) + 1, first: e.first || todayStr() };
  saveJSON(SRS_KEY, srs);
}

function daysLabel(n) {
  if (n <= 0) return "gleich nochmal";
  if (n === 1) return "morgen";
  if (n < 30) return `in ${n} Tagen`;
  return `in ${Math.round(n / 30)} Mon.`;
}

function nextDueLabel(ids) {
  const dates = ids.map((id) => srs[id] && srs[id].due).filter(Boolean).sort();
  const next = dates.find((d) => d > todayStr());
  if (!next) return "";
  const diff = Math.round((new Date(`${next}T12:00:00`) - new Date(`${todayStr()}T12:00:00`)) / 86400000);
  return daysLabel(diff);
}

function introducedToday(prefix) {
  const today = todayStr();
  return Object.entries(srs).filter(([id, e]) => id.startsWith(prefix) && e.first === today).length;
}

/* ---------- „Heute dran“: die tägliche Lernrunde ---------- */

function pickNew(list, idOf, limit) {
  if (limit <= 0) return [];
  const groups = new Map();
  list.forEach((item) => {
    const g = groups.get(item.label) || { seen: 0, total: 0, fresh: [] };
    g.total += 1;
    if (srs[idOf(item)]) g.seen += 1;
    else g.fresh.push(item);
    groups.set(item.label, g);
  });
  const ordered = [...groups.values()].filter((g) => g.fresh.length).sort((a, b) => a.seen / a.total - b.seen / b.total);
  const picked = [];
  let round = 0;
  while (picked.length < limit && ordered.some((g) => g.fresh.length > round)) {
    ordered.slice(0, 4).forEach((g) => {
      if (picked.length < limit && g.fresh[round]) picked.push(g.fresh[round]);
    });
    round += 1;
    if (round > 50) break;
  }
  return picked;
}

function buildTodaySession() {
  ensureSrsMigrated();
  const cards = allCards();
  const dueCards = shuffle(cards.filter((c) => isDueReview(cardId(c)))).slice(0, 40);
  const newCards = pickNew(cards, cardId, NEW_CARDS_PER_DAY - introducedToday("c"));

  const seen = new Set();
  const take = (entry) => {
    const id = questionId(entry.q);
    if (seen.has(id)) return false;
    seen.add(id);
    return true;
  };
  const closed = allQuestions().filter((e) => e.q.type !== "open");
  const mistakeQs = mistakeEntries().filter((e) => e.q.type !== "open" && take(e)).slice(0, 5);
  const dueQs = shuffle(closed.filter((e) => isDueReview(questionId(e.q)) && take(e))).slice(0, 10);
  const newQs = pickNew(closed.filter((e) => !seen.has(questionId(e.q))), (e) => questionId(e.q), NEW_QUESTIONS_PER_DAY - introducedToday("q"));

  const questions = shuffle([...mistakeQs, ...dueQs, ...newQs]);
  const cardList = [...dueCards, ...newCards];
  const minutes = Math.max(1, Math.round(cardList.length * 0.3 + questions.length * 0.6));
  return { cards: cardList, questions, minutes };
}

function todayCta() {
  const s = buildTodaySession();
  const total = s.cards.length + s.questions.length;
  if (!total) {
    return `
      <a class="today-cta is-done" href="#/statistik">
        <span class="today-icon">${icon("check")}</span>
        <span class="quick-body"><strong>Für heute alles erledigt</strong><small>Morgen warten neue Wiederholungen auf dich.</small></span>
      </a>`;
  }
  return `
    <a class="today-cta" href="#/heute">
      <span class="today-icon">${icon("play")}</span>
      <span class="quick-body">
        <strong>Heute dran</strong>
        <small>${plural(s.cards.length, "Karte", "Karten")} · ${plural(s.questions.length, "Frage", "Fragen")} · ca. ${s.minutes} Min.</small>
      </span>
      <span class="today-go">Los ${icon("arrowRight")}</span>
    </a>`;
}

function viewToday() {
  const s = buildTodaySession();
  return {
    title: "Heute dran",
    back: "#/",
    crumbs: [{ label: "Start", href: "#/" }, { label: "Heute dran" }],
    html: `
      ${pageHead({
        eyebrow: "Tägliche Lernrunde",
        title: "Heute dran",
        text: `Fällige Wiederholungen, ein paar neue Inhalte und deine Fehler, gemischt aus allen Themen. Ca. ${s.minutes} Minuten.`,
        color: "#2563eb"
      })}
      <nav class="tabs today-tabs" style="--c:#2563eb;">
        <button class="tab is-active" type="button" data-step="karten">${icon("cards")}<span>1 · Karten</span><small>${s.cards.length}</small></button>
        <button class="tab" type="button" data-step="fragen">${icon("quiz")}<span>2 · Fragen</span><small>${s.questions.length}</small></button>
      </nav>
      <section id="todayCards"></section>
      <section id="todayQuestions" hidden></section>`,
    mount(root) {
      const cardsEl = root.querySelector("#todayCards");
      const questionsEl = root.querySelector("#todayQuestions");
      const tabs = root.querySelectorAll("[data-step]");
      const show = (step) => {
        tabs.forEach((t) => t.classList.toggle("is-active", t.dataset.step === step));
        cardsEl.hidden = step !== "karten";
        questionsEl.hidden = step !== "fragen";
      };
      tabs.forEach((t) => t.addEventListener("click", () => show(t.dataset.step)));
      mountDeck(cardsEl, s.cards, {
        session: true,
        color: "#2563eb",
        onDone: () => {
          if (s.questions.length) {
            cardsEl.insertAdjacentHTML(
              "beforeend",
              `<div class="quiz-nav"><span></span><button class="btn btn-primary" type="button" data-go-questions>Weiter zu den Fragen ${icon("arrowRight")}</button></div>`
            );
            const go = cardsEl.querySelector("[data-go-questions]");
            if (go) go.addEventListener("click", () => show("fragen"));
          }
        }
      });
      if (s.questions.length) mountQuiz(questionsEl, s.questions, { color: "#2563eb" });
      else questionsEl.innerHTML = `<div class="empty small">Heute keine Fragen fällig.</div>`;
      if (!s.cards.length && s.questions.length) show("fragen");
    }
  };
}

/* ==========================================================================
   Router
   ========================================================================== */

function currentRoute() {
  return location.hash
    .replace(/^#\/?/, "")
    .split("/")
    .filter(Boolean)
    .map((part) => decodeURIComponent(part));
}

function render() {
  const route = currentRoute();
  let view;

  try {
    if (!route.length) view = viewHome();
    else if (route[0] === "weiterbildung") view = viewWeiterbildung(route.slice(1));
    else if (route[0] === "thema") view = viewThema(route[1], route[2]);
    else if (route[0] === "fehler") view = viewMistakes();
    else if (route[0] === "suche") view = viewSearch(route[1] || "");
    else if (route[0] === "statistik") view = viewStats();
    else if (route[0] === "heute") view = viewToday();
    else view = viewNotFound();
  } catch (error) {
    console.error(error);
    view = {
      crumbs: [],
      back: "#/",
      html: `<div class="empty"><h2>Da ist etwas schiefgelaufen.</h2><p>${esc(error.message)}</p></div>`
    };
  }

  view = view || viewNotFound();
  const isLearningPage = (route[0] === "weiterbildung" && route[1] === "modul") || (route[0] === "thema" && route[2]);
  if (isLearningPage && view.title && view.title !== "Nicht gefunden") {
    saveJSON(LAST_KEY, { hash: location.hash, label: view.title, sub: view.lastSub || "" });
  }
  renderChrome(view);
  closeOverlay();
  stopSpeaking();
  const crumbs = view.crumbs || [];
  const backLabel = crumbs.length >= 2 ? crumbs[crumbs.length - 2].label : "Start";
  appEl.innerHTML =
    view.html +
    (view.back ? `<a class="page-back" href="${view.back}">${icon("arrowLeft")} Zurück zu ${esc(backLabel)}</a>` : "");
  appEl.classList.remove("is-entering");
  void appEl.offsetWidth;
  appEl.classList.add("is-entering");
  if (typeof view.mount === "function") view.mount(appEl);
  document.title = view.title ? `${view.title} · Lernwelt` : "Lernwelt";
  window.scrollTo(0, 0);
}

function renderChrome(view) {
  const crumbs = view.crumbs || [];
  backEl.hidden = !view.back;
  backEl.href = view.back || "#/";
  crumbsEl.innerHTML = crumbs.length
    ? crumbs
        .map((c, i) =>
          i === crumbs.length - 1
            ? `<span class="crumb is-current">${esc(c.label)}</span>`
            : `<a class="crumb" href="${c.href}">${esc(c.label)}</a>`
        )
        .join('<span class="crumb-sep">/</span>')
    : `<span class="brand">${icon("sparkle")} Lernwelt</span>`;
}

function viewNotFound() {
  return {
    title: "Nicht gefunden",
    back: "#/",
    crumbs: [{ label: "Start", href: "#/" }, { label: "Nicht gefunden" }],
    html: `<div class="empty"><h2>Diese Seite gibt es nicht.</h2><p><a href="#/">Zur Startseite</a></p></div>`
  };
}

/* ---------- Gemeinsame Bausteine ---------- */

function tile({ href, title, text, meta, iconName, color }) {
  const c = color || "#2563eb";
  return `
    <a class="tile" href="${href}" style="--c:${c}; --c-soft:${hexToSoft(c)};">
      <span class="tile-icon">${icon(iconName)}</span>
      <span class="tile-body">
        <strong>${esc(title)}</strong>
        ${text ? `<span class="tile-text">${esc(text)}</span>` : ""}
        ${meta ? `<span class="tile-meta">${esc(meta)}</span>` : ""}
      </span>
      <span class="tile-arrow">${icon("arrowRight")}</span>
    </a>`;
}

function pageHead({ eyebrow, title, text, color, aside = "" }) {
  return `
    <header class="page-head" style="--c:${color || "#2563eb"}; --c-soft:${hexToSoft(color || "#2563eb")};">
      <div>
        ${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ""}
        <h1>${title}</h1>
        ${text ? `<p class="lead">${text}</p>` : ""}
      </div>
      ${aside}
    </header>`;
}

/* ==========================================================================
   Startseite
   ========================================================================== */

function viewHome() {
  const questionTotal = wbModules.reduce((sum, m) => sum + m.questions.length, 0);
  const cardTotal = wbModules.reduce((sum, m) => sum + m.flashcards.length, 0);

  const cards = [
    topicCard({
      href: "#/weiterbildung",
      title: WEITERBILDUNG.titel,
      subtitle: WEITERBILDUNG.untertitel,
      text: "Alle Module mit Quiz, Karteikarten, Übungen, Zufallsmodus und Prüfungssimulation.",
      color: WEITERBILDUNG.farbe,
      iconName: "book",
      chips: [`${wbModules.length} Module`, `${questionTotal} Fragen`, `${cardTotal} Karten`],
      progress: wbModules.length ? learnedModules.size / wbModules.length : 0
    }),
    ...themen.map((t) =>
      topicCard({
        href: `#/thema/${encodeURIComponent(t.id)}`,
        title: t.titel,
        subtitle: t.untertitel,
        text: t.beschreibung,
        color: t.farbe || "#0f766e",
        iconName: "sparkle",
        chips: themaSections(t).map((s) => s.short)
      })
    )
  ].join("");

  const last = loadJSON(LAST_KEY, null);
  const mistakeCount = mistakeEntries().length;
  const quickLinks = [
    last && last.hash
      ? `<a class="quick" href="${esc(last.hash)}" style="--c:#2563eb;">
           <span class="quick-icon">${icon("play")}</span>
           <span class="quick-body"><small>Weiterlernen</small><strong>${esc(last.label)}</strong></span>
           <span class="tile-arrow">${icon("arrowRight")}</span>
         </a>`
      : "",
    mistakeCount
      ? `<a class="quick" href="#/fehler" style="--c:#c2410c;">
           <span class="quick-icon">${icon("target")}</span>
           <span class="quick-body"><small>Meine Fehler</small><strong>${plural(mistakeCount, "Frage", "Fragen")} wiederholen</strong></span>
           <span class="tile-arrow">${icon("arrowRight")}</span>
         </a>`
      : ""
  ].join("");

  return {
    title: "",
    crumbs: [],
    back: null,
    html: `
      <section class="home-intro">
        <p class="eyebrow">Meine Lernwelt</p>
        <h1>Was lernst du heute?</h1>
        <p class="lead">Wähle ein Thema. Dahinter findest du alles, was dazu gehört.</p>
      </section>
      ${todayCta()}
      ${streakStrip()}
      ${quickLinks ? `<div class="quick-row">${quickLinks}</div>` : ""}
      <div class="topic-grid">${cards}</div>
      <nav class="home-footer">
        <a href="#/statistik">${icon("chart")} Statistik &amp; Sicherung</a>
        <a href="#/suche">${icon("search")} Suche</a>
      </nav>`
  };
}

function topicCard({ href, title, subtitle, text, color, iconName, chips = [], progress = null }) {
  const progressMarkup =
    progress === null
      ? ""
      : `<span class="topic-progress" aria-label="Fortschritt"><span style="width:${Math.round(progress * 100)}%"></span></span>`;
  return `
    <a class="topic-card" href="${href}" style="--c:${color}; --c-soft:${hexToSoft(color, 0.14)};">
      <span class="topic-banner">
        <span class="topic-icon">${icon(iconName)}</span>
        <span class="topic-go">Öffnen ${icon("arrowRight")}</span>
      </span>
      <span class="topic-body">
        ${subtitle ? `<span class="topic-sub">${esc(subtitle)}</span>` : ""}
        <strong class="topic-title">${esc(title)}</strong>
        ${text ? `<span class="topic-text">${esc(text)}</span>` : ""}
        ${chips.length ? `<span class="chips">${chips.map((c) => `<span class="chip">${esc(c)}</span>`).join("")}</span>` : ""}
        ${progressMarkup}
      </span>
    </a>`;
}

/* ==========================================================================
   Weiterbildung 2025 Ecomex
   ========================================================================== */

function wbCrumbs(...extra) {
  return [{ label: "Start", href: "#/" }, { label: WEITERBILDUNG.titel, href: "#/weiterbildung" }, ...extra];
}

function viewWeiterbildung(rest) {
  const [section, id, tab] = rest;
  if (!section) return viewWbHub();
  if (section === "module") return viewWbModules();
  if (section === "modul") return viewWbModule(Number(id), tab || "quiz");
  if (section === "zufall") return viewWbRandom();
  if (section === "pruefung") return viewWbExam();
  return viewNotFound();
}

function viewWbHub() {
  const questionTotal = wbModules.reduce((sum, m) => sum + m.questions.length, 0);
  const cardTotal = wbModules.reduce((sum, m) => sum + m.flashcards.length, 0);
  const stats = [
    [wbModules.length, "Module"],
    [questionTotal, "Fragen"],
    [cardTotal, "Karteikarten"],
    [`${learnedModules.size}/${wbModules.length}`, "gelernt"]
  ]
    .map(([n, l]) => `<div class="stat"><strong>${n}</strong><span>${l}</span></div>`)
    .join("");

  return {
    title: WEITERBILDUNG.titel,
    back: "#/",
    crumbs: [{ label: "Start", href: "#/" }, { label: WEITERBILDUNG.titel }],
    html: `
      ${pageHead({
        eyebrow: WEITERBILDUNG.untertitel,
        title: WEITERBILDUNG.titel,
        text: "Lerne Modul für Modul oder teste dich quer durch alle Themen.",
        color: WEITERBILDUNG.farbe
      })}
      <div class="stats">${stats}</div>
      <div class="tile-grid">
        ${tile({ href: "#/weiterbildung/module", title: "Module", text: "Quiz, Karteikarten, Übungen und Lerntipps je Modul", meta: plural(wbModules.length, "Modul", "Module"), iconName: "grid", color: "#2563eb" })}
        ${tile({ href: "#/weiterbildung/zufall", title: "Zufallsmodus", text: `${RANDOM_QUESTION_COUNT} Fragen und ${RANDOM_CARD_COUNT} Karten aus allen Modulen`, meta: "Gemischt wiederholen", iconName: "shuffle", color: "#7c3aed" })}
        ${tile({ href: "#/weiterbildung/pruefung", title: "Prüfungsmodus", text: `${EXAM_QUESTION_COUNT} Fragen, bestanden ab ${EXAM_PASS_PERCENTAGE} %`, meta: "Mit Fehleranalyse", iconName: "award", color: "#0f766e" })}
      </div>`
  };
}

function viewWbModules() {
  const cards = wbModules
    .map((m) => {
      const done = learnedModules.has(m.id);
      return `
        <a class="module-tile ${done ? "is-done" : ""}" href="#/weiterbildung/modul/${m.id}" style="--c:${m.color}; --c-soft:${m.softColor};">
          <span class="module-num">${m.id}</span>
          <span class="module-info">
            <strong>${m.topic}</strong>
            <span>${m.questions.length} Fragen · ${m.flashcards.length} Karten</span>
          </span>
          ${done ? `<span class="module-done" title="Gelernt">${icon("check")}</span>` : `<span class="tile-arrow">${icon("arrowRight")}</span>`}
        </a>`;
    })
    .join("");

  return {
    title: "Module",
    back: "#/weiterbildung",
    crumbs: wbCrumbs({ label: "Module" }),
    html: `
      ${pageHead({ eyebrow: WEITERBILDUNG.titel, title: "Module", text: `${learnedModules.size} von ${wbModules.length} als gelernt markiert.`, color: WEITERBILDUNG.farbe })}
      <div class="module-grid">${cards}</div>`
  };
}

const MODULE_TABS = [
  { key: "quiz", label: "Quiz", iconName: "quiz" },
  { key: "karten", label: "Karteikarten", iconName: "cards" },
  { key: "uebungen", label: "Übungen", iconName: "pencil" },
  { key: "tipps", label: "Lerntipps", iconName: "bulb" }
];

function viewWbModule(id, tab) {
  const index = wbModules.findIndex((m) => m.id === id);
  const m = wbModules[index];
  if (!m) return viewNotFound();
  const activeTab = MODULE_TABS.some((t) => t.key === tab) ? tab : "quiz";
  const done = learnedModules.has(m.id);
  const counts = { quiz: m.questions.length, karten: m.flashcards.length, uebungen: m.exercises.length, tipps: m.tips.length };

  const tabs = MODULE_TABS.map(
    (t) => `
      <a class="tab ${t.key === activeTab ? "is-active" : ""}" href="#/weiterbildung/modul/${m.id}/${t.key}">
        ${icon(t.iconName)}<span>${t.label}</span><small>${counts[t.key]}</small>
      </a>`
  ).join("");

  let body = "";
  if (activeTab === "uebungen") {
    body = `<div class="stack">${m.exercises
      .map((ex, i) => {
        const e = typeof ex === "string" ? { title: `Übung ${i + 1}`, text: ex } : ex;
        return `<article class="card exercise"><h3>${e.title}</h3><p>${e.text}</p></article>`;
      })
      .join("")}</div>`;
  } else if (activeTab === "tipps") {
    body = `<article class="card"><ul class="tips">${m.tips.map((t) => `<li>${t}</li>`).join("")}</ul></article>`;
  } else {
    body = `<div id="tabMount"></div>`;
  }

  const prev = wbModules[index - 1];
  const next = wbModules[index + 1];
  const pager = `
    <nav class="pager">
      ${prev ? `<a class="pager-link" href="#/weiterbildung/modul/${prev.id}/${activeTab}"><small>Vorheriges</small><span>${prev.topic}</span></a>` : "<span></span>"}
      ${next ? `<a class="pager-link is-next" href="#/weiterbildung/modul/${next.id}/${activeTab}"><small>Nächstes</small><span>${next.topic}</span></a>` : "<span></span>"}
    </nav>`;

  return {
    title: m.topic,
    back: "#/weiterbildung/module",
    crumbs: wbCrumbs({ label: "Module", href: "#/weiterbildung/module" }, { label: `Modul ${m.id}` }),
    html: `
      ${pageHead({
        eyebrow: `Modul ${m.id}`,
        title: m.topic,
        text: m.summary,
        color: m.color,
        aside: `<button class="btn ${done ? "btn-soft" : "btn-primary"}" id="learnedToggle" type="button">${done ? `${icon("check")} Gelernt` : "Als gelernt markieren"}</button>`
      })}
      <nav class="tabs" style="--c:${m.color}; --c-soft:${m.softColor};">${tabs}</nav>
      <section class="tab-body">${body}</section>
      ${pager}`,
    mount(root) {
      root.querySelector("#learnedToggle").addEventListener("click", () => {
        if (learnedModules.has(m.id)) learnedModules.delete(m.id);
        else learnedModules.add(m.id);
        saveJSON(LEARNED_KEY, [...learnedModules]);
        render();
      });
      const mountEl = root.querySelector("#tabMount");
      if (!mountEl) return;
      if (activeTab === "quiz") {
        mountQuiz(mountEl, m.questions.map((q) => ({ q: normalizeQuestion(q), color: m.color })), { color: m.color });
      } else {
        mountDeck(mountEl, m.flashcards.map((c) => ({ front: c.front, back: c.back })), {
          key: `modul-${m.id}`,
          color: m.color,
          soft: m.softColor
        });
      }
    }
  };
}

function viewWbRandom() {
  return {
    title: "Zufallsmodus",
    back: "#/weiterbildung",
    crumbs: wbCrumbs({ label: "Zufallsmodus" }),
    html: `
      ${pageHead({
        eyebrow: WEITERBILDUNG.titel,
        title: "Zufallsmodus",
        text: "Gemischte Lernrunde über alle Module. Jede Frage und Karte zeigt, woher sie stammt.",
        color: "#7c3aed",
        aside: `<button class="btn btn-soft" id="reshuffle" type="button">${icon("shuffle")} Neu mischen</button>`
      })}
      <div class="split">
        <section><h2 class="section-title">${icon("quiz")} ${RANDOM_QUESTION_COUNT} Zufallsfragen</h2><div id="randomQuiz"></div></section>
        <section><h2 class="section-title">${icon("cards")} ${RANDOM_CARD_COUNT} Zufallskarten</h2><div id="randomDeck"></div></section>
      </div>`,
    mount(root) {
      const fill = () => {
        const pool = [];
        const cards = [];
        readyModules().forEach((m) => {
          m.questions.forEach((q) => pool.push({ q: normalizeQuestion(q), label: m.title, color: m.color }));
          m.flashcards.forEach((c) => cards.push({ front: c.front, back: c.back, label: m.title, color: m.color, soft: m.softColor }));
        });
        mountQuiz(root.querySelector("#randomQuiz"), sample(pool, RANDOM_QUESTION_COUNT), { color: "#7c3aed", onReshuffle: fill });
        mountDeck(root.querySelector("#randomDeck"), sample(cards, RANDOM_CARD_COUNT), { color: "#7c3aed" });
      };
      root.querySelector("#reshuffle").addEventListener("click", fill);
      fill();
    }
  };
}

/* ---------- Prüfungsmodus ---------- */

function viewWbExam() {
  return {
    title: "Prüfungsmodus",
    back: "#/weiterbildung",
    crumbs: wbCrumbs({ label: "Prüfungsmodus" }),
    html: `
      ${pageHead({
        eyebrow: WEITERBILDUNG.titel,
        title: "Prüfungsmodus",
        text: `${EXAM_QUESTION_COUNT} gemischte Fragen aus allen Modulen. Bestanden ab ${EXAM_PASS_PERCENTAGE} %. Offene Fragen sind nicht dabei, damit die Auswertung fair automatisch funktioniert.`,
        color: "#0f766e"
      })}
      <div id="examMount"></div>`,
    mount(root) {
      mountExam(root.querySelector("#examMount"));
    }
  };
}

function weiterbildungExamPool() {
  const pool = [];
  readyModules().forEach((m) =>
    m.questions
      .filter((q) => q.type === "single" || q.type === "multi")
      .forEach((q) => pool.push({ q: normalizeQuestion(q), title: m.title, color: m.color }))
  );
  return pool;
}

function mountExam(el, getPool = weiterbildungExamPool, count = EXAM_QUESTION_COUNT) {
  let questions = [];
  let selections = {};
  let result = null;

  const start = () => {
    questions = sample(getPool(), count);
    selections = {};
    result = null;
    draw();
    window.scrollTo(0, 0);
  };

  const evaluate = () => {
    const wrong = [];
    const byModule = new Map();
    let correct = 0;
    questions.forEach((entry, i) => {
      const sel = selections[i] || [];
      const isRight = sameSelection(sel, entry.q.correct);
      recordAnswer(entry.q, isRight);
      if (isRight) {
        correct += 1;
        return;
      }
      wrong.push({ entry, sel });
      byModule.set(entry.title, (byModule.get(entry.title) || 0) + 1);
    });
    const pct = questions.length ? Math.round((correct / questions.length) * 100) : 0;
    result = {
      correct,
      total: questions.length,
      pct,
      passed: pct >= EXAM_PASS_PERCENTAGE,
      wrong,
      wbModules: [...byModule.entries()].sort((a, b) => b[1] - a[1])
    };
    draw();
    el.querySelector(".exam-result")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const optionLabel = (q, indices) =>
    indices.length ? indices.map((i) => q.options[i]).filter(Boolean).join(" / ") : "Keine Antwort ausgewählt.";

  const draw = () => {
    const answered = Object.values(selections).filter((s) => s.length).length;
    const list = questions
      .map((entry, i) => {
        const sel = selections[i] || [];
        const options = entry.q.options
          .map((opt, oi) => {
            const cls = ["option"];
            if (sel.includes(oi)) cls.push("is-selected");
            if (result && entry.q.correct.includes(oi)) cls.push("is-correct");
            if (result && sel.includes(oi) && !entry.q.correct.includes(oi)) cls.push("is-wrong");
            return `<button class="${cls.join(" ")}" type="button" data-q="${i}" data-o="${oi}" ${result ? "disabled" : ""}>${opt}</button>`;
          })
          .join("");
        return `
          <article class="card question" style="--c:${entry.color};">
            <div class="q-meta"><span class="q-num">Frage ${i + 1}</span><span class="source" style="--c:${entry.color};">${entry.title}</span></div>
            <h3>${entry.q.prompt}</h3>
            <div class="options">${options}</div>
          </article>`;
      })
      .join("");

    let resultMarkup = "";
    if (result) {
      const hints = result.wbModules.length
        ? `<ul>${result.wbModules.map(([t, n]) => `<li><strong>${t}</strong>: ${plural(n, "Fehler", "Fehler")}</li>`).join("")}</ul>`
        : "<p>Du musst aktuell kein Modul gezielt nacharbeiten.</p>";
      const wrong = result.wrong
        .map(
          ({ entry, sel }, i) => `
            <article class="card review">
              <div class="q-meta"><span class="q-num">Fehler ${i + 1}</span><span class="source" style="--c:${entry.color};">${entry.title}</span></div>
              <h3>${entry.q.prompt}</h3>
              <p><strong>Deine Antwort:</strong> ${optionLabel(entry.q, sel)}</p>
              <p><strong>Richtig wäre:</strong> ${optionLabel(entry.q, entry.q.correct)}</p>
              ${entry.q.explanation ? `<p class="explain">${entry.q.explanation}</p>` : ""}
            </article>`
        )
        .join("");
      resultMarkup = `
        <section class="exam-result">
          <div class="result-banner ${result.passed ? "is-pass" : "is-fail"}">
            <span class="result-score">${result.pct} %</span>
            <div>
              <strong>${result.passed ? "Bestanden" : "Nicht bestanden"}</strong>
              <p>${result.correct} von ${result.total} richtig. ${result.passed ? "Du liegst über der Bestehensgrenze." : `Zum Bestehen brauchst du ${EXAM_PASS_PERCENTAGE} %.`}</p>
            </div>
            <button class="btn btn-primary" type="button" data-action="restart">${icon("shuffle")} Neue Prüfung</button>
          </div>
          <article class="card"><h3>Nochmal anschauen</h3>${hints}</article>
          ${wrong}
        </section>`;
    }

    el.innerHTML = `
      ${resultMarkup}
      <div class="stack">${list}</div>
      ${
        result
          ? `<div class="sticky-action"><button class="btn btn-primary" type="button" data-action="restart">${icon("shuffle")} Neue Prüfung mit anderen Fragen</button></div>`
          : `<div class="sticky-action"><span class="sticky-info">${answered} von ${questions.length} beantwortet</span><button class="btn btn-primary" type="button" data-action="submit">Prüfung auswerten</button></div>`
      }`;
  };

  el.addEventListener("click", (event) => {
    const btn = event.target.closest("button");
    if (!btn) return;
    if (btn.dataset.action === "submit") return evaluate();
    if (btn.dataset.action === "restart") return start();
    if (btn.dataset.q !== undefined && !result) {
      const qi = Number(btn.dataset.q);
      const oi = Number(btn.dataset.o);
      const q = questions[qi].q;
      const sel = selections[qi] || [];
      if (q.type === "single") selections[qi] = [oi];
      else selections[qi] = sel.includes(oi) ? sel.filter((v) => v !== oi) : [...sel, oi].sort((a, b) => a - b);
      draw();
    }
  });

  start();
}

/* ==========================================================================
   Quiz (eine Frage nach der anderen)
   ========================================================================== */

function mountQuiz(el, rawItems, { color = "#2563eb", onReshuffle } = {}) {
  const base = rawItems.filter((item) => item.q);
  let items = base;
  let index = 0;
  let answers = {};

  if (!base.length) {
    el.innerHTML = `<div class="empty small">Noch keine Fragen hinterlegt.</div>`;
    return;
  }

  const restart = (list) => {
    items = list;
    index = 0;
    answers = {};
    draw();
  };

  const closedCount = () => items.filter((it) => it.q.type !== "open").length;
  const correctCount = () => Object.values(answers).filter((a) => a.checked && a.correct).length;

  const draw = () => {
    if (index >= items.length) return drawSummary();
    const item = items[index];
    const q = item.q;
    const a = answers[index] || { selected: [], checked: false, correct: false, revealed: false };
    const progress = Math.round((index / items.length) * 100);
    const source = item.label ? `<span class="source" style="--c:${item.color || color};">${item.label}</span>` : "";

    let body = "";
    let actions = "";
    if (q.type === "open") {
      body = `
        <p class="hint">Offene Frage: Formuliere deine Antwort selbst, dann vergleiche.</p>
        ${a.revealed
          ? `${a.text && a.text.trim() ? `<div class="answer-box own"><strong>Deine Antwort</strong><p>${esc(a.text)}</p></div>` : ""}<div class="answer-box"><strong>Musterantwort</strong><p>${q.sample}</p></div>`
          : `<textarea class="own-answer" data-own rows="3" placeholder="Deine Antwort (optional) …">${esc(a.text || "")}</textarea>`}`;
      actions = a.revealed
        ? `<button class="btn btn-primary" data-action="next" type="button">Weiter ${icon("arrowRight")}</button>`
        : `<button class="btn btn-primary" data-action="reveal" type="button">Musterantwort zeigen</button>`;
    } else {
      body = `<div class="options">${q.options
        .map((opt, oi) => {
          const cls = ["option"];
          if (a.selected.includes(oi)) cls.push("is-selected");
          if (a.checked && q.correct.includes(oi)) cls.push("is-correct");
          if (a.checked && a.selected.includes(oi) && !q.correct.includes(oi)) cls.push("is-wrong");
          return `<button class="${cls.join(" ")}" type="button" data-o="${oi}" ${a.checked ? "disabled" : ""}>${opt}</button>`;
        })
        .join("")}</div>
        ${
          a.checked
            ? `<div class="answer-box ${a.correct ? "is-pass" : "is-fail"}"><strong>${a.correct ? "Richtig!" : "Nicht ganz. Grün markiert ist die richtige Lösung."}</strong>${!a.correct && a.conf === "sicher" ? `<p class="conf-note">Sicherer Irrtum! Genau solche Fehler merkt man sich nach der Korrektur besonders gut. Lies die Erklärung in Ruhe.</p>` : ""}${a.correct && a.conf === "geraten" ? `<p class="conf-note">Gut geraten! Die Frage kommt bald nochmal, damit sie wirklich sitzt.</p>` : ""}${q.explanation ? `<p>${q.explanation}</p>` : ""}</div>`
            : `<p class="hint">Es können eine oder mehrere Antworten richtig sein.</p>${a.selected.length ? `<div class="conf"><span>Wie sicher bist du?</span>${[["geraten", "Geraten"], ["unsicher", "Unsicher"], ["sicher", "Sicher"]].map(([v, l]) => `<button type="button" data-conf="${v}" class="${a.conf === v ? "is-active" : ""}">${l}</button>`).join("")}</div>` : ""}`
        }`;
      actions = a.checked
        ? `<button class="btn btn-primary" data-action="next" type="button">${index === items.length - 1 ? "Auswertung" : "Weiter"} ${icon("arrowRight")}</button>`
        : `<button class="btn btn-primary" data-action="check" type="button" ${a.selected.length ? "" : "disabled"}>Ergebnis ansehen</button>`;
    }

    el.innerHTML = `
      <div class="quiz" style="--c:${color};">
        <div class="quiz-top">
          <span>Frage ${index + 1} von ${items.length}</span>
          <span class="quiz-top-right">
            <span class="quiz-score">${icon("check")} ${correctCount()} richtig</span>
            ${speakButton()}
          </span>
        </div>
        <div class="bar"><span style="width:${progress}%"></span></div>
        <article class="card question">
          ${source ? `<div class="q-meta">${source}</div>` : ""}
          <h3>${q.prompt}</h3>
          ${body}
        </article>
        <div class="quiz-nav">
          <button class="btn btn-ghost" data-action="prev" type="button" ${index === 0 ? "disabled" : ""}>Zurück</button>
          ${actions}
        </div>
      </div>`;
  };

  const drawSummary = () => {
    const total = closedCount();
    const right = correctCount();
    const pct = total ? Math.round((right / total) * 100) : 0;
    const wrongItems = items.filter((it, i) => it.q.type !== "open" && !(answers[i] && answers[i].correct));
    el.innerHTML = `
      <div class="quiz" style="--c:${color};">
        <div class="bar"><span style="width:100%"></span></div>
        <div class="result-banner ${pct >= EXAM_PASS_PERCENTAGE ? "is-pass" : "is-fail"}">
          <span class="result-score">${pct} %</span>
          <div><strong>Runde geschafft</strong><p>${right} von ${total} Auswahlfragen richtig.</p></div>
        </div>
        <div class="quiz-nav wrap">
          ${wrongItems.length ? `<button class="btn btn-primary" data-action="wrong" type="button">${plural(wrongItems.length, "Fehler", "Fehler")} wiederholen</button>` : ""}
          <button class="btn btn-soft" data-action="again" type="button">Nochmal von vorn</button>
          <button class="btn btn-ghost" data-action="shuffle" type="button">${icon("shuffle")} Neu mischen</button>
        </div>
      </div>`;
  };

  el.oninput = (event) => {
    if (!event.target.matches("[data-own]")) return;
    const a = answers[index] || (answers[index] = { selected: [], checked: false, correct: false, revealed: false });
    a.text = event.target.value;
  };

  el.onclick = (event) => {
    const btn = event.target.closest("button");
    if (!btn) return;
    const q = items[index] && items[index].q;
    const a = answers[index] || (answers[index] = { selected: [], checked: false, correct: false, revealed: false });

    if (btn.dataset.conf && q && !a.checked) {
      a.conf = a.conf === btn.dataset.conf ? "" : btn.dataset.conf;
      return draw();
    }
    if (btn.dataset.o !== undefined && q && !a.checked) {
      const oi = Number(btn.dataset.o);
      if (q.type === "single") a.selected = a.selected[0] === oi ? [] : [oi];
      else a.selected = a.selected.includes(oi) ? a.selected.filter((v) => v !== oi) : [...a.selected, oi];
      return draw();
    }
    switch (btn.dataset.action) {
      case "check":
        a.checked = true;
        a.correct = sameSelection(a.selected, q.correct);
        recordAnswer(q, a.correct, a.conf || "");
        return draw();
      case "reveal":
        a.revealed = true;
        return draw();
      case "speak": {
        const parts = [q.prompt];
        if (q.options) q.options.forEach((opt, oi) => parts.push(`Antwort ${oi + 1}: ${opt}`));
        if (a.checked && q.explanation) parts.push(q.explanation);
        if (a.revealed && q.sample) parts.push(`Musterantwort: ${q.sample}`);
        return toggleSpeak(parts.join(". "), btn);
      }
      case "next":
        index += 1;
        draw();
        return el.scrollIntoView({ behavior: "smooth", block: "start" });
      case "prev":
        index = Math.max(0, index - 1);
        return draw();
      case "again":
        return restart(items);
      case "wrong":
        return restart(items.filter((it, i) => it.q.type !== "open" && !(answers[i] && answers[i].correct)));
      case "shuffle":
        if (onReshuffle) return onReshuffle();
        return restart(shuffle(base));
      default:
    }
  };

  draw();
}

/* ==========================================================================
   Karteikarten
   ========================================================================== */

function mountDeck(el, cards, { key = null, color = "#2563eb", soft = null, session = false, onDone = null } = {}) {
  if (!cards.length) {
    el.innerHTML = session
      ? `<div class="empty small">Heute keine Karten fällig. ${icon("check")}</div>`
      : `<div class="empty small">Noch keine Karteikarten hinterlegt.</div>`;
    return;
  }
  ensureSrsMigrated();

  const ids = cards.map(cardId);
  const dueIndices = () => cards.map((_, i) => i).filter((i) => isDue(ids[i]));
  let mode = session ? "lernen" : dueIndices().length ? "lernen" : "alle";
  let order = [];
  let pos = 0;
  let flipped = false;
  let writing = false;
  let ownAnswer = "";

  const buildOrder = () => {
    order = session ? cards.map((_, i) => i) : mode === "lernen" ? dueIndices() : cards.map((_, i) => i);
    pos = 0;
    if (!session && mode === "alle" && key && deckState[key] && deckState[key].index < order.length) pos = deckState[key].index;
  };
  buildOrder();

  const persist = () => {
    if (!key || mode !== "alle" || session) return;
    deckState[key] = { index: pos };
    saveJSON(DECK_KEY, deckState);
  };

  const knownCount = () => ids.filter((id) => knownCards.has(id)).length;

  const header = () => {
    if (session) return "";
    const due = dueIndices().length;
    return `
      <div class="deck-head">
        <div class="seg" role="tablist">
          <button type="button" class="${mode === "lernen" ? "is-active" : ""}" data-mode="lernen">Zu lernen <small>${due}</small></button>
          <button type="button" class="${mode === "alle" ? "is-active" : ""}" data-mode="alle">Alle <small>${cards.length}</small></button>
        </div>
        <span class="deck-known">${icon("check")} ${knownCount()} gewusst</span>
      </div>`;
  };

  const actionsHtml = () => {
    const i = order[pos];
    if (!flipped) {
      return `
        ${
          writing
            ? `<textarea class="own-answer" data-own rows="3" placeholder="Deine Antwort in eigenen Worten …">${esc(ownAnswer)}</textarea>`
            : `<button class="link-btn" type="button" data-action="write">${icon("pencil")} Erst selbst antworten</button>`
        }
        <button class="btn btn-primary btn-wide" type="button" data-action="flip">Umdrehen</button>`;
    }
    const id = ids[i];
    const rate = (r, label, cls) =>
      `<button class="btn rate ${cls}" type="button" data-rate="${r}"><strong>${label}</strong><small>${daysLabel(previewDays(id, r))}</small></button>`;
    return `
      ${ownAnswer.trim() ? `<div class="answer-box own"><strong>Deine Antwort</strong><p>${esc(ownAnswer)}</p></div>` : ""}
      <p class="hint center">Wie gut wusstest du es?</p>
      <div class="rates">
        ${rate(1, "Nochmal", "rate-1")}
        ${rate(2, "Schwer", "rate-2")}
        ${rate(3, "Gut", "rate-3")}
        ${rate(4, "Leicht", "rate-4")}
      </div>`;
  };

  const drawActions = () => {
    const box = el.querySelector(".deck-actions");
    if (box) box.innerHTML = actionsHtml();
    const area = el.querySelector("[data-own]");
    if (area && writing && !flipped) area.focus();
  };

  const draw = () => {
    if (!order.length) {
      const next = nextDueLabel(ids);
      el.innerHTML = `
        <div class="deck" style="--c:${color}; --c-soft:${soft || hexToSoft(color, 0.14)};">
          ${header()}
          <div class="result-banner is-pass">
            <span class="result-score">${icon("check")}</span>
            <div><strong>${session ? "Karten für heute geschafft!" : "Alles gelernt, was heute dran ist!"}</strong><p>${next ? `Nächste Wiederholung: ${next}.` : "Stark."}</p></div>
          </div>
          ${session ? "" : `<div class="quiz-nav wrap"><button class="btn btn-soft" type="button" data-mode="alle">Alle Karten ansehen</button></div>`}
        </div>`;
      if (session && onDone) onDone();
      return;
    }

    const i = order[pos];
    const card = cards[i];
    const c = card.color || color;
    const s = card.soft || soft || hexToSoft(c, 0.14);
    const entry = srs[ids[i]];
    const status = !entry ? "Neu" : `Fach ${entry.box} von 5`;
    el.innerHTML = `
      <div class="deck" style="--c:${c}; --c-soft:${s};">
        ${header()}
        <div class="quiz-top">
          <span>Karte ${pos + 1} von ${order.length}</span>
          <span class="quiz-top-right">
            ${card.label ? `<span class="source" style="--c:${c};">${card.label}</span>` : ""}
            ${speakButton()}
          </span>
        </div>
        <div class="bar"><span style="width:${Math.round(((pos + 1) / order.length) * 100)}%"></span></div>
        <button class="flip ${flipped ? "is-flipped" : ""}" type="button" data-action="flip" aria-label="Karte umdrehen">
          <span class="flip-inner">
            <span class="flip-face flip-front"><small>Begriff · ${status}</small><strong>${card.front}</strong><em>Tippen zum Umdrehen</em></span>
            <span class="flip-face flip-back"><small>Erklärung</small><span>${card.back}</span></span>
          </span>
        </button>
        <div class="deck-actions">${actionsHtml()}</div>
        <div class="deck-nav">
          <button class="btn btn-ghost" data-action="prev" type="button">Zurück</button>
          <button class="btn btn-ghost" data-action="shuffle" type="button">${icon("shuffle")} Mischen</button>
          <button class="btn btn-ghost" data-action="next" type="button">Überspringen</button>
        </div>
      </div>`;
  };

  const resetCard = () => {
    flipped = false;
    writing = false;
    ownAnswer = "";
  };

  el.oninput = (event) => {
    if (event.target.matches("[data-own]")) ownAnswer = event.target.value;
  };

  el.onclick = (event) => {
    const btn = event.target.closest("button");
    if (!btn) return;
    if (btn.dataset.mode) {
      mode = btn.dataset.mode;
      resetCard();
      buildOrder();
      return draw();
    }
    const i = order[pos];
    if (btn.dataset.rate) {
      const r = Number(btn.dataset.rate);
      srsRate(ids[i], r);
      trackActivity("karte");
      if (r >= 3) knownCards.add(ids[i]);
      if (r === 1) knownCards.delete(ids[i]);
      saveJSON(KNOWN_KEY, [...knownCards]);
      if (mode === "lernen" || session) {
        order.splice(pos, 1);
        if (r === 1) order.push(i);
        if (pos >= order.length) pos = 0;
      } else {
        pos = (pos + 1) % order.length;
      }
      resetCard();
      persist();
      return draw();
    }
    switch (btn.dataset.action) {
      case "flip":
        flipped = !flipped;
        el.querySelector(".flip").classList.toggle("is-flipped", flipped);
        return drawActions();
      case "write":
        writing = true;
        return drawActions();
      case "speak":
        return toggleSpeak(flipped ? cards[i].back : cards[i].front, btn);
      case "prev":
        pos = (pos - 1 + order.length) % order.length;
        break;
      case "next":
        pos = (pos + 1) % order.length;
        break;
      case "shuffle":
        order = shuffle(order);
        pos = 0;
        break;
      default:
        return;
    }
    resetCard();
    persist();
    draw();
  };

  draw();
}

/* ==========================================================================
   Meine Fehler & Suche
   ========================================================================== */

function viewMistakes() {
  const entries = mistakeEntries();
  return {
    title: "Meine Fehler",
    back: "#/",
    crumbs: [{ label: "Start", href: "#/" }, { label: "Meine Fehler" }],
    html: `
      ${pageHead({
        eyebrow: "Wiederholen",
        title: "Meine Fehler",
        text: entries.length
          ? `${plural(entries.length, "Frage", "Fragen")}, die du zuletzt falsch beantwortet hast. Beantwortest du eine richtig, verschwindet sie von dieser Liste.`
          : "Aktuell keine offenen Fehler. Falsch beantwortete Fragen aus Quiz und Prüfung landen automatisch hier.",
        color: "#c2410c"
      })}
      <div id="mistakeMount"></div>`,
    mount(root) {
      if (!entries.length) {
        root.querySelector("#mistakeMount").innerHTML = `<div class="empty"><h2>Alles sauber.</h2><p><a href="#/">Zur Startseite</a></p></div>`;
        return;
      }
      mountQuiz(root.querySelector("#mistakeMount"), shuffle(entries), { color: "#c2410c" });
    }
  };
}

function viewSearch(rawQuery) {
  const query = rawQuery.trim();
  return {
    title: "Suche",
    back: "#/",
    crumbs: [{ label: "Start", href: "#/" }, { label: "Suche" }],
    html: `
      <form class="search-box" id="searchForm" role="search">
        ${icon("search")}
        <input id="searchInput" type="search" placeholder="Begriff suchen, z. B. E-E-A-T, Conversion, DSGVO …" value="${esc(query)}" autocomplete="off" enterkeyhint="search" />
      </form>
      <div id="searchResults"></div>`,
    mount(root) {
      const input = root.querySelector("#searchInput");
      const results = root.querySelector("#searchResults");
      let timer = null;

      const run = () => {
        const q = input.value.trim();
        history.replaceState(null, "", q ? `#/suche/${encodeURIComponent(q)}` : "#/suche");
        results.innerHTML = renderSearchResults(q);
      };

      root.querySelector("#searchForm").addEventListener("submit", (event) => {
        event.preventDefault();
        input.blur();
        run();
      });
      input.addEventListener("input", () => {
        clearTimeout(timer);
        timer = setTimeout(run, 180);
      });
      results.innerHTML = renderSearchResults(query);
      if (!query) input.focus();
    }
  };
}

const SEARCH_LIMIT = 40;

function renderSearchResults(query) {
  const terms = foldText(query).split(" ").filter((t) => t.length > 1);
  if (!terms.length) {
    return `<p class="hint">Durchsucht alle Karteikarten und Fragen aus der Weiterbildung und deinen Themen.</p>`;
  }
  const matches = (text) => {
    const folded = foldText(text);
    return terms.every((t) => folded.includes(t));
  };

  const cards = allCards().filter((c) => matches(`${c.front} ${c.back}`));
  const questions = allQuestions().filter((e) =>
    matches(`${e.q.prompt} ${(e.q.options || []).join(" ")} ${e.q.explanation || ""} ${e.q.sample || ""}`)
  );

  if (!cards.length && !questions.length) {
    return `<div class="empty small">Nichts gefunden für „${esc(query)}“.</div>`;
  }

  const cardMarkup = cards
    .slice(0, SEARCH_LIMIT)
    .map(
      (c) => `
        <details class="card hit">
          <summary>
            <span class="q-meta"><span class="source" style="--c:${c.color};">${c.label}</span></span>
            <strong>${c.front}</strong>
          </summary>
          <p>${c.back}</p>
          <a class="hit-link" href="${c.href}">Zu den Karteikarten ${icon("arrowRight")}</a>
        </details>`
    )
    .join("");

  const questionMarkup = questions
    .slice(0, SEARCH_LIMIT)
    .map((e) => {
      const q = e.q;
      const answer =
        q.type === "open"
          ? q.sample
          : `<strong>Richtig:</strong> ${q.correct.map((i) => q.options[i]).join(" / ")}${q.explanation ? `<br />${q.explanation}` : ""}`;
      return `
        <details class="card hit">
          <summary>
            <span class="q-meta"><span class="source" style="--c:${e.color};">${e.label}</span></span>
            <strong>${q.prompt}</strong>
          </summary>
          <p>${answer}</p>
          <a class="hit-link" href="${e.href}">Zum Quiz ${icon("arrowRight")}</a>
        </details>`;
    })
    .join("");

  const more = (n) => (n > SEARCH_LIMIT ? `<p class="hint">… und ${n - SEARCH_LIMIT} weitere. Grenze die Suche mit einem zweiten Begriff ein.</p>` : "");

  return `
    ${cards.length ? `<h2 class="section-title">${icon("cards")} Karteikarten <small class="count">${cards.length}</small></h2><div class="stack">${cardMarkup}</div>${more(cards.length)}` : ""}
    ${questions.length ? `<h2 class="section-title spaced">${icon("quiz")} Fragen <small class="count">${questions.length}</small></h2><div class="stack">${questionMarkup}</div>${more(questions.length)}` : ""}`;
}

/* ==========================================================================
   Themen-Bereiche (NotebookLM-Pakete u. ä.)
   ========================================================================== */

const THEMA_SECTIONS = [
  { key: "audio", title: "Audio-Zusammenfassung", short: "Audio", iconName: "headphones", color: "#2563eb", items: (t) => t.audio || [] },
  { key: "kurzvideo", title: "Kurzvideo", short: "Kurzvideo", iconName: "play", color: "#dc2626", items: (t) => (t.videos || []).filter((v) => v.art === "kurz") },
  { key: "videouebersicht", title: "Videoübersicht", short: "Videoübersicht", iconName: "film", color: "#059669", items: (t) => (t.videos || []).filter((v) => v.art !== "kurz") },
  { key: "praesentation", title: "Präsentation", short: "Präsentation", iconName: "slides", color: "#db2777", items: (t) => t.praesentationen || [] },
  { key: "mindmap", title: "Mindmap", short: "Mindmap", iconName: "mindmap", color: "#7c3aed", items: (t) => t.mindmaps || [] },
  { key: "lernkarten", title: "Lernkarten", short: "Lernkarten", iconName: "cards", color: "#ea580c", items: (t) => t.lernkarten || [] },
  { key: "quiz", title: "Quiz", short: "Quiz", iconName: "quiz", color: "#0891b2", items: (t) => t.quiz || [] },
  {
    key: "pruefung",
    title: "Prüfung",
    short: "Prüfung",
    iconName: "award",
    color: "#0f766e",
    items: (t) => {
      const closed = (t.quiz || []).filter((q) => Array.isArray(q.optionen) && q.optionen.length);
      return closed.length >= 5 ? closed : [];
    }
  },
  { key: "tabelle", title: "Datentabelle", short: "Tabelle", iconName: "table", color: "#4f46e5", items: (t) => t.tabellen || [] },
  { key: "berichte", title: "Berichte", short: "Berichte", iconName: "report", color: "#475569", items: (t) => t.berichte || [] }
];

function themaSections(t) {
  return THEMA_SECTIONS.filter((s) => s.items(t).length);
}

function sectionMeta(section, items) {
  switch (section.key) {
    case "lernkarten":
      return plural(items.length, "Karte", "Karten");
    case "quiz":
      return plural(items.length, "Frage", "Fragen");
    case "pruefung":
      return `${Math.min(items.length, EXAM_QUESTION_COUNT)} Fragen, ab ${EXAM_PASS_PERCENTAGE} %`;
    case "tabelle":
      return items.length === 1 ? `${(items[0].zeilen || []).length} Zeilen` : plural(items.length, "Tabelle", "Tabellen");
    default: {
      const dauer = items.length === 1 && items[0].dauer ? items[0].dauer : "";
      if (dauer) return dauer;
      return items.length === 1 ? esc(items[0].titel || "") : `${items.length} Einträge`;
    }
  }
}

function themaFile(t, datei) {
  return `themen/${encodeURIComponent(t.id)}/${String(datei).split("/").map(encodeURIComponent).join("/")}`;
}

function viewThema(id, sectionKey) {
  const t = themen.find((entry) => entry.id === id);
  if (!t) return viewNotFound();
  const color = t.farbe || "#0f766e";
  const baseCrumbs = [{ label: "Start", href: "#/" }];
  const sections = themaSections(t);

  if (!sectionKey) {
    const tiles = sections
      .map((s) =>
        tile({
          href: `#/thema/${encodeURIComponent(t.id)}/${s.key}`,
          title: s.title,
          meta: sectionMeta(s, s.items(t)),
          iconName: s.iconName,
          color: s.color
        })
      )
      .join("");
    return {
      title: t.titel,
      back: "#/",
      crumbs: [...baseCrumbs, { label: t.titel }],
      html: `
        ${pageHead({ eyebrow: t.untertitel || "Thema", title: esc(t.titel), text: esc(t.beschreibung || ""), color })}
        ${tiles ? `<div class="tile-grid">${tiles}</div>` : `<div class="empty">Für dieses Thema sind noch keine Inhalte hinterlegt.</div>`}
        ${t.quelle ? `<p class="source-note">Quelle: ${esc(t.quelle)}</p>` : ""}`
    };
  }

  const section = THEMA_SECTIONS.find((s) => s.key === sectionKey);
  if (!section) return viewNotFound();
  const items = section.items(t);
  const view = renderSection(t, section, items);

  return {
    title: `${section.title} · ${t.titel}`,
    back: `#/thema/${encodeURIComponent(t.id)}`,
    crumbs: [...baseCrumbs, { label: t.titel, href: `#/thema/${encodeURIComponent(t.id)}` }, { label: section.title }],
    html: `
      ${pageHead({ eyebrow: t.titel, title: section.title, color: section.color })}
      ${view.html}`,
    mount: view.mount
  };
}

function mediaHead(item) {
  return item.titel || item.dauer
    ? `<div class="media-head"><h3>${esc(item.titel || "")}</h3>${item.dauer ? `<span class="chip">${esc(item.dauer)}</span>` : ""}</div>`
    : "";
}

function renderSection(t, section, items) {
  if (!items.length) return { html: `<div class="empty">Hier ist noch nichts hinterlegt.</div>` };

  switch (section.key) {
    case "audio":
      return {
        html: `<div class="stack">${items
          .map(
            (a) => `
              <article class="card media">
                ${mediaHead(a)}
                ${a.datei ? `<audio controls preload="metadata" src="${themaFile(t, a.datei)}"></audio>${speedControl()}` : ""}
                ${a.youtube ? youtubeEmbed(a.youtube) : ""}
              </article>`
          )
          .join("")}</div>`,
        mount: mountMedia
      };

    case "kurzvideo":
    case "videouebersicht":
      return {
        html: `<div class="stack">${items
          .map(
            (v) => `
              <article class="card media">
                ${mediaHead(v)}
                ${v.datei ? `<video controls playsinline preload="metadata" src="${themaFile(t, v.datei)}"></video>${speedControl()}` : ""}
                ${v.youtube ? youtubeEmbed(v.youtube) : ""}
                ${!v.datei && !v.youtube ? `<p class="hint">Video folgt noch.</p>` : ""}
              </article>`
          )
          .join("")}</div>`,
        mount: mountMedia
      };

    case "praesentation":
      return {
        html: `<div class="stack">${items
          .map(
            (p, i) => `
              <article class="card media">
                <div class="media-head"><h3>${esc(p.titel || "Präsentation")}</h3>
                  <button class="btn btn-soft" type="button" data-pdf-full="${i}">${icon("maximize")} Vollbild</button>
                </div>
                <div class="pdf-viewer" data-pdf="${i}">
                  <div class="pdf-stage"><canvas></canvas><div class="pdf-status">Präsentation wird geladen …</div></div>
                  <div class="pdf-controls">
                    <button class="btn btn-soft" type="button" data-pdf-nav="-1" aria-label="Vorherige Folie">${icon("chevLeft")}</button>
                    <span class="pdf-page">– / –</span>
                    <button class="btn btn-soft" type="button" data-pdf-nav="1" aria-label="Nächste Folie">${icon("chevRight")}</button>
                  </div>
                </div>
              </article>`
          )
          .join("")}</div>`,
        mount(root) {
          items.forEach((p, i) =>
            mountPdf(root.querySelector(`[data-pdf="${i}"]`), root.querySelector(`[data-pdf-full="${i}"]`), themaFile(t, p.datei), p.titel || "Präsentation")
          );
        }
      };

    case "mindmap":
      return {
        html: `<div class="stack">${items
          .map(
            (mm) => `
              <article class="card media">
                <div class="media-head"><h3>${esc(mm.titel || "Mindmap")}</h3>
                  ${mm.baum ? `<button class="btn btn-soft" type="button" data-action="expand">Alles aufklappen</button>` : ""}
                </div>
                ${mm.baum ? `<ul class="tree">${treeNode(mm.baum, 0)}</ul>` : ""}
                ${mm.bild ? `<button class="img-zoom" type="button" data-zoom-src="${themaFile(t, mm.bild)}" data-zoom-title="${esc(mm.titel || "Mindmap")}"><img class="mindmap-img" src="${themaFile(t, mm.bild)}" alt="${esc(mm.titel || "Mindmap")}" loading="lazy" /><span class="img-zoom-hint">${icon("maximize")} Antippen zum Vergrößern</span></button>` : ""}
              </article>`
          )
          .join("")}</div>`,
        mount(root) {
          root.querySelectorAll("[data-zoom-src]").forEach((btn) =>
            btn.addEventListener("click", () => openImageOverlay(btn.dataset.zoomSrc, btn.dataset.zoomTitle))
          );
          root.querySelectorAll('[data-action="expand"]').forEach((btn) =>
            btn.addEventListener("click", () => {
              const details = btn.closest(".card").querySelectorAll("details");
              const open = [...details].some((d) => !d.open);
              details.forEach((d) => (d.open = open));
              btn.textContent = open ? "Alles zuklappen" : "Alles aufklappen";
            })
          );
        }
      };

    case "lernkarten":
      return {
        html: `<div id="deckMount"></div>`,
        mount(root) {
          mountDeck(
            root.querySelector("#deckMount"),
            items.map((k) => ({ front: esc(k.vorne), back: esc(k.hinten) })),
            { key: `thema-${t.id}`, color: section.color }
          );
        }
      };

    case "quiz":
      return {
        html: `<div id="quizMount"></div>`,
        mount(root) {
          mountQuiz(root.querySelector("#quizMount"), items.map((q) => ({ q: normalizeQuestion(q) })), { color: section.color });
        }
      };

    case "pruefung":
      return {
        html: `<p class="lead exam-intro">${Math.min(items.length, EXAM_QUESTION_COUNT)} gemischte Fragen aus dem Quiz zu „${esc(t.titel)}“. Bestanden ab ${EXAM_PASS_PERCENTAGE} %. Am Ende siehst du, was falsch war und warum.</p><div id="examMount"></div>`,
        mount(root) {
          mountExam(
            root.querySelector("#examMount"),
            () => items.map((q) => ({ q: normalizeQuestion(q), title: t.titel, color: t.farbe || "#0f766e" })),
            Math.min(items.length, EXAM_QUESTION_COUNT)
          );
        }
      };

    case "tabelle":
      return {
        html: `<div class="stack">${items
          .map(
            (tab) => `
              <article class="card media">
                ${tab.titel ? `<div class="media-head"><h3>${esc(tab.titel)}</h3></div>` : ""}
                <div class="table-wrap">
                  <table>
                    <thead><tr>${(tab.spalten || []).map((s) => `<th>${esc(s)}</th>`).join("")}</tr></thead>
                    <tbody>${(tab.zeilen || []).map((z) => `<tr>${z.map((c, ci) => `<td data-label="${esc((tab.spalten || [])[ci] || "")}">${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody>
                  </table>
                </div>
              </article>`
          )
          .join("")}</div>`
      };

    case "berichte":
      return {
        html: `<div class="stack">${items
          .map(
            (b, i) => `
              <details class="card report" ${i === 0 ? "open" : ""}>
                <summary><h3>${esc(b.titel || "Bericht")}</h3></summary>
                <div class="report-body">${b.html || ""}</div>
              </details>`
          )
          .join("")}</div>`
      };

    default:
      return { html: "" };
  }
}

function youtubeEmbed(idOrUrl) {
  const m = /(?:v=|youtu\.be\/|embed\/)([\w-]{11})/.exec(idOrUrl);
  const id = m ? m[1] : idOrUrl;
  if (!/^[\w-]{11}$/.test(id)) return "";
  return `<div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/${id}" title="Video" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe></div>`;
}

function treeNode(node, depth) {
  const kids = Array.isArray(node.kinder) ? node.kinder : [];
  if (!kids.length) return `<li><span class="leaf">${esc(node.text)}</span></li>`;
  return `<li><details ${depth < 1 ? "open" : ""}><summary>${esc(node.text)}</summary><ul>${kids
    .map((k) => treeNode(k, depth + 1))
    .join("")}</ul></details></li>`;
}

/* ==========================================================================
   Lernaktivität, Serie & Statistik
   ========================================================================== */

const ACTIVITY_KEY = "lernapp-aktivitaet";

function dayKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function trackActivity(kind, right) {
  const act = loadJSON(ACTIVITY_KEY, {});
  const key = dayKey(new Date());
  const entry = act[key] || { f: 0, r: 0, k: 0 };
  if (kind === "frage") {
    entry.f += 1;
    if (right) entry.r += 1;
  } else {
    entry.k += 1;
  }
  act[key] = entry;
  saveJSON(ACTIVITY_KEY, act);
}

function currentStreak(act = loadJSON(ACTIVITY_KEY, {})) {
  const d = new Date();
  if (!act[dayKey(d)]) d.setDate(d.getDate() - 1);
  let n = 0;
  while (act[dayKey(d)]) {
    n += 1;
    d.setDate(d.getDate() - 1);
  }
  return n;
}

function bestStreak(act) {
  const keys = Object.keys(act).sort();
  let best = 0;
  let run = 0;
  let prev = null;
  keys.forEach((k) => {
    const d = new Date(`${k}T12:00:00`);
    if (prev && Math.round((d - prev) / 86400000) === 1) run += 1;
    else run = 1;
    best = Math.max(best, run);
    prev = d;
  });
  return best;
}

function streakStrip() {
  const act = loadJSON(ACTIVITY_KEY, {});
  const today = act[dayKey(new Date())];
  const streak = currentStreak(act);
  if (!streak && !today) return "";
  const sub = today
    ? `Heute: ${plural(today.f, "Frage", "Fragen")} · ${plural(today.k, "Karte", "Karten")}`
    : "Heute noch nicht gelernt – halte deine Serie!";
  return `
    <a class="streak ${today ? "" : "is-waiting"}" href="#/statistik">
      <span class="streak-flame">${icon("flame")}</span>
      <span class="quick-body"><strong>${plural(streak, "Tag", "Tage")} in Folge</strong><small>${sub}</small></span>
      <span class="tile-arrow">${icon("arrowRight")}</span>
    </a>`;
}

function viewStats() {
  const act = loadJSON(ACTIVITY_KEY, {});
  const entries = Object.values(act);
  const totalQuestions = entries.reduce((s, e) => s + (e.f || 0), 0);
  const totalRight = entries.reduce((s, e) => s + (e.r || 0), 0);
  const rate = totalQuestions ? Math.round((totalRight / totalQuestions) * 100) : 0;

  const stats = [
    [currentStreak(act), "Tage in Folge"],
    [bestStreak(act), "beste Serie"],
    [totalQuestions, "Fragen beantwortet"],
    [`${rate} %`, "richtig"],
    [knownCards.size, "Karten gewusst"],
    [mistakeEntries().length, "offene Fehler"]
  ]
    .map(([n, l]) => `<div class="stat"><strong>${n}</strong><span>${l}</span></div>`)
    .join("");

  const days = [];
  for (let i = 13; i >= 0; i -= 1) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const e = act[dayKey(d)] || { f: 0, k: 0 };
    days.push({ d, f: e.f || 0, k: e.k || 0 });
  }
  const max = Math.max(1, ...days.map((x) => x.f + x.k));
  const weekday = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
  const bars = days
    .map((x, i) => {
      const total = x.f + x.k;
      return `
        <div class="bar-col ${i === days.length - 1 ? "is-today" : ""}" title="${x.d.toLocaleDateString("de-DE")}: ${x.f} Fragen, ${x.k} Karten">
          <span class="bar-num">${total || ""}</span>
          <span class="bar-track"><span class="bar-fill" style="height:${Math.round((total / max) * 100)}%"></span></span>
          <small>${weekday[x.d.getDay()]}</small>
        </div>`;
    })
    .join("");

  const progressRow = (name, href, color, cards, done) => {
    const ids = cards.map(cardId);
    const known = ids.filter((id) => knownCards.has(id)).length;
    const pct = ids.length ? Math.round((known / ids.length) * 100) : 0;
    return `
      <a class="prog-row" href="${href}" style="--c:${color};">
        <span class="prog-name">${name}${done ? ` <span class="prog-done">${icon("check")}</span>` : ""}</span>
        <span class="prog-bar"><span style="width:${pct}%"></span></span>
        <span class="prog-num">${known}/${ids.length}</span>
      </a>`;
  };
  const rows = [
    ...wbModules.map((m) =>
      progressRow(m.topic, `#/weiterbildung/modul/${m.id}/karten`, m.color, m.flashcards, learnedModules.has(m.id))
    ),
    ...themen
      .filter((t) => (t.lernkarten || []).length)
      .map((t) =>
        progressRow(
          esc(t.titel),
          `#/thema/${encodeURIComponent(t.id)}/lernkarten`,
          t.farbe || "#0f766e",
          t.lernkarten.map((k) => ({ front: esc(k.vorne), back: esc(k.hinten) })),
          false
        )
      )
  ].join("");

  return {
    title: "Statistik",
    back: "#/",
    crumbs: [{ label: "Start", href: "#/" }, { label: "Statistik" }],
    html: `
      ${pageHead({ eyebrow: "Dein Fortschritt", title: "Statistik", text: "Lerne jeden Tag ein bisschen, dann wächst deine Serie.", color: "#ea580c" })}
      <div class="stats stats-6">${stats}</div>
      <article class="card">
        <h2 class="section-title">${icon("chart")} Letzte 14 Tage</h2>
        <div class="bars">${bars}</div>
        <p class="hint">Gezählt werden beantwortete Fragen und bewertete Karteikarten.</p>
      </article>
      <h2 class="section-title spaced">${icon("cards")} Karteikarten gewusst</h2>
      <div class="card prog-list">${rows}</div>

      <h2 class="section-title spaced">${icon("save")} Fortschritt sichern</h2>
      <article class="card backup">
        <p>Dein Fortschritt (gelernte Module, gewusste Karten, Fehler, Statistik) ist nur auf diesem Gerät gespeichert. Wenn du die App vom Home-Bildschirm löschst oder ein neues Handy hast, ist er weg. Sichere ihn deshalb ab und zu.</p>
        <div class="backup-actions">
          <button class="btn btn-primary" type="button" data-backup="share" style="--c:#ea580c;">${icon("save")} Sicherung speichern</button>
          <button class="btn btn-soft" type="button" data-backup="copy">Sicherungscode kopieren</button>
        </div>
        <details class="restore">
          <summary>Fortschritt wiederherstellen</summary>
          <p class="hint">Füge einen Sicherungscode ein oder wähle eine Sicherungsdatei. Der aktuelle Fortschritt auf diesem Gerät wird dabei ersetzt.</p>
          <textarea id="restoreCode" rows="4" placeholder="Sicherungscode hier einfügen …"></textarea>
          <div class="backup-actions">
            <button class="btn btn-primary" type="button" data-backup="restore" style="--c:#ea580c;">Wiederherstellen</button>
            <label class="btn btn-soft file-btn">Datei wählen<input id="restoreFile" type="file" accept=".json,application/json,text/plain" hidden /></label>
          </div>
        </details>
        <p class="backup-msg" aria-live="polite"></p>
      </article>`,
    mount(root) {
      const msg = root.querySelector(".backup-msg");
      const say = (text, ok = true) => {
        msg.textContent = text;
        msg.classList.toggle("is-error", !ok);
      };
      const restore = (text) => {
        try {
          const data = decodeBackup(text);
          if (!window.confirm(`Sicherung vom ${new Date(data.datum).toLocaleString("de-DE")} laden? Der aktuelle Fortschritt auf diesem Gerät wird ersetzt.`)) return;
          Object.keys(localStorage)
            .filter((k) => k.startsWith("lernapp-"))
            .forEach((k) => localStorage.removeItem(k));
          Object.entries(data.daten).forEach(([k, v]) => {
            if (k.startsWith("lernapp-")) localStorage.setItem(k, v);
          });
          location.reload();
        } catch (error) {
          say(error.message || "Der Code konnte nicht gelesen werden.", false);
        }
      };

      root.querySelector(".backup").addEventListener("click", async (event) => {
        const btn = event.target.closest("[data-backup]");
        if (!btn) return;
        const data = exportProgress();
        if (btn.dataset.backup === "copy") {
          const code = encodeBackup(data);
          try {
            await navigator.clipboard.writeText(code);
            say("Sicherungscode kopiert. Speichere ihn z. B. in deinen Notizen.");
          } catch (error) {
            const area = root.querySelector("#restoreCode");
            root.querySelector(".restore").open = true;
            area.value = code;
            area.select();
            say("Kopieren nicht erlaubt – der Code steht unten im Feld, bitte manuell kopieren.");
          }
        }
        if (btn.dataset.backup === "share") {
          const name = `lernwelt-sicherung-${dayKey(new Date())}.json`;
          const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
          try {
            const file = new File([blob], name, { type: "application/json" });
            if (navigator.canShare && navigator.canShare({ files: [file] })) {
              await navigator.share({ files: [file], title: "Lernwelt-Sicherung" });
              say("Sicherung erstellt.");
              return;
            }
          } catch (error) {
            if (error && error.name === "AbortError") return;
          }
          const a = document.createElement("a");
          a.href = URL.createObjectURL(blob);
          a.download = name;
          document.body.appendChild(a);
          a.click();
          a.remove();
          setTimeout(() => URL.revokeObjectURL(a.href), 2000);
          say(`Sicherung als „${name}“ gespeichert.`);
        }
        if (btn.dataset.backup === "restore") restore(root.querySelector("#restoreCode").value);
      });

      root.querySelector("#restoreFile").addEventListener("change", async (event) => {
        const file = event.target.files && event.target.files[0];
        if (file) restore(await file.text());
      });
    }
  };
}

function exportProgress() {
  const data = { app: "lernwelt", version: 1, datum: new Date().toISOString(), daten: {} };
  try {
    Object.keys(localStorage)
      .filter((k) => k.startsWith("lernapp-"))
      .forEach((k) => {
        data.daten[k] = localStorage.getItem(k);
      });
  } catch (error) {
    /* kein Speicher verfügbar */
  }
  return data;
}

function encodeBackup(obj) {
  return btoa(unescape(encodeURIComponent(JSON.stringify(obj))));
}

function decodeBackup(text) {
  const raw = String(text || "").trim();
  if (!raw) throw new Error("Bitte zuerst einen Sicherungscode einfügen.");
  let obj;
  try {
    obj = JSON.parse(raw.startsWith("{") ? raw : decodeURIComponent(escape(atob(raw.replace(/\s+/g, "")))));
  } catch (error) {
    throw new Error("Das ist kein gültiger Lernwelt-Sicherungscode.");
  }
  if (!obj || obj.app !== "lernwelt" || typeof obj.daten !== "object") {
    throw new Error("Das ist kein gültiger Lernwelt-Sicherungscode.");
  }
  return obj;
}

/* ==========================================================================
   Vorlesen (Sprachausgabe des Geräts)
   ========================================================================== */

const canSpeak = "speechSynthesis" in window && typeof window.SpeechSynthesisUtterance !== "undefined";
let speakingBtn = null;

function speakButton() {
  return canSpeak
    ? `<button class="icon-btn speak" type="button" data-action="speak" aria-label="Vorlesen" title="Vorlesen">${icon("volume")}</button>`
    : "";
}

function stopSpeaking() {
  if (canSpeak) window.speechSynthesis.cancel();
  if (speakingBtn) speakingBtn.classList.remove("is-speaking");
  speakingBtn = null;
}

function toggleSpeak(text, btn) {
  if (!canSpeak) return;
  if (speakingBtn === btn) {
    stopSpeaking();
    return;
  }
  stopSpeaking();
  const clean = stripTags(text)
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
  const utterance = new SpeechSynthesisUtterance(clean);
  utterance.lang = "de-DE";
  const voice = window.speechSynthesis.getVoices().find((v) => /^de/i.test(v.lang));
  if (voice) utterance.voice = voice;
  const done = () => {
    if (speakingBtn === btn) {
      btn.classList.remove("is-speaking");
      speakingBtn = null;
    }
  };
  utterance.onend = done;
  utterance.onerror = done;
  speakingBtn = btn;
  btn.classList.add("is-speaking");
  window.speechSynthesis.speak(utterance);
}

/* ==========================================================================
   Vollbild-Ansichten innerhalb der App (bleiben in der App, mit Schließen)
   ========================================================================== */

let overlayKeyHandler = null;

function openOverlay(contentHtml, { title = "", onKey = null } = {}) {
  closeOverlay();
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.innerHTML = `
    <div class="overlay-bar">
      <button class="btn btn-soft overlay-close" type="button">${icon("x")} Schließen</button>
      <strong class="overlay-title">${esc(title)}</strong>
      <span class="overlay-extra"></span>
    </div>
    <div class="overlay-body">${contentHtml}</div>`;
  document.body.appendChild(overlay);
  document.body.classList.add("has-overlay");
  overlay.querySelector(".overlay-close").addEventListener("click", closeOverlay);
  overlayKeyHandler = (event) => {
    if (event.key === "Escape") closeOverlay();
    else if (onKey) onKey(event);
  };
  document.addEventListener("keydown", overlayKeyHandler);
  return overlay;
}

function closeOverlay() {
  document.querySelectorAll(".overlay").forEach((el) => {
    if (typeof el.onClose === "function") el.onClose();
    el.remove();
  });
  document.body.classList.remove("has-overlay");
  if (overlayKeyHandler) document.removeEventListener("keydown", overlayKeyHandler);
  overlayKeyHandler = null;
}

function addSwipe(el, go) {
  let startX = 0;
  let startY = 0;
  el.addEventListener(
    "touchstart",
    (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    },
    { passive: true }
  );
  el.addEventListener(
    "touchend",
    (e) => {
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) go(dx < 0 ? 1 : -1);
    },
    { passive: true }
  );
}

function openImageOverlay(src, title) {
  const overlay = openOverlay(`<div class="zoom-scroll"><img src="${src}" alt="${esc(title)}" /></div>`, { title });
  const levels = [1, 1.5, 2, 3, 4];
  let level = 0;
  const img = overlay.querySelector("img");
  const extra = overlay.querySelector(".overlay-extra");
  extra.innerHTML = `
    <button class="btn btn-soft icon-only" type="button" data-z="-1" aria-label="Verkleinern">${icon("minus")}</button>
    <button class="btn btn-soft icon-only" type="button" data-z="1" aria-label="Vergrößern">${icon("plus")}</button>`;
  const apply = () => {
    img.style.width = `${levels[level] * 100}%`;
    img.style.maxWidth = level === 0 ? "100%" : "none";
  };
  extra.addEventListener("click", (e) => {
    const b = e.target.closest("[data-z]");
    if (!b) return;
    level = Math.min(levels.length - 1, Math.max(0, level + Number(b.dataset.z)));
    apply();
  });
  img.addEventListener("dblclick", () => {
    level = level === 0 ? 2 : 0;
    apply();
  });
  apply();
}

/* ---------- Präsentation (PDF) mit pdf.js in der App ---------- */

const PDFJS_BASE = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/";
const PDF_POS_KEY = "lernapp-pdf-seite";
let pdfjsPromise = null;
const pdfDocs = new Map();
const renderTasks = new WeakMap();

function loadPdfJs() {
  if (window.pdfjsLib) return Promise.resolve(window.pdfjsLib);
  if (!pdfjsPromise) {
    pdfjsPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = `${PDFJS_BASE}pdf.min.js`;
      script.onload = () => {
        window.pdfjsLib.GlobalWorkerOptions.workerSrc = `${PDFJS_BASE}pdf.worker.min.js`;
        resolve(window.pdfjsLib);
      };
      script.onerror = () => {
        pdfjsPromise = null;
        reject(new Error("PDF-Anzeige nicht verfügbar"));
      };
      document.head.appendChild(script);
    });
  }
  return pdfjsPromise;
}

function getPdf(src) {
  if (!pdfDocs.has(src)) {
    pdfDocs.set(
      src,
      loadPdfJs()
        .then((lib) => lib.getDocument(src).promise)
        .catch((error) => {
          pdfDocs.delete(src);
          throw error;
        })
    );
  }
  return pdfDocs.get(src);
}

async function drawPdfPage(doc, number, canvas, maxWidth, maxHeight = 0) {
  const page = await doc.getPage(number);
  const base = page.getViewport({ scale: 1 });
  let scale = maxWidth / base.width;
  if (maxHeight) scale = Math.min(scale, maxHeight / base.height);
  const ratio = Math.min(window.devicePixelRatio || 1, 3);
  const viewport = page.getViewport({ scale: scale * ratio });
  const previous = renderTasks.get(canvas);
  if (previous) {
    try {
      previous.cancel();
    } catch (error) {
      /* schon fertig */
    }
  }
  const off = document.createElement("canvas");
  off.width = Math.floor(viewport.width);
  off.height = Math.floor(viewport.height);
  const task = page.render({ canvasContext: off.getContext("2d"), viewport });
  renderTasks.set(canvas, task);
  try {
    await task.promise;
  } catch (error) {
    if (error && error.name === "RenderingCancelledException") return;
    throw error;
  }
  canvas.width = off.width;
  canvas.height = off.height;
  canvas.style.width = `${Math.floor(viewport.width / ratio)}px`;
  canvas.style.height = `${Math.floor(viewport.height / ratio)}px`;
  canvas.getContext("2d").drawImage(off, 0, 0);
}

function mountPdf(viewer, fullBtn, src, title) {
  if (!viewer) return;
  const canvas = viewer.querySelector("canvas");
  const status = viewer.querySelector(".pdf-status");
  const label = viewer.querySelector(".pdf-page");
  const stage = viewer.querySelector(".pdf-stage");
  let doc = null;
  let page = loadJSON(PDF_POS_KEY, {})[src] || 1;

  const show = () => {
    if (!doc || !viewer.isConnected) return;
    page = Math.min(Math.max(1, page), doc.numPages);
    label.textContent = `Folie ${page} / ${doc.numPages}`;
    const positions = loadJSON(PDF_POS_KEY, {});
    positions[src] = page;
    saveJSON(PDF_POS_KEY, positions);
    drawPdfPage(doc, page, canvas, stage.clientWidth).catch(() => {});
  };
  const go = (delta) => {
    page += delta;
    show();
  };

  viewer.querySelectorAll("[data-pdf-nav]").forEach((b) => b.addEventListener("click", () => go(Number(b.dataset.pdfNav))));
  addSwipe(stage, go);
  stage.addEventListener("click", (e) => {
    const r = stage.getBoundingClientRect();
    go(e.clientX - r.left > r.width / 2 ? 1 : -1);
  });
  if (fullBtn) {
    fullBtn.addEventListener("click", () => {
      if (doc)
        openPdfOverlay(doc, title, page, (p) => {
          page = p;
          show();
        });
    });
  }
  let resizeTimer = null;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(show, 200);
  });

  getPdf(src)
    .then((d) => {
      doc = d;
      status.remove();
      show();
    })
    .catch(() => {
      status.textContent = "Die Präsentation konnte nicht geladen werden. Bitte prüfe die Internetverbindung.";
    });
}

function openPdfOverlay(doc, title, startPage, onClose) {
  let page = startPage;
  const overlay = openOverlay(
    `<div class="pdf-full-stage"><canvas></canvas></div>
     <div class="overlay-nav">
       <button class="btn btn-soft" type="button" data-n="-1" aria-label="Vorherige Folie">${icon("chevLeft")}</button>
       <span class="pdf-page"></span>
       <button class="btn btn-soft" type="button" data-n="1" aria-label="Nächste Folie">${icon("chevRight")}</button>
     </div>`,
    {
      title,
      onKey: (e) => {
        if (e.key === "ArrowRight" || e.key === " ") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }
    }
  );
  overlay.onClose = () => onClose(page);
  const stage = overlay.querySelector(".pdf-full-stage");
  const canvas = stage.querySelector("canvas");
  const label = overlay.querySelector(".pdf-page");

  function show() {
    if (!overlay.isConnected) return;
    page = Math.min(Math.max(1, page), doc.numPages);
    label.textContent = `Folie ${page} / ${doc.numPages}`;
    drawPdfPage(doc, page, canvas, stage.clientWidth, stage.clientHeight).catch(() => {});
  }
  function go(delta) {
    page += delta;
    show();
  }

  overlay.querySelectorAll("[data-n]").forEach((b) => b.addEventListener("click", () => go(Number(b.dataset.n))));
  addSwipe(stage, go);
  stage.addEventListener("click", (e) => {
    const r = stage.getBoundingClientRect();
    go(e.clientX - r.left > r.width / 2 ? 1 : -1);
  });
  let resizeTimer = null;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(show, 200);
  });
  requestAnimationFrame(show);
}

/* ---------- Audio & Video: Tempo und Weiterhören ---------- */

const SPEED_KEY = "lernapp-tempo";
const MEDIA_POS_KEY = "lernapp-media-pos";

function speedControl() {
  const current = loadJSON(SPEED_KEY, 1);
  return `<div class="speed" role="group" aria-label="Abspieltempo"><span>Tempo</span>${[0.75, 1, 1.25, 1.5, 2]
    .map((r) => `<button type="button" data-speed="${r}" class="${r === current ? "is-active" : ""}">${String(r).replace(".", ",")}×</button>`)
    .join("")}</div>`;
}

function mountMedia(root) {
  const rate = loadJSON(SPEED_KEY, 1);
  root.querySelectorAll("audio[src], video[src]").forEach((media) => {
    const key = media.getAttribute("src");
    media.defaultPlaybackRate = rate;
    media.playbackRate = rate;
    media.addEventListener("loadedmetadata", () => {
      const saved = loadJSON(MEDIA_POS_KEY, {})[key];
      if (saved > 5 && saved < media.duration - 5) media.currentTime = saved;
      media.playbackRate = loadJSON(SPEED_KEY, 1);
    });
    let last = 0;
    media.addEventListener("timeupdate", () => {
      if (Math.abs(media.currentTime - last) < 5) return;
      last = media.currentTime;
      const positions = loadJSON(MEDIA_POS_KEY, {});
      positions[key] = media.currentTime;
      saveJSON(MEDIA_POS_KEY, positions);
    });
    media.addEventListener("ended", () => {
      const positions = loadJSON(MEDIA_POS_KEY, {});
      delete positions[key];
      saveJSON(MEDIA_POS_KEY, positions);
    });
  });
  root.querySelectorAll(".speed").forEach((group) =>
    group.addEventListener("click", (e) => {
      const b = e.target.closest("[data-speed]");
      if (!b) return;
      const r = Number(b.dataset.speed);
      saveJSON(SPEED_KEY, r);
      root.querySelectorAll("audio, video").forEach((m) => {
        m.defaultPlaybackRate = r;
        m.playbackRate = r;
      });
      root.querySelectorAll("[data-speed]").forEach((x) => x.classList.toggle("is-active", Number(x.dataset.speed) === r));
    })
  );
}

/* ---------- Start ---------- */

window.addEventListener("hashchange", render);
appEl.addEventListener("click", (event) => {
  const lead = event.target.closest(".page-head .lead");
  if (lead) lead.classList.toggle("is-open");
});
render();

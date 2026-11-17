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

/* Fragen aus allen Formaten (Weiterbildung + Themen inkl. neuer Typen) vereinheitlichen. */
function normalizeQuestion(q) {
  if (!q) return null;
  if (q.type === "open") return { type: "open", prompt: q.prompt, sample: q.sampleAnswer || "" };
  if (q.type === "single") {
    return { type: "single", prompt: q.prompt, options: q.options, correct: [q.correctIndex], explanation: q.explanation || "" };
  }
  if (q.type === "multi") {
    return { type: "multi", prompt: q.prompt, options: q.options, correct: q.correctIndices || [], explanation: q.explanation || "" };
  }
  const quelle = q.quelle ? String(q.quelle) : "";
  const explanation = esc(q.erklaerung || "");
  switch (q.typ) {
    case "wahrfalsch":
      if (!q.aussage) return null;
      return {
        type: "single",
        kind: "tf",
        prompt: esc(q.aussage),
        options: ["Richtig", "Falsch"],
        correct: [q.richtig === true || q.richtig === "richtig" || q.richtig === 0 ? 0 : 1],
        explanation,
        quelle
      };
    case "luecke": {
      if (!q.text || !Array.isArray(q.optionen)) return null;
      const correct = (Array.isArray(q.richtig) ? q.richtig : [q.richtig]).map(Number);
      return {
        type: correct.length > 1 ? "multi" : "single",
        kind: "gap",
        prompt: esc(q.text).replace(/_{3,}/, '<span class="gap">______</span>'),
        options: q.optionen.map(esc),
        correct,
        explanation,
        quelle
      };
    }
    case "zuordnen":
      if (!Array.isArray(q.paare) || q.paare.length < 2) return null;
      return {
        type: "match",
        kind: "match",
        prompt: esc(q.frage || "Ordne richtig zu."),
        pairs: q.paare.map((p) => [esc(p[0]), esc(p[1])]),
        explanation,
        quelle
      };
    case "fall": {
      if (!q.fall || !q.frage || !Array.isArray(q.optionen)) return null;
      const correct = (Array.isArray(q.richtig) ? q.richtig : [q.richtig]).map(Number);
      return {
        type: correct.length > 1 ? "multi" : "single",
        kind: "case",
        prompt: `<span class="case-box">${esc(q.fall)}</span>${esc(q.frage)}`,
        options: q.optionen.map(esc),
        correct,
        explanation,
        quelle
      };
    }
    case "rechnen": {
      const answer = Number(String(q.loesung).replace(",", "."));
      if (!q.frage || !Number.isFinite(answer)) return null;
      return {
        type: "number",
        kind: "calc",
        prompt: esc(q.frage),
        answer,
        tolerance: Number.isFinite(Number(q.toleranz)) ? Number(q.toleranz) : Math.max(0.01, Math.abs(answer) * 0.01),
        unit: esc(q.einheit || ""),
        explanation,
        quelle
      };
    }
    case "fehler": {
      if (!Array.isArray(q.teile) || !q.teile.some((t) => t && t.falsch)) return null;
      return {
        type: "spot",
        kind: "spot",
        prompt: esc(q.frage || "Tippe alle Stellen an, die falsch oder problematisch sind."),
        segments: q.teile.map((t) => ({ text: esc(t.text || ""), bad: !!t.falsch, why: esc(t.warum || "") })),
        explanation,
        quelle
      };
    }
    case "reihenfolge":
      if (!Array.isArray(q.schritte) || q.schritte.length < 2) return null;
      return {
        type: "order",
        kind: "order",
        prompt: esc(q.frage || "Bring die Schritte in die richtige Reihenfolge."),
        steps: q.schritte.map(esc),
        explanation,
        quelle
      };
    default:
      break;
  }
  if (q.frage) {
    const prompt = esc(q.frage);
    if (!Array.isArray(q.optionen) || !q.optionen.length) {
      return { type: "open", prompt, sample: esc(q.antwort || q.erklaerung || ""), quelle };
    }
    const correct = (Array.isArray(q.richtig) ? q.richtig : [q.richtig]).map(Number);
    return {
      type: correct.length > 1 ? "multi" : "single",
      prompt,
      options: q.optionen.map(esc),
      correct,
      explanation,
      quelle
    };
  }
  return null;
}

/* Ob eine Frage automatisch per Antwort-Auswahl auswertbar ist (für Prüfungen). */
function isChoice(q) {
  return !!q && (q.type === "single" || q.type === "multi");
}

/* Lösungstext einer Frage (für Suche, Fehleranzeige). */
function solutionText(q) {
  if (!q) return "";
  if (q.type === "open") return q.sample || "";
  if (q.type === "match") return q.pairs.map((p) => `${p[0]} → ${p[1]}`).join(" · ");
  if (q.type === "order") return q.steps.map((s, i) => `${i + 1}. ${s}`).join(" · ");
  if (q.type === "number") return `${String(q.answer).replace(".", ",")}${q.unit ? ` ${q.unit}` : ""}`;
  if (q.type === "spot") return q.segments.filter((x) => x.bad).map((x) => x.text).join(" · ");
  return (q.correct || []).map((i) => q.options[i]).filter(Boolean).join(" / ");
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
      if (n) list.push({ q: n, label: m.title, group: m.title, color: m.color, href: `#/weiterbildung/modul/${m.id}/quiz` });
    })
  );
  themen.forEach((t) =>
    (t.quiz || []).forEach((q) => {
      const n = normalizeQuestion(q);
      if (n) list.push({ q: n, label: t.titel, group: t.titel, themeId: t.id, color: t.farbe || "#0891b2", href: `#/thema/${encodeURIComponent(t.id)}/quiz` });
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
  ownCards().forEach((c) => list.push({ front: esc(c.front), back: esc(c.back), label: "Meine Karten", color: "#0d9488", href: "#/eigene" }));
  const starred = starredTerms();
  glossaryEntries().filter((e) => starred.has(e.id)).forEach((e) => list.push({ ...termToCard(e), label: "Meine Begriffe" }));
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
    else if (route[0] === "neuigkeiten") view = viewNews();
    else if (route[0] === "eigene") view = viewOwn();
    else if (route[0] === "fokus") view = viewFocus();
    else if (route[0] === "vortest") view = viewPretest(route[1], route[2]);
    else if (route[0] === "begriffe") view = viewGlossary(route[1] || "alle", route[2] || "");
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
  updateFocusUI();
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
    ),
    topicCard({
      href: "#/eigene",
      title: "Meine Karten",
      subtitle: "Selbst gemacht",
      text: "Eigene Karteikarten und Merksätze anlegen und lernen.",
      color: "#0d9488",
      iconName: "pencil",
      chips: [plural(ownCards().length, "Karte", "Karten")]
    })
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
        <a href="#/fokus">${icon("target")} Fokus-Timer</a>
        <a href="#/eigene">${icon("pencil")} Meine Karten</a>
        <a href="#/begriffe">${icon("book")} Begriffe A–Z</a>
        <a href="#/suche">${icon("search")} Suche</a>
      </nav>
      ${versionFooter()}`
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
        ${tile({ href: "#/begriffe/wb", title: "Begriffe A–Z", text: "Alle Fachbegriffe der Module zum Nachschlagen und Lernen", meta: plural(glossaryEntries().filter((e) => e.bereich === "wb").length, "Begriff", "Begriffe"), iconName: "book", color: "#0f766e" })}
        ${tile({ href: "#/weiterbildung/pruefung", title: "Prüfungsmodus", text: `${EXAM_QUESTION_COUNT} Fragen, bestanden ab ${EXAM_PASS_PERCENTAGE} %`, meta: "Mit Fehleranalyse", iconName: "award", color: "#0f766e" })}
      </div>`
  };
}

function viewWbModules() {
  const healthByGroup = new Map(allGroupHealth().map((r) => [r.group, r]));
  const cards = wbModules
    .map((m) => {
      const done = learnedModules.has(m.id);
      return `
        <a class="module-tile ${done ? "is-done" : ""}" href="#/weiterbildung/modul/${m.id}" style="--c:${m.color}; --c-soft:${m.softColor};">
          ${healthDot((healthByGroup.get(m.title) || {}).health || { status: "grau", label: "" })}
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
  { key: "training", label: "Training", iconName: "shuffle" },
  { key: "tipps", label: "Lerntipps", iconName: "bulb" }
];

function viewWbModule(id, tab) {
  const index = wbModules.findIndex((m) => m.id === id);
  const m = wbModules[index];
  if (!m) return viewNotFound();
  const activeTab = MODULE_TABS.some((t) => t.key === tab) ? tab : "quiz";
  const done = learnedModules.has(m.id);
  const counts = { quiz: m.questions.length, karten: m.flashcards.length, training: 10, uebungen: m.exercises.length, tipps: m.tips.length };

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
      ${pretestBanner("modul", m.id)}
      <nav class="tabs" style="--c:${m.color}; --c-soft:${m.softColor};">${tabs}</nav>
      ${(() => { const n = glossaryEntries().filter((e) => e.gruppe === `wb-${m.id}`).length; return n ? `<a class="term-link" href="#/begriffe/wb-${m.id}">${icon("book")} ${plural(n, "Fachbegriff", "Fachbegriffe")} dieses Moduls nachschlagen ${icon("arrowRight")}</a>` : ""; })()}
      <section class="tab-body">${body}</section>
      ${pager}`,
    mount(root) {
      root.querySelector("#learnedToggle").addEventListener("click", () => {
        if (learnedModules.has(m.id)) learnedModules.delete(m.id);
        else learnedModules.add(m.id);
        saveJSON(LEARNED_KEY, [...learnedModules]);
        render();
      });
      wirePretestSkip(root);
      const mountEl = root.querySelector("#tabMount");
      if (!mountEl) return;
      if (activeTab === "quiz") {
        mountQuiz(
          mountEl,
          m.questions.map((q) => ({ q: normalizeQuestion(q), color: m.color, group: m.title, href: `#/weiterbildung/modul/${m.id}/karten` })),
          { color: m.color }
        );
      } else if (activeTab === "training") {
        mountTraining(mountEl, m.flashcards.map((c) => ({ front: c.front, back: c.back })), m.color);
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
      _ok: pct >= EXAM_PASS_PERCENTAGE && (saveJSON(SUCCESS_KEY, { ...loadJSON(SUCCESS_KEY, {}), pruefung: true }), checkBadgesSoon(), true),
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

const KIND_LABELS = {
  tf: "Richtig oder falsch?",
  gap: "Lückentext",
  match: "Zuordnen",
  order: "Reihenfolge",
  fit: "Passt das zusammen?",
  pick: "Welche Erklärung passt?",
  case: "Fallbeispiel",
  calc: "Rechenaufgabe",
  spot: "Fehler finden"
};

function mountQuiz(el, rawItems, { color = "#2563eb", onReshuffle, record = true, onFinish = null } = {}) {
  const base = rawItems.filter((item) => item && item.q);
  let items = base;
  let index = 0;
  let answers = {};

  if (!base.length) {
    el.innerHTML = `<div class="empty small">Noch keine Fragen hinterlegt.</div>`;
    return;
  }

  const newAnswer = (q) => {
    const a = { selected: [], checked: false, correct: false, revealed: false, conf: "", text: "", why: "", whyOpen: false };
    if (q.type === "match") {
      a.match = {};
      a.rightOrder = shuffle(q.pairs.map((_, i) => i));
    }
    if (q.type === "number") a.num = "";
    if (q.type === "spot") a.spot = [];
    if (q.type === "order") {
      let order = shuffle(q.steps.map((_, i) => i));
      let guard = 0;
      while (order.every((v, i) => v === i) && guard < 10) {
        order = shuffle(order);
        guard += 1;
      }
      a.order = order;
    }
    return a;
  };
  const current = () => answers[index] || (answers[index] = newAnswer(items[index].q));

  const restart = (list) => {
    items = list;
    index = 0;
    answers = {};
    draw();
  };

  const scorable = (it) => it.q.type !== "open";
  const closedCount = () => items.filter(scorable).length;
  const correctCount = () => Object.values(answers).filter((a) => a.checked && a.correct).length;

  const isReady = (q, a) => {
    if (q.type === "match") return q.pairs.every((_, i) => a.match[i] !== undefined);
    if (q.type === "order") return true;
    if (q.type === "number") return String(a.num || "").trim() !== "";
    if (q.type === "spot") return a.spot.length > 0;
    return a.selected.length > 0;
  };

  const parseNumber = (text) => Number(String(text).replace(/\s|%|€|EUR/gi, "").replace(/\.(?=\d{3}(\D|$))/g, "").replace(",", "."));

  const evaluate = (q, a) => {
    if (q.type === "match") return q.pairs.every((_, i) => a.match[i] === i);
    if (q.type === "order") return a.order.every((v, i) => v === i);
    if (q.type === "number") {
      const value = parseNumber(a.num);
      return Number.isFinite(value) && Math.abs(value - q.answer) <= q.tolerance + 1e-9;
    }
    if (q.type === "spot") {
      const bad = q.segments.map((x, i) => (x.bad ? i : -1)).filter((i) => i >= 0);
      return sameSelection(a.spot, bad);
    }
    return sameSelection(a.selected, q.correct);
  };

  const confRow = (a) =>
    `<div class="conf"><span>Wie sicher bist du?</span>${[
      ["geraten", "Geraten"],
      ["unsicher", "Unsicher"],
      ["sicher", "Sicher"]
    ]
      .map(([v, l]) => `<button type="button" data-conf="${v}" class="${a.conf === v ? "is-active" : ""}">${l}</button>`)
      .join("")}</div>`;

  const bodyFor = (q, a) => {
    if (q.type === "open") {
      return `
        <p class="hint">Offene Frage: Formuliere deine Antwort selbst, dann vergleiche.</p>
        ${
          a.revealed
            ? `${a.text.trim() ? `<div class="answer-box own"><strong>Deine Antwort</strong><p>${esc(a.text)}</p></div>` : ""}<div class="answer-box"><strong>Musterantwort</strong><p>${q.sample}</p></div>`
            : `<textarea class="own-answer" data-own rows="3" placeholder="Deine Antwort (optional) …">${esc(a.text)}</textarea>`
        }`;
    }

    let main = "";
    if (q.type === "match") {
      main = `<div class="match">${q.pairs
        .map((p, li) => {
          const state = a.checked ? (a.match[li] === li ? "is-correct" : "is-wrong") : "";
          return `
            <div class="match-row ${state}">
              <span class="match-left">${p[0]}</span>
              <select data-match="${li}" ${a.checked ? "disabled" : ""} aria-label="Zuordnung für ${stripTags(p[0])}">
                <option value="">– bitte wählen –</option>
                ${a.rightOrder.map((ri) => `<option value="${ri}" ${a.match[li] === ri ? "selected" : ""}>${stripTags(q.pairs[ri][1])}</option>`).join("")}
              </select>
              ${a.checked && a.match[li] !== li ? `<span class="match-fix">Richtig: ${q.pairs[li][1]}</span>` : ""}
            </div>`;
        })
        .join("")}</div>`;
    } else if (q.type === "number") {
      main = `
        <div class="calc">
          <input class="calc-input ${a.checked ? (a.correct ? "is-correct" : "is-wrong") : ""}" type="text" inputmode="decimal" autocomplete="off" data-num value="${esc(a.num)}" placeholder="Deine Lösung" ${a.checked ? "disabled" : ""} />
          ${q.unit ? `<span class="calc-unit">${q.unit}</span>` : ""}
        </div>
        ${a.checked && !a.correct ? `<div class="answer-box"><strong>Richtig wäre</strong><p>${solutionText(q)}</p></div>` : ""}`;
    } else if (q.type === "spot") {
      main = `<p class="spot-text">${q.segments
        .map((seg, si) => {
          const chosen = a.spot.includes(si);
          let cls = chosen ? "is-selected" : "";
          if (a.checked) cls = seg.bad ? (chosen ? "is-correct" : "is-missed") : chosen ? "is-wrong" : "";
          return `<button class="spot-seg ${cls}" type="button" data-seg="${si}" ${a.checked ? "disabled" : ""}>${seg.text}</button>`;
        })
        .join(" ")}</p>
        ${a.checked ? `<ul class="spot-why">${q.segments.filter((x) => x.bad).map((x) => `<li><strong>${x.text}</strong>${x.why ? ` – ${x.why}` : ""}</li>`).join("")}</ul>` : ""}`;
    } else if (q.type === "order") {
      const last = a.order.length - 1;
      main = `<ol class="order">${a.order
        .map((si, pos) => {
          const state = a.checked ? (si === pos ? "is-correct" : "is-wrong") : "";
          return `
            <li class="order-item ${state}">
              <span class="order-num">${pos + 1}</span>
              <span class="order-text">${q.steps[si]}</span>
              ${
                a.checked
                  ? ""
                  : `<span class="order-btns">
                      <button class="icon-btn" type="button" data-move="${pos}:-1" ${pos === 0 ? "disabled" : ""} aria-label="Nach oben">↑</button>
                      <button class="icon-btn" type="button" data-move="${pos}:1" ${pos === last ? "disabled" : ""} aria-label="Nach unten">↓</button>
                    </span>`
              }
            </li>`;
        })
        .join("")}</ol>
        ${a.checked && !a.correct ? `<div class="answer-box"><strong>Richtige Reihenfolge</strong><p>${q.steps.map((s, i) => `${i + 1}. ${s}`).join("<br />")}</p></div>` : ""}`;
    } else {
      main = `<div class="options ${q.kind === "tf" || q.kind === "fit" ? "options-tf" : ""}">${q.options
        .map((opt, oi) => {
          const cls = ["option"];
          if (a.selected.includes(oi)) cls.push("is-selected");
          if (a.checked && q.correct.includes(oi)) cls.push("is-correct");
          if (a.checked && a.selected.includes(oi) && !q.correct.includes(oi)) cls.push("is-wrong");
          return `<button class="${cls.join(" ")}" type="button" data-o="${oi}" ${a.checked ? "disabled" : ""}>${opt}</button>`;
        })
        .join("")}</div>`;
    }

    if (!a.checked) {
      const hint =
        q.type === "match"
          ? "Wähle zu jedem Begriff die passende Erklärung."
          : q.type === "order"
            ? "Verschiebe die Schritte mit den Pfeilen."
            : q.type === "number"
              ? "Gib das Ergebnis als Zahl ein, Komma oder Punkt sind beide okay."
              : q.type === "spot"
                ? "Tippe alle Stellen an, die du für falsch hältst, dann „Ergebnis ansehen“."
                : q.kind === "case"
                  ? "Es können eine oder mehrere Antworten richtig sein."
                  : q.kind
              ? ""
              : "Es können eine oder mehrere Antworten richtig sein.";
      return `${main}${hint ? `<p class="hint">${hint}</p>` : ""}${isReady(q, a) || q.type === "number" ? confRow(a) : ""}`;
    }

    const confNote =
      !a.correct && a.conf === "sicher"
        ? `<p class="conf-note">Sicherer Irrtum! Genau solche Fehler merkt man sich nach der Korrektur besonders gut. Lies die Erklärung in Ruhe.</p>`
        : a.correct && a.conf === "geraten"
          ? `<p class="conf-note">Gut geraten! Die Frage kommt bald nochmal, damit sie wirklich sitzt.</p>`
          : "";
    const verdict = a.correct
      ? "Richtig!"
      : q.type === "spot"
        ? "Nicht ganz. Grün = gefunden, rot umrandet = übersehen, rot = kein Fehler."
        : q.type === "match" || q.type === "order" || q.type === "number"
        ? "Nicht ganz. Rot markiert ist, was noch nicht stimmt."
        : "Nicht ganz. Grün markiert ist die richtige Lösung.";
    return `
      ${main}
      <div class="answer-box ${a.correct ? "is-pass" : "is-fail"}"><strong>${verdict}</strong>${confNote}${q.explanation ? `<p>${q.explanation}</p>` : ""}</div>
      <button class="why-toggle ${a.whyOpen ? "is-open" : ""}" type="button" data-action="why" aria-expanded="${a.whyOpen ? "true" : "false"}">
        ${icon("bulb")} <span>Warum ist das so?</span> <small>${a.whyOpen ? "Erklärung ausblenden" : "Mehr erklären"}</small>
      </button>
      ${a.whyOpen ? explainHtml(items[index], q) : ""}`;
  };

  const draw = () => {
    if (index >= items.length) return drawSummary();
    const item = items[index];
    const q = item.q;
    const a = current();
    const progress = Math.round((index / items.length) * 100);
    const source = item.label ? `<span class="source" style="--c:${item.color || color};">${item.label}</span>` : "";
    const kind = q.kindLabel || KIND_LABELS[q.kind] || "";

    let actions;
    if (q.type === "open") {
      actions = a.revealed
        ? `<button class="btn btn-primary" data-action="next" type="button">Weiter ${icon("arrowRight")}</button>`
        : `<button class="btn btn-primary" data-action="reveal" type="button">Musterantwort zeigen</button>`;
    } else {
      actions = a.checked
        ? `<button class="btn btn-primary" data-action="next" type="button">${index === items.length - 1 ? "Auswertung" : "Weiter"} ${icon("arrowRight")}</button>`
        : `<button class="btn btn-primary" data-action="check" type="button" ${isReady(q, a) ? "" : "disabled"}>Ergebnis ansehen</button>`;
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
          ${source || kind ? `<div class="q-meta">${kind ? `<span class="kind">${kind}</span>` : ""}${source}</div>` : ""}
          <h3>${q.prompt}</h3>
          ${bodyFor(q, a)}
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
    const wrongItems = items.filter((it, i) => scorable(it) && !(answers[i] && answers[i].correct));
    el.innerHTML = `
      <div class="quiz" style="--c:${color};">
        <div class="bar"><span style="width:100%"></span></div>
        <div class="result-banner ${pct >= EXAM_PASS_PERCENTAGE ? "is-pass" : "is-fail"}">
          <span class="result-score">${pct} %</span>
          <div><strong>Runde geschafft</strong><p>${right} von ${total} Fragen richtig.</p></div>
        </div>
        <div class="quiz-nav wrap">
          ${wrongItems.length ? `<button class="btn btn-primary" data-action="wrong" type="button">${plural(wrongItems.length, "Fehler", "Fehler")} wiederholen</button>` : ""}
          <button class="btn btn-soft" data-action="again" type="button">Nochmal von vorn</button>
          <button class="btn btn-ghost" data-action="shuffle" type="button">${icon("shuffle")} Neu mischen</button>
        </div>
        <div class="quiz-extra"></div>
      </div>`;
    if (onFinish) onFinish({ right, total, pct, extra: el.querySelector(".quiz-extra") });
  };

  el.oninput = (event) => {
    if (index >= items.length) return;
    const a = current();
    if (event.target.matches("[data-own]")) a.text = event.target.value;
    if (event.target.matches("[data-num]")) {
      a.num = event.target.value;
      const check = el.querySelector('[data-action="check"]');
      if (check) check.disabled = !a.num.trim();
    }
  };

  el.onkeydown = (event) => {
    if (event.key === "Enter" && event.target.matches("[data-num]")) {
      event.preventDefault();
      el.querySelector('[data-action="check"]')?.click();
    }
  };

  el.onchange = (event) => {
    const sel = event.target.closest("[data-match]");
    if (!sel || index >= items.length) return;
    const a = current();
    if (a.checked) return;
    const li = Number(sel.dataset.match);
    if (sel.value === "") delete a.match[li];
    else a.match[li] = Number(sel.value);
    draw();
  };

  el.onclick = (event) => {
    const btn = event.target.closest("button");
    if (!btn) return;
    const q = items[index] && items[index].q;
    const a = q ? current() : null;

    if (q && btn.dataset.conf && !a.checked) {
      a.conf = a.conf === btn.dataset.conf ? "" : btn.dataset.conf;
      return draw();
    }
    if (q && btn.dataset.seg !== undefined && !a.checked) {
      const si = Number(btn.dataset.seg);
      a.spot = a.spot.includes(si) ? a.spot.filter((v) => v !== si) : [...a.spot, si];
      return draw();
    }
    if (q && btn.dataset.move && !a.checked) {
      const [pos, dir] = btn.dataset.move.split(":").map(Number);
      const target = pos + dir;
      if (target >= 0 && target < a.order.length) [a.order[pos], a.order[target]] = [a.order[target], a.order[pos]];
      return draw();
    }
    if (q && btn.dataset.o !== undefined && !a.checked) {
      const oi = Number(btn.dataset.o);
      if (q.type === "single") a.selected = a.selected[0] === oi ? [] : [oi];
      else a.selected = a.selected.includes(oi) ? a.selected.filter((v) => v !== oi) : [...a.selected, oi];
      return draw();
    }
    switch (btn.dataset.action) {
      case "check":
        if (!isReady(q, a)) return;
        a.checked = true;
        a.correct = evaluate(q, a);
        a.whyOpen = !a.correct;
        if (record) recordAnswer(q, a.correct, a.conf || "");
        else trackActivity("frage", a.correct);
        checkBadgesSoon();
        return draw();
      case "reveal":
        a.revealed = true;
        return draw();
      case "why":
        a.whyOpen = !a.whyOpen;
        return draw();
      case "speak": {
        const parts = [stripTags(q.prompt).replace(/_{3,}/g, "Lücke")];
        if (q.options) q.options.forEach((opt, oi) => parts.push(`Antwort ${oi + 1}: ${opt}`));
        if (q.pairs) q.pairs.forEach((p) => parts.push(p[0]));
        if (q.steps) a.order.forEach((si, pos) => parts.push(`${pos + 1}: ${q.steps[si]}`));
        if (q.segments) parts.push(q.segments.map((x) => x.text).join(" "));
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
        return restart(items.filter((it, i) => scorable(it) && !(answers[i] && answers[i].correct)));
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

  const glossHits = glossaryEntries().filter((e) => matches(`${e.begriff} ${e.kurz} ${e.mehr}`));
  const cards = allCards().filter((c) => matches(`${c.front} ${c.back}`));
  const questions = allQuestions().filter((e) =>
    matches(`${e.q.prompt} ${(e.q.options || []).join(" ")} ${solutionText(e.q)} ${e.q.explanation || ""}`)
  );

  if (!glossHits.length && !cards.length && !questions.length) {
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
          : `<strong>Richtig:</strong> ${solutionText(q)}${q.explanation ? `<br />${q.explanation}` : ""}`;
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

  const termMarkup = glossHits
    .slice(0, SEARCH_LIMIT)
    .map((e) => `<details class="card hit"><summary><span class="q-meta"><span class="source" style="--c:${e.color};">${esc(e.quelle)}</span></span><strong>${esc(e.begriff)}</strong></summary><p>${esc(e.kurz)}${e.mehr ? `<br />${esc(e.mehr)}` : ""}</p><a class="hit-link" href="#/begriffe/${encodeURIComponent(e.bereich === "wb" ? e.gruppe : e.bereich)}">Im Glossar ${icon("arrowRight")}</a></details>`)
    .join("");

  return `
    ${glossHits.length ? `<h2 class="section-title">${icon("book")} Begriffe <small class="count">${glossHits.length}</small></h2><div class="stack">${termMarkup}</div>${more(glossHits.length)}` : ""}
    ${cards.length ? `<h2 class="section-title${glossHits.length ? " spaced" : ""}">${icon("cards")} Karteikarten <small class="count">${cards.length}</small></h2><div class="stack">${cardMarkup}</div>${more(cards.length)}` : ""}
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
  { key: "begriffe", title: "Begriffe A–Z", short: "Begriffe", iconName: "book", color: "#0f766e", items: (t) => t.begriffe || [] },
  { key: "lernkarten", title: "Lernkarten", short: "Lernkarten", iconName: "cards", color: "#ea580c", items: (t) => t.lernkarten || [] },
  { key: "quiz", title: "Quiz", short: "Quiz", iconName: "quiz", color: "#0891b2", items: (t) => t.quiz || [] },
  {
    key: "pruefung",
    title: "Prüfung",
    short: "Prüfung",
    iconName: "award",
    color: "#0f766e",
    items: (t) => {
      const closed = (t.quiz || []).filter((q) => isChoice(normalizeQuestion(q)));
      return closed.length >= 5 ? closed : [];
    }
  },
  { key: "training", title: "Training", short: "Training", iconName: "shuffle", color: "#9333ea", items: (t) => ((t.lernkarten || []).length >= 4 ? t.lernkarten : []) },
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
    case "training":
      return "10 gemischte Aufgaben";
    case "begriffe":
      return plural(items.length, "Fachbegriff", "Fachbegriffe");
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
        ${pretestBanner("thema", t.id)}
        ${tiles ? `<div class="tile-grid">${tiles}</div>` : `<div class="empty">Für dieses Thema sind noch keine Inhalte hinterlegt.</div>`}
        ${t.quelle ? `<p class="source-note">Quelle: ${esc(t.quelle)}</p>` : ""}`,
      mount: wirePretestSkip
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
          mountQuiz(
            root.querySelector("#quizMount"),
            items.map((q) => ({ q: normalizeQuestion(q), group: t.titel, themeId: t.id })),
            { color: section.color }
          );
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

    case "begriffe": {
      const entries = glossaryEntries().filter((e) => e.bereich === t.id);
      const base = `#/begriffe/${encodeURIComponent(t.id)}`;
      return {
        html: `<div class="glossary-tools"><form class="search-box" role="search" onsubmit="return false;">${icon("search")}<input id="glossarySearch" type="search" placeholder="Begriff filtern …" autocomplete="off" /></form><div class="glossary-learn"><a class="btn btn-primary" style="--c:#0f766e;" href="${base}/lernen">${icon("cards")} Lernen</a><a class="btn btn-soft" href="${base}/training">${icon("shuffle")} Training</a></div></div><div id="glossaryList">${glossaryListHtml(entries, starredTerms())}</div>`,
        mount: (root) => wireGlossary(root)
      };
    }

    case "training":
      return {
        html: `<p class="lead exam-intro">Automatisch gemischte Aufgaben aus den Lernkarten: zuordnen, passt/passt nicht und die richtige Erklärung wählen. Jede Runde ist anders.</p><div id="trainingMount"></div>`,
        mount(root) {
          mountTraining(root.querySelector("#trainingMount"), items.map((k) => ({ front: esc(k.vorne), back: esc(k.hinten) })), section.color);
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
  } else if (kind === "fokus") {
    entry.p = (entry.p || 0) + 1;
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
    [mistakeEntries().length, "offene Fehler"],
    [entries.reduce((s, e) => s + (e.p || 0), 0), "Fokus-Einheiten"],
    [`${loadJSON(BADGE_KEY, []).length}/${BADGES.length}`, "Abzeichen"]
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
      <h2 class="section-title spaced">${icon("target")} Stärken &amp; Schwächen</h2>
      <div class="card prog-list">${allGroupHealth()
        .sort((a, b) => ["rot", "gelb", "grau", "gruen"].indexOf(a.health.status) - ["rot", "gelb", "grau", "gruen"].indexOf(b.health.status))
        .map((r) => `<a class="health-row" href="${r.href}" style="--c:${r.color};">${healthDot(r.health)}<span class="prog-name">${r.name}</span><span class="health-label">${r.health.label}</span></a>`)
        .join("")}</div>
      <h2 class="section-title spaced">${icon("award")} Abzeichen</h2>
      ${badgesHtml()}
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

/* ==========================================================================
   Von der Frage zur Quelle: passende Karteikarte / Bericht zum Nachlesen
   ========================================================================== */

const STOPWORDS = new Set(
  "der die das den dem des und ist ein eine mit von zum zur bei aus auf fuer wie was wer wo man sich auch nur noch als hat sie ihr ihm wir uns welche welcher welches wird werden wurde nicht diese dieser dieses einer einem eines einen durch sowie beim dabei oder haben immer gibt sind warum wieso wofuer womit dafuer damit dass deren denen ihrer ihren unter ueber gegen zwischen innerhalb ausserhalb bitte richtig falsch beide andere anderen mehrere welchen".split(" ")
);
let cardsByGroup = null;

function cardsForGroup(group) {
  if (!cardsByGroup) {
    cardsByGroup = new Map();
    allCards().forEach((c) => {
      if (!cardsByGroup.has(c.label)) cardsByGroup.set(c.label, []);
      cardsByGroup.get(c.label).push(c);
    });
  }
  return cardsByGroup.get(group) || [];
}

function wordSet(text) {
  return new Set(
    foldText(text)
      .split(/[^a-z0-9]+/)
      .filter((w) => w.length >= 3 && !STOPWORDS.has(w))
  );
}

function findRelatedCard(group, q) {
  const cards = cardsForGroup(group);
  if (!cards.length) return null;
  const words = wordSet(`${q.prompt} ${solutionText(q)}`);
  if (!words.size) return null;
  let best = null;
  let bestScore = 0;
  cards.forEach((c) => {
    const front = wordSet(c.front);
    const back = wordSet(c.back);
    let score = 0;
    words.forEach((w) => {
      if (front.has(w)) score += 3;
      else if (back.has(w)) score += 1;
    });
    if (score > bestScore) {
      bestScore = score;
      best = c;
    }
  });
  return bestScore >= 3 ? best : null;
}

/* Begriffe aus dem Glossar, die in Frage/Lösung/Erklärung vorkommen. */
function glossaryForQuestion(item, q) {
  const text = ` ${foldText(`${q.prompt} ${solutionText(q)} ${q.explanation || ""}`).replace(/[^a-z0-9]+/g, " ")} `;
  const area = item.themeId ? item.themeId : null;
  const moduleTitle = item.group || item.label || "";
  const mod = wbModules.find((m) => m.title === moduleTitle);
  const hits = [];
  glossaryEntries().forEach((e) => {
    const names = [e.begriff.split("(")[0], (e.begriff.match(/\(([^)]+)\)/) || [])[1] || ""]
      .map((n) => foldText(n).replace(/[^a-z0-9]+/g, " ").trim())
      .filter((n) => n.length >= 3);
    if (!names.some((n) => text.includes(` ${n} `))) return;
    let score = Math.max(...names.map((n) => n.length));
    if ((area && e.bereich === area) || (mod && e.gruppe === `wb-${mod.id}`)) score += 100;
    hits.push({ e, score });
  });
  const seen = new Set();
  return hits
    .sort((a, b) => b.score - a.score)
    .filter(({ e }) => {
      const core = foldText(e.begriff.split("(")[0]).trim();
      if (seen.has(core)) return false;
      seen.add(core);
      return true;
    })
    .slice(0, 3)
    .map(({ e }) => e);
}

function explainHtml(item, q) {
  const terms = glossaryForQuestion(item, q);
  const related = relatedHtml(item, q);
  const termHtml = terms.length
    ? `<div class="explain-terms">${terms
        .map(
          (e) => `<div class="explain-term" style="--c:${e.color};"><strong>${esc(e.begriff)}</strong><p>${esc(e.kurz)}</p>${e.mehr ? `<p class="explain-more">${esc(e.mehr)}</p>` : ""}</div>`
        )
        .join("")}</div>`
    : "";
  if (!termHtml && !related) {
    return `<div class="explain"><p class="hint">Zu dieser Frage gibt es keine weitere Erklärung. Schau in die Lernkarten oder ins Glossar „Begriffe A–Z“.</p></div>`;
  }
  return `<div class="explain">${termHtml ? `<small class="explain-label">Die wichtigsten Begriffe dazu</small>${termHtml}` : ""}${related}</div>`;
}

function relatedHtml(item, q) {
  const group = item.group || item.label;
  const parts = [];
  if (q.quelle && item.themeId) {
    parts.push(
      `<a class="hit-link" href="#/thema/${encodeURIComponent(item.themeId)}/berichte">${icon("report")} Nachlesen im Bericht „${esc(q.quelle)}“</a>`
    );
  }
  const card = group ? findRelatedCard(group, q) : null;
  if (card) {
    parts.unshift(`
      <div class="related-card">
        <small>Passende Karteikarte</small>
        <strong>${card.front}</strong>
        <p>${card.back}</p>
      </div>`);
  }
  if (!parts.length && item.href) parts.push(`<a class="hit-link" href="${item.href}">Zum Thema ${icon("arrowRight")}</a>`);
  return parts.length ? `<div class="related">${parts.join("")}</div>` : "";
}

/* ==========================================================================
   Training aus Karteikarten: abwechslungsreiche Aufgaben automatisch
   ========================================================================== */

function cutText(text, max) {
  const clean = stripTags(text).replace(/\s+/g, " ").trim();
  return clean.length > max ? `${clean.slice(0, max - 1).trimEnd()} …` : clean;
}

function buildTraining(cards, count = 10) {
  const pool = cards.filter((c) => stripTags(c.front).length <= 180 && stripTags(c.back).length >= 8);
  if (pool.length < 4) return [];
  const pickOthers = (card, n) => sample(pool.filter((c) => c !== card && c.back !== card.back), n);
  const tasks = [];
  const kinds = shuffle(["pick", "fit", "match", "pick", "fit", "match", "pick", "fit", "pick", "match"]).slice(0, count);
  kinds.forEach((kind) => {
    if (kind === "match") {
      const set = sample(pool, Math.min(4, pool.length));
      tasks.push({
        q: {
          type: "match",
          kind: "match",
          prompt: "Ordne jedem Begriff die passende Erklärung zu.",
          pairs: set.map((c) => [cutText(c.front, 90), cutText(c.back, 110)]),
          explanation: ""
        }
      });
      return;
    }
    const card = pool[Math.floor(Math.random() * pool.length)];
    if (kind === "pick") {
      const others = pickOthers(card, 3);
      const options = shuffle([card, ...others]);
      tasks.push({
        q: {
          type: "single",
          kind: "pick",
          prompt: cutText(card.front, 180),
          options: options.map((c) => cutText(c.back, 160)),
          correct: [options.indexOf(card)],
          explanation: ""
        }
      });
      return;
    }
    const isTrue = Math.random() < 0.5;
    const other = pickOthers(card, 1)[0] || card;
    tasks.push({
      q: {
        type: "single",
        kind: "fit",
        prompt: `<span class="fit-term">${cutText(card.front, 140)}</span><span class="fit-def">${cutText(isTrue ? card.back : other.back, 220)}</span>`,
        options: ["Passt", "Passt nicht"],
        correct: [isTrue ? 0 : 1],
        explanation: isTrue ? "" : `Richtig wäre: ${cutText(card.back, 260)}`
      }
    });
  });
  return tasks;
}

function mountTraining(el, cards, color) {
  const tasks = buildTraining(cards);
  if (!tasks.length) {
    el.innerHTML = `<div class="empty small">Für das Training braucht es mindestens 4 Karteikarten.</div>`;
    return;
  }
  mountQuiz(el, tasks, { color, record: false, onReshuffle: () => mountTraining(el, cards, color) });
}

/* ==========================================================================
   Vortest: 5 Fragen, bevor man ein Modul / Thema durcharbeitet
   ========================================================================== */

const PRETEST_KEY = "lernapp-vortest";

function pretestPool(kind, id) {
  if (kind === "modul") {
    const m = wbModules.find((x) => String(x.id) === String(id));
    if (!m) return null;
    return {
      title: m.topic,
      color: m.color,
      href: `#/weiterbildung/modul/${m.id}/quiz`,
      items: m.questions.map(normalizeQuestion).filter(isChoice)
    };
  }
  const t = themen.find((x) => x.id === id);
  if (!t) return null;
  return {
    title: t.titel,
    color: t.farbe || "#0f766e",
    href: `#/thema/${encodeURIComponent(t.id)}`,
    items: (t.quiz || []).map(normalizeQuestion).filter(isChoice)
  };
}

function pretestBanner(kind, id) {
  const done = loadJSON(PRETEST_KEY, {});
  const key = `${kind}:${id}`;
  if (done[key]) return "";
  const pool = pretestPool(kind, id);
  if (!pool || pool.items.length < 5) return "";
  if (pool.items.some((q) => srs[questionId(q)])) return "";
  return `
    <div class="pretest" data-pretest="${esc(key)}">
      <span class="quick-icon" style="--c:#7c3aed;">${icon("target")}</span>
      <span class="quick-body">
        <strong>Erst mal raten? Vortest mit 5 Fragen</strong>
        <small>Wer vorher kurz testet, lernt danach nachweislich mehr, auch wenn die Antworten noch falsch sind.</small>
      </span>
      <span class="pretest-actions">
        <a class="btn btn-primary" style="--c:#7c3aed;" href="#/vortest/${encodeURIComponent(kind)}/${encodeURIComponent(id)}">Start</a>
        <button class="btn btn-ghost" type="button" data-pretest-skip>Später</button>
      </span>
    </div>`;
}

function wirePretestSkip(root) {
  root.querySelectorAll("[data-pretest-skip]").forEach((btn) =>
    btn.addEventListener("click", () => {
      const box = btn.closest("[data-pretest]");
      const done = loadJSON(PRETEST_KEY, {});
      done[box.dataset.pretest] = "übersprungen";
      saveJSON(PRETEST_KEY, done);
      box.remove();
    })
  );
}

function viewPretest(kind, id) {
  const pool = pretestPool(kind, id);
  if (!pool) return viewNotFound();
  return {
    title: `Vortest · ${stripTags(pool.title)}`,
    back: pool.href.replace(/\/quiz$/, ""),
    crumbs: [{ label: "Start", href: "#/" }, { label: stripTags(pool.title), href: pool.href.replace(/\/quiz$/, "") }, { label: "Vortest" }],
    html: `
      ${pageHead({
        eyebrow: "Vortest",
        title: pool.title,
        text: "5 Fragen, bevor du loslegst. Rate ruhig! Falsche Antworten zählen hier nicht als Fehler, sie machen dich nur neugierig auf die Lösung.",
        color: "#7c3aed"
      })}
      <div id="pretestMount"></div>`,
    mount(root) {
      mountQuiz(root.querySelector("#pretestMount"), sample(pool.items, 5).map((q) => ({ q })), {
        color: "#7c3aed",
        record: false,
        onFinish: ({ extra }) => {
          const done = loadJSON(PRETEST_KEY, {});
          done[`${kind}:${id}`] = todayStr();
          saveJSON(PRETEST_KEY, done);
          if (extra) extra.innerHTML = `<a class="btn btn-primary" style="--c:${pool.color};" href="${pool.href}">Jetzt richtig lernen ${icon("arrowRight")}</a>`;
        }
      });
    }
  };
}

/* ==========================================================================
   Schwachstellen-Ampel
   ========================================================================== */

function groupHealth(ids, mistakeCount) {
  const seen = ids.filter((id) => srs[id]);
  if (!seen.length && !mistakeCount) return { status: "grau", label: "Noch nicht begonnen", coverage: 0 };
  const avg = seen.reduce((s, id) => s + (srs[id].box || 0), 0) / Math.max(seen.length, 1);
  const coverage = seen.length / Math.max(ids.length, 1);
  if (mistakeCount >= 5 || (seen.length >= 5 && avg < 1.8)) return { status: "rot", label: "Hier hakt es noch", coverage, avg };
  if (coverage >= 0.6 && avg >= 3) return { status: "gruen", label: "Sitzt gut", coverage, avg };
  return { status: "gelb", label: "Auf gutem Weg", coverage, avg };
}

function allGroupHealth() {
  const mistakeByGroup = new Map();
  mistakeEntries().forEach((e) => mistakeByGroup.set(e.label, (mistakeByGroup.get(e.label) || 0) + 1));
  const rows = wbModules.map((m) => ({
    name: m.topic,
    group: m.title,
    color: m.color,
    href: `#/weiterbildung/modul/${m.id}/quiz`,
    health: groupHealth(
      [...m.flashcards.map(cardId), ...m.questions.map((q) => questionId(normalizeQuestion(q)))],
      mistakeByGroup.get(m.title) || 0
    )
  }));
  themen.forEach((t) => {
    const ids = [
      ...(t.lernkarten || []).map((k) => cardId({ front: esc(k.vorne), back: esc(k.hinten) })),
      ...(t.quiz || []).map(normalizeQuestion).filter(Boolean).map(questionId)
    ];
    rows.push({ name: esc(t.titel), group: t.titel, color: t.farbe || "#0f766e", href: `#/thema/${encodeURIComponent(t.id)}`, health: groupHealth(ids, mistakeByGroup.get(t.titel) || 0) });
  });
  return rows;
}

function healthDot(health) {
  return `<span class="health health-${health.status}" title="${esc(health.label)}" aria-label="${esc(health.label)}"></span>`;
}

/* ==========================================================================
   Eigene Karten & Merksätze
   ========================================================================== */

const OWN_KEY = "lernapp-eigene";

function ownCards() {
  return loadJSON(OWN_KEY, []);
}

function viewOwn() {
  const cards = ownCards();
  return {
    title: "Meine Karten",
    back: "#/",
    crumbs: [{ label: "Start", href: "#/" }, { label: "Meine Karten" }],
    html: `
      ${pageHead({
        eyebrow: "Selbst gemacht",
        title: "Meine Karten",
        text: "Eigene Karteikarten und Merksätze, z. B. aus deinem Arbeitsalltag. Sie laufen auch in „Heute dran“, in der Suche und in der Sicherung mit.",
        color: "#0d9488"
      })}
      <form class="card own-form" id="ownForm">
        <label>Vorderseite (Begriff oder Frage)<input id="ownFront" type="text" maxlength="200" required placeholder="z. B. Was ist ein Canonical-Tag?" /></label>
        <label>Rückseite (Erklärung oder Merksatz)<textarea id="ownBack" rows="3" maxlength="800" required placeholder="z. B. Zeigt Google die Original-URL bei doppelten Inhalten."></textarea></label>
        <button class="btn btn-primary" type="submit" style="--c:#0d9488;">${icon("plus")} Karte speichern</button>
        <p class="backup-msg" aria-live="polite"></p>
      </form>
      ${
        cards.length
          ? `<h2 class="section-title spaced">${icon("cards")} Lernen <small class="count">${cards.length}</small></h2>
             <div id="ownDeck"></div>
             <details class="card own-list">
               <summary>Alle Karten verwalten (${cards.length})</summary>
               <ul>${cards
                 .map(
                   (c) => `<li><span><strong>${esc(c.front)}</strong><small>${esc(c.back)}</small></span><button class="icon-btn" type="button" data-own-delete="${esc(c.id)}" aria-label="Löschen">${icon("x")}</button></li>`
                 )
                 .join("")}</ul>
             </details>`
          : `<div class="empty small">Noch keine eigenen Karten. Leg oben deine erste an.</div>`
      }`,
    mount(root) {
      root.querySelector("#ownForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const front = root.querySelector("#ownFront").value.trim();
        const back = root.querySelector("#ownBack").value.trim();
        if (!front || !back) return;
        const list = ownCards();
        list.unshift({ id: `e${Date.now().toString(36)}`, front, back, datum: todayStr() });
        saveJSON(OWN_KEY, list);
        cardsByGroup = null;
        checkBadgesSoon();
        render();
        toast("Karte gespeichert", "check");
      });
      root.querySelectorAll("[data-own-delete]").forEach((btn) =>
        btn.addEventListener("click", () => {
          if (!window.confirm("Diese Karte wirklich löschen?")) return;
          saveJSON(OWN_KEY, ownCards().filter((c) => c.id !== btn.dataset.ownDelete));
          cardsByGroup = null;
          render();
        })
      );
      const deck = root.querySelector("#ownDeck");
      if (deck) mountDeck(deck, cards.map((c) => ({ front: esc(c.front), back: esc(c.back) })), { key: "eigene", color: "#0d9488" });
    }
  };
}

/* ==========================================================================
   Fokus-Timer (Pomodoro): 25 Minuten lernen, 5 Minuten Pause
   ========================================================================== */

const FOCUS_DURATION = { lernen: 25 * 60, pause: 5 * 60 };
const focusState = { running: false, mode: "lernen", remaining: FOCUS_DURATION.lernen, endsAt: 0, timer: null };

function formatClock(sec) {
  const s = Math.max(0, Math.round(sec));
  return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}

function focusTick() {
  if (!focusState.running) return;
  focusState.remaining = Math.max(0, (focusState.endsAt - Date.now()) / 1000);
  if (focusState.remaining <= 0) focusComplete();
  updateFocusUI();
}

function focusStart() {
  focusState.running = true;
  focusState.endsAt = Date.now() + focusState.remaining * 1000;
  clearInterval(focusState.timer);
  focusState.timer = setInterval(focusTick, 1000);
  updateFocusUI();
}

function focusPause() {
  if (focusState.running) focusState.remaining = Math.max(0, (focusState.endsAt - Date.now()) / 1000);
  focusState.running = false;
  clearInterval(focusState.timer);
  updateFocusUI();
}

function focusReset(mode = focusState.mode) {
  focusPause();
  focusState.mode = mode;
  focusState.remaining = FOCUS_DURATION[mode];
  updateFocusUI();
}

function focusComplete() {
  focusState.running = false;
  clearInterval(focusState.timer);
  playChime();
  if (focusState.mode === "lernen") {
    trackActivity("fokus");
    toast("Fokus-Einheit geschafft! Gönn dir 5 Minuten Pause.", "check");
    focusState.mode = "pause";
  } else {
    toast("Pause vorbei. Weiter geht's!", "play");
    focusState.mode = "lernen";
  }
  focusState.remaining = FOCUS_DURATION[focusState.mode];
  checkBadgesSoon();
}

function playChime() {
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    [660, 880, 990].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.frequency.value = freq;
      osc.connect(gain);
      gain.connect(ctx.destination);
      const t = ctx.currentTime + i * 0.22;
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(0.25, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.35);
      osc.start(t);
      osc.stop(t + 0.4);
    });
  } catch (error) {
    /* kein Ton möglich */
  }
}

function updateFocusUI() {
  const pill = document.getElementById("focusPill");
  const active = focusState.running || focusState.remaining < FOCUS_DURATION[focusState.mode];
  if (pill) {
    pill.hidden = !active;
    pill.classList.toggle("is-pause", focusState.mode === "pause");
    pill.innerHTML = `${icon(focusState.running ? "flame" : "stop")}<span>${formatClock(focusState.remaining)}</span>`;
  }
  const page = document.querySelector("[data-focus-page]");
  if (!page) return;
  const total = FOCUS_DURATION[focusState.mode];
  page.style.setProperty("--p", `${(1 - focusState.remaining / total) * 100}%`);
  page.querySelector("[data-focus-time]").textContent = formatClock(focusState.remaining);
  page.querySelector("[data-focus-mode]").textContent = focusState.mode === "lernen" ? "Lernzeit" : "Pause";
  page.classList.toggle("is-pause", focusState.mode === "pause");
  page.querySelector("[data-focus-toggle]").innerHTML = focusState.running ? `${icon("stop")} Pausieren` : `${icon("play")} ${focusState.remaining < total ? "Weiter" : "Starten"}`;
  page.querySelectorAll("[data-focus-mode-btn]").forEach((b) => b.classList.toggle("is-active", b.dataset.focusModeBtn === focusState.mode));
}

function viewFocus() {
  const today = loadJSON(ACTIVITY_KEY, {})[todayStr()] || {};
  return {
    title: "Fokus-Timer",
    back: "#/",
    crumbs: [{ label: "Start", href: "#/" }, { label: "Fokus-Timer" }],
    html: `
      ${pageHead({ eyebrow: "Konzentriert lernen", title: "Fokus-Timer", text: "25 Minuten lernen, 5 Minuten Pause. Der Timer läuft weiter, während du in der App lernst. Oben siehst du die Restzeit.", color: "#dc2626" })}
      <div class="focus" data-focus-page>
        <div class="focus-ring"><div class="focus-inner"><span data-focus-mode>Lernzeit</span><strong data-focus-time>25:00</strong></div></div>
        <div class="seg focus-modes">
          <button type="button" data-focus-mode-btn="lernen">Lernen 25</button>
          <button type="button" data-focus-mode-btn="pause">Pause 5</button>
        </div>
        <div class="focus-actions">
          <button class="btn btn-primary btn-wide" type="button" data-focus-toggle style="--c:#dc2626;">Starten</button>
          <button class="btn btn-ghost" type="button" data-focus-reset>Zurücksetzen</button>
        </div>
        <p class="hint center">Heute geschafft: ${plural(today.p || 0, "Fokus-Einheit", "Fokus-Einheiten")}</p>
        <a class="btn btn-soft" href="#/heute">${icon("play")} Direkt mit „Heute dran“ loslegen</a>
      </div>`,
    mount(root) {
      root.querySelector("[data-focus-toggle]").addEventListener("click", () => (focusState.running ? focusPause() : focusStart()));
      root.querySelector("[data-focus-reset]").addEventListener("click", () => focusReset());
      root.querySelectorAll("[data-focus-mode-btn]").forEach((b) => b.addEventListener("click", () => focusReset(b.dataset.focusModeBtn)));
      updateFocusUI();
    }
  };
}

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) focusTick();
});

/* ==========================================================================
   Abzeichen & kleine Hinweise (Toast)
   ========================================================================== */

const BADGE_KEY = "lernapp-abzeichen";
const SUCCESS_KEY = "lernapp-erfolge";

const BADGES = [
  { id: "serie3", title: "Dranbleiber", text: "3 Tage in Folge gelernt", icon: "flame", test: (s) => s.best >= 3 },
  { id: "serie7", title: "Wochen-Serie", text: "7 Tage in Folge gelernt", icon: "flame", test: (s) => s.best >= 7 },
  { id: "serie30", title: "Lern-Gewohnheit", text: "30 Tage in Folge gelernt", icon: "flame", test: (s) => s.best >= 30 },
  { id: "karten10", title: "Erste Schritte", text: "10 Karten gewusst", icon: "cards", test: (s) => s.known >= 10 },
  { id: "karten100", title: "Kartenprofi", text: "100 Karten gewusst", icon: "cards", test: (s) => s.known >= 100 },
  { id: "karten500", title: "Wissensspeicher", text: "500 Karten gewusst", icon: "cards", test: (s) => s.known >= 500 },
  { id: "fragen50", title: "Neugierig", text: "50 Fragen beantwortet", icon: "quiz", test: (s) => s.questions >= 50 },
  { id: "fragen250", title: "Quizmaster", text: "250 Fragen beantwortet", icon: "quiz", test: (s) => s.questions >= 250 },
  { id: "fragen1000", title: "Tausender", text: "1.000 Fragen beantwortet", icon: "quiz", test: (s) => s.questions >= 1000 },
  { id: "fokus1", title: "Fokussiert", text: "Erste Fokus-Einheit geschafft", icon: "target", test: (s) => s.focus >= 1 },
  { id: "fokus10", title: "Tiefenarbeit", text: "10 Fokus-Einheiten geschafft", icon: "target", test: (s) => s.focus >= 10 },
  { id: "pruefung", title: "Bestanden!", text: "Eine Prüfung bestanden", icon: "award", test: (s) => s.examPassed },
  { id: "eigene", title: "Selbermacher", text: "Eigene Karte angelegt", icon: "pencil", test: (s) => s.own >= 1 },
  { id: "fehlerfrei", title: "Aufgeräumt", text: "Alle Fehler abgearbeitet (nach mind. 20 Fragen)", icon: "check", test: (s) => s.questions >= 20 && s.mistakes === 0 }
];

function badgeStats() {
  const act = loadJSON(ACTIVITY_KEY, {});
  const days = Object.values(act);
  return {
    best: Math.max(bestStreak(act), currentStreak(act)),
    known: knownCards.size,
    questions: days.reduce((s, e) => s + (e.f || 0), 0),
    focus: days.reduce((s, e) => s + (e.p || 0), 0),
    examPassed: !!loadJSON(SUCCESS_KEY, {}).pruefung,
    own: ownCards().length,
    mistakes: mistakes.length
  };
}

let badgeTimer = null;
function checkBadgesSoon() {
  clearTimeout(badgeTimer);
  badgeTimer = setTimeout(checkBadges, 400);
}

function checkBadges() {
  const unlocked = new Set(loadJSON(BADGE_KEY, []));
  const stats = badgeStats();
  const fresh = BADGES.filter((b) => !unlocked.has(b.id) && b.test(stats));
  if (!fresh.length) return;
  fresh.forEach((b) => unlocked.add(b.id));
  saveJSON(BADGE_KEY, [...unlocked]);
  fresh.forEach((b, i) => setTimeout(() => toast(`Abzeichen freigeschaltet: ${b.title}`, b.icon, true), i * 1800));
}

function badgesHtml() {
  const unlocked = new Set(loadJSON(BADGE_KEY, []));
  return `<div class="badges">${BADGES.map(
    (b) => `
      <div class="badge-item ${unlocked.has(b.id) ? "is-on" : ""}" title="${esc(b.text)}">
        <span class="badge-icon">${icon(b.icon)}</span>
        <strong>${esc(b.title)}</strong>
        <small>${esc(b.text)}</small>
      </div>`
  ).join("")}</div>`;
}

function toast(message, iconName = "check", special = false) {
  const el = document.createElement("div");
  el.className = `toast ${special ? "is-special" : ""}`;
  el.setAttribute("role", "status");
  el.innerHTML = `${icon(iconName)}<span>${esc(message)}</span>`;
  document.body.appendChild(el);
  setTimeout(() => el.classList.add("is-out"), 3200);
  setTimeout(() => el.remove(), 3700);
}

/* ==========================================================================
   Glossar „Begriffe A–Z“
   Quellen: window.LERN_GLOSSAR_WB (Weiterbildung) + Feld `begriffe` je Thema.
   Filter-Routen: #/begriffe/<filter>[/lernen|/training]
     filter = alle | wb | wb-<modulId> | <themaId> | gemerkt
   ========================================================================== */

const GLOSSAR_STAR_KEY = "lernapp-begriffe-merk";
let glossaryCache = null;

function glossaryEntries() {
  if (glossaryCache) return glossaryCache;
  const list = [];
  (Array.isArray(window.LERN_GLOSSAR_WB) ? window.LERN_GLOSSAR_WB : []).forEach((b) => {
    if (!b || !b.begriff || !b.kurz) return;
    const m = wbModules.find((x) => x.id === Number(b.modul));
    list.push({
      begriff: String(b.begriff),
      kurz: String(b.kurz),
      mehr: b.mehr ? String(b.mehr) : "",
      siehe: Array.isArray(b.siehe) ? b.siehe : [],
      gruppe: m ? `wb-${m.id}` : "wb",
      bereich: "wb",
      quelle: m ? `Modul ${m.id}: ${m.topic}` : WEITERBILDUNG.titel,
      color: m ? m.color : WEITERBILDUNG.farbe,
      href: m ? `#/weiterbildung/modul/${m.id}/karten` : "#/weiterbildung"
    });
  });
  themen.forEach((t) =>
    (Array.isArray(t.begriffe) ? t.begriffe : []).forEach((b) => {
      if (!b || !b.begriff || !b.kurz) return;
      list.push({
        begriff: String(b.begriff),
        kurz: String(b.kurz),
        mehr: b.mehr ? String(b.mehr) : "",
        siehe: Array.isArray(b.siehe) ? b.siehe : [],
        gruppe: t.id,
        bereich: t.id,
        quelle: t.titel,
        color: t.farbe || "#0f766e",
        href: `#/thema/${encodeURIComponent(t.id)}`
      });
    })
  );
  list.forEach((e) => {
    e.id = `g${hashText(`${e.gruppe}|${e.begriff}`)}`;
    e.letter = glossaryLetter(e.begriff);
  });
  list.sort((a, b) => a.begriff.localeCompare(b.begriff, "de", { sensitivity: "base" }));
  glossaryCache = list;
  return list;
}

function glossaryLetter(text) {
  const c = foldText(text).replace(/^[^a-z0-9]+/, "").charAt(0).toUpperCase();
  return /[A-Z]/.test(c) ? c : "#";
}

function starredTerms() {
  return new Set(loadJSON(GLOSSAR_STAR_KEY, []));
}

function glossaryFilterInfo(filter) {
  if (!filter || filter === "alle") return { key: "alle", label: "Alle Begriffe", match: () => true };
  if (filter === "gemerkt") {
    const stars = starredTerms();
    return { key: "gemerkt", label: "Meine Begriffe", match: (e) => stars.has(e.id) };
  }
  if (filter === "wb") return { key: "wb", label: WEITERBILDUNG.titel, match: (e) => e.bereich === "wb" };
  if (filter.startsWith("wb-")) {
    const m = wbModules.find((x) => `wb-${x.id}` === filter);
    return { key: filter, label: m ? `Modul ${m.id}: ${m.topic}` : "Modul", match: (e) => e.gruppe === filter };
  }
  const t = themen.find((x) => x.id === filter);
  return { key: filter, label: t ? t.titel : filter, match: (e) => e.bereich === filter };
}

/* Begriffe als Karteikarten (für Lernen/Training und „Heute dran“). */
function termToCard(e) {
  return {
    front: esc(e.begriff),
    back: `${esc(e.kurz)}${e.mehr ? `<br /><small class="card-more">${esc(e.mehr)}</small>` : ""}`,
    label: `Begriff · ${esc(e.quelle)}`,
    color: e.color,
    href: `#/begriffe/${encodeURIComponent(e.bereich === "wb" ? e.gruppe : e.bereich)}`
  };
}

function glossaryListHtml(entries, stars) {
  if (!entries.length) return `<div class="empty small">Keine Begriffe gefunden.</div>`;
  const byLetter = new Map();
  entries.forEach((e) => {
    if (!byLetter.has(e.letter)) byLetter.set(e.letter, []);
    byLetter.get(e.letter).push(e);
  });
  return [...byLetter.entries()]
    .map(
      ([letter, list]) => `
        <section class="term-group" id="buchstabe-${letter}">
          <h2 class="term-letter">${letter}</h2>
          <div class="term-list">${list
            .map(
              (e) => `
                <details class="term" data-term="${e.id}" data-name="${esc(foldText(e.begriff))}" style="--c:${e.color};">
                  <summary>
                    <span class="term-main"><strong>${esc(e.begriff)}</strong><span class="term-kurz">${esc(e.kurz)}</span></span>
                    <button class="star ${stars.has(e.id) ? "is-on" : ""}" type="button" data-star="${e.id}" aria-label="Merken" title="Merken">★</button>
                  </summary>
                  <div class="term-body">
                    ${e.mehr ? `<p>${esc(e.mehr)}</p>` : ""}
                    ${
                      e.siehe.length
                        ? `<p class="term-see">Siehe auch: ${e.siehe.map((s) => `<button class="link-btn" type="button" data-see="${esc(s)}" data-see-group="${esc(e.gruppe)}">${esc(s)}</button>`).join(" ")}</p>`
                        : ""
                    }
                    <a class="term-source" href="${e.href}"><span class="source" style="--c:${e.color};">${esc(e.quelle)}</span></a>
                  </div>
                </details>`
            )
            .join("")}</div>
        </section>`
    )
    .join("");
}

function viewGlossary(filter = "alle", mode = "") {
  const all = glossaryEntries();
  const info = glossaryFilterInfo(filter);
  const entries = all.filter(info.match);
  const stars = starredTerms();
  const base = `#/begriffe/${encodeURIComponent(info.key)}`;
  const crumbs = [{ label: "Start", href: "#/" }, { label: "Begriffe A–Z", href: "#/begriffe" }];

  if (!all.length) {
    return {
      title: "Begriffe A–Z",
      back: "#/",
      crumbs: [{ label: "Start", href: "#/" }, { label: "Begriffe A–Z" }],
      html: `${pageHead({ eyebrow: "Glossar", title: "Begriffe A–Z", color: "#0f766e" })}<div class="empty">Die Begriffslisten werden gerade erstellt.</div>`
    };
  }

  if (mode === "lernen" || mode === "training") {
    const cards = entries.map(termToCard);
    return {
      title: `${mode === "lernen" ? "Begriffe lernen" : "Begriffe-Training"} · ${info.label}`,
      back: base,
      crumbs: [...crumbs, { label: info.label, href: base }, { label: mode === "lernen" ? "Lernen" : "Training" }],
      html: `
        ${pageHead({
          eyebrow: info.label,
          title: mode === "lernen" ? "Begriffe lernen" : "Begriffe-Training",
          text: mode === "lernen" ? `${plural(cards.length, "Begriff", "Begriffe")} als Karteikarten mit Wiederholung in Abständen.` : "Zuordnen, passt/passt nicht und die richtige Erklärung wählen. Jede Runde ist anders.",
          color: "#0f766e"
        })}
        <div id="glossaryMount"></div>`,
      mount(root) {
        const el = root.querySelector("#glossaryMount");
        if (mode === "lernen") mountDeck(el, cards, { key: `begriffe-${info.key}`, color: "#0f766e" });
        else mountTraining(el, cards, "#0f766e");
      }
    };
  }

  const filters = [
    ["alle", "Alle", all.length],
    ["gemerkt", "★ Gemerkt", all.filter((e) => stars.has(e.id)).length],
    ["wb", "Weiterbildung", all.filter((e) => e.bereich === "wb").length],
    ...themen.filter((t) => (t.begriffe || []).length).map((t) => [t.id, t.titel, all.filter((e) => e.bereich === t.id).length])
  ].filter(([key, , n]) => n > 0 || key === "gemerkt" || key === info.key);
  const letters = [...new Set(entries.map((e) => e.letter))];

  return {
    title: `Begriffe A–Z${info.key !== "alle" ? ` · ${info.label}` : ""}`,
    back: "#/",
    crumbs: info.key === "alle" ? [{ label: "Start", href: "#/" }, { label: "Begriffe A–Z" }] : [...crumbs, { label: info.label }],
    html: `
      ${pageHead({
        eyebrow: "Glossar",
        title: info.key === "alle" ? "Begriffe A–Z" : esc(info.label),
        text: `${plural(entries.length, "Fachbegriff", "Fachbegriffe")} zum Nachschlagen. Tippe einen Begriff an für mehr, ★ merkt ihn dir. Gemerkte Begriffe kommen auch in „Heute dran“.`,
        color: "#0f766e"
      })}
      <div class="chips glossary-filters">${filters
        .map(([key, label, n]) => `<a class="chip ${key === info.key ? "is-active" : ""}" href="#/begriffe/${encodeURIComponent(key)}">${esc(label)} <small>${n}</small></a>`)
        .join("")}</div>
      <div class="glossary-tools">
        <form class="search-box" role="search" onsubmit="return false;">
          ${icon("search")}
          <input id="glossarySearch" type="search" placeholder="Begriff filtern …" autocomplete="off" />
        </form>
        ${
          entries.length >= 4
            ? `<div class="glossary-learn">
                <a class="btn btn-primary" style="--c:#0f766e;" href="${base}/lernen">${icon("cards")} Lernen</a>
                <a class="btn btn-soft" href="${base}/training">${icon("shuffle")} Training</a>
              </div>`
            : ""
        }
      </div>
      ${letters.length > 1 ? `<nav class="az-bar" aria-label="Buchstaben">${letters.map((l) => `<button type="button" data-letter="${l}">${l}</button>`).join("")}</nav>` : ""}
      <div id="glossaryList">${glossaryListHtml(entries, stars)}</div>`,
    mount: (root) => wireGlossary(root)
  };
}

function wireGlossary(root) {
  const list = root.querySelector("#glossaryList") || root;
  root.addEventListener("click", (event) => {
    const star = event.target.closest("[data-star]");
    if (star) {
      event.preventDefault();
      const stars = starredTerms();
      if (stars.has(star.dataset.star)) stars.delete(star.dataset.star);
      else stars.add(star.dataset.star);
      saveJSON(GLOSSAR_STAR_KEY, [...stars]);
      star.classList.toggle("is-on");
      return;
    }
    const letter = event.target.closest("[data-letter]");
    if (letter) {
      root.querySelector(`#buchstabe-${letter.dataset.letter}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    const see = event.target.closest("[data-see]");
    if (see) {
      const name = foldText(see.dataset.see);
      const target =
        [...root.querySelectorAll(".term")].find((t) => t.dataset.name === name) ||
        null;
      if (target) {
        target.open = true;
        target.scrollIntoView({ behavior: "smooth", block: "center" });
        target.classList.add("is-flash");
        setTimeout(() => target.classList.remove("is-flash"), 1200);
      } else {
        location.hash = `#/suche/${encodeURIComponent(see.dataset.see)}`;
      }
    }
  });
  const input = root.querySelector("#glossarySearch");
  if (input) {
    input.addEventListener("input", () => {
      const q = foldText(input.value.trim());
      list.querySelectorAll(".term").forEach((t) => {
        const text = foldText(t.textContent);
        t.hidden = !!q && !text.includes(q);
      });
      list.querySelectorAll(".term-group").forEach((g) => {
        g.hidden = ![...g.querySelectorAll(".term")].some((t) => !t.hidden);
      });
    });
  }
}

/* ==========================================================================
   Version & Neuigkeiten
   ========================================================================== */

const CHANGELOG = Array.isArray(window.LERN_CHANGELOG) ? window.LERN_CHANGELOG : [];
const APP_VERSION = CHANGELOG.length ? CHANGELOG[0].version : "";
const VERSION_SEEN_KEY = "lernapp-version-gesehen";
/* Wer die App schon vor der Versionsanzeige hatte, bekommt die Neuigkeiten ab hier gezeigt. */
const VERSION_FALLBACK_SEEN = "2.1";

function compareVersions(a, b) {
  const pa = String(a).split(".").map(Number);
  const pb = String(b).split(".").map(Number);
  for (let i = 0; i < Math.max(pa.length, pb.length); i += 1) {
    const d = (pa[i] || 0) - (pb[i] || 0);
    if (d) return d;
  }
  return 0;
}

function changelogEntryHtml(entry, open = true) {
  return `
    <article class="card news-entry">
      <div class="news-head">
        <span class="news-version">Version ${esc(entry.version)}</span>
        <span class="news-date">${esc(entry.datum || "")}</span>
      </div>
      ${entry.titel ? `<h3>${esc(entry.titel)}</h3>` : ""}
      ${open ? `<ul class="news-list">${(entry.neu || []).map((n) => `<li>${esc(n)}</li>`).join("")}</ul>` : ""}
    </article>`;
}

function viewNews() {
  return {
    title: "Was ist neu?",
    back: "#/",
    crumbs: [{ label: "Start", href: "#/" }, { label: "Was ist neu?" }],
    html: `
      ${pageHead({
        eyebrow: APP_VERSION ? `Aktuell: Version ${APP_VERSION}` : "Versionen",
        title: "Was ist neu?",
        text: "Alle Updates der Lernwelt, das neueste zuerst.",
        color: "#4f46e5"
      })}
      <div class="stack">${CHANGELOG.map((e) => changelogEntryHtml(e)).join("")}</div>`
  };
}

function versionFooter() {
  if (!APP_VERSION) return "";
  return `<a class="version-tag" href="#/neuigkeiten">Lernwelt · Version ${esc(APP_VERSION)} · Was ist neu?</a>`;
}

function showWhatsNewIfUpdated() {
  if (!APP_VERSION) return;
  let seen = null;
  try {
    seen = window.localStorage.getItem(VERSION_SEEN_KEY);
  } catch (error) {
    return;
  }
  const markSeen = () => {
    try {
      window.localStorage.setItem(VERSION_SEEN_KEY, APP_VERSION);
    } catch (error) {
      /* egal */
    }
  };
  const baseline = seen || VERSION_FALLBACK_SEEN;
  const fresh = CHANGELOG.filter((e) => compareVersions(e.version, baseline) > 0);
  if (!fresh.length) {
    if (seen !== APP_VERSION) markSeen();
    return;
  }

  const modal = document.createElement("div");
  modal.className = "modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.innerHTML = `
    <div class="modal-card">
      <div class="modal-badge">${icon("sparkle")}</div>
      <p class="eyebrow">Update installiert</p>
      <h2>Neu in Version ${esc(APP_VERSION)}</h2>
      <div class="modal-scroll">${fresh.map((e) => changelogEntryHtml(e)).join("")}</div>
      <button class="btn btn-primary btn-wide" type="button" data-modal-close>Alles klar</button>
    </div>`;
  const close = () => {
    markSeen();
    modal.remove();
    document.body.classList.remove("has-overlay");
  };
  modal.addEventListener("click", (event) => {
    if (event.target === modal || event.target.closest("[data-modal-close]")) close();
  });
  document.body.appendChild(modal);
  document.body.classList.add("has-overlay");
}

/* ---------- Start ---------- */

window.addEventListener("hashchange", render);
appEl.addEventListener("click", (event) => {
  const lead = event.target.closest(".page-head .lead");
  if (lead) lead.classList.toggle("is-open");
});
render();
showWhatsNewIfUpdated();

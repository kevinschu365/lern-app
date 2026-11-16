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
  x: '<path d="M18 6 6 18M6 6l12 12"/>'
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

function recordAnswer(q, correct) {
  if (!q || q.type === "open") return;
  const id = questionId(q);
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
  appEl.innerHTML = view.html;
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
      ${quickLinks ? `<div class="quick-row">${quickLinks}</div>` : ""}
      <div class="topic-grid">${cards}</div>`
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

function mountExam(el) {
  let questions = [];
  let selections = {};
  let result = null;

  const start = () => {
    const pool = [];
    readyModules().forEach((m) =>
      m.questions
        .filter((q) => q.type === "single" || q.type === "multi")
        .forEach((q) => pool.push({ q: normalizeQuestion(q), title: m.title, color: m.color }))
    );
    questions = sample(pool, EXAM_QUESTION_COUNT);
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
        <p class="hint">Offene Frage: Überleg dir deine Antwort, dann vergleiche.</p>
        ${a.revealed ? `<div class="answer-box"><strong>Musterantwort</strong><p>${q.sample}</p></div>` : ""}`;
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
            ? `<div class="answer-box ${a.correct ? "is-pass" : "is-fail"}"><strong>${a.correct ? "Richtig!" : "Nicht ganz. Grün markiert ist die richtige Lösung."}</strong>${q.explanation ? `<p>${q.explanation}</p>` : ""}</div>`
            : `<p class="hint">Es können eine oder mehrere Antworten richtig sein.</p>`
        }`;
      actions = a.checked
        ? `<button class="btn btn-primary" data-action="next" type="button">${index === items.length - 1 ? "Auswertung" : "Weiter"} ${icon("arrowRight")}</button>`
        : `<button class="btn btn-primary" data-action="check" type="button" ${a.selected.length ? "" : "disabled"}>Ergebnis ansehen</button>`;
    }

    el.innerHTML = `
      <div class="quiz" style="--c:${color};">
        <div class="quiz-top">
          <span>Frage ${index + 1} von ${items.length}</span>
          <span class="quiz-score">${icon("check")} ${correctCount()} richtig</span>
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

  el.onclick = (event) => {
    const btn = event.target.closest("button");
    if (!btn) return;
    const q = items[index] && items[index].q;
    const a = answers[index] || (answers[index] = { selected: [], checked: false, correct: false, revealed: false });

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
        recordAnswer(q, a.correct);
        return draw();
      case "reveal":
        a.revealed = true;
        return draw();
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

function mountDeck(el, cards, { key = null, color = "#2563eb", soft = null } = {}) {
  if (!cards.length) {
    el.innerHTML = `<div class="empty small">Noch keine Karteikarten hinterlegt.</div>`;
    return;
  }

  /* Modus "offen": nur Karten, die noch nicht als gewusst markiert sind. */
  const ids = cards.map(cardId);
  const openIndices = () => cards.map((_, i) => i).filter((i) => !knownCards.has(ids[i]));
  let mode = openIndices().length ? "offen" : "alle";
  let order = [];
  let pos = 0;
  let flipped = false;

  const buildOrder = (keepPos) => {
    order = mode === "offen" ? openIndices() : cards.map((_, i) => i);
    if (!keepPos) pos = 0;
    if (pos >= order.length) pos = 0;
  };

  const saved = key ? deckState[key] : null;
  buildOrder(false);
  if (saved && mode === "alle" && saved.index < cards.length) pos = saved.index;

  const persist = () => {
    if (!key || mode !== "alle") return;
    deckState[key] = { index: pos };
    saveJSON(DECK_KEY, deckState);
  };

  const knownCount = () => ids.filter((id) => knownCards.has(id)).length;

  const header = () => {
    const known = knownCount();
    return `
      <div class="deck-head">
        <div class="seg" role="tablist">
          <button type="button" class="${mode === "offen" ? "is-active" : ""}" data-mode="offen">Noch offen <small>${cards.length - known}</small></button>
          <button type="button" class="${mode === "alle" ? "is-active" : ""}" data-mode="alle">Alle <small>${cards.length}</small></button>
        </div>
        <span class="deck-known">${icon("check")} ${known} gewusst</span>
      </div>`;
  };

  const draw = () => {
    if (!order.length) {
      el.innerHTML = `
        <div class="deck" style="--c:${color}; --c-soft:${soft || hexToSoft(color, 0.14)};">
          ${header()}
          <div class="result-banner is-pass">
            <span class="result-score">${icon("check")}</span>
            <div><strong>Alle Karten gewusst!</strong><p>Stark. Du kannst alle nochmal durchgehen oder den Stapel zurücksetzen.</p></div>
          </div>
          <div class="quiz-nav wrap">
            <button class="btn btn-soft" type="button" data-mode="alle">Alle ansehen</button>
            <button class="btn btn-ghost" type="button" data-action="reset">Stapel zurücksetzen</button>
          </div>
        </div>`;
      return;
    }

    const i = order[pos];
    const card = cards[i];
    const c = card.color || color;
    const s = card.soft || soft || hexToSoft(c, 0.14);
    const isKnown = knownCards.has(ids[i]);
    el.innerHTML = `
      <div class="deck" style="--c:${c}; --c-soft:${s};">
        ${header()}
        <div class="quiz-top">
          <span>Karte ${pos + 1} von ${order.length}</span>
          ${card.label ? `<span class="source" style="--c:${c};">${card.label}</span>` : ""}
        </div>
        <div class="bar"><span style="width:${Math.round(((pos + 1) / order.length) * 100)}%"></span></div>
        <button class="flip ${flipped ? "is-flipped" : ""}" type="button" data-action="flip" aria-label="Karte umdrehen">
          <span class="flip-inner">
            <span class="flip-face flip-front"><small>Begriff${isKnown ? " · gewusst" : ""}</small><strong>${card.front}</strong><em>Tippen zum Umdrehen</em></span>
            <span class="flip-face flip-back"><small>Erklärung</small><span>${card.back}</span></span>
          </span>
        </button>
        <div class="judge">
          <button class="btn judge-no" data-action="unknown" type="button">${icon("x")} Noch nicht</button>
          <button class="btn judge-yes" data-action="known" type="button">${icon("check")} Weiß ich</button>
        </div>
        <div class="deck-nav">
          <button class="btn btn-ghost" data-action="prev" type="button">Zurück</button>
          <button class="btn btn-ghost" data-action="shuffle" type="button">${icon("shuffle")} Mischen</button>
          <button class="btn btn-ghost" data-action="next" type="button">Überspringen</button>
        </div>
      </div>`;
  };

  const advance = () => {
    pos = (pos + 1) % Math.max(order.length, 1);
  };

  el.onclick = (event) => {
    const btn = event.target.closest("button");
    if (!btn) return;
    if (btn.dataset.mode) {
      mode = btn.dataset.mode;
      flipped = false;
      buildOrder(false);
      return draw();
    }
    const i = order[pos];
    switch (btn.dataset.action) {
      case "flip":
        flipped = !flipped;
        el.querySelector(".flip").classList.toggle("is-flipped", flipped);
        return;
      case "known":
        knownCards.add(ids[i]);
        saveJSON(KNOWN_KEY, [...knownCards]);
        if (mode === "offen") {
          order.splice(pos, 1);
          if (pos >= order.length) pos = 0;
        } else advance();
        break;
      case "unknown":
        if (knownCards.delete(ids[i])) saveJSON(KNOWN_KEY, [...knownCards]);
        advance();
        break;
      case "prev":
        pos = (pos - 1 + order.length) % order.length;
        break;
      case "next":
        advance();
        break;
      case "shuffle":
        order = shuffle(order);
        pos = 0;
        break;
      case "reset":
        ids.forEach((id) => knownCards.delete(id));
        saveJSON(KNOWN_KEY, [...knownCards]);
        mode = "offen";
        buildOrder(false);
        break;
      default:
        return;
    }
    flipped = false;
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
                ${a.datei ? `<audio controls preload="metadata" src="${themaFile(t, a.datei)}"></audio>` : ""}
                ${a.youtube ? youtubeEmbed(a.youtube) : ""}
              </article>`
          )
          .join("")}</div>`
      };

    case "kurzvideo":
    case "videouebersicht":
      return {
        html: `<div class="stack">${items
          .map(
            (v) => `
              <article class="card media">
                ${mediaHead(v)}
                ${v.datei ? `<video controls playsinline preload="metadata" src="${themaFile(t, v.datei)}"></video>` : ""}
                ${v.youtube ? youtubeEmbed(v.youtube) : ""}
                ${!v.datei && !v.youtube ? `<p class="hint">Video folgt noch.</p>` : ""}
              </article>`
          )
          .join("")}</div>`
      };

    case "praesentation":
      return {
        html: `<div class="stack">${items
          .map((p) => {
            const src = themaFile(t, p.datei);
            return `
              <article class="card media">
                <div class="media-head"><h3>${esc(p.titel || "Präsentation")}</h3>
                  <a class="btn btn-soft" href="${src}" target="_blank" rel="noopener">${icon("external")} Vollbild öffnen</a>
                </div>
                <iframe class="pdf-frame" src="${src}#view=FitH" title="${esc(p.titel || "Präsentation")}"></iframe>
              </article>`;
          })
          .join("")}</div>`
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
                ${mm.bild ? `<a href="${themaFile(t, mm.bild)}" target="_blank" rel="noopener"><img class="mindmap-img" src="${themaFile(t, mm.bild)}" alt="${esc(mm.titel || "Mindmap")}" loading="lazy" /></a>` : ""}
              </article>`
          )
          .join("")}</div>`,
        mount(root) {
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

/* ---------- Start ---------- */

window.addEventListener("hashchange", render);
appEl.addEventListener("click", (event) => {
  const lead = event.target.closest(".page-head .lead");
  if (lead) lead.classList.toggle("is-open");
});
render();

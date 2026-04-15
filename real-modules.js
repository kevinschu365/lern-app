const palette = [
  { color: "#0f766e", soft: "#ccfbf1" },
  { color: "#b45309", soft: "#fef3c7" },
  { color: "#b91c1c", soft: "#fee2e2" },
  { color: "#7c3aed", soft: "#ede9fe" },
  { color: "#2563eb", soft: "#dbeafe" },
  { color: "#15803d", soft: "#dcfce7" },
  { color: "#be123c", soft: "#ffe4e6" },
  { color: "#4338ca", soft: "#e0e7ff" },
  { color: "#0f766e", soft: "#ccfbf1" },
  { color: "#92400e", soft: "#fef3c7" },
  { color: "#0369a1", soft: "#e0f2fe" },
  { color: "#6d28d9", soft: "#ede9fe" },
  { color: "#c2410c", soft: "#ffedd5" },
  { color: "#1d4ed8", soft: "#dbeafe" },
  { color: "#0f766e", soft: "#ccfbf1" },
  { color: "#475569", soft: "#e2e8f0" },
  { color: "#7c2d12", soft: "#ffedd5" }
];

const single = (prompt, options, correctIndex, explanation) => ({
  type: "single",
  prompt,
  options,
  correctIndex,
  explanation
});

const multi = (prompt, options, correctIndices, explanation) => ({
  type: "multi",
  prompt,
  options,
  correctIndices,
  explanation
});

const open = (prompt, sampleAnswer) => ({
  type: "open",
  prompt,
  sampleAnswer
});

const genericFlashcards = (topic) => [
  {
    front: `${topic} - Praxisfrage`,
    back: `Frage dich bei diesem Modul immer zuerst: Welches Problem wird geloest und fuer welche Zielgruppe ist das relevant?`
  },
  {
    front: `${topic} - Erfolg`,
    back: `Ueberlege dir fuer dieses Modul immer passende Kennzahlen, typische Fehler und einen Praxisfall aus einem echten Unternehmen.`
  }
];

const moduleTopics = [
  "Online-Marketing Strategie",
  "Website Marketing",
  "Recht im Online Marketing",
  "Content Marketing",
  "Social Media Marketing",
  "Suchmaschinenoptimierung (SEO)",
  "CRM & Marketing-Automation",
  "Suchmaschinenwerbung (SEA)",
  "Social Media Advertisement",
  "E-Commerce Webshops",
  "E-Commerce Digitale Marktplaetze",
  "WordPress",
  "Texten fuers Web",
  "Visuals mit Canva & KI",
  "Video-Content mit DaVinci & KI",
  "Analyse & Optimierung",
  "Projektmanagement",
  "KI im Online Marketing"
];

function baseModule(topic, index) {
  const tone = palette[index % palette.length];
  return {
    id: index + 1,
    title: `Modul ${index + 1}: ${topic}`,
    topic,
    color: tone.color,
    softColor: tone.soft,
    summary: `Dieses Modul ist als Platzhalter vorbereitet. Sobald die Praesentation vorliegt, wird es mit einer kompakten Zusammenfassung, praxistauglichen Quizfragen, Karteikarten und Uebungen gefuellt.`,
    questions: [
      open(
        `Was erwartest du inhaltlich von ${topic}, und welche Lernziele waeren fuer dich am wichtigsten?`,
        `Formuliere 3 bis 5 Stichpunkte: Welche Kernbegriffe, Prozesse, Tools oder Gesetze koennten in diesem Modul wichtig sein und wie wuerdest du das spaeter praktisch anwenden?`
      )
    ],
    flashcards: [
      {
        front: `${topic} - Kernziel`,
        back: `Notiere in einem Satz, welches Problem oder welche Aufgabe dieses Modul im Online Marketing loesen soll.`
      },
      {
        front: `${topic} - Transfer`,
        back: `Ueberlege dir ein Beispiel aus einem echten Unternehmen, auf das du die Inhalte dieses Moduls spaeter anwenden koenntest.`
      },
      {
        front: `${topic} - Fachbegriff`,
        back: `Halte den wichtigsten Fachbegriff dieses Moduls fest und erklaere ihn in einem Satz.`
      },
      {
        front: `${topic} - KPI`,
        back: `Notiere eine Kennzahl oder ein Qualitaetskriterium, an dem du den Erfolg dieses Moduls in der Praxis messen wuerdest.`
      }
    ],
    exercises: [
      `Erstelle eine Mini-Zusammenfassung fuer ${topic} in 5 Stichpunkten, sobald die Unterlagen vorliegen.`,
      `Sammle 10 Fachbegriffe aus ${topic} und erklaere jeden Begriff in einem einfachen Satz.`
    ],
    tips: [
      `Lerne dieses Modul zuerst ueber Begriffe, dann ueber Prozesse, dann ueber Anwendungsfaelle.`,
      `Pruefe bei jedem Thema, wie man Erfolg, Risiken und typische Fehler in der Praxis erkennt.`
    ]
  };
}

const content = [
  {
    summary: "Das Modul fuehrt in strategisches Online Marketing ein und verbindet Grundlagen wie Zielgruppen, Customer Journey, Positionierung und Erfolgsmessung mit dem moderneren 6P-Denken. Die 4P bleiben als Basis wichtig, werden aber um weitere Perspektiven ergaenzt.",
    questions: [
      single("Wofuer steht Marketing im Kern?", ["Nur fuer Werbung", "Fuer kundenorientierte Marktgestaltung", "Nur fuer Vertrieb", "Nur fuer Social Media"], 1, "Marketing richtet Angebote, Kommunikation und Prozesse an Kunden und Markt aus."),
      single("Welche Aussage beschreibt die 4P korrekt?", ["Product, Price, Place, Promotion", "People, Planning, Process, Profit", "Product, Persona, Proof, Position", "Price, Platform, Performance, Policy"], 0, "Die 4P sind das klassische Marketing-Mix-Modell."),
      single("Warum wird im Modul das 6P-Denken als aktueller dargestellt?", ["Weil digitale Maerkte komplexer geworden sind", "Weil die 4P verboten sind", "Weil nur Start-ups 6P nutzen", "Weil dadurch keine KPIs mehr noetig sind"], 0, "Digitale Maerkte brauchen meist mehr Perspektiven als nur den klassischen Mix."),
      multi("Welche Aspekte koennen das klassische 4P-Modell in modernen Modellen sinnvoll erweitern?", ["People", "Processes", "Physical Evidence", "Nur Printanzeigen"], [0, 1, 2], "Gerade bei Dienstleistungen und digitalen Angeboten werden oft weitere P ergaenzt."),
      single("Was ist eine Customer Journey?", ["Der interne Projektplan", "Die Reise eines Nutzers von Aufmerksamkeit bis Bindung", "Nur der Kaufvorgang im Shop", "Die Logistikroute"], 1, "Die Customer Journey betrachtet den Weg des Kunden ueber mehrere Kontaktpunkte."),
      multi("Welche Phasen koennen Teil einer Customer Journey sein?", ["Awareness", "Consideration", "Conversion", "Retention"], [0, 1, 2, 3], "Je nach Modell wird die Reise in mehrere Stufen unterteilt."),
      single("Was bedeutet Positionierung?", ["Eine Marke klar im Kopf der Zielgruppe verankern", "Nur das Logo platzieren", "Die Anzeigenposition in Google sichern", "Eine Preisliste drucken"], 0, "Positionierung beschreibt die gewuenschte Wahrnehmung der Marke."),
      single("Welcher Vorteil entsteht durch klare Zielgruppenarbeit?", ["Beliebige Inhalte fuer alle", "Praezisere Angebote und Kommunikation", "Weniger Strategiebedarf", "Keine Analyse mehr noetig"], 1, "Je genauer die Zielgruppe, desto relevanter die Massnahmen."),
      multi("Welche Kennzahlen koennen in einer Online-Marketing-Strategie relevant sein?", ["Conversion Rate", "Traffic", "Customer Lifetime Value", "Unternehmenslogo"], [0, 1, 2], "KPIs haengen vom Ziel ab, mehrere davon sind oft gleichzeitig wichtig."),
      single("Was beschreibt T-Shaped-Marketing?", ["Nur Spezialwissen ohne Breite", "Breites Grundwissen mit Tiefe in einem Schwerpunkt", "Ausschliesslich Social Media Wissen", "Nur operative Aufgaben"], 1, "T-Shaped Marketer verbinden Ueberblick mit Spezialisierung."),
      multi("Welche Faktoren helfen bei einer strategischen Priorisierung von Massnahmen?", ["Ziele", "Ressourcen", "Zielgruppe", "Spontane Einzelmeinung ohne Daten"], [0, 1, 2], "Sinnvolle Priorisierung beruecksichtigt Wirkung, Aufwand und Relevanz."),
      single("Was ist ein typischer Fehler in der Strategiearbeit?", ["Massnahmen ohne klare Ziele zu starten", "Ziele mit KPIs zu verbinden", "Personas zu definieren", "Daten auszuwerten"], 0, "Ohne Zielbild wird Marketing schnell unkoordiniert."),
      open("Erklaere den Unterschied zwischen strategischen Zielen und operativen Massnahmen.", "Strategische Ziele beschreiben, was langfristig erreicht werden soll, etwa Markenbekanntheit oder Leads. Operative Massnahmen sind konkrete Aktionen wie Kampagnen, Content, Anzeigen oder E-Mail-Strecken, mit denen diese Ziele umgesetzt werden."),
      open("Warum reicht es im Online Marketing nicht, nur Reichweite aufzubauen?", "Reichweite allein sagt wenig ueber Qualitaet, Relevanz oder Geschaeftserfolg aus. Wichtig ist, ob die richtigen Zielgruppen erreicht werden und daraus Interaktion, Leads, Verkaeufe oder Bindung entstehen."),
      open("Nenne ein Beispiel, wie du das 6P-Denken auf ein kleines Unternehmen anwenden wuerdest.", "Beispiel: Angebot definieren, Preislogik festlegen, Vertriebskanaele waehlen, passende Kommunikation planen und zusaetzlich Menschen, Prozesse oder Servicequalitaet einbeziehen, damit das Kundenerlebnis konsistent wird.")
    ],
    flashcards: [
      { front: "4P", back: "Product, Price, Place, Promotion als klassischer Marketing-Mix." },
      { front: "6P-Denken", back: "Erweitert den Marketing-Mix um weitere fuer digitale oder serviceorientierte Kontexte wichtige Perspektiven." },
      { front: "Customer Journey", back: "Weg eines Nutzers von der ersten Aufmerksamkeit bis zu Kauf, Bindung oder Empfehlung." },
      { front: "Positionierung", back: "Wie eine Marke oder ein Angebot im Kopf der Zielgruppe wahrgenommen werden soll." },
      { front: "Persona", back: "Verdichtete Beschreibung einer typischen Zielgruppenvertretung mit Zielen, Problemen und Verhalten." },
      { front: "KPI", back: "Messgroesse zur Beurteilung, ob ein Ziel erreicht wird." },
      { front: "T-Shaped Marketer", back: "Person mit breitem Marketingverstaendnis und Tiefe in einem Schwerpunktgebiet." },
      { front: "Conversion", back: "Erwuenschte Handlung eines Nutzers, zum Beispiel Kauf, Lead oder Anmeldung." }
    ],
    exercises: [
      "Analysiere ein Unternehmen deiner Wahl und beschreibe dessen 6P in kurzen Stichpunkten.",
      "Skizziere eine Customer Journey mit mindestens 5 Kontaktpunkten fuer ein reales Produkt.",
      "Leite fuer ein Marketingziel passende KPIs ab und erklaere, warum genau diese Kennzahlen sinnvoll sind."
    ],
    tips: [
      "Lerne Modelle nicht nur auswendig, sondern immer mit einem Praxisbeispiel.",
      "Verbinde jede Strategiefrage mit Zielgruppe, Ziel und Messbarkeit.",
      "Wenn du unsicher bist, frage dich zuerst: Welches Problem loest die Massnahme fuer wen?"
    ]
  },
  {
    summary: "Website Marketing behandelt die technische und konzeptionelle Grundlage digitaler Praesenzen: Domains, DNS, URLs, Informationsarchitektur, UX, Mobile First, Responsive Design, Wireframes sowie CMS- und Hosting-Grundlagen.",
    questions: [
      single("Wofuer steht DNS?", ["Digital Navigation System", "Domain Name System", "Data Network Structure", "Direct Naming Service"], 1, "DNS uebersetzt Domainnamen in IP-Adressen."),
      single("Wozu dient eine Domain?", ["Sie ersetzt das Hosting", "Sie macht eine Website ueber einen Namen erreichbar", "Sie erstellt automatisch Inhalte", "Sie ist nur fuer E-Mails relevant"], 1, "Die Domain ist die merkbare Adresse einer Website."),
      single("Was beschreibt eine URL?", ["Nur den Domainnamen", "Die vollstaendige Webadresse einer Ressource", "Nur den Seitentitel", "Das Hostingpaket"], 1, "Die URL verweist auf eine konkrete Ressource im Web."),
      multi("Welche Bestandteile koennen Teil einer URL sein?", ["Protokoll", "Domain", "Pfad", "Parameter"], [0, 1, 2, 3], "URLs bestehen oft aus mehreren Bausteinen."),
      single("Was ist eine Subdomain?", ["Ein Unterordner auf dem Server", "Ein eigener Bereich vor der Hauptdomain", "Ein anderer Begriff fuer TLD", "Ein DNS-Fehler"], 1, "Beispiel: blog.beispiel.de."),
      single("Warum ist Mobile First wichtig?", ["Weil Desktop keine Rolle mehr spielt", "Weil Nutzung und Gestaltung oft vom mobilen Kontext aus gedacht werden", "Weil dadurch Hosting unnoetig wird", "Weil es rechtlich vorgeschrieben ist"], 1, "Viele Nutzer starten mobil, daher wird die kleinste Ansicht zuerst priorisiert."),
      single("Was ist Responsive Design?", ["Feste Desktop-Breite fuer alle", "Automatische Anpassung des Layouts an verschiedene Geraete", "Nur ein schoenes Farbschema", "Ein WordPress-Plugin"], 1, "Responsive Design sorgt fuer gute Nutzbarkeit auf verschiedenen Bildschirmgroessen."),
      multi("Welche Faktoren gehoeren zur User Experience?", ["Verstaendlichkeit", "Navigation", "Ladezeit", "Rein dekorative Animationen ohne Nutzen"], [0, 1, 2], "UX umfasst das gesamte Erleben rund um die Website."),
      single("Wofuer wird ein Wireframe genutzt?", ["Fuer die technische Serverkonfiguration", "Fuer den strukturellen Aufbau einer Seite vor dem Design", "Fuer SEO-Backlinks", "Fuer Rechnungsstellung"], 1, "Wireframes helfen, Inhalt und Struktur frueh zu planen."),
      single("Was ist ein CMS?", ["Ein Tool zur Inhaltsverwaltung", "Nur ein Analyseprogramm", "Ein Werbenetzwerk", "Ein Browser"], 0, "CMS steht fuer Content-Management-System."),
      multi("Welche Vorteile kann ein CMS bieten?", ["Inhalte ohne Programmierung pflegen", "Mehrere Rollen verwalten", "Plugins oder Erweiterungen nutzen", "Struktur leichter aktualisieren"], [0, 1, 2, 3], "CMS-Systeme unterstuetzen Pflege und Weiterentwicklung der Website."),
      single("Was beschreibt Hosting?", ["Das Verfassen von Website-Texten", "Die Bereitstellung von Speicher und Infrastruktur fuer die Website", "Die Gestaltung des Logos", "Das Buchen von Anzeigen"], 1, "Hosting sorgt dafuer, dass die Website technisch erreichbar ist."),
      multi("Welche Ziele verfolgt eine gute Startseite?", ["Orientierung geben", "Vertrauen aufbauen", "Naechste Handlung erleichtern", "Zielgruppen schnell abholen"], [0, 1, 2, 3], "Die Startseite ist oft Einstiegs- und Ueberzeugungsseite zugleich."),
      open("Erklaere den Unterschied zwischen Domain, URL und Hosting.", "Die Domain ist der merkbare Name, die URL die komplette Adresse einer konkreten Ressource und Hosting die technische Infrastruktur, auf der die Website gespeichert und ausgeliefert wird."),
      open("Warum sind Wireframes vor dem visuellen Design sinnvoll?", "Sie helfen, Struktur, Inhalte, Nutzerfuehrung und Prioritaeten zu klaeren, bevor Zeit in Farben, Bilder und Feindesign investiert wird."),
      open("Nenne drei typische Gruende, warum eine Website trotz schoenem Design nicht gut funktioniert.", "Zum Beispiel unklare Navigation, schlechte Ladezeit, fehlende mobile Optimierung, zu schwache Call-to-Actions oder wenig Vertrauen." )
    ],
    flashcards: [
      { front: "DNS", back: "Domain Name System: ordnet Domains den passenden IP-Adressen zu." },
      { front: "Domain", back: "Merkbarer Name einer Website, zum Beispiel beispiel.de." },
      { front: "URL", back: "Vollstaendige Adresse einer konkreten Ressource im Web." },
      { front: "Subdomain", back: "Bereich vor der Hauptdomain, etwa blog.beispiel.de." },
      { front: "Responsive Design", back: "Layout passt sich flexibel an unterschiedliche Geraete an." },
      { front: "Mobile First", back: "Planungsansatz, bei dem mobile Nutzung zuerst gedacht wird." },
      { front: "Wireframe", back: "Skizze fuer Seitenstruktur, Inhaltsbloecke und Nutzerfuehrung." },
      { front: "CMS", back: "System zur Verwaltung und Pflege von Website-Inhalten." }
    ],
    exercises: [
      "Skizziere den Aufbau einer Startseite fuer ein reales Unternehmen als einfaches Wireframe.",
      "Analysiere eine Website auf Mobile First, Navigation, Ladezeit und Call-to-Actions.",
      "Erklaere einer fachfremden Person in einfachen Worten den Unterschied zwischen Domain, URL und Hosting."
    ],
    tips: [
      "Pruefe Websites immer aus Sicht eines neuen Nutzers, nicht nur aus Unternehmenssicht.",
      "Wenn du Begriffe lernst, verknuepfe sie direkt mit einem Browserbeispiel.",
      "Denke bei Website Marketing immer an Ziel, Zielgruppe und naechste Handlung."
    ]
  },
  {
    summary: "Dieses Modul vermittelt die rechtlichen Grundlagen im Online Marketing, etwa Impressum, Datenschutz, Einwilligung, E-Mail-Werbung, Markenrecht, Irrefuehrung und zulaessige Werbeformen. Ziel ist, typische Risiken frueh zu erkennen.",
    questions: [
      single("Wozu dient ein Impressum?", ["Nur zur Imagepflege", "Zur Anbieterkennzeichnung", "Nur fuer Onlineshops", "Nur fuer Vereine"], 1, "Das Impressum macht Verantwortliche und Kontaktdaten transparent."),
      single("Wofuer steht DSGVO?", ["Digitale Sicherheits- und Grundverordnung", "Datenschutz-Grundverordnung", "Deutsche Seiten-Gesetz-Verordnung", "Daten-System-Gesetz fuer Onlineshops"], 1, "Die DSGVO regelt den Umgang mit personenbezogenen Daten."),
      single("Wann ist E-Mail-Werbung typischerweise zulaessig?", ["Immer bei vorhandener E-Mail-Adresse", "Mit wirksamer Einwilligung oder in engen Ausnahmen", "Nur an Unternehmen", "Nur wenn sie im Spamordner landet"], 1, "Werbliche E-Mails brauchen meist eine vorherige Zustimmung."),
      multi("Welche Informationen koennen im Impressum relevant sein?", ["Name des Anbieters", "Kontaktmoeglichkeiten", "Vertretungsberechtigte Person", "Gegebenenfalls Registerangaben"], [0, 1, 2, 3], "Welche Angaben noetig sind, haengt von der Rechtsform und dem Angebot ab."),
      single("Was ist bei Cookies rechtlich besonders wichtig?", ["Nur die Farbe des Banners", "Transparenz und je nach Zweck eine wirksame Einwilligung", "Dass immer alle Haken vorangekreuzt sind", "Dass keine Datenschutzerklaerung existiert"], 1, "Vor allem bei nicht notwendigen Cookies sind Information und Einwilligung zentral."),
      single("Was bedeutet Irrefuehrung in der Werbung?", ["Eine kreative Formulierung", "Eine Werbung, die falsche oder taeuschende Erwartungen weckt", "Jede humorvolle Aussage", "Jede Rabattaktion"], 1, "Werbung darf Verbraucher nicht ueber wesentliche Punkte taeuschen."),
      multi("Welche Aussagen koennen rechtlich riskant sein?", ["Nicht belegbare Heilversprechen", "Falsche Preisvorteile", "Unklare Verfuegbarkeit", "Klare, belegte Produktbeschreibung"], [0, 1, 2], "Rechtliches Risiko steigt, wenn wesentliche Informationen fehlen oder falsch sind."),
      single("Was schuetzt Markenrecht?", ["Nur Domainnamen", "Kennzeichen wie Marken und Logos", "Nur Texte im Blog", "Nur Kundendaten"], 1, "Markenrecht schuetzt unterscheidungskraeftige Kennzeichen."),
      single("Warum kann eine Domain rechtlich problematisch sein?", ["Weil jede Domain automatisch geschuetzt ist", "Weil sie Marken oder Namensrechte verletzen kann", "Weil sie immer DSGVO-pflichtig ist", "Weil Subdomains verboten sind"], 1, "Domainwahl kann mit Kennzeichenrechten kollidieren."),
      multi("Welche Grundsaetze sollte Online Werbung rechtlich erfuellen?", ["Erkennbar sein", "Nicht irrefuehren", "Datenschutz beachten", "Einwilligungen sauber dokumentieren"], [0, 1, 2, 3], "Saubere Werbung ist transparent, fair und datenschutzkonform."),
      single("Was bedeutet Personenbezug bei Daten?", ["Daten betreffen immer Unternehmen", "Daten koennen einer identifizierten oder identifizierbaren Person zugeordnet werden", "Nur Name und Adresse sind Daten", "Technische Daten sind nie relevant"], 1, "Personenbezogene Daten sind weiter gefasst als viele denken."),
      single("Was ist bei Gewinnspielen wichtig?", ["Es gibt keine Regeln", "Teilnahmebedingungen und transparente Kommunikation", "Nur ein schoenes Design", "Nur ein Social-Media-Post"], 1, "Teilnahmebedingungen und faire Regeln sind wichtig."),
      open("Warum reicht es rechtlich nicht, nur eine Datenschutzerklaerung auf die Website zu stellen?", "Neben Informationen muessen je nach Verarbeitung auch Rechtsgrundlagen, Einwilligungen, technische Massnahmen und Prozesse korrekt umgesetzt sein."),
      open("Nenne typische Risiken bei E-Mail-Marketing aus rechtlicher Sicht.", "Fehlende Einwilligung, unklare Absender, fehlende Abmeldemoeglichkeit, mangelhafte Dokumentation oder unzulaessige werbliche Ansprache koennen problematisch sein."),
      open("Erklaere kurz, warum verschleierte Werbung problematisch ist.", "Nutzer muessen Werbung als Werbung erkennen koennen. Wird kommerzielle Kommunikation versteckt, ist das intransparent und kann unlauter sein.")
    ],
    flashcards: [
      { front: "Impressum", back: "Anbieterkennzeichnung mit wesentlichen Pflichtangaben." },
      { front: "DSGVO", back: "Datenschutz-Grundverordnung fuer den Umgang mit personenbezogenen Daten." },
      { front: "Einwilligung", back: "Freiwillige, informierte und nachweisbare Zustimmung zu einer Verarbeitung oder Werbung." },
      { front: "Personenbezogene Daten", back: "Daten, die sich auf eine identifizierte oder identifizierbare Person beziehen." },
      { front: "Irrefuehrung", back: "Werbung erzeugt falsche oder taeuschende Vorstellungen ueber wesentliche Punkte." },
      { front: "Markenrecht", back: "Schuetzt Kennzeichen wie Marken, Namen oder Logos vor unbefugter Nutzung." },
      { front: "Cookie-Einwilligung", back: "Je nach Zweck ist vor allem bei nicht notwendigen Cookies eine wirksame Zustimmung noetig." },
      { front: "Werbekennzeichnung", back: "Werbung muss fuer Nutzer als Werbung erkennbar sein." }
    ],
    exercises: [
      "Pruefe eine Unternehmenswebsite auf Impressum, Datenschutzerklaerung und Cookie-Banner.",
      "Formuliere drei Werbeaussagen so um, dass sie weniger irrefuehrend und transparenter sind.",
      "Erstelle eine Checkliste mit den wichtigsten Rechtspruefungen vor dem Start einer Kampagne."
    ],
    tips: [
      "Denke bei Rechtsthemen immer an Transparenz, Nachweisbarkeit und Fairness.",
      "Lerne nicht nur Regeln, sondern auch typische Risikofaelle aus der Praxis.",
      "Wenn eine Aussage zu gut klingt, ist sie rechtlich oft besonders pruefenswert."
    ]
  },
  {
    summary: "Content Marketing fokussiert Inhalte mit echtem Nutzwert. Behandelt werden Definition, Ziele, Core Story, Golden Circle, Personas, AIDA, Content Pillars, Redaktionsplanung und der Aufbau langfristiger Beziehungen statt reiner Werbedruck-Kommunikation.",
    questions: [
      single("Was ist das Hauptziel von Content Marketing?", ["Sofortiger Abverkauf ohne Vertrauen", "Relevante Inhalte zur Gewinnung und Bindung von Zielgruppen", "Nur mehr Blogartikel", "Nur Suchmaschinenmanipulation"], 1, "Content Marketing setzt auf hilfreiche, passende Inhalte fuer definierte Zielgruppen."),
      single("Was beschreibt eine Core Story?", ["Die technische Servergeschichte", "Die inhaltliche Klammer und Grundbotschaft einer Marke", "Nur einen einzelnen Social Post", "Die AGB eines Unternehmens"], 1, "Die Core Story verbindet Themen, Haltung und Nutzen der Marke."),
      single("Wofuer steht der Golden Circle?", ["Why, How, What", "Who, When, Where", "Write, Host, Win", "Worth, Hype, Wow"], 0, "Der Golden Circle startet bei Sinn und Motivation."),
      multi("Welche Fragen helfen beim Persona-Aufbau?", ["Wer ist die Person?", "Welche Ziele hat sie?", "Welche Probleme treiben sie?", "Wie informiert sie sich?"], [0, 1, 2, 3], "Gute Personas machen Verhalten, Motivation und Informationsbeduerfnisse greifbar."),
      single("Wofuer steht AIDA?", ["Attention, Interest, Desire, Action", "Awareness, Intent, Data, Analysis", "Action, Interaction, Design, Analytics", "Attention, Integration, Decision, Answer"], 0, "AIDA beschreibt eine klassische Wirkungslogik in der Kommunikation."),
      single("Was sind Content Pillars?", ["Zufaellige Einzelideen", "Zentrale Themenfelder, um die Inhalte organisiert werden", "Nur KPI-Spalten", "Nur Instagram Stories"], 1, "Content Pillars schaffen thematische Struktur und Wiedererkennbarkeit."),
      multi("Welche Formate koennen Teil einer Content-Strategie sein?", ["Blogartikel", "Newsletter", "Videos", "Interne Kostenfreigabe"], [0, 1, 2], "Content Marketing arbeitet ueber mehrere Formate und Kanaele hinweg."),
      single("Warum ist ein Redaktionsplan sinnvoll?", ["Damit Inhalte zufaellig entstehen", "Damit Themen, Timing und Ressourcen strukturiert geplant werden", "Damit keine Ziele mehr noetig sind", "Damit Personas ersetzt werden"], 1, "Ein Redaktionsplan erleichtert Kontinuitaet und Abstimmung."),
      multi("Woran erkennt man guten Content?", ["Relevanz fuer die Zielgruppe", "Klarer Nutzen", "Passende Ansprache", "Saubere Struktur"], [0, 1, 2, 3], "Guter Content hilft, orientiert und passt zur Phase des Nutzers."),
      single("Welche Aussage passt am besten zu Content Marketing?", ["Nur Reichweite zaehlt", "Vertrauen entsteht ueber wiederholt hilfreiche Inhalte", "Nur virale Inhalte sind gut", "Lange Inhalte sind immer besser"], 1, "Wirkung entsteht oft ueber Qualitaet, Konsistenz und Passung."),
      single("Was ist ein haeufiger Fehler im Content Marketing?", ["Ohne klare Zielgruppe und ohne Ziel zu posten", "Inhalte zu analysieren", "Themen zu clustern", "Content wiederzuverwenden"], 0, "Beliebige Inhalte ohne Strategie verwirren mehr als sie helfen."),
      open("Erklaere den Unterschied zwischen einer Core Story und einem einzelnen Content Piece.", "Die Core Story ist die uebergeordnete Erzaehl- und Nutzenlinie der Marke. Ein einzelnes Content Piece ist eine konkrete Umsetzung davon, etwa ein Artikel, ein Video oder ein Post."),
      open("Warum sind Personas fuer Content Marketing so wichtig?", "Weil Inhalte nur dann wirksam sind, wenn Sprache, Themen, Probleme und Formate zur Zielgruppe passen."),
      open("Nenne ein Beispiel, wie aus einer Content Pillar mehrere konkrete Inhalte entstehen koennen.", "Beispiel: Aus dem Pillar SEO entstehen ein Grundlagenartikel, ein Checklisten-Post, eine FAQ-Story, ein Tutorial-Video und ein Newsletter." )
    ],
    flashcards: [
      { front: "Content Marketing", back: "Strategische Nutzung relevanter Inhalte zur Gewinnung, Ueberzeugung und Bindung von Zielgruppen." },
      { front: "Core Story", back: "Inhaltliche Hauptgeschichte und Botschaft einer Marke." },
      { front: "Golden Circle", back: "Why, How, What als Denkmodell fuer klare Marken- und Kommunikationslogik." },
      { front: "Persona", back: "Typisierte Beschreibung eines relevanten Zielgruppensegments." },
      { front: "AIDA", back: "Attention, Interest, Desire, Action als klassisches Wirkmodell." },
      { front: "Content Pillars", back: "Zentrale Themenfelder, auf denen Inhalte systematisch aufbauen." },
      { front: "Redaktionsplan", back: "Plan fuer Themen, Formate, Termine, Verantwortung und Ausspielung." },
      { front: "Evergreen Content", back: "Inhalte mit langfristigem Nutzen, die nicht schnell veralten." }
    ],
    exercises: [
      "Entwickle fuer ein Unternehmen drei Content Pillars und jeweils zwei konkrete Content-Ideen.",
      "Formuliere eine Persona mit Zielen, Herausforderungen, Einwaenden und bevorzugten Formaten.",
      "Erstelle einen kleinen Redaktionsplan fuer zwei Wochen mit mehreren Formaten."
    ],
    tips: [
      "Lerne Content Marketing immer entlang von Zielgruppe, Nutzen und Formatwahl.",
      "Frage dich bei jedem Inhalt: Warum sollte die Zielgruppe das wirklich konsumieren?",
      "Gute Inhalte muessen nicht nur schoen sein, sondern ein Problem loesen oder Orientierung geben."
    ]
  },
  {
    summary: "Social Media Marketing behandelt Grundlagen sozialer Plattformen, Ziele, Strategie, SMART-Ziele, Formate, Corporate Influencer, Ressourcenplanung und kanalbezogene Unterschiede. Im Fokus steht nicht nur Reichweite, sondern strategischer Plattform-Einsatz.",
    questions: [
      single("Was zeichnet Social Media im Vergleich zu klassischen Medien besonders aus?", ["Einweg-Kommunikation", "Interaktion und Beteiligung", "Keine Inhalte", "Nur bezahlte Reichweite"], 1, "Social Media ist von Austausch, Reaktion und Community gepraegt."),
      single("Was beschreibt Web 2.0 im Kern?", ["Ein rein technisches Hosting-Update", "Mehr Beteiligung, Vernetzung und nutzergenerierte Inhalte", "Nur neue Browser", "Nur den Online-Shop-Bereich"], 1, "Web 2.0 steht fuer interaktive und partizipative Webnutzung."),
      multi("Welche Ziele kann Social Media Marketing verfolgen?", ["Reichweite", "Community-Aufbau", "Kundenservice", "Ausschliesslich Lageroptimierung"], [0, 1, 2], "Social Media kann mehrere Unternehmensziele gleichzeitig unterstuetzen."),
      single("Was ist ein SMART-Ziel?", ["Ein moeglichst allgemeines Ziel", "Ein spezifisches, messbares und termingebundenes Ziel", "Nur ein kreativer Slogan", "Ein unbegrenztes Wunschziel"], 1, "SMART hilft, Ziele konkret steuerbar zu machen."),
      single("Warum sollte nicht jeder Kanal gleich bespielt werden?", ["Weil jeder Kanal andere Zielgruppen, Formate und Logiken hat", "Weil nur Instagram wichtig ist", "Weil Crossposting verboten ist", "Weil Inhalte immer identisch sein muessen"], 0, "Plattformen unterscheiden sich stark in Nutzung und Erwartung."),
      multi("Welche Formate sind typisch fuer Social Media?", ["Kurzvideo", "Story", "Carousel", "Live-Format"], [0, 1, 2, 3], "Je nach Plattform variieren die Prioritaeten, aber viele Formate sind kanaltypisch."),
      single("Was ist ein Corporate Influencer?", ["Ein Rabattcode", "Eine Person aus dem Unternehmen, die sichtbar kommuniziert", "Ein Werbebanner", "Ein CMS-Modul"], 1, "Corporate Influencer koennen Marke, Expertise und Naehe verkoerpern."),
      multi("Welche Elemente gehoeren zu einer Social-Media-Strategie?", ["Ziele", "Zielgruppen", "Kanalauswahl", "Ressourcenplanung"], [0, 1, 2, 3], "Strategie verbindet Unternehmensziele mit operativer Umsetzbarkeit."),
      single("Warum ist Community Management wichtig?", ["Weil Kommentare irrelevant sind", "Weil Beziehungen, Vertrauen und Dialog gepflegt werden muessen", "Weil nur Likes zaehlen", "Weil dadurch SEO entfällt"], 1, "Social Media ist kein reiner Sendekanal."),
      single("Was ist ein typischer Fehler in Social Media Marketing?", ["Ohne Ziel, Zielgruppe und Ressourcen einfach zu posten", "Formate zu testen", "Kommentare zu beantworten", "Kanalspezifisch zu denken"], 0, "Beliebiges Posten fuehrt selten zu nachhaltigen Ergebnissen."),
      multi("Welche Kennzahlen koennen fuer Social Media relevant sein?", ["Engagement Rate", "Reichweite", "Klicks", "Mietvertrag"], [0, 1, 2], "Abhaengig vom Ziel sind verschiedene KPIs sinnvoll."),
      open("Erklaere den Unterschied zwischen Reichweite und Engagement.", "Reichweite beschreibt, wie viele Personen einen Inhalt sehen. Engagement beschreibt, wie stark Nutzer mit dem Inhalt interagieren, etwa ueber Likes, Kommentare, Saves oder Shares."),
      open("Warum ist Ressourcenplanung in Social Media wichtig?", "Weil Plattformen regelmaessige Inhalte, Betreuung, Abstimmung und Reaktion erfordern. Ohne Zeit und Verantwortlichkeiten leidet die Qualitaet und Kontinuitaet."),
      open("Nenne ein Beispiel, wie sich derselbe Inhalt fuer LinkedIn und Instagram unterscheiden sollte.", "Auf LinkedIn eher fachlicher, textstaerker und businessbezogen. Auf Instagram visueller, kompakter und emotionaler oder alltagsnaher aufbereitet." )
    ],
    flashcards: [
      { front: "Web 2.0", back: "Interaktive Webnutzung mit Beteiligung, Austausch und nutzergenerierten Inhalten." },
      { front: "SMART-Ziel", back: "Spezifisch, messbar, attraktiv, realistisch und terminiert." },
      { front: "Engagement", back: "Interaktionen wie Likes, Kommentare, Shares, Saves oder Klicks." },
      { front: "Community Management", back: "Aktive Pflege von Beziehungen, Kommentaren, Nachrichten und Dialogen." },
      { front: "Corporate Influencer", back: "Sichtbare Person aus dem Unternehmen, die glaubwuerdig kommuniziert." },
      { front: "Reach", back: "Anzahl der erreichten Personen oder Accounts." },
      { front: "Content Format", back: "Darstellungsform eines Inhalts, etwa Reel, Story, Carousel oder Live." },
      { front: "Kanalstrategie", back: "Bewusste Auswahl und Nutzung von Plattformen passend zu Zielen und Zielgruppen." }
    ],
    exercises: [
      "Definiere fuer ein Unternehmen zwei SMART-Ziele und passende KPIs fuer Social Media.",
      "Vergleiche zwei Plattformen hinsichtlich Zielgruppe, Formate und typischer Inhalte.",
      "Entwirf einen Wochenplan mit Formaten fuer einen Kanal deiner Wahl."
    ],
    tips: [
      "Lerne Kanaele nicht als Selbstzweck, sondern immer aus Unternehmenssicht.",
      "Denke Social Media immer als Kombination aus Inhalt, Interaktion und Auswertung.",
      "Wenn ein Post nicht performt, pruefe zuerst Ziel, Hook, Format und Plattform-Fit."
    ]
  },
  {
    summary: "Das SEO-Modul behandelt Suchmaschinenoptimierung im Zusammenspiel mit SEM und SEA. Wichtige Themen sind SERPs, Crawling, Indexierung, Ranking, Onpage-Optimierung, Local SEO, Relaunch-Risiken, GEO und sprachbasierte Suche.",
    questions: [
      single("Wofuer steht SEO?", ["Search Engine Optimization", "Search Engine Operation", "System Engine Output", "Search Experience Option"], 0, "SEO steht fuer Suchmaschinenoptimierung."),
      single("Wie verhalten sich SEM, SEO und SEA zueinander?", ["SEO und SEA sind Teil von SEM", "SEM ist Teil von SEO", "SEA ist Teil von SEO", "Es gibt keinen Zusammenhang"], 0, "SEM ist der Oberbegriff fuer organische und bezahlte Suchmaschinenmassnahmen."),
      single("Was sind SERPs?", ["Server Error Reporting Pages", "Suchergebnisseiten einer Suchmaschine", "Social Engagement Ranking Posts", "Keyword-Listen in Excel"], 1, "SERPs sind die Search Engine Results Pages."),
      multi("Welche Prozesse gehoeren zur technischen Grundlage von SEO?", ["Crawling", "Indexierung", "Ranking", "Rendering"], [0, 1, 2, 3], "Suchmaschinen muessen Inhalte finden, verstehen und bewerten koennen."),
      single("Was passiert beim Crawling?", ["Nutzer kaufen Produkte", "Suchmaschinenbots entdecken und lesen Inhalte", "Keywords werden automatisch verkauft", "Anzeigen werden gebucht"], 1, "Crawler durchsuchen Websites nach Inhalten und Verlinkungen."),
      single("Was bedeutet Indexierung?", ["Inhalte werden in den Suchmaschinenbestand aufgenommen", "Nur die Homepage wird gespeichert", "Anzeigen werden pausiert", "Texte werden geloescht"], 0, "Nur indexierte Inhalte koennen in Suchergebnissen erscheinen."),
      single("Was beschreibt Ranking?", ["Die Positionierung eines Dokuments fuer eine Suchanfrage", "Nur die Domainlaenge", "Das Hostingmodell", "Die Anzahl der Farben einer Website"], 0, "Ranking beschreibt die Reihenfolge in den Suchergebnissen."),
      multi("Welche Faktoren koennen Onpage-SEO beeinflussen?", ["Title und Meta Description", "Ueberschriftenstruktur", "Interne Verlinkung", "Lohnabrechnung"], [0, 1, 2], "Gute Onpage-Optimierung verbindet Technik, Inhalt und Nutzerlogik."),
      single("Was ist Local SEO?", ["Nur Werbung fuer globale Maerkte", "Optimierung fuer lokale Suchanfragen und Sichtbarkeit", "Nur Social Media fuer kleine Unternehmen", "Ein anderes Wort fuer Hosting"], 1, "Local SEO ist besonders fuer standortbezogene Angebote relevant."),
      multi("Welche Relaunch-Risiken sind fuer SEO typisch?", ["Verlust wichtiger URLs", "Fehlende Redirects", "Indexierungsprobleme", "Verlust von Rankings"], [0, 1, 2, 3], "Relaunches brauchen saubere SEO-Planung."),
      single("Was bedeutet Suchintention?", ["Die Laune des Webdesigners", "Das Ziel hinter einer Suchanfrage", "Nur der CPC", "Die Farbe der SERP"], 1, "Suchintention ist zentral fuer passende Inhalte."),
      single("Was ist GEO im Kontext des Moduls?", ["Nur Geografieunterricht", "Optimierung fuer generative Such- und Antwortsysteme", "Ein lokaler Branchenbucheintrag", "Ein Trackingpixel"], 1, "Neben klassischer Suche werden auch generative Antwortsysteme relevanter."),
      multi("Welche Kennzahlen koennen zur SEO-Bewertung sinnvoll sein?", ["Organischer Traffic", "Sichtbarkeit", "Rankings", "Betriebskosten"], [0, 1, 2], "Nicht nur Traffic, sondern auch Zielerreichung ist wichtig."),
      single("Warum ist Voice Search besonders relevant fuer bestimmte Suchanfragen?", ["Weil sie oft natuerlicher und frageorientierter formuliert sind", "Weil dadurch keine Inhalte mehr noetig sind", "Weil Keywords unwichtig werden", "Weil nur Videos ranken"], 0, "Sprachsuche veraendert Form und Erwartung von Suchanfragen."),
      open("Erklaere den Unterschied zwischen Crawling, Indexierung und Ranking.", "Crawling bedeutet, dass Bots Inhalte entdecken. Indexierung bedeutet, dass diese Inhalte in den Suchmaschinenbestand aufgenommen werden. Ranking beschreibt, wie gut die Seite fuer bestimmte Suchanfragen platziert wird."),
      open("Warum ist Suchintention fuer SEO oft wichtiger als reine Keyword-Wiederholung?", "Weil Suchmaschinen immer besser verstehen, welches Problem Nutzer loesen wollen. Inhalte muessen diese Absicht passend beantworten, statt nur Begriffe haeufig zu wiederholen."),
      open("Nenne drei Punkte, die du vor einem Website-Relaunch aus SEO-Sicht pruefen wuerdest.", "Zum Beispiel URL-Struktur, Redirect-Konzept, Indexierungssteuerung, interne Verlinkung, Meta-Daten, Ladezeit oder bestehende Rankings." )
    ],
    flashcards: [
      { front: "SEO", back: "Suchmaschinenoptimierung fuer organische Sichtbarkeit." },
      { front: "SEM", back: "Suchmaschinenmarketing als Oberbegriff fuer SEO und SEA." },
      { front: "SEA", back: "Bezahlte Suchmaschinenwerbung." },
      { front: "SERP", back: "Suchergebnisseite einer Suchmaschine." },
      { front: "Crawling", back: "Entdecken und Auslesen von Inhalten durch Bots." },
      { front: "Indexierung", back: "Aufnahme von Inhalten in den Suchmaschinenindex." },
      { front: "Suchintention", back: "Das Ziel oder Beduerfnis hinter einer Suchanfrage." },
      { front: "Local SEO", back: "Optimierung fuer lokale Auffindbarkeit in der Suche." }
    ],
    exercises: [
      "Analysiere eine Website auf Suchintention, Titles, Ueberschriften und interne Verlinkung.",
      "Erstelle eine Relaunch-SEO-Checkliste mit technischen und inhaltlichen Punkten.",
      "Vergleiche fuer drei Keywords die Suchintention und leite passende Inhaltstypen ab."
    ],
    tips: [
      "Denke bei SEO nie nur in Keywords, sondern in Nutzerfragen und Seitenqualitaet.",
      "Pruefe immer, ob Inhalte ueberhaupt gecrawlt und indexiert werden koennen.",
      "Bei Relaunches ist saubere Vorbereitung oft wichtiger als spaetere Schadensbegrenzung."
    ]
  }
];

const modules = moduleTopics.map((topic, index) => {
  const module = baseModule(topic, index);
  const extra = content[index];

  return extra
    ? {
        ...module,
        ...extra,
        id: module.id,
        title: module.title,
        topic: module.topic,
        color: module.color,
        softColor: module.softColor
      }
    : module;
});

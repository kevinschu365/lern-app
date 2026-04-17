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
    summary: "Das Modul verbindet die Grundlagen der Marketingstrategie mit Customer Journey, 4P als Basis, dem aktuelleren ecomex-6P-Modell, Positionierung, Branding, Performance, Loyalty, Business Model Canvas, Golden Circle, SMART, SWOT, Personas, CLV und Marketing Automation.",
    questions: [
      single("Was versteht man unter einer Marketingstrategie?", ["Eine kurzfristige Werbekampagne für ein einzelnes Produkt", "Die grundsätzliche, langfristige Verhaltensweise zur Verwirklichung der Unternehmensziele durch Marketingmaßnahmen", "Die Tagesplanung für das Marketing-Team", "Eine Sammlung von Social-Media-Posts"], 1, "Eine Marketingstrategie ist langfristig angelegt und bildet den Rahmen für operative Marketingmaßnahmen."),
      single("Welche Komponenten umfasst das klassische 4P-Modell?", ["Preis, Promotion, Person, Prozess", "Produkt, Preis, Platzierung, Promotion", "Preis, Place, Provision, Programm", "Produkt, Positionierung, Plattform, Prüfung"], 1, "Das klassische 4P-Modell besteht aus Product, Price, Place und Promotion."),
      multi("Welche Aussagen zur Produktdiversifikation sind korrekt?", ["Vertikale Diversifikation bedeutet Erweiterung um ähnliche Produkte aus derselben Branche", "Bei lateraler Diversifikation stehen alte und neue Produkte in keinem Zusammenhang", "Vertikale Diversifikation kann die Aufnahme von Produkten eines bisherigen Lieferanten bedeuten", "Das Ökosystem ist ein Einzelunternehmen, das alle Wertschöpfung selbst durchführt"], [1, 2], "Laterale Diversifikation meint neue Produkte ohne direkten Zusammenhang. Vertikale Diversifikation bezieht sich auf vor- oder nachgelagerte Stufen der Wertschöpfung."),
      single("Was ist das Ziel der Preispolitik?", ["Den Preis so hoch wie möglich zu setzen", "Einen Gewinn für das Unternehmen zu realisieren und dem Kunden ein faires Preis-Leistungs-Verhältnis anzubieten", "Immer den niedrigsten Marktpreis anzubieten", "Die Preise täglich zu ändern"], 1, "Preispolitik soll wirtschaftlich tragfähig sein und zugleich ein stimmiges Preis-Leistungs-Verhältnis erzeugen."),
      single("Welche Preisstrategien sind langfristige Strategien?", ["Abschöpfungsstrategie und Marktdurchdringung", "Hochpreisstrategie und Niedrigpreisstrategie", "Nur die Hochpreisstrategie", "Kampagnenbasierte Preise und saisonale Preise"], 1, "Hochpreis- und Niedrigpreisstrategie sind langfristige Grundrichtungen, während Abschöpfung und Penetration eher Einführungsstrategien sind."),
      single("Welche Distributionsstrukturen werden im 4P-Modell unterschieden?", ["Direkte Struktur, indirekte Struktur, Multikanal-Struktur", "Online-Struktur und Offline-Struktur", "Nur Einzelhandel und Großhandel", "Direkt-to-Business und Business-to-Consumer"], 0, "Typisch sind direkte, indirekte und Multikanal-Strukturen."),
      single("Was beschreibt die Customer Journey?", ["Die Reiseroute der Verkaufsvertreter", "Alle Phasen, die Kunden vor, während und nach einem Kauf durchlaufen", "Nur den Kaufprozess selbst", "Die Lieferkette vom Hersteller zum Einzelhandel"], 1, "Die Customer Journey umfasst den gesamten Weg von der ersten Aufmerksamkeit bis zur Bindung."),
      single("Welche Phasen gehören zur Customer Journey nach dem Funnel-Modell?", ["Awareness, Consideration, Acquisition, Service, Loyalty", "Lead, Customer, Advocate, Champion", "Discovery, Exploration, Purchase, Review", "Attention, Interest, Decision, Action, Retention"], 0, "Das im Modul verwendete Modell umfasst Awareness, Consideration, Acquisition beziehungsweise Purchase, Service beziehungsweise After-Sale und Loyalty."),
      single("Was sind die Hauptziele in der Awareness-Phase?", ["Kaufverträge abschließen", "Bedürfnisse von Kunden wecken und Problem sowie Lösung bekannt machen", "Preise verhandeln", "Wartung und Service anbieten"], 1, "In der Awareness-Phase geht es darum, Probleme, Bedarfe und erste Lösungsansätze sichtbar zu machen."),
      single("Welche Rolle spielt Performance Marketing in der Customer Journey?", ["Es ist nur in der Branding-Phase relevant", "Es soll vor allem in Purchase- und Loyalty-nahen Phasen qualifizierte Kontakte und Bestellungen generieren", "Es ist vor allem für emotionale Bindung in der Awareness-Phase wichtig", "Es hat keine Bedeutung im Online Marketing"], 1, "Performance Marketing fokussiert sich auf messbare Ergebnisse wie Leads, Conversions und Verkäufe."),
      single("Was ist das Business Model Canvas?", ["Ein Tool zur Zeiterfassung von Mitarbeitern", "Ein visuelles Framework mit neun Bausteinen zur strukturierten Darstellung von Geschäftsmodellen", "Ein Finanzcontrolling-Instrument", "Eine Methode zur Produktentwicklung ohne Marktbezug"], 1, "Das BMC hilft dabei, Geschäftsmodelle kompakt zu strukturieren und sichtbar zu machen."),
      single("Was versteht man unter der Value Proposition?", ["Den Preis eines Produkts", "Das zentrale Nutzenversprechen eines Produkts oder einer Dienstleistung", "Die geografische Ausbreitung eines Unternehmens", "Die Anzahl der Vertriebskanäle"], 1, "Die Value Proposition beantwortet, welches Problem gelöst wird und warum Kunden dafür zahlen."),
      single("Was ist das Golden-Circle-Modell nach Simon Sinek?", ["Eine Preisgestaltungsmethode", "Ein Modell mit den Ebenen Why, How und What zur Markenpositionierung", "Ein Vertriebsmodell für mehrere Kanäle", "Ein Qualitätskontroll-Framework"], 1, "Der Golden Circle startet beim Why und arbeitet sich über How zum What vor."),
      single("Was bedeutet SMART im Kontext von Zielsetzung?", ["Schnelle, manuelle, aktualisierte, realistische, technische Ziele", "Spezifisch, messbar, attraktiv, realistisch, terminiert", "Software, Monitoring, Analyse, Reporting, Tests", "Strategie, Marketing, Allokation, Resources, Timeline"], 1, "SMART-Ziele sind konkret, messbar, motivierend, erreichbar und zeitlich begrenzt."),
      single("Was analysiert die SWOT-Analyse?", ["Nur die Konkurrenz", "Nur die Produktqualität", "Stärken und Schwächen intern sowie Chancen und Risiken extern", "Nur die Kundenzufriedenheit"], 2, "SWOT verbindet interne und externe Perspektiven zur strategischen Bewertung."),
      single("Was ist Branding?", ["Eine Form der Werbung, die nur online funktioniert", "Der langfristige Aufbau von Markenbekanntheit, Image und Vertrauen", "Eine Preisreduktion für Großmengen", "Die gesetzliche Registrierung eines Unternehmens"], 1, "Branding schafft Wiedererkennbarkeit, Vertrauen und emotionale Bindung."),
      single("Worin unterscheiden sich Branding und Performance Marketing?", ["Branding ist online, Performance Marketing ist offline", "Branding zielt auf langfristige Markenbekanntheit, Performance Marketing auf messbare kurzfristige Aktionen", "Performance Marketing ist älter als Branding", "Sie sind im Grunde dasselbe"], 1, "Branding ist strategisch und langfristig, Performance Marketing stärker taktisch und ergebnisorientiert."),
      single("Was ist Loyalty Marketing?", ["Maßnahmen zur Gewinnung neuer Kunden", "Maßnahmen zur Kundenbindung und Erhöhung des Customer Lifetime Value", "Rabattsysteme ohne langfristige Ziele", "Automatisierte Massenverteilung von Werbemails"], 1, "Loyalty Marketing zielt auf Bindung, Wiederkäufe und höheren Kundenwert."),
      single("Was ist das ecomex-6P-Modell?", ["Ein Preismodell mit sechs verschiedenen Preisstufen", "Ein ganzheitliches Marketingmodell mit Produkt, Positionierung, Promotion, Prozess, Plattform und Prüfung", "Ein Vertriebsmodell für sechs Kanäle", "Ein Qualitätskontroll-System"], 1, "Das ecomex-6P-Modell verbindet operative und strategische Perspektiven in einem Framework."),
      single("Was ist Positionierung?", ["Die physische Lagerung von Produkten", "Der strategische Platz einer Marke im Markt und die Abgrenzung vom Wettbewerb", "Die Anzahl der Filialen", "Die Länge einer Werbekampagne"], 1, "Positionierung beschreibt, wofür eine Marke steht und wie sie sich vom Wettbewerb unterscheidet."),
      single("Was ist das Konzept des T-Shaped Marketers?", ["Nur Mitarbeiter, die T-Shirts tragen", "Ein Profil mit breitem Grundwissen in vielen Marketingdisziplinen und vertieftem Spezialwissen in ein bis zwei Bereichen", "Ein Marketing-Manager mit Führungsverantwortung", "Ein Konzept aus den 1960er Jahren"], 1, "T-Shaped Marketer kombinieren Überblick mit fachlicher Tiefe."),
      single("Was sind Personas?", ["Reale Kunden des Unternehmens", "Fiktive, idealtypische Vertreter einer Zielgruppe, die Bedürfnisse, Ziele und Verhalten abbilden", "Maschinelle Profile von Website-Besuchern", "Fiktive Konkurrenz-Profile"], 1, "Personas machen Zielgruppen greifbar und helfen bei der Ausrichtung von Kommunikation und Angeboten."),
      single("Was ist der Customer Lifetime Value?", ["Die Anzahl der Kauftransaktionen", "Der gesamte wirtschaftliche Wert eines Kunden über die gesamte Dauer der Geschäftsbeziehung", "Der Durchschnittspreis pro Kauf", "Die Länge der Vertragslaufzeit"], 1, "Der CLV zeigt, wie wertvoll ein Kunde langfristig für ein Unternehmen sein kann."),
      single("Was ist Marketing Automation?", ["Automatische Preisanpassungen", "Der Einsatz von Software zur Automatisierung wiederkehrender Marketingprozesse", "Das automatische Löschen alter Kundendaten", "Eine veraltete Technologie"], 1, "Marketing Automation skaliert Kommunikation und Prozesse, etwa im E-Mail-Marketing oder Lead Nurturing."),
      open("Erkläre den Unterschied zwischen Branding, Performance und Loyalty innerhalb einer Gesamtstrategie.", "Branding baut Bekanntheit, Vertrauen und ein klares Markenbild auf. Performance erzeugt messbare Ergebnisse wie Leads oder Verkäufe. Loyalty bindet bestehende Kunden, erhöht Wiederkäufe und steigert den Customer Lifetime Value."),
      open("Warum ist das 6P-Denken für modernes Online Marketing oft hilfreicher als ein reines 4P-Denken?", "Weil digitale Märkte zusätzliche Perspektiven wie Positionierung, Prozesse, Plattformen und Erfolgskontrolle stärker sichtbar machen. Das 4P-Modell bleibt wichtig, reicht allein aber oft nicht aus."),
      open("Wie hängen Personas, Customer Journey und Value Proposition zusammen?", "Personas beschreiben, für wen Marketing gemacht wird. Die Customer Journey zeigt, in welcher Phase sich diese Personen befinden. Die Value Proposition formuliert, welchen konkreten Nutzen das Angebot für diese Zielgruppe in dieser Situation stiftet.")
    ],
    flashcards: [
      { front: "Strategie", back: "Eine langfristige, geplante Ausrichtung eines Unternehmens zur Erreichung übergeordneter Ziele. Sie gibt Orientierung für operative Maßnahmen und Entscheidungen." },
      { front: "Marketingstrategie", back: "Teil der Unternehmensstrategie, der festlegt, wie Marketinginstrumente eingesetzt werden, um definierte Ziele zu erreichen." },
      { front: "4P-Modell", back: "Klassisches Marketingmodell mit Product, Price, Place und Promotion." },
      { front: "Customer Journey", back: "Der Weg eines Kunden durch alle Phasen von Awareness über Consideration und Purchase bis zu After-Sale und Loyalty." },
      { front: "Awareness-Phase", back: "Phase, in der Kunden ein Bedürfnis oder Problem erkennen. Ziel des Marketings ist, Problem und Lösung sichtbar zu machen." },
      { front: "Consideration-Phase", back: "Phase, in der Kunden Optionen vergleichen und Informationen, Preis, Leistung und Image prüfen." },
      { front: "Loyalty-Phase", back: "Phase mit zufriedenen, treuen Kunden, die wiederkaufen, empfänglicher für Cross- und Upselling sind und weiterempfehlen." },
      { front: "Business Model Canvas", back: "Visuelles Framework mit neun Bausteinen zur strukturierten Darstellung eines Geschäftsmodells." },
      { front: "Value Proposition", back: "Das zentrale Nutzenversprechen eines Produkts oder einer Dienstleistung: Welches Problem wird gelöst und warum ist das relevant?" },
      { front: "Golden Circle", back: "Modell mit den Ebenen Why, How und What. Erfolgreiche Marken starten beim Why." },
      { front: "Positionierung", back: "Der strategische Platz einer Marke im Markt und ihre Abgrenzung vom Wettbewerb." },
      { front: "SMART-Ziele", back: "Ziele, die spezifisch, messbar, attraktiv, realistisch und terminiert formuliert sind." },
      { front: "SWOT-Analyse", back: "Analyseinstrument zur Bewertung interner Stärken und Schwächen sowie externer Chancen und Risiken." },
      { front: "Branding", back: "Langfristiger Aufbau von Markenbekanntheit, Image und Vertrauen." },
      { front: "Performance Marketing", back: "Marketingmaßnahmen mit klar messbaren Zielen wie Leads, Conversions oder Verkäufen." },
      { front: "Loyalty Marketing", back: "Maßnahmen zur Bindung bestehender Kunden und zur Erhöhung des Customer Lifetime Value." },
      { front: "ecomex-6P-Modell", back: "Ganzheitliches Marketingmodell mit Produkt, Positionierung, Promotion, Prozess, Plattform und Prüfung." },
      { front: "Persona", back: "Fiktiver, idealtypischer Vertreter einer Zielgruppe mit Bedürfnissen, Zielen und Verhalten." },
      { front: "Customer Lifetime Value", back: "Der gesamte wirtschaftliche Wert eines Kunden über die gesamte Dauer der Geschäftsbeziehung." },
      { front: "Marketing Automation", back: "Der Einsatz von Software zur Automatisierung wiederkehrender Marketingprozesse." },
      { front: "T-Shaped Marketer", back: "Marketingprofil mit breitem Grundwissen und vertieftem Spezialwissen in ein bis zwei Bereichen." }
    ],
    exercises: [
      "Analysiere ein Unternehmen deiner Wahl und beschreibe Produkt, Positionierung, Promotion, Prozess, Plattform und Prüfung in kurzen Stichpunkten.",
      "Skizziere eine Customer Journey mit mindestens fünf Kontaktpunkten für ein reales Produkt und ordne Branding-, Performance- und Loyalty-Maßnahmen zu.",
      "Leite für ein Marketingziel passende KPIs ab und erkläre, warum genau diese Kennzahlen sinnvoll sind."
    ],
    tips: [
      "Lerne Modelle nicht nur auswendig, sondern immer zusammen mit einem Praxisbeispiel.",
      "Verbinde jede Strategiefrage mit Zielgruppe, Ziel, Positionierung und Messbarkeit.",
      "Wenn du unsicher bist, frage dich zuerst: Welches Problem löst die Maßnahme für wen?"
    ]
  },
  {
    summary: "Website Marketing verbindet Domain- und URL-Grundlagen mit Customer Journey, Personas, Informationsarchitektur, Wireframes, Mobile First, Responsive Design, UX, Landingpages, Conversion-Optimierung, CTA-Logik, Trust-Elementen, CMS, Hosting und Performance.",
    questions: [
      single("Was ist das Domain Name System (DNS)?", ["Ein System zur Verwaltung von Domaininhabern", "Ein Telefonbuch des Internets, das Domainnamen in IP-Adressen übersetzt", "Eine Suchmaschine zum Finden von Websites", "Ein Sicherheitssystem für Online-Transaktionen"], 1, "Das DNS verbindet Domainnamen mit den passenden IP-Adressen."),
      single("Aus welchen Teilen besteht eine URL im Kern?", ["Domain, Pfad, Dateityp", "Protokoll, Subdomain, Domainname und TLD", "Servername, Sicherheit und Inhalt", "Nur Domainname und Endung"], 1, "Eine URL besteht typischerweise aus Protokoll, Subdomain, Domainname und TLD; oft kommt ein Pfad hinzu."),
      single("Welche Organisation verwaltet alle deutschen .de-Domains?", ["ICANN", "DENIC", "IANA", "InterNIC"], 1, "DENIC ist die zentrale Registrierungsstelle für .de-Domains."),
      multi("Welche Aussagen kennzeichnen eine gute Domain?", ["Sie ist einprägsam und leicht zu tippen", "Sie vermeidet unnötige Zahlen und Bindestriche", "Sie berücksichtigt Markenschutz", "Die TLD .com ist immer automatisch besser als .de"], [0, 1, 2], "Gute Domains sind merkbar, sauber und passend zur Zielgruppe oder zum Markt."),
      single("Was ist eine Multi-Domain-Strategie?", ["Die Nutzung mehrerer Domains für verschiedene Zielgruppen oder Märkte", "Mehrere Subdomains unter einer Hauptdomain", "Die Registrierung aller möglichen Endungen ohne Zweck", "Ein veraltetes Konzept ohne aktuelle Relevanz"], 0, "Mehrere Domains können für Märkte, Zielgruppen oder Produkte sinnvoll sein."),
      single("Wofür werden Subdomains typischerweise verwendet?", ["Blog, Shop, Support oder Karrierebereiche", "Nur für technische Tests", "Ausschließlich für Sicherheit", "Um die Website absichtlich zu verlangsamen"], 0, "Subdomains helfen dabei, Themen oder Bereiche zu trennen."),
      single("Was versteht man unter Customer Journey Mapping?", ["Die physische Route, die Kunden gehen", "Eine Visualisierung aller Berührungspunkte und Bedürfnisse von Kunden mit einem Unternehmen", "Ein Navigationsgerät für Websites", "Eine Kartografie von Verkaufsgebieten"], 1, "Customer Journey Mapping macht Kontaktpunkte und Erwartungen sichtbar."),
      single("Welche fünf Phasen der digitalen Customer Journey nennt das Modul?", ["Suche, Vergleich, Kauf, Zahlung, Versand", "Awareness, Consideration, Conversion, Retention, Advocacy", "Aufmerksamkeit, Interesse, Begierde, Aktion, Treue", "Anfrage, Angebot, Verhandlung, Abschluss, Follow-up"], 1, "Das Modell unterscheidet Aufmerksamkeit, Überlegung, Conversion, Bindung und Empfehlung."),
      single("Was ist eine Persona im Website Marketing?", ["Ein echtes Kundenprofil mit Name und Adresse", "Eine fiktive, aber realistische Beschreibung typischer Nutzer", "Eine Marketing-Kampagne für bestimmte Zielgruppen", "Die Identität des Website-Administrators"], 1, "Personas helfen, Inhalte und Nutzerführung realistischer zu planen."),
      single("Was ist eine Sitemap in der Website-Planung?", ["Eine Google-Map für die Website-Adresse", "Eine hierarchische Strukturierung der Inhalte und Funktionen einer Website", "Ein mobiles Navigationsgerät", "Eine Listenansicht aller Produktangebote"], 1, "Die Sitemap ordnet Inhalte und zeigt die Website-Struktur."),
      multi("Welche Aussagen zu Wireframes sind korrekt?", ["Sie zeigen Struktur statt fertigem Design", "Sie können Ressourcen sparen", "Sie erlauben frühe Usability-Tests", "Sie müssen farbig und vollständig gestaltet sein"], [0, 1, 2], "Wireframes helfen, Navigation und Struktur früh zu testen."),
      single("Was ist Mobile First?", ["Ein Design-Trend, der bald vorbei ist", "Eine Design-Philosophie, die die mobile Version zuerst priorisiert", "Die Annahme, dass Desktops wichtiger sind", "Ein Marketing-Gimmick ohne Nutzen"], 1, "Viele Nutzer starten mobil, daher wird die kleinste Ansicht zuerst gedacht."),
      single("Was ist Above the Fold?", ["Ein Designstil mit gefalteten Papiereffekten", "Der Bereich einer Website, der ohne Scrollen sichtbar ist", "Ein veraltetes Webdesign-Konzept", "Eine HTML-Struktur-Regel"], 1, "Im sichtbaren Einstiegsbereich sollten Nutzen und CTA schnell erfassbar sein."),
      single("Was ist eine Landingpage?", ["Eine Seite nur für Flugbucher", "Eine spezialisierte Seite mit Fokus auf eine klare Nutzerhandlung", "Automatisch die Startseite einer Website", "Eine technische Fehlerseite"], 1, "Landingpages sind auf eine konkrete Conversion optimiert."),
      single("Was ist Conversion Rate Optimization (CRO)?", ["Die Optimierung der Website-Geschwindigkeit", "Ein Prozess zur Steigerung gewünschter Nutzeraktionen", "Die Optimierung von Zahlungsgebühren", "Nur für E-Commerce relevant"], 1, "CRO reduziert Hürden und stärkt die Abschlusswahrscheinlichkeit."),
      multi("Was sind typische Trust-Elemente auf einer Website?", ["Kundenbewertungen", "Siegel und Zertifikate", "Echte Bilder und klare Ansprechpartner", "Versteckte AGB"], [0, 1, 2], "Trust-Elemente erhöhen Glaubwürdigkeit und senken Unsicherheit."),
      single("Was ist ein CMS?", ["Ein Sicherheitssystem", "Eine Software zur Erstellung, Verwaltung und Veröffentlichung digitaler Inhalte ohne tiefe Programmierkenntnisse", "Ein Analyse-Tool", "Ein Shopping-System"], 1, "Ein CMS macht Content-Pflege auch für Nicht-Techniker möglich."),
      single("Welche Hosting-Anforderungen sind für E-Commerce besonders wichtig?", ["Möglichst billiger Speicher", "Hohe Performance, Sicherheit, Backups, Support und Skalierbarkeit", "Nur die Domain zu registrieren", "Hosting ist für Erfolg unwichtig"], 1, "Gerade im E-Commerce sind Stabilität, Sicherheit und Geschwindigkeit geschäftskritisch."),
      single("Was sind Core Web Vitals?", ["Vitalzeichen eines Webservers", "Metriken für Ladezeit, Interaktivität und visuelle Stabilität", "Sicherheitszertifikate", "Reine Marketing-Metriken"], 1, "Core Web Vitals messen zentrale Qualitätsaspekte aus Nutzersicht."),
      open("Erkläre den Unterschied zwischen Sitemap, Informationsarchitektur und Navigationskonzept.", "Die Sitemap ordnet Seiten hierarchisch. Die Informationsarchitektur organisiert Inhalte und Wege logisch. Das Navigationskonzept übersetzt diese Struktur in konkrete Menüs und Nutzerführung."),
      open("Warum sind Persona, Customer Journey und Website-Ziele eng miteinander verbunden?", "Weil eine Website nur dann sinnvoll funktioniert, wenn klar ist, für wen sie gebaut wird, in welcher Phase sich diese Nutzer befinden und welche Handlung oder welcher Nutzen im Vordergrund steht."),
      open("Nenne drei Gründe, warum eine Website trotz gutem Design schlecht performen kann.", "Zum Beispiel schlechte Ladezeit, unklare Navigation, fehlende mobile Optimierung, schwache CTAs, fehlende Trust-Elemente oder eine Zielseite, die nicht zur Nutzerabsicht passt.")
    ],
    flashcards: [
      { front: "DNS", back: "System, das Domainnamen in IP-Adressen übersetzt und so Websites auffindbar macht." },
      { front: "URL", back: "Uniform Resource Locator mit Bestandteilen wie Protokoll, Subdomain, Domainname und TLD." },
      { front: "DENIC", back: "Die zentrale Registrierungsstelle für .de-Domains in Deutschland." },
      { front: "Multi-Domain-Strategie", back: "Einsatz mehrerer Domains für verschiedene Märkte, Zielgruppen oder Produkte." },
      { front: "Subdomain", back: "Erweiterung einer Hauptdomain, etwa blog.example.de oder shop.example.de." },
      { front: "Customer Journey Mapping", back: "Visualisierung und Analyse aller Berührungspunkte, Bedürfnisse und Erwartungen eines Kunden." },
      { front: "Persona", back: "Fiktive, aber realistische Beschreibung eines typischen Nutzer-Archetyps." },
      { front: "Sitemap", back: "Hierarchische Strukturierung der Inhalte und Funktionen einer Website." },
      { front: "Wireframe", back: "Schematische Darstellung der Seitenstruktur ohne visuelle Details." },
      { front: "Mobile First", back: "Planungsansatz, bei dem die mobile Nutzung zuerst optimiert wird." },
      { front: "Responsive Design", back: "Gestaltung, bei der sich eine Website an unterschiedliche Bildschirmgrößen anpasst." },
      { front: "Above the Fold", back: "Der Bereich einer Website, der ohne Scrollen sichtbar ist." },
      { front: "Landing Page", back: "Spezialisierte Seite mit Fokus auf eine konkrete Nutzerhandlung oder Conversion." },
      { front: "CTA", back: "Klare Handlungsaufforderung an den Nutzer, zum Beispiel Jetzt anfragen oder Kostenlos testen." },
      { front: "Trust-Elemente", back: "Elemente wie Bewertungen, Siegel, Referenzen oder klare Ansprechpartner, die Vertrauen schaffen." },
      { front: "CRO", back: "Prozess zur Steigerung gewünschter Nutzeraktionen durch gezielte Optimierung." },
      { front: "CMS", back: "Software zur Erstellung, Verwaltung und Veröffentlichung digitaler Inhalte." },
      { front: "Hosting", back: "Server- und Infrastrukturleistung, auf der eine Website gespeichert und ausgeliefert wird." },
      { front: "Core Web Vitals", back: "Google-Metriken für Ladezeit, Interaktivität und visuelle Stabilität." },
      { front: "Page Speed", back: "Geschwindigkeit, mit der eine Website lädt und für Nutzer reagiert." }
    ],
    exercises: [
      "Plane für eine Website eine Sitemap, zwei Personas und je eine wichtige Conversion pro Persona.",
      "Skizziere eine Landingpage mit Above-the-Fold-Bereich, CTA und zwei Trust-Elementen.",
      "Analysiere eine reale Website auf Mobile First, Navigationslogik, Trust-Elemente und Conversion-Hürden."
    ],
    tips: [
      "Denke Website Marketing immer aus Sicht des Nutzers, nicht nur aus Unternehmenssicht.",
      "Struktur, Ziel und Nutzerführung sollten vor Design-Feinheiten stehen.",
      "Wenn eine Seite nicht performt, prüfe zuerst Intention, Geschwindigkeit, Klarheit und Vertrauen."
    ]
  },
  {
    summary: "Online-Recht behandelt Datenschutz, DSGVO, Impressum, Cookie- und Consent-Themen, Betroffenenrechte, Auftragsverarbeitung, Drittlandübermittlung, E-Mail-Marketing, Urheber- und Markenrecht, Influencer-Kennzeichnung, UWG, Tracking sowie rechtliche Risiken bei Werbung und KI-Inhalten.",
    questions: [
      single("Welches Gesetz regelt den Schutz personenbezogener Daten in der EU zentral?", ["Telemediengesetz", "Datenschutz-Grundverordnung", "Urheberrechtsgesetz", "Gesetz gegen unlauteren Wettbewerb"], 1, "Die DSGVO ist das zentrale Datenschutzregelwerk in der EU."),
      single("Welche Angaben sind im Impressum typischerweise verpflichtend?", ["Nur Name und E-Mail", "Vollständiger Name, Anschrift und Kontaktmöglichkeiten", "Nur Geschäftsadresse", "Name und Bankverbindung"], 1, "Das Impressum dient der Anbieterkennzeichnung und braucht wesentliche Identifikations- und Kontaktangaben."),
      single("Welche Daten gehören zu den besonderen personenbezogenen Daten nach Art. 9 DSGVO?", ["Name, Geburtsdatum, E-Mail-Adresse", "Ethnische Herkunft, politische Ansichten, religiöse Überzeugung und Gesundheitsdaten", "Nur IP-Adresse und Standortdaten", "Nur Kontaktinformationen und Kundennummer"], 1, "Diese Daten sind besonders sensibel und rechtlich besonders geschützt."),
      single("Wann ist eine Einwilligung nach DSGVO gültig?", ["Wenn sie stillschweigend gegeben wird", "Wenn sie freiwillig, spezifisch, informiert und unmissverständlich erteilt wird", "Wenn sie in AGB versteckt ist", "Wenn der Nutzer die Website besucht"], 1, "Eine Einwilligung muss bewusst, klar und zweckbezogen erfolgen."),
      single("Wie lange hat ein Unternehmen nach einer Datenpanne Zeit für die Meldung an die Behörde?", ["24 Stunden", "72 Stunden", "Eine Woche", "30 Tage"], 1, "Datenschutzverletzungen müssen in der Regel innerhalb von 72 Stunden gemeldet werden."),
      single("Was bedeutet Privacy by Design?", ["Eine Datenschutzerklärung in großem Design", "Datenschutz wird bereits in der Produkt- und Prozessgestaltung mitgedacht", "Nur ein Design für Cookie-Banner", "Das Entfernen privater Daten nach Verkauf"], 1, "Datenschutz soll von Anfang an in Systeme und Prozesse integriert werden."),
      single("Wann dürfen nicht notwendige Cookies gesetzt werden?", ["Immer automatisch", "Nur mit Einwilligung des Nutzers", "Nur wenn Google Analytics aktiv ist", "Nur am Desktop"], 1, "Für nicht notwendige Cookies ist in der Regel eine Einwilligung erforderlich."),
      single("Was ist eine Consent Management Platform (CMP)?", ["Ein Cookie-Löscher", "Eine Software zur Verwaltung von Nutzer-Einwilligungen", "Ein Werbeblocker", "Ein Verschlüsselungsprogramm"], 1, "CMPs helfen, Zustimmungen für Cookies und Tracking sauber zu erfassen und zu verwalten."),
      multi("Welche Rechte haben betroffene Personen nach DSGVO?", ["Auskunft", "Berichtigung", "Löschung", "Datenübertragbarkeit"], [0, 1, 2, 3], "Die DSGVO gewährt umfassende Rechte im Umgang mit personenbezogenen Daten."),
      single("Welches Recht schützt kreative Werke wie Texte, Musik, Bilder oder Software?", ["Markenrecht", "Urheberrechtsgesetz", "Wettbewerbsrecht", "DSGVO"], 1, "Das Urheberrecht schützt schöpferische Werke und deren Nutzung."),
      single("Darf man ein Foto einer Person ohne Erlaubnis auf einer Website veröffentlichen?", ["Ja, jedes Foto ist frei nutzbar", "Ja, wenn die Person berühmt ist", "Nein, außer es greift eine Ausnahme oder es liegt eine Zustimmung vor", "Nur wenn man das Foto selbst gemacht hat"], 2, "Das Recht am eigenen Bild schützt Personen vor ungewollter Veröffentlichung."),
      single("Was ist eine Lizenz bei Inhalten im Online Marketing?", ["Eine Genehmigung zur Nutzung von Inhalten unter bestimmten Bedingungen", "Ein Copyright-Vermerk", "Ein Filter für Bilder", "Ein Wasserzeichen"], 0, "Lizenzen regeln, wie und in welchem Umfang Inhalte genutzt werden dürfen."),
      single("Welches Recht schützt Marken, Logos und Produktnamen?", ["Urheberrecht", "Datenschutz", "Markenrecht", "Wettbewerbsrecht"], 2, "Markenrecht schützt Kennzeichen vor Verwechslung und unbefugter Nutzung."),
      single("Was ist eine Abmahnung im Online-Marketing-Kontext?", ["Ein Warnbrief wegen möglicher Rechtsverletzungen", "Eine Rechnung für Dienstleistungen", "Ein Hinweis auf technische Fehler", "Eine Preiserhöhungsankündigung"], 0, "Abmahnungen fordern typischerweise die Unterlassung rechtswidriger Handlungen."),
      single("Was verbietet das UWG?", ["Alle Werbung", "Irreführende Werbung, Schleichwerbung und andere unlautere Geschäftspraktiken", "Nur Online-Werbung", "Werbung mit Stars"], 1, "Das UWG schützt vor unfairen und täuschenden geschäftlichen Handlungen."),
      single("Was ist Schleichwerbung?", ["Billige Werbung", "Werbung im Internet", "Versteckte oder nicht gekennzeichnete Werbung", "Werbung nur auf Social Media"], 2, "Werbung muss als Werbung erkennbar sein."),
      single("Dürfen Influencer-Posts ohne Werbekennzeichnung veröffentlicht werden?", ["Ja, wenn es subtil ist", "Ja, wenn kostenlos gearbeitet wurde", "Nein, kommerzielle Inhalte müssen klar gekennzeichnet sein", "Ja, wenn es in Stories gepostet wird"], 2, "Kommerzielle Kommunikation muss transparent erkennbar sein."),
      single("Wann ist eine Auftragsverarbeitungs-Vereinbarung erforderlich?", ["Nie, das ist optional", "Immer, wenn ein Dritter personenbezogene Daten im Auftrag verarbeitet", "Nur bei großen Unternehmen", "Nur bei E-Mail-Marketing"], 1, "Sobald ein Dienstleister Daten im Auftrag verarbeitet, braucht es einen AV-Vertrag."),
      single("Was ist Double-Opt-In im E-Mail-Marketing?", ["Zweimal klicken beim Abmelden", "Bestätigung der Anmeldung über einen Link in einer E-Mail", "Zwei verschiedene Newsletter", "Zwei E-Mail-Adressen"], 1, "Das Double-Opt-In dient dem rechtssicheren Nachweis einer Anmeldung."),
      multi("Welche zusätzlichen Anforderungen können bei Google Analytics nach DSGVO und Schrems II relevant sein?", ["IP-Anonymisierung", "Einwilligung", "Transparenz in der Datenschutzerklärung", "Auftragsverarbeitungsvertrag"], [0, 1, 2, 3], "Gerade bei Tracking und Drittlandbezug sind zusätzliche Schutzmaßnahmen und Transparenz wichtig."),
      single("Was ist das Kopplungsverbot nach DSGVO?", ["Ein Verbot, mehrere Verträge zu haben", "Das Verbot, eine Leistung von nicht notwendigen Datenzustimmungen abhängig zu machen", "Ein Verbot für Paketdienste", "Ein Verbot für Newsletter"], 1, "Nicht erforderliche Einwilligungen dürfen nicht erzwungen werden."),
      open("Warum reicht es rechtlich nicht, nur eine Datenschutzerklärung online zu stellen?", "Weil zusätzlich die tatsächlichen Prozesse, Rechtsgrundlagen, Einwilligungen, technischen Maßnahmen und Verträge datenschutzkonform umgesetzt sein müssen."),
      open("Nenne typische rechtliche Risiken im E-Mail-Marketing.", "Zum Beispiel fehlende Einwilligung, mangelhafter Nachweis, fehlender Abmeldelink, unklare Absender, Schleichwerbung oder unzulässige Datenweitergabe."),
      open("Welche Probleme können KI-generierte Inhalte aus rechtlicher Sicht aufwerfen?", "Sie können Fragen zu Urheberrecht, Transparenz, verwendeten Trainingsdaten, Persönlichkeitsrechten und Kennzeichnungspflichten aufwerfen.")
    ],
    flashcards: [
      { front: "DSGVO", back: "Datenschutz-Grundverordnung für den Umgang mit personenbezogenen Daten in der EU." },
      { front: "Personenbezogene Daten", back: "Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen." },
      { front: "Besondere Kategorien", back: "Besonders sensible Daten wie Gesundheit, Religion, politische Ansichten oder biometrische Daten." },
      { front: "Einwilligung", back: "Freiwillige, spezifische, informierte und unmissverständliche Zustimmung zur Datenverarbeitung." },
      { front: "Privacy by Design", back: "Datenschutz wird von Anfang an in Produkte und Prozesse integriert." },
      { front: "Datenpanne", back: "Sicherheitsverletzung mit personenbezogenen Daten, die meist binnen 72 Stunden gemeldet werden muss." },
      { front: "CMP", back: "Consent Management Platform zur Verwaltung von Einwilligungen für Cookies und Tracking." },
      { front: "Impressum", back: "Pflichtangaben zur Anbieterkennzeichnung, etwa Name, Anschrift und Kontaktmöglichkeiten." },
      { front: "Datenschutzerklärung", back: "Transparente Information über Zwecke, Rechtsgrundlagen, Speicherdauer und Rechte der Betroffenen." },
      { front: "Auftragsverarbeitung", back: "Verarbeitung personenbezogener Daten durch einen Dienstleister im Auftrag eines Verantwortlichen." },
      { front: "Schrems II", back: "Europäisches Urteil mit Folgen für Datentransfers in Drittländer wie die USA." },
      { front: "SCC", back: "Standardvertragsklauseln für Datenübermittlungen in Drittländer." },
      { front: "Urheberrecht", back: "Schutz kreativer Werke wie Texte, Musik, Bilder, Videos oder Software." },
      { front: "Lizenz", back: "Genehmigung zur Nutzung eines Werkes unter bestimmten Bedingungen." },
      { front: "Markenrecht", back: "Schutz von Marken, Logos, Namen und sonstigen Kennzeichen." },
      { front: "Abmahnung", back: "Rechtliche Warnung wegen einer vermuteten Rechtsverletzung." },
      { front: "UWG", back: "Gesetz gegen unlauteren Wettbewerb mit Verbot irreführender oder unlauterer Werbung." },
      { front: "Schleichwerbung", back: "Nicht klar gekennzeichnete kommerzielle Kommunikation." },
      { front: "Double-Opt-In", back: "Bestätigungsverfahren für rechtssichere Newsletter-Anmeldungen." },
      { front: "Kopplungsverbot", back: "Verbot, Leistungen von unnötigen Datenschutz-Einwilligungen abhängig zu machen." }
    ],
    exercises: [
      "Prüfe eine Website auf Impressum, Datenschutzerklärung, Cookie-Logik und erkennbare Tracking-Dienste.",
      "Bewerte einen Influencer-Post darauf, ob Werbekennzeichnung, Bildrechte und Transparenz sauber gelöst sind.",
      "Erstelle eine kurze Checkliste für rechtssicheres E-Mail-Marketing mit Double-Opt-In, Abmeldelink und Dokumentation."
    ],
    tips: [
      "Denke bei Rechtsthemen immer an Transparenz, Nachweisbarkeit und Fairness.",
      "Prüfe nicht nur, was erlaubt ist, sondern auch, was dokumentiert und beweisbar sein muss.",
      "Wenn eine Werbeaussage zu stark, zu versteckt oder zu bequem klingt, lohnt sich fast immer eine rechtliche Prüfung."
    ]
  },
  {
    summary: "Content Marketing richtet sich an der Lebenswelt potenzieller Kunden aus und setzt auf hilfreiche, relevante Inhalte statt reiner Werbeunterbrechung. Im Fokus stehen Personas, Golden Circle, Core Story, Storytelling, Content-Formate, PESO, Hero-Hub-Hygiene, Content-Pillars, SEO-Content, Content-Planung, Audits und Distribution.",
    questions: [
      single("Was ist die Hauptaufgabe von Content Marketing?", ["Produkte direkt zu verkaufen", "Die Lebenswelt potenzieller Kunden zu verstehen und zu adressieren", "Nur Werbeanzeigen zu schalten", "Social-Media-Kanäle zu verwalten"], 1, "Content Marketing startet bei den Fragen, Problemen und Interessen der Zielgruppe."),
      single("Wie unterscheiden sich Werbung und Content Marketing grundlegend?", ["Werbung investiert in SEO, Content Marketing in Anzeigen", "Werbung arbeitet stärker über bezahlte Sichtbarkeit, Content Marketing über relevante Inhalte und organische Reichweite", "Content Marketing ist älter als Werbung", "Werbung hat automatisch bessere Conversion Rates"], 1, "Content Marketing setzt stärker auf langfristigen Vertrauensaufbau durch Inhalte."),
      single("Was ist eine Persona?", ["Ein Name für ein Produkt", "Eine fiktive Repräsentation eines idealen Kunden auf Basis von Daten", "Ein Social-Media-Kanal", "Ein Modell zur Preisgestaltung"], 1, "Personas helfen, Content präzise und kundenzentriert zu planen."),
      single("Welche Reihenfolge ist im Golden Circle korrekt?", ["How, What, Why", "Why, How, What", "What, How, Why", "Why, What, How"], 1, "Der Golden Circle startet beim Why und arbeitet sich über How zum What vor."),
      single("Was ist eine Customer Journey im Content Marketing?", ["Eine Reise des Kunden zum Büro", "Ein Marketingkanal in Social Media", "Die verschiedenen Phasen und Touchpoints bis zur Kaufentscheidung", "Ein Content-Format"], 2, "Content sollte entlang der Journey geplant und verteilt werden."),
      multi("Welche Formate gehören zu möglichen Content-Arten?", ["Blog-Artikel", "Whitepaper", "Infografiken", "E-Books"], [0, 1, 2, 3], "Diese Formate gehören zu typischen Content-Bausteinen."),
      single("Was versteht man unter Owned Media?", ["Alle Inhalte auf bezahlten Plattformen", "Alle eigenen Kanäle wie Website, Blog, Newsletter oder Magazin", "Nur Videos und Podcasts", "Inhalte, die andere über dich schreiben"], 1, "Owned Media umfasst die Kanäle, die ein Unternehmen selbst kontrolliert."),
      single("Was ist der PESO-Ansatz?", ["Ein spanisches Zahlungssystem für Content", "Paid, Earned, Shared und Owned Media als vier Säulen der Distribution", "Eine Formel zur Berechnung von Engagement", "Ein SEO-Modell"], 1, "PESO ordnet die wichtigsten Verbreitungswege von Inhalten."),
      single("Was ist die Core Story eines Unternehmens?", ["Die Geschichte der Gründung", "Die zentrale Leitidee, die Marke und Nutzer verbindet", "Ein einzelner Blog-Artikel", "Eine zufällige Anekdote"], 1, "Die Core Story trägt die übergreifende Logik und Erzählung der Marke."),
      single("Was ist Storytelling im Content Marketing?", ["Fiktive Geschichten ohne Bezug zum Produkt", "Eine Erzählweise, die emotionale Verbindung schafft und Inhalte verständlicher macht", "Nur für die Unterhaltungsbranche relevant", "Ein veraltetes Marketing-Konzept"], 1, "Storytelling macht Inhalte merkbarer und emotional anschlussfähiger."),
      single("Welche drei Kategorien gehören zum Hero-Hub-Hygiene-Modell?", ["Hero, Helper, Hygiene", "Hero, Hub, Hygiene", "Hot, Helpful, Hidden", "High, Happy, Honest"], 1, "Hero steht für große Kampagnen, Hub für regelmäßigen Content und Hygiene für such- oder fragegetriebenen Content."),
      single("Was bedeutet es, Content zu recyceln?", ["Inhalte zu löschen", "Bestehende Inhalte in neue Formate zu überführen", "Inhalte nur zu übersetzen", "Duplicate Content zu erstellen"], 1, "Content-Recycling erhöht Reichweite und ROI bereits vorhandener Inhalte."),
      single("Was ist der Unterschied zwischen Evergreen und aktuellem Content?", ["Evergreen ist grün gefärbt", "Evergreen bleibt langfristig relevant, aktueller Content ist stärker zeitgebunden", "Evergreen ist immer älter", "Aktueller Content hat keine Struktur"], 1, "Evergreen Content kann dauerhaft Such- und Nutzwert erzeugen."),
      single("Was ist ein Content-Pillar?", ["Ein Support-System für Websites", "Eine zentrale Themensäule, die mehrere verwandte Inhalte organisiert", "Eine technische Infrastruktur", "Ein Social-Media-Trend"], 1, "Content-Pillars geben der Strategie Struktur und fördern thematische Tiefe."),
      multi("Welche KPIs sind typisch für Content-Marketing-Erfolg?", ["Conversion Rate", "Reichweite und Impressionen", "Engagement Rate", "Generierte Leads"], [0, 1, 2, 3], "Content-Erfolg wird je nach Ziel über Reichweite, Interaktion und konkrete Resultate gemessen."),
      single("Was ist User Intent oder Search Intent?", ["Der Preis, den Nutzer bereit sind zu zahlen", "Die Absicht eines Nutzers hinter einer Suchanfrage", "Die Anzahl der Website-Besuche", "Die bevorzugte Social-Media-Plattform"], 1, "Guter Content beantwortet nicht nur Keywords, sondern die dahinterliegende Nutzerabsicht."),
      single("Was ist E-E-A-T nach Google?", ["Ein E-Mail-System", "Experience, Expertise, Authoritativeness, Trustworthiness", "Eine technische Abkürzung", "Ein Zahlungssystem"], 1, "Google nutzt diese Qualitätskriterien besonders stark bei vertrauenssensiblen Themen."),
      single("Was ist ein Content-Briefing?", ["Eine kurze Video-Anleitung", "Ein Leitfaden für Ziel, Zielgruppe, Format, Ton, Keywords und Struktur eines Inhalts", "Eine Vertragsform", "Ein Social-Media-Post"], 1, "Ein gutes Briefing erhöht Konsistenz und Qualität im Redaktionsprozess."),
      multi("Was umfasst gute Content-Planung?", ["Themenfelder", "Redaktionspläne", "Styleguides und Tone of Voice", "Kanalarchitektur"], [0, 1, 2, 3], "Gute Planung ist strukturiert und nicht zufällig."),
      single("Was ist ein Content-Audit?", ["Eine Finanzprüfung", "Eine systematische Analyse bestehender Inhalte auf Performance und Lücken", "Ein Video-Format", "Ein Social-Media-Bericht"], 1, "Content-Audits zeigen, was funktioniert, was fehlt und was verbessert werden kann."),
      open("Erkläre den Unterschied zwischen Core Story, Brand Story und einem einzelnen Content Piece.", "Die Core Story ist die zentrale inhaltliche Leitidee der Marke. Die Brand Story ist die größere Marken-Erzählung auf dieser Basis. Ein Content Piece ist eine einzelne konkrete Umsetzung, zum Beispiel ein Artikel, Video oder Whitepaper."),
      open("Warum sind Personas und Search Intent zusammen so wichtig für Content Marketing?", "Weil Personas zeigen, für wen Inhalte gedacht sind, während Search Intent erklärt, was diese Personen in einer bestimmten Situation wirklich suchen. Erst zusammen entsteht relevanter Content."),
      open("Wie würdest du Hero, Hub und Hygiene in einer Content-Strategie praktisch kombinieren?", "Mit wenigen großen Hero-Inhalten für Aufmerksamkeit, regelmäßigem Hub-Content zur Bindung und suchorientiertem Hygiene-Content für langfristige Sichtbarkeit und Nachfrageerfassung.")
    ],
    flashcards: [
      { front: "Content Marketing", back: "Hilfreiche, informative und unterhaltsame Inhalte, die die Lebenswelt der Zielgruppe adressieren." },
      { front: "Persona", back: "Fiktive, detaillierte Darstellung eines idealen Kunden mit Zielen, Problemen und Verhaltensweisen." },
      { front: "Golden Circle", back: "Modell mit den Ebenen Why, How und What als Grundlage klarer Kommunikation." },
      { front: "Customer Journey", back: "Die Phasen und Touchpoints, die ein Kunde bis zur Kaufentscheidung und darüber hinaus durchläuft." },
      { front: "Owned Media", back: "Eigene Kanäle wie Website, Blog, Newsletter oder Podcast, die ein Unternehmen selbst kontrolliert." },
      { front: "Earned Media", back: "Externe Erwähnungen, Bewertungen, Backlinks oder Shares, die nicht direkt bezahlt werden." },
      { front: "Paid Media", back: "Bezahlte Werbeplatzierungen wie Google Ads, Social Ads oder Sponsored Posts." },
      { front: "PESO", back: "Paid, Earned, Shared und Owned Media als vier Säulen der Content-Distribution." },
      { front: "Core Story", back: "Die zentrale Leitidee und Hauptgeschichte einer Marke." },
      { front: "Storytelling", back: "Erzähltechnik, die emotionale Verbindung und bessere Erinnerbarkeit schafft." },
      { front: "Hero Content", back: "Großer Kampagnen-Content mit hohem Produktionsaufwand und Reichweitenziel." },
      { front: "Hub Content", back: "Regelmäßig erscheinender Content zur Bindung und thematischen Präsenz." },
      { front: "Hygiene Content", back: "SEO- und fragegetriebener Content zur Beantwortung häufiger Nutzeranliegen." },
      { front: "Content-Pillar", back: "Zentrale Themensäule, um die mehrere Inhalte aufgebaut werden." },
      { front: "Evergreen Content", back: "Inhalte mit langfristiger Relevanz und dauerhaftem Nutzwert." },
      { front: "Search Intent", back: "Absicht oder Ziel eines Nutzers hinter einer Suchanfrage." },
      { front: "E-E-A-T", back: "Experience, Expertise, Authoritativeness und Trustworthiness als Google-Qualitätskriterien." },
      { front: "Content-Briefing", back: "Leitfaden für Ziel, Zielgruppe, Format, Tonalität, Keywords und Struktur eines Inhalts." },
      { front: "Content-Audit", back: "Systematische Prüfung bestehender Inhalte auf Wirkung, Lücken und Optimierungspotenzial." },
      { front: "Content-Recycling", back: "Wiederverwertung bestehender Inhalte in neuen Formaten, zum Beispiel Blog zu Video." }
    ],
    exercises: [
      "Erstelle für ein Unternehmen drei Content-Pillars und ordne jedem Pillar je einen Hero-, Hub- und Hygiene-Inhalt zu.",
      "Schreibe ein Content-Briefing für einen Artikel inklusive Persona, Search Intent, Ziel und CTA.",
      "Analysiere einen bestehenden Content-Auftritt nach PESO, Formaten, Redaktionslogik und möglichem Recycling-Potenzial."
    ],
    tips: [
      "Guter Content beginnt nicht beim Format, sondern bei Zielgruppe, Absicht und Nutzen.",
      "Frage dich bei jedem Inhalt, warum die Zielgruppe ihn freiwillig konsumieren sollte.",
      "Strategie wird im Content Marketing erst durch konsistente Planung, Distribution und Auswertung wirksam."
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

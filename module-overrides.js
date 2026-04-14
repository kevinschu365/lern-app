const singleQ = (prompt, options, correctIndex, explanation) => ({
  type: "single",
  prompt,
  options,
  correctIndex,
  explanation
});

const multiQ = (prompt, options, correctIndices, explanation) => ({
  type: "multi",
  prompt,
  options,
  correctIndices,
  explanation
});

const openQ = (prompt, sampleAnswer) => ({
  type: "open",
  prompt,
  sampleAnswer
});

const extraCards = (topic) => [
  {
    front: `${topic} - Praxisfrage`,
    back: `Frage dich bei diesem Modul immer zuerst: Welches Problem wird geloest und fuer welche Zielgruppe ist das relevant?`
  },
  {
    front: `${topic} - Erfolg`,
    back: `Ueberlege dir fuer dieses Modul passende Kennzahlen, typische Fehler und einen Praxisfall aus einem echten Unternehmen.`
  }
];

const moduleOverrides = {
  7: {
    summary:
      "CRM & Marketing Automation verbindet Customer Journey, Verteileraufbau, Segmentierung, Newsletter, KPIs, Loyalty und Automationen. Das Modul zeigt, wie Beziehungen systematisch aufgebaut und ueber Prozesse skaliert werden.",
    questions: [
      singleQ("Wofuer steht CRM?", ["Customer Relationship Management", "Campaign Reach Model", "Content Revenue Machine", "Channel Report Management"], 0, "CRM beschreibt das Management von Kundenbeziehungen und relevanten Daten."),
      singleQ("Welches Ziel verfolgt CRM im Kern?", ["Nur mehr Anzeigen auszuspielen", "Kundenbeziehungen gezielt aufzubauen und zu pflegen", "Nur Rechnungen zu speichern", "Nur Social Media Inhalte zu planen"], 1, "CRM verknuepft Kundendaten, Kommunikation und Prozesse entlang der Beziehung."),
      singleQ("Warum spielt die Customer Journey im CRM eine wichtige Rolle?", ["Weil sie nur fuer Design wichtig ist", "Weil Kommunikation zur Phase des Kunden passen muss", "Weil sie KPIs ersetzt", "Weil sie nur fuer B2B relevant ist"], 1, "Eine gute CRM-Logik richtet Inhalte und Ausloeser nach dem Verhalten des Kunden aus."),
      multiQ("Welche Themen gehoeren laut Modul zu E-Mail-Marketing im CRM-Kontext?", ["Verteileraufbau", "Willkommensprozess", "Segmentierung", "A/B-Tests"], [0, 1, 2, 3], "E-Mail-Marketing ist ein zentraler Ausspielkanal im CRM."),
      singleQ("Was ist Segmentierung?", ["Alle Kontakte gleich zu behandeln", "Kontakte nach Merkmalen oder Verhalten zu gruppieren", "Nur den Newsletter kuerzer zu schreiben", "Eine andere Bezeichnung fuer KPI"], 1, "Segmentierung erhoeht Relevanz und Personalisierung."),
      singleQ("Was beschreibt Marketing Automation am besten?", ["Jede Mail manuell senden", "Automatisierte, regelbasierte Kommunikation und Prozesse", "Nur KI-Bildgenerierung", "Nur den Datenexport"], 1, "Automation verbindet Trigger, Inhalte und Zeitpunkte systematisch."),
      multiQ("Welche Kennzahlen koennen im E-Mail-Marketing relevant sein?", ["Open Rate", "Click Rate", "Conversion Rate", "Bueroflaeche"], [0, 1, 2], "Mehrere KPIs helfen dabei, Qualitaet und Wirkung zu beurteilen."),
      openQ("Erklaere den Zusammenhang von CRM, E-Mail-Marketing und Marketing Automation.", "CRM bildet die Daten- und Beziehungsgrundlage. E-Mail-Marketing ist ein wichtiger Kanal innerhalb des CRM. Marketing Automation sorgt dafuer, dass Kommunikation passend und regelbasiert automatisch ausgespielt wird."),
      openQ("Warum ist Segmentierung oft wirksamer als ein Newsletter an alle?", "Weil unterschiedliche Kontakte unterschiedliche Beduerfnisse, Interessen, Reifestufen und Kaufwahrscheinlichkeiten haben. Segmentierung macht Kommunikation relevanter.")
    ],
    flashcards: [
      { front: "CRM", back: "Customer Relationship Management fuer Aufbau, Pflege und Entwicklung von Kundenbeziehungen." },
      { front: "Customer Journey", back: "Abfolge von Kontaktpunkten und Phasen, durch die ein Kunde bis zur Bindung geht." },
      { front: "Segmentierung", back: "Aufteilung von Kontakten nach Merkmalen, Verhalten oder Bedarf." },
      { front: "Willkommensstrecke", back: "Automatisierte Serie von Nachrichten nach Anmeldung oder Erstkontakt." },
      { front: "Marketing Automation", back: "Regelbasierte, automatisierte Kommunikation entlang definierter Trigger." },
      { front: "Retention", back: "Massnahmen zur Bindung und Wiederaktivierung bestehender Kunden." },
      { front: "A/B-Test", back: "Vergleich zweier Varianten, um bessere Performance zu identifizieren." },
      { front: "Loyalty Programm", back: "Systematische Foerderung von Bindung, Wiederkauf und Markennaehe." }
    ],
    exercises: [
      "Entwirf eine einfache Willkommensstrecke fuer neue Newsletter-Abonnenten.",
      "Lege drei sinnvolle Segmente fuer einen Shop oder Dienstleister fest und begruende sie.",
      "Bewerte ein CRM-Tool nach Prozessen, Automationen, Integrationen und Teamfit."
    ],
    tips: [
      "Denke CRM nie nur als Tool, sondern immer als Zusammenspiel aus Daten, Inhalt und Prozess.",
      "Frage bei jeder Automation: Welcher Trigger startet sie und welches Ziel verfolgt sie?",
      "Je relevanter eine Nachricht fuer das Segment, desto eher wird sie geoeffnet und geklickt."
    ]
  },
  8: {
    summary:
      "SEA behandelt bezahlte Suchmaschinenwerbung mit Fokus auf Auktionsverfahren, Kennzahlen, Suchanfragen, Keyword-Recherche, Match Types, Kampagnenstruktur, Anzeigen, Gebotsstrategien und Optimierung.",
    questions: [
      singleQ("Wofuer steht SEA?", ["Search Engine Analysis", "Search Engine Advertising", "Search Experience Automation", "System Engine Ads"], 1, "SEA bezeichnet bezahlte Suchmaschinenwerbung."),
      singleQ("Was beschreibt das Auktionsverfahren in SEA?", ["Die manuelle Reihenfolge im Browser", "Die Ausspielung von Anzeigen auf Basis von Gebot und Relevanz", "Nur die Rechnungsstellung", "Das Hosting der Zielseite"], 1, "Anzeigenpositionen entstehen nicht nur ueber Gebot, sondern auch ueber Qualitaet."),
      multiQ("Welche Themen gehoeren laut Modul zur Keyword-Arbeit?", ["Suchanfragen", "Keyword-Recherche", "Keyword-Optionen", "Tools"], [0, 1, 2, 3], "Keyword-Arbeit ist die Basis passender Kampagnen."),
      singleQ("Wozu dienen Match Types?", ["Sie ersetzen Zielseiten", "Sie steuern, wie eng Suchanfragen zur Buchung passen muessen", "Sie sind nur fuer SEO wichtig", "Sie definieren das Budget"], 1, "Match Types beeinflussen Reichweite und Kontrolle."),
      singleQ("Was ist eine Conversion im SEA-Kontext?", ["Nur ein Seitenaufruf", "Eine gewuenschte Nutzerhandlung", "Die Farbe der Anzeige", "Eine Suchanfrage ohne Klick"], 1, "Conversions sind zentrale Zielhandlungen wie Kauf, Lead oder Anmeldung."),
      multiQ("Welche Kennzahlen sind fuer SEA oft wichtig?", ["CTR", "CPC", "Conversions", "Lagerbestand"], [0, 1, 2], "Die KPI-Auswahl haengt vom Kampagnenziel ab."),
      singleQ("Warum ist die Kampagnenstruktur wichtig?", ["Weil sie die Kaffeemaschine steuert", "Weil sie Steuerung, Relevanz und Auswertung verbessert", "Weil Anzeigen sonst verboten sind", "Weil dadurch keine Keywords noetig sind"], 1, "Eine saubere Struktur erleichtert Budget- und Textsteuerung."),
      openQ("Warum reicht ein hohes Gebot allein nicht fuer gute SEA-Ergebnisse?", "Weil Relevanz, Anzeigenqualitaet, Zielseite, Suchintention und Struktur ebenfalls wichtig sind. Hohe Gebote ohne Qualitaet sind ineffizient."),
      openQ("Erklaere kurz den Unterschied zwischen Suchanfrage und Keyword.", "Ein Keyword wird vom Werbetreibenden gebucht. Die Suchanfrage ist das, was Nutzer tatsaechlich in die Suchmaschine eingeben.")
    ],
    flashcards: [
      { front: "SEA", back: "Search Engine Advertising, also bezahlte Suchmaschinenwerbung." },
      { front: "Auktionsverfahren", back: "System, das Anzeigenplatzierungen anhand von Gebot und Relevanz bestimmt." },
      { front: "CTR", back: "Click Through Rate, also das Verhaeltnis von Klicks zu Impressionen." },
      { front: "CPC", back: "Cost per Click, also Kosten pro Klick." },
      { front: "Conversion", back: "Erwuenschte Handlung nach Klick, zum Beispiel Kauf oder Lead." },
      { front: "Match Type", back: "Keyword-Option, die die Passung zwischen Suchanfrage und Buchung steuert." },
      { front: "ROAS", back: "Return on Ad Spend als Umsatz im Verhaeltnis zu Werbekosten." },
      { front: "Remarketing", back: "Erneute Ansprache von Nutzern mit vorheriger Interaktion." }
    ],
    exercises: [
      "Baue fuer ein Produkt eine kleine Keyword-Struktur mit passenden Match Types.",
      "Leite fuer eine SEA-Kampagne passende KPIs aus einem konkreten Ziel ab.",
      "Analysiere, warum eine Anzeige trotz Klicks zu wenig Conversions erzeugen koennte."
    ],
    tips: [
      "Denke bei SEA immer in Suchintentionen, nicht nur in Keywords.",
      "Eine gute Kampagnenstruktur spart spaeter viel Optimierungszeit.",
      "Pruefe Anzeigen, Keywords und Landingpage immer als zusammenhaengendes System."
    ]
  }
};

modules.forEach((module) => {
  const override = moduleOverrides[module.id];
  const mergedFlashcards = [...(override?.flashcards || module.flashcards), ...extraCards(module.topic)];

  if (!override) {
    module.flashcards = mergedFlashcards;
    return;
  }

  Object.assign(module, override, {
    flashcards: mergedFlashcards,
    color: module.color,
    softColor: module.softColor,
    id: module.id,
    title: module.title,
    topic: module.topic
  });
});
Object.assign(moduleOverrides, {
  9: {
    summary: "Social Media Advertising behandelt Paid Social von Grundlagen ueber Plattformen, Meta-Setup, Funnel, Zielgruppen, Creatives, Landingpages, Mediaplanung, KPIs, Skalierung und Automatisierung bis zu Multichannel-Strategien.",
    questions: [
      singleQ("Was ist Social Media Advertising?", ["Nur organisches Posten", "Bezahlte Werbung auf sozialen Plattformen", "Nur Community Management", "Nur Influencer Marketing"], 1, "Paid Social bezeichnet bezahlte Anzeigenformate auf Social Plattformen."),
      singleQ("Was ist ein zentraler Unterschied zwischen organisch und paid?", ["Paid ist immer kostenlos", "Paid ist gezielt budgetgesteuert ausspielbar", "Organisch braucht nie Inhalte", "Es gibt keinen Unterschied"], 1, "Paid Ads sind steuerbarer in Reichweite, Zielgruppe und Testlogik."),
      multiQ("Welche Themen nennt das Modul fuer Meta Ads?", ["Business Suite und Ads Manager", "Kampagnenstruktur", "Kampagnenziele", "Bueromoebelplanung"], [0, 1, 2], "Meta bildet im Kurs den praktischen Kern."),
      singleQ("Warum ist Funnel-Denken fuer Social Ads wichtig?", ["Weil jede Person direkt kaufen will", "Weil Zielgruppen je nach Reifestufe anders angesprochen werden muessen", "Weil Funnel nur fuer E-Mail gilt", "Weil dadurch keine Creatives noetig sind"], 1, "Awareness, Consideration und Conversion brauchen oft unterschiedliche Botschaften."),
      singleQ("Was macht ein Creative stark?", ["Nur bunte Farben", "Hook, klarer Nutzen und passender CTA", "Moeglichst viel Text", "Nur ein Firmenlogo"], 1, "Gute Creatives holen Aufmerksamkeit und erklaeren schnell den Mehrwert."),
      singleQ("Warum ist Message Match zwischen Ad und Landingpage wichtig?", ["Weil Zielseite und Anzeige zusammenpassen muessen", "Weil sonst keine Cookies funktionieren", "Weil Ads dann billiger gespeichert werden", "Weil Headlines verboten sind"], 0, "Nutzer sollen das auf der Zielseite wiederfinden, was die Anzeige versprochen hat."),
      openQ("Erklaere den Zusammenhang von Zielgruppe, Funnel und Creative.", "Die Zielgruppe bestimmt, wen man anspricht. Der Funnel beschreibt, in welcher Phase sich diese Personen befinden. Das Creative muss zur Phase und zum Informationsbedarf passen."),
      openQ("Warum reichen gute Anzeigen ohne gute Landingpage oft nicht aus?", "Weil Klicks allein noch kein Zielerfolg sind. Die Landingpage muss das Versprechen der Anzeige aufnehmen, Vertrauen schaffen und die Conversion erleichtern.")
    ],
    flashcards: [
      { front: "Paid Social", back: "Bezahlte Werbung auf Social-Media-Plattformen." },
      { front: "Ads Manager", back: "Zentrales Tool zur Kampagnensteuerung auf Meta." },
      { front: "Funnel", back: "Modell fuer die Reifestufe einer Zielgruppe von Aufmerksamkeit bis Conversion." },
      { front: "Creative", back: "Visuelle und textliche Gestaltung einer Anzeige." },
      { front: "CTA", back: "Call to Action, also die gewuenschte naechste Handlung." },
      { front: "CPA", back: "Cost per Acquisition bzw. Kosten pro Zielhandlung." },
      { front: "Hook Rate", back: "Kennzahl oder Denkmodell fuer die Anfangswirkung eines Creatives." },
      { front: "Message Match", back: "Passung zwischen Anzeigenbotschaft und Landingpage." }
    ],
    exercises: [
      "Entwickle ein Ad-Setup fuer Awareness, Consideration und Conversion.",
      "Bewerte ein Creative nach Hook, Nutzen, CTA und Plattform-Fit.",
      "Analysiere eine Landingpage darauf, ob sie zur Anzeige passt."
    ],
    tips: [
      "Teste nicht nur Zielgruppen, sondern auch Hooks, Formate und Botschaften.",
      "Paid Social funktioniert am besten, wenn Anzeige und Zielseite als Einheit gedacht werden.",
      "Skalierung kommt erst nach sauberer Ziel- und KPI-Logik."
    ]
  },
  11: {
    summary: "Digitale Marktplaetze behandeln E-Commerce auf Plattformen wie Amazon. Wichtige Themen sind Plattformwahl, Seller- und Vendor-Modelle, Bewertungen, Listings, Buy Box, FBA/FBM, Amazon SEO, Werbung und Controlling.",
    questions: [
      singleQ("Was beschreibt ein digitaler Marktplatz im E-Commerce?", ["Nur den eigenen Onlineshop", "Eine Plattform, auf der mehrere Anbieter verkaufen", "Nur einen Zahlungsdienst", "Nur eine Lagersoftware"], 1, "Marktplaetze verbinden Nachfrage, Angebot und Prozesse auf einer Plattform."),
      singleQ("Was ist ein Vorteil von Marktplaetzen?", ["Sie haben nie Konkurrenz", "Sie bieten Reichweite und vorhandene Nachfrage", "Sie ersetzen jedes Geschaeftsmodell", "Sie brauchen keine Produktdaten"], 1, "Marktplaetze bieten Zugang zu bestehendem Traffic."),
      multiQ("Welche Themen nennt das Modul explizit fuer Amazon?", ["Seller oder Vendor", "Produktbewertungen", "Buy Box", "Farblehre fuer Logos"], [0, 1, 2], "Amazon ist das zentrale Praxisbeispiel im Modul."),
      singleQ("Wofuer steht FBA?", ["Fulfillment by Amazon", "Fast Buying Ads", "Full Brand Analysis", "Featured Box Algorithm"], 0, "Bei FBA uebernimmt Amazon Lagerung und Versand."),
      singleQ("Was ist FBM?", ["Facebook Marketplace", "Fulfillment by Merchant", "Featured Brand Management", "Fast Billing Mode"], 1, "Hier versendet der Haendler selbst."),
      singleQ("Was beschreibt die Buy Box?", ["Eine Geschenkverpackung", "Den bevorzugten Kaufbereich auf Amazon", "Eine Versandart", "Ein A/B-Test"], 1, "Die Buy Box ist fuer Sichtbarkeit und Verkauf besonders relevant."),
      openQ("Erklaere den Unterschied zwischen Seller- und Vendor-Modell in einfachen Worten.", "Beim Seller-Modell verkauft man selbst auf der Plattform. Beim Vendor-Modell verkauft man an Amazon oder eine Plattform als Zwischenhaendler, die dann weiterverkauft."),
      openQ("Nenne Gruende, warum nicht jeder Marktplatz fuer jedes Produkt passt.", "Relevante Punkte sind Zielgruppe, Wettbewerb, Margen, Gebuehren, Produktanforderungen, Markenfit, Logistik und Plattformregeln.")
    ],
    flashcards: [
      { front: "Marktplatz", back: "Plattform, auf der mehrere Anbieter ihre Produkte verkaufen." },
      { front: "Seller", back: "Haendler verkauft selbst an Endkunden ueber die Plattform." },
      { front: "Vendor", back: "Haendler verkauft an die Plattform oder den Betreiber als Zwischenhaendler." },
      { front: "Buy Box", back: "Bevorzugter Kaufbereich, ueber den viele Verkaeufe laufen." },
      { front: "FBA", back: "Fulfillment by Amazon, Lagerung und Versand ueber Amazon." },
      { front: "FBM", back: "Fulfillment by Merchant, Versand durch den Haendler." },
      { front: "ASIN", back: "Amazon Standard Identification Number fuer Produkte auf Amazon." },
      { front: "Produktlisting", back: "Produktseite mit Daten, Bildern, Texten und Preis." }
    ],
    exercises: [
      "Vergleiche zwei Marktplaetze fuer ein konkretes Produkt nach Zielgruppe und Kosten.",
      "Entwirf die Kernbestandteile eines professionellen Produktlistings.",
      "Bewerte, ob FBA oder FBM fuer einen Beispielhaendler sinnvoller waere."
    ],
    tips: [
      "Denke Marktplaetze nicht nur als Vertriebskanal, sondern auch als Regelwerk mit eigener Suchlogik.",
      "Saubere Produktdaten und gute Bilder sind auf Plattformen besonders wichtig.",
      "Reichweite ist stark, aber Margen, Gebuehren und Abhaengigkeit muessen mitgedacht werden."
    ]
  },
  12: {
    summary: "WordPress behandelt CMS-Grundlagen, Einrichtung, Rollen, Sitemap, Seiten versus Posts, Themes, Plugins, Elementor, Menues, Templates, Blog, Responsivitaet, Kontaktformulare, SEO, Backups, Sicherheit und DSGVO.",
    questions: [
      singleQ("Was ist ein CMS?", ["Ein Anzeigenkonto", "Ein System zur Verwaltung digitaler Inhalte", "Ein Zahlungsanbieter", "Ein Trackingpixel"], 1, "CMS steht fuer Content-Management-System."),
      singleQ("Warum ist WordPress so verbreitet?", ["Weil es nie Plugins braucht", "Weil es flexibel, weit verbreitet und mit vielen Themes und Plugins ausbaubar ist", "Weil es nur fuer Blogs erlaubt ist", "Weil es keine Updates braucht"], 1, "WordPress punktet mit Verbreitung, Erweiterbarkeit und Oekosystem."),
      multiQ("Welche Themen gehoeren laut Kursplan zu WordPress I?", ["Benutzerrollen", "Sitemap", "Themes", "Lohnbuchhaltung"], [0, 1, 2], "WordPress I deckt Grundlagen, Struktur und Setup ab."),
      singleQ("Was ist der Unterschied zwischen Seiten und Posts?", ["Es gibt keinen", "Seiten sind eher statisch, Posts eher chronologisch fuer Blog-Inhalte", "Posts sind nur fuer Shops", "Seiten sind nur fuer Medien"], 1, "Diese Unterscheidung ist zentral fuer Inhaltsstruktur."),
      singleQ("Wozu dient ein Theme?", ["Nur fuer SEO", "Fuer das visuelle und strukturelle Erscheinungsbild", "Nur fuer Benutzerrollen", "Fuer die Domainverwaltung"], 1, "Themes bestimmen das Grundlayout und die Darstellung."),
      singleQ("Wozu dienen Plugins?", ["Zur Erweiterung von Funktionen", "Nur zur Textkorrektur", "Nur fuer Farben", "Zum Loeschen des Hostings"], 0, "Plugins erweitern WordPress um zusaetzliche Features."),
      openQ("Erklaere in einfachen Worten, warum Themes und Plugins unterschiedliche Aufgaben haben.", "Themes steuern vor allem Erscheinungsbild und Layout. Plugins erweitern Funktionen, zum Beispiel Formulare, SEO oder Sicherheit."),
      openQ("Nenne typische Bereiche, die du nach einer WordPress-Einrichtung pruefen wuerdest.", "Zum Beispiel Rollen, Struktur, Menues, Responsivitaet, Plugins, Backups, Sicherheit, Formulare, SEO-Grundlagen und Datenschutz.")
    ],
    flashcards: [
      { front: "CMS", back: "System zur Erstellung, Verwaltung und Darstellung digitaler Inhalte." },
      { front: "WordPress", back: "Weit verbreitetes CMS mit grossem Theme- und Plugin-Oekosystem." },
      { front: "Theme", back: "Grundlayout und visuelle Gestaltung einer WordPress-Seite." },
      { front: "Plugin", back: "Erweiterung fuer zusaetzliche Funktionen in WordPress." },
      { front: "Seiten", back: "Eher statische Inhalte wie Startseite oder Ueber-uns." },
      { front: "Posts", back: "Chronologische Inhalte, oft fuer Blog oder News." },
      { front: "Sitemap", back: "Strukturuebersicht oder XML-Datei fuer Seiten und Suchmaschinen." },
      { front: "Backup", back: "Sicherung von Dateien und Datenbank fuer Wiederherstellung." }
    ],
    exercises: [
      "Beschreibe eine sinnvolle WordPress-Grundstruktur fuer eine kleine Unternehmensseite.",
      "Lege fest, welche Plugins du fuer Formulare, SEO, Sicherheit und Backups nutzen wuerdest.",
      "Pruefe eine Website auf Responsivitaet, Menuefuehrung und Blog-Struktur."
    ],
    tips: [
      "Installiere nicht unnoetig viele Plugins, sondern nur was wirklich gebraucht wird.",
      "Struktur, Rollen und Backups sind genauso wichtig wie das schoene Frontend.",
      "Teste WordPress-Seiten immer mobil, nicht nur am Desktop."
    ]
  }
});

modules.forEach((module) => {
  const override = moduleOverrides[module.id];
  if (!override) return;
  Object.assign(module, override, { flashcards: [...override.flashcards, ...extraCards(module.topic)] });
});
Object.assign(moduleOverrides, {
  13: {
    summary: "Texten fuers Web fokussiert digitale Leselogik, Struktur, Headlines, Teaser, Produkt- und Kategorietexte sowie den Grundsatz, fuer Menschen und zugleich suchmaschinenfreundlich zu schreiben.",
    questions: [
      singleQ("Was zeichnet Webtexte besonders aus?", ["Sie werden in Ruhe von Anfang bis Ende gelesen", "Sie muessen schnell erfassbar und klar strukturiert sein", "Sie brauchen keine Headlines", "Sie duerfen keine Ziele haben"], 1, "Webtexte werden oft gescannt statt komplett gelesen."),
      singleQ("Warum ist Struktur im Web so wichtig?", ["Weil Nutzer geduldig sind", "Weil Nutzer schnell Orientierung und Relevanz brauchen", "Weil Texte sonst nicht gespeichert werden", "Weil nur Suchmaschinen Struktur sehen"], 1, "Klare Struktur erhoeht Lesbarkeit und Wirkung."),
      multiQ("Welche Ziele koennen Unternehmen mit Webtexten verfolgen?", ["Conversions", "Branding", "Leads", "Heizkostenabrechnung"], [0, 1, 2], "Webtexte koennen mehrere Funktionen zugleich uebernehmen."),
      singleQ("Was ist die Aufgabe einer Headline?", ["Nur Deko", "Aufmerksamkeit und Orientierung erzeugen", "Nur Keywords sammeln", "Den Footer ersetzen"], 1, "Die Headline entscheidet mit ueber den Einstieg in den Text."),
      singleQ("Was ist ein Teaser?", ["Ein Trackingcode", "Ein kurzer einleitender Text mit Relevanz und Neugier", "Nur ein CTA-Button", "Die Bildunterschrift"], 1, "Teaser helfen beim schnellen Einstieg."),
      openQ("Erklaere, warum Internetnutzer oft eher scannen als vollstaendig lesen.", "Viele Nutzer sind ungeduldig, suchen konkrete Informationen und springen schnell weiter. Deshalb muessen Webtexte Orientierung und Kernaussagen frueh liefern."),
      openQ("Nenne drei Elemente, die einen Produkttext im Web wirksamer machen.", "Zum Beispiel klare Vorteile, verstaendliche Sprache, gute Struktur, differenzierende Merkmale, passende Keywords und eine klare Ausrichtung auf Fragen oder Einwaende.")
    ],
    flashcards: [
      { front: "Webtext", back: "Digitaler Text, der schnell erfassbar, klar strukturiert und nutzerorientiert sein muss." },
      { front: "Headline", back: "Ueberschrift, die Aufmerksamkeit, Nutzen und Orientierung vermittelt." },
      { front: "Teaser", back: "Kurzer Einstieg, der Relevanz und Neugier auf den Rest des Textes erzeugt." },
      { front: "Skimmer", back: "Nutzer, die Inhalte nur oberflaechlich ueberfliegen." },
      { front: "Scanner", back: "Nutzer, die gezielt nach bestimmten Informationen suchen." },
      { front: "Helpful Content", back: "Ansatz, Inhalte fuer Menschen nuetzlich und klar zu gestalten." },
      { front: "Produkttext", back: "Text, der Nutzen, Merkmale und Kaufargumente eines Produkts beschreibt." },
      { front: "Kategorietext", back: "Text, der einen Themen- oder Produktbereich erklaert und einordnet." }
    ],
    exercises: [
      "Ueberarbeite einen bestehenden Webtext nach Struktur, Headline und Nutzenargumentation.",
      "Schreibe einen kurzen Produkttext und einen Kategorietext fuer dasselbe Thema.",
      "Analysiere einen Text danach, ob er eher fuer Scanner oder fuer tiefe Leser geeignet ist."
    ],
    tips: [
      "Schreibe zuerst klar, dann clever. Unklare Kreativitaet hilft im Web selten.",
      "Wenn Nutzer den Nutzen nicht in wenigen Sekunden verstehen, verliert der Text an Wirkung.",
      "Denke bei jedem Abschnitt: Welche Frage beantwortet er?"
    ]
  },
  14: {
    summary: "Visuals mit Canva verbindet Fotografie-Grundlagen, Bildformate, Kameraeinstellungen, Gestaltung und Canva-Nutzung mit KI-Funktionen. Ziel ist, eigenen visuellen Content sauber zu erstellen und aufzubereiten.",
    questions: [
      singleQ("Was ist ein zentrales Ziel des Canva-Moduls?", ["Nur Logos nachmalen", "Eigenen visuellen Content erstellen, bearbeiten und aufbereiten", "Nur Kameras verkaufen", "Nur Photoshop ersetzen"], 1, "Das Modul verknuepft Gestaltung, Toolwissen und Produktion."),
      singleQ("Warum sind Bilder im Marketing so wirksam?", ["Weil sie nur Dateigroesse erhoehen", "Weil sie emotional ansprechen und Inhalte schnell vermitteln", "Weil sie Texte immer ersetzen", "Weil sie keine Gestaltung brauchen"], 1, "Das Modul betont Blickfang, Emotion und schnelle Informationsvermittlung."),
      multiQ("Welche Dateiformate werden im Modul genannt?", ["JPEG", "HEIF", "RAW", "PowerPoint-Notiz"], [0, 1, 2], "Dateiformate unterscheiden sich in Kompression, Qualitaet und Kompatibilitaet."),
      singleQ("Was beschreibt RAW am besten?", ["Ein stark komprimiertes Webformat", "Ein unkomprimiertes digitales Negativ", "Nur eine Canva-Vorlage", "Ein Instagram-Format"], 1, "RAW bietet viel Spielraum fuer Bearbeitung."),
      singleQ("Wozu dient Canva in diesem Kurs?", ["Nur fuer Tabellen", "Zum Erstellen, Bearbeiten und Aufbereiten von Content", "Nur fuer Tracking", "Nur fuer Hosting"], 1, "Canva ist das zentrale Gestaltungstool des Moduls."),
      openQ("Erklaere den Unterschied zwischen Gestaltung und Technik in der Fotografie kurz.", "Technik umfasst etwa Kameraeinstellungen, Belichtung und Dateiformate. Gestaltung betrifft Bildaufbau, Wirkung, Perspektive und visuelle Aussage."),
      openQ("Warum ist visueller Content fuer Online Marketing oft so wichtig?", "Weil Bilder Aufmerksamkeit erzeugen, Emotionen transportieren, Inhalte schnell vermitteln und in vielen Kanaelen entscheidend fuer die erste Wirkung sind.")
    ],
    flashcards: [
      { front: "Canva", back: "Tool zur einfachen Gestaltung und Aufbereitung visueller Inhalte." },
      { front: "RAW", back: "Unkomprimiertes Bildformat mit viel Bearbeitungsspielraum." },
      { front: "JPEG", back: "Weit verbreitetes, komprimiertes Bildformat fuer viele Anwendungen." },
      { front: "TIFF", back: "Universelles, eher hochwertiges und unkomprimiertes Format." },
      { front: "Seitenverhaeltnis", back: "Verhaeltnis von Breite zu Hoehe, etwa 1:1 oder 16:9." },
      { front: "Komposition", back: "Gestalterischer Aufbau eines Bildes." },
      { front: "Blickfang", back: "Visueller Reiz, der Aufmerksamkeit sofort auf ein Element lenkt." },
      { front: "KI-Funktion", back: "Unterstuetzung im Designprozess, zum Beispiel Ideen, Layout oder Bildgenerierung." }
    ],
    exercises: [
      "Erstelle ein visuelles Motiv in zwei Formaten fuer unterschiedliche Plattformen.",
      "Vergleiche ein Bild nach Wirkung, Dateiformat und Eignung fuer Webnutzung.",
      "Beschreibe, wie du Canva und KI in einem kleinen Content-Workflow kombinieren wuerdest."
    ],
    tips: [
      "Gestaltung beginnt nicht im Tool, sondern mit Ziel, Botschaft und Format.",
      "Achte bei Bildern immer zugleich auf Wirkung, Lesbarkeit und Dateigroesse.",
      "Nicht jedes Format ist fuer jede Plattform oder Bearbeitungsphase gleich sinnvoll."
    ]
  },
  15: {
    summary: "Video mit DaVinci & KI behandelt den Weg von Idee ueber Zielgruppe, Botschaft, Aufnahme, Formate und Smartphone-Dreh bis zum Schnitt in DaVinci Resolve. Der Fokus liegt auf webtauglichem Videocontent.",
    questions: [
      singleQ("Was ist das Kernziel des Moduls?", ["Nur Filme anzusehen", "Videoideen zu entwickeln, zu drehen und zu schneiden", "Nur Musikrechte zu lernen", "Nur Kameramodelle auswendig zu koennen"], 1, "Das Modul ist stark praxisorientiert von Idee bis Finale."),
      singleQ("Warum ist Video im Online Marketing so relevant?", ["Weil Texte verboten sind", "Weil Video hohe Reichweite, Aufmerksamkeit und Teilbarkeit erzielen kann", "Weil Videos immer billig sind", "Weil nur Marken mit TV-Werbung Video nutzen"], 1, "Das Modul nennt Reichweite, Wunsch nach Videos und hohe Shareability."),
      multiQ("Welche Schritte nennt der Kursablauf?", ["Idee", "Dreh", "Schnitt", "Steuererklaerung"], [0, 1, 2], "Der Kurs folgt klar der Produktionslogik."),
      singleQ("Warum sind Zielgruppe, Wirkung und Botschaft vor dem Dreh wichtig?", ["Weil sonst keine Kamera startet", "Weil gute Videos auf Wirkung und Adressat ausgerichtet sein muessen", "Weil DaVinci sonst nicht installiert werden kann", "Weil Formate unwichtig sind"], 1, "Video sollte nicht nur schoen, sondern zielgerichtet sein."),
      singleQ("Was meint FPS?", ["Format per Screen", "Frames per Second", "Fast Production System", "File Processing Size"], 1, "FPS beschreibt die Bildrate."),
      openQ("Erklaere den Unterschied zwischen Idee, Botschaft und Format eines Videos.", "Die Idee ist das Grundkonzept, die Botschaft die eigentliche Aussage und das Format die konkrete Ausspiel- oder Darstellungsform, etwa Short Video oder erklaerendes Format."),
      openQ("Warum ist Smartphone-Video heute fuer viele Marketinganwendungen ausreichend oder sinnvoll?", "Weil Smartphones schnell verfuegbar sind, gute Qualitaet liefern und sich besonders fuer Social, kurze Produktionen und flexible Drehs eignen.")
    ],
    flashcards: [
      { front: "DaVinci Resolve", back: "Tool fuer Schnitt und Nachbearbeitung von Videos." },
      { front: "FPS", back: "Frames per Second, also Bilder pro Sekunde." },
      { front: "Aufloesung", back: "Anzahl der Bildpunkte eines Videos, wichtig fuer Qualitaet und Ausgabe." },
      { front: "Shot", back: "Konkrete Kameraeinstellung oder Aufnahme." },
      { front: "Storyboard", back: "Visuelle oder inhaltliche Planung eines Videolaufs." },
      { front: "Hook", back: "Starker Einstieg, der Aufmerksamkeit in den ersten Sekunden erzeugt." },
      { front: "B-Roll", back: "Ergaenzendes Bildmaterial zur Hauptszene." },
      { front: "Export", back: "Finale Ausgabe des geschnittenen Videos im passenden Format." }
    ],
    exercises: [
      "Plane ein kurzes Video mit Zielgruppe, Botschaft, Hook und Format.",
      "Lege eine sinnvolle Ordnerstruktur fuer einen kleinen Videodreh an.",
      "Bewerte ein kurzes Social Video nach Einstieg, Botschaft und Plattform-Fit."
    ],
    tips: [
      "Video funktioniert besser mit klarer Botschaft als mit moeglichst viel Technik.",
      "Die ersten Sekunden sind auf vielen Plattformen entscheidend.",
      "Ordnung im Material spart spaeter beim Schnitt oft mehr Zeit als jeder Effekt."
    ]
  }
});

modules.forEach((module) => {
  const override = moduleOverrides[module.id];
  if (!override) return;
  Object.assign(module, override, { flashcards: [...override.flashcards, ...extraCards(module.topic)] });
});

modules.forEach((module) => {
  const override = moduleOverrides[module.id];
  if (!override) {
    module.flashcards = [...module.flashcards, ...extraCards(module.topic)];
    return;
  }

  Object.assign(module, override, {
    flashcards: [...override.flashcards, ...extraCards(module.topic)],
    color: module.color,
    softColor: module.softColor,
    id: module.id,
    title: module.title,
    topic: module.topic
  });
});
Object.assign(moduleOverrides, {
  16: {
    summary: "Analyse & Optimierung behandelt Webtracking, Datenschutz, Kompetenzen, KPIs, Measurement Framework, Traffic-Messung, Google Analytics 4, Tag Manager, Attribution, Clarity und Datenvisualisierung.",
    questions: [
      singleQ("Warum ist Analyse im Online Marketing wichtig?", ["Weil Marketing sonst schoener aussieht", "Weil Wirkung, Verhalten und Optimierung messbar werden", "Weil Inhalte dadurch automatisch entstehen", "Weil Datenschutz dann entfaellt"], 1, "Analyse schafft eine Grundlage fuer Entscheidungen statt Bauchgefuehl."),
      singleQ("Was ist Webtracking?", ["Nur eine Tabellenfarbe", "Das Erfassen und Auswerten digitaler Nutzerinteraktionen", "Nur das Schreiben von Headlines", "Ein anderes Wort fuer Hosting"], 1, "Webtracking hilft zu verstehen, wie Nutzer sich verhalten."),
      multiQ("Welche Tracking-Orte nennt das Modul?", ["Webseiten", "Apps", "Online-Shops", "Heftnotizen auf Papier"], [0, 1, 2], "Tracking begegnet uns an vielen digitalen Kontaktpunkten."),
      singleQ("Warum spielt Datenschutz in diesem Modul eine grosse Rolle?", ["Weil Tracking rechtlich und technisch sauber umgesetzt werden muss", "Weil KPIs verboten sind", "Weil nur Apps Daten verarbeiten", "Weil GA4 ohne Website funktioniert"], 0, "Analyse braucht Datenschutzverstaendnis und Einwilligungslogik."),
      singleQ("Was ist ein Measurement Framework?", ["Ein reines Logo-System", "Ein Geruest, das Ziele, Fragen, KPIs und Messpunkte verbindet", "Nur eine Tabelle fuer Preise", "Ein anderer Name fuer Pixel"], 1, "Das Framework schafft Struktur zwischen Geschaeftsziel und Messung."),
      singleQ("Wofuer ist ein Tag Manager hilfreich?", ["Nur fuer Designanpassungen", "Fuer die Verwaltung von Tracking-Tags und Events", "Nur fuer Blogposts", "Nur fuer SEO-Texte"], 1, "Tag Manager erleichtert technische Tracking-Setups."),
      openQ("Erklaere den Unterschied zwischen einem Geschaeftsziel und einer KPI.", "Ein Geschaeftsziel beschreibt den gewollten Erfolg, etwa mehr Leads oder Umsatz. Eine KPI ist eine Messgroesse, mit der man beurteilen kann, ob man diesem Ziel naeher kommt."),
      openQ("Warum ist ein Measurement Framework vor dem Tool-Setup sinnvoll?", "Weil zuerst klar sein sollte, was ueberhaupt gemessen werden soll, warum das relevant ist und welche Fragen damit beantwortet werden muessen.")
    ],
    flashcards: [
      { front: "Webtracking", back: "Erfassung und Analyse von Nutzerverhalten an digitalen Kontaktpunkten." },
      { front: "KPI", back: "Key Performance Indicator als Messgroesse fuer Zielerreichung." },
      { front: "Measurement Framework", back: "Struktur aus Ziel, Frage, KPI und Messpunkt." },
      { front: "GA4", back: "Google Analytics 4 als Analyse-Tool fuer Ereignisse und Nutzerverhalten." },
      { front: "Tag Manager", back: "Tool zur Verwaltung und Ausspielung von Tracking-Tags." },
      { front: "Attribution", back: "Zuordnung von Erfolgen zu Kanaelen oder Kontaktpunkten." },
      { front: "Consent", back: "Einwilligung oder Erlaubnis fuer bestimmte Datenverarbeitungen." },
      { front: "Clarity", back: "Tool oder Ansatz zur qualitativen Verhaltensanalyse, etwa ueber Heatmaps oder Sessions." }
    ],
    exercises: [
      "Leite fuer ein Marketingziel ein kleines Measurement Framework ab.",
      "Ordne zu, welche Daten du fuer Traffic, Engagement und Conversion benoetigen wuerdest.",
      "Pruefe eine Website gedanklich darauf, welche Trackingpunkte datenschutzsensibel sind."
    ],
    tips: [
      "Tracking ohne klares Ziel erzeugt viele Daten, aber wenig Erkenntnis.",
      "Datenschutz und Analyse muessen zusammen gedacht werden.",
      "Nicht jede Zahl ist automatisch eine gute KPI."
    ]
  },
  17: {
    summary: "Projektmanagement fuer Marketer vermittelt Einfuehrung, Anforderungserfassung, Project Canvas, klassische Methoden, Rollen eines Projektmanagers, Planung, Kommunikation, Ressourcen, Risiken und Kontrolle.",
    questions: [
      singleQ("Warum ist Projektmanagement fuer Marketer wichtig?", ["Weil Kampagnen nie geplant werden muessen", "Weil komplexe Vorhaben Struktur, Prioritaeten und Kontrolle brauchen", "Weil nur Entwickler Projekte haben", "Weil dadurch Inhalte ueberfluessig werden"], 1, "Marketingprojekte profitieren stark von klaren Prozessen."),
      singleQ("Was gehoert laut Definition zum Projektmanagement?", ["Nur die Ideensammlung", "Planung, Organisation und Kontrolle zur Zielerreichung in Zeit und Budget", "Nur die Freigabe von Farben", "Nur der Projektabschluss"], 1, "Projektmanagement begleitet das Vorhaben von Start bis Abschluss."),
      multiQ("Welche Vorteile nennt das Modul?", ["Effizienz", "Zielorientierung", "Risikominimierung", "Zufaellige Improvisation ohne Plan"], [0, 1, 2], "Projektmanagement soll Wirkung, Ordnung und Verlaesslichkeit schaffen."),
      singleQ("Was ist ein Project Canvas?", ["Nur ein Designboard", "Ein kompaktes Uebersichtsmodell fuer Projektziele, Rahmen und Beteiligte", "Eine Backup-Datei", "Ein Instagram-Format"], 1, "Canvas-Modelle helfen, Projekte schnell sichtbar zu machen."),
      singleQ("Warum ist Stakeholder-Management wichtig?", ["Weil Stakeholder keine Rolle spielen", "Weil Interessen, Erwartungen und Einfluss auf das Projekt beruecksichtigt werden muessen", "Weil es nur fuer Bauprojekte gilt", "Weil es den Zeitplan ersetzt"], 1, "Kommunikation und Einbindung beeinflussen den Projekterfolg stark."),
      singleQ("Was ist Risikomanagement?", ["Risiken ignorieren", "Moegliche Probleme frueh erkennen und Gegenmassnahmen planen", "Nur Versicherungen abschliessen", "Die Zielgruppe wechseln"], 1, "Risikomanagement soll Ueberraschungen beherrschbarer machen."),
      openQ("Erklaere kurz, warum Anforderungen zu Beginn eines Projekts sauber erfasst werden sollten.", "Weil unklare Anforderungen spaeter zu Konflikten, Mehrarbeit, falschen Erwartungen und schlechter Priorisierung fuehren koennen."),
      openQ("Nenne typische Ressourcen, die im Marketing-Projektmanagement gesteuert werden muessen.", "Zum Beispiel Zeit, Budget, Personal, Inhalte, Freigaben, Tools, externe Partner und technische Kapazitaeten.")
    ],
    flashcards: [
      { front: "Projektmanagement", back: "Planung, Steuerung und Kontrolle eines Projekts zur Zielerreichung." },
      { front: "Scope", back: "Projektumfang, also was Teil des Projekts ist und was nicht." },
      { front: "Stakeholder", back: "Personen oder Gruppen mit Interesse oder Einfluss auf das Projekt." },
      { front: "Project Canvas", back: "Kompaktes Modell zur strukturierten Projektuebersicht." },
      { front: "Meilenstein", back: "Wichtiger Etappenpunkt im Projektverlauf." },
      { front: "Risikomanagement", back: "Fruehes Erkennen und Planen moeglicher Projektprobleme." },
      { front: "Ressourcenmanagement", back: "Sinnvolle Planung und Nutzung von Zeit, Budget und Personal." },
      { front: "Aenderungsmanagement", back: "Umgang mit Aenderungen im Projektverlauf." }
    ],
    exercises: [
      "Erstelle ein einfaches Project Canvas fuer eine Marketingkampagne.",
      "Liste die wichtigsten Stakeholder eines Projekts auf und beschreibe ihren Einfluss.",
      "Identifiziere drei typische Risiken in einem Marketingprojekt und moegliche Gegenmassnahmen."
    ],
    tips: [
      "Ein gutes Projekt startet mit Klarheit, nicht mit Aktionismus.",
      "Dokumentiere Annahmen und Aenderungen frueh, bevor sie spaeter Konflikte erzeugen.",
      "Kommunikation ist im Projektmanagement oft genauso wichtig wie Planung."
    ]
  },
  18: {
    summary: "KI im Online Marketing verbindet Prompt Engineering mit Produktentwicklung, Marktanalyse, Personas, Budget- und Kanalstrategie sowie Kampagnen- und Contententwicklung. Das Modul zeigt KI als Arbeits- und Denkunterstuetzung.",
    questions: [
      singleQ("Welche Rolle spielt KI in diesem Modul am besten?", ["Sie ersetzt jede Strategie", "Sie unterstuetzt Analyse, Ideen, Struktur und Umsetzung", "Sie macht Marketingziele ueberfluessig", "Sie funktioniert nur fuer Programmierer"], 1, "Das Modul zeigt KI als Assistenz und Hebel in verschiedenen Aufgaben."),
      singleQ("Was ist Prompt Engineering?", ["Nur das Loeschen von Chats", "Die gezielte Formulierung von Eingaben fuer bessere KI-Ergebnisse", "Nur die Bildbearbeitung", "Ein CRM-Workflow"], 1, "Die Aufgabenbeschreibung beeinflusst die Qualitaet der Ausgabe stark."),
      multiQ("Welche Prompt-Arten nennt die Folie?", ["Einfache Anweisungen", "Komplexe Anweisungen", "Role Prompting", "Steuerbescheid-Prompting"], [0, 1, 2], "Das Modul wiederholt verschiedene Prompt-Muster."),
      singleQ("Warum ist Role Prompting sinnvoll?", ["Weil die KI dadurch eine bestimmte Rolle oder Perspektive einnimmt", "Weil die KI sonst keine Sprache versteht", "Weil damit nur Tabellen moeglich sind", "Weil es den Kanal ersetzt"], 0, "Eine klare Rolle kann Ton, Fokus und Tiefe verbessern."),
      singleQ("Was bedeutet Few Shot Prompting?", ["Gar keine Beispiele geben", "Der KI Beispiele fuer das gewuenschte Ergebnis zeigen", "Nur ein Wort eingeben", "Nur Bilder hochladen"], 1, "Beispiele helfen, Struktur und Erwartung klarer zu machen."),
      singleQ("Warum ersetzt KI keine Zielgruppenarbeit?", ["Weil Personas verboten sind", "Weil Eingaben, Bewertung und Kontext weiterhin menschliche Steuerung brauchen", "Weil KI nur Bilder erzeugt", "Weil Budgetplanung nicht messbar ist"], 1, "KI liefert Unterstuetzung, aber nicht automatisch strategische Wahrheit."),
      openQ("Erklaere in einem Satz den Unterschied zwischen einem schwachen und einem guten Prompt.", "Ein schwacher Prompt ist unklar und offen, ein guter Prompt beschreibt Ziel, Rolle, Kontext, Format und Erwartung so, dass die KI gezielter antworten kann."),
      openQ("Nenne ein Beispiel, wie du KI fuer Marktanalyse oder Personas sinnvoll einsetzen wuerdest.", "Zum Beispiel zur Strukturierung von Zielgruppenhypothesen, Wettbewerbsclustern, Interviewfragen, Persona-Entwuerfen oder Kanalideen, die anschliessend menschlich geprueft werden.")
    ],
    flashcards: [
      { front: "Prompt Engineering", back: "Gezielte Formulierung von Eingaben fuer bessere KI-Ergebnisse." },
      { front: "Role Prompting", back: "Die KI antwortet aus einer vorgegebenen Rolle oder Perspektive." },
      { front: "Few Shot Prompting", back: "Der KI werden Beispiele fuer das gewuenschte Ergebnis gezeigt." },
      { front: "ChatGPT", back: "Bekannter KI-Chatbot fuer Texte, Struktur, Ideen und Analysen." },
      { front: "Gemini", back: "KI-Tool von Google fuer Recherche und Generierung." },
      { front: "Perplexity", back: "KI-Tool mit starkem Fokus auf Recherche und Quellenorientierung." },
      { front: "Claude", back: "KI-Assistent fuer Textarbeit, Strukturierung und Analyse." },
      { front: "Kontext", back: "Hintergrundinformationen, die eine KI fuer bessere Antworten braucht." }
    ],
    exercises: [
      "Formuliere einen einfachen Prompt und verbessere ihn mit Rolle, Kontext und Ausgabeformat.",
      "Nutze KI gedanklich fuer eine Persona- oder Marktanalyse und notiere, was du danach noch manuell pruefen musst.",
      "Entwirf einen Prompt fuer eine Kampagnenidee inklusive Ziel, Zielgruppe und Kanal."
    ],
    tips: [
      "Je klarer Ziel, Rolle und Format beschrieben sind, desto besser werden KI-Ausgaben.",
      "Nutze KI fuer Tempo und Struktur, aber pruefe Ergebnisse immer fachlich.",
      "Prompting ist keine Magie, sondern saubere Aufgabenbeschreibung."
    ]
  }
});

modules.forEach((module) => {
  const override = moduleOverrides[module.id];
  if (!override) return;
  Object.assign(module, override, { flashcards: [...override.flashcards, ...extraCards(module.topic)] });
});

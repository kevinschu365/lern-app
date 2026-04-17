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
    back: `Welches Problem loest dieses Thema in der Praxis und fuer wen ist es besonders relevant?`
  },
  {
    front: `${topic} - Erfolg`,
    back: `Woran erkennst du in der Praxis, ob die Umsetzung dieses Themas erfolgreich ist?`
  }
];

const moduleOverrides = {
  7: {
    summary:
      "CRM & Marketing Automation verbindet Customer Journey, Verteileraufbau, Segmentierung, Newsletter, KPIs, Loyalty und Automationen. Das Modul zeigt, wie Beziehungen systematisch aufgebaut und ueber Prozesse skaliert werden.",
    questions: [
      singleQ("Wofuer steht CRM?", ["Customer Relationship Management", "Campaign Reach Model", "Content Revenue Machine", "Channel Report Management"], 0, "CRM beschreibt das Management von Kundenbeziehungen und relevanten Daten."),
      singleQ("Welches Ziel verfolgt CRM im Kern?", ["Nur mehr Anzeigen auszuspielen", "Kundenbeziehungen gezielt aufzubauen und zu pflegen", "Nur Rechnungen zu speichern", "Nur Social Media Inhalte zu planen"], 1, "CRM verknuepft Kundendaten, Kommunikation und Prozesse entlang der Beziehung."),
      singleQ("Warum spielt die Customer Journey im CRM eine wichtige Rolle?", ["Weil Kommunikation zur Phase des Kunden passen muss", "Weil sie nur fuer Design wichtig ist", "Weil sie KPIs ersetzt", "Weil sie nur fuer B2B relevant ist"], 0, "Eine gute CRM-Logik richtet Inhalte und Ausloeser nach dem Verhalten des Kunden aus."),
      multiQ("Welche Bestandteile gehoeren zu einem guten CRM-Verstaendnis?", ["Kundendaten", "Segmentierung", "Kommunikationslogik", "Zufaellige Einzelaktionen"], [0, 1, 2], "CRM ist ein System aus Daten, Logik, Inhalt und Beziehungspflege."),
      singleQ("Was ist Segmentierung?", ["Kontakte nach Merkmalen oder Verhalten gruppieren", "Allen dieselbe Nachricht schicken", "Nur Betreffzeilen aendern", "Eine KPI aus Google Ads"], 0, "Segmentierung erhoeht Relevanz und Personalisierung."),
      singleQ("Was beschreibt Marketing Automation am besten?", ["Automatisierte, regelbasierte Kommunikation und Prozesse", "Nur KI-Bildgenerierung", "Jede Mail manuell senden", "Nur den Export von Daten"], 0, "Automation verbindet Trigger, Inhalte und Zeitpunkte systematisch."),
      singleQ("Wozu dient eine Willkommensstrecke?", ["Neue Kontakte sinnvoll einfuehren und aktivieren", "Nur das Impressum zu versenden", "Abmeldungen zu beschleunigen", "Kundendaten zu loeschen"], 0, "Willkommensstrecken helfen beim Onboarding und Erwartungsmanagement."),
      multiQ("Welche Kennzahlen koennen im E-Mail-Marketing relevant sein?", ["Open Rate", "Click Rate", "Conversion Rate", "Firmenlogo"], [0, 1, 2], "Mehrere KPIs helfen dabei, Qualitaet und Wirkung zu beurteilen."),
      singleQ("Warum sind Loyalty Programme fuer CRM interessant?", ["Weil sie Bindung und Wiederkaeufe foerdern koennen", "Weil sie nur fuer Grosskonzerne erlaubt sind", "Weil sie keine Daten brauchen", "Weil sie nur Logistik betreffen"], 0, "CRM endet nicht beim Erstkauf, sondern zielt auch auf Bindung."),
      singleQ("Was ist ein A/B-Test im CRM-Kontext?", ["Der Vergleich zweier Varianten zur Leistungsverbesserung", "Eine manuelle Liste aller Kunden", "Die Loeschung inaktiver Kontakte", "Nur die Umbenennung von Segmenten"], 0, "A/B-Tests helfen, Betreff, Inhalt oder Trigger zu optimieren."),
      multiQ("Welche Kriterien sind bei der Auswahl eines CRM-Tools sinnvoll?", ["Integrationen", "Automationsmoeglichkeiten", "Nutzbarkeit im Team", "Beliebige Farbe der Benutzeroberflaeche"], [0, 1, 2], "Ein gutes Tool muss zum Prozess, zum Team und zur Systemlandschaft passen."),
      openQ("Erklaere den Zusammenhang von CRM, E-Mail-Marketing und Marketing Automation.", "CRM bildet die Daten- und Beziehungsgrundlage. E-Mail-Marketing ist ein wichtiger Kanal innerhalb des CRM. Marketing Automation sorgt dafuer, dass Kommunikation passend und regelbasiert automatisch ausgespielt wird."),
      openQ("Warum ist Segmentierung oft wirksamer als ein Newsletter an alle?", "Weil unterschiedliche Kontakte unterschiedliche Beduerfnisse, Interessen, Reifestufen und Kaufwahrscheinlichkeiten haben. Segmentierung macht Kommunikation relevanter."),
      openQ("Beschreibe ein sinnvolles Reaktivierungs- oder Winback-Szenario im CRM.", "Zum Beispiel koennen inaktive Kunden mit einem abgestuften Ablauf aus Erinnerung, Mehrwert, passendem Angebot und klarer Handlungsaufforderung erneut aktiviert werden."),
      openQ("Welche Fehler machen Unternehmen haeufig, wenn sie mit Marketing Automation starten?", "Typische Fehler sind fehlende Segmentierung, zu viele Nachrichten, unklare Trigger, schlechte Datenqualitaet und fehlende Auswertung der KPIs.")
    ],
    flashcards: [
      { front: "CRM", back: "Customer Relationship Management fuer Aufbau, Pflege und Entwicklung von Kundenbeziehungen." },
      { front: "Customer Journey", back: "Abfolge von Kontaktpunkten und Phasen, durch die ein Kunde bis zur Bindung geht." },
      { front: "Segmentierung", back: "Aufteilung von Kontakten nach Merkmalen, Verhalten oder Bedarf." },
      { front: "Willkommensstrecke", back: "Automatisierte Serie von Nachrichten nach Anmeldung oder Erstkontakt." },
      { front: "Marketing Automation", back: "Regelbasierte, automatisierte Kommunikation entlang definierter Trigger." },
      { front: "Retention", back: "Massnahmen zur Bindung und Wiederaktivierung bestehender Kunden." },
      { front: "A/B-Test", back: "Vergleich zweier Varianten, um bessere Performance zu identifizieren." },
      { front: "Loyalty Programm", back: "Systematische Foerderung von Bindung, Wiederkauf und Markennaehe." },
      { front: "Open Rate", back: "Anteil geoeffneter E-Mails an allen zugestellten E-Mails." },
      { front: "Click Rate", back: "Anteil der Empfaenger, die in einer E-Mail auf einen Link klicken." },
      { front: "Conversion Rate", back: "Anteil der Nutzer, die nach dem Klick eine gewuenschte Handlung ausfuehren." },
      { front: "Trigger", back: "Ausloeser, der eine automatisierte Aktion oder Nachricht startet." },
      { front: "Winback", back: "Rueckgewinnungsstrecke fuer inaktive oder abgesprungene Kontakte." }
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
      singleQ("Wofuer steht SEA?", ["Search Engine Advertising", "Search Engine Analysis", "Search Experience Automation", "System Engine Ads"], 0, "SEA bezeichnet bezahlte Suchmaschinenwerbung."),
      singleQ("Was beschreibt das Auktionsverfahren in SEA?", ["Die Ausspielung von Anzeigen auf Basis von Gebot und Relevanz", "Die manuelle Reihenfolge im Browser", "Nur die Rechnungsstellung", "Das Hosting der Zielseite"], 0, "Anzeigenpositionen entstehen nicht nur ueber Gebot, sondern auch ueber Qualitaet."),
      singleQ("Wozu dient Keyword-Recherche?", ["Passende Suchmotive und Begriffe fuer Kampagnen finden", "Die Datenschutztexte ersetzen", "Nur Budgets kuerzen", "Nur die Landingpage umbennen"], 0, "Keyword-Recherche verbindet Suchintention mit Kampagnenlogik."),
      multiQ("Welche Themen gehoeren laut Modul zur Keyword-Arbeit?", ["Suchanfragen", "Keyword-Recherche", "Keyword-Optionen", "Teamsitzplatzplanung"], [0, 1, 2], "Keyword-Arbeit ist die Basis passender Kampagnen."),
      singleQ("Wozu dienen Match Types?", ["Sie steuern, wie eng Suchanfragen zur Buchung passen muessen", "Sie ersetzen Zielseiten", "Sie sind nur fuer SEO wichtig", "Sie definieren das Budget"], 0, "Match Types beeinflussen Reichweite und Kontrolle."),
      singleQ("Was ist der Unterschied zwischen Suchanfrage und Keyword?", ["Die Suchanfrage kommt vom Nutzer, das Keyword wird vom Werbetreibenden gebucht", "Es gibt keinen Unterschied", "Ein Keyword ist immer breiter als eine Suchanfrage", "Eine Suchanfrage ist nur intern sichtbar"], 0, "Die Suchanfrage ist das reale Nutzerverhalten, das Keyword die Steuerung des Kontos."),
      singleQ("Was ist eine Conversion im SEA-Kontext?", ["Eine gewuenschte Nutzerhandlung", "Nur ein Seitenaufruf", "Die Farbe der Anzeige", "Eine Suchanfrage ohne Klick"], 0, "Conversions sind zentrale Zielhandlungen wie Kauf, Lead oder Anmeldung."),
      multiQ("Welche Kennzahlen sind fuer SEA oft wichtig?", ["CTR", "CPC", "Conversions", "Warenlagerbestand"], [0, 1, 2], "Die KPI-Auswahl haengt vom Kampagnenziel ab."),
      singleQ("Warum ist die Kampagnenstruktur wichtig?", ["Weil sie Steuerung, Relevanz und Auswertung verbessert", "Weil Anzeigen sonst verboten sind", "Weil nur Grossunternehmen Strukturen brauchen", "Weil dadurch keine Keywords noetig sind"], 0, "Eine saubere Struktur erleichtert Budget- und Textsteuerung."),
      singleQ("Wozu dienen Gebotsstrategien?", ["Zur Steuerung, wie aggressiv oder zielorientiert geboten wird", "Zum Aendern der Meta Description", "Nur fuer organischen Traffic", "Zum Loeschen schlechter Keywords"], 0, "Gebotsstrategien verbinden Zielsetzung und Auktionsergebnis."),
      singleQ("Was ist Remarketing in SEA?", ["Nutzer erneut ansprechen, die bereits Kontakt hatten", "Nur die Suchmaschine wechseln", "Keywords aus der Kampagne loeschen", "Die Website neu gestalten"], 0, "Remarketing nutzt vorherige Interaktionen fuer erneute Ansprache."),
      multiQ("Welche weiteren SEA-nahen Formate nennt das Modul?", ["Display", "Google Shopping", "YouTube Ads", "Radiowerbung"], [0, 1, 2], "SEA geht in der Praxis ueber klassische Suchanzeigen hinaus."),
      openQ("Warum reicht ein hohes Gebot allein nicht fuer gute SEA-Ergebnisse?", "Weil Relevanz, Anzeigenqualitaet, Zielseite, Suchintention und Struktur ebenfalls wichtig sind. Hohe Gebote ohne Qualitaet sind ineffizient."),
      openQ("Wie wuerdest du negative Keywords im Konto erklaeren?", "Negative Keywords helfen dabei, unpassende Suchanfragen auszuschliessen und damit Budgetverlust durch irrelevante Klicks zu vermeiden."),
      openQ("Nenne typische Gruende, warum eine SEA-Kampagne viele Klicks, aber wenige Conversions erzeugt.", "Moegliche Gruende sind unpassende Suchintention, schwache Landingpage, unklare Botschaft, schlechtes Angebot oder eine zu breite Keyword-Buchung.")
    ],
    flashcards: [
      { front: "SEA", back: "Search Engine Advertising, also bezahlte Suchmaschinenwerbung." },
      { front: "Auktionsverfahren", back: "System, das Anzeigenplatzierungen anhand von Gebot und Relevanz bestimmt." },
      { front: "Keyword", back: "Vom Werbetreibenden gebuchter Suchbegriff oder Begriffsbundle." },
      { front: "Suchanfrage", back: "Tatsaechliche Formulierung, die ein Nutzer in die Suchmaschine eingibt." },
      { front: "Match Type", back: "Keyword-Option, die die Passung zwischen Suchanfrage und Buchung steuert." },
      { front: "CTR", back: "Click Through Rate, also das Verhaeltnis von Klicks zu Impressionen." },
      { front: "CPC", back: "Cost per Click, also Kosten pro Klick." },
      { front: "Conversion", back: "Erwuenschte Handlung nach Klick, zum Beispiel Kauf oder Lead." },
      { front: "ROAS", back: "Return on Ad Spend als Umsatz im Verhaeltnis zu Werbekosten." },
      { front: "Negative Keywords", back: "Begriffe, fuer die deine Anzeige bewusst nicht ausgespielt werden soll." },
      { front: "Gebotsstrategie", back: "Regelwerk, nach dem Gebote manuell oder automatisiert gesteuert werden." },
      { front: "Remarketing", back: "Erneute Ansprache von Nutzern mit vorheriger Interaktion." },
      { front: "Quality Faktor", back: "Relevanznahe Bewertung aus Anzeigen-, Keyword- und Zielseitenqualitaet." }
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
  },
  9: {
    summary:
      "Social Media Advertising behandelt Paid Social von Grundlagen ueber Plattformen, Meta-Setup, Funnel, Zielgruppen, Creatives, Landingpages, Mediaplanung, KPIs, Skalierung und Automatisierung bis zu Multichannel-Strategien.",
    questions: [
      singleQ("Was ist Social Media Advertising?", ["Bezahlte Werbung auf sozialen Plattformen", "Nur organisches Posten", "Nur Community Management", "Nur Influencer Marketing"], 0, "Paid Social bezeichnet bezahlte Anzeigenformate auf Social Plattformen."),
      singleQ("Was ist ein zentraler Unterschied zwischen organisch und paid?", ["Paid ist gezielt budgetgesteuert ausspielbar", "Paid ist immer kostenlos", "Organisch braucht nie Inhalte", "Es gibt keinen Unterschied"], 0, "Paid Ads sind steuerbarer in Reichweite, Zielgruppe und Testlogik."),
      singleQ("Wozu dient der Meta Ads Manager?", ["Zur Kampagnensteuerung, Zielgruppenauswahl und Auswertung", "Nur zum Upload von Blogartikeln", "Nur zur Gestaltung von Logos", "Zum Loeschen der Website"], 0, "Der Ads Manager ist das zentrale Arbeitswerkzeug fuer Meta-Kampagnen."),
      multiQ("Welche Themen nennt das Modul fuer Meta Ads?", ["Business Suite und Ads Manager", "Kampagnenstruktur", "Kampagnenziele", "Bueroeinrichtung"], [0, 1, 2], "Meta bildet im Kurs den praktischen Kern."),
      singleQ("Warum ist Funnel-Denken fuer Social Ads wichtig?", ["Weil Zielgruppen je nach Reifestufe anders angesprochen werden muessen", "Weil jede Person direkt kaufen will", "Weil Funnel nur fuer E-Mail gilt", "Weil dadurch keine Creatives noetig sind"], 0, "Awareness, Consideration und Conversion brauchen oft unterschiedliche Botschaften."),
      singleQ("Was macht ein Creative stark?", ["Hook, klarer Nutzen und passender CTA", "Nur bunte Farben", "Moeglichst viel Text", "Nur ein Firmenlogo"], 0, "Gute Creatives holen Aufmerksamkeit und erklaeren schnell den Mehrwert."),
      multiQ("Welche Anzeigenformate nennt das Modul?", ["Image", "Video", "Carousel", "Collection"], [0, 1, 2, 3], "Formatwahl beeinflusst Wirkung und Plattform-Fit."),
      singleQ("Warum ist Message Match zwischen Ad und Landingpage wichtig?", ["Weil Zielseite und Anzeige zusammenpassen muessen", "Weil sonst keine Cookies funktionieren", "Weil Ads dann billiger gespeichert werden", "Weil Headlines verboten sind"], 0, "Nutzer sollen auf der Zielseite das wiederfinden, was die Anzeige verspricht."),
      singleQ("Was ist ein typischer Fehler bei Paid Social?", ["Dieselbe Botschaft fuer jede Funnel-Stufe zu nutzen", "Creatives zu testen", "KPIs zu beobachten", "Landingpages zu verbessern"], 0, "Paid Social braucht differenzierte Botschaften und Lernschleifen."),
      multiQ("Welche KPI-Beispiele nennt das Modul?", ["CTR", "CPA", "ROAS", "Buerohoehe"], [0, 1, 2], "Paid Social wird stark ueber Kennzahlen bewertet und optimiert."),
      singleQ("Was bedeutet Skalierung im Paid-Social-Kontext?", ["Erfolgreiche Kampagnen kontrolliert ausweiten", "Nur die Grafik vergroessern", "Jede Kampagne sofort verdoppeln", "Nur neue Plattformen testen"], 0, "Skalierung braucht ein strukturiertes Vorgehen."),
      singleQ("Warum spielt Automatisierung im Modul eine Rolle?", ["Weil Tools, Regeln und Workflows Prozesse erleichtern koennen", "Weil Anzeigen manuell verboten sind", "Weil Content dadurch ueberfluessig wird", "Weil Automatisierung nur fuer E-Mail gilt"], 0, "Automatisierung ist ein Hebel fuer Effizienz und Reaktion."),
      openQ("Erklaere den Zusammenhang von Zielgruppe, Funnel und Creative.", "Die Zielgruppe bestimmt, wen man anspricht. Der Funnel beschreibt, in welcher Phase sich diese Personen befinden. Das Creative muss zur Phase und zum Informationsbedarf passen."),
      openQ("Warum reichen gute Anzeigen ohne gute Landingpage oft nicht aus?", "Weil Klicks allein noch kein Zielerfolg sind. Die Landingpage muss das Versprechen der Anzeige aufnehmen, Vertrauen schaffen und die Conversion erleichtern."),
      openQ("Wie wuerdest du eine schwache Social-Ad-Kampagne systematisch analysieren?", "Ich wuerde Ziel, Zielgruppe, Hook, Creative, CTA, Landingpage, KPI-Verlauf und Plattform-Fit pruefen und dann gezielt Hypothesen testen.")
    ],
    flashcards: [
      { front: "Paid Social", back: "Bezahlte Werbung auf Social-Media-Plattformen." },
      { front: "Ads Manager", back: "Zentrales Tool zur Kampagnensteuerung auf Meta." },
      { front: "Funnel", back: "Modell fuer die Reifestufe einer Zielgruppe von Aufmerksamkeit bis Conversion." },
      { front: "Creative", back: "Visuelle und textliche Gestaltung einer Anzeige." },
      { front: "CTA", back: "Call to Action, also die gewuenschte naechste Handlung." },
      { front: "Audience Management", back: "Steuerung und Strukturierung von Zielgruppen im Kampagnenkontext." },
      { front: "Message Match", back: "Passung zwischen Anzeigenbotschaft und Landingpage." },
      { front: "CPA", back: "Cost per Acquisition bzw. Kosten pro Zielhandlung." },
      { front: "ROAS", back: "Return on Ad Spend im Verhaeltnis zu Werbekosten." },
      { front: "Hook", back: "Starker Einstieg, der in den ersten Sekunden Aufmerksamkeit erzeugt." },
      { front: "Skalierung", back: "Kontrolliertes Ausweiten funktionierender Kampagnen." },
      { front: "Automatisierung", back: "Nutzung von Regeln, Tools oder Workflows zur Effizienzsteigerung." },
      { front: "Mediaplanung", back: "Planung von Budget, Timing, Zielgruppen und Testlogik einer Kampagne." }
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
    summary:
      "E-Commerce Digitale Marktplaetze behandelt die Rolle grosser Plattformen wie Amazon, unterschiedliche Verkaeufermodelle, Auswahlkriterien fuer Marktplaetze, Produktanlage, Buy Box, Logistik, Bewertungen, A+ Content, Amazon SEO und Advertising.",
    questions: [
      singleQ("Was ist ein digitaler Marktplatz im E-Commerce?", ["Eine Plattform, auf der mehrere Anbieter Produkte verkaufen", "Nur ein internes Warenwirtschaftssystem", "Ein lokaler Store ohne Internet", "Nur ein Zahlungsanbieter"], 0, "Marktplaetze bringen Angebot, Nachfrage und Plattformregeln zusammen."),
      singleQ("Warum sind Marktplaetze fuer viele Haendler attraktiv?", ["Weil sie Reichweite, Vertrauen und bestehende Nachfrage mitbringen", "Weil dort keine Konkurrenz existiert", "Weil Produktdaten dort unwichtig sind", "Weil Logistik nie organisiert werden muss"], 0, "Marktplaetze bieten schnellen Zugang zu Sichtbarkeit und Nachfrage."),
      multiQ("Welche Kriterien helfen bei der Auswahl eines Marktplatzes?", ["Zielgruppe", "Gebuehren und Margen", "Wettbewerbsintensitaet", "Nur die Lieblingsfarbe des Dashboards"], [0, 1, 2], "Die Plattform muss zum Produkt, zur Marge und zum Zielmarkt passen."),
      singleQ("Was unterscheidet Seller und Vendor auf Amazon grundsaetzlich?", ["Seller verkaufen direkt an Endkunden, Vendoren liefern an Amazon", "Es gibt keinen Unterschied", "Vendoren sind immer Privatpersonen", "Seller koennen keine Werbung nutzen"], 0, "Seller handeln auf dem Marktplatz, Vendoren arbeiten eher wie Lieferanten an Amazon."),
      singleQ("Was bedeutet die Buy Box auf Amazon?", ["Der hervorgehobene Kaufbereich, ueber den viele Verkaeufe laufen", "Ein Tool fuer Buchhaltung", "Nur ein Lagerfach", "Ein Bereich fuer Bewertungen"], 0, "Wer die Buy Box gewinnt, bekommt einen grossen Teil der Kaufwahrscheinlichkeit."),
      singleQ("Wofuer steht FBA?", ["Fulfillment by Amazon", "Fast Booking Algorithm", "Full Brand Analysis", "Flexible Buyer Access"], 0, "FBA bedeutet, dass Amazon Lagerung, Versand und oft Teile des Services uebernimmt."),
      singleQ("Was beschreibt FBM am besten?", ["Versand durch den Haendler selbst", "Automatische Preisoptimierung", "Nur Vendoren duerfen FBM nutzen", "Eine Amazon-interne Werbeform"], 0, "FBM bedeutet Fulfillment by Merchant."),
      multiQ("Welche Produktkennungen spielen im Marktplatzkontext eine Rolle?", ["GTIN", "EAN", "ASIN", "SKU"], [0, 1, 2, 3], "Diese Kennungen helfen bei Identifikation, Listing und interner Zuordnung."),
      singleQ("Warum sind Produktbewertungen so wichtig?", ["Weil sie Vertrauen und Conversion stark beeinflussen", "Weil sie nur intern fuer Amazon sichtbar sind", "Weil sie keine Auswirkung auf Rankings haben", "Weil sie Preise automatisch festlegen"], 0, "Bewertungen wirken auf Sichtbarkeit, Vertrauen und Kaufentscheidung."),
      singleQ("Was ist A+ Content?", ["Erweiterter Marken- und Produktcontent auf Amazon", "Ein Lagerprogramm", "Ein Pflichtfeld fuer Steuern", "Nur eine Versandoption"], 0, "A+ Content verbessert die Produktdarstellung und kann Conversion foerdern."),
      singleQ("Was bedeutet Amazon SEO?", ["Optimierung von Produktlistings fuer bessere Auffindbarkeit auf Amazon", "Nur externe Backlinks aufbauen", "Google-Anzeigen fuer Amazon", "Die Loeschung schlechter Produkte"], 0, "Titel, Bullet Points, Keywords und Conversion-Signale beeinflussen die Sichtbarkeit."),
      multiQ("Welche Aufgaben gehoeren zur professionellen Listing-Arbeit?", ["Keyword-Recherche", "Saubere Produktdaten", "Starke Bilder und Texte", "Zufaellige Preiswahl ohne Kalkulation"], [0, 1, 2], "Ein gutes Listing verbindet Datenqualitaet, Sichtbarkeit und Ueberzeugung."),
      openQ("Wann wuerdest du eher FBA und wann eher FBM einsetzen?", "FBA ist stark, wenn Prime-Faehigkeit, Skalierung und Auslagerung der Logistik wichtig sind. FBM ist sinnvoll, wenn spezielle Produkte, eigene Versandprozesse oder bessere Margen im eigenen Fulfillment vorliegen."),
      openQ("Erklaere, warum die Wahl zwischen Seller und Vendor strategisch relevant ist.", "Sie beeinflusst Preissteuerung, Markenhoheit, Marge, Datenzugang, Verhandlungsmacht und operative Verantwortung."),
      openQ("Beschreibe die wichtigsten Bausteine eines guten Amazon-Listings.", "Dazu gehoeren ein klarer Titel, suchrelevante Keywords, saubere Bullet Points, ueberzeugende Bilder, ggf. A+ Content, gute Bewertungen und eine passende Preis- und Logistiklogik.")
    ],
    flashcards: [
      { front: "Digitaler Marktplatz", back: "Plattform, auf der mehrere Anbieter Produkte unter Plattformregeln verkaufen." },
      { front: "Seller Modell", back: "Haendler verkauft direkt ueber den Marktplatz an Endkunden." },
      { front: "Vendor Modell", back: "Haendler liefert Produkte an Amazon, Amazon verkauft weiter." },
      { front: "Buy Box", back: "Hervorgehobener Kaufbereich auf Amazon mit grossem Einfluss auf Verkaeufe." },
      { front: "FBA", back: "Fulfillment by Amazon: Lagerung und Versand ueber Amazon." },
      { front: "FBM", back: "Fulfillment by Merchant: Versand durch den Haendler selbst." },
      { front: "GTIN", back: "Globale Artikelnummer zur eindeutigen Identifikation eines Produkts." },
      { front: "EAN", back: "European Article Number, in Europa gaengige Produktkennzeichnung." },
      { front: "ASIN", back: "Amazon Standard Identification Number fuer Produkte auf Amazon." },
      { front: "SKU", back: "Interne Artikelnummer zur eigenen Bestands- und Prozesssteuerung." },
      { front: "A+ Content", back: "Erweiterter Markencontent auf Amazon mit mehr visuellen und textlichen Elementen." },
      { front: "Amazon SEO", back: "Optimierung von Amazon-Listings fuer Sichtbarkeit und Conversion." },
      { front: "Seller Central", back: "Zentrales Arbeitsinterface fuer Haendler auf Amazon." }
    ],
    exercises: [
      "Vergleiche fuer ein Produkt Seller, Vendor, FBA und FBM in einer kurzen Entscheidungsmatrix.",
      "Bewerte ein existierendes Amazon-Listing nach Sichtbarkeit, Bildern, Texten und Conversion-Logik.",
      "Leite Kriterien ab, nach denen ein Unternehmen den passenden Marktplatz waehlen sollte."
    ],
    tips: [
      "Denke Marktplaetze nie nur als Reichweitenkanal, sondern auch als Abhaengigkeits- und Margenfrage.",
      "Gute Produktdaten sind auf Marktplaetzen kein Detail, sondern Verkaufsgrundlage.",
      "Listing, Logistik, Bewertungen und Werbung wirken auf Plattformen immer zusammen."
    ]
  },
  12: {
    summary:
      "WordPress verbindet CMS-Grundlagen mit praktischer Website-Umsetzung. Im Fokus stehen WordPress-Einrichtung, Benutzerrollen, Sitemap, Seiten vs. Posts, Themes, Plugins, Elementor, Menues, Header, Templates, Responsivitaet, Blog, Backups, Formulare, SEO, DSGVO und Sicherheit.",
    questions: [
      singleQ("Was ist ein CMS?", ["Ein System zur Erstellung und Pflege digitaler Inhalte", "Ein Werbenetzwerk", "Nur ein Analyse-Tool", "Ein Browser"], 0, "CMS steht fuer Content-Management-System."),
      singleQ("Warum ist WordPress fuer viele Websites attraktiv?", ["Weil es flexibel, weit verbreitet und mit Themes und Plugins erweiterbar ist", "Weil es nur fuer Blogs gedacht ist", "Weil man keine Inhalte pflegen muss", "Weil es ohne Hosting laeuft"], 0, "WordPress ist breit einsetzbar und stark erweiterbar."),
      singleQ("Was ist der Unterschied zwischen Seiten und Beitragen in WordPress?", ["Seiten sind eher statisch, Beitraege eher chronologisch und blogartig", "Es gibt keinen Unterschied", "Beitraege koennen keine Bilder haben", "Seiten koennen nicht verlinkt werden"], 0, "Seiten und Posts haben unterschiedliche typische Einsatzzwecke."),
      singleQ("Wozu dienen Benutzerrollen in WordPress?", ["Sie steuern Rechte und Verantwortlichkeiten im Backend", "Sie aendern nur Farben", "Sie ersetzen Plugins", "Sie definieren die Domain"], 0, "Benutzerrollen helfen bei Sicherheit und sauberer Zusammenarbeit."),
      singleQ("Was ist eine Sitemap im Website-Kontext?", ["Die strukturelle Uebersicht der Seiten und Inhalte", "Nur eine XML-Datei fuer Bilder", "Ein Backup-Format", "Ein Cookie-Banner"], 0, "Sitemaps helfen bei Planung, Struktur und oft auch technischer Auffindbarkeit."),
      singleQ("Was beschreibt ein Status Code wie 301 oder 302?", ["Die Art einer HTTP-Antwort, z. B. Weiterleitung", "Die Bildgroesse in WordPress", "Die Anzahl installierter Plugins", "Die Nutzerrolle im Backend"], 0, "Status Codes gehoeren zu den technischen Web-Basics."),
      singleQ("Wofuer stehen Themes in WordPress?", ["Sie bestimmen Layout und Grunddesign der Website", "Sie ersetzen Inhalte", "Sie sind nur fuer Backups da", "Sie verwalten Newsletter"], 0, "Themes geben Struktur und visuelle Basis vor."),
      singleQ("Wozu dienen Plugins?", ["Sie erweitern WordPress um Funktionen", "Sie ersetzen das Hosting", "Sie erstellen automatisch Produkte", "Sie sind nur fuer Entwickler sichtbar"], 0, "Plugins ergaenzen WordPress um zusaetzliche Features."),
      singleQ("Wofuer wird Elementor oft genutzt?", ["Zur visuellen Seitengestaltung per Builder", "Zur Serverkonfiguration", "Zur Rechnungsstellung", "Nur zur E-Mail-Automation"], 0, "Elementor ist ein Page Builder fuer Layouts und Inhaltsbloecke."),
      multiQ("Welche Themen sind fuer eine gute WordPress-Website besonders wichtig?", ["Responsivitaet", "Saubere Menuestruktur", "Backups", "Beliebig viele ungenutzte Plugins"], [0, 1, 2], "Website-Qualitaet entsteht aus Struktur, Technik und Pflege."),
      singleQ("Warum ist ein Blog in WordPress oft SEO-relevant?", ["Weil strukturierte, regelmaessige Inhalte Sichtbarkeit und Themenabdeckung verbessern koennen", "Weil Blogartikel automatisch verkaufen", "Weil Blogs keine Kategorien brauchen", "Weil Blogs nur auf Mobilgeraeten sichtbar sind"], 0, "Ein Blog kann fuer Reichweite, Expertise und Keyword-Abdeckung sinnvoll sein."),
      singleQ("Warum sind Backups im WordPress-Alltag wichtig?", ["Weil Fehler, Updates oder Angriffe rueckgaengig gemacht werden koennen", "Weil sie die Startseite gestalten", "Weil sie Plugins ersetzen", "Weil ohne Backup kein SEO moeglich ist"], 0, "Backups gehoeren zur Betriebssicherheit."),
      singleQ("Was ist bei Kontaktformularen besonders wichtig?", ["Funktion, Nutzerfreundlichkeit und DSGVO-konforme Datenerhebung", "Nur moeglichst viele Pflichtfelder", "Dass sie immer Pop-ups ausloesen", "Dass sie unsichtbar sind"], 0, "Formulare muessen technisch, rechtlich und nutzerseitig sauber funktionieren."),
      singleQ("Was leisten SEO-Plugins wie Yoast oder RankMath typischerweise?", ["Sie unterstuetzen bei Metadaten, Lesbarkeit und technischen SEO-Hinweisen", "Sie ersetzen alle Inhalte", "Sie garantieren Top-Rankings", "Sie loesen Hostingprobleme"], 0, "Plugins helfen, aber ersetzen keine Strategie und keine guten Inhalte."),
      openQ("Erklaere, wie Themes, Plugins und Elementor zusammenwirken koennen.", "Das Theme liefert die gestalterische Basis, Plugins erweitern Funktionen und Elementor wird oft fuer individuelle Layouts und Seitenaufbau genutzt."),
      openQ("Warum koennen zu viele oder schlechte Plugins problematisch werden?", "Sie koennen die Website verlangsamen, Konflikte verursachen, Sicherheitsluecken erzeugen oder die Pflege erschweren."),
      openQ("Beschreibe die wichtigsten Schritte, um eine neue WordPress-Seite sauber aufzubauen.", "Dazu gehoeren Ziel und Struktur klaeren, Sitemap planen, WordPress aufsetzen, Rollen festlegen, Theme und notwendige Plugins auswaehlen, Inhalte anlegen, Responsivitaet pruefen, Backups einrichten und rechtliche Punkte absichern.")
    ],
    flashcards: [
      { front: "CMS", back: "System zur Erstellung, Organisation und Pflege digitaler Inhalte." },
      { front: "WordPress", back: "Weit verbreitetes CMS fuer Websites, Blogs und weitere Webprojekte." },
      { front: "Seiten", back: "Eher statische Inhalte wie Startseite, Ueber uns oder Kontakt." },
      { front: "Beitraege", back: "Chronologische Inhalte, die oft im Blog eingesetzt werden." },
      { front: "Benutzerrollen", back: "Rechtesystem fuer Administratoren, Redakteure, Autoren und weitere Rollen." },
      { front: "Sitemap", back: "Strukturelle Uebersicht einer Website und ihrer Inhalte." },
      { front: "Status Code", back: "HTTP-Antwortcode wie 200, 301, 302 oder 404." },
      { front: "Theme", back: "Gestalterische und strukturelle Grundlage einer WordPress-Seite." },
      { front: "Plugin", back: "Erweiterung, die WordPress um neue Funktionen ergaenzt." },
      { front: "Elementor", back: "Visueller Page Builder fuer Layouts und Seitenaufbau." },
      { front: "Responsive Design", back: "Anpassung der Website an verschiedene Bildschirmgroessen." },
      { front: "Backup", back: "Sicherung der Website, um Daten oder Funktionen wiederherstellen zu koennen." },
      { front: "Permalink", back: "Dauerhafte URL-Struktur einer Seite oder eines Beitrags." }
    ],
    exercises: [
      "Plane fuer eine kleine Unternehmenswebsite eine Sitemap mit Seiten, Blog und Menuestruktur.",
      "Pruefe eine WordPress-Seite auf Plugin-Einsatz, Responsivitaet, Formulare und Backups.",
      "Erklaere einer fachfremden Person den Unterschied zwischen Theme, Plugin und Page Builder."
    ],
    tips: [
      "Bau in WordPress nicht sofort los, sondern klaere zuerst Struktur, Ziel und Nutzerfuehrung.",
      "Jedes Plugin sollte einen klaren Zweck haben und regelmaessig gepflegt werden.",
      "WordPress ist nicht nur Gestaltung, sondern auch Betrieb, Sicherheit und saubere Prozesse."
    ]
  },
  13: {
    summary:
      "Texten fuers Web behandelt die Besonderheiten digitaler Texte: Nutzer lesen schnell, springen ein und vergleichen stark. Im Mittelpunkt stehen Struktur, Headline, Teaser, hilfreiche Inhalte, USPs sowie Produkt- und Kategorietexte fuer Websites und Shops.",
    questions: [
      singleQ("Was ist eine Grundbesonderheit von Webtexten?", ["Sie werden in einem schnellen, digitalen Nutzungskontext gelesen", "Sie werden nur gedruckt gelesen", "Sie funktionieren ohne Technik", "Sie muessen immer sehr lang sein"], 0, "Webtexte entstehen fuer digitale Nutzung mit begrenzter Aufmerksamkeit."),
      singleQ("Warum gelten Internetnutzer oft als ungeduldig und illoyal?", ["Weil Konkurrenz nur einen Klick entfernt ist", "Weil sie keine Inhalte lesen", "Weil alle nur ueber Apps kommen", "Weil Websites keine Rolle spielen"], 0, "Digitale Nutzung ist schnell, vergleichend und wenig verzeihend."),
      singleQ("Wofuer steht USP?", ["Unique Selling Proposition bzw. Alleinstellungsmerkmal", "User Search Performance", "Universal Sales Process", "Unlimited Style Principle"], 0, "USPs helfen, Angebote klar zu differenzieren."),
      multiQ("Welche Ziele koennen Unternehmen mit Webtexten verfolgen?", ["Conversions", "Branding", "Leads", "Beliebige Textlaenge ohne Wirkung"], [0, 1, 2], "Texte sollen informieren, ueberzeugen und Handlungen unterstuetzen."),
      singleQ("Was ist bei Webtexten besonders wichtig?", ["Struktur, Struktur, Struktur", "Moeglichst viele Fremdwoerter", "Extrem lange Saetze", "Moeglichst wenig Ueberschriften"], 0, "Digitale Texte muessen schnell erfassbar sein."),
      singleQ("Warum ist eine starke Headline so wichtig?", ["Sie entscheidet mit, ob ein Nutzer weiterliest", "Sie ersetzt den ganzen Text", "Sie ist nur fuer SEO gedacht", "Sie ist rechtlich vorgeschrieben"], 0, "Die Headline ist oft der erste Einstieg in den Text."),
      singleQ("Welche Aufgabe hat ein Teaser?", ["Er macht neugierig und fuehrt in den Inhalt", "Er ersetzt die Navigation", "Er zeigt nur Keywords", "Er ist immer identisch mit der Headline"], 0, "Ein guter Teaser baut Bruecken zum Haupttext."),
      multiQ("Woran orientieren sich gute Webtexte?", ["Am Nutzer", "Am Suchanlass", "Am konkreten Nutzen", "Nur an Suchmaschinen"], [0, 1, 2], "Das Modul betont: erst fuer Menschen schreiben, dann suchmaschinenfreundlich denken."),
      singleQ("Was bedeutet Helpful Content im Kontext des Moduls?", ["Inhalte mit echtem Nutzen fuer Menschen", "Texte mit moeglichst vielen Keywords", "Nur sehr kurze Texte", "Ausschliesslich KI-generierte Texte"], 0, "Nuetzlichkeit und Relevanz stehen im Vordergrund."),
      singleQ("Was unterscheidet Produkttexte von Kategorietexten?", ["Produkttexte fokussieren ein konkretes Angebot, Kategorietexte ordnen und fuehren durch ein Themenfeld", "Es gibt keinen Unterschied", "Kategorietexte haben nie SEO-Funktion", "Produkttexte brauchen keine Struktur"], 0, "Beide Textarten haben unterschiedliche Aufgaben im Shop."),
      singleQ("Warum ist die Einstiegssituation im Web oft anders als im Print?", ["Viele Nutzer landen direkt auf Unterseiten statt auf der Startseite", "Print und Web sind identisch", "Alle starten ueber die Kontaktseite", "Im Web gibt es keine Suchmaschinen"], 0, "Der Einstieg ist oft such- oder linkgetrieben."),
      multiQ("Welche Qualitaeten machen einen guten Webtext aus?", ["Klarheit", "Lesbarkeit", "Nutzwert", "Nebenkostenabrechnung"], [0, 1, 2], "Ein guter Text fuehrt, erklaert und erleichtert Entscheidungen."),
      openQ("Erklaere, warum man im Web zuerst fuer Menschen und nicht fuer Suchmaschinen schreibt.", "Weil nur nutzerorientierte Inhalte wirklich gelesen, verstanden und in Handlungen uebersetzt werden. Suchmaschinen bewerten hilfreiche und passende Inhalte ebenfalls zunehmend besser."),
      openQ("Wie wuerdest du einen Produkttext aufbauen, damit er verkauft und zugleich informativ bleibt?", "Ich wuerde mit Nutzen und Relevanz einsteigen, zentrale Vorteile klar strukturieren, Fragen beantworten, Vertrauen schaffen und die naechste Handlung erleichtern."),
      openQ("Warum ist Struktur bei Webtexten oft wichtiger als literarische Schoenheit?", "Weil Nutzer schnell scannen, filtern und entscheiden. Ein strukturierter Text hilft ihnen, die richtige Information sofort zu finden.")
    ],
    flashcards: [
      { front: "USP", back: "Unique Selling Proposition bzw. ein klares Alleinstellungsmerkmal." },
      { front: "Webtext", back: "Text fuer digitale Nutzung mit Fokus auf Lesbarkeit, Struktur und Nutzen." },
      { front: "Headline", back: "Ueberschrift, die Aufmerksamkeit weckt und den Textoeffner bildet." },
      { front: "Teaser", back: "Kurze Einfuehrung, die den Nutzen des folgenden Inhalts andeutet." },
      { front: "Helpful Content", back: "Inhalt, der echte Fragen beantwortet und Menschen weiterhilft." },
      { front: "Skimmer", back: "Nutzer, der Inhalte eher ueberfliegt als vollstaendig liest." },
      { front: "Scanner", back: "Nutzer, der gezielt nach bestimmten Informationen sucht." },
      { front: "Produkttext", back: "Text, der ein einzelnes Produkt erklaert und ueberzeugend beschreibt." },
      { front: "Kategorietext", back: "Text, der ein Themen- oder Produktfeld strukturiert einfuehrt." },
      { front: "Conversion", back: "Erwuenschte Handlung wie Kauf, Lead oder Kontaktaufnahme." },
      { front: "Branding", back: "Aufbau von Wiedererkennung, Vertrauen und Markenbild ueber Sprache." },
      { front: "Lead", back: "Qualifizierter Kontakt mit erkennbarem Interesse." },
      { front: "Lesbarkeit", back: "Wie leicht ein Text schnell verstanden und verarbeitet werden kann." }
    ],
    exercises: [
      "Schreibe eine Headline und einen Teaser fuer eine Produktseite mit klar erkennbarem Nutzen.",
      "Ueberarbeite einen bestehenden Webtext auf Struktur, Lesbarkeit und Zielgruppenfit.",
      "Vergleiche einen Produkttext und einen Kategorietext nach Ziel, Aufbau und Wirkung."
    ],
    tips: [
      "Lies gute Webtexte immer aus Nutzersicht: Was ist die erste Frage, die beantwortet werden muss?",
      "Struktur ist kein Schmuck, sondern Orientierung.",
      "Ein guter Text klingt einfach, weil er klar gedacht und sauber priorisiert ist."
    ]
  },
  14: {
    summary:
      "Visuals mit Canva & KI verbindet Fotografie-Grundlagen, Bildgestaltung, Dateiformate, Smartphone-Praxis, Bildbearbeitung mit Affinity, Arbeiten mit Canva sowie KI-Funktionen im Designprozess. Ziel ist, eigenstaendigen visuellen Content sicher zu erstellen und aufzubereiten.",
    questions: [
      singleQ("Welchen Nutzen koennen Bilder im Marketing besonders stark haben?", ["Sie sprechen emotional an und vermitteln Inhalte schnell", "Sie ersetzen jede Textaussage", "Sie machen Ladezeit unwichtig", "Sie sind nur Dekoration"], 0, "Bilder koennen Aufmerksamkeit, Assoziationen und Verstaendnis beschleunigen."),
      singleQ("Was ist JPEG?", ["Ein komprimiertes, universelles Bildformat", "Ein unkomprimiertes Audioformat", "Ein Dateiformat nur fuer Videos", "Ein Plugin fuer Canva"], 0, "JPEG ist stark verbreitet und dateigroessenfreundlich."),
      singleQ("Was beschreibt RAW am besten?", ["Ein digitales Negativ mit vielen Bildinformationen", "Ein komprimiertes Webformat", "Ein reines Social-Media-Format", "Ein Dateiname fuer Logos"], 0, "RAW eignet sich besonders fuer weitergehende Bearbeitung."),
      singleQ("Wofuer wird TIFF typischerweise genutzt?", ["Fuer hochwertige, unkomprimierte Bilddateien", "Nur fuer Smartphone-Screenshots", "Nur fuer Webicons", "Nur fuer PDFs"], 0, "TIFF speichert viel Qualitaet und wird eher in professionellen Workflows genutzt."),
      multiQ("Welche Seitenverhaeltnisse nennt das Modul als gaengig?", ["2:3", "3:4", "16:9", "11:27"], [0, 1, 2], "Je nach Motiv und Kanal passen unterschiedliche Verhaeltnisse besser."),
      singleQ("Warum sollte man beim Smartphone-Fotografieren eher ohne Filter fotografieren?", ["Weil Filter spaeter in der Postproduktion kontrollierter eingesetzt werden koennen", "Weil Filter verboten sind", "Weil dann kein Licht noetig ist", "Weil RAW sonst nicht funktioniert"], 0, "Das Modul empfiehlt, Gestaltungseffekte erst spaeter bewusst zu setzen."),
      singleQ("Wozu kann Serienbild bei Portraet- oder Eventfotografie helfen?", ["Um den besten Moment aus mehreren Aufnahmen auszuwaehlen", "Um die Aufloesung zu verringern", "Um den Akku zu sparen", "Um Texte im Bild zu erzeugen"], 0, "Serienbilder helfen bei Bewegungen und Ausdruecken."),
      singleQ("Welche Rolle spielt Canva im Modul?", ["Canva dient als leicht zugaengliches Design- und Content-Tool", "Canva ersetzt jede Kamera", "Canva ist nur fuer Tabellen gedacht", "Canva ist ausschliesslich ein Analyse-Tool"], 0, "Canva wird fuer Gestaltung, Aufbereitung und Content-Produktion genutzt."),
      singleQ("Welche Aufgabe erfuellt Affinity im Kurskontext?", ["Es vermittelt Grundkenntnisse in der Bildbearbeitung", "Es ist ein reines SEO-Tool", "Es ersetzt WordPress", "Es ist ein Online-Marktplatz"], 0, "Affinity ergaenzt Canva um staerkere Bildbearbeitung."),
      multiQ("Welche Ziele nennt das Modul ausdruecklich?", ["Sicherheit im Umgang mit Canva", "Grundkenntnisse in der Fotografie", "KI in den Designprozess integrieren", "Nur druckfertige Broschueren erstellen"], [0, 1, 2], "Das Modul kombiniert kreative Grundlagen mit Produktionstools."),
      singleQ("Warum ist Bildgestaltung mehr als Technik?", ["Weil Komposition, Blickfuehrung und Wirkung entscheidend fuer gute Visuals sind", "Weil Technik unwichtig ist", "Weil nur Kamerapreise zaehlen", "Weil Gestaltung nur im Print vorkommt"], 0, "Ein gutes Bild wirkt ueber Gestaltung, nicht nur ueber Geraete."),
      multiQ("Welche Rechtebereiche koennen bei Fotos relevant werden?", ["Recht am eigenen Bild", "Hausrecht", "Urheberrecht", "Mietvertrag"], [0, 1, 2], "Die Nutzung von Bildern beruehrt mehrere Rechtsbereiche."),
      openQ("Erklaere den Unterschied zwischen technischer Bildqualitaet und gestalterischer Bildwirkung.", "Technische Qualitaet betrifft Scharfe, Belichtung oder Dateiformat. Gestalterische Wirkung entsteht durch Motivwahl, Komposition, Perspektive, Licht und den emotionalen Eindruck."),
      openQ("Wie koennen Canva und KI zusammen sinnvoll eingesetzt werden?", "Canva hilft bei Layout und Aufbereitung, KI kann bei Ideen, Varianten, Text-Bild-Konzepten oder einzelnen Designfunktionen unterstuetzen. Die Entscheidung und Qualitaetskontrolle bleibt aber beim Menschen."),
      openQ("Welche typischen Fehler wuerdest du bei Visual Content zuerst vermeiden?", "Ich wuerde unscharfe oder ueberladene Bilder, falsche Formate, schlechte Lesbarkeit, fehlenden Plattform-Fit und ungepruefte Bildrechte vermeiden.")
    ],
    flashcards: [
      { front: "Canva", back: "Tool fuer visuelle Gestaltung, Content-Erstellung und schnelle Designproduktion." },
      { front: "Affinity", back: "Software fuer Bildbearbeitung und visuelle Nachbearbeitung." },
      { front: "JPEG", back: "Komprimiertes, universell nutzbares Bildformat." },
      { front: "RAW", back: "Digitales Negativ mit vielen Reserven fuer die Bearbeitung." },
      { front: "TIFF", back: "Unkomprimiertes Bildformat mit hoher Qualitaet." },
      { front: "Seitenverhaeltnis", back: "Verhaeltnis von Breite zu Hoehe eines Bildes, etwa 1:1 oder 16:9." },
      { front: "Komposition", back: "Anordnung von Bildinhalten zur gezielten Blickfuehrung." },
      { front: "Postproduktion", back: "Nachbearbeitung von Bildmaterial nach der Aufnahme." },
      { front: "Serienbild", back: "Mehrere schnelle Aufnahmen hintereinander, um den besten Moment zu treffen." },
      { front: "Recht am eigenen Bild", back: "Persoenlichkeitsrecht der abgebildeten Person bei Bildnutzung." },
      { front: "Hausrecht", back: "Rechte des Eigentuemers eines Ortes bezogen auf Fotoerlaubnis und Nutzung." },
      { front: "Bildwirkung", back: "Emotionale und kommunikative Wirkung eines Visuals auf den Betrachter." },
      { front: "Designprozess", back: "Abfolge von Idee, Gestaltung, Bearbeitung und Ausgabe eines visuellen Inhalts." }
    ],
    exercises: [
      "Erstelle fuer einen Social Post zwei Visual-Varianten mit unterschiedlicher Bildwirkung und erklaere die Unterschiede.",
      "Bewerte ein Bild nach Formatwahl, Komposition, Lesbarkeit und Plattform-Fit.",
      "Skizziere einen kleinen Workflow von Aufnahme ueber Bearbeitung bis zur Veroeffentlichung."
    ],
    tips: [
      "Ein starkes Visual beginnt oft vor der Bearbeitung mit einem klaren Motiv und einer klaren Aussage.",
      "Werkzeuge sind Hilfsmittel, aber Wirkung entsteht durch Gestaltung und Auswahl.",
      "Pruefe bei jedem Bild vor der Nutzung Format, Lesbarkeit und Rechte."
    ]
  },
  15: {
    summary:
      "Video-Content mit DaVinci & KI behandelt den Weg von der Idee bis zum fertigen Webvideo. Themen sind Zielgruppe, Wirkung, Botschaft, Inspiration, KI als Assistenz, Mechaniken fuer gute Videos, Camera Shots, Smartphone-Dreh, Formate, FPS, Ordnerstruktur, Scripting und Schnitt in DaVinci Resolve.",
    questions: [
      singleQ("Warum ist Video im Online Marketing so stark?", ["Weil es Aufmerksamkeit, Verstaendnis und Teilbarkeit oft stark foerdern kann", "Weil Texte dadurch verboten sind", "Weil Video immer automatisch verkauft", "Weil nur lange Videos funktionieren"], 0, "Das Modul betont Reichweite, Konsumverhalten und Sharing-Potenzial von Video."),
      singleQ("Was sollte vor einem Videodreh zuerst klar sein?", ["Zielgruppe, Wirkung und Botschaft", "Nur die Schriftart im Abspann", "Nur die Exportdatei", "Nur der Kamerapreis"], 0, "Ein gutes Video beginnt mit Strategie, nicht mit Technik."),
      singleQ("Welche Rolle kann KI im Videokontext sinnvoll spielen?", ["Als Assistenz fuer Ideen, Skripte und Varianten", "Als vollstaendiger Ersatz fuer jedes kreative Urteil", "Nur fuer Rechnungen", "Nur fuer Hosting"], 0, "KI ist ein Co-Autor und Unterstuetzer, aber kein Ersatz fuer Zielgruppenverstaendnis."),
      singleQ("Was ist ein Hook im Videokontext?", ["Ein starker Einstieg, der sofort Aufmerksamkeit erzeugt", "Ein technischer Kabelanschluss", "Nur die letzte Szene eines Videos", "Ein Dateiformat"], 0, "Gerade kurze Videos brauchen einen schnellen, relevanten Einstieg."),
      multiQ("Welche Themen nennt das Modul fuer die Produktion guter Videos?", ["Idee und Story", "Camera Shots", "Aufloesungen und FPS", "Zufaellige Ordnernamen ohne Struktur"], [0, 1, 2], "Gute Videos verbinden Konzept, Aufnahme und saubere Produktion."),
      singleQ("Warum ist die Zielgruppe fuer Scripting so wichtig?", ["Weil Sprache, Laenge und Hook an sie angepasst werden muessen", "Weil Zielgruppen nur fuer Anzeigen wichtig sind", "Weil Skripte immer neutral bleiben sollten", "Weil Videos keine Botschaft brauchen"], 0, "Ohne Zielgruppenfit verfehlt auch ein technisch gutes Video oft seine Wirkung."),
      singleQ("Was beschreibt FPS?", ["Die Anzahl der Bilder pro Sekunde", "Die Dateigroesse des Videos", "Die Anzahl der Kameras", "Die Lautstaerke des Tons"], 0, "FPS beeinflusst die Bewegungsdarstellung."),
      singleQ("Warum ist eine saubere Ordnerstruktur vor dem Schnitt sinnvoll?", ["Weil sie Material, Audio und Versionen uebersichtlich haelt", "Weil DaVinci sonst keine Farben anzeigen kann", "Weil Smartphone-Videos keine Ordner brauchen", "Weil Storyboards dadurch ersetzt werden"], 0, "Organisation spart spaeter viel Zeit und Fehler."),
      singleQ("Wofuer eignet sich DaVinci Resolve im Modul besonders?", ["Fuer Schnitt und Nachbearbeitung von Video", "Nur fuer Social-Media-Planung", "Nur fuer Fotografie", "Nur fuer Live-Streaming"], 0, "DaVinci ist das zentrale Schnittwerkzeug im Kurs."),
      multiQ("Welche Inputs kann KI beim Scripting gut liefern?", ["Hook-Varianten", "Sprachvarianten fuer Zielgruppen", "Strukturideen", "Garantierte Markentreue ohne Briefing"], [0, 1, 2], "KI wird besser, wenn Ziel, Stil und Zielgruppe klar vorgegeben sind."),
      singleQ("Warum reicht Technik allein nicht fuer ein gutes Video?", ["Weil auch Story, Botschaft und Dramaturgie ueber Wirkung entscheiden", "Weil Technik nie relevant ist", "Weil Videos nur ueber Musik funktionieren", "Weil alle Videos identisch sind"], 0, "Wirkung entsteht aus Inhalt und Umsetzung zusammen."),
      singleQ("Welche Laenge empfiehlt das Modul fuer viele Webvideos als besonders praktikabel?", ["Kurzformate, oft unter 60 Sekunden", "Mindestens 15 Minuten", "Immer genau 3 Minuten", "Nur Langformate ueber 10 Minuten"], 0, "Gerade mobile Nutzung belohnt oft kuerzere Formate."),
      openQ("Erklaere den Zusammenhang von Zielgruppe, Hook und Storybogen.", "Die Zielgruppe bestimmt, was relevant ist. Der Hook zieht Aufmerksamkeit in den ersten Sekunden, und der Storybogen sorgt dafuer, dass Interesse gehalten und die Botschaft logisch transportiert wird."),
      openQ("Wie wuerdest du KI sinnvoll nutzen, ohne dass das Video austauschbar wirkt?", "Ich wuerde KI fuer Ideen, Varianten und Struktur nutzen, aber die finale Sprache, Zielgruppenpassung, Beispiele und kreative Auswahl selbst steuern."),
      openQ("Welche typischen Fehler sollten beim Videodreh mit dem Smartphone vermieden werden?", "Zum Beispiel unklare Botschaft, schlechte Tonqualitaet, unruhige Bilder, falsches Format, fehlende Lichtkontrolle oder fehlende Planung des Materials.")
    ],
    flashcards: [
      { front: "Hook", back: "Starker Einstieg, der in den ersten Sekunden Aufmerksamkeit bindet." },
      { front: "Storybogen", back: "Spannungs- und Wirkungslogik eines Videos von Einstieg bis Abschluss." },
      { front: "Camera Shot", back: "Bewusste Wahl einer Kameraeinstellung oder Perspektive." },
      { front: "FPS", back: "Frames per Second, also Bilder pro Sekunde." },
      { front: "Aufloesung", back: "Pixelanzahl eines Videos, etwa Full HD oder 4K." },
      { front: "DaVinci Resolve", back: "Software fuer Videoschnitt und Nachbearbeitung." },
      { front: "Voice Over", back: "Gesprochener Kommentar oder Erklaerstimme ueber dem Bild." },
      { front: "B-Roll", back: "Ergaenzendes Schnittmaterial, das ein Thema visuell unterstuetzt." },
      { front: "Storyboard", back: "Skizzierte Planung von Szenen und Bildabfolge." },
      { front: "Scripting", back: "Ausarbeitung von Inhalt, Reihenfolge und Formulierungen eines Videos." },
      { front: "Postproduktion", back: "Schritt nach dem Dreh mit Schnitt, Ton, Farbe und Export." },
      { front: "Short Form Video", back: "Kurzes, schnell konsumierbares Videoformat fuer Web und Social Media." },
      { front: "Botschaft", back: "Kernaussage, die das Video transportieren soll." }
    ],
    exercises: [
      "Entwirf ein kurzes Video-Konzept mit Zielgruppe, Hook, Botschaft und drei Schluesselszenen.",
      "Analysiere ein bestehendes Video nach Hook, Storybogen, Zielgruppenfit und visueller Klarheit.",
      "Schreibe ein kurzes Webvideo-Skript in zwei Varianten: einmal sachlich, einmal emotionaler."
    ],
    tips: [
      "Plane zuerst Wirkung und Aussage, dann erst Technik und Schnitt.",
      "Wenn der Hook nicht sitzt, rettet oft auch der Rest des Videos die Aufmerksamkeit nicht mehr.",
      "Guter Schnitt beginnt schon beim sauberen Dreh und bei guter Dateiorganisation."
    ]
  },
  16: {
    summary:
      "Analyse & Optimierung fokussiert Webtracking, Datenschutz, relevante Kennzahlen, Measurement Frameworks, technische Vorbereitung, Traffic-Messung, Google Analytics 4, Tag Manager, Events, Attribution, BI-Tools, Datenvisualisierung und Clarity.",
    questions: [
      singleQ("Warum ist Webtracking fuer Marketing wichtig?", ["Weil Verhalten, Wirkung und Optimierung messbar werden", "Weil dadurch keine Strategie mehr noetig ist", "Weil Tracking nur fuer IT relevant ist", "Weil Kampagnen ohne Tracking immer erfolgreich sind"], 0, "Tracking schafft die Grundlage fuer datenbasierte Entscheidungen."),
      singleQ("Was ist beim Tracking datenschutzseitig besonders wichtig?", ["Transparenz, Consent und rechtssichere Einbindung", "Nur ein schoenes Cookie-Banner", "Tracking ohne Information", "Datenschutz spielt bei Analytics keine Rolle"], 0, "Das Modul startet bewusst mit Datenschutz und Consent."),
      singleQ("Wofuer steht GA4?", ["Google Analytics 4", "General Ad Framework 4", "Global Attribution Format 4", "Google Ads Feed 4"], 0, "GA4 ist die aktuelle Generation von Google Analytics."),
      multiQ("Wo begegnen uns Tracking-Tools laut Modul haeufig?", ["Webseiten", "Online-Shops", "Apps", "E-Mail-Marketing"], [0, 1, 2, 3], "Tracking ist in vielen digitalen Kontaktpunkten verankert."),
      singleQ("Was ist ein Measurement Framework?", ["Eine strukturierte Logik, welche Ziele und Messwerte sinnvoll verbunden werden", "Nur ein Dashboard-Design", "Eine Liste mit Farben fuer KPIs", "Ein Ersatz fuer Consent"], 0, "Measurement Frameworks helfen, nicht nur Daten, sondern die richtigen Daten zu messen."),
      singleQ("Warum sind KPIs ohne Zielbezug problematisch?", ["Weil Zahlen ohne Kontext kaum steuerungsrelevant sind", "Weil KPIs nie verglichen werden duerfen", "Weil man dann keine Dashboards bauen kann", "Weil alle KPIs gleich wichtig sind"], 0, "Erst Ziele machen Kennzahlen interpretierbar."),
      singleQ("Wozu dient der Google Tag Manager?", ["Zur flexibleren Einbindung und Verwaltung von Tracking-Tags", "Zum Hosting der Website", "Zur Textoptimierung", "Nur fuer Backups"], 0, "Der Tag Manager trennt viele Tracking-Einbindungen von direktem Code-Eingriff."),
      singleQ("Was ist ein Event im Tracking-Kontext?", ["Eine gemessene Nutzeraktion oder Interaktion", "Nur eine Kalendereinladung", "Eine Social-Media-Kampagne", "Ein Serverfehler"], 0, "Events erfassen Handlungen wie Klicks, Scrolls oder Downloads."),
      multiQ("Welche Bereiche nennt das Modul als spaetere Vertiefungen?", ["Attribution", "BI-Tools und Datenvisualisierung", "Clarity", "Papiernotizen ohne System"], [0, 1, 2], "Analyse geht ueber das Sammeln von Rohdaten hinaus."),
      singleQ("Was beschreibt Attribution?", ["Die Zuordnung von Erfolgen zu Kanaelen oder Kontaktpunkten", "Nur die Gestaltung eines Dashboards", "Die Speicherung von Passwoertern", "Die Reihenfolge von Bildern auf einer Seite"], 0, "Attribution beantwortet die Frage, welchem Kanal Wirkung zugeschrieben wird."),
      singleQ("Warum ist technische Vorbereitung fuer Analyse wichtig?", ["Weil sauberes Tracking von sauberer Implementierung abhaengt", "Weil KPIs sonst automatisch entstehen", "Weil nur Design optimiert werden muss", "Weil Analyse keine Website braucht"], 0, "Fehlerhafte Implementierung fuehrt schnell zu falschen Daten."),
      multiQ("Welche KPI-Arten koennen im Analysemodul eine Rolle spielen?", ["Traffic-KPIs", "Conversion-KPIs", "Effizienz-KPIs", "Hausmeisterkosten"], [0, 1, 2], "Je nach Ziel koennen Reichweite, Verhalten und Wirtschaftlichkeit relevant sein."),
      openQ("Erklaere, warum ein Measurement Framework vor der Tool-Einrichtung sinnvoll ist.", "Weil zuerst klar sein sollte, welche Geschaeftsziele, Nutzerhandlungen und Erfolgsfragen gemessen werden sollen. Das Tool sollte dieser Logik folgen, nicht umgekehrt."),
      openQ("Was kann passieren, wenn Tracking technisch oder rechtlich unsauber aufgesetzt ist?", "Dann koennen Daten fehlen, unzuverlaessig sein oder rechtliche Risiken verursachen. Entscheidungen werden dadurch schnell falsch oder unsicher."),
      openQ("Wie wuerdest du eine Datenanalyse aufbauen, wenn eine Kampagne zwar viel Traffic, aber wenig Ergebnis bringt?", "Ich wuerde Ziele, Kanalqualitaet, Zielgruppe, Landingpage, Event-Daten, Conversion-Schritte und moegliche Trackingfehler systematisch pruefen.")
    ],
    flashcards: [
      { front: "Webtracking", back: "Erfassung von Nutzerverhalten und Interaktionen in digitalen Umgebungen." },
      { front: "Consent", back: "Zustimmung des Nutzers zu bestimmten Datenverarbeitungen oder Tracking-Massnahmen." },
      { front: "KPI", back: "Kennzahl zur Bewertung von Zielerreichung und Leistung." },
      { front: "Measurement Framework", back: "Struktur, die Ziele, Fragen, Events und KPIs sinnvoll verbindet." },
      { front: "GA4", back: "Google Analytics 4 zur Analyse digitaler Nutzung und Ereignisse." },
      { front: "Tag Manager", back: "Tool zur Verwaltung und Ausspielung von Tracking-Tags." },
      { front: "Event", back: "Gemessene Nutzerinteraktion wie Klick, Download oder Scroll." },
      { front: "Attribution", back: "Zuordnung von Ergebnissen zu Kanaelen oder Kontaktpunkten." },
      { front: "Dashboard", back: "Visuelle Zusammenfassung relevanter Kennzahlen." },
      { front: "BI-Tool", back: "Werkzeug zur tieferen Datenanalyse, Aufbereitung und Visualisierung." },
      { front: "Clarity", back: "Tool fuer qualitative Einsichten wie Sessions, Klickverhalten oder Heatmaps." },
      { front: "Traffic-Messung", back: "Analyse, woher Besucher kommen und wie sie sich bewegen." },
      { front: "Datenqualitaet", back: "Verlaesslichkeit, Vollstaendigkeit und Korrektheit erhobener Daten." }
    ],
    exercises: [
      "Erstelle fuer ein kleines Webprojekt ein einfaches Measurement Framework mit Zielen, Events und KPIs.",
      "Analysiere, welche Tracking-Daten fuer einen Shop, eine Leadseite und einen Newsletter besonders wichtig waeren.",
      "Leite aus einer fiktiven Kampagnenschwaeche moegliche Analysehypothesen ab."
    ],
    tips: [
      "Tracke nicht alles, sondern das, was fuer Entscheidungen wirklich relevant ist.",
      "Zahlen ohne Kontext sind keine Erkenntnisse.",
      "Datenschutz, technische Sauberkeit und Business-Frage gehoeren im Analyse-Setup immer zusammen."
    ]
  },
  17: {
    summary:
      "Projektmanagement fuer Marketer vermittelt Grundlagen, Nutzen und Kernprozesse des Projektmanagements. Im Fokus stehen Anforderungen, Project Canvas, klassische Methoden, Stakeholder, Planung, Ressourcen, Zeit, Budget, Risiko, Kommunikation, Qualitaet und Kontrolle.",
    questions: [
      singleQ("Was ist Projektmanagement im Kern?", ["Die organisierte Planung, Steuerung und Kontrolle eines Projekts", "Nur das Schreiben von E-Mails", "Ausschliesslich Kreativarbeit", "Nur das Benennen von Aufgaben"], 0, "Projektmanagement verbindet Zielorientierung mit Struktur und Steuerung."),
      singleQ("Warum ist Projektmanagement besonders in komplexen Vorhaben wichtig?", ["Weil es Struktur, Priorisierung und Kontrolle schafft", "Weil dadurch keine Risiken mehr existieren", "Weil Teams dann keine Kommunikation brauchen", "Weil Projekte ohne Ziele auskommen"], 0, "Komplexe Vorhaben brauchen Orientierung und Abstimmung."),
      singleQ("Welche Phase gehoert typischerweise zum Projektlebenszyklus?", ["Definition und Planung", "Nur Werbung schalten", "Nur Feedback sammeln", "Nur Rechnungen verschicken"], 0, "Das Modul nennt Initiierung, Planung, Ausfuehrung, Kontrolle und Abschluss."),
      multiQ("Welche Vorteile nennt das Modul fuer Projektmanagement?", ["Effizienz", "Zielorientierung", "Risikominimierung", "Unkoordinierte Improvisation"], [0, 1, 2], "Projektmanagement soll Ressourcen und Ergebnisse besser steuerbar machen."),
      singleQ("Was ist der Scope eines Projekts?", ["Der inhaltliche Umfang und Rahmen des Projekts", "Nur das Design eines Dashboards", "Die Anzahl der Meetings", "Ein Softwareplugin"], 0, "Scope klaert, was Teil des Projekts ist und was nicht."),
      singleQ("Warum sind Stakeholder wichtig?", ["Weil ihre Interessen und ihr Einfluss den Projekterfolg mitbestimmen", "Weil sie nur fuer Budgetfreigaben gebraucht werden", "Weil nur Externe Stakeholder sind", "Weil Kommunikation im Projekt sonst verboten ist"], 0, "Stakeholder-Management ist ein zentrales Kernkonzept."),
      singleQ("Wozu dient ein Project Canvas?", ["Zur strukturierten Erfassung zentraler Projektbausteine", "Nur zur visuellen Bildbearbeitung", "Zur Buchhaltung im Shop", "Nur fuer agile Softwareprojekte"], 0, "Ein Canvas macht Ziele, Anforderungen und Rahmen transparent."),
      singleQ("Warum ist Risikomanagement Teil guten Projektmanagements?", ["Weil Probleme frueh erkannt und abgefedert werden koennen", "Weil Risiken immer ignoriert werden sollten", "Weil es nur fuer Grossprojekte gilt", "Weil Zeitplaene dadurch unnoetig werden"], 0, "Frueherkennung verbessert Handlungsfaehigkeit."),
      multiQ("Welche Aufgabenfelder nennt das Modul fuer Projektmanager?", ["Planen", "Kommunizieren", "Organisieren", "Kontrollieren"], [0, 1, 2, 3], "Projektmanagement ist mehr als Terminpflege."),
      singleQ("Was ist ein Meilenstein?", ["Ein wichtiger Zwischenpunkt im Projektverlauf", "Ein Dateiformat", "Ein Rollenprofil im Team", "Ein Plugin fuer To-do-Listen"], 0, "Meilensteine helfen bei Struktur und Fortschrittskontrolle."),
      singleQ("Warum ist Ressourcenmanagement wichtig?", ["Weil Zeit, Budget und Personal begrenzt sind", "Weil Projekte unbegrenzt wachsen sollten", "Weil nur externe Dienstleister zaehlen", "Weil Qualitaet nichts mit Ressourcen zu tun hat"], 0, "Ohne realistische Ressourcenplanung kippen viele Projekte."),
      multiQ("Welche Bereiche gehoeren zu guter Projektkommunikation?", ["Informationsfluss", "Dokumentation", "Erwartungsmanagement", "Beliebige spontane Zurufe ohne Struktur"], [0, 1, 2], "Kommunikation braucht Plan, Transparenz und Nachvollziehbarkeit."),
      openQ("Erklaere, warum Projektmanagement gerade fuer Marketer mehr ist als nur Aufgabenverwaltung.", "Marketingprojekte verbinden oft Strategie, Inhalte, Technik, Budget, Abhaengigkeiten und mehrere Stakeholder. Projektmanagement sorgt dafuer, dass diese Faktoren auf ein gemeinsames Ziel ausgerichtet werden."),
      openQ("Welche Folgen kann ein unklarer Scope fuer ein Projekt haben?", "Dann wachsen Anforderungen ungeprueft, Prioritaeten verschwimmen, Aufwand steigt und Team wie Kunde haben unterschiedliche Erwartungen."),
      openQ("Wie wuerdest du ein Projekt starten, damit spaeter weniger Reibung entsteht?", "Ich wuerde Ziele, Scope, Stakeholder, Anforderungen, Rollen, Meilensteine, Risiken und Kommunikationswege frueh klaeren und sichtbar dokumentieren.")
    ],
    flashcards: [
      { front: "Projektmanagement", back: "Planung, Steuerung und Kontrolle eines Vorhabens zur Zielerreichung." },
      { front: "Scope", back: "Abgrenzung dessen, was zum Projekt gehoert und was nicht." },
      { front: "Stakeholder", back: "Personen oder Gruppen mit Einfluss auf oder Interesse am Projekt." },
      { front: "Project Canvas", back: "Kompakte Uebersicht zentraler Projektbausteine und Anforderungen." },
      { front: "Meilenstein", back: "Wichtiger Zwischenpunkt im Projektverlauf." },
      { front: "Ressourcenmanagement", back: "Planung und Steuerung von Zeit, Budget, Personal und Mitteln." },
      { front: "Risikomanagement", back: "Fruehes Erkennen, Bewerten und Behandeln moeglicher Projektrisiken." },
      { front: "Qualitaetsmanagement", back: "Sicherstellung definierter Standards fuer Projektergebnisse." },
      { front: "Kommunikationsplanung", back: "Festlegung, wer wann welche Informationen erhaelt." },
      { front: "Aenderungsmanagement", back: "Strukturierter Umgang mit Veraenderungen im Projekt." },
      { front: "Projektlebenszyklus", back: "Phasen eines Projekts von Initiierung bis Abschluss." },
      { front: "Anforderungsmanagement", back: "Erfassung, Priorisierung und Pflege von Projektanforderungen." },
      { front: "Zielorientierung", back: "Ausrichtung aller Projektaktivitaeten auf definierte Ergebnisse." }
    ],
    exercises: [
      "Lege fuer ein Marketingprojekt einen kompakten Project Canvas mit Ziel, Scope, Stakeholdern und Risiken an.",
      "Analysiere ein gescheitertes oder schwieriges Projekt nach Scope, Kommunikation und Ressourcen.",
      "Formuliere drei typische Projektrisiken und passende Gegenmassnahmen fuer eine Kampagne."
    ],
    tips: [
      "Wenn Ziele und Scope unscharf sind, wird fast jedes Projekt spaeter teuer.",
      "Kommunikation ist im Projekt kein Nebenprodukt, sondern Fuehrungsarbeit.",
      "Ein gutes Projektmanagement macht Probleme frueh sichtbar, nicht erst am Ende."
    ]
  },
  18: {
    summary:
      "KI im Online Marketing verbindet Prompt Engineering mit praktischer Marketinganwendung. Das Modul behandelt bekannte KI-Tools, einfache und komplexe Prompts, Role und Few-Shot Prompting sowie die Nutzung von KI fuer Produktentwicklung, Marktanalyse, Personas, Budget- und Kanalstrategie sowie Kampagnen- und Contententwicklung.",
    questions: [
      singleQ("Was ist Prompt Engineering?", ["Die bewusste Gestaltung von Eingaben fuer bessere KI-Ergebnisse", "Nur das Programmieren eines Chatbots", "Ausschliesslich Bildbearbeitung", "Das Trainieren eigener Hardware"], 0, "Prompt Engineering verbessert Relevanz, Struktur und Qualitaet von KI-Ausgaben."),
      singleQ("Welche Tool-Gruppe zeigt das Modul konkret?", ["ChatGPT, Gemini, Perplexity, Claude und DeepSeek", "Nur Bildbearbeitungstools", "Nur Office-Programme", "Nur Werbenetzwerke"], 0, "Das Modul vergleicht mehrere gaengige KI-Tools in der Praxis."),
      singleQ("Was ist der Vorteil einfacher Anweisungen?", ["Sie sind direkt und fuer klare Aufgaben oft ausreichend", "Sie sind immer besser als komplexe Prompts", "Sie machen Beispiele ueberfluessig", "Sie ersetzen jede Strategie"], 0, "Nicht jede Aufgabe braucht sofort ein komplexes Prompt-Setup."),
      singleQ("Was bedeutet Role Prompting?", ["Die KI wird in eine bestimmte Rolle gesetzt", "Die KI schreibt nur Rollenbeschreibungen", "Es ist ein Bildformat", "Es bezeichnet nur Prompt-Laenge"], 0, "Die Rolle gibt Perspektive, Ton und Aufgabenrahmen vor."),
      singleQ("Was ist Few-Shot Prompting?", ["Man zeigt der KI Beispiele fuer das gewuenschte Ergebnis", "Man begrenzt die Antwort auf wenige Worte", "Man fragt die KI nur sehr kurz", "Man nutzt mehrere Browserfenster"], 0, "Beispiele helfen der KI, Muster und Qualitaetsanspruch besser zu verstehen."),
      multiQ("Welche Marketingbereiche bearbeitet das Modul mit KI?", ["Produktentwicklung", "Marktanalyse und Strategie", "Zielgruppen und Personas", "Budget und Kanalstrategie"], [0, 1, 2, 3], "Das Modul uebertraegt KI in mehrere strategische Marketingaufgaben."),
      singleQ("Wofuer steht BMC im Modulkontext?", ["Business Model Canvas", "Brand Message Code", "Budget Measurement Cycle", "Basic Market Classification"], 0, "Das BMC dient als Struktur fuer Geschaeftsmodell- und Produktdenken."),
      singleQ("Warum braucht auch ein guter KI-Output menschliche Pruefung?", ["Weil Relevanz, Faktentreue und Markenkontext gesichert werden muessen", "Weil KI nie Text schreiben kann", "Weil KI nur fuer Bilder gedacht ist", "Weil menschliche Kontrolle nur bei SEO gilt"], 0, "KI kann hilfreich sein, aber nicht die Verantwortung abnehmen."),
      multiQ("Welche Prompt-Typen nennt das Modul ausdruecklich?", ["Einfache Anweisungen", "Komplexe Anweisungen", "Role Prompting", "Few Shot Prompting"], [0, 1, 2, 3], "Diese Grundformen bilden den Kern des Moduls."),
      singleQ("Warum sind Kontextangaben in Prompts so wichtig?", ["Weil Ziel, Rolle, Zielgruppe und Rahmenbedingung die Antwort verbessern", "Weil lange Prompts automatisch wahr werden", "Weil Kontext nur fuer Bilder zaehlt", "Weil KI sonst abstuerzt"], 0, "Guter Kontext reduziert Beliebigkeit."),
      singleQ("Wie kann KI bei Personas helfen?", ["Sie kann Informationen strukturieren, Fragen ableiten und erste Hypothesen formulieren", "Sie ersetzt jede Zielgruppenrecherche komplett", "Sie macht Interviews unnoetig", "Sie definiert automatisch das Budget"], 0, "KI kann unterstuetzen, aber nicht reale Marktbeobachtung ersetzen."),
      multiQ("Welche Risiken bestehen bei KI-Nutzung im Marketing?", ["Halluzinationen", "Unpraezise oder generische Ergebnisse", "Verlust von Markenton ohne Briefing", "Jahresabschluss-Prompting"], [0, 1, 2], "Ohne klares Briefing und Pruefung sinkt Qualitaet schnell."),
      openQ("Erklaere, warum ein guter Prompt mehr ist als nur eine Frage.", "Ein guter Prompt beschreibt Ziel, Kontext, Rolle, Zielgruppe, Ausgabeformat und oft auch Qualitaetskriterien. Dadurch wird die Antwort nutzbarer und besser steuerbar."),
      openQ("Wie wuerdest du KI sinnvoll fuer eine Kanal- und Budgetstrategie einsetzen?", "Ich wuerde KI fuer Struktur, Varianten, erste Annahmen und Tabellen nutzen, die Eingaben aber mit echten Zielgruppen-, Kanal- und Kostendaten fuettern und die Ergebnisse kritisch pruefen."),
      openQ("Wann ist KI im Marketing besonders hilfreich und wann besonders gefaehrlich?", "Hilfreich ist sie bei Struktur, Ideen, Varianten und Beschleunigung. Gefaehrlich wird sie bei ungeprueften Fakten, sensiblen Daten, austauschbarem Ton oder zu grossem Vertrauen in scheinbar sichere Antworten.")
    ],
    flashcards: [
      { front: "Prompt Engineering", back: "Bewusste Gestaltung von Eingaben, um KI-Ausgaben gezielt zu verbessern." },
      { front: "ChatGPT", back: "KI-Chatbot fuer Text, Struktur, Analyse und weitere Aufgaben." },
      { front: "Gemini", back: "KI-System von Google fuer Recherche, Text und weitere Anwendungen." },
      { front: "Perplexity", back: "KI-gestuetztes Recherchetool mit staerkerem Such- und Quellenfokus." },
      { front: "Claude", back: "KI-Assistant fuer Textarbeit, Strukturierung und Analyse." },
      { front: "DeepSeek", back: "Weiteres KI-Tool, das im Modul als Praxisbeispiel genannt wird." },
      { front: "Role Prompting", back: "Prompt-Technik, bei der die KI eine bestimmte Rolle einnimmt." },
      { front: "Few-Shot Prompting", back: "Prompt-Technik mit Beispielausgaben als Muster." },
      { front: "Komplexer Prompt", back: "Eingabe mit klaren Vorgaben zu Ziel, Format, Zielgruppe und Kontext." },
      { front: "BMC", back: "Business Model Canvas als Struktur fuer Geschaeftsmodell- und Produktdenken." },
      { front: "Persona", back: "Verdichtetes Zielgruppenprofil mit Beduerfnissen, Verhalten und Motiven." },
      { front: "Kanalstrategie", back: "Systematische Auswahl und Gewichtung passender Marketingkanaele." },
      { front: "Halluzination", back: "Plausibel klingende, aber falsche oder unbelegte KI-Aussage." }
    ],
    exercises: [
      "Schreibe fuer dieselbe Aufgabe einen einfachen Prompt, einen Role Prompt und einen Few-Shot Prompt und vergleiche die Ergebnisse.",
      "Nutze KI gedanklich fuer eine Persona-Erstellung und markiere, welche Teile du mit echten Daten absichern muesstest.",
      "Erstelle einen Prompt fuer eine erste Kanal- und Budgetplanung inklusive Zielgruppe, Zeitraum und Zielhandlung."
    ],
    tips: [
      "Je klarer Ziel, Kontext und Ausgabeformat, desto besser arbeitet KI fuer dich.",
      "KI ist stark bei Beschleunigung und Struktur, aber schwach bei Verantwortung und finaler Wahrheit.",
      "Pruefe jede wichtige KI-Antwort so, als haette sie ein sehr schneller, aber nicht immer zuverlaessiger Praktikant erstellt."
    ]
  }
};

const appModules = window.modules || [];

appModules.forEach((module) => {
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

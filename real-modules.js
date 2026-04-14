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
  "WordPress & Texten fuers Web",
  "Visuals mit Canva & KI",
  "Video-Content mit DaVinci & KI",
  "Analyse & Optimierung",
  "Projektmanagement",
  "KI im Online Marketing",
];

const modules = moduleTopics.map((topic, index) => {
  const module = {
    id: index + 1,
    title: `Modul ${index + 1}`,
    topic,
    summary:
      "Sobald du mir die passende Praesentation gibst, fuelle ich dieses Modul mit einer Zusammenfassung, Quizfragen und praktischen Uebungen.",
    questions: [],
    exercises: [
      {
        title: "Begriffe sammeln",
        text: "Notiere die 5 wichtigsten Begriffe aus diesem Modul und erklaere sie in eigenen Worten.",
      },
      {
        title: "Mini-Zusammenfassung",
        text: "Fasse das Modul in 4 bis 6 Saetzen zusammen, als wuerdest du es einer anderen Person erklaeren.",
      },
    ],
    tips: [
      "Hier kommen spaeter Lernhinweise, Merksaetze oder typische Pruefungsfallen hinein.",
    ],
  };

  if (index === 0) {
    module.summary =
      "Dieses Modul behandelt die Grundlagen der Online-Marketing-Strategie mit Fokus auf das modernere 6P-Denken, ergaenzend zur klassischen 4P-Logik. Dazu kommen Marketing im Wandel, Customer Journey, T-Shaped Marketer und die Bedeutung von Messbarkeit im digitalen Marketing.";
    module.questions = [
      {
        type: "open",
        prompt: "Was versteht man im Modul unter Strategie?",
        sampleAnswer:
          "Strategie wird als grundsaetzliche, langfristige Verhaltensweise eines Unternehmens beschrieben. Sie dient dazu, durch passende Massnahmenkombinationen langfristige Ziele gegenueber der Umwelt zu verwirklichen.",
      },
      {
        type: "multiple",
        prompt: "Welche vier Elemente gehoeren zur klassischen 4P-Marketing-Strategie?",
        options: [
          "Product, Price, Place, Promotion",
          "People, Plan, Price, Performance",
          "Product, Process, Platform, Promotion",
          "Price, Persona, Place, Positioning",
        ],
        correctIndex: 0,
      },
      {
        type: "open",
        prompt: "Warum ist im Modul das 6P-Denken aktueller als die reine 4P-Logik?",
        sampleAnswer:
          "Weil Marketing heute staerker auf Erlebnis, Prozesse, Menschen, Unternehmensidentitaet und weitere Einflussfaktoren schaut. Die 4P bilden die Basis, das modernere 6P- beziehungsweise erweiterte P-Denken greift jedoch die komplexere digitale Realitaet besser auf.",
      },
      {
        type: "open",
        prompt: "Was ist das Ziel der Marketer laut Praesentation, egal welche Strategie gewaehlt wird?",
        sampleAnswer:
          "Das Ziel ist es, das Unternehmen erfolgreich zu machen. Strategie ist also kein Selbstzweck, sondern soll den Unternehmenserfolg unterstuetzen.",
      },
      {
        type: "open",
        prompt: "Welche drei Grundformen der Produktdiversifikation werden genannt?",
        sampleAnswer:
          "Genannt werden horizontale, vertikale und laterale Produktdiversifikation. Horizontal bedeutet ein aehnliches Produkt in derselben Branche, vertikal die Aufnahme bisher zugekaufter Leistungen und lateral Produkte ohne direkten Zusammenhang.",
      },
      {
        type: "multiple",
        prompt: "Welche Preisstrategie startet typischerweise mit einem niedrigen Einstiegspreis und erhoeht diesen spaeter?",
        options: [
          "Abschoepfungsstrategie",
          "Marktdurchdringungsstrategie",
          "Hochpreisstrategie",
          "Kostenfuehrerschaft ohne Einfuehrungspreis",
        ],
        correctIndex: 1,
      },
      {
        type: "open",
        prompt: "Welche drei Vertriebsstrukturen werden im Bereich Place/Distribution unterschieden?",
        sampleAnswer:
          "Die Praesentation unterscheidet die indirekte Struktur, die Multikanal-Struktur und die direkte Struktur beziehungsweise Direct-to-Consumer.",
      },
      {
        type: "open",
        prompt: "Was bedeutet Promotion im Kontext der 4P?",
        sampleAnswer:
          "Promotion umfasst alle Kommunikationsmassnahmen, durch die eine Zielgruppe Informationen ueber ein Produkt erhaelt. Ziel ist es, Verkauf zu foerdern und ein positives Marken- oder Unternehmensimage aufzubauen.",
      },
      {
        type: "open",
        prompt: "Was beschreibt die Customer Journey?",
        sampleAnswer:
          "Die Customer Journey beschreibt, wie Kundinnen und Kunden vom ersten Bedarf oder Kontakt bis zu Kauf, Service und Loyalitaet mit verschiedenen Kanaelen und Beruehrungspunkten interagieren.",
      },
      {
        type: "multiple",
        prompt: "Welche Aussage passt zum T-Shaped Marketer?",
        options: [
          "Er oder sie sollte nur ein einziges Spezialgebiet kennen.",
          "Er oder sie braucht breites Wissen ueber mehrere Disziplinen und zusaetzlich Tiefe in einem oder mehreren Spezialgebieten.",
          "Technisches Verstaendnis ist im Marketing nicht notwendig.",
          "Strategie und Analyse sind Aufgaben, die nichts mit Marketing zu tun haben.",
        ],
        correctIndex: 1,
      },
      {
        type: "open",
        prompt: "Welche Vorteile von digitalem Marketing nennt das Modul?",
        sampleAnswer:
          "Genannt werden vor allem Messbarkeit, mehr Objektivitaet in der Erfolgsbewertung und mehr Planungssicherheit durch gezielte Reichweitenplanung, genauere Zielgruppenansprache und bessere Kostenkontrolle.",
      },
      {
        type: "open",
        prompt: "Warum ist Erfolgsmessung ein fortlaufender Prozess und kein einmaliger Schritt?",
        sampleAnswer:
          "Weil Ziele, Messpunkte, Testlauf, Launch und Auswertung aufeinander aufbauen. Kampagnen werden laufend gemessen, angepasst und fuer kuenftige Optimierungen dokumentiert.",
      },
    ];
    module.exercises = [
      {
        title: "4P auf ein Beispiel anwenden",
        text: "Waehle ein Produkt oder eine Dienstleistung und beschreibe zuerst die 4P. Ergaenze danach, welche weiteren P-Aspekte im moderneren 6P-Denken relevant waeren.",
      },
      {
        title: "Customer Journey skizzieren",
        text: "Zeichne fuer ein Beispielprodukt die Phasen Awareness, Consideration, Purchase, After-Sale und Loyalty mit moeglichen Kontaktpunkten auf.",
      },
      {
        title: "T-Shaped-Profil reflektieren",
        text: "Notiere, welche Marketing-Bereiche du schon gut kannst und in welchen 1 bis 2 Bereichen du Spezialwissen aufbauen willst.",
      },
    ];
    module.tips = [
      "Merke dir die 4P als Basis, aber denke fuer aktuelle Marketingpraxis weiter in Richtung 6P beziehungsweise erweiterte P-Modelle.",
      "Die Customer Journey hilft dir, Marketing nicht nur aus Unternehmenssicht, sondern aus Kundensicht zu denken.",
      "Messbarkeit ist einer der groessten Vorteile von digitalem Marketing und taucht in spaeteren Modulen immer wieder auf.",
    ];
  }

  if (index === 1) {
    module.summary =
      "Dieses Modul behandelt die Grundlagen von Website Marketing: technische Grundlagen des WWW, DNS und Domains, URL- und Domainkonzepte, Zielgruppen und Personas, Customer Journey Mapping, responsives Design, User Experience, Wireframes, das RETURN-Modell sowie CMS, Baukaesten und Hosting.";
    module.questions = [
      {
        type: "open",
        prompt: "Wofuer steht DNS und welche Aufgabe hat es?",
        sampleAnswer:
          "DNS steht fuer Domain Name System. Es uebersetzt Domainnamen in die passende IP-Adresse, damit ein Computer die gewuenschte Website erreichen kann.",
      },
      {
        type: "open",
        prompt: "Wie wird das Domain Name System im Modul vereinfacht erklaert?",
        sampleAnswer:
          "Es wird mit einem Telefonbuch verglichen: Einer Person oder Firma ist eine Nummer zugeordnet, und ueber diese Nummer wird die Verbindung hergestellt. Bei Websites uebernimmt DNS diese Zuordnung zwischen Domain und IP-Adresse.",
      },
      {
        type: "multiple",
        prompt: "Welches Ziel verfolgt ein gutes Domainkonzept besonders?",
        options: [
          "Die Domain soll moeglichst lang und technisch komplex sein.",
          "Die Domain soll einpraegsam, kurz und zur Zielgruppe passend sein.",
          "Die Domain sollte moeglichst viele Sonderzeichen enthalten.",
          "Die Domain ist fuer Auffindbarkeit und Marke weitgehend unwichtig.",
        ],
        correctIndex: 1,
      },
      {
        type: "open",
        prompt: "Welche Kriterien fuer eine gute Domain werden in der Praesentation genannt?",
        sampleAnswer:
          "Genannt werden unter anderem Einpraegsamkeit, moeglichst kurze Schreibweise, Beruecksichtigung von Schreibweisen, Keywords oder sprechende URLs, passende Endungen, lokale Zielgruppenansprache, Vermeidung von Zahlen und Bindestrichen, Markenschutz und Schutz der eigenen Marke durch weitere Endungen.",
      },
      {
        type: "open",
        prompt: "Warum nutzen Unternehmen eine Multi-Domain-Strategie?",
        sampleAnswer:
          "Zum Beispiel fuer zielgruppenspezifische Ansprache, Fokus auf bestimmte Produkte oder Leistungen, Internationalisierung und Sprachraeume, unterschiedliche Pricingstrategien, besseren Markenschutz, mehr Sichtbarkeit in Suchmaschinen und eine bessere Nutzererfahrung.",
      },
      {
        type: "open",
        prompt: "Wofuer koennen Subdomains eingesetzt werden?",
        sampleAnswer:
          "Subdomains koennen unterschiedliche Bereiche trennen, zum Beispiel fuer Blog, Shop, Support, Community, Produktseiten, Karrierebereiche oder APIs.",
      },
      {
        type: "multiple",
        prompt: "Was bedeutet Mobile First?",
        options: [
          "Die Desktop-Version wird zuerst gebaut und dann unveraendert auf Smartphones gezeigt.",
          "Die mobile Version wird als primaere Designgrundlage betrachtet und danach fuer groessere Screens erweitert.",
          "Mobile First bedeutet nur, dass Bilder auf Smartphones angezeigt werden.",
          "Mobile First ist nur fuer Apps relevant, nicht fuer Websites.",
        ],
        correctIndex: 1,
      },
      {
        type: "open",
        prompt: "Worauf sollte man bei der Planung einer responsiven Website achten?",
        sampleAnswer:
          "Wichtig sind unter anderem eine klare Navigation, optimierte Bildgroessen, lesbare Schriftgroessen, Priorisierung der wichtigsten Inhalte auf Mobile, Ueberlegungen zu wirklich noetigen Funktionen je Ansicht und Tests auf gaengigen Geraeten und Bildschirmgroessen.",
      },
      {
        type: "open",
        prompt: "Welche 7 Merkmale von gutem User Experience Design nennt das Modul?",
        sampleAnswer:
          "Genannt werden schnelle Ladezeiten, responsives Design, einfache Navigation, einfache Orientierung, klare Hierarchie der Inhalte, passende Textlaengen sowie Fehlertoleranz und Feedback fuer die Nutzer.",
      },
      {
        type: "open",
        prompt: "Warum sind Wireframes wichtig?",
        sampleAnswer:
          "Wireframes helfen, in kurzer Zeit einen funktionalen Entwurf zu erstellen, fruehes Feedback zu Usability und Struktur einzuholen, schnell zu iterieren und spaeter Design- und Entwicklungsressourcen zu sparen.",
      },
      {
        type: "multiple",
        prompt: "Wofuer steht das RETURN-Modell?",
        options: [
          "Relevance, Engagement, Technology, Usability, Reputation, Narrative",
          "Reach, Efficiency, Trust, Uniformity, Navigation",
          "Reporting, Testing, Updates, Ranking, Traffic, Navigation",
          "Reputation, Experience, Tracking, User Needs",
        ],
        correctIndex: 0,
      },
      {
        type: "open",
        prompt: "Was sind typische Vorteile eines CMS gegenueber einem Website-Baukasten?",
        sampleAnswer:
          "Ein CMS bietet mehr Kontrolle ueber Inhalte und Design, mehr Flexibilitaet, unbegrenztere Anpassungsmoeglichkeiten, bessere SEO-Eingriffe und oft auch mehrsprachige oder individuelle Funktionen.",
      },
      {
        type: "open",
        prompt: "Welche Hosting-Arten werden vorgestellt?",
        sampleAnswer:
          "Vorgestellt werden Shared Hosting, Unmanaged Hosting, Managed Hosting und Cloud Hosting.",
      },
      {
        type: "open",
        prompt: "Welche Merkmale machen gutes Hosting aus?",
        sampleAnswer:
          "Dazu gehoeren starke Serverleistung, genug Bandbreite und Speicher, Auto-Skalierung, schneller Support, hohe Sicherheitsstandards, Backups, Erfahrung mit dem eingesetzten System und eine entwicklerfreundliche Umgebung.",
      },
    ];
    module.exercises = [
      {
        title: "Domainkonzept entwickeln",
        text: "Denke dir fuer ein Beispielunternehmen eine Hauptdomain, 2 sinnvolle Subdomains und optional eine Multi-Domain-Erweiterung aus und begruende deine Wahl.",
      },
      {
        title: "Website-Struktur skizzieren",
        text: "Erstelle fuer ein Projekt eine einfache Sitemap mit Startseite, Unterseiten und Navigationslogik aus Sicht der Zielgruppe.",
      },
      {
        title: "RETURN-Check",
        text: "Nimm eine bekannte Website und bewerte sie kurz nach Relevance, Engagement, Technology, Usability, Reputation und Narrative.",
      },
    ];
    module.tips = [
      "Lerne DNS, Domain, URL, Subdomain und Hosting sauber auseinanderzuhalten.",
      "Bei Website Marketing geht es nicht nur um Design, sondern stark um Struktur, Nutzerfuehrung und Technik.",
      "RETURN ist eine gute Denkstruktur, um Websites schnell systematisch zu bewerten.",
    ];
  }

  if (index === 2) {
    module.summary =
      "Dieses Modul behandelt die rechtlichen Grundlagen im Online Marketing: rechtssichere Domainwahl, Impressumspflichten, Datenschutz nach DSGVO, Einwilligung und Datenverarbeitung, Markenrecht, Irrefuehrung, Schleichwerbung, E-Mail-Werbung, Aeusserungsrecht, Haftung fuer Inhalte und rechtliche Grenzen bei Werbeformen.";
    module.questions = [
      {
        type: "open",
        prompt: "Welche rechtlichen Risiken sind bei der Wahl einer Domain besonders zu beachten?",
        sampleAnswer:
          "Vor allem Markenrechte, Unternehmensnamen, Titelschutz, prominente Namen, Ortsnamen, unzulaessige Werbeaussagen und Tippfehler-Domains. Die Domain darf keine fremden Rechte verletzen.",
      },
      {
        type: "open",
        prompt: "Was ist das UDRP-Verfahren?",
        sampleAnswer:
          "Die UDRP ist ein von der ICANN entwickeltes Schlichtungsverfahren fuer Domainstreitigkeiten. Es soll eine einfache und kostenguenstige Loesung bei Konflikten um Domainnamen ermoeglichen.",
      },
      {
        type: "open",
        prompt: "Welche drei Punkte muss ein Antragsteller in einem UDRP-Verfahren nachweisen?",
        sampleAnswer:
          "Er muss nachweisen, dass der Domainname identisch oder verwechslungsfaehig aehnlich zu einer geschuetzten Marke ist, dass der Registrant keine Rechte oder berechtigten Interessen daran hat und dass die Domain boesglaeubig verwendet wird.",
      },
      {
        type: "multiple",
        prompt: "Was beschreibt Cybersquatting?",
        options: [
          "Die Nutzung einer Domain fuer private Zwecke ohne Geschaeftsbezug",
          "Die Registrierung bekannter Marken- oder Unternehmensnamen als Domain, um sie dem Rechteinhaber zum Kauf anzubieten",
          "Das technische Ueberpruefen von Domains auf Ladezeit",
          "Die rechtmaessige Verwaltung vieler eigener Produktdomains",
        ],
        correctIndex: 1,
      },
      {
        type: "open",
        prompt: "Wann ist ein Impressum im Online Marketing grundsaetzlich noetig?",
        sampleAnswer:
          "Bei jeder geschäftsmäßigen Praesentation im Internet, zum Beispiel auf Websites oder Social-Media-Profilen mit wirtschaftlichem Hintergrund. Private Homepages und manche gemeinnuetzige Angebote koennen Ausnahmen sein.",
      },
      {
        type: "open",
        prompt: "Welche Angaben gehoeren typischerweise in ein Impressum?",
        sampleAnswer:
          "Vollstaendiger Name, Anschrift, bei juristischen Personen Rechtsform und vertretungsberechtigte Personen, Kontaktmoeglichkeiten wie E-Mail und Telefonnummer sowie je nach Fall Registerangaben, Umsatzsteuer-ID, Behoerdenangaben oder redaktionell Verantwortliche.",
      },
      {
        type: "open",
        prompt: "Was gilt fuer das Impressum in sozialen Netzwerken?",
        sampleAnswer:
          "Es muss leicht erkennbar, unmittelbar erreichbar und staendig verfuegbar sein. Praktisch bedeutet das oft eine gut sichtbare Verlinkung, die auch mobil erreichbar ist und klar als Impressum erkennbar sein muss.",
      },
      {
        type: "open",
        prompt: "Was sind personenbezogene Daten nach DSGVO?",
        sampleAnswer:
          "Das sind alle Angaben, die sich auf eine identifizierte oder identifizierbare natuerliche Person beziehen, zum Beispiel Name, Anschrift, E-Mail, Telefonnummer, IP-Adresse, Standortdaten oder Kundendaten.",
      },
      {
        type: "open",
        prompt: "Was versteht man unter dem Verbotsgesetz mit Erlaubnisvorbehalt im Datenschutz?",
        sampleAnswer:
          "Die Verarbeitung personenbezogener Daten ist grundsaetzlich verboten, es sei denn, es gibt einen gueltigen Erlaubnistatbestand wie Einwilligung, Vertragserfuellung, rechtliche Pflicht, lebenswichtige Interessen, oeffentliches Interesse oder berechtigtes Interesse.",
      },
      {
        type: "multiple",
        prompt: "Welches Verfahren ist laut Modul rechtssicher fuer den Nachweis einer Einwilligung in E-Mail-Werbung?",
        options: [
          "Opt-In",
          "Confirmed Opt-In",
          "Double Opt-In",
          "Stillschweigende Zustimmung",
        ],
        correctIndex: 2,
      },
      {
        type: "open",
        prompt: "Warum reichen Opt-In und Confirmed Opt-In als Nachweis oft nicht aus?",
        sampleAnswer:
          "Weil damit nicht sicher nachgewiesen werden kann, dass der Inhaber der E-Mail-Adresse die Eintragung selbst vorgenommen hat. Es besteht Missbrauchsgefahr durch Dritte.",
      },
      {
        type: "open",
        prompt: "Wann ist Werbung irrefuehrend?",
        sampleAnswer:
          "Wenn sie Verbraucher ueber wesentliche Umstaende taeuscht, etwa durch falsche Preisvorteile, befristete Rabatte, die in Wahrheit weiterlaufen, oder durch missverstaendliche oder objektiv nicht belegbare Aussagen.",
      },
      {
        type: "open",
        prompt: "Was sind Pruefsiegel oder Guetesiegel im rechtlichen Sinn?",
        sampleAnswer:
          "Das sind Kennzeichnungen, die auf einer objektiven Pruefung durch eine neutrale und fachkundige Stelle beruhen und belegen sollen, dass bestimmte Mindestanforderungen oder Qualitaetskriterien eingehalten wurden.",
      },
      {
        type: "open",
        prompt: "Was ist der Unterschied zwischen Meinung und Tatsachenbehauptung im Aeusserungsrecht?",
        sampleAnswer:
          "Meinungen sind subjektive Werturteile und grundsaetzlich geschuetzt. Tatsachenbehauptungen beziehen sich auf objektiv ueberpruefbare Umstaende; unwahre Tatsachenbehauptungen sind in der Regel unzulaessig.",
      },
      {
        type: "open",
        prompt: "Wann haftet ein Webseitenbetreiber fuer fremde Inhalte oder Verlinkungen?",
        sampleAnswer:
          "Wenn das Setzen des Links eine geschäftliche Handlung ist, sich der Betreiber die Inhalte zu Eigen macht oder von der Rechtswidrigkeit weiss und zumutbare Pruefpflichten verletzt.",
      },
      {
        type: "multiple",
        prompt: "Wann koennen Pop-ups wettbewerbsrechtlich problematisch werden?",
        options: [
          "Immer, weil jede Werbung unzulaessig ist",
          "Nur wenn sie bunt gestaltet sind",
          "Wenn sie nicht ohne grossen Aufwand geschlossen werden koennen oder staendig neue Pop-ups erscheinen",
          "Nur auf mobilen Endgeraeten",
        ],
        correctIndex: 2,
      },
      {
        type: "open",
        prompt: "Unter welchen Bedingungen kann Brand Bidding mit fremden Markennamen zulaessig sein?",
        sampleAnswer:
          "Die Anzeige muss klar von den Suchtreffern getrennt und gekennzeichnet sein. Der fremde Markenname darf nicht in der Anzeige auftauchen und es darf keine irrefuehrende Verbindung zum Markeninhaber hergestellt werden.",
      },
    ];
    module.exercises = [
      {
        title: "Impressum pruefen",
        text: "Nimm eine Unternehmenswebsite oder ein Social-Media-Profil und pruefe, ob das Impressum leicht erkennbar, direkt erreichbar und inhaltlich vollstaendig ist.",
      },
      {
        title: "Datenschutz-Fallbeispiel",
        text: "Ueberlege fuer ein Online-Formular, welche personenbezogenen Daten erhoben werden, auf welcher Rechtsgrundlage das geschehen darf und ob wirklich alle Felder noetig sind.",
      },
      {
        title: "Rechtlicher Werbecheck",
        text: "Bewerte eine Rabattaktion, Newsletter-Anmeldung oder Pop-up-Werbung danach, ob sie eher unbedenklich oder rechtlich riskant ist, und begruende deine Einschaetzung.",
      },
    ];
    module.tips = [
      "Im Recht ist oft entscheidend, ob etwas klar nachweisbar, transparent und fuer Nutzer nicht irrefuehrend ist.",
      "Praege dir fuer E-Mail-Werbung besonders das Double-Opt-In ein.",
      "Trenne bei Fragen zum Aeusserungsrecht immer sauber zwischen Meinung und Tatsachenbehauptung.",
    ];
  }

  if (index === 3) {
    module.summary =
      "Dieses Modul behandelt die Grundlagen des Content Marketings: Abgrenzung zu klassischer Werbung, Nutzen und Wirkung von Content, Core Story und Golden Circle, Zielgruppen und Personas, Storytelling, Content Wheel, AIDA, Content-Pillars, Redaktionsplanung, Community-Aufbau und Erfolgsmessung.";
    module.questions = [
      {
        type: "open",
        prompt: "Wie wird Content Marketing im Modul definiert?",
        sampleAnswer:
          "Als informative, beratende und unterhaltsame Inhalte, mit denen eine Zielgruppe vom Unternehmen ueberzeugt werden soll.",
      },
      {
        type: "open",
        prompt: "Worin liegt der zentrale Unterschied zwischen Werbung und Content Marketing?",
        sampleAnswer:
          "Werbung unterbricht und verkauft direkt, waehrend Content Marketing mit relevanten Inhalten Mehrwert bietet, Vertrauen aufbaut und die Zielgruppe ueberzeugt.",
      },
      {
        type: "multiple",
        prompt: "Welchen Nutzen von Content Marketing nennt die Praesentation ausdruecklich?",
        options: [
          "Weniger Sichtbarkeit in Suchmaschinen",
          "Mehr Leads bei geringeren Kosten",
          "Content ersetzt jede andere Marketingform vollstaendig",
          "Content funktioniert nur mit sehr hohen Mediabudgets",
        ],
        correctIndex: 1,
      },
      {
        type: "open",
        prompt: "Warum ist Content Marketing kein kurzfristiges Einmalprojekt?",
        sampleAnswer:
          "Weil nach Learning und Setup ein laufender redaktioneller Betrieb entsteht. Content Marketing ist ein kontinuierlicher Prozess und nie wirklich fertig.",
      },
      {
        type: "open",
        prompt: "Was ist die Core Story einer Marke?",
        sampleAnswer:
          "Die Core Story ist die Leitidee der Marke. Von ihr ausgehend werden Inhalte und Markenstories fuer die Nutzer entwickelt.",
      },
      {
        type: "open",
        prompt: "Welche Frage steht laut Modul hinter der Entwicklung einer Leitidee?",
        sampleAnswer:
          "Die zentrale Frage ist das Warum. Sie fuehrt zum Sinn und Zweck der Marke und bildet die Basis der Core Story.",
      },
      {
        type: "multiple",
        prompt: "Welche drei Ebenen umfasst der Golden Circle nach Simon Sinek?",
        options: [
          "Who, When, Where",
          "Traffic, Leads, Sales",
          "What, How, Why",
          "Reach, Relevance, Revenue",
        ],
        correctIndex: 2,
      },
      {
        type: "open",
        prompt: "Warum sind Zielgruppen und Personas im Content Marketing so wichtig?",
        sampleAnswer:
          "Weil Inhalte nur dann relevant wirken, wenn sie auf konkrete Beduerfnisse, Motivationen und Pain Points bestimmter Personen zugeschnitten sind.",
      },
      {
        type: "open",
        prompt: "Was beschreibt das Content Wheel?",
        sampleAnswer:
          "Es zeigt, dass aus der Core Story Inhalte und Distribution Channels abgeleitet werden. Die Leitidee steuert also Inhalt und Ausspielung.",
      },
      {
        type: "open",
        prompt: "Wofuer kann die AIDA-Formel im Content Marketing genutzt werden?",
        sampleAnswer:
          "Sie hilft dabei, wiederkehrende Inhalte logisch aufzubauen, zum Beispiel ueber Aufmerksamkeit, Interesse, Wunsch und Handlungsaufforderung.",
      },
      {
        type: "open",
        prompt: "Welche Schritte fuehren laut Modul von der ersten Idee zum fertigen Content?",
        sampleAnswer:
          "Ideensammlung, Content Pillars, Redaktionsplan, Erstellung der Creatives oder Designs und anschliessend Posting oder Scheduling.",
      },
      {
        type: "multiple",
        prompt: "Wozu dienen Content Pillars?",
        options: [
          "Sie ersetzen die Zielgruppendefinition vollstaendig.",
          "Sie strukturieren Themenbereiche und helfen, Ideen systematisch zu planen.",
          "Sie sind nur fuer bezahlte Werbung relevant.",
          "Sie beschreiben ausschliesslich Designfarben.",
        ],
        correctIndex: 1,
      },
      {
        type: "open",
        prompt: "Warum ist ein Redaktionsplan wichtig?",
        sampleAnswer:
          "Er bringt Struktur in Themen, Formate und Zeitpunkte, erleichtert Abstimmungen und sorgt dafuer, dass Content regelmaessig und zielgerichtet veroeffentlicht wird.",
      },
      {
        type: "open",
        prompt: "Welche Rolle spielt Community-Aufbau im Content Marketing laut Modul?",
        sampleAnswer:
          "Dialog ist wichtiger als reine Likes. Es geht darum, Beziehungen aufzubauen, auf Menschen einzugehen, zuzuhören, nachzufragen und echte Verbindungen zu schaffen.",
      },
      {
        type: "open",
        prompt: "Wie kann Content Marketing gemessen werden?",
        sampleAnswer:
          "Zum Beispiel ueber Audience-Daten, Reichweite, Interaktionen, Views, Follower-Entwicklung und die Performance einzelner Inhalte.",
      },
    ];
    module.exercises = [
      {
        title: "Golden Circle ausfuellen",
        text: "Formuliere fuer ein Beispielunternehmen die drei Ebenen What, How und Why und leite daraus eine erste Core Story ab.",
      },
      {
        title: "Content Pillars bauen",
        text: "Definiere 3 bis 5 Themenbereiche fuer ein Projekt und notiere zu jedem Bereich erste konkrete Post-Ideen.",
      },
      {
        title: "Redaktionsplan skizzieren",
        text: "Plane eine Woche Content mit Format, Thema, Ziel und passendem Kanal in einer einfachen Tabelle.",
      },
    ];
    module.tips = [
      "Content Marketing wird stark, wenn es aus einer klaren Leitidee heraus gedacht wird.",
      "Merke dir den Unterschied zwischen Core Story, Content Pillars und Redaktionsplan.",
      "Nicht jeder gute Inhalt verkauft sofort, aber guter Content baut Relevanz und Vertrauen auf.",
    ];
  }

  if (index === 4) {
    module.summary =
      "Dieses Modul behandelt Social Media Marketing von den Grundlagen bis zur Kanalstrategie: Social Media als Web-2.0-Kommunikation, Ziele und Einsatzbereiche, Chancen und Risiken, 7 Pfeiler der Strategie, SMART-Ziele, Post-Formate, Algorithmen, Corporate Influencer, Kampagnen, Kanalwahl, Ressourcenplanung und Reporting.";
    module.questions = [
      {
        type: "open",
        prompt: "Was unterscheidet Web 2.0 von Web 1.0 im Kontext Social Media?",
        sampleAnswer:
          "Im Web 1.0 wurden Inhalte vor allem gelesen, die Kommunikation war eher einseitig. Im Web 2.0 koennen Nutzer Inhalte mitgestalten, veroeffentlichen und direkt in den Austausch treten.",
      },
      {
        type: "open",
        prompt: "Wie wird Social Media im Modul definiert?",
        sampleAnswer:
          "Als Oberbegriff fuer Medien, in denen Internetnutzer Meinungen, Eindruecke, Erfahrungen oder Informationen austauschen und Wissen sammeln.",
      },
      {
        type: "multiple",
        prompt: "Welche drei uebergeordneten Ziele von Social Media werden frueh im Modul genannt?",
        options: [
          "Dialog, Beziehung, Wertschoepfung",
          "Rabatt, Reichweite, Remarketing",
          "Content, Conversion, Coding",
          "Traffic, Technik, Tracking",
        ],
        correctIndex: 0,
      },
      {
        type: "open",
        prompt: "Welche Einsatzbereiche von Social Media nennt die Praesentation?",
        sampleAnswer:
          "Zum Beispiel Marketing, Vertrieb, PR, Service und HR. Darunter fallen etwa Brand-Marketing, Social PR, Social Customer Care, Employer Branding oder Social Recruiting.",
      },
      {
        type: "open",
        prompt: "Welche weiteren Ziele von Social Media werden genannt?",
        sampleAnswer:
          "Unter anderem Reichweite und Sichtbarkeit, Image, Traffic, Monitoring, Networking, Relations, Direct Selling und Feedback.",
      },
      {
        type: "open",
        prompt: "Welche Herausforderungen und Probleme bringt Social Media Marketing mit sich?",
        sampleAnswer:
          "Zum Beispiel schwierige Erfolgsmessung qualitativer Ziele, fehlende Kompetenzen oder Ressourcen, rechtliche Komplikationen, Angst vor Kritik und staendige Veraenderungen der Plattformen.",
      },
      {
        type: "multiple",
        prompt: "Wofuer schafft eine Social-Media-Strategie laut Modul vor allem einen Nutzen?",
        options: [
          "Sie macht Content-Produktion unnoetig.",
          "Sie schafft Wiedererkennungswert und Struktur.",
          "Sie ersetzt Zielgruppenarbeit vollstaendig.",
          "Sie ist nur fuer bezahlte Kampagnen relevant.",
        ],
        correctIndex: 1,
      },
      {
        type: "open",
        prompt: "Welche 7 Pfeiler einer Social-Media-Strategie werden genannt?",
        sampleAnswer:
          "Einleitung, IST-Analyse, Zielsetzung, Strategie, Massnahmen, Kosten und Anhang.",
      },
      {
        type: "open",
        prompt: "Warum sind SMART-Ziele in Social Media sinnvoll?",
        sampleAnswer:
          "Weil sie Ziele spezifisch, messbar, attraktiv beziehungsweise ausfuehrbar, realistisch und terminiert machen. Dadurch werden Planung und Erfolgskontrolle klarer.",
      },
      {
        type: "open",
        prompt: "Welche Post-Formate werden als besonders wichtig hervorgehoben?",
        sampleAnswer:
          "Vor allem Reel, Carousel und Bild-Post.",
      },
      {
        type: "open",
        prompt: "Welche Merkmale machen einen guten Social-Media-Post aus?",
        sampleAnswer:
          "Ein gutes Posting hat ein klares Thema und Ziel, ist einfach und kurz, zeigt Emotionen, spricht aus menschlicher Perspektive und nutzt bei Bedarf einen passenden Call-to-Action.",
      },
      {
        type: "open",
        prompt: "Was ist ein Corporate Influencer beziehungsweise PCI laut Modul?",
        sampleAnswer:
          "Ein Mensch als Absender der Markenkommunikation, der interpersonell kommuniziert, Community aufbaut und die Marke authentisch in sozialen Medien repraesentiert.",
      },
      {
        type: "open",
        prompt: "Welche Vorteile bietet Corporate Influencer Marketing?",
        sampleAnswer:
          "Es kann Reichweiten steigern, Trust aufbauen, die Arbeitgebermarke staerken, Awareness erhoehen und durch persoenliche Naehe authentischer wirken.",
      },
      {
        type: "multiple",
        prompt: "Was ist laut Modul bei der Kanalstrategie besonders wichtig?",
        options: [
          "Moeglichst auf allen Kanaelen gleichzeitig aktiv sein",
          "Lieber wenige passende Kanaele gut bespielen als viele schlecht",
          "Nur den groessten Kanal nach Nutzerzahl auswaehlen",
          "Jeden Content identisch auf allen Plattformen posten",
        ],
        correctIndex: 1,
      },
      {
        type: "open",
        prompt: "Warum ist Ressourcenplanung im Social Media Marketing wichtig?",
        sampleAnswer:
          "Weil Aufwand fuer Content, Community, Prozesse, Reporting und Abstimmung oft unterschaetzt wird. Eine realistische Planung hilft, Rollen, Zeit und Budget sauber zu verteilen.",
      },
      {
        type: "open",
        prompt: "Welche Bereiche gehoeren zur Ressourcen- und Prozessplanung?",
        sampleAnswer:
          "Dazu gehoeren Strategie, Fuehrung, Controlling und Prozesse sowie Fragen nach Faehigkeiten, Rollen, Verantwortlichkeiten, Reportings und abteilungsuebergreifender Zusammenarbeit.",
      },
    ];
    module.exercises = [
      {
        title: "SMART-Ziele formulieren",
        text: "Definiere fuer ein Beispielunternehmen 3 konkrete SMART-Ziele fuer Social Media, zum Beispiel zu Reichweite, Interaktion oder Traffic.",
      },
      {
        title: "Kanalstrategie ableiten",
        text: "Waehle fuer ein Produkt 2 passende Social-Media-Kanaele aus und begruende die Auswahl mit Zielgruppe, Content-Formen und Halbwertzeit der Inhalte.",
      },
      {
        title: "Mini-Kampagne planen",
        text: "Skizziere eine kleine Social-Media-Kampagne mit Ziel, Zeitraum, Phasen, Kernidee und moeglichen Assets.",
      },
    ];
    module.tips = [
      "Social Media ist kein Selbstlaeufer, sondern braucht klare Ziele, passende Kanaele und saubere Prozesse.",
      "Praege dir die 7 Pfeiler der Strategie und die SMART-Logik gut ein.",
      "Lieber wenige Kanaele hochwertig bespielen als ueberall halb aktiv sein.",
    ];
  }

  if (index === 5) {
    module.summary =
      "Dieses Modul behandelt Suchmaschinenoptimierung von den Grundlagen bis zu Spezialthemen: SEO, SEM und SEA, SERPs, GEO, Funktionsweise von Suchmaschinen, Crawling, Indexierung, Ranking, Rankingfaktoren, Ziele von SEO, OnPage und OffPage, Local SEO, Relaunch, Reporting sowie Amazon SEO, YouTube SEO, Bing SEO und Voice Search.";
    module.questions = [
      {
        type: "open",
        prompt: "Wie wird SEO im Modul definiert?",
        sampleAnswer:
          "SEO umfasst alle technischen und inhaltlichen Massnahmen auf Webseiten, mit deren Hilfe Rankings in den SERPs verbessert werden sollen. Es ist ein Teilgebiet des Suchmaschinenmarketings.",
      },
      {
        type: "multiple",
        prompt: "Wie verhalten sich SEO, SEM und SEA zueinander?",
        options: [
          "SEO ist ein Teil von SEM, SEA ist die bezahlte Positionierung innerhalb von SEM.",
          "SEM ist ein Teil von SEO und SEA.",
          "SEO und SEA bedeuten dasselbe.",
          "SEA ist nur ein anderes Wort fuer SERP.",
        ],
        correctIndex: 0,
      },
      {
        type: "open",
        prompt: "Was ist eine SERP?",
        sampleAnswer:
          "SERP steht fuer Search Engine Results Page, also die Suchergebnisseite einer Suchmaschine.",
      },
      {
        type: "open",
        prompt: "Was bedeutet GEO und worin unterscheidet es sich von klassischem SEO?",
        sampleAnswer:
          "GEO steht fuer Generative Engine Optimization. Im Unterschied zu klassischem SEO geht es nicht primaer um blaue Links in Suchmaschinen, sondern darum, von KI-Systemen direkt als vertrauenswuerdige Antwortquelle zitiert zu werden.",
      },
      {
        type: "open",
        prompt: "Welche Aufgaben haben Suchmaschinen grundsaetzlich?",
        sampleAnswer:
          "Sie erstellen und pflegen einen Index, verarbeiten Suchanfragen, finden und sortieren relevante Ergebnisse und bereiten diese nutzerorientiert auf.",
      },
      {
        type: "open",
        prompt: "Wie funktionieren Suchmaschinen in den Grundschritten laut Modul?",
        sampleAnswer:
          "Vereinfacht ueber Crawling, Indexierung und Ranking. Seiten werden gefunden, verstanden und im Index gespeichert, bevor sie fuer Suchanfragen eingeordnet werden koennen.",
      },
      {
        type: "multiple",
        prompt: "Was passiert bei der Indexierung?",
        options: [
          "Google verkauft Werbeplaetze an Webseitenbetreiber.",
          "Google versucht zu verstehen, worum es auf einer Seite geht, und speichert die Informationen im Index.",
          "Nutzer bewerten manuell jede Unterseite.",
          "Die Website wird automatisch in Social Media gepostet.",
        ],
        correctIndex: 1,
      },
      {
        type: "open",
        prompt: "Welche Faktoren nennt das Modul beispielhaft als Google-Rankingfaktoren?",
        sampleAnswer:
          "Zum Beispiel Core Web Vitals und Ladezeit, HTTPS, technische Auslesbarkeit, Content-Qualitaet und Suchintention, Keywords, aktuelle Inhalte, interne Verlinkung, Backlinks, Mobilfreundlichkeit, E-E-A-T, Usersignale und User Experience.",
      },
      {
        type: "open",
        prompt: "Welche Ziele von SEO werden hervorgehoben?",
        sampleAnswer:
          "Vor allem die Erhoehung relevanter Sichtbarkeit in der Google Suche, die Steigerung des organischen Traffics und die Steigerung organischer Conversions.",
      },
      {
        type: "open",
        prompt: "Welche typischen Elemente gehoeren zur OnPage-Optimierung laut Modul?",
        sampleAnswer:
          "Zum Beispiel saubere URLs, Meta Title, Meta Description, Rich Snippets, technische Auslesbarkeit, interne Verlinkung und hochwertiger Content passend zur Suchintention.",
      },
      {
        type: "open",
        prompt: "Wofuer dienen interne Verlinkungen?",
        sampleAnswer:
          "Sie helfen Nutzern und Suchmaschinen bei Orientierung, Struktur und Themenverstaendnis und koennen wichtige Seiten innerhalb einer Website staerken.",
      },
      {
        type: "multiple",
        prompt: "Was beschreibt Local SEO?",
        options: [
          "Optimierung ausschliesslich fuer internationale Maerkte",
          "Optimierung einer Website fuer lokale Suchergebnisse",
          "Die bezahlte Schaltung lokaler Anzeigen",
          "Nur die Optimierung von Google Maps Bildern",
        ],
        correctIndex: 1,
      },
      {
        type: "open",
        prompt: "Wofuer steht NAP im Local SEO?",
        sampleAnswer:
          "NAP steht fuer Name, Address und Phone. Diese Angaben sollten ueber alle Eintraege im Web hinweg konsistent sein.",
      },
      {
        type: "open",
        prompt: "Warum ist ein Relaunch aus SEO-Sicht heikel?",
        sampleAnswer:
          "Weil ein Relaunch Chancen fuer bessere Struktur und Technik bietet, aber auch gute Rankings verlieren kann, wenn wichtige SEO-Aspekte nicht sauber uebernommen werden.",
      },
      {
        type: "open",
        prompt: "Welche besondere Rolle spielen 301-Redirects beim Relaunch?",
        sampleAnswer:
          "Sie leiten alte URLs dauerhaft auf neue Adressen um, damit Nutzer und Suchmaschinen Inhalte weiterhin finden und bestehende SEO-Signale moeglichst erhalten bleiben.",
      },
      {
        type: "open",
        prompt: "Welche KPIs werden fuer SEO besonders genannt?",
        sampleAnswer:
          "Zum Beispiel Sichtbarkeitsindex, organischer Traffic, Keyword-Rankings, Conversions, Verweildauer, Backlinks und je nach Website-Typ weitere Kennzahlen wie Umsatz oder Lead-Fokus.",
      },
      {
        type: "multiple",
        prompt: "Welche Aussage passt zu Voice Search?",
        options: [
          "Voice Search arbeitet nur mit einzelnen Shorttail-Keywords.",
          "Voice Search bevorzugt oft laengere, natuerliche Suchanfragen und klar verstaendliche Antworten.",
          "Voice Search ist fuer SEO voellig irrelevant.",
          "Voice Search funktioniert nur ohne HTTPS.",
        ],
        correctIndex: 1,
      },
    ];
    module.exercises = [
      {
        title: "Mini-SEO-Check",
        text: "Pruefe eine Website auf logischen Aufbau, klare Seitenthemen, Suchintention, Nutzerfreundlichkeit und Responsivitaet.",
      },
      {
        title: "Local-SEO-Beispiel",
        text: "Erarbeite fuer ein lokales Unternehmen 5 konkrete Local-SEO-Massnahmen, zum Beispiel rund um Google Business Profile, NAP und lokale Landingpages.",
      },
      {
        title: "Relaunch-Risiken sammeln",
        text: "Notiere, welche SEO-Risiken bei einem Website-Relaunch auftreten koennen und welche Rolle Redirects und Massnahmenplan dabei spielen.",
      },
    ];
    module.tips = [
      "Merke dir die Grundlogik Crawling, Indexierung, Ranking sehr sauber.",
      "Trenne im Kopf organische SEO-Massnahmen klar von SEA.",
      "Local SEO, Relaunch und Voice Search sind typische Prüfungsfelder, weil sie praxisnah sind.",
    ];
  }

  return module;
});

window.LERN_THEMEN = window.LERN_THEMEN || [];
window.LERN_THEMEN.push({
  id: "prompt-werkstatt",
  titel: "Prompt-Werkstatt",
  untertitel: "KI-Werkzeuge im Marketing-Alltag richtig nutzen",
  beschreibung: "Wie gute Prompts aufgebaut sind, welche Techniken wirklich helfen, fertige Vorlagen für Blog, SEO, Newsletter, Social und Bilder, eigene Assistenten und sauberer Datenschutz in der Kanzlei.",
  farbe: "#0891b2",
  quelle: "Eigene Online-Recherche, Stand 16.11.2026: Prompt-Leitfäden von Anthropic, OpenAI und Google, OpenAI-Hilfe zu Datenkontrollen und GPTs, Fachpresse zur Umstellung von Custom GPTs, BRAK-Hinweise zum KI-Einsatz. Produktdetails ändern sich schnell, im Zweifel im Werkzeug selbst nachsehen.",

  berichte: [
    {
      titel: "Gute Prompts bauen: Aufbau und Techniken",
      html:
        "<p>Ein Prompt ist ein Arbeitsauftrag. Die Leitfäden von Anthropic, OpenAI und Google sagen im Kern dasselbe: Je klarer der Auftrag, desto besser das Ergebnis. Die KI kennt weder deine Kanzlei noch deine Zielgruppe noch deinen Stil, außer du sagst es ihr.</p>" +

        "<h3>Der Kollegen-Test</h3>" +
        "<p>Anthropic empfiehlt einen einfachen Test: Zeig deinen Prompt einer Kollegin, die nichts über die Aufgabe weiß. Wäre sie verwirrt, ist es die KI auch. Stell dir die KI als neue, sehr fähige Mitarbeiterin am ersten Tag vor.</p>" +

        "<h3>Die fünf Bausteine</h3>" +
        "<ul>" +
        "<li><strong>Rolle:</strong> Aus welcher Perspektive soll geschrieben werden? „Du bist Redakteurin für eine Kanzlei-Website.“ Ein Satz reicht. Anthropic rät inzwischen, Rollen eher knapp zu halten und lieber die gewünschte Perspektive zu beschreiben als eine aufwendige Persona.</li>" +
        "<li><strong>Kontext:</strong> Für wen ist der Text, wo erscheint er, was ist das Ziel, was gibt es schon? Hier steckt meist der größte Hebel. Auch das <em>Warum</em> hilft: Erklärst du den Grund einer Regel, kann die KI sie sinnvoll anwenden.</li>" +
        "<li><strong>Aufgabe:</strong> Ein klares Verb („Schreibe“, „Kürze“, „Prüfe“, „Erstelle drei Varianten“). Sag, was getan werden soll, nicht nur, was vorgeschlagen werden könnte.</li>" +
        "<li><strong>Format:</strong> Länge, Gliederung, Zeichenlimits, Tonalität, Ausgabe als Tabelle oder Fließtext. Formuliere positiv: „Schreibe in Absätzen“ wirkt besser als „keine Aufzählungen“.</li>" +
        "<li><strong>Beispiele:</strong> Ein guter Musterabsatz, eine frühere Betreffzeile, ein Post, der gut lief. Beispiele steuern Ton und Form oft zuverlässiger als jede Beschreibung.</li>" +
        "</ul>" +
        "<p>Google nennt in seinem Gemini-Leitfaden für Workspace vier Bereiche: <strong>Persona, Aufgabe, Kontext, Format</strong>. Man muss nicht alle nutzen, aber einige davon verbessern das Ergebnis deutlich. Laut Google lagen die erfolgreichsten Prompts im Test 2024 im Schnitt bei etwa 21 Wörtern. Kurz ist also erlaubt, solange das Wichtige drinsteht.</p>" +

        "<h3>Technik 1: Few-Shot (Beispiele zeigen)</h3>" +
        "<p>Statt nur zu beschreiben, gibst du ein bis mehrere Beispiele mit. Anthropic empfiehlt 3 bis 5 Beispiele, die nah am echten Fall sind, sich untereinander unterscheiden und klar vom Auftrag getrennt sind (etwa mit Markierungen wie &lt;beispiel&gt; … &lt;/beispiel&gt; oder einer Überschrift „Beispiele“). Wichtig: Die KI übernimmt auch ungewollte Muster. Sind alle Beispiele gleich lang oder beginnen gleich, kopiert sie das.</p>" +

        "<h3>Technik 2: Schritt für Schritt</h3>" +
        "<p>Bei kniffligen Aufgaben hilft es, die KI erst denken und dann antworten zu lassen. Einfach: „Geh Schritt für Schritt vor.“ Besser: die Schritte selbst vorgeben („Erst die Suchintention bestimmen, dann die Gliederung, dann den Text“). Viele aktuelle Modelle haben einen eigenen Denkmodus, den du einschalten kannst. Große Aufgaben teilst du am besten in mehrere Prompts nacheinander auf (<strong>Prompt-Ketten</strong>): Gliederung, Freigabe, Text, Prüfung.</p>" +

        "<h3>Technik 3: Kritik-Schleife</h3>" +
        "<p>Lass die KI ihren eigenen Entwurf gegen klare Kriterien prüfen und überarbeiten: „Prüfe deinen Text gegen diese fünf Punkte, nenne die Schwächen und liefere dann eine verbesserte Fassung.“ Anthropic beschreibt genau dieses Muster: Entwurf, Prüfung gegen Kriterien, Überarbeitung. Es ersetzt deine eigene Prüfung nicht, fängt aber viele Schwächen vorher ab.</p>" +

        "<h3>Technik 4: Vorlagen</h3>" +
        "<p>Was du öfter brauchst, legst du als Vorlage mit Platzhaltern in [eckigen Klammern] ab. So bleiben Ton und Qualität gleich, und du sparst Zeit. Die Prompt-Bibliothek in diesem Thema ist so aufgebaut.</p>" +

        "<h3>Weitere Kniffe aus den Leitfäden</h3>" +
        "<ul>" +
        "<li><strong>Lange Texte oben:</strong> Gibst du Material mit (Urteil, alter Artikel, Notizen), setze es an den Anfang und den Auftrag danach.</li>" +
        "<li><strong>Erst zitieren, dann antworten:</strong> Bei langen Dokumenten die KI zuerst die relevanten Stellen wörtlich herausziehen lassen. Das hält sie beim Material.</li>" +
        "<li><strong>Unsicherheit erlauben:</strong> „Wenn du etwas nicht sicher weißt, schreib das, statt zu raten.“ Das senkt erfundene Angaben.</li>" +
        "<li><strong>Keine Widersprüche:</strong> OpenAI betont für GPT-5, dass das Modell Anweisungen sehr genau nimmt. Widersprüchliche Vorgaben („kurz“ und „ausführlich mit allen Details“) verschlechtern das Ergebnis.</li>" +
        "<li><strong>Weniger ist manchmal mehr:</strong> Nicht alle Techniken auf einmal. Testen, vergleichen, nur behalten, was hilft.</li>" +
        "</ul>" +

        "<h3>Vorher und nachher</h3>" +
        "<p><strong>Schwach:</strong> <em>Schreib einen Blogartikel über das Erbrecht.</em></p>" +
        "<p><strong>Stark:</strong> <em>Du schreibst für die Website einer deutschen Anwaltskanzlei. Zielgruppe: Privatleute ohne Vorwissen, die gerade geerbt haben. Ziel: Sie verstehen, welche Fristen jetzt laufen, und wissen, wann sich eine Beratung lohnt. Schreibe eine Gliederung (H2/H3) für einen Artikel von etwa 1.200 Wörtern zum Keyword „Erbe ausschlagen Frist“. Sachlich, verständlich, keine Werbesprache, keine Erfolgsversprechen. Markiere jede Stelle, an der eine Rechtsaussage von einem Anwalt geprüft werden muss.</em></p>" +

        "<h3>Quellen</h3><ul>" +
        "<li><a href='https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices' target='_blank' rel='noopener'>Anthropic: Prompting best practices</a></li>" +
        "<li><a href='https://www.claude.com/blog/best-practices-for-prompt-engineering' target='_blank' rel='noopener'>Anthropic: Best practices for prompt engineering for 2026 (Nov. 2025)</a></li>" +
        "<li><a href='https://developers.openai.com/cookbook/examples/gpt-5/gpt-5_prompting_guide' target='_blank' rel='noopener'>OpenAI Cookbook: GPT-5 prompting guide</a></li>" +
        "<li><a href='https://services.google.com/fh/files/misc/gemini-for-google-workspace-prompting-guide-101.pdf' target='_blank' rel='noopener'>Google: Gemini for Workspace Prompting Guide 101 (PDF)</a></li>" +
        "</ul>"
    },
    {
      titel: "Prompt-Bibliothek: 14 Vorlagen für den Marketing-Alltag",
      html:
        "<p>Alle Vorlagen sind zum Kopieren gedacht. Ersetze die Teile in [eckigen Klammern]. Gib nie Namen, Aktenzeichen oder Details echter Mandanten ein, nur allgemeine Themen. Jede Rechtsaussage im Ergebnis lässt du fachlich prüfen.</p>" +

        "<h3>Blog</h3>" +
        "<p><strong>1. Gliederung zum Keyword</strong></p><p><em>Du bist SEO-Redakteur für die Website einer deutschen Kanzlei. Zielgruppe: [Zielgruppe]. Fokus-Keyword: [Keyword]. Bestimme zuerst die Suchintention in einem Satz. Erstelle dann eine Gliederung mit H1, H2 und H3 für etwa [Wortzahl] Wörter. Nenne zu jeder H2 in einem Satz, welche Frage sie beantwortet. Am Ende fünf FAQ-Fragen, wie Laien sie googeln würden.</em></p>" +
        "<p><strong>2. Abschnitt nach Muster schreiben (Few-Shot)</strong></p><p><em>Schreibe den Abschnitt „[H2-Überschrift]“ in unserem Hausstil. Hier zwei Absätze, die den Stil zeigen: &lt;beispiel&gt;[Absatz 1]&lt;/beispiel&gt; &lt;beispiel&gt;[Absatz 2]&lt;/beispiel&gt; Übernimm Ton, Satzlänge und Anrede, nicht den Inhalt. Etwa 250 Wörter, keine Fachbegriffe ohne Erklärung.</em></p>" +
        "<p><strong>3. Bestehenden Artikel auffrischen</strong></p><p><em>[Artikeltext einfügen] Oben steht ein Artikel von [Jahr]. Zitiere zuerst wörtlich alle Stellen mit Zahlen, Daten, Fristen oder Gesetzesangaben. Markiere bei jeder, ob sie veraltet sein könnte. Schlag danach drei Abschnitte vor, die heute fehlen. Erfinde keine neuen Zahlen. Wo du unsicher bist, schreib „prüfen“.</em></p>" +

        "<h3>SEO-Meta</h3>" +
        "<p><strong>4. Title und Description</strong></p><p><em>Erstelle für die Seite unten 5 Varianten für Title (max. 60 Zeichen) und Meta-Description (max. 155 Zeichen). Fokus-Keyword: [Keyword], möglichst weit vorne. Jede Description endet mit einem klaren Nutzen, keine Superlative wie „beste Kanzlei“. Ausgabe als Tabelle mit Zeichenzahl. [Seitentext]</em></p>" +
        "<p><strong>5. FAQ und Alt-Texte</strong></p><p><em>Formuliere aus dem Artikel unten 6 FAQ mit Antworten von je 2 bis 3 Sätzen, die für sich allein verständlich sind. Schreibe außerdem für diese Bilder sachliche Alt-Texte (max. 120 Zeichen): [Bildbeschreibungen]. [Artikeltext]</em></p>" +

        "<h3>Newsletter</h3>" +
        "<p><strong>6. Betreffzeilen</strong></p><p><em>Thema des Newsletters: [Thema]. Leser: [Zielgruppe]. Schreibe 10 Betreffzeilen (max. 50 Zeichen) und je einen Preheader (max. 90 Zeichen). Mische die Ansätze: Frage, Nutzen, Neuigkeit, Zahl. Keine Clickbait-Formulierungen, keine Großbuchstaben-Wörter, kein „Kostenlos!“.</em></p>" +
        "<p><strong>7. Teaser aus einem Blogartikel</strong></p><p><em>Fasse den Artikel unten als Newsletter-Teaser zusammen: 3 bis 4 Sätze, die neugierig machen, ohne alles zu verraten, plus ein Button-Text mit max. 4 Wörtern. Ton: freundlich, sachlich, per Sie. [Artikeltext]</em></p>" +

        "<h3>Social Media</h3>" +
        "<p><strong>8. Ein Thema, drei Kanäle</strong></p><p><em>Mach aus dem Artikel unten Posts für LinkedIn (max. 1.300 Zeichen, mit Einstiegssatz, der zum Weiterlesen bringt), Instagram (Caption max. 600 Zeichen plus 5 passende Hashtags) und Facebook (max. 400 Zeichen). Kein Rechtsrat im Einzelfall, sondern allgemeine Information mit Hinweis auf den Artikel. [Artikeltext]</em></p>" +
        "<p><strong>9. Karussell-Post</strong></p><p><em>Erstelle ein Instagram-Karussell mit 6 Folien zum Thema [Thema]. Folie 1: Hook mit max. 8 Wörtern. Folien 2 bis 5: je ein Tipp, max. 25 Wörter. Folie 6: Aufforderung, den Artikel zu lesen. Gib zusätzlich für jede Folie eine kurze Bildidee an.</em></p>" +

        "<h3>Bilder</h3>" +
        "<p><strong>10. Titelbild für den Blog</strong></p><p><em>Fotorealistisches Bild, Querformat: [Motiv, z. B. ein älteres Paar sitzt am Küchentisch und sortiert Unterlagen]. Halbtotale, leicht seitlich. Ort: helle, moderne Wohnung, Tageslicht. Stil: ruhig, warm, natürliche Farben, keine Paragrafenzeichen, keine Waagen, kein Text im Bild.</em></p><p>Diese Vorlage folgt Googles Tipps: Motiv, Bildausschnitt, Handlung, Ort, Stil. Text im Bild wird oft falsch geschrieben, deshalb besser später selbst setzen.</p>" +
        "<p><strong>11. Bild gezielt ändern</strong></p><p><em>Behalte das Bild genau so, ändere nur [Detail, z. B. die Farbe der Tasse zu Dunkelblau]. Personen, Licht und Bildausschnitt bleiben unverändert.</em></p>" +

        "<h3>Recherche und Qualität</h3>" +
        "<p><strong>12. Recherche mit Quellen</strong></p><p><em>Recherchiere den aktuellen Stand zu [Thema] in Deutschland. Nenne zu jeder Aussage die Quelle mit Link und Datum. Trenne klar: gesicherte Fakten, Einschätzungen, offene Punkte. Wenn du keine verlässliche Quelle findest, schreib das. Bevorzuge Primärquellen (Gesetz, Gericht, Behörde, Kammer).</em></p>" +
        "<p><strong>13. Kritik-Schleife</strong></p><p><em>Prüfe deinen Text gegen diese Kriterien: 1. Versteht ein Laie jeden Satz? 2. Gibt es Aussagen ohne Beleg? 3. Gibt es Werbesprache oder Erfolgsversprechen? 4. Passt der Text zur Suchintention? 5. Ist er zu lang? Liste die Schwächen auf und liefere dann eine überarbeitete Fassung.</em></p>" +
        "<p><strong>14. Faktencheck-Liste</strong></p><p><em>Liste aus dem Text unten jede überprüfbare Behauptung auf (Zahlen, Daten, Fristen, Paragrafen, Urteile, Namen). Ausgabe als Tabelle: Behauptung, wie prüfbar, wo prüfbar. Bewerte nichts selbst als richtig. [Text]</em></p>" +

        "<h3>Quellen</h3><ul>" +
        "<li><a href='https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices' target='_blank' rel='noopener'>Anthropic: Prompting best practices (Beispiele, Zitate zuerst, Selbstprüfung)</a></li>" +
        "<li><a href='https://blog.google/products/gemini/image-generation-prompting-tips/' target='_blank' rel='noopener'>Google: Tipps für Bildgenerierung und -bearbeitung in Gemini</a></li>" +
        "<li><a href='https://services.google.com/fh/files/misc/gemini-for-google-workspace-prompting-guide-101.pdf' target='_blank' rel='noopener'>Google: Gemini for Workspace Prompting Guide 101 (PDF)</a></li>" +
        "</ul>"
    },
    {
      titel: "Assistenten, Qualitätskontrolle und Datenschutz",
      html:
        "<h3>Eigene Assistenten: einmal einrichten, oft nutzen</h3>" +
        "<p>Statt jedes Mal denselben Kontext einzutippen, legst du einen Assistenten mit festen Anweisungen und hinterlegtem Wissen an. Die Bauweise ist überall ähnlich:</p>" +
        "<ul>" +
        "<li><strong>Anweisungen</strong> regeln das Verhalten: Rolle, Ton, Ablauf, Verbote. OpenAI formuliert es so: Regeln, Ton und Arbeitsweise gehören in die Anweisungen, nicht in hochgeladene Dateien.</li>" +
        "<li><strong>Wissen</strong> ist Nachschlagematerial: Styleguide, Leistungsübersicht, Tonalitäts-Beispiele, Keyword-Liste, frühere gute Texte. Laut OpenAI-Hilfe gehen bei einem GPT bis zu 20 Dateien mit je bis zu 512 MB.</li>" +
        "<li><strong>Claude Projects</strong> bündeln Anweisungen, Wissensdateien und Chats in einem Arbeitsbereich. Was in einem Chat besprochen wird, wissen andere Chats im Projekt nicht automatisch, außer es steht in den Anweisungen oder im Wissen. In Team- und Enterprise-Tarifen lassen sich Projekte teilen.</li>" +
        "</ul>" +
        "<p><strong>Aktuell wichtig:</strong> OpenAI stellt Custom GPTs auf <strong>Plugins</strong> um. Für Enterprise-Workspaces ist laut Fachpresse der 11. Dezember 2026 als Ende angekündigt, andere Tarife sollen folgen, die Termine können sich noch ändern. Beim Umzug werden die Anweisungen zu einem „Skill“ im Plugin, eigene Actions (API-Anbindungen) und die Modellwahl wandern nicht mit. Praktische Folge: Bewahre die Anweisungen deiner Assistenten immer auch als eigene Textdatei auf. Dann kannst du sie in jedes Werkzeug mitnehmen.</p>" +
        "<p><strong>Beispiel für Anweisungen eines Redaktions-Assistenten:</strong></p><p><em>Du unterstützt die Online-Redaktion einer deutschen Anwaltskanzlei. Leser sind Privatleute ohne juristisches Vorwissen. Schreib sachlich, verständlich, per Sie, ohne Werbesprache und ohne Erfolgsversprechen. Halte dich an den Styleguide im Wissen. Erfinde nie Paragrafen, Urteile, Zahlen oder Zitate. Markiere jede Rechtsaussage mit [prüfen]. Frag nach, wenn Zielgruppe oder Keyword fehlen. Wenn jemand Daten zu echten Mandanten eingibt, weise darauf hin, dass sie hier nicht hingehören.</em></p>" +

        "<h3>Typische Fehler</h3>" +
        "<ul>" +
        "<li><strong>Zu wenig Kontext:</strong> Ergebnis klingt generisch. Gegenmittel: Zielgruppe, Ziel, Kanal, Beispiel.</li>" +
        "<li><strong>Alles in einen Prompt:</strong> Recherche, Gliederung, Text und Meta auf einmal. Besser in Schritten.</li>" +
        "<li><strong>Widersprüchliche Vorgaben:</strong> „kurz, aber mit allen Details“.</li>" +
        "<li><strong>Nur Verbote:</strong> Sag, was du willst, nicht nur, was nicht.</li>" +
        "<li><strong>Ergebnis ungeprüft übernehmen:</strong> der teuerste Fehler.</li>" +
        "<li><strong>Nicht nachschärfen:</strong> Der erste Entwurf ist ein Entwurf. Gezielt nachsteuern („kürzer“, „konkreter“, „mehr Beispiele“).</li>" +
        "</ul>" +

        "<h3>Qualitätskontrolle: Fakten prüfen</h3>" +
        "<p>Sprachmodelle können plausibel klingende, aber falsche Angaben erfinden (Halluzinationen), gerade bei Paragrafen, Aktenzeichen, Zahlen und Zitaten. Für eine Kanzlei-Website gilt deshalb:</p>" +
        "<ul>" +
        "<li>Jede Zahl, Frist, Norm und jedes Urteil an der Primärquelle prüfen (Gesetzestext, Gericht, Behörde).</li>" +
        "<li>Rechtliche Aussagen fachlich freigeben lassen. Die Verantwortung bleibt beim Menschen.</li>" +
        "<li>Die KI Quellen nennen lassen und die Links wirklich öffnen. Auch genannte Quellen können falsch zugeordnet sein.</li>" +
        "<li>Der KI erlauben, „weiß ich nicht“ zu sagen, und bei langen Dokumenten erst Zitate herausziehen lassen.</li>" +
        "<li>Selbstprüfung per Kritik-Schleife nutzen, aber nie als Ersatz für deinen eigenen Blick.</li>" +
        "</ul>" +

        "<h3>Datenschutz beim Prompten</h3>" +
        "<p><strong>Die Grundregel: Keine Mandantendaten in KI-Werkzeuge.</strong> Für Marketing-Texte brauchst du sie auch nicht. Ein Blogartikel über Erbausschlagung braucht keinen echten Fall, sondern ein allgemeines, ausgedachtes Beispiel.</p>" +
        "<ul>" +
        "<li><strong>Verschwiegenheit:</strong> Anwälte sind zur Verschwiegenheit verpflichtet (§ 43a Abs. 2 BRAO, strafrechtlich § 203 StGB). Die BRAK hat dazu im Dezember 2024 „Hinweise zum Einsatz von künstlicher Intelligenz“ veröffentlicht. Laut Berichten über den Leitfaden muss ein KI-Anbieter, der mit Mandatsgeheimnissen in Berührung kommt, bewusst eingebunden und zur Verschwiegenheit verpflichtet werden. Frei verfügbare Dienste in der Standardeinstellung erfüllen das nicht. Zusätzlich wird Anonymisieren empfohlen.</li>" +
        "<li><strong>DSGVO:</strong> Verarbeitet ein Anbieter personenbezogene Daten im Auftrag, braucht es in der Regel einen Auftragsverarbeitungsvertrag (Art. 28 DSGVO). Das entscheidet die Kanzlei, nicht du allein im Browser.</li>" +
        "<li><strong>Training abschalten:</strong> Bei privaten ChatGPT-Konten heißt der Schalter „Das Modell für alle verbessern“ (Einstellungen, Datenkontrollen). Bei ChatGPT Business, Enterprise und der API nutzt OpenAI Ein- und Ausgaben laut eigener Aussage standardmäßig nicht zum Training. Das ändert nichts an der Grundregel.</li>" +
        "<li><strong>Anonymisieren reicht oft nicht:</strong> Ort, Datum und ein ungewöhnlicher Sachverhalt machen eine Person schnell erkennbar. Lieber gleich mit ausgedachten Beispielen arbeiten.</li>" +
        "<li><strong>KI-Kompetenz:</strong> Seit dem 2. Februar 2025 verlangt der EU AI Act (Art. 4) von Unternehmen, die KI einsetzen, ausreichende KI-Kompetenz ihres Personals. Eine interne KI-Richtlinie, welche Werkzeuge für was erlaubt sind, ist sinnvoll.</li>" +
        "</ul>" +
        "<p><strong>Was darf rein?</strong> Öffentliche Infos, eigene Entwürfe ohne Personenbezug, Keyword-Listen, veröffentlichte Artikel, Gesetzestexte, ausgedachte Beispiele. <strong>Was nicht?</strong> Namen, Kontaktdaten, Aktenzeichen, Schriftsätze, E-Mails von Mandanten, interne Zahlen, Passwörter.</p>" +

        "<h3>Quellen</h3><ul>" +
        "<li><a href='https://help.openai.com/en/articles/8554397' target='_blank' rel='noopener'>OpenAI-Hilfe: Creating a GPT</a></li>" +
        "<li><a href='https://mixed-news.com/en/openai-retiring-custom-gpts-what-carries-over-to-plugins/' target='_blank' rel='noopener'>Mixed: OpenAI stellt Custom GPTs auf Plugins um</a></li>" +
        "<li><a href='https://virtualizationreview.com/articles/2026/09/28/openai-to-retire-custom-gpts-replace-them-with-plugins.aspx' target='_blank' rel='noopener'>Virtualization Review: OpenAI to Retire Custom GPTs (Sept. 2026)</a></li>" +
        "<li><a href='https://help.openai.com/de-de/articles/7730893-faq-zu-datenkontrollen' target='_blank' rel='noopener'>OpenAI-Hilfe: FAQ zu Datenkontrollen</a></li>" +
        "<li><a href='https://www.brak.de/fileadmin/service/publikationen/Handlungshinweise/BRAK_Leitfaden_mit_Hinweisen_zum_KI-Einsatz_Stand_12_2024.pdf' target='_blank' rel='noopener'>BRAK: Hinweise zum Einsatz von KI (Stand 12/2024, PDF)</a></li>" +
        "<li><a href='https://anwaltspraxis-magazin.de/schlagzeilen/2025/02/06/leitfaden-zum-einsatz-von-ki-inanwaltskanzleien/' target='_blank' rel='noopener'>Anwaltspraxis Magazin: Leitfaden zum Einsatz von KI in Anwaltskanzleien</a></li>" +
        "<li><a href='https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices' target='_blank' rel='noopener'>Anthropic: Prompting best practices (Halluzinationen vermeiden)</a></li>" +
        "</ul>"
    }
  ],

  tabellen: [
    {
      titel: "Prompt-Bausteine im Überblick",
      spalten: ["Baustein", "Frage dahinter", "Beispiel"],
      zeilen: [
        ["Rolle", "Aus welcher Perspektive?", "Du bist Redakteurin für eine Kanzlei-Website."],
        ["Kontext", "Für wen, wofür, wo?", "Privatleute ohne Vorwissen, Blog, Ziel: Beratungsanfrage"],
        ["Aufgabe", "Was genau soll passieren?", "Schreibe eine Gliederung mit H2 und H3."],
        ["Format", "Wie soll es aussehen?", "Tabelle, max. 155 Zeichen, per Sie"],
        ["Beispiele", "Wie sieht gut aus?", "Zwei Musterabsätze im Hausstil"],
        ["Grenzen", "Was ist tabu oder unsicher?", "Keine Erfolgsversprechen, Rechtsaussagen mit [prüfen] markieren"]
      ]
    },
    {
      titel: "Techniken: wann welche?",
      spalten: ["Technik", "Hilft bei", "Typische Formulierung"],
      zeilen: [
        ["Few-Shot", "Ton, Stil, festes Format", "Hier drei Beispiele … Übernimm Ton und Länge."],
        ["Schritt für Schritt", "Komplexe Überlegungen", "Bestimme erst die Suchintention, dann die Gliederung."],
        ["Prompt-Kette", "Große Aufgaben", "Mehrere Prompts: Gliederung, Text, Meta, Prüfung"],
        ["Kritik-Schleife", "Qualität vor Abgabe", "Prüfe gegen diese Kriterien und überarbeite."],
        ["Zitate zuerst", "Lange Dokumente", "Zitiere zuerst die relevanten Stellen wörtlich."],
        ["Unsicherheit erlauben", "Erfundene Fakten", "Wenn du es nicht sicher weißt, sag das."],
        ["Vorlage", "Wiederkehrende Aufgaben", "Text mit [Platzhaltern] in der Bibliothek"]
      ]
    }
  ],

  mindmaps: [
    {
      titel: "Prompt-Werkstatt",
      baum: {
        text: "Prompt-Werkstatt",
        kinder: [
          { text: "Aufbau", kinder: [
            { text: "Rolle" }, { text: "Kontext und Warum" }, { text: "Aufgabe mit klarem Verb" }, { text: "Format positiv formulieren" }, { text: "Beispiele" }
          ] },
          { text: "Techniken", kinder: [
            { text: "Few-Shot (3–5 Beispiele)" }, { text: "Schritt für Schritt" }, { text: "Prompt-Ketten" }, { text: "Kritik-Schleife" }, { text: "Vorlagen mit [Platzhaltern]" }
          ] },
          { text: "Einsatz", kinder: [
            { text: "Blog: Gliederung, Abschnitte, Auffrischen" }, { text: "SEO-Meta: Title, Description, FAQ" }, { text: "Newsletter: Betreff, Teaser" }, { text: "Social: LinkedIn, Instagram, Karussell" }, { text: "Bilder: Motiv, Ausschnitt, Ort, Stil" }, { text: "Recherche mit Quellen" }
          ] },
          { text: "Assistenten", kinder: [
            { text: "Anweisungen = Verhalten" }, { text: "Wissen = Nachschlagematerial" }, { text: "Claude Projects" }, { text: "Custom GPTs → Plugins" }, { text: "Anweisungen als Datei sichern" }
          ] },
          { text: "Qualität", kinder: [
            { text: "Halluzinationen" }, { text: "Primärquellen prüfen" }, { text: "Fachliche Freigabe" }, { text: "Weiß-ich-nicht erlauben" }
          ] },
          { text: "Datenschutz", kinder: [
            { text: "Keine Mandantendaten" }, { text: "Verschwiegenheit: § 43a BRAO, § 203 StGB" }, { text: "AV-Vertrag Art. 28 DSGVO" }, { text: "Training abschalten" }, { text: "KI-Kompetenz Art. 4 AI Act" }
          ] }
        ]
      }
    }
  ],

  lernkarten: [
    { vorne: "Was ist der Kollegen-Test für Prompts?", hinten: "Zeig den Prompt jemandem ohne Vorwissen. Wäre die Person verwirrt, ist es die KI auch. Empfehlung aus Anthropics Prompt-Leitfaden." },
    { vorne: "Welche fünf Bausteine hat ein guter Prompt?", hinten: "Rolle, Kontext, Aufgabe, Format, Beispiele. Dazu oft Grenzen (was tabu ist)." },
    { vorne: "Welche vier Bereiche nennt Googles Gemini-Leitfaden?", hinten: "Persona, Aufgabe (Task), Kontext, Format. Nicht alle sind Pflicht, einige davon verbessern das Ergebnis deutlich." },
    { vorne: "Wie lang waren laut Google die erfolgreichsten Prompts im Workspace-Test 2024?", hinten: "Im Schnitt etwa 21 Wörter. Kurz ist okay, solange das Wichtige drinsteht." },
    { vorne: "Warum hilft es, das Warum einer Regel zu nennen?", hinten: "Die KI versteht dein Ziel und kann die Regel sinnvoll auf neue Fälle übertragen, statt sie nur stur anzuwenden." },
    { vorne: "Wie formulierst du Formatwünsche am besten?", hinten: "Positiv: sag, was du willst („Schreibe in Absätzen“), statt nur, was du nicht willst („keine Aufzählungen“)." },
    { vorne: "Wie detailliert sollte die Rolle sein?", hinten: "Knapp. Ein Satz reicht. Anthropic rät, lieber die gewünschte Perspektive zu beschreiben als eine aufwendige Persona." },
    { vorne: "Was ist Few-Shot-Prompting?", hinten: "Du gibst der KI einige Beispiele für das gewünschte Ergebnis mit, damit sie Ton, Form und Stil übernimmt." },
    { vorne: "Wie viele Beispiele empfiehlt Anthropic beim Few-Shot?", hinten: "3 bis 5, nah am echten Fall, untereinander verschieden und klar markiert (z. B. mit <beispiel>-Tags)." },
    { vorne: "Welches Risiko haben Beispiele?", hinten: "Die KI kopiert auch ungewollte Muster, etwa gleiche Länge oder gleichen Satzanfang. Deshalb Beispiele variieren." },
    { vorne: "Was bedeutet „Schritt für Schritt“ als Technik?", hinten: "Die KI soll erst überlegen, dann antworten. Am besten gibst du die Schritte selbst vor, z. B. erst Suchintention, dann Gliederung." },
    { vorne: "Was ist eine Prompt-Kette?", hinten: "Eine große Aufgabe wird auf mehrere Prompts verteilt, das Ergebnis des einen ist Eingabe des nächsten: Gliederung, Text, Meta, Prüfung." },
    { vorne: "Was ist eine Kritik-Schleife?", hinten: "Die KI prüft ihren Entwurf gegen klare Kriterien, nennt Schwächen und liefert eine überarbeitete Fassung." },
    { vorne: "Ersetzt die Kritik-Schleife deine eigene Prüfung?", hinten: "Nein. Sie fängt viele Schwächen ab, aber Fakten und Rechtsaussagen prüft weiterhin ein Mensch." },
    { vorne: "Wozu Vorlagen mit [Platzhaltern]?", hinten: "Wiederkehrende Aufgaben laufen gleich gut und schneller, Ton und Qualität bleiben konstant." },
    { vorne: "Wo gehört langes Material im Prompt hin?", hinten: "Nach oben, vor den eigentlichen Auftrag. So empfiehlt es Anthropic für lange Dokumente." },
    { vorne: "Was bringt „erst zitieren, dann antworten“?", hinten: "Die KI zieht zuerst die relevanten Stellen wörtlich heraus und bleibt dadurch beim Material statt zu fantasieren." },
    { vorne: "Wie senkst du erfundene Antworten?", hinten: "Ausdrücklich erlauben, „weiß ich nicht“ zu sagen, Quellen verlangen, Material mitgeben und Ergebnisse selbst prüfen." },
    { vorne: "Was betont OpenAI beim Prompten von GPT-5?", hinten: "Das Modell nimmt Anweisungen sehr genau. Widersprüchliche oder vage Vorgaben verschlechtern das Ergebnis." },
    { vorne: "Was ist eine Halluzination?", hinten: "Die KI erfindet plausibel klingende, aber falsche Angaben, z. B. Paragrafen, Aktenzeichen, Zahlen oder Zitate." },
    { vorne: "Welche Angaben prüfst du in KI-Texten für die Kanzlei immer?", hinten: "Zahlen, Fristen, Paragrafen, Urteile, Zitate und Namen, jeweils an der Primärquelle." },
    { vorne: "Was ist eine Primärquelle?", hinten: "Die ursprüngliche Stelle einer Information: Gesetzestext, Gerichtsentscheidung, Behörde, Kammer. Nicht ein Blog, der darüber berichtet." },
    { vorne: "Was gehört in einen Prompt für Meta-Descriptions?", hinten: "Keyword, Zeichenlimit (ca. 155), Nutzen am Ende, Verbot von Superlativen, mehrere Varianten, Ausgabe mit Zeichenzahl." },
    { vorne: "Was gehört in einen Prompt für Newsletter-Betreffzeilen?", hinten: "Thema, Zielgruppe, Zeichenlimit, mehrere Ansätze (Frage, Nutzen, Zahl), Preheader und Verbot von Clickbait." },
    { vorne: "Wie nutzt du einen Artikel für mehrere Social-Kanäle?", hinten: "Ein Prompt mit Zeichenlimits und Eigenheiten je Kanal (LinkedIn, Instagram, Facebook), Hinweis auf den Artikel, kein Einzelfall-Rechtsrat." },
    { vorne: "Welche Elemente empfiehlt Google für Bild-Prompts?", hinten: "Motiv, Bildausschnitt (Komposition), Handlung, Ort, Stil und bei Änderungen klare Bearbeitungsanweisungen." },
    { vorne: "Warum Text lieber nicht im KI-Bild erzeugen?", hinten: "Laut Google kann Text im Bild falsch geschrieben sein. Besser nachträglich selbst setzen." },
    { vorne: "Wie änderst du ein KI-Bild gezielt?", hinten: "Direkt und konkret: „Ändere nur die Farbe der Tasse zu Dunkelblau, alles andere bleibt.“" },
    { vorne: "Was macht einen guten Recherche-Prompt aus?", hinten: "Quellen mit Link und Datum verlangen, Fakten und Einschätzungen trennen, Primärquellen bevorzugen, Lücken offen benennen lassen." },
    { vorne: "Was gehört in die Anweisungen eines Assistenten?", hinten: "Verhalten: Rolle, Ton, Ablauf, Verbote, Rückfragen. Laut OpenAI gehören Regeln und Ton in die Anweisungen, nicht in Dateien." },
    { vorne: "Was gehört ins Wissen eines Assistenten?", hinten: "Nachschlagematerial: Styleguide, Leistungsübersicht, Keyword-Liste, gute Beispieltexte." },
    { vorne: "Wie viele Wissensdateien erlaubt ein Custom GPT laut OpenAI-Hilfe?", hinten: "Bis zu 20 Dateien mit je bis zu 512 MB." },
    { vorne: "Was sind Claude Projects?", hinten: "Arbeitsbereiche, die eigene Anweisungen, Wissensdateien und Chats bündeln. In Team- und Enterprise-Tarifen teilbar." },
    { vorne: "Weiß ein Chat in einem Claude-Projekt, was in einem anderen Chat besprochen wurde?", hinten: "Nicht automatisch. Was alle Chats wissen sollen, gehört in die Projekt-Anweisungen oder ins Wissen." },
    { vorne: "Was passiert 2026 mit Custom GPTs?", hinten: "OpenAI stellt sie auf Plugins um. Für Enterprise ist laut Fachpresse der 11.12.2026 als Ende angekündigt, andere Tarife sollen folgen. Termine können sich ändern." },
    { vorne: "Was wandert beim Umzug eines GPT zum Plugin mit, was nicht?", hinten: "Mit: Anweisungen (werden zum Skill) und verbundene Apps. Nicht mit: eigene Actions und die Modellwahl." },
    { vorne: "Warum Anweisungen von Assistenten als eigene Datei sichern?", hinten: "Werkzeuge ändern sich (siehe GPT-Umstellung). Mit der Datei kannst du den Assistenten überall neu aufsetzen." },
    { vorne: "Was ist die Grundregel zum Datenschutz beim Prompten in der Kanzlei?", hinten: "Keine Mandantendaten in KI-Werkzeuge. Für Marketing-Texte reichen allgemeine oder ausgedachte Beispiele." },
    { vorne: "Wo ist die anwaltliche Verschwiegenheit geregelt?", hinten: "Berufsrechtlich in § 43a Abs. 2 BRAO, strafrechtlich ist die Verletzung von Privatgeheimnissen in § 203 StGB erfasst." },
    { vorne: "Was hat die BRAK zum KI-Einsatz veröffentlicht?", hinten: "„Hinweise zum Einsatz von künstlicher Intelligenz (KI)“, Stand Dezember 2024: Prüfpflichten, Verschwiegenheit, Transparenz, Verhältnis zur KI-Verordnung." },
    { vorne: "Erfüllen frei verfügbare KI-Dienste in der Standardeinstellung die Verschwiegenheits-Anforderungen?", hinten: "Laut Berichten über den BRAK-Leitfaden nein. Der Anbieter müsste bewusst eingebunden und zur Verschwiegenheit verpflichtet werden." },
    { vorne: "Wann braucht es einen Auftragsverarbeitungsvertrag?", hinten: "Wenn ein Anbieter personenbezogene Daten im Auftrag verarbeitet (Art. 28 DSGVO). Darüber entscheidet die Kanzlei." },
    { vorne: "Wie heißt der Trainings-Schalter in privaten ChatGPT-Konten?", hinten: "„Das Modell für alle verbessern“ unter Einstellungen, Datenkontrollen." },
    { vorne: "Trainiert OpenAI mit Daten aus ChatGPT Business, Enterprise und API?", hinten: "Laut OpenAI standardmäßig nicht. Die Grundregel „keine Mandantendaten“ gilt trotzdem." },
    { vorne: "Warum reicht Anonymisieren oft nicht?", hinten: "Ort, Datum und ein ungewöhnlicher Sachverhalt machen Personen schnell wieder erkennbar. Besser gleich ausgedachte Beispiele." },
    { vorne: "Was verlangt Art. 4 des EU AI Act seit dem 2.2.2025?", hinten: "Unternehmen, die KI einsetzen, müssen für ausreichende KI-Kompetenz ihres Personals sorgen." },
    { vorne: "Was sind die häufigsten Prompt-Fehler?", hinten: "Zu wenig Kontext, alles in einen Prompt, widersprüchliche Vorgaben, nur Verbote, nicht nachschärfen, Ergebnis ungeprüft übernehmen." }
  ],

  quiz: [
    // ---------- Auswahl (15) ----------
    {
      frage: "Was beschreibt der „Kollegen-Test“ aus Anthropics Leitfaden?",
      optionen: ["Die KI soll ihren Text von einer zweiten KI prüfen lassen", "Wäre eine Kollegin ohne Vorwissen vom Prompt verwirrt, ist es die KI auch", "Prompts sollen immer im Team geschrieben werden", "Man soll die KI wie einen Kollegen duzen"],
      richtig: [1],
      erklaerung: "Der Test prüft, ob der Prompt genug Kontext enthält. Die KI ist wie eine fähige neue Mitarbeiterin am ersten Tag.",
      quelle: "Gute Prompts bauen: Aufbau und Techniken"
    },
    {
      frage: "Welche vier Bereiche nennt Googles Prompt-Leitfaden für Gemini in Workspace?",
      optionen: ["Persona", "Aufgabe", "Kontext", "Format", "Budget"],
      richtig: [0, 1, 2, 3],
      erklaerung: "Persona, Task, Context, Format. Ein Budget gehört nicht dazu.",
      quelle: "Gute Prompts bauen: Aufbau und Techniken"
    },
    {
      frage: "Wie viele Beispiele empfiehlt Anthropic beim Few-Shot-Prompting für beste Ergebnisse?",
      optionen: ["Genau eins", "3 bis 5", "Mindestens 20", "Gar keine, Beispiele stören"],
      richtig: [1],
      erklaerung: "3 bis 5 relevante, abwechslungsreiche und klar markierte Beispiele.",
      quelle: "Gute Prompts bauen: Aufbau und Techniken"
    },
    {
      frage: "Wohin gehört ein langes Dokument (z. B. ein alter Artikel) im Prompt?",
      optionen: ["Ganz nach oben, der Auftrag danach", "Ans Ende, nach dem Auftrag", "In die Mitte zwischen zwei Aufträge", "Gar nicht, besser nur zusammenfassen"],
      richtig: [0],
      erklaerung: "Anthropic empfiehlt, lange Inhalte oben zu platzieren und Frage und Anweisungen darunter.",
      quelle: "Gute Prompts bauen: Aufbau und Techniken"
    },
    {
      frage: "Welche Formulierung ist laut den Leitfäden für Format-Wünsche besser?",
      optionen: ["„Keine Aufzählungen, kein Markdown, keine Listen.“", "„Schreibe in zusammenhängenden Absätzen.“", "„Mach es irgendwie schön.“", "„Format egal.“"],
      richtig: [1],
      erklaerung: "Positiv sagen, was man will, wirkt besser als nur Verbote.",
      quelle: "Gute Prompts bauen: Aufbau und Techniken"
    },
    {
      frage: "Was hilft gegen erfundene Fakten?",
      optionen: ["Der KI ausdrücklich erlauben, „weiß ich nicht“ zu sagen", "Bei langen Dokumenten erst Zitate herausziehen lassen", "Die KI bitten, besonders selbstbewusst zu antworten", "Quellen mit Link verlangen und selbst öffnen"],
      richtig: [0, 1, 3],
      erklaerung: "Unsicherheit erlauben, beim Material bleiben und Quellen prüfen senkt Halluzinationen. Selbstbewusstsein verlangen bewirkt eher das Gegenteil.",
      quelle: "Assistenten, Qualitätskontrolle und Datenschutz"
    },
    {
      frage: "Was betont OpenAI für das Prompten von GPT-5?",
      optionen: ["Das Modell ignoriert die meisten Anweisungen", "Das Modell nimmt Anweisungen sehr genau, Widersprüche schaden", "Prompts müssen auf Englisch sein", "Prompts dürfen nicht länger als ein Satz sein"],
      richtig: [1],
      erklaerung: "Widersprüchliche oder vage Vorgaben verschlechtern das Ergebnis. OpenAI bietet dafür auch einen Prompt-Optimierer an.",
      quelle: "Gute Prompts bauen: Aufbau und Techniken"
    },
    {
      frage: "Welche Elemente empfiehlt Google für Bild-Prompts in Gemini?",
      optionen: ["Motiv", "Bildausschnitt", "Ort", "Stil", "Dateigröße in MB"],
      richtig: [0, 1, 2, 3],
      erklaerung: "Google nennt Motiv, Komposition, Handlung, Ort, Stil und bei Änderungen klare Bearbeitungsanweisungen.",
      quelle: "Prompt-Bibliothek: 14 Vorlagen für den Marketing-Alltag"
    },
    {
      frage: "Warum solltest du Schrift lieber nicht direkt im KI-Bild erzeugen lassen?",
      optionen: ["Text in KI-Bildern ist verboten", "Text kann falsch geschrieben sein", "Bilder mit Text werden nicht gespeichert", "Google entfernt Text automatisch"],
      richtig: [1],
      erklaerung: "Google weist darauf hin, dass Text im Bild Rechtschreibfehler haben kann. Schrift setzt du besser selbst, z. B. in Canva.",
      quelle: "Prompt-Bibliothek: 14 Vorlagen für den Marketing-Alltag"
    },
    {
      frage: "Was gehört laut OpenAI in die Anweisungen eines Assistenten statt in die Wissensdateien?",
      optionen: ["Regeln, Ton und Arbeitsweise", "Der komplette Styleguide als PDF", "Alle früheren Blogartikel", "Die Keyword-Datenbank"],
      richtig: [0],
      erklaerung: "Anweisungen regeln das Verhalten, Wissensdateien sind Nachschlagematerial.",
      quelle: "Assistenten, Qualitätskontrolle und Datenschutz"
    },
    {
      frage: "Was wandert beim Umzug eines Custom GPT zu einem Plugin laut Fachpresse NICHT mit?",
      optionen: ["Die Anweisungen", "Verbundene Apps", "Eigene Actions (API-Anbindungen)", "Die gewählte Modellversion"],
      richtig: [2, 3],
      erklaerung: "Anweisungen werden zum Skill, verbundene Apps kommen mit. Eigene Actions und die Modellwahl müssen neu gelöst werden.",
      quelle: "Assistenten, Qualitätskontrolle und Datenschutz"
    },
    {
      frage: "Welche Daten darfst du als Marketing-Mitarbeiter einer Kanzlei bedenkenlos in ein KI-Werkzeug geben?",
      optionen: ["Einen veröffentlichten Blogartikel", "Eine Mandanten-E-Mail mit Namen", "Eine Keyword-Liste", "Ein Aktenzeichen mit Sachverhalt"],
      richtig: [0, 2],
      erklaerung: "Öffentliche Inhalte und Keyword-Listen ohne Personenbezug sind unkritisch. Mandantendaten und Aktenzeichen gehören nie hinein.",
      quelle: "Assistenten, Qualitätskontrolle und Datenschutz"
    },
    {
      frage: "Wo schaltest du in einem privaten ChatGPT-Konto das Training mit deinen Chats ab?",
      optionen: ["Einstellungen, Datenkontrollen, „Das Modell für alle verbessern“", "Gar nicht möglich", "Nur per E-Mail an OpenAI", "Im Browser-Cookie-Banner"],
      richtig: [0],
      erklaerung: "Der Schalter heißt „Das Modell für alle verbessern“. Gespeicherte Chats bleiben dabei erhalten.",
      quelle: "Assistenten, Qualitätskontrolle und Datenschutz"
    },
    {
      frage: "Was erwartet ein Prompt aus der Bibliothek von einer Recherche?",
      optionen: ["Quelle mit Link und Datum zu jeder Aussage", "Trennung von Fakten, Einschätzungen und offenen Punkten", "Möglichst viele Zahlen, notfalls geschätzt", "Bevorzugt Primärquellen"],
      richtig: [0, 1, 3],
      erklaerung: "Geschätzte Zahlen sind genau das, was man vermeiden will. Lieber Lücken offen benennen lassen.",
      quelle: "Prompt-Bibliothek: 14 Vorlagen für den Marketing-Alltag"
    },
    {
      frage: "Was verlangt Art. 4 des EU AI Act seit dem 2. Februar 2025?",
      optionen: ["Eine Kennzeichnung jedes Blogartikels als KI-Text", "Ausreichende KI-Kompetenz beim Personal von Unternehmen, die KI einsetzen", "Ein Verbot von ChatGPT in Kanzleien", "Eine Genehmigung durch die BRAK"],
      richtig: [1],
      erklaerung: "Art. 4 regelt die KI-Kompetenz. Schulungen und eine interne KI-Richtlinie sind der übliche Weg.",
      quelle: "Assistenten, Qualitätskontrolle und Datenschutz"
    },

    // ---------- Richtig oder falsch (8) ----------
    {
      typ: "wahrfalsch",
      aussage: "Je länger und aufwendiger ein Prompt ist, desto besser wird das Ergebnis immer.",
      richtig: false,
      erklaerung: "Anthropic warnt ausdrücklich vor Über-Engineering. Laut Google lagen gute Prompts im Test sogar bei etwa 21 Wörtern. Es zählt, dass das Wichtige drinsteht.",
      quelle: "Gute Prompts bauen: Aufbau und Techniken"
    },
    {
      typ: "wahrfalsch",
      aussage: "Beispiele im Prompt können dazu führen, dass die KI auch ungewollte Muster wie gleiche Satzanfänge kopiert.",
      richtig: true,
      erklaerung: "Darum sollen Beispiele abwechslungsreich sein und nur das zeigen, was man wirklich will.",
      quelle: "Gute Prompts bauen: Aufbau und Techniken"
    },
    {
      typ: "wahrfalsch",
      aussage: "Wenn die KI eine Quelle mit Link nennt, ist die Aussage damit geprüft.",
      richtig: false,
      erklaerung: "Auch genannte Quellen können falsch zugeordnet oder erfunden sein. Links öffnen und an der Primärquelle prüfen.",
      quelle: "Assistenten, Qualitätskontrolle und Datenschutz"
    },
    {
      typ: "wahrfalsch",
      aussage: "In einem Claude-Projekt weiß jeder neue Chat automatisch, was in früheren Chats desselben Projekts besprochen wurde.",
      richtig: false,
      erklaerung: "Geteilt werden Anweisungen und Wissen. Was alle Chats wissen sollen, gehört dort hinein.",
      quelle: "Assistenten, Qualitätskontrolle und Datenschutz"
    },
    {
      typ: "wahrfalsch",
      aussage: "OpenAI nutzt laut eigener Aussage Ein- und Ausgaben aus ChatGPT Business, Enterprise und der API standardmäßig nicht zum Training.",
      richtig: true,
      erklaerung: "So steht es in OpenAIs Hilfe zu Datenkontrollen. An der Regel „keine Mandantendaten“ ändert das nichts.",
      quelle: "Assistenten, Qualitätskontrolle und Datenschutz"
    },
    {
      typ: "wahrfalsch",
      aussage: "Wenn man Namen weglässt, kann man Mandantenfälle bedenkenlos in ChatGPT einfügen.",
      richtig: false,
      erklaerung: "Ort, Datum und Sachverhalt machen Personen schnell erkennbar. Für Marketing-Texte reichen ausgedachte Beispiele.",
      quelle: "Assistenten, Qualitätskontrolle und Datenschutz"
    },
    {
      typ: "wahrfalsch",
      aussage: "Eine Kritik-Schleife, in der die KI ihren eigenen Text prüft, ersetzt die fachliche Freigabe durch einen Anwalt.",
      richtig: false,
      erklaerung: "Die Kritik-Schleife verbessert Entwürfe, die Verantwortung für Rechtsaussagen bleibt beim Menschen.",
      quelle: "Gute Prompts bauen: Aufbau und Techniken"
    },
    {
      typ: "wahrfalsch",
      aussage: "Es ist sinnvoll, die Anweisungen eigener Assistenten zusätzlich als Textdatei aufzubewahren.",
      richtig: true,
      erklaerung: "Werkzeuge ändern sich, wie die Umstellung von Custom GPTs auf Plugins zeigt. Mit der Datei setzt du den Assistenten überall neu auf.",
      quelle: "Assistenten, Qualitätskontrolle und Datenschutz"
    },

    // ---------- Lückentext (6) ----------
    {
      typ: "luecke",
      text: "Gibt man der KI mehrere Beispiele für das gewünschte Ergebnis mit, nennt man das ___-Prompting.",
      optionen: ["Few-Shot", "Zero-Click", "Deep-Link"],
      richtig: [0],
      erklaerung: "Few-Shot oder Multishot: wenige Beispiele steuern Ton und Format.",
      quelle: "Gute Prompts bauen: Aufbau und Techniken"
    },
    {
      typ: "luecke",
      text: "Wenn eine KI plausibel klingende, aber falsche Fakten erfindet, spricht man von einer ___.",
      optionen: ["Halluzination", "Indexierung", "Konvertierung"],
      richtig: [0],
      erklaerung: "Halluzinationen betreffen besonders Zahlen, Paragrafen, Aktenzeichen und Zitate.",
      quelle: "Assistenten, Qualitätskontrolle und Datenschutz"
    },
    {
      typ: "luecke",
      text: "Wird eine große Aufgabe auf mehrere aufeinander aufbauende Prompts verteilt, nennt man das eine ___.",
      optionen: ["Prompt-Kette", "Prompt-Sperre", "Prompt-Kopie"],
      richtig: [0],
      erklaerung: "Etwa: Gliederung, Freigabe, Text, Meta, Prüfung. Das kostet etwas Zeit, verbessert aber oft die Genauigkeit.",
      quelle: "Gute Prompts bauen: Aufbau und Techniken"
    },
    {
      typ: "luecke",
      text: "Die anwaltliche Verschwiegenheitspflicht steht berufsrechtlich in § 43a Abs. 2 ___.",
      optionen: ["BRAO", "UWG", "TMG"],
      richtig: [0],
      erklaerung: "Bundesrechtsanwaltsordnung. Strafrechtlich ist zusätzlich § 203 StGB einschlägig.",
      quelle: "Assistenten, Qualitätskontrolle und Datenschutz"
    },
    {
      typ: "luecke",
      text: "Verarbeitet ein KI-Anbieter personenbezogene Daten im Auftrag, braucht es in der Regel einen Vertrag nach Art. ___ DSGVO.",
      optionen: ["28", "6", "99"],
      richtig: [0],
      erklaerung: "Art. 28 DSGVO regelt die Auftragsverarbeitung.",
      quelle: "Assistenten, Qualitätskontrolle und Datenschutz"
    },
    {
      typ: "luecke",
      text: "OpenAI stellt Custom GPTs 2026 auf ___ um.",
      optionen: ["Plugins", "Newsletter", "Browser-Erweiterungen"],
      richtig: [0],
      erklaerung: "Anweisungen werden dabei zu einem Skill im Plugin. Für Enterprise ist laut Fachpresse der 11.12.2026 als Ende angekündigt.",
      quelle: "Assistenten, Qualitätskontrolle und Datenschutz"
    },

    // ---------- Zuordnen (5) ----------
    {
      typ: "zuordnen",
      frage: "Ordne die Prompt-Bausteine den Beispielen zu.",
      paare: [
        ["Rolle", "Du bist Redakteurin für eine Kanzlei-Website."],
        ["Kontext", "Leser sind Privatleute, die gerade geerbt haben."],
        ["Aufgabe", "Schreibe eine Gliederung mit H2 und H3."],
        ["Format", "Als Tabelle, max. 155 Zeichen je Zeile."],
        ["Beispiel", "Hier ein Absatz in unserem Hausstil: …"]
      ],
      erklaerung: "Die fünf Bausteine ergänzen sich. Der Kontext ist meist der größte Hebel.",
      quelle: "Gute Prompts bauen: Aufbau und Techniken"
    },
    {
      typ: "zuordnen",
      frage: "Welche Technik passt zu welchem Problem?",
      paare: [
        ["Few-Shot", "Ton und Stil passen nicht"],
        ["Prompt-Kette", "Aufgabe ist zu groß für einen Prompt"],
        ["Zitate zuerst", "Langes Dokument, KI schweift ab"],
        ["Unsicherheit erlauben", "KI erfindet Angaben"]
      ],
      erklaerung: "Nicht alle Techniken auf einmal, sondern die passende zum Problem.",
      quelle: "Gute Prompts bauen: Aufbau und Techniken"
    },
    {
      typ: "zuordnen",
      frage: "Ordne die Inhalte dem richtigen Ort im Assistenten zu.",
      paare: [
        ["Anweisungen", "Ton, Ablauf und Verbote"],
        ["Wissen", "Styleguide und gute Beispieltexte"],
        ["Chat", "Der konkrete Auftrag von heute"]
      ],
      erklaerung: "Verhalten in die Anweisungen, Nachschlagematerial ins Wissen, die Einzelaufgabe in den Chat.",
      quelle: "Assistenten, Qualitätskontrolle und Datenschutz"
    },
    {
      typ: "zuordnen",
      frage: "Ordne die Vorgaben dem Format zu.",
      paare: [
        ["Meta-Description", "max. ca. 155 Zeichen"],
        ["Title-Tag", "max. ca. 60 Zeichen"],
        ["Newsletter-Betreff", "max. ca. 50 Zeichen"],
        ["Alt-Text", "kurze sachliche Bildbeschreibung"]
      ],
      erklaerung: "Diese Grenzen sind Praxiswerte, die in die Vorlagen der Bibliothek eingebaut sind. Zeichenlimits im Prompt immer mitgeben.",
      quelle: "Prompt-Bibliothek: 14 Vorlagen für den Marketing-Alltag"
    },
    {
      typ: "zuordnen",
      frage: "Ordne die Regeln ihrer Grundlage zu.",
      paare: [
        ["Verschwiegenheit", "§ 43a Abs. 2 BRAO"],
        ["Auftragsverarbeitung", "Art. 28 DSGVO"],
        ["KI-Kompetenz", "Art. 4 EU AI Act"],
        ["Verletzung von Privatgeheimnissen", "§ 203 StGB"]
      ],
      erklaerung: "Für dich als Marketing-Mitarbeiter heißt das praktisch: keine Mandantendaten, nur freigegebene Werkzeuge, Kompetenz aufbauen.",
      quelle: "Assistenten, Qualitätskontrolle und Datenschutz"
    },

    // ---------- Reihenfolge (4) ----------
    {
      typ: "reihenfolge",
      frage: "Bring die Prompt-Kette für einen Blogartikel in eine sinnvolle Reihenfolge.",
      schritte: ["Suchintention bestimmen", "Gliederung erstellen und freigeben", "Abschnitte schreiben", "Meta-Title und Description erzeugen", "Kritik-Schleife und Faktencheck"],
      erklaerung: "Erst das Fundament (Intention, Gliederung), dann Text, dann Meta, am Ende die Prüfung.",
      quelle: "Gute Prompts bauen: Aufbau und Techniken"
    },
    {
      typ: "reihenfolge",
      frage: "Bring die Kritik-Schleife in die richtige Reihenfolge.",
      schritte: ["Entwurf erstellen lassen", "Gegen klare Kriterien prüfen lassen", "Schwächen auflisten lassen", "Überarbeitete Fassung erzeugen", "Selbst gegenlesen und Fakten prüfen"],
      erklaerung: "Die KI prüft sich selbst, der letzte Blick bleibt deiner.",
      quelle: "Gute Prompts bauen: Aufbau und Techniken"
    },
    {
      typ: "reihenfolge",
      frage: "Wie richtest du einen Redaktions-Assistenten sinnvoll ein?",
      schritte: ["Zweck und Zielgruppe festlegen", "Anweisungen schreiben (Rolle, Ton, Verbote)", "Wissen hochladen (Styleguide, Beispiele)", "Mit echten Aufgaben testen", "Anweisungen nachschärfen und als Datei sichern"],
      erklaerung: "Testen und Nachschärfen gehören dazu. Die Sicherung als Datei macht dich unabhängig vom Werkzeug.",
      quelle: "Assistenten, Qualitätskontrolle und Datenschutz"
    },
    {
      typ: "reihenfolge",
      frage: "Bring den Faktencheck eines KI-Textes in eine sinnvolle Reihenfolge.",
      schritte: ["Überprüfbare Behauptungen auflisten", "Primärquelle zu jeder Behauptung suchen", "Abweichungen korrigieren oder streichen", "Fachliche Freigabe einholen"],
      erklaerung: "Die Faktencheck-Vorlage aus der Bibliothek erledigt Schritt 1. Prüfen und freigeben bleibt Menschensache.",
      quelle: "Prompt-Bibliothek: 14 Vorlagen für den Marketing-Alltag"
    },
    {
      typ: "fall",
      fall: "Du lässt dir von der KI einen Blogartikel zum Thema „Testament ändern“ schreiben. Heraus kommt ein Text voller Superlative: „Ihre erfahrenen Top-Experten“, „Wir holen das Beste für Sie heraus“.",
      frage: "Was änderst du am Prompt?",
      optionen: [
        "Ich schreibe nur „weniger werblich“ dahinter und lasse neu generieren.",
        "Ich ergänze Zielgruppe, Ziel und Ton positiv formuliert („sachlich, verständlich, per Sie“), schließe Werbesprache und Erfolgsversprechen aus und gebe einen Musterabsatz im Hausstil als Beispiel mit.",
        "Ich gebe der KI die Rolle „erfahrener Werbetexter“, damit sie professioneller klingt.",
        "Ich verlange einfach einen doppelt so langen Text."
      ],
      richtig: [1],
      erklaerung: "Kontext und Format sind der größte Hebel. Positive Vorgaben wirken besser als nur Verbote, und ein Beispiel steuert den Ton oft zuverlässiger als jede Beschreibung. „Keine Werbesprache, keine Erfolgsversprechen“ steht so auch im Vorher-nachher-Beispiel.",
      quelle: "Gute Prompts bauen: Aufbau und Techniken"
    },
    {
      typ: "fall",
      fall: "Ein Kollege möchte die E-Mail einer Mandantin zu ihrem Erbstreit in die kostenlose ChatGPT-Version kopieren, um daraus einen anschaulichen Blogartikel zu machen. „Den Namen lösche ich vorher, und das Training schalte ich ab.“",
      frage: "Wie reagierst du?",
      optionen: [
        "Passt so, ohne Namen und mit abgeschaltetem Training ist das unproblematisch.",
        "Passt, solange der fertige Artikel fachlich geprüft wird.",
        "Stopp: Mandantendaten gehören nicht in KI-Werkzeuge. Für den Artikel reicht ein ausgedachtes, allgemeines Beispiel.",
        "Er soll die E-Mail lieber in einen anderen kostenlosen Chatbot kopieren."
      ],
      richtig: [2],
      erklaerung: "Grundregel: keine Mandantendaten in KI-Werkzeuge (Verschwiegenheit, § 43a Abs. 2 BRAO). Anonymisieren reicht oft nicht, weil Ort, Datum und ein ungewöhnlicher Sachverhalt eine Person erkennbar machen. Das Training abzuschalten ändert nichts an der Grundregel.",
      quelle: "Assistenten, Qualitätskontrolle und Datenschutz"
    },
    {
      typ: "fall",
      fall: "Im KI-Entwurf für einen Mietrechts-Artikel steht: „Der BGH hat 2024 entschieden (Az. VIII ZR 123/24), dass …“. Der Satz klingt überzeugend und passt perfekt in den Text.",
      frage: "Was ist der richtige nächste Schritt?",
      optionen: [
        "Übernehmen, die KI nennt ja ein konkretes Aktenzeichen.",
        "Die KI fragen, ob sie sich sicher ist, und bei „Ja“ übernehmen.",
        "Das Urteil an der Primärquelle prüfen (Gericht, Entscheidungsdatenbank), den Link wirklich öffnen und die Aussage fachlich freigeben lassen.",
        "Nur das Aktenzeichen streichen, den Rest des Satzes stehen lassen."
      ],
      richtig: [2],
      erklaerung: "Sprachmodelle erfinden gerade bei Paragrafen, Aktenzeichen, Zahlen und Zitaten plausibel klingende Angaben. Jedes Urteil wird an der Primärquelle geprüft, rechtliche Aussagen gibt ein Mensch fachlich frei.",
      quelle: "Assistenten, Qualitätskontrolle und Datenschutz"
    },
    {
      typ: "fall",
      fall: "Dein Prompt für Newsletter-Teaser lautet: „Fasse den Artikel kurz zusammen, aber erkläre alle Details ausführlich.“ Die Ergebnisse sind mal drei Zeilen, mal eine halbe Seite.",
      frage: "Woran liegt das, und was hilft?",
      optionen: [
        "Die Vorgaben widersprechen sich. Besser eindeutig: 3 bis 4 Sätze, die neugierig machen, ohne alles zu verraten, plus Button-Text mit max. 4 Wörtern.",
        "Die KI ist einfach unzuverlässig, da hilft nur häufiger neu generieren.",
        "Der Prompt ist zu kurz, ich sollte noch mehr Anforderungen ergänzen.",
        "Ich sollte „Geh Schritt für Schritt vor“ ergänzen."
      ],
      richtig: [0],
      erklaerung: "Widersprüchliche Vorgaben wie „kurz“ und „ausführlich mit allen Details“ verschlechtern das Ergebnis, aktuelle Modelle nehmen Anweisungen sehr genau. Die Teaser-Vorlage aus der Bibliothek zeigt eine eindeutige Fassung.",
      quelle: "Gute Prompts bauen: Aufbau und Techniken"
    },
    {
      typ: "fall",
      fall: "Du willst mit einem einzigen Prompt Recherche, Gliederung, kompletten Artikel, Title, Meta-Description und drei Social-Posts zum Thema „Pflichtteil“ erzeugen. Das Ergebnis ist überall mittelmäßig.",
      frage: "Wie gehst du besser vor?",
      optionen: [
        "Den Prompt noch länger machen und alle Anforderungen fett markieren.",
        "Die Aufgabe als Prompt-Kette in Schritte teilen, z. B. Gliederung, Freigabe, Text, Prüfung, danach Meta und Social-Posts.",
        "Ein anderes Modell ausprobieren, der Prompt ist in Ordnung.",
        "Die Recherche einfach weglassen, dann wird der Rest besser."
      ],
      richtig: [1],
      erklaerung: "„Alles in einen Prompt“ ist ein typischer Fehler. Große Aufgaben teilst du in mehrere Prompts nacheinander auf (Prompt-Ketten). So kannst du jeden Zwischenschritt prüfen und nachsteuern.",
      quelle: "Assistenten, Qualitätskontrolle und Datenschutz"
    },
    {
      typ: "fall",
      fall: "Du gibst der KI drei Beispiel-Posts aus eurem LinkedIn-Kanal mit. Alle drei beginnen mit einer Frage und sind fast gleich lang. Jetzt klingen auch alle neuen Posts gleich: Frage am Anfang, gleiche Länge.",
      frage: "Was änderst du an deinen Beispielen?",
      optionen: [
        "Gar keine Beispiele mehr mitgeben, nur noch beschreiben.",
        "Nur noch ein einziges Beispiel verwenden.",
        "3 bis 5 Beispiele wählen, die nah am echten Fall sind, sich untereinander unterscheiden und klar vom Auftrag getrennt sind.",
        "Die KI bitten, die Beispiele zu ignorieren."
      ],
      richtig: [2],
      erklaerung: "Bei Few-Shot übernimmt die KI auch ungewollte Muster. Sind alle Beispiele gleich lang oder beginnen gleich, kopiert sie das. Anthropic empfiehlt 3 bis 5 unterschiedliche, klar markierte Beispiele.",
      quelle: "Gute Prompts bauen: Aufbau und Techniken"
    },
    {
      typ: "fehler",
      frage: "Finde die Schwächen in diesem Prompt für einen Blogartikel.",
      teile: [
        { text: "Schreib was über Erbrecht.", falsch: true, warum: "Keine Rolle, keine Zielgruppe, kein Ziel, kein klares Thema. Die KI kennt weder Kanzlei noch Leser, außer du sagst es ihr." },
        { text: "Fokus-Keyword: „Erbe ausschlagen Frist“.", falsch: false },
        { text: "Mach es irgendwie gut und professionell.", falsch: true, warum: "Zu vage. Besser konkret: „sachlich, verständlich, per Sie, für Laien ohne Vorwissen“." },
        { text: "Etwa 1.200 Wörter, Gliederung mit H2 und H3.", falsch: false },
        { text: "Keine Aufzählungen, keine Fachbegriffe, keine langen Sätze, nichts Werbliches.", falsch: true, warum: "Nur Verbote. Sag, was du willst, z. B. „Schreibe in kurzen Absätzen und erkläre Fachbegriffe“." }
      ],
      erklaerung: "Rolle, Kontext, Aufgabe, Format, Beispiele: Hier fehlen Rolle und Kontext, und das Format ist nur über Verbote beschrieben. Keyword und Länge sind dagegen gut vorgegeben.",
      quelle: "Gute Prompts bauen: Aufbau und Techniken"
    },
    {
      typ: "fehler",
      frage: "Was ist an diesem Prompt aus Datenschutz-Sicht problematisch?",
      teile: [
        { text: "Du bist Redakteurin für die Website einer deutschen Kanzlei.", falsch: false },
        { text: "Hier die E-Mail von Frau Petra M., Az. 12 O 345/26, zu ihrem Streit mit ihrem Bruder ums Elternhaus:", falsch: true, warum: "Name, Aktenzeichen und E-Mail einer Mandantin gehören nie in ein KI-Werkzeug (Verschwiegenheit, § 43a Abs. 2 BRAO)." },
        { text: "Mach daraus einen anonymen Fallbericht, die Namen ändere ich später.", falsch: true, warum: "Die Daten sind dann schon beim Anbieter. Außerdem reicht Anonymisieren oft nicht: Der ungewöhnliche Sachverhalt macht die Person erkennbar." },
        { text: "Zielgruppe: Privatleute ohne Vorwissen.", falsch: false },
        { text: "Markiere jede Rechtsaussage mit [prüfen].", falsch: false }
      ],
      erklaerung: "Für Marketing-Texte brauchst du keine echten Fälle. Ein ausgedachtes, allgemeines Beispiel erfüllt denselben Zweck ohne Risiko.",
      quelle: "Assistenten, Qualitätskontrolle und Datenschutz"
    },
    {
      typ: "fehler",
      frage: "Finde die Stellen in diesem Recherche-Prompt, die zu falschen Fakten führen können.",
      teile: [
        { text: "Recherchiere den aktuellen Stand zur Mietpreisbremse in Deutschland.", falsch: false },
        { text: "Quellen brauchst du nicht anzugeben.", falsch: true, warum: "Ohne Quelle mit Link und Datum kannst du nichts prüfen. Die Vorlage verlangt zu jeder Aussage eine Quelle." },
        { text: "Wenn du etwas nicht weißt, ergänze einfach plausible Zahlen.", falsch: true, warum: "Lädt zu Halluzinationen ein. Besser Unsicherheit erlauben: „Wenn du keine verlässliche Quelle findest, schreib das.“" },
        { text: "Trenne gesicherte Fakten, Einschätzungen und offene Punkte.", falsch: false },
        { text: "Das Ergebnis übernehme ich dann direkt in den Artikel.", falsch: true, warum: "Ergebnis ungeprüft übernehmen ist der teuerste Fehler. Zahlen und Normen an der Primärquelle prüfen und fachlich freigeben lassen." }
      ],
      erklaerung: "Vergleiche mit Vorlage 12 „Recherche mit Quellen“: Quellen mit Link und Datum, klare Trennung, Primärquellen bevorzugen und offen sagen, wenn nichts Verlässliches gefunden wird.",
      quelle: "Prompt-Bibliothek: 14 Vorlagen für den Marketing-Alltag"
    },
    {
      typ: "fehler",
      frage: "Finde die Fehler in diesem Prompt für Title und Meta-Description.",
      teile: [
        { text: "Erstelle 5 Varianten für Title (max. 60 Zeichen) und Meta-Description (max. 155 Zeichen).", falsch: false },
        { text: "Fokus-Keyword: „Scheidung Kosten“, möglichst weit vorne.", falsch: false },
        { text: "Betone, dass wir die beste Kanzlei der Region sind und jeden Fall gewinnen.", falsch: true, warum: "Superlative wie „beste Kanzlei“ und Erfolgsversprechen gehören nicht in Kanzlei-Texte. Die Vorlage verlangt stattdessen einen klaren Nutzen." },
        { text: "Halte dich kurz, aber erkläre in jeder Description alle Details zum Thema.", falsch: true, warum: "Widersprüchliche Vorgabe: Kurz und alle Details schließen sich bei 155 Zeichen aus." },
        { text: "Ausgabe als Tabelle mit Zeichenzahl.", falsch: false }
      ],
      erklaerung: "Die Vorlage 4 „Title und Description“ ist klar und widerspruchsfrei: Zeichenlimits, Keyword vorne, Nutzen am Ende, keine Superlative, Tabelle mit Zeichenzahl.",
      quelle: "Prompt-Bibliothek: 14 Vorlagen für den Marketing-Alltag"
    },
    {
      typ: "fehler",
      frage: "Prüfe diese Anweisungen für einen Redaktions-Assistenten. Welche Teile sind problematisch?",
      teile: [
        { text: "Du unterstützt die Online-Redaktion einer deutschen Anwaltskanzlei.", falsch: false },
        { text: "Schreib sachlich, per Sie, ohne Werbesprache und ohne Erfolgsversprechen.", falsch: false },
        { text: "Wenn ein passender Paragraf fehlt, denk dir einen plausiblen aus.", falsch: true, warum: "Das Gegenteil ist richtig: Erfinde nie Paragrafen, Urteile, Zahlen oder Zitate." },
        { text: "Alle Regeln zu Ton und Ablauf stehen nur in der hochgeladenen Datei „regeln.pdf“.", falsch: true, warum: "Regeln, Ton und Arbeitsweise gehören in die Anweisungen, nicht in hochgeladene Dateien. Das Wissen ist Nachschlagematerial." },
        { text: "Frag nach, wenn Zielgruppe oder Keyword fehlen.", falsch: false }
      ],
      erklaerung: "Anweisungen regeln das Verhalten, Wissen ist Nachschlagematerial. Und: Die Anweisungen zusätzlich als eigene Textdatei sichern, damit du sie in jedes Werkzeug mitnehmen kannst.",
      quelle: "Assistenten, Qualitätskontrolle und Datenschutz"
    }
  ],
  begriffe: [
    {"begriff":"Actions (GPT)","kurz":"Eigene API-Anbindungen in einem Custom GPT, mit denen der Assistent externe Dienste aufrufen kann.","mehr":"Beim Umzug eines GPT zum Plugin wandern sie nicht mit.","siehe":["Custom GPT","Plugin (ChatGPT)"]},
    {"begriff":"Alt-Text","kurz":"Kurze, sachliche Bildbeschreibung im HTML, die Screenreader vorlesen und Suchmaschinen auswerten.","mehr":"In der Prompt-Bibliothek mit max. 120 Zeichen pro Bild angefragt.","siehe":["Zeichenlimit"]},
    {"begriff":"Anonymisieren","kurz":"Personenbezogene Angaben so entfernen oder verändern, dass niemand mehr erkennbar ist.","mehr":"Reicht oft nicht: Ort, Datum und ein ungewöhnlicher Sachverhalt machen Personen schnell wieder erkennbar. Besser gleich ausgedachte Beispiele.","siehe":["Mandantendaten","Personenbezogene Daten"]},
    {"begriff":"Anweisungen (Assistent)","kurz":"Feste Vorgaben eines KI-Assistenten zu Rolle, Ton, Ablauf, Verboten und Rückfragen, sie regeln sein Verhalten.","mehr":"Laut OpenAI gehören Regeln und Ton in die Anweisungen, nicht in hochgeladene Dateien. Immer auch als eigene Textdatei sichern.","siehe":["Wissen (Assistent)","Custom GPT","Claude Projects","Systemprompt"]},
    {"begriff":"Aufgabe (Prompt)","kurz":"Der Baustein, der mit einem klaren Verb sagt, was genau passieren soll, z. B. „Schreibe“, „Kürze“ oder „Prüfe“.","mehr":"Sag, was getan werden soll, nicht nur, was vorgeschlagen werden könnte.","siehe":["Prompt-Bausteine","Format (Prompt)"]},
    {"begriff":"AV-Vertrag (Auftragsverarbeitungsvertrag)","kurz":"Vertrag nach Art. 28 DSGVO, nötig, wenn ein Anbieter personenbezogene Daten im Auftrag verarbeitet.","mehr":"Ob er abgeschlossen wird, entscheidet die Kanzlei, nicht der einzelne Nutzer im Browser.","siehe":["DSGVO (Datenschutz-Grundverordnung)","Personenbezogene Daten"]},
    {"begriff":"Beispiele (Prompt)","kurz":"Muster wie ein guter Absatz oder eine frühere Betreffzeile, die Ton und Form oft zuverlässiger steuern als jede Beschreibung.","siehe":["Few-Shot-Prompting","Prompt-Bausteine"]},
    {"begriff":"Bild-Prompt","kurz":"Anweisung an einen Bildgenerator mit Motiv, Bildausschnitt, Handlung, Ort und Stil.","mehr":"Text im Bild wird oft falsch geschrieben, deshalb später selbst setzen. Änderungen konkret formulieren: „Ändere nur die Farbe der Tasse.“","siehe":["Prompt"]},
    {"begriff":"BRAK-Hinweise zum KI-Einsatz","kurz":"Hinweise der Bundesrechtsanwaltskammer zum Einsatz von KI (Stand Dezember 2024) zu Prüfpflichten, Verschwiegenheit und Transparenz.","mehr":"Laut Berichten erfüllen frei verfügbare KI-Dienste in der Standardeinstellung die Verschwiegenheits-Anforderungen nicht.","siehe":["Verschwiegenheitspflicht (§ 43a BRAO, § 203 StGB)"]},
    {"begriff":"Claude Projects","kurz":"Arbeitsbereiche in Claude, die eigene Anweisungen, Wissensdateien und Chats bündeln.","mehr":"Ein Chat weiß nicht automatisch, was in einem anderen besprochen wurde. In Team- und Enterprise-Tarifen teilbar.","siehe":["Anweisungen (Assistent)","Wissen (Assistent)","Custom GPT"]},
    {"begriff":"Clickbait","kurz":"Reißerische Formulierung, die Klicks erzwingen will, ohne das Versprechen einzulösen.","mehr":"In Newsletter-Betreffzeilen bewusst verbieten, ebenso Großbuchstaben-Wörter und „Kostenlos!“.","siehe":["Preheader"]},
    {"begriff":"Custom GPT","kurz":"Eigener Assistent in ChatGPT mit festen Anweisungen und bis zu 20 Wissensdateien (je bis zu 512 MB).","mehr":"OpenAI stellt Custom GPTs 2026 auf Plugins um; für Enterprise ist der 11.12.2026 als Ende angekündigt.","siehe":["Plugin (ChatGPT)","Anweisungen (Assistent)","Wissen (Assistent)"]},
    {"begriff":"Denkmodus","kurz":"Eigener Modus vieler aktueller Modelle, in dem die KI vor der Antwort länger überlegt.","mehr":"Lässt sich bei kniffligen Aufgaben einschalten, ergänzend zur Technik „Schritt für Schritt“.","siehe":["Schritt für Schritt"]},
    {"begriff":"DSGVO (Datenschutz-Grundverordnung)","kurz":"EU-Gesetz zum Schutz personenbezogener Daten, das auch beim Prompten gilt.","siehe":["AV-Vertrag (Auftragsverarbeitungsvertrag)","Personenbezogene Daten"]},
    {"begriff":"Erst zitieren, dann antworten","kurz":"Technik für lange Dokumente: Die KI zieht zuerst die relevanten Stellen wörtlich heraus und antwortet erst dann.","mehr":"So bleibt sie beim Material statt zu fantasieren, etwa beim Auffrischen eines alten Artikels.","siehe":["Halluzination","Lange Texte oben"]},
    {"begriff":"Fachliche Freigabe","kurz":"Rechtliche Aussagen in KI-Texten prüft und gibt eine fachkundige Person frei, bevor sie veröffentlicht werden.","mehr":"Die Verantwortung bleibt beim Menschen. Hilfreich: Rechtsaussagen im Entwurf mit [prüfen] markieren lassen.","siehe":["Faktencheck","Kritik-Schleife"]},
    {"begriff":"Faktencheck","kurz":"Prüfung jeder überprüfbaren Behauptung wie Zahlen, Fristen, Paragrafen, Urteile und Namen an der Primärquelle.","mehr":"Die Prompt-Bibliothek enthält eine Vorlage, die alle Behauptungen als Tabelle auflistet, ohne sie selbst zu bewerten.","siehe":["Primärquelle","Halluzination","Fachliche Freigabe"]},
    {"begriff":"Few-Shot-Prompting","kurz":"Du gibst der KI einige Beispiele mit, damit sie Ton, Form und Stil übernimmt.","mehr":"Anthropic empfiehlt 3 bis 5 Beispiele, nah am echten Fall, verschieden und klar markiert. Die KI kopiert auch ungewollte Muster.","siehe":["Beispiele (Prompt)","Vorlage"]},
    {"begriff":"Format (Prompt)","kurz":"Der Baustein, der festlegt, wie das Ergebnis aussieht: Länge, Gliederung, Zeichenlimits, Tonalität, Tabelle oder Fließtext.","mehr":"Positiv formulieren: „Schreibe in Absätzen“ wirkt besser als „keine Aufzählungen“.","siehe":["Prompt-Bausteine","Zeichenlimit"]},
    {"begriff":"Grenzen (Prompt)","kurz":"Angaben, was tabu oder unsicher ist, etwa keine Erfolgsversprechen oder Rechtsaussagen mit [prüfen] markieren.","siehe":["Prompt-Bausteine"]},
    {"begriff":"Halluzination","kurz":"Die KI erfindet plausibel klingende, aber falsche Angaben, z. B. Paragrafen, Aktenzeichen, Zahlen oder Zitate.","mehr":"Gegenmittel: „weiß ich nicht“ erlauben, Quellen verlangen, Material mitgeben und selbst prüfen.","siehe":["Unsicherheit erlauben","Faktencheck","Primärquelle"]},
    {"begriff":"KI-Kompetenz (Art. 4 AI Act)","kurz":"Pflicht aus dem EU AI Act seit 2. Februar 2025: Unternehmen, die KI einsetzen, sollen für ausreichende KI-Kompetenz ihres Personals sorgen.","mehr":"Sinnvoll ist eine interne KI-Richtlinie, welche Werkzeuge wofür erlaubt sind.","siehe":["KI-Richtlinie"]},
    {"begriff":"KI-Richtlinie","kurz":"Interne Regel eines Unternehmens, welche KI-Werkzeuge für welche Aufgaben erlaubt sind.","mehr":"Hilft, die Anforderungen an KI-Kompetenz und Datenschutz im Alltag umzusetzen.","siehe":["KI-Kompetenz (Art. 4 AI Act)","Mandantendaten"]},
    {"begriff":"Kollegen-Test","kurz":"Zeig den Prompt jemandem ohne Vorwissen: Wäre die Person verwirrt, ist es die KI auch.","mehr":"Empfehlung aus Anthropics Prompt-Leitfaden. Stell dir die KI als fähige neue Mitarbeiterin am ersten Tag vor.","siehe":["Kontext (Prompt)","Prompt"]},
    {"begriff":"Kontext (Prompt)","kurz":"Der Baustein, der sagt, für wen der Text ist, wo er erscheint, was das Ziel ist und was es schon gibt.","mehr":"Meist der größte Hebel. Auch das Warum einer Regel hilft, damit die KI sie sinnvoll anwendet.","siehe":["Prompt-Bausteine","Kollegen-Test"]},
    {"begriff":"Kritik-Schleife","kurz":"Die KI prüft ihren Entwurf gegen klare Kriterien, nennt Schwächen und liefert eine überarbeitete Fassung.","mehr":"Fängt viele Schwächen ab, ersetzt aber nicht die eigene Prüfung von Fakten und Rechtsaussagen.","siehe":["Fachliche Freigabe","Prompt-Kette"]},
    {"begriff":"Lange Texte oben","kurz":"Mitgegebenes Material wie Urteil, alter Artikel oder Notizen steht am Anfang, der Auftrag danach.","mehr":"So empfiehlt es Anthropic für lange Dokumente.","siehe":["Erst zitieren, dann antworten"]},
    {"begriff":"Mandantendaten","kurz":"Namen, Kontaktdaten, Aktenzeichen, Schriftsätze oder E-Mails von Mandanten, die nicht in KI-Werkzeuge gehören.","mehr":"Grundregel beim Prompten in der Kanzlei. Für Marketing-Texte reichen allgemeine oder ausgedachte Beispiele.","siehe":["Verschwiegenheitspflicht (§ 43a BRAO, § 203 StGB)","Anonymisieren","Personenbezogene Daten"]},
    {"begriff":"Meta-Description","kurz":"Kurzer Beschreibungstext einer Seite für die Suchergebnisse, im Prompt mit etwa 155 Zeichen begrenzt.","mehr":"Guter Prompt: Keyword, Zeichenlimit, Nutzen am Ende, keine Superlative, mehrere Varianten mit Zeichenzahl.","siehe":["Title","Zeichenlimit"]},
    {"begriff":"Persona","kurz":"Im Gemini-Leitfaden von Google die Rolle oder Perspektive, aus der die KI schreibt, neben Aufgabe, Kontext und Format.","siehe":["Rolle (Prompt)","Prompt-Bausteine"]},
    {"begriff":"Personenbezogene Daten","kurz":"Alle Angaben, mit denen sich eine Person direkt oder indirekt identifizieren lässt, etwa Name, Adresse oder E-Mail.","mehr":"Sie fallen unter die DSGVO und gehören ohne geprüften Vertrag nicht in KI-Tools.","siehe":["DSGVO (Datenschutz-Grundverordnung)","Anonymisieren","Mandantendaten"]},
    {"begriff":"Platzhalter","kurz":"Teile einer Vorlage in [eckigen Klammern], die man vor dem Einsatz durch die echten Angaben ersetzt.","mehr":"Beispiel: [Keyword], [Zielgruppe], [Artikeltext].","siehe":["Vorlage","Prompt-Bibliothek"]},
    {"begriff":"Plugin (ChatGPT)","kurz":"Neue Form von Erweiterungen in ChatGPT, auf die OpenAI die Custom GPTs umstellt.","mehr":"Beim Umzug werden die Anweisungen zu einem Skill, verbundene Apps wandern mit, eigene Actions und die Modellwahl nicht.","siehe":["Custom GPT","Skill","Actions (GPT)"]},
    {"begriff":"Preheader","kurz":"Kurzer Vorschautext, der im Postfach neben oder unter der Betreffzeile eines Newsletters erscheint.","mehr":"In der Vorlage mit max. 90 Zeichen angefragt.","siehe":["Clickbait","Zeichenlimit"]},
    {"begriff":"Primärquelle","kurz":"Die ursprüngliche Stelle einer Information, etwa Gesetzestext, Gericht, Behörde oder Kammer, nicht ein Blog darüber.","mehr":"In Recherche-Prompts ausdrücklich bevorzugen lassen.","siehe":["Faktencheck","Halluzination"]},
    {"begriff":"Prompt","kurz":"Ein Arbeitsauftrag an die KI: Je klarer der Auftrag, desto besser das Ergebnis.","mehr":"Die KI kennt weder Kanzlei noch Zielgruppe noch Stil, außer du sagst es ihr.","siehe":["Prompt-Bausteine","Kollegen-Test"]},
    {"begriff":"Prompt-Bausteine","kurz":"Die Teile eines guten Prompts: Rolle, Kontext, Aufgabe, Format und Beispiele, oft ergänzt um Grenzen.","siehe":["Rolle (Prompt)","Kontext (Prompt)","Aufgabe (Prompt)","Format (Prompt)","Beispiele (Prompt)","Grenzen (Prompt)"]},
    {"begriff":"Prompt-Bibliothek","kurz":"Sammlung erprobter Vorlagen mit Platzhaltern für wiederkehrende Aufgaben wie Blog, SEO-Meta, Newsletter und Social.","mehr":"Die Bibliothek in diesem Thema enthält 14 Vorlagen.","siehe":["Vorlage","Platzhalter"]},
    {"begriff":"Prompt-Fehler","kurz":"Typische Schwächen beim Prompten: zu wenig Kontext, alles in einem Prompt, Widersprüche, nur Verbote, ungeprüfte Übernahme.","mehr":"Der teuerste Fehler ist, das Ergebnis ungeprüft zu übernehmen. Der erste Entwurf ist ein Entwurf: gezielt nachschärfen.","siehe":["Kontext (Prompt)","Prompt-Kette","Widersprüchliche Vorgaben"]},
    {"begriff":"Prompt-Kette","kurz":"Eine große Aufgabe wird auf mehrere Prompts verteilt, das Ergebnis des einen ist die Eingabe des nächsten.","mehr":"Beispiel: Gliederung, Freigabe, Text, Meta, Prüfung.","siehe":["Schritt für Schritt","Kritik-Schleife"]},
    {"begriff":"Rolle (Prompt)","kurz":"Der Baustein, der die Perspektive festlegt, z. B. „Du bist Redakteurin für eine Kanzlei-Website.“","mehr":"Ein Satz reicht. Anthropic rät, eher die gewünschte Perspektive zu beschreiben als eine aufwendige Persona.","siehe":["Prompt-Bausteine","Persona"]},
    {"begriff":"Schritt für Schritt","kurz":"Technik, bei der die KI erst überlegt und dann antwortet, am besten mit selbst vorgegebenen Schritten.","mehr":"Beispiel: erst die Suchintention bestimmen, dann die Gliederung, dann den Text.","siehe":["Prompt-Kette","Denkmodus","Suchintention"]},
    {"begriff":"Skill","kurz":"Wiederverwendbare Anleitung für eine KI, in die beim Umzug eines Custom GPT zum Plugin dessen Anweisungen übergehen.","mehr":"Gute Prompts lassen sich auch als Skill speichern und wiederverwenden.","siehe":["Plugin (ChatGPT)","Anweisungen (Assistent)"]},
    {"begriff":"Suchintention","kurz":"Die Absicht hinter einer Suchanfrage, also was jemand mit der Suche erreichen will.","mehr":"In der Gliederungs-Vorlage bestimmt die KI zuerst die Suchintention, bevor sie die Struktur baut.","siehe":["Schritt für Schritt"]},
    {"begriff":"Systemprompt","kurz":"Grundanweisung, die für ein ganzes Gespräch oder Werkzeug gilt, im Assistenten meist als „Anweisungen“ hinterlegt.","siehe":["Anweisungen (Assistent)"]},
    {"begriff":"Title","kurz":"Der Seitentitel, der in den Suchergebnissen als Überschrift erscheint, im Prompt mit max. 60 Zeichen begrenzt.","mehr":"Das Fokus-Keyword möglichst weit vorne.","siehe":["Meta-Description","Zeichenlimit"]},
    {"begriff":"Training abschalten","kurz":"Einstellung, die verhindert, dass Eingaben zum Training eines KI-Modells genutzt werden.","mehr":"Bei privaten ChatGPT-Konten: „Das Modell für alle verbessern“ unter Einstellungen, Datenkontrollen. Die Grundregel „keine Mandantendaten“ gilt trotzdem.","siehe":["Mandantendaten"]},
    {"begriff":"Unsicherheit erlauben","kurz":"Der KI ausdrücklich erlauben zu sagen, dass sie etwas nicht sicher weiß, statt zu raten.","mehr":"Typische Formulierung: „Wenn du es nicht sicher weißt, sag das.“ Senkt erfundene Angaben.","siehe":["Halluzination"]},
    {"begriff":"Verschwiegenheitspflicht (§ 43a BRAO, § 203 StGB)","kurz":"Anwälte müssen über Mandatsgeheimnisse schweigen, berufsrechtlich nach § 43a Abs. 2 BRAO, strafrechtlich über § 203 StGB.","mehr":"Ein KI-Anbieter, der damit in Berührung kommt, müsste bewusst eingebunden und zur Verschwiegenheit verpflichtet werden.","siehe":["Mandantendaten","BRAK-Hinweise zum KI-Einsatz"]},
    {"begriff":"Vorlage","kurz":"Ein wiederverwendbarer Prompt mit [Platzhaltern] für Aufgaben, die man öfter braucht.","mehr":"Ton und Qualität bleiben gleich, und man spart Zeit.","siehe":["Platzhalter","Prompt-Bibliothek"]},
    {"begriff":"Widersprüchliche Vorgaben","kurz":"Anweisungen, die sich gegenseitig ausschließen, etwa „kurz“ und „ausführlich mit allen Details“.","mehr":"OpenAI betont für GPT-5, dass das Modell Anweisungen sehr genau nimmt, Widersprüche verschlechtern das Ergebnis.","siehe":["Prompt-Fehler"]},
    {"begriff":"Wissen (Assistent)","kurz":"Nachschlagematerial eines KI-Assistenten, etwa Styleguide, Leistungsübersicht, Keyword-Liste und gute Beispieltexte.","siehe":["Anweisungen (Assistent)","Custom GPT","Claude Projects"]},
    {"begriff":"Zeichenlimit","kurz":"Vorgabe, wie viele Zeichen ein Text höchstens haben darf, z. B. 60 für den Title oder 155 für die Meta-Description.","mehr":"Am besten die KI die Zeichenzahl gleich mit ausgeben lassen.","siehe":["Title","Meta-Description","Format (Prompt)"]}
  ]
});

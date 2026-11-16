window.LERN_THEMEN = window.LERN_THEMEN || [];
window.LERN_THEMEN.push({
  id: "ki-aktuell-2026",
  titel: "KI aktuell 2026",
  untertitel: "Neue Modelle, Agenten, KI-Suche und Regeln – praxisnah fürs Online-Marketing",
  beschreibung: "Was sich 2026 in der KI getan hat: große Modelle, Agenten und MCP, KI-Suche wie Google AI Mode, Bild- und Video-KI, EU AI Act, Urheberrecht und Risiken – mit Blick auf Redaktion, SEO und Social Media.",
  farbe: "#7c3aed",
  quelle: "Eigene Online-Recherche, Stand 16.11.2026 (Quellen am Ende jedes Berichts). Modellnamen und Versionen ändern sich schnell – im Zweifel beim Anbieter nachsehen.",

  berichte: [
    {
      titel: "Überblick: Was ist neu in der KI?",
      html:
        "<h3>Das Wichtigste in drei Sätzen</h3>" +
        "<p>2026 ist KI vom Chatfenster in die Arbeitsabläufe gewandert: Modelle können nicht nur Texte schreiben, sondern <strong>Werkzeuge bedienen, im Browser klicken und mehrstufige Aufgaben selbst erledigen</strong> (Agenten). Gleichzeitig hat sich die <strong>Suche</strong> verändert – Google, ChatGPT und Perplexity beantworten Fragen direkt. Und in der EU gelten seit dem 2. August 2026 die meisten Regeln des <strong>AI Act</strong>, darunter Kennzeichnungspflichten.</p>" +

        "<h3>Die großen Anbieter und ihre Modelle</h3>" +
        "<p>Die Anbieter bringen inzwischen alle paar Monate neue Versionen. Merke dir lieber die <strong>Familien</strong> als einzelne Versionsnummern:</p>" +
        "<ul>" +
        "<li><strong>OpenAI (ChatGPT):</strong> Im Juli 2026 kam die GPT‑5.6-Familie, ab September 2026 laut Berichten die GPT‑6-Familie (u. a. „Astra“ als Flaggschiff). Typisch: ein großes Modell für schwierige Aufgaben, ein ausgewogenes und ein günstiges, schnelles Modell.</li>" +
        "<li><strong>Google (Gemini):</strong> Gemini 3 (Nov. 2025), danach 3.1 Pro, mehrere schnelle „Flash“-Modelle und im Herbst 2026 erste Gemini‑4-Modelle. Gemini steckt auch in der Google-Suche (AI Overviews, AI Mode) und in Workspace.</li>" +
        "<li><strong>Anthropic (Claude):</strong> Claude-Modelle der 5er-Generation, gestaffelt von groß (Opus) über mittel (Sonnet) bis klein und schnell (Haiku). Stark beim Schreiben, bei langen Dokumenten und beim Programmieren; Anthropic hat auch MCP erfunden.</li>" +
        "<li><strong>Weitere:</strong> Meta (Llama), Mistral (aus Frankreich, interessant für EU-Datenschutz), xAI (Grok) sowie chinesische Anbieter wie DeepSeek, Qwen oder Kimi, deren Modelle oft offen verfügbar sind.</li>" +
        "</ul>" +
        "<p><strong>Praxis-Tipp:</strong> Für den Alltag reicht meist das mittlere Modell. Das große lohnt sich für Analysen, lange Recherchen oder knifflige Texte; das kleine für Massenaufgaben wie Meta-Descriptions oder Alt-Texte.</p>" +

        "<h3>Was die Modelle heute können</h3>" +
        "<ul>" +
        "<li><strong>Multimodal:</strong> Text, Bilder, PDFs, Screenshots, Audio und teils Video verstehen – und vieles davon auch erzeugen.</li>" +
        "<li><strong>Reasoning („Nachdenken“):</strong> Modelle denken vor der Antwort in Zwischenschritten nach. Das hilft bei Logik, Rechnen und Planung, dauert aber länger.</li>" +
        "<li><strong>Große Kontextfenster:</strong> Ganze Handbücher, lange Verträge oder viele Blogartikel auf einmal verarbeiten.</li>" +
        "<li><strong>Websuche und Werkzeuge:</strong> aktuelle Quellen abrufen, Dateien erstellen, Tabellen auswerten.</li>" +
        "</ul>" +

        "<h3>KI-Agenten und Automatisierung</h3>" +
        "<p>Ein <strong>Agent</strong> bekommt ein Ziel statt einer einzelnen Frage – etwa „Recherchiere fünf aktuelle Urteile zum Thema X und lege eine Tabelle an“. Er plant Schritte, nutzt Werkzeuge (Suche, Browser, Dateien) und prüft Zwischenergebnisse. Beispiele: Agenten-Modi in ChatGPT und Gemini, Claude mit Computer- und Browser-Steuerung, Coding-Agenten wie Claude Code oder Codex sowie Automatisierungs-Tools wie n8n, Make oder Zapier mit KI-Bausteinen.</p>" +
        "<p>Damit Agenten an Werkzeuge kommen, hat sich das <strong>Model Context Protocol (MCP)</strong> durchgesetzt: ein offener Standard, über den eine KI z. B. auf Google Drive, ClickUp, das CMS oder die Search Console zugreifen kann. Anthropic hat MCP im Dezember 2025 an die neu gegründete <strong>Agentic AI Foundation</strong> unter dem Dach der Linux Foundation übergeben; OpenAI, Google und Microsoft unterstützen den Standard.</p>" +
        "<p><strong>Wichtig:</strong> Agenten machen Fehler und können durch manipulierte Webseiten oder Dokumente fehlgeleitet werden (Prompt Injection). Bei allem, was etwas sendet, veröffentlicht oder löscht, sollte ein Mensch freigeben.</p>" +

        "<h3>Bild, Video und Audio</h3>" +
        "<ul>" +
        "<li><strong>Bilder:</strong> GPT Image (in ChatGPT), Googles Bildmodelle („Nano Banana“) in Gemini, Midjourney, Adobe Firefly (mit Fokus auf lizenzierte Trainingsdaten), Canva mit KI-Funktionen. Text in Bildern klappt inzwischen meist zuverlässig.</li>" +
        "<li><strong>Video:</strong> Google Veo, OpenAI Sora, Runway, Kling – kurze Clips aus Text oder Bild, zunehmend mit Ton.</li>" +
        "<li><strong>Audio:</strong> ElevenLabs für Sprachausgabe und Stimmen, Suno und Udio für Musik, Transkription (z. B. Whisper) und Sprachmodus in den Chat-Apps. NotebookLM macht aus Dokumenten Audio-Zusammenfassungen.</li>" +
        "</ul>" +
        "<p>Bei echten Personen, Stimmen und Marken ist Vorsicht geboten: Deepfakes müssen gekennzeichnet werden, und Persönlichkeits- sowie Urheberrechte gelten weiter.</p>" +

        "<h3>Quellen</h3>" +
        "<ul>" +
        "<li><a href=\"https://techcrunch.com/2026/07/09/openai-launches-its-new-family-of-models-with-gpt-5-6/\">TechCrunch: OpenAI launches GPT-5.6 (09.07.2026)</a></li>" +
        "<li><a href=\"https://www.cnbc.com/2026/09/03/open-ai-astra-gpt-6-cyber.html\">CNBC: OpenAI rollt GPT-6 Astra aus (03.09.2026)</a></li>" +
        "<li><a href=\"https://blog.google/products-and-platforms/products/gemini/gemini-3/\">Google Blog: Gemini 3</a></li>" +
        "<li><a href=\"https://gemini.google/release-notes/\">Gemini Release Notes</a></li>" +
        "<li><a href=\"https://www.anthropic.com/news\">Anthropic News</a></li>" +
        "<li><a href=\"https://aaif.io/blog/mcp-graduates-to-enterprise-infrastructure-stateless-architecture-formal-governance-and-security\">Agentic AI Foundation: MCP als Standard</a></li>" +
        "</ul>"
    },
    {
      titel: "KI-Suche: Was AI Overviews, AI Mode & Co. für Websites bedeuten",
      html:
        "<h3>Die neuen Antwortmaschinen</h3>" +
        "<ul>" +
        "<li><strong>Google AI Overviews</strong> („Übersicht mit KI“): KI-Zusammenfassung oberhalb der normalen Treffer, mit Links zu Quellen.</li>" +
        "<li><strong>Google AI Mode</strong> („KI-Modus“): eigener Chat-artiger Suchmodus für komplexe Fragen und Nachfragen. In Deutschland seit Oktober 2025 verfügbar.</li>" +
        "<li><strong>ChatGPT-Suche:</strong> ChatGPT durchsucht das Web und nennt Quellen.</li>" +
        "<li><strong>Perplexity:</strong> Antwortmaschine, die konsequent mit nummerierten Quellen arbeitet.</li>" +
        "<li><strong>Microsoft Copilot</strong> (Bing) und <strong>Gemini</strong> als Assistent.</li>" +
        "</ul>" +

        "<h3>Was das für den Traffic bedeutet</h3>" +
        "<p>Wenn die Antwort schon auf der Suchseite steht, klicken weniger Menschen. Auswertungen (u. a. von SISTRIX für Deutschland) zeigen, dass die Klickrate auf das erste organische Ergebnis deutlich sinkt, wenn ein AI Overview erscheint. Wie stark, hängt von Branche und Suchanfrage ab – informative Fragen („Was ist …?“) trifft es am meisten, lokale und transaktionale Suchen („Anwalt Arbeitsrecht [Stadt]“) weniger. Die genauen Zahlen schwanken je nach Studie; sicher ist der Trend zu mehr <strong>Zero-Click-Suchen</strong>.</p>" +

        "<h3>Neue Kontrolle in der Search Console</h3>" +
        "<p>Seit Sommer 2026 gibt es in der Google Search Console eine Einstellung, mit der Website-Betreiber ihre Seiten aus AI Overviews, AI Mode und KI-Funktionen in Discover herausnehmen können; laut Berichten seit Ende August 2026 für alle Properties weltweit. Standard ist „einschließen“. Wer sich abmeldet, verliert dort aber auch Sichtbarkeit; die normale Suche soll laut Google nicht betroffen sein. Für ChatGPT oder Perplexity gilt die Einstellung nicht. Dazu kommt ein Bericht zu Impressionen in KI-Suchfunktionen (bisher ohne Klickdaten).</p>" +

        "<h3>GEO: Wie man in KI-Antworten auftaucht</h3>" +
        "<p><strong>GEO</strong> (Generative Engine Optimization) ergänzt SEO. Es geht darum, als Quelle zitiert zu werden:</p>" +
        "<ul>" +
        "<li><strong>Direkte Antworten</strong> am Anfang eines Abschnitts (die Frage als Überschrift, die Antwort in 2–3 Sätzen darunter).</li>" +
        "<li><strong>Klare Struktur:</strong> Zwischenüberschriften, Listen, Tabellen, FAQ.</li>" +
        "<li><strong>E-E-A-T:</strong> echte Autoren mit Qualifikation (z. B. Fachanwalt), Datum, Belege, eigene Erfahrung.</li>" +
        "<li><strong>Eigene Daten und Einschätzungen</strong>, die es woanders nicht gibt – reine Zusammenfassungen ersetzt die KI selbst.</li>" +
        "<li><strong>Erwähnungen auf anderen Seiten</strong> (Presse, Verzeichnisse, Foren), denn KI-Systeme stützen sich oft auf mehrere Quellen.</li>" +
        "<li><strong>Technik:</strong> Seiten müssen crawlbar sein; strukturierte Daten (Schema.org) helfen beim Verständnis. In der robots.txt lässt sich steuern, welche KI-Crawler (z. B. GPTBot) zugreifen dürfen.</li>" +
        "</ul>" +
        "<p><strong>Für eine Kanzlei-Website heißt das:</strong> Ratgeber-Inhalte werden häufiger direkt in KI-Antworten zusammengefasst. Umso wichtiger sind Markenbekanntheit, lokale Signale (Google-Unternehmensprofil, Bewertungen) und Inhalte, die zur Kontaktaufnahme führen – nicht nur zum Lesen.</p>" +

        "<h3>Quellen</h3>" +
        "<ul>" +
        "<li><a href=\"https://onlinemarketing.de/technologie/google-search-ai-mode-startet-in-deutschland\">OnlineMarketing.de: Google AI Mode startet in Deutschland</a></li>" +
        "<li><a href=\"https://ppc.land/ai-overviews-cost-germany-265m-organic-clicks-monthly-sistrix-data-shows/\">PPC Land: SISTRIX-Daten zu AI Overviews in Deutschland</a></li>" +
        "<li><a href=\"https://searchengineland.com/google-search-console-ai-performance-reports-and-search-generative-ai-control-rolling-out-globally-462214\">Search Engine Land: KI-Berichte und Opt-out in der Search Console</a></li>" +
        "<li><a href=\"https://9to5google.com/2026/06/02/google-ai-mode-overviews-opt-out/\">9to5Google: Opt-out für AI Mode und AI Overviews</a></li>" +
        "<li><a href=\"https://developers.google.com/search/docs/appearance/ai-features\">Google Search Central: KI-Funktionen und deine Website</a></li>" +
        "</ul>"
    },
    {
      titel: "KI im Marketing-Alltag: Prompting, Recht und Risiken",
      html:
        "<h3>Prompting, das funktioniert</h3>" +
        "<ul>" +
        "<li><strong>Rolle und Ziel:</strong> „Du bist Redakteur einer Kanzlei-Website. Ziel: ein verständlicher Ratgeber für Arbeitnehmer.“</li>" +
        "<li><strong>Kontext geben:</strong> Zielgruppe, Tonalität, Stilregeln, vorhandene Texte, Keyword.</li>" +
        "<li><strong>Beispiele zeigen</strong> (Few-Shot): zwei gute Meta-Descriptions als Muster.</li>" +
        "<li><strong>Format festlegen:</strong> „Gib eine Tabelle mit drei Spalten aus“, Länge, Überschriften.</li>" +
        "<li><strong>Schrittweise arbeiten:</strong> erst Gliederung, dann Abschnitte; Rückfragen erlauben („Frag nach, wenn etwas fehlt“).</li>" +
        "<li><strong>Prüfen lassen:</strong> „Markiere Aussagen, bei denen du unsicher bist“ und Quellen verlangen.</li>" +
        "<li><strong>Wiederverwenden:</strong> gute Prompts als Vorlage, Custom GPT, Gem, Claude-Projekt oder Skill speichern.</li>" +
        "</ul>" +

        "<h3>EU AI Act: Was gilt wann?</h3>" +
        "<p>Der AI Act ist seit 1. August 2024 in Kraft und gilt stufenweise. Mit dem „Digital Omnibus on AI“ (im Amtsblatt veröffentlicht am 24. Juli 2026) wurden einige Fristen verschoben.</p>" +
        "<table>" +
        "<tr><th>Datum</th><th>Was gilt</th></tr>" +
        "<tr><td>2. Februar 2025</td><td>Verbotene KI-Praktiken (z. B. Social Scoring, manipulative Systeme) und Pflicht zur KI-Kompetenz (Art. 4; durch den Omnibus abgeschwächt)</td></tr>" +
        "<tr><td>2. August 2025</td><td>Pflichten für Anbieter von KI-Modellen mit allgemeinem Verwendungszweck (GPAI), Behörden, Sanktionen</td></tr>" +
        "<tr><td>2. August 2026</td><td>AI Act allgemein anwendbar, u. a. Transparenzpflichten nach Art. 50 (Chatbots offenlegen, Deepfakes kennzeichnen)</td></tr>" +
        "<tr><td>2. Dezember 2026</td><td>Übergangsfrist für maschinenlesbare Markierung (Art. 50 Abs. 2) bei bereits angebotenen Systemen endet; neues Verbot von KI, die Missbrauchsdarstellungen von Kindern oder nicht einvernehmliche intime Inhalte erzeugt</td></tr>" +
        "<tr><td>2. Dezember 2027</td><td>Pflichten für Hochrisiko-KI nach Anhang III (z. B. Personalauswahl, Kreditprüfung) – vorher August 2026</td></tr>" +
        "<tr><td>2. August 2028</td><td>Hochrisiko-KI in regulierten Produkten (Anhang I)</td></tr>" +
        "</table>" +

        "<h3>Kennzeichnung</h3>" +
        "<p>Anbieter generativer KI müssen Ausgaben <strong>maschinenlesbar markieren</strong> (z. B. Wasserzeichen, Metadaten wie C2PA). Wer KI nutzt (Betreiber), muss <strong>Deepfakes</strong> offenlegen – also realistisch wirkende Bilder, Videos oder Audios von echten Personen, Orten oder Ereignissen. KI-generierte <strong>Texte zu Themen von öffentlichem Interesse</strong> sind zu kennzeichnen, außer ein Mensch hat sie redaktionell geprüft und trägt die Verantwortung. Die EU-Kommission hat dazu im Juni 2026 einen freiwilligen <strong>Verhaltenskodex</strong> mit einheitlichen KI-Symbolen veröffentlicht. Unabhängig davon verlangen Plattformen wie Instagram, TikTok und YouTube teils eigene KI-Labels.</p>" +

        "<h3>Urheberrecht</h3>" +
        "<ul>" +
        "<li>Rein KI-generierte Inhalte sind nach deutschem Recht in der Regel <strong>nicht urheberrechtlich geschützt</strong>, weil eine menschliche Schöpfung fehlt. Wer viel eigene Gestaltung einbringt, steht besser da.</li>" +
        "<li>Das <strong>LG München I</strong> hat am 11.11.2025 im Fall <strong>GEMA gegen OpenAI</strong> entschieden, dass das „Auswendiglernen“ von Liedtexten im Modell und ihre Ausgabe die Rechte der Urheber verletzt. Das Urteil ist nicht rechtskräftig, die Berufung läuft.</li>" +
        "<li>Auch KI-Ausgaben können fremde Werke, Marken oder Personen enthalten – die Verantwortung für die Veröffentlichung liegt bei dir.</li>" +
        "</ul>" +

        "<h3>Risiken: Halluzinationen und Datenschutz</h3>" +
        "<ul>" +
        "<li><strong>Halluzinationen:</strong> KI erfindet manchmal Fakten, Urteile, Aktenzeichen oder Quellen – sehr überzeugend formuliert. Gerade bei Rechtsthemen jede Angabe an der Originalquelle prüfen.</li>" +
        "<li><strong>Datenschutz (DSGVO):</strong> Keine personenbezogenen Daten und erst recht keine <strong>Mandantendaten</strong> in KI-Tools ohne geprüften Vertrag (Auftragsverarbeitung) und passende Einstellungen. Für Anwälte kommt die berufliche Schweigepflicht hinzu.</li>" +
        "<li><strong>Training mit Eingaben:</strong> Bei vielen Verbraucher-Konten können Eingaben zum Training genutzt werden; Business-/Team-Tarife schließen das meist aus. Einstellungen prüfen.</li>" +
        "<li><strong>Prompt Injection:</strong> Versteckte Anweisungen in Webseiten oder Dokumenten können Agenten manipulieren.</li>" +
        "<li><strong>Bias und Einheitsbrei:</strong> KI-Texte klingen schnell austauschbar. Eigene Erfahrung, Beispiele und Haltung machen den Unterschied.</li>" +
        "</ul>" +

        "<h3>Quellen</h3>" +
        "<ul>" +
        "<li><a href=\"https://fpf.org/blog/the-ai-act-implementation-timeline-what-changes-under-the-ai-omnibus/\">Future of Privacy Forum: AI-Act-Zeitplan nach dem Omnibus</a></li>" +
        "<li><a href=\"https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/\">Gibson Dunn: AI Act Omnibus – verschobene Fristen</a></li>" +
        "<li><a href=\"https://artificialintelligenceact.eu/transparency-rules-article-50/\">artificialintelligenceact.eu: Transparenzregeln nach Art. 50</a></li>" +
        "<li><a href=\"https://digital-strategy.ec.europa.eu/en/news/commission-publishes-code-practice-marking-and-labelling-ai-generated-content\">EU-Kommission: Verhaltenskodex zur Kennzeichnung von KI-Inhalten</a></li>" +
        "<li><a href=\"https://www.lto.de/recht/nachrichten/n/42o1413924-lg-muenchen-i-gema-openai-chatgpt-songtexte-ki\">LTO: LG München I – GEMA siegt gegen OpenAI</a></li>" +
        "</ul>"
    }
  ],

  tabellen: [
    {
      titel: "KI-Werkzeuge nach Einsatzzweck im Marketing",
      spalten: ["Einsatzzweck", "Beispiele", "Worauf achten"],
      zeilen: [
        ["Texte & Redaktion", "ChatGPT, Claude, Gemini", "Fakten prüfen, eigenen Ton und Erfahrung einbringen"],
        ["Recherche mit Quellen", "Perplexity, ChatGPT-Suche, Gemini Deep Research", "Quellen öffnen und gegenlesen, Datum prüfen"],
        ["Dokumente zusammenfassen", "NotebookLM, Claude-Projekte", "Nur Dokumente hochladen, die man teilen darf"],
        ["Bilder & Grafiken", "GPT Image, Gemini (Nano Banana), Midjourney, Adobe Firefly, Canva", "Rechte, echte Personen, Kennzeichnung bei Deepfakes"],
        ["Video", "Google Veo, Sora, Runway, Kling", "Kurze Clips, Kennzeichnung, Plattform-Labels"],
        ["Audio & Stimme", "ElevenLabs, NotebookLM, Suno", "Keine fremden Stimmen klonen, Musikrechte"],
        ["Automatisierung & Agenten", "n8n, Make, Zapier, Agenten-Modi, MCP-Anbindungen", "Menschliche Freigabe vor Senden/Veröffentlichen"],
        ["SEO & GEO", "Search Console, SISTRIX, KI-Sichtbarkeits-Tools", "KI-Sichtbarkeit ist schwer zu messen, Trends statt Einzelwerte"]
      ]
    },
    {
      titel: "Klassische Suche vs. KI-Suche",
      spalten: ["Aspekt", "Klassische Suche", "KI-Suche (AI Overviews, AI Mode, ChatGPT, Perplexity)"],
      zeilen: [
        ["Ergebnis", "Liste mit Links", "Zusammengefasste Antwort mit einigen Quellen"],
        ["Nutzerverhalten", "Klick auf Treffer", "Oft kein Klick nötig (Zero-Click)"],
        ["Ziel der Optimierung", "Ranking-Position", "Als Quelle zitiert und erwähnt werden"],
        ["Wichtige Signale", "Relevanz, Backlinks, Technik", "Klare Antworten, Struktur, E-E-A-T, Erwähnungen"],
        ["Messbarkeit", "Gut (Search Console, Rankings)", "Eingeschränkt (Impressionen, kaum Klickdaten)"],
        ["Anfragen", "Kurze Keywords", "Längere Fragen und Nachfragen im Dialog"]
      ]
    }
  ],

  mindmaps: [
    {
      titel: "KI aktuell 2026",
      baum: {
        text: "KI aktuell 2026",
        kinder: [
          { text: "Modelle & Anbieter", kinder: [
            { text: "OpenAI: GPT-5.6, GPT-6" },
            { text: "Google: Gemini 3 und 4" },
            { text: "Anthropic: Claude (Opus, Sonnet, Haiku)" },
            { text: "Offene Modelle: Llama, Mistral, DeepSeek, Qwen" }
          ]},
          { text: "Agenten & Automatisierung", kinder: [
            { text: "Ziel statt einzelner Frage" },
            { text: "MCP als Anschluss an Werkzeuge" },
            { text: "n8n, Make, Zapier" },
            { text: "Mensch gibt frei" }
          ]},
          { text: "KI-Suche", kinder: [
            { text: "AI Overviews und AI Mode" },
            { text: "ChatGPT-Suche, Perplexity" },
            { text: "Zero-Click und GEO" },
            { text: "Opt-out in der Search Console" }
          ]},
          { text: "Inhalte erzeugen", kinder: [
            { text: "Prompting: Rolle, Kontext, Beispiele, Format" },
            { text: "Bild: GPT Image, Nano Banana, Firefly" },
            { text: "Video: Veo, Sora, Runway" },
            { text: "Audio: ElevenLabs, Suno" }
          ]},
          { text: "Recht & Regeln", kinder: [
            { text: "AI Act: Art. 50 seit 2. August 2026" },
            { text: "Hochrisiko ab Dezember 2027" },
            { text: "Kennzeichnung von Deepfakes" },
            { text: "Urheberrecht: GEMA vs. OpenAI" }
          ]},
          { text: "Risiken", kinder: [
            { text: "Halluzinationen" },
            { text: "Datenschutz und Mandantendaten" },
            { text: "Prompt Injection" },
            { text: "Austauschbare Texte" }
          ]},
          { text: "Begriffe", kinder: [
            { text: "LLM, Token, Kontextfenster" },
            { text: "RAG, multimodal, Reasoning" },
            { text: "Agent, MCP, Fine-Tuning" }
          ]}
        ]
      }
    }
  ],

  lernkarten: [
    { vorne: "Was ist ein LLM?", hinten: "Ein Large Language Model (großes Sprachmodell) ist eine KI, die mit riesigen Textmengen trainiert wurde und Text Wort für Wort vorhersagt. ChatGPT, Claude und Gemini basieren auf LLMs." },
    { vorne: "Was ist ein Token?", hinten: "Die kleinste Texteinheit, mit der ein Sprachmodell rechnet – meist ein Wortteil. Preise und Kontextgrenzen werden in Tokens gemessen; ein deutsches Wort entspricht oft mehr als einem Token." },
    { vorne: "Was ist das Kontextfenster?", hinten: "Die Menge an Text (in Tokens), die ein Modell in einem Gespräch gleichzeitig „im Blick“ hat – Eingabe, Dokumente und bisherige Antworten. Was darüber hinausgeht, wird abgeschnitten oder vergessen." },
    { vorne: "Was bedeutet multimodal?", hinten: "Ein Modell kann mehrere Arten von Daten verarbeiten oder erzeugen, z. B. Text, Bilder, Audio und Video. Du kannst etwa einen Screenshot hochladen und Fragen dazu stellen." },
    { vorne: "Was ist RAG?", hinten: "Retrieval-Augmented Generation: Die KI sucht zuerst passende Informationen in einer Wissensquelle (z. B. eigenen Dokumenten) und formuliert dann die Antwort darauf gestützt. Das senkt Halluzinationen und macht Antworten aktueller." },
    { vorne: "Was ist MCP?", hinten: "Das Model Context Protocol ist ein offener Standard, über den KI-Anwendungen an externe Werkzeuge und Daten angeschlossen werden (z. B. Drive, CRM, CMS). Oft als „USB-C für KI“ beschrieben." },
    { vorne: "Wer verwaltet MCP heute?", hinten: "Anthropic hat MCP Ende 2025 an die Agentic AI Foundation übergeben, die unter dem Dach der Linux Foundation steht. OpenAI, Google, Microsoft und andere unterstützen den Standard." },
    { vorne: "Was ist ein KI-Agent?", hinten: "Eine KI, die ein Ziel selbstständig in mehreren Schritten verfolgt: planen, Werkzeuge wie Suche oder Browser nutzen, Ergebnisse prüfen. Im Unterschied zum Chat erledigt sie Aufgaben statt nur Fragen zu beantworten." },
    { vorne: "Was ist Reasoning bei KI-Modellen?", hinten: "Das Modell „denkt“ vor der Antwort in Zwischenschritten nach. Das verbessert Ergebnisse bei Logik, Mathematik und Planung, kostet aber mehr Zeit und Rechenleistung." },
    { vorne: "Was ist eine Halluzination?", hinten: "Eine KI-Antwort, die überzeugend klingt, aber falsch oder erfunden ist – z. B. ein nicht existierendes Urteil oder eine falsche Quelle. Deshalb Fakten immer an der Originalquelle prüfen." },
    { vorne: "Was ist Prompt Injection?", hinten: "Ein Angriff, bei dem versteckte Anweisungen in Webseiten, E-Mails oder Dokumenten eine KI dazu bringen, etwas Ungewolltes zu tun. Besonders gefährlich bei Agenten mit Zugriff auf Konten." },
    { vorne: "Was ist ein Prompt?", hinten: "Die Eingabe bzw. Anweisung an die KI. Gute Prompts enthalten Ziel, Kontext, Zielgruppe, gewünschtes Format und gegebenenfalls Beispiele." },
    { vorne: "Was ist Few-Shot-Prompting?", hinten: "Man gibt der KI einige Beispiele für das gewünschte Ergebnis mit (z. B. zwei gute Meta-Descriptions). Die KI orientiert sich an Stil und Format der Beispiele." },
    { vorne: "Was ist ein Systemprompt?", hinten: "Eine Grundanweisung, die für ein ganzes Gespräch oder Werkzeug gilt (z. B. Rolle, Stilregeln). In Custom GPTs, Gems oder Claude-Projekten legt man so dauerhaft Vorgaben fest." },
    { vorne: "Was ist Fine-Tuning?", hinten: "Ein bestehendes Modell wird mit eigenen Beispielen nachtrainiert, damit es einen bestimmten Stil oder eine Aufgabe besser beherrscht. Für die meisten Marketing-Aufgaben reichen gute Prompts und RAG." },
    { vorne: "Was ist ein Open-Weight-Modell?", hinten: "Ein Modell, dessen Gewichte veröffentlicht sind, sodass man es selbst betreiben kann (z. B. Llama, Mistral, Qwen, DeepSeek). Vorteil: Daten bleiben im eigenen System." },
    { vorne: "Was ist generative KI?", hinten: "KI, die neue Inhalte erzeugt – Texte, Bilder, Videos, Musik oder Code – statt nur Daten zu sortieren oder zu erkennen." },
    { vorne: "Was sind Google AI Overviews?", hinten: "KI-Zusammenfassungen („Übersicht mit KI“) oberhalb der normalen Suchergebnisse, mit Links zu Quellen. Sie beantworten viele Fragen direkt auf der Suchseite." },
    { vorne: "Was ist der Google AI Mode?", hinten: "Ein eigener, chatartiger KI-Suchmodus („KI-Modus“) für komplexe Fragen mit Nachfragen. In Deutschland seit Oktober 2025 verfügbar." },
    { vorne: "Was ist Perplexity?", hinten: "Eine KI-Antwortmaschine, die Webquellen durchsucht und Antworten mit nummerierten Quellenangaben liefert. Beliebt für schnelle Recherchen." },
    { vorne: "Was ist eine Zero-Click-Suche?", hinten: "Eine Suche, bei der Nutzer die Antwort direkt auf der Ergebnisseite bekommen und keine Website anklicken. Durch KI-Antworten nimmt dieser Anteil zu." },
    { vorne: "Was ist GEO?", hinten: "Generative Engine Optimization: Inhalte so aufbereiten, dass KI-Systeme wie ChatGPT, Gemini oder Perplexity sie als Quelle nutzen und zitieren. Ergänzt klassisches SEO." },
    { vorne: "Welche Opt-out-Möglichkeit gibt es seit 2026 in der Search Console?", hinten: "Eine Einstellung, mit der man eine Website aus AI Overviews, AI Mode und KI-Funktionen in Discover herausnehmen kann. Standard ist „einschließen“; ChatGPT und Perplexity sind davon nicht betroffen." },
    { vorne: "Was ist GPTBot?", hinten: "Der Web-Crawler von OpenAI. Über die robots.txt kann man steuern, ob er (und andere KI-Crawler) die eigene Website abrufen dürfen." },
    { vorne: "Warum helfen direkte Antworten für GEO?", hinten: "KI-Systeme übernehmen gern kurze, klare Antwortblöcke. Eine Frage als Überschrift mit einer präzisen Antwort in zwei bis drei Sätzen erhöht die Chance, zitiert zu werden." },
    { vorne: "Was ist der EU AI Act?", hinten: "Die KI-Verordnung der EU, seit 1. August 2024 in Kraft. Sie regelt KI nach Risiko: verbotene Praktiken, Hochrisiko-KI, Transparenzpflichten und Regeln für große KI-Modelle." },
    { vorne: "Seit wann gelten die Transparenzpflichten nach Art. 50 AI Act?", hinten: "Seit dem 2. August 2026. Dazu gehören z. B. die Offenlegung, dass man mit einem Chatbot spricht, und die Kennzeichnung von Deepfakes." },
    { vorne: "Was ist der Digital Omnibus on AI?", hinten: "Ein EU-Änderungspaket zum AI Act, im Amtsblatt veröffentlicht am 24. Juli 2026. Es verschiebt vor allem die Hochrisiko-Pflichten (Anhang III auf 2. Dezember 2027, Anhang I auf 2. August 2028)." },
    { vorne: "Was gilt ab dem 2. Dezember 2026 nach dem AI Act?", hinten: "Die Übergangsfrist für die maschinenlesbare Markierung KI-generierter Inhalte bei bereits angebotenen Systemen endet, und ein neues Verbot greift: KI, die Missbrauchsdarstellungen von Kindern oder nicht einvernehmliche intime Inhalte erzeugt." },
    { vorne: "Was ist ein Deepfake im Sinne des AI Act?", hinten: "Ein KI-erzeugter oder -veränderter Bild-, Video- oder Audioinhalt, der echten Personen, Orten oder Ereignissen ähnelt und fälschlich echt wirken kann. Wer ihn verbreitet, muss ihn als KI-generiert kennzeichnen." },
    { vorne: "Müssen KI-Texte auf Websites gekennzeichnet werden?", hinten: "Nach Art. 50 AI Act sind KI-generierte Texte zu Themen von öffentlichem Interesse zu kennzeichnen – außer ein Mensch hat sie redaktionell geprüft und trägt die Verantwortung. Plattformen können eigene Regeln haben." },
    { vorne: "Was ist der EU-Verhaltenskodex zur Kennzeichnung von KI-Inhalten?", hinten: "Ein freiwilliger Kodex, den die EU-Kommission im Juni 2026 veröffentlicht hat. Er beschreibt, wie Anbieter KI-Inhalte maschinenlesbar markieren und wie Nutzer Deepfakes kennzeichnen, inklusive einheitlicher KI-Symbole." },
    { vorne: "Was ist KI-Kompetenz nach Art. 4 AI Act?", hinten: "Unternehmen, die KI einsetzen, sollen die KI-Kompetenz ihrer Beschäftigten fördern. Die Pflicht gilt seit Februar 2025; durch den Omnibus wurde sie von „sicherstellen“ zu „unterstützen“ abgeschwächt." },
    { vorne: "Was ist Hochrisiko-KI?", hinten: "KI in sensiblen Bereichen wie Personalauswahl, Bildung, Kreditvergabe oder Justiz, für die strenge Pflichten gelten (Risikomanagement, Dokumentation, menschliche Aufsicht). Für Anhang-III-Systeme ab 2. Dezember 2027." },
    { vorne: "Was ist GPAI?", hinten: "General-Purpose AI: KI-Modelle mit allgemeinem Verwendungszweck wie GPT, Gemini oder Claude. Ihre Anbieter haben seit 2. August 2025 Pflichten, z. B. Dokumentation und eine Zusammenfassung der Trainingsdaten." },
    { vorne: "Wie hoch können Bußgelder nach dem AI Act sein?", hinten: "Bei verbotenen Praktiken bis zu 35 Mio. Euro oder 7 % des weltweiten Jahresumsatzes, bei anderen Verstößen niedrigere Obergrenzen." },
    { vorne: "Was entschied das LG München I im Fall GEMA gegen OpenAI?", hinten: "Am 11.11.2025: Das Speichern („Memorisieren“) von Liedtexten im Modell und ihre Wiedergabe verletzen das Urheberrecht; die Text-und-Data-Mining-Schranke greift dafür nicht. Das Urteil ist nicht rechtskräftig." },
    { vorne: "Sind rein KI-generierte Bilder urheberrechtlich geschützt?", hinten: "Nach deutschem Recht in der Regel nicht, weil eine persönliche menschliche Schöpfung fehlt. Je mehr eigene kreative Gestaltung ein Mensch einbringt, desto eher kann Schutz entstehen." },
    { vorne: "Was ist Text und Data Mining (TDM)?", hinten: "Das automatische Auswerten großer Text- und Datenmengen, z. B. fürs KI-Training. Nach § 44b UrhG erlaubt, solange der Rechteinhaber nicht maschinenlesbar widersprochen hat (Opt-out)." },
    { vorne: "Was ist C2PA?", hinten: "Ein technischer Standard für Herkunftsangaben („Content Credentials“) in Bildern und Videos. Er hält in Metadaten fest, ob und mit welchem Werkzeug ein Inhalt erzeugt oder bearbeitet wurde." },
    { vorne: "Warum keine Mandantendaten in KI-Tools?", hinten: "Wegen DSGVO und anwaltlicher Schweigepflicht. KI-Dienste dürfen nur mit geprüftem Vertrag (Auftragsverarbeitung) und passenden Einstellungen genutzt werden – im Zweifel Daten anonymisieren oder weglassen." },
    { vorne: "Was ist ein AV-Vertrag?", hinten: "Ein Auftragsverarbeitungsvertrag nach Art. 28 DSGVO. Er ist nötig, wenn ein Dienstleister – etwa ein KI-Anbieter – personenbezogene Daten im Auftrag verarbeitet." },
    { vorne: "Was ist NotebookLM?", hinten: "Ein Google-Werkzeug, das ausschließlich mit hochgeladenen Quellen arbeitet und daraus Zusammenfassungen, Lernkarten oder Audio-Übersichten erstellt. Ein praktisches Beispiel für RAG." },
    { vorne: "Was ist Deep Research?", hinten: "Ein Modus in ChatGPT, Gemini und anderen Tools, bei dem die KI minutenlang viele Quellen durchsucht und einen ausführlichen Bericht mit Belegen erstellt." },
    { vorne: "Was sind Custom GPTs, Gems und Projekte?", hinten: "Gespeicherte KI-Assistenten mit festen Anweisungen und Wissensdateien – bei ChatGPT „GPTs“, bei Gemini „Gems“, bei Claude „Projekte“. Ideal für wiederkehrende Aufgaben mit festen Stilregeln." },
    { vorne: "Was ist ein Coding-Agent?", hinten: "Ein KI-Agent, der selbstständig Code liest, schreibt und testet, z. B. Claude Code, OpenAI Codex oder GitHub Copilot. Auch Nicht-Programmierer bauen damit kleine Tools oder Websites." },
    { vorne: "Was ist n8n?", hinten: "Ein Automatisierungswerkzeug (ähnlich Make oder Zapier), mit dem man Abläufe aus Bausteinen zusammensetzt – inklusive KI-Schritten, z. B. „neuer Blogartikel → Social-Post-Entwurf erstellen“." },
    { vorne: "Was bedeutet „Human in the Loop“?", hinten: "Ein Mensch prüft und gibt frei, bevor eine KI-Aktion wirksam wird – etwa bevor ein Agent eine E-Mail sendet oder einen Beitrag veröffentlicht." },
    { vorne: "Was ist Bias bei KI?", hinten: "Verzerrungen in KI-Ausgaben, die aus den Trainingsdaten stammen – etwa Klischees bei Bildern von Berufen. Deshalb Ergebnisse kritisch prüfen, besonders bei Personen-Darstellungen." },
    { vorne: "Was ist E-E-A-T und warum ist es für KI-Suche wichtig?", hinten: "Experience, Expertise, Authoritativeness, Trust. Inhalte mit erkennbaren Experten, Belegen und eigener Erfahrung gelten als vertrauenswürdiger und werden eher als Quelle genutzt." }
  ],

  quiz: [
    {
      frage: "Was beschreibt das Kontextfenster eines Sprachmodells?",
      optionen: ["Die Bildschirmgröße der App", "Die Textmenge, die das Modell gleichzeitig berücksichtigen kann", "Die Anzahl der Nutzer pro Tag", "Das Datum, bis zu dem es trainiert wurde"],
      richtig: [1],
      erklaerung: "Das Kontextfenster ist die Menge an Tokens (Eingabe, Dokumente, Verlauf), die ein Modell auf einmal verarbeitet. Das Trainingsdatum heißt Wissensstand oder Knowledge Cutoff."
    },
    {
      frage: "Wofür steht RAG?",
      optionen: ["Rapid AI Generation", "Retrieval-Augmented Generation", "Random Answer Generator", "Responsible AI Governance"],
      richtig: [1],
      erklaerung: "Retrieval-Augmented Generation: Erst werden passende Informationen gesucht, dann wird die Antwort darauf gestützt formuliert."
    },
    {
      frage: "Welche Aussagen zu MCP stimmen?",
      optionen: ["MCP ist ein offener Standard, um KI an Werkzeuge und Daten anzuschließen", "MCP ist ein Bildformat für KI-Grafiken", "MCP wird inzwischen von der Agentic AI Foundation unter der Linux Foundation betreut", "MCP funktioniert nur mit ChatGPT"],
      richtig: [0, 2],
      erklaerung: "MCP (Model Context Protocol) verbindet KI-Anwendungen mit externen Tools. Anthropic hat es Ende 2025 an die Agentic AI Foundation übergeben; viele Anbieter unterstützen es."
    },
    {
      frage: "Was unterscheidet einen KI-Agenten von einem normalen Chat?",
      optionen: ["Er antwortet nur mit Ja oder Nein", "Er verfolgt ein Ziel in mehreren Schritten und nutzt dabei Werkzeuge", "Er funktioniert nur offline", "Er kann keine Fehler machen"],
      richtig: [1],
      erklaerung: "Agenten planen, nutzen Suche, Browser oder Dateien und prüfen Zwischenergebnisse. Fehler machen sie trotzdem – daher menschliche Freigabe bei kritischen Schritten."
    },
    {
      frage: "Was bedeutet „multimodal“?",
      optionen: ["Das Modell läuft auf mehreren Servern", "Das Modell kann verschiedene Datenarten wie Text, Bild und Audio verarbeiten", "Das Modell spricht mehrere Sprachen", "Das Modell hat mehrere Preisstufen"],
      richtig: [1],
      erklaerung: "Multimodal heißt: mehrere Modalitäten wie Text, Bilder, Audio oder Video. Mehrsprachigkeit ist etwas anderes."
    },
    {
      frage: "Seit wann ist der Google AI Mode („KI-Modus“) in Deutschland verfügbar?",
      optionen: ["Seit Januar 2024", "Seit Oktober 2025", "Seit August 2026", "Noch gar nicht"],
      richtig: [1],
      erklaerung: "Google hat den AI Mode im Oktober 2025 in Deutschland und vielen weiteren Ländern eingeführt."
    },
    {
      frage: "Was ermöglicht die 2026 eingeführte Einstellung „Search generative AI“ in der Google Search Console?",
      optionen: ["Seiten aus AI Overviews und AI Mode herauszunehmen", "Seiten aus ChatGPT und Perplexity zu entfernen", "Die eigene Website automatisch auf Platz 1 zu setzen", "KI-Texte automatisch zu kennzeichnen"],
      richtig: [0],
      erklaerung: "Die Einstellung betrifft nur Googles KI-Funktionen (AI Overviews, AI Mode, KI in Discover). Andere Dienste wie ChatGPT oder Perplexity sind nicht erfasst."
    },
    {
      frage: "Was ist eine Zero-Click-Suche?",
      optionen: ["Eine Suche ohne Ergebnisse", "Eine Suche, bei der die Antwort direkt auf der Ergebnisseite steht und kein Klick erfolgt", "Eine Suche per Sprachbefehl", "Eine bezahlte Anzeige ohne Kosten"],
      richtig: [1],
      erklaerung: "Bei Zero-Click-Suchen reicht dem Nutzer die Antwort auf der Suchseite. KI-Antworten verstärken diesen Trend."
    },
    {
      frage: "Welche Maßnahmen erhöhen die Chance, in KI-Antworten zitiert zu werden (GEO)?",
      optionen: ["Klare Antwortblöcke direkt unter Frage-Überschriften", "Möglichst viel Text ohne Zwischenüberschriften", "Erkennbare Experten-Autoren und Belege (E-E-A-T)", "Die Website für alle Crawler sperren"],
      richtig: [0, 2],
      erklaerung: "KI-Systeme übernehmen gern klar strukturierte, belegte Inhalte von vertrauenswürdigen Autoren. Textwüsten und gesperrte Crawler schaden."
    },
    {
      frage: "Welche Suchanfragen sind von AI Overviews typischerweise am stärksten betroffen?",
      optionen: ["Informative Fragen wie „Was ist eine Abmahnung?“", "Navigationssuchen nach einer bestimmten Marke", "Gar keine – AI Overviews ändern nichts", "Nur Bildersuchen"],
      richtig: [0],
      erklaerung: "Bei Wissensfragen liefert die KI oft schon die Antwort. Lokale oder markenbezogene Suchen führen eher noch zum Klick."
    },
    {
      frage: "Seit wann gelten die Transparenzpflichten nach Art. 50 des EU AI Act?",
      optionen: ["1. August 2024", "2. Februar 2025", "2. August 2026", "2. Dezember 2027"],
      richtig: [2],
      erklaerung: "Der AI Act ist seit 1. August 2024 in Kraft, wird aber stufenweise anwendbar. Die Transparenzpflichten gelten seit 2. August 2026."
    },
    {
      frage: "Was hat der „Digital Omnibus on AI“ vor allem verschoben?",
      optionen: ["Die Verbote von Social Scoring", "Die Pflichten für Hochrisiko-KI", "Die Gründung der EU", "Die Pflicht, Chatbots offenzulegen"],
      richtig: [1],
      erklaerung: "Die Hochrisiko-Pflichten nach Anhang III gelten nun ab 2. Dezember 2027 statt August 2026, für Anhang I ab 2. August 2028. Die Transparenzpflichten blieben weitgehend unverändert."
    },
    {
      frage: "Ab wann gelten die Pflichten für Hochrisiko-KI nach Anhang III (z. B. KI in der Personalauswahl) nach dem Omnibus?",
      optionen: ["2. Februar 2025", "2. August 2026", "2. Dezember 2027", "2. August 2030"],
      richtig: [2],
      erklaerung: "Der Omnibus hat diese Pflichten auf den 2. Dezember 2027 verschoben."
    },
    {
      frage: "Welche Pflichten aus dem AI Act gelten bereits seit Februar 2025?",
      optionen: ["Verbote bestimmter KI-Praktiken", "Hochrisiko-Pflichten für Anhang-I-Produkte", "Pflicht zur Förderung von KI-Kompetenz (Art. 4)", "Kennzeichnung aller E-Mails"],
      richtig: [0, 2],
      erklaerung: "Seit 2. Februar 2025 gelten die Verbote (z. B. Social Scoring) und die KI-Kompetenz-Regel. Anhang-I-Pflichten kommen erst 2028."
    },
    {
      frage: "Was muss nach dem AI Act gekennzeichnet werden, wenn du es veröffentlichst?",
      optionen: ["Ein realistisch wirkendes KI-Video einer echten Person (Deepfake)", "Jede Rechtschreibkorrektur durch KI", "Ein selbst fotografiertes Teamfoto", "Ein KI-Entwurf, den du komplett selbst neu geschrieben hast"],
      richtig: [0],
      erklaerung: "Deepfakes müssen als KI-generiert offengelegt werden. Reine Hilfsfunktionen wie Rechtschreibprüfung oder eigene Fotos fallen nicht darunter."
    },
    {
      frage: "Wann müssen KI-generierte Texte zu Themen von öffentlichem Interesse NICHT gekennzeichnet werden?",
      optionen: ["Wenn sie kürzer als 100 Wörter sind", "Wenn ein Mensch sie redaktionell geprüft hat und die Verantwortung trägt", "Wenn sie auf Englisch sind", "Nie – es gibt keine Ausnahme"],
      richtig: [1],
      erklaerung: "Art. 50 sieht eine Ausnahme vor, wenn der Text menschlich redaktionell überprüft wurde und eine Person oder Organisation die redaktionelle Verantwortung trägt."
    },
    {
      frage: "Was gilt ab dem 2. Dezember 2026?",
      optionen: ["Ein Verbot von KI, die Missbrauchsdarstellungen von Kindern oder nicht einvernehmliche intime Inhalte erzeugt", "Ein generelles Verbot von ChatGPT in der EU", "Ende der Übergangsfrist für maschinenlesbare Markierung bei bereits angebotenen KI-Systemen", "Die Abschaffung des AI Act"],
      richtig: [0, 2],
      erklaerung: "Der Omnibus hat dieses neue Verbot eingeführt und die Übergangsfrist für Art. 50 Abs. 2 bei Bestandssystemen auf den 2. Dezember 2026 gelegt."
    },
    {
      frage: "Welche Höchststrafe sieht der AI Act für verbotene KI-Praktiken vor?",
      optionen: ["5.000 Euro", "Bis zu 35 Mio. Euro oder 7 % des weltweiten Jahresumsatzes", "Bis zu 1 % des Gewinns", "Es gibt keine Bußgelder"],
      richtig: [1],
      erklaerung: "Für verbotene Praktiken gilt der höchste Rahmen: 35 Mio. Euro oder 7 % des weltweiten Jahresumsatzes, je nachdem, was höher ist."
    },
    {
      frage: "Was entschied das LG München I am 11.11.2025 im Fall GEMA gegen OpenAI?",
      optionen: ["Das Memorisieren und Ausgeben von Liedtexten verletzt das Urheberrecht", "KI-Training ist immer erlaubt", "OpenAI muss ChatGPT in Deutschland abschalten", "Liedtexte sind nicht urheberrechtlich geschützt"],
      richtig: [0],
      erklaerung: "Das Gericht sah in der Speicherung der Texte im Modell und ihrer Wiedergabe eine Urheberrechtsverletzung. Das Urteil ist nicht rechtskräftig, die Berufung läuft."
    },
    {
      frage: "Sind rein KI-generierte Bilder in Deutschland urheberrechtlich geschützt?",
      optionen: ["Ja, immer", "In der Regel nicht, weil die menschliche Schöpfung fehlt", "Nur wenn sie farbig sind", "Nur wenn sie mit Midjourney erstellt wurden"],
      richtig: [1],
      erklaerung: "Urheberrecht schützt persönliche geistige Schöpfungen von Menschen. Reine KI-Ausgaben erfüllen das meist nicht."
    },
    {
      frage: "Was ist eine Halluzination bei KI?",
      optionen: ["Ein besonders kreatives Bild", "Eine überzeugend klingende, aber falsche oder erfundene Angabe", "Ein Absturz der App", "Ein Wasserzeichen im Bild"],
      richtig: [1],
      erklaerung: "Halluzinationen sind erfundene Fakten, Quellen oder Urteile. Gerade bei Rechtsthemen jede Angabe an der Originalquelle prüfen."
    },
    {
      frage: "Wie gehst du mit Mandantendaten und KI-Tools richtig um?",
      optionen: ["Einfach in jedes kostenlose KI-Tool kopieren", "Nur in Tools mit geprüftem Vertrag (Auftragsverarbeitung) und passenden Einstellungen – sonst anonymisieren oder weglassen", "Per Screenshot hochladen, das ist erlaubt", "In sozialen Netzwerken posten und die KI fragen"],
      richtig: [1],
      erklaerung: "DSGVO und anwaltliche Schweigepflicht verlangen besondere Sorgfalt. Ohne geprüften Vertrag gehören personenbezogene Daten nicht in KI-Dienste."
    },
    {
      frage: "Was ist Prompt Injection?",
      optionen: ["Ein besonders langer Prompt", "Versteckte Anweisungen in Inhalten, die eine KI manipulieren", "Eine Impfung gegen Computerviren", "Ein Bezahlmodell für Tokens"],
      richtig: [1],
      erklaerung: "Webseiten, E-Mails oder Dokumente können Anweisungen enthalten, die ein Agent fälschlich befolgt. Deshalb kritische Aktionen nur mit menschlicher Freigabe."
    },
    {
      frage: "Welche Elemente machen einen Prompt typischerweise besser?",
      optionen: ["Klare Rolle, Ziel und Zielgruppe", "Möglichst vage bleiben, damit die KI kreativ ist", "Beispiele und gewünschtes Ausgabeformat", "Nur ein einzelnes Wort eingeben"],
      richtig: [0, 2],
      erklaerung: "Kontext, Ziel, Zielgruppe, Beispiele (Few-Shot) und Format geben der KI die nötige Orientierung."
    },
    {
      frage: "Was ist Few-Shot-Prompting?",
      optionen: ["Der KI wenige Beispiele für das gewünschte Ergebnis mitgeben", "Nur kurze Fragen stellen", "Die KI wenige Sekunden rechnen lassen", "Ein Prompt mit Fotos"],
      richtig: [0],
      erklaerung: "Mit Beispielen zeigt man Stil und Format, z. B. zwei gute Meta-Descriptions als Vorlage."
    },
    {
      frage: "Welches Werkzeug arbeitet ausschließlich mit den Quellen, die du hochlädst, und erstellt daraus z. B. Audio-Übersichten?",
      optionen: ["Midjourney", "NotebookLM", "Suno", "Runway"],
      richtig: [1],
      erklaerung: "NotebookLM von Google nutzt nur die hochgeladenen Quellen – ein Alltagsbeispiel für RAG."
    },
    {
      frage: "Welche Werkzeuge sind vor allem für KI-Video bekannt?",
      optionen: ["Google Veo", "ElevenLabs", "Runway", "Perplexity"],
      richtig: [0, 2],
      erklaerung: "Veo und Runway erzeugen Videos. ElevenLabs ist auf Stimmen und Audio spezialisiert, Perplexity auf Recherche."
    },
    {
      frage: "Was ist ein Open-Weight-Modell?",
      optionen: ["Ein Modell, dessen Gewichte veröffentlicht sind und das man selbst betreiben kann", "Ein Modell ohne Datenschutz", "Ein besonders leichtes Handy-Modell", "Ein Modell, das nur Bilder erzeugt"],
      richtig: [0],
      erklaerung: "Beispiele sind Llama, Mistral, Qwen oder DeepSeek. Man kann sie auf eigenen Servern betreiben, sodass Daten im Haus bleiben."
    },
    {
      frage: "Wofür lohnt sich meist ein kleines, schnelles Modell (z. B. Haiku, Flash, „Luna“-Klasse)?",
      optionen: ["Für Massenaufgaben wie viele Alt-Texte oder Meta-Descriptions", "Für die schwierigste juristische Analyse", "Für gar nichts", "Nur für Bilder"],
      richtig: [0],
      erklaerung: "Kleine Modelle sind günstig und schnell – ideal für einfache, wiederkehrende Aufgaben. Große Modelle lohnen sich bei komplexen Analysen."
    },
    {
      frage: "Was ist C2PA?",
      optionen: ["Ein Standard für Herkunftsangaben (Content Credentials) in Medien", "Ein KI-Modell von Google", "Ein Paragraf im Urheberrechtsgesetz", "Ein Social-Media-Netzwerk"],
      richtig: [0],
      erklaerung: "C2PA hält in Metadaten fest, ob und wie ein Bild oder Video mit KI erzeugt oder bearbeitet wurde – ein Baustein für maschinenlesbare Kennzeichnung."
    },
    {
      frage: "Was regelt § 44b UrhG im Zusammenhang mit KI?",
      optionen: ["Text und Data Mining – erlaubt, sofern der Rechteinhaber nicht maschinenlesbar widersprochen hat", "Die Kennzeichnung von Deepfakes", "Die Bußgelder des AI Act", "Den Datenschutz bei Chatbots"],
      richtig: [0],
      erklaerung: "§ 44b UrhG erlaubt TDM grundsätzlich, Rechteinhaber können aber einen Nutzungsvorbehalt (Opt-out) erklären. Im GEMA-Urteil deckte die Schranke das Memorisieren nicht."
    },
    {
      frage: "Was bedeutet „Human in the Loop“ bei Automatisierungen?",
      optionen: ["Ein Mensch prüft und gibt frei, bevor eine KI-Aktion wirksam wird", "Die KI ersetzt alle Menschen", "Ein Mensch tippt jede Antwort selbst", "Eine Schleife, die nie endet"],
      richtig: [0],
      erklaerung: "Besonders bei Senden, Veröffentlichen oder Löschen sollte ein Mensch die letzte Entscheidung treffen."
    }
  ]
});

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
        "<li><strong>OpenAI (ChatGPT):</strong> Im Juli 2026 kam die GPT‑5.6-Familie, ab September 2026 die GPT‑6-Familie (Luna, Sol und „Astra“ als Flaggschiff), danach GPT‑6.1 (Terra, Sol). Typisch: ein großes Modell für schwierige Aufgaben, ein ausgewogenes und ein günstiges, schnelles Modell.</li>" +
        "<li><strong>Google (Gemini):</strong> Gemini 3 (Nov. 2025), danach 3.1 Pro, mehrere schnelle „Flash“-Modelle und im Herbst 2026 die ersten Gemini‑4-Modelle (Argon: angekündigt Ende September, seit 13. Oktober in der Gemini-App für Pro- und Ultra-Abos; Carbon: seit 10. November für Entwickler, Unternehmen und Ultra-Abos). Gemini steckt auch in der Google-Suche (AI Overviews, AI Mode) und in Workspace.</li>" +
        "<li><strong>Anthropic (Claude):</strong> Claude-Modelle der 5er-Generation, gestaffelt von groß (Opus 5.5) über mittel (Sonnet 5.5) bis klein und schnell (Haiku 5.5), erschienen September/Oktober 2026. Darüber steht die teurere Spitzenstufe Claude Fable, seit 9. November 2026 in Version 5.2 (Nachfolger von Fable 5.1). Stark beim Schreiben, bei langen Dokumenten und beim Programmieren; Anthropic hat auch MCP erfunden.</li>" +
        "<li><strong>Weitere:</strong> Meta (Muse, früher Llama), Mistral (aus Frankreich, interessant für EU-Datenschutz), xAI (Grok) sowie chinesische Anbieter wie DeepSeek, Qwen oder Kimi, deren Modelle oft offen verfügbar sind.</li>" +
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
        "<li><strong>Video:</strong> Google Gemini Omni (ersetzt in der Gemini-App das frühere Veo), Runway, Kling – kurze Clips aus Text oder Bild, zunehmend mit Ton. OpenAI hat die eigenständige Sora-App 2026 eingestellt; Sora 2 gibt es nur noch in ChatGPT.</li>" +
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
        "<li><a href=\"https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation\">Anthropic: MCP an die Agentic AI Foundation gespendet (09.12.2025)</a></li>" +
        "<li><a href=\"https://9to5google.com/2026/10/13/gemini-app-4-argon/\">9to5Google: Gemini 4 Argon für Pro- und Ultra-Abos (13.10.2026)</a></li>" +
        "<li><a href=\"https://gemini.google/overview/video-generation/\">Google: Videoerstellung mit Gemini Omni</a></li>" +
        "<li><a href=\"https://9to5google.com/2026/03/24/openai-shutting-down-sora-video-generation-app-but-without-explaining-why/\">9to5Google: OpenAI stellt die Sora-App ein (24.03.2026)</a></li>" +
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
        "<p>Wenn die Antwort schon auf der Suchseite steht, klicken weniger Menschen. Auswertungen (u. a. von SISTRIX für Deutschland) zeigen, dass die Klickrate auf das erste organische Ergebnis deutlich sinkt, wenn ein AI Overview erscheint – laut SISTRIX (Februar 2026) von rund 27 % auf 11 %. Wie stark, hängt von Branche und Suchanfrage ab – informative Fragen („Was ist …?“) trifft es am meisten, lokale und transaktionale Suchen („Anwalt Arbeitsrecht [Stadt]“) weniger. Die genauen Zahlen schwanken je nach Studie; sicher ist der Trend zu mehr <strong>Zero-Click-Suchen</strong>.</p>" +

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
        "<li>Das <strong>LG München I</strong> hat am 11.11.2025 im Fall <strong>GEMA gegen OpenAI</strong> entschieden, dass das „Auswendiglernen“ von Liedtexten im Modell und ihre Ausgabe die Rechte der Urheber verletzt. Das Urteil ist nicht rechtskräftig; OpenAI hat Berufung angekündigt.</li>" +
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
    },
    {
      titel: "Neu im November 2026",
      html:
        "<p>Was sich von Ende Oktober bis Mitte November 2026 getan hat. Viele Angaben stammen von den Anbietern selbst oder aus Wochenrückblicken; Leistungswerte sind meist nicht unabhängig geprüft. Stand: 16.11.2026.</p>" +

        "<h3>Neue Modelle</h3>" +
        "<ul>" +
        "<li><strong>Anthropic:</strong> Nach Claude Opus 5.5 (22.09.), Sonnet 5.5 (28.09.) und Haiku 5.5 (07.10.) kam am <strong>9. November</strong> <strong>Claude Fable 5.2</strong> – die neue Version der Spitzenstufe oberhalb von Opus (Nachfolger von Fable 5.1, laut Anthropic bis zu 30 % schnellere Ausgaben), gedacht für schwieriges Programmieren, Recherche und Analysen. Es ist pro Token deutlich teurer als Opus 5.5; Anthropic empfiehlt für die meisten Aufgaben weiterhin Opus. Die Schwester <strong>Claude Mythos 5.2</strong> ist technisch dasselbe Modell ohne bestimmte Sperren für Cybersicherheit und Biologie und nur für geprüfte Organisationen zugänglich (über Anthropics Verifizierungsprogramme).</li>" +
        "<li><strong>Google:</strong> <strong>Gemini 4 Carbon</strong> ist seit 10. November für Entwickler (API, AI Studio), Unternehmen und Abonnenten von Google AI Ultra verfügbar, nachdem zwei Wochen lang nur ausgewählte IT-Sicherheitsfachleute Zugang hatten. Für Entwickler gibt es eine Vorschau auf einen Schwarm-Modus („/swarm“ in Google Antigravity), bei dem Carbon koordiniert und schnellere Modelle Teilaufgaben parallel erledigen. Davor kam Gemini 4 Argon (seit 13. Oktober für Pro- und Ultra-Abos). Das Videomodell Gemini Omni 1.2 Flash (seit 5. November) erzeugt Clips mit Ton bis 15 Sekunden. In der Gemini-App lassen sich seit Ende Oktober im Chat erstellte Dokumente, Tabellen, Präsentationen und PDFs direkt bearbeiten (vieles davon vorerst nur im Web).</li>" +
        "<li><strong>OpenAI:</strong> <strong>GPT‑6.1 Terra</strong> (seit 26. Oktober) versteht Bildschirminhalte und bedient Anwendungen (klicken, tippen, zwischen Programmen wechseln) – in ChatGPT Work, Codex und der API. <strong>ChatGPT Images 2.6</strong> (seit 4. November) erzeugt Bilder laut OpenAI 50 % schneller und kann animierte GIFs. <strong>GPT‑6 Cyber</strong> ist ein Sicherheitsmodell nur für ausgewählte Partner. Seit Oktober gibt es außerdem <strong>ChatGPT Slides</strong> für Präsentationen (Export nach PowerPoint, PDF, Google Slides).</li>" +
        "<li><strong>Europa und offene Modelle:</strong> Mistral hat <strong>Mistral Large 4</strong> (Gewichte seit 29. Oktober) und die Sprachfamilie Voxtral 3 vorgestellt, mit EU-Hosting oder Betrieb auf eigenen Servern. Meta hat Mitte Oktober die Gewichte von Muse Spark Open veröffentlicht (mit eigener, eingeschränkter Lizenz), Moonshot am 4. November die von Kimi K3.1 Pro. DeepL zeigt mit Aure ein Stimm-Modell, das Tonfall und Sprechtempo beim Übersetzen überträgt, auch auf Deutsch.</li>" +
        "</ul>" +

        "<h3>Agenten werden Alltag</h3>" +
        "<ul>" +
        "<li><strong>Claude Duet</strong> (Vorschau seit 21. Oktober mit Warteliste, nur USA, Deutschland noch nicht): Assistent, der morgens zusammenfasst, was in verbundenen Apps ansteht, und größere Aufgaben auf einem virtuellen Computer erledigt. Vor Senden oder Zahlen fragt er nach Freigabe.</li>" +
        "<li><strong>Claude Sheets, Whiteboards und Meetings</strong> (Beta seit 10. November). Meetings (vorerst nur Team- und Enterprise-Tarife) nimmt als gekennzeichneter Teilnehmer an Google-Meet-Calls teil – Aufzeichnung und Datenschutz vorher klären.</li>" +
        "<li><strong>Adobe MAX</strong> (10. November): KI-Agenten für Firefly und die Creative-Cloud-Apps. Als Vorschau gezeigt wurde <strong>Creative Cloud MCP</strong>, über das KI-Agenten anderer Anbieter Photoshop-, Illustrator- oder Premiere-Dateien bearbeiten sollen – eine geschlossene Beta ist erst für 2027 geplant.</li>" +
        "<li><strong>Agent Skills:</strong> Anthropic hat am 22. Oktober sein Format für Agent Skills an die <strong>Agentic AI Foundation</strong> gespendet – dieselbe Stiftung, die schon MCP betreut.</li>" +
        "<li><strong>„Businesses in ChatGPT“</strong> (Beta): Seit 10. November können Unternehmen ihr Profil in ChatGPT beanspruchen, Angaben und Produktfeeds pflegen und Auswertungen einsehen. Eigene Business Agents vorerst nur für berechtigte Online-Händler und -Dienstleister in den USA.</li>" +
        "</ul>" +

        "<h3>Sicherheit: Lehren aus den letzten Wochen</h3>" +
        "<ul>" +
        "<li><strong>Coding-Agenten:</strong> Bei Claude Code sind laut einer Auswertung der Sicherheitsfirma Apiiro Zugangsdaten in öffentlichen GitHub-Repositories gelandet: Die Option „Ja, nicht erneut fragen“ speichert den freigegebenen Befehl samt Passwörtern in einer Einstellungsdatei im Projektordner, die dann mit hochgeladen wurde. Lehre: Freigaben nicht pauschal abschalten, öffentliche Repositories auf Einstellungsdateien prüfen, betroffene Schlüssel austauschen.</li>" +
        "<li><strong>PHP-Lücken:</strong> Am 21. Oktober wurden zwei kritische PHP-Sicherheitslücken samt Updates veröffentlicht, eine davon mit KI-Hilfe gefunden. Wer eine Website betreibt, sollte beim Hoster prüfen, ob die Updates eingespielt sind.</li>" +
        "<li><strong>CERT-EU</strong> (die IT-Sicherheitsstelle der EU-Institutionen) warnt, dass KI das Finden und Ausnutzen von Sicherheitslücken stark beschleunigt – Updates sollten deshalb schneller eingespielt werden.</li>" +
        "</ul>" +

        "<h3>Regeln und Recht</h3>" +
        "<ul>" +
        "<li><strong>Leitlinien zu Art. 50 AI Act:</strong> Die Kommission hat die finalen Leitlinien am 20. Juli 2026 veröffentlicht; seit 12. November 2026 stehen sie auch im Amtsblatt der EU (C/2026/6005). Wichtig für Redaktionen: Für die Ausnahme bei KI-Texten braucht es eine echte menschliche Prüfung <strong>mit Faktencheck</strong> – Rechtschreib- oder Grammatikkorrektur reicht nicht. Die Kennzeichnung durch den Verwender muss <strong>für Menschen sichtbar</strong> sein; ein unsichtbares Wasserzeichen ersetzt sie nicht. Die Leitlinien sind rechtlich unverbindlich.</li>" +
        "<li><strong>2. Dezember 2026</strong> ist kein allgemeiner Stichtag, sondern betrifft die Übergangsfrist für maschinenlesbare Markierung bei bereits angebotenen KI-Systemen (siehe Bericht „KI im Marketing-Alltag“).</li>" +
        "<li><strong>Signal gegen KI-Training:</strong> Ein IETF-Entwurf (Ende Oktober 2026) sieht ein einheitliches Signal in der robots.txt vor, mit dem Websites KI-Training untersagen können. OpenAI hat angekündigt, es in den kommenden Monaten zu beachten; ein Standard ist es noch nicht.</li>" +
        "<li><strong>International:</strong> Pariser Aufruf zur KI-Sicherheit vom 9. November (eine Handvoll Staaten – die Angaben zur Zahl schwanken –, zehn KI-Firmen wie OpenAI, Anthropic und Mistral; freiwillig, ohne Sanktionen; Deutschland ist nicht dabei). In New York ist der RAISE Act beschlossen, gilt aber erst ab 1. Januar 2027 (dann Meldepflicht für schwere Sicherheitsvorfälle binnen 72 Stunden).</li>" +
        "</ul>" +

        "<h3>Wirtschaft und Arbeit</h3>" +
        "<ul>" +
        "<li><strong>Andrea Nahles</strong>, Chefin der Bundesagentur für Arbeit, rechnet (gestützt auf eine Szenario-Studie von IAB, BIBB und GWS) damit, dass in Deutschland in den nächsten 15 Jahren rund 800.000 Jobs durch KI wegfallen – etwa ebenso viele sollen neu entstehen.</li>" +
        "<li><strong>Anthropic</strong> hat am 26. Oktober den Börsengang beantragt (S‑1) und am 10. November die Roadshow gestartet.</li>" +
        "</ul>" +

        "<h3>Was heißt das für die Redaktion?</h3>" +
        "<ul>" +
        "<li>Für Texte reicht weiter das mittlere Modell; Fable oder Carbon lohnen sich nur für schwere Analysen.</li>" +
        "<li>Faktencheck dokumentieren – das ist jetzt auch die Voraussetzung für die Ausnahme von der Kennzeichnungspflicht.</li>" +
        "<li>Agenten nie pauschal freigeben, gerade bei Zugriff auf Konten, Code oder die Website.</li>" +
        "</ul>" +

        "<h3>Quellen</h3>" +
        "<ul>" +
        "<li><a href=\"https://www.anthropic.com/news\">Anthropic News (u. a. Fable 5.2, Haiku 5.5, Agent Skills, IPO)</a></li>" +
        "<li><a href=\"https://digitaleprofis.de/die-ki-news-der-woche-vom-12-11-2026/\">Digitale Profis: KI-News der Woche vom 12.11.2026</a></li>" +
        "<li><a href=\"https://digitaleprofis.de/die-ki-news-der-woche-vom-05-11-2026/\">Digitale Profis: KI-News der Woche vom 05.11.2026</a></li>" +
        "<li><a href=\"https://digitaleprofis.de/die-ki-news-der-woche-vom-29-10-2026/\">Digitale Profis: KI-News der Woche vom 29.10.2026</a></li>" +
        "<li><a href=\"https://lausen.com/art-50-ai-act-kennzeichnungspflicht-leitlinien/\">LAUSEN: Leitlinien zur Kennzeichnungspflicht nach Art. 50 AI Act</a></li>" +
        "<li><a href=\"https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:52026XC06005\">EUR-Lex: Leitlinien zu Art. 50 AI Act (ABl. C/2026/6005, 12.11.2026)</a></li>" +
        "<li><a href=\"https://sdtimes.com/ai/anthropic-introduces-claude-fable-5-2-mythos-5-2/\">SD Times: Claude Fable 5.2 und Mythos 5.2 (09.11.2026)</a></li>" +
        "<li><a href=\"https://www.digitaltrends.com/computing/google-gemini-4-carbon-is-now-available-for-complex-ai-tasks/\">Digital Trends: Gemini 4 Carbon verfügbar (10.11.2026)</a></li>" +
        "<li><a href=\"https://openai.com/index/introducing-gpt-6-1-terra/\">OpenAI: GPT‑6.1 Terra</a></li>" +
        "<li><a href=\"https://openai.com/index/introducing-images-2-6/\">OpenAI: Images 2.6 (04.11.2026)</a></li>" +
        "<li><a href=\"https://openai.com/index/introducing-businesses-chatgpt/\">OpenAI: Businesses in ChatGPT</a></li>" +
        "<li><a href=\"https://www.darkreading.com/cyber-risk/ai-coding-agents-leak-secrets-github\">Dark Reading: Coding-Agenten leaken Zugangsdaten auf GitHub</a></li>" +
        "<li><a href=\"https://cert.europa.eu/blog/ai-vulnerability-discovery-defenders-must-adapt\">CERT-EU: KI verändert das Finden von Sicherheitslücken</a></li>" +
        "<li><a href=\"https://www.dwt.com/blogs/artificial-intelligence-law-advisor/2025/12/new-york-raise-act-ai-safety-rules-developers\">DWT: New Yorker RAISE Act</a></li>" +
        "<li><a href=\"https://www.diplomacy.edu/updates/paris-call-ai-safety-security/\">Diplo: Paris Call for AI Safety and Security</a></li>" +
        "<li><a href=\"https://openai.com/index/helping-websites-express-ai-training-preferences/\">OpenAI: robots.txt-Signal für KI-Training</a></li>" +
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
        ["Video", "Gemini Omni (früher Veo), Runway, Kling, Sora 2 in ChatGPT", "Kurze Clips, Kennzeichnung, Plattform-Labels"],
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
            { text: "Anthropic: Claude (Fable, Opus, Sonnet, Haiku)" },
            { text: "Offene Modelle: Mistral, Muse Spark Open, DeepSeek, Qwen, Kimi" }
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
            { text: "Video: Gemini Omni, Runway, Kling" },
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
    { vorne: "Was ist ein Deepfake im Sinne des AI Act?", hinten: "Ein KI-erzeugter oder -veränderter Bild-, Video- oder Audioinhalt, der echten Personen, Orten oder Ereignissen ähnelt und fälschlich echt wirken kann. Wer ihn mit KI erstellt und veröffentlicht (Betreiber), muss ihn sichtbar als KI-generiert kennzeichnen." },
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
    { vorne: "Was ist E-E-A-T und warum ist es für KI-Suche wichtig?", hinten: "Experience, Expertise, Authoritativeness, Trust. Inhalte mit erkennbaren Experten, Belegen und eigener Erfahrung gelten als vertrauenswürdiger und werden eher als Quelle genutzt." },
    { vorne: "Was ist Claude Fable 5.2?", hinten: "Die neueste Version von Anthropics Spitzenstufe Fable (Nachfolger von Fable 5.1), erschienen am 9. November 2026, oberhalb von Opus 5.5 – für schwieriges Programmieren, Recherche und Analysen. Pro Token deutlich teurer; für die meisten Aufgaben empfiehlt Anthropic weiter Opus 5.5." },
    { vorne: "Was unterscheidet Claude Mythos 5.2 von Fable 5.2?", hinten: "Technisch dasselbe Modell, aber ohne bestimmte Sperren für Cybersicherheit und Biologie. Deshalb nur für geprüfte Organisationen über Anthropics Verifizierungsprogramme zugänglich." },
    { vorne: "Welche Claude-5.5-Modelle kamen im Herbst 2026?", hinten: "Opus 5.5 (22.09.2026), Sonnet 5.5 (28.09.2026) und Haiku 5.5 (07.10.2026) – groß, mittel und klein/schnell." },
    { vorne: "Was ist Gemini 4 Carbon?", hinten: "Googles stärkstes Gemini-4-Modell, seit 10. November 2026 für Entwickler, Unternehmen und Google-AI-Ultra-Abos verfügbar (vorher zwei Wochen nur für IT-Sicherheitsfachleute). Für Entwickler gibt es eine Vorschau auf einen Schwarm-Modus, bei dem mehrere Modelle eine Aufgabe parallel bearbeiten." },
    { vorne: "Was kann GPT‑6.1 Terra?", hinten: "Bildschirminhalte verstehen und Anwendungen bedienen: klicken, tippen, zwischen Programmen wechseln. Seit 26. Oktober 2026 in ChatGPT Work, Codex und der API; laut OpenAI günstiger und schneller als die großen GPT‑6-Modelle." },
    { vorne: "Was ist neu an ChatGPT Images 2.6?", hinten: "Seit 4. November 2026: laut OpenAI 50 % schnellere Bilderzeugung, animierte GIFs (Einführung teils noch laufend) und Referenzbilder, die sich speichern und wiederverwenden lassen." },
    { vorne: "Was ist GPT‑6 Cyber?", hinten: "Ein OpenAI-Modell speziell für das Finden und Abwehren von Sicherheitslücken, nur für ausgewählte Partner. OpenAI meldet damit u. a. 81 schwere Lücken in Firefox (Angabe von OpenAI, nicht unabhängig geprüft)." },
    { vorne: "Was ist Claude Duet?", hinten: "Ein Assistent (Vorschau seit 21. Oktober 2026, USA), der morgens zusammenfasst, was in verbundenen Apps ansteht, und größere Aufgaben auf einem virtuellen Computer erledigt. Vor Senden oder Zahlungen holt er die Freigabe ein. In Deutschland noch nicht verfügbar." },
    { vorne: "Was hat Anthropic am 22. Oktober 2026 an die Agentic AI Foundation gespendet?", hinten: "Das Format für Agent Skills – also wiederverwendbare Anleitungen für KI-Agenten. Die Stiftung betreut bereits MCP." },
    { vorne: "Reicht eine Rechtschreibkorrektur, um einen KI-Text von der Kennzeichnung zu befreien?", hinten: "Nein. Laut den Leitlinien zu Art. 50 AI Act braucht die redaktionelle Ausnahme eine echte menschliche Prüfung mit mindestens einem Faktencheck." },
    { vorne: "Ersetzt ein unsichtbares Wasserzeichen die sichtbare KI-Kennzeichnung?", hinten: "Nein. Die Kennzeichnung durch den Verwender (z. B. bei Deepfakes) muss für Menschen ohne Hilfsmittel erkennbar sein. Maschinenlesbare Markierung ist eine zusätzliche Pflicht der Anbieter." },
    { vorne: "Was ist das geplante robots.txt-Signal gegen KI-Training?", hinten: "Ein IETF-Entwurf für ein einheitliches Signal, mit dem Websites KI-Training zentral untersagen können. OpenAI will es in den kommenden Monaten beachten, ein Standard ist es noch nicht." },
    { vorne: "Welche Lehre gibt es aus den Datenlecks bei Coding-Agenten im November 2026?", hinten: "Freigaben nicht pauschal mit „Nicht erneut fragen“ abschalten. Öffentliche Repositories auf Einstellungsdateien prüfen und betroffene Schlüssel austauschen." },
    { vorne: "Was ist Mistral Large 4?", hinten: "Das neue große Modell des französischen Anbieters Mistral (Gewichte seit 29.10.2026). Nutzbar mit EU-Hosting oder auf eigenen Servern – interessant für Datenschutz." },
    { vorne: "Wie viele Jobs könnten laut Bundesagentur für Arbeit in Deutschland durch KI wegfallen?", hinten: "Rund 800.000 in den nächsten 15 Jahren, sagt BA-Chefin Andrea Nahles (gestützt auf eine Szenario-Studie von IAB, BIBB und GWS). Ungefähr genauso viele neue Stellen sollen entstehen." }
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
      erklaerung: "Das Gericht sah in der Speicherung der Texte im Modell und ihrer Wiedergabe eine Urheberrechtsverletzung. Das Urteil ist nicht rechtskräftig; OpenAI hat Berufung angekündigt."
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
      optionen: ["Google Gemini Omni (früher Veo)", "ElevenLabs", "Runway", "Perplexity"],
      richtig: [0, 2],
      erklaerung: "Gemini Omni (Nachfolger von Veo in der Gemini-App) und Runway erzeugen Videos. ElevenLabs ist auf Stimmen und Audio spezialisiert, Perplexity auf Recherche."
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
    },

    // ---- Neue Fragetypen (Ausbau 16.11.2026) ----
    { typ: "wahrfalsch", aussage: "Die Search-Console-Einstellung zum Ausschluss aus KI-Funktionen gilt auch für ChatGPT und Perplexity.", richtig: false, erklaerung: "Sie betrifft nur Googles KI-Funktionen: AI Overviews, AI Mode und KI in Discover.", quelle: "KI-Suche: Was AI Overviews, AI Mode & Co. für Websites bedeuten" },
    { typ: "wahrfalsch", aussage: "Der EU AI Act ist seit 1. August 2024 in Kraft, gilt aber stufenweise.", richtig: true, erklaerung: "Verbote seit Februar 2025, GPAI-Pflichten seit August 2025, Transparenzpflichten seit 2. August 2026, Hochrisiko später.", quelle: "KI im Marketing-Alltag: Prompting, Recht und Risiken" },
    { typ: "wahrfalsch", aussage: "Rein KI-generierte Bilder sind in Deutschland in der Regel urheberrechtlich geschützt.", richtig: false, erklaerung: "Es fehlt die persönliche menschliche Schöpfung. Je mehr eigene Gestaltung, desto eher entsteht Schutz.", quelle: "KI im Marketing-Alltag: Prompting, Recht und Risiken" },
    { typ: "wahrfalsch", aussage: "Lokale und transaktionale Suchen wie „Anwalt Arbeitsrecht [Stadt]“ sind von AI Overviews weniger betroffen als reine Wissensfragen.", richtig: true, erklaerung: "Informative „Was ist …?“-Fragen beantwortet die KI direkt, lokale Suchen führen eher noch zum Klick.", quelle: "KI-Suche: Was AI Overviews, AI Mode & Co. für Websites bedeuten" },
    { typ: "wahrfalsch", aussage: "Laut den Leitlinien zu Art. 50 reicht eine Rechtschreibkorrektur durch einen Menschen, damit ein KI-Text nicht gekennzeichnet werden muss.", richtig: false, erklaerung: "Die redaktionelle Ausnahme verlangt eine echte Prüfung mit mindestens einem Faktencheck.", quelle: "Neu im November 2026" },
    { typ: "wahrfalsch", aussage: "Claude Fable 5.2 ist pro Token günstiger als Claude Opus 5.5.", richtig: false, erklaerung: "Fable liegt oberhalb von Opus und ist deutlich teurer. Anthropic empfiehlt für die meisten Aufgaben weiter Opus 5.5.", quelle: "Neu im November 2026" },
    { typ: "luecke", text: "Anthropic hat MCP im Dezember 2025 an die ___ unter dem Dach der Linux Foundation übergeben.", optionen: ["Agentic AI Foundation", "Mozilla Foundation", "EU-Kommission", "OpenAI Foundation"], richtig: [0], erklaerung: "Die Agentic AI Foundation betreut MCP und seit Oktober 2026 auch das Format für Agent Skills.", quelle: "Überblick: Was ist neu in der KI?" },
    { typ: "luecke", text: "Bei verbotenen KI-Praktiken drohen bis zu 35 Mio. Euro oder ___ des weltweiten Jahresumsatzes.", optionen: ["7 %", "1 %", "3 %", "20 %"], richtig: [0], erklaerung: "Für verbotene Praktiken gilt der höchste Rahmen, je nachdem, was höher ist.", quelle: "Lernkarten" },
    { typ: "luecke", text: "Nach § 44b UrhG ist Text und Data Mining erlaubt, solange der Rechteinhaber nicht ___ widersprochen hat.", optionen: ["maschinenlesbar", "mündlich", "per Einschreiben", "vor Gericht"], richtig: [0], erklaerung: "Der Nutzungsvorbehalt (Opt-out) muss maschinenlesbar erklärt werden, etwa in der robots.txt oder in Metadaten.", quelle: "Lernkarten" },
    { typ: "luecke", text: "Der Web-Crawler von OpenAI heißt ___ und lässt sich über die robots.txt steuern.", optionen: ["GPTBot", "Googlebot", "Bingbot", "ClaudeCrawler"], richtig: [0], erklaerung: "In der robots.txt kann man festlegen, welche KI-Crawler die Website abrufen dürfen.", quelle: "KI-Suche: Was AI Overviews, AI Mode & Co. für Websites bedeuten" },
    { typ: "luecke", text: "Gemini 4 ___ ist seit 10. November 2026 für Entwickler, Unternehmen und Ultra-Abos verfügbar, nachdem es zwei Wochen nur für Sicherheitsfachleute zugänglich war.", optionen: ["Carbon", "Argon", "Flash", "Nano Banana"], richtig: [0], erklaerung: "Carbon war vorher zwei Wochen nur für Sicherheitsfachleute zugänglich. Argon wurde schon Ende September angekündigt und ist seit 13. Oktober in der Gemini-App.", quelle: "Neu im November 2026" },
    { typ: "zuordnen", frage: "Ordne die Begriffe ihrer Bedeutung zu.", paare: [["RAG", "KI holt sich Wissen aus einer Quelle und antwortet darauf gestützt"], ["Halluzination", "Überzeugend klingende, aber erfundene Angabe"], ["Token", "Texteinheit, mit der ein Modell rechnet"], ["Kontextfenster", "Textmenge, die ein Modell gleichzeitig im Blick hat"]], erklaerung: "Diese vier Grundbegriffe tauchen in fast jeder KI-Diskussion auf.", quelle: "Lernkarten" },
    { typ: "zuordnen", frage: "Ordne die Werkzeuge ihrem Einsatzzweck zu.", paare: [["Perplexity", "Recherche mit Quellen"], ["NotebookLM", "Eigene Dokumente zusammenfassen"], ["ElevenLabs", "Audio und Stimme"], ["Gemini Omni", "Video"], ["n8n", "Automatisierung"]], erklaerung: "So steht es in der Tabelle der KI-Werkzeuge nach Einsatzzweck.", quelle: "KI-Werkzeuge nach Einsatzzweck im Marketing" },
    { typ: "zuordnen", frage: "Ordne die Stichtage des AI Act zu.", paare: [["2. Februar 2025", "Verbotene KI-Praktiken"], ["2. August 2025", "Pflichten für GPAI-Anbieter"], ["2. August 2026", "Transparenzpflichten nach Art. 50"], ["2. Dezember 2027", "Hochrisiko-KI nach Anhang III"]], erklaerung: "Der Digital Omnibus hat vor allem die Hochrisiko-Fristen verschoben.", quelle: "KI im Marketing-Alltag: Prompting, Recht und Risiken" },
    { typ: "zuordnen", frage: "Klassische Suche oder KI-Suche? Ordne zu.", paare: [["Liste mit Links", "Ergebnis der klassischen Suche"], ["Zusammengefasste Antwort mit Quellen", "Ergebnis der KI-Suche"], ["Ranking-Position", "Ziel der klassischen Optimierung"], ["Als Quelle zitiert werden", "Ziel der KI-Optimierung"]], erklaerung: "Siehe Tabelle „Klassische Suche vs. KI-Suche“.", quelle: "Klassische Suche vs. KI-Suche" },
    { typ: "zuordnen", frage: "Ordne die Neuheiten aus Herbst 2026 dem Anbieter zu.", paare: [["Claude Fable 5.2", "Anthropic"], ["Gemini 4 Carbon", "Google"], ["GPT‑6.1 Terra", "OpenAI"], ["Mistral Large 4", "Mistral"]], erklaerung: "Fable 5.2 kam am 9.11., Carbon am 10.11. für Entwickler und Ultra-Abos, Terra bedient Anwendungen, Mistral Large 4 ist aus Europa.", quelle: "Neu im November 2026" },
    { typ: "reihenfolge", frage: "Bring die Prompting-Schritte in eine sinnvolle Reihenfolge.", schritte: ["Rolle und Ziel festlegen", "Kontext geben (Zielgruppe, Ton, Keyword)", "Beispiele zeigen", "Ausgabeformat festlegen", "Unsichere Aussagen markieren lassen"], erklaerung: "Erst Rahmen und Kontext, dann Muster und Format, zum Schluss die Selbstprüfung.", quelle: "KI im Marketing-Alltag: Prompting, Recht und Risiken" },
    { typ: "reihenfolge", frage: "Bring die AI-Act-Stufen in die zeitliche Reihenfolge.", schritte: ["Inkrafttreten (1. August 2024)", "Verbote und KI-Kompetenz (2. Februar 2025)", "GPAI-Pflichten (2. August 2025)", "Transparenzpflichten Art. 50 (2. August 2026)", "Hochrisiko Anhang III (2. Dezember 2027)", "Hochrisiko Anhang I (2. August 2028)"], erklaerung: "Der AI Act gilt stufenweise; die Hochrisiko-Pflichten wurden durch den Omnibus verschoben.", quelle: "KI im Marketing-Alltag: Prompting, Recht und Risiken" },
    { typ: "reihenfolge", frage: "So arbeitet ein KI-Agent. Bring die Schritte in die richtige Reihenfolge.", schritte: ["Ziel bekommen", "Schritte planen", "Werkzeuge nutzen (Suche, Browser, Dateien)", "Zwischenergebnisse prüfen", "Mensch gibt kritische Aktion frei"], erklaerung: "Agenten bekommen ein Ziel statt einer Frage. Bei Senden, Veröffentlichen oder Löschen gibt ein Mensch frei.", quelle: "Überblick: Was ist neu in der KI?" },
    { typ: "reihenfolge", frage: "Bring die Claude-Veröffentlichungen im Herbst 2026 in die zeitliche Reihenfolge.", schritte: ["Claude Opus 5.5", "Claude Sonnet 5.5", "Claude Haiku 5.5", "Claude Fable 5.2"], erklaerung: "22.09., 28.09., 07.10. und 09.11.2026.", quelle: "Neu im November 2026" },
    { typ: "fall", fall: "Du sollst für 200 bestehende Ratgeberseiten neue Meta-Descriptions entwerfen lassen. Zur Auswahl stehen das große, das mittlere und das kleine Modell eines Anbieters.", frage: "Welches Modell passt am besten?", optionen: ["Das größte Modell, weil es die besten Texte schreibt", "Das kleine, schnelle Modell, weil es eine Massenaufgabe ist", "Ein Videomodell wie Gemini Omni", "Gar keins, Meta-Descriptions kann KI nicht"], richtig: [1], erklaerung: "Für Massenaufgaben wie Meta-Descriptions oder Alt-Texte reicht das kleine Modell. Das große lohnt sich für Analysen und knifflige Texte. Wichtig bleibt: Ergebnisse vor der Veröffentlichung prüfen.", quelle: "Überblick: Was ist neu in der KI?" },
    { typ: "fall", fall: "Ein KI-Entwurf für einen Erbrechts-Ratgeber wird von einer Anwältin fachlich geprüft. Sie gleicht Paragraphen, Fristen und Zahlen ab, dokumentiert den Faktencheck und übernimmt die redaktionelle Verantwortung.", frage: "Muss der Text nach Art. 50 AI Act als KI-generiert gekennzeichnet werden?", optionen: ["Ja, KI-Texte müssen immer gekennzeichnet werden", "Nein, die Ausnahme greift bei echter menschlicher Prüfung mit redaktioneller Verantwortung", "Nein, Kennzeichnungspflichten gelten erst ab 2. Dezember 2026", "Ja, aber ein unsichtbares Wasserzeichen reicht"], richtig: [1], erklaerung: "KI-Texte zu Themen von öffentlichem Interesse sind zu kennzeichnen, außer ein Mensch hat sie redaktionell geprüft und trägt die Verantwortung. Laut den Leitlinien braucht es dafür eine echte Prüfung mit Faktencheck. Den Faktencheck zu dokumentieren ist sinnvoll.", quelle: "Neu im November 2026" },
    { typ: "fall", fall: "Ein Kollege lässt einen KI-Blogtext nur durch die Rechtschreibprüfung laufen und will ihn ohne Hinweis veröffentlichen. Er sagt: „Ein Mensch hat ja drübergeschaut.“", frage: "Wie reagierst du?", optionen: ["Passt, Korrekturlesen reicht für die Ausnahme", "Entweder sichtbar als KI-Text kennzeichnen oder eine echte fachliche Prüfung mit Faktencheck nachholen", "Ein unsichtbares Wasserzeichen in den Metadaten setzen, das reicht", "Den Text einfach ohne Autor veröffentlichen"], richtig: [1], erklaerung: "Nach den Leitlinien zu Art. 50 reicht Rechtschreib- oder Grammatikkorrektur für die Ausnahme nicht. Die Kennzeichnung durch den Verwender muss für Menschen sichtbar sein, ein unsichtbares Wasserzeichen ersetzt sie nicht.", quelle: "Neu im November 2026" },
    { typ: "fall", fall: "Du baust mit n8n einen Agenten, der neue Kontaktanfragen mit Namen und Schilderung des Falls an ein kostenloses Verbraucher-Konto eines Chat-Tools schickt und dort zusammenfassen lässt.", frage: "Was ist das Hauptproblem?", optionen: ["n8n kann keine E-Mails lesen", "Mandantendaten gehören nicht ohne geprüften Vertrag zur Auftragsverarbeitung und passende Einstellungen in ein KI-Tool, dazu kommt die Schweigepflicht", "Zusammenfassungen sind nach dem AI Act verboten", "Es gibt kein Problem, solange die Zusammenfassung stimmt"], richtig: [1], erklaerung: "Keine personenbezogenen Daten und erst recht keine Mandantendaten in KI-Tools ohne geprüften Vertrag (Auftragsverarbeitung) und passende Einstellungen. Bei Verbraucher-Konten können Eingaben zum Training genutzt werden, Business- und Team-Tarife schließen das meist aus. Für Anwälte gilt zusätzlich die berufliche Schweigepflicht.", quelle: "KI im Marketing-Alltag: Prompting, Recht und Risiken" },
    { typ: "fall", fall: "Im KI-Entwurf eines Arbeitsrechts-Artikels steht ein BGH-Urteil mit Datum und Aktenzeichen. In keiner Datenbank findest du dazu etwas.", frage: "Was machst du?", optionen: ["Drinlassen, die KI formuliert ja überzeugend", "Die KI fragen, ob sie sicher ist, und dann übernehmen", "Als mögliche Halluzination behandeln: ohne Beleg aus der Originalquelle streichen oder durch ein geprüftes Urteil ersetzen", "Nur das Aktenzeichen löschen, den Rest stehen lassen"], richtig: [2], erklaerung: "KI erfindet manchmal Fakten, Urteile, Aktenzeichen oder Quellen, sehr überzeugend formuliert. Gerade bei Rechtsthemen jede Angabe an der Originalquelle prüfen.", quelle: "KI im Marketing-Alltag: Prompting, Recht und Risiken" },
    { typ: "fall", fall: "Ein KI-Agent soll Webseiten zu einem Thema recherchieren und daraus direkt Social-Media-Posts für die Kanzlei veröffentlichen. Er hat Zugriff auf die Konten.", frage: "Wie richtest du das sinnvoll ein?", optionen: ["Voll automatisch, Agenten machen keine Fehler", "Der Agent erstellt Entwürfe, ein Mensch gibt vor dem Veröffentlichen frei, auch wegen möglicher Prompt Injection", "Der Agent darf veröffentlichen, aber nur nachts", "Freigaben einmal auf „nicht erneut fragen“ stellen, dann läuft es"], richtig: [1], erklaerung: "Agenten machen Fehler und können durch manipulierte Webseiten oder Dokumente fehlgeleitet werden (Prompt Injection). Bei allem, was etwas sendet, veröffentlicht oder löscht, sollte ein Mensch freigeben. Agenten nie pauschal freigeben, gerade bei Zugriff auf Konten.", quelle: "Überblick: Was ist neu in der KI?" },
    { typ: "fall", fall: "Für ein Reel soll ein realistisch wirkendes KI-Video entstehen, in dem ein Anwalt der Kanzlei mit nachgebauter Stimme eine Frage beantwortet.", frage: "Was ist dabei zu beachten?", optionen: ["Nichts, eigene Mitarbeiter darf man beliebig nachbauen", "Das Video muss als Deepfake offengelegt werden, Persönlichkeitsrechte gelten weiter", "Kennzeichnen muss nur das Tool, nicht die Kanzlei", "Es reicht, das Video nur auf TikTok zu zeigen"], richtig: [1], erklaerung: "Wer KI nutzt, muss Deepfakes offenlegen, also realistisch wirkende Bilder, Videos oder Audios von echten Personen. Persönlichkeits- und Urheberrechte gelten weiter, und Plattformen verlangen teils eigene KI-Labels.", quelle: "KI im Marketing-Alltag: Prompting, Recht und Risiken" },
    { typ: "fall", fall: "Dein Chef will die Kanzlei-Website in der Search Console aus AI Overviews und AI Mode abmelden, „damit ChatGPT und Perplexity unsere Texte nicht mehr zusammenfassen“.", frage: "Was stimmt?", optionen: ["Die Einstellung gilt für alle KI-Anbieter", "Die Einstellung betrifft nur Googles KI-Funktionen, nicht ChatGPT oder Perplexity, und kostet dort Sichtbarkeit", "Die Abmeldung entfernt die Seiten auch aus der normalen Google-Suche", "Die Einstellung ist nur in den USA verfügbar"], richtig: [1], erklaerung: "Die Search-Console-Einstellung nimmt Seiten aus AI Overviews, AI Mode und KI-Funktionen in Discover heraus. Für ChatGPT oder Perplexity gilt sie nicht. Wer sich abmeldet, verliert dort Sichtbarkeit; die normale Suche soll laut Google nicht betroffen sein.", quelle: "KI-Suche: Was AI Overviews, AI Mode & Co. für Websites bedeuten" },
    { typ: "fehler", frage: "Finde die falschen Behauptungen in diesem KI-generierten Blogabsatz zum AI Act.",
      teile: [
        { text: "Seit dem 2. August 2026 gelten die meisten Regeln des AI Act.", falsch: false },
        { text: "Ab dem 2. Dezember 2026 müssen alle Unternehmen ihre KI-Texte erstmals kennzeichnen.", falsch: true, warum: "Der 2. Dezember 2026 ist kein allgemeiner Stichtag, sondern das Ende der Übergangsfrist für maschinenlesbare Markierung bei bereits angebotenen KI-Systemen." },
        { text: "Rein KI-generierte Texte sind in Deutschland voll urheberrechtlich geschützt.", falsch: true, warum: "Rein KI-generierte Inhalte sind in der Regel nicht geschützt, weil eine menschliche Schöpfung fehlt." },
        { text: "Das LG München I hat im Fall GEMA gegen OpenAI rechtskräftig entschieden.", falsch: true, warum: "Das Urteil vom 11.11.2025 ist nicht rechtskräftig, OpenAI hat Berufung angekündigt." },
        { text: "Die Pflichten für Hochrisiko-KI nach Anhang III gelten ab dem 2. Dezember 2027.", falsch: false }
      ], erklaerung: "Typisch für KI-Texte: Daten und Rechtslage klingen plausibel, sind aber verdreht. Jede Rechtsangabe an der Quelle prüfen.", quelle: "KI im Marketing-Alltag: Prompting, Recht und Risiken" },
    { typ: "fehler", frage: "Finde die riskanten Schritte in diesem geplanten KI-Arbeitsablauf.",
      teile: [
        { text: "Ein Agent liest morgens die neuen Kontaktanfragen und kopiert Namen und Sachverhalt in ein kostenloses Verbraucher-Konto eines Chat-Tools.", falsch: true, warum: "Mandantendaten nur mit geprüftem Vertrag zur Auftragsverarbeitung und passenden Einstellungen; Verbraucher-Konten nutzen Eingaben teils zum Training. Dazu kommt die Schweigepflicht." },
        { text: "Er schreibt Antworten und verschickt sie automatisch ohne Freigabe.", falsch: true, warum: "Bei allem, was etwas sendet, veröffentlicht oder löscht, sollte ein Mensch freigeben." },
        { text: "Beim Coding-Agenten stellen wir Befehle auf „Ja, nicht erneut fragen“, damit es schneller geht.", falsch: true, warum: "Diese Option kann freigegebene Befehle samt Passwörtern in einer Einstellungsdatei im Projektordner speichern, die dann mit hochgeladen wird. Freigaben nicht pauschal abschalten." },
        { text: "Vor jeder Veröffentlichung auf der Website prüft ein Mensch den Entwurf.", falsch: false }
      ], erklaerung: "Agenten sparen Zeit, brauchen aber klare Grenzen: keine Mandantendaten ohne Vertrag, keine pauschalen Freigaben, Mensch vor Senden und Veröffentlichen.", quelle: "Neu im November 2026" },
    { typ: "fehler", frage: "Finde die Probleme im KI-Kennzeichnungskonzept der Kanzlei-Website.",
      teile: [
        { text: "Unser KI-Chatbot stellt sich als „Frau Weber aus dem Sekretariat“ vor.", falsch: true, warum: "Nach Art. 50 AI Act müssen Nutzer erkennen können, dass sie mit einer KI sprechen." },
        { text: "KI-Ratgebertexte gelten als geprüft, sobald die Rechtschreibprüfung drübergelaufen ist.", falsch: true, warum: "Für die Ausnahme braucht es eine echte menschliche Prüfung mit Faktencheck, Rechtschreibkorrektur reicht nicht." },
        { text: "Statt eines sichtbaren Hinweises setzen wir ein unsichtbares Wasserzeichen.", falsch: true, warum: "Die Kennzeichnung durch den Verwender muss für Menschen sichtbar sein, ein unsichtbares Wasserzeichen ersetzt sie nicht." },
        { text: "Realistische KI-Bilder von echten Personen kennzeichnen wir als KI-generiert.", falsch: false },
        { text: "Auf Instagram setzen wir zusätzlich das KI-Label der Plattform.", falsch: false }
      ], erklaerung: "Chatbots offenlegen, Deepfakes kennzeichnen, sichtbar statt versteckt. Plattform-Labels kommen zusätzlich dazu.", quelle: "KI im Marketing-Alltag: Prompting, Recht und Risiken" },
    { typ: "fehler", frage: "Finde die falschen Aussagen in diesem Absatz über KI-Suche.",
      teile: [
        { text: "Google AI Mode ist in Deutschland seit Oktober 2025 verfügbar.", falsch: false },
        { text: "Wer sich in der Search Console von AI Overviews abmeldet, verschwindet damit auch aus ChatGPT und Perplexity.", falsch: true, warum: "Die Einstellung gilt nur für Googles KI-Funktionen, nicht für ChatGPT oder Perplexity." },
        { text: "Laut SISTRIX sinkt die Klickrate auf das erste Ergebnis mit AI Overview von rund 27 % auf 11 %.", falsch: false },
        { text: "Für GEO zählt nur die Ranking-Position, Autoren und Struktur sind egal.", falsch: true, warum: "GEO setzt auf direkte Antworten, klare Struktur, E-E-A-T mit echten Autoren und Erwähnungen auf anderen Seiten." },
        { text: "Der Search-Console-Bericht zu KI-Funktionen zeigt Impressionen, aber bisher keine Klickdaten.", falsch: false }
      ], erklaerung: "Die Search-Console-Steuerung betrifft nur Google. Für die Sichtbarkeit in KI-Antworten zählen Struktur, Belege und Marke.", quelle: "KI-Suche: Was AI Overviews, AI Mode & Co. für Websites bedeuten" },
    { typ: "fehler", frage: "Finde die Fehler in diesem Werkzeug-Plan für die Redaktion.",
      teile: [
        { text: "Für die wöchentlichen Blogtexte nehmen wir ab sofort Claude Fable 5.2, weil das teuerste Modell immer das beste ist.", falsch: true, warum: "Für Texte reicht meist das mittlere Modell. Fable ist pro Token deutlich teurer, Anthropic empfiehlt für die meisten Aufgaben weiterhin Opus." },
        { text: "Für 200 Alt-Texte nutzen wir ein kleines, schnelles Modell und prüfen die Ergebnisse.", falsch: false },
        { text: "Claude Duet setzen wir ab Montag in Deutschland ein.", falsch: true, warum: "Claude Duet ist eine Vorschau mit Warteliste, nur in den USA, Deutschland noch nicht." },
        { text: "Claude Meetings lassen wir ohne Rücksprache in Mandantengesprächen mitlaufen.", falsch: true, warum: "Meetings nimmt als gekennzeichneter Teilnehmer an Calls teil; Aufzeichnung und Datenschutz müssen vorher geklärt werden." },
        { text: "Kurzvideos erstellen wir mit der eigenständigen Sora-App.", falsch: true, warum: "OpenAI hat die Sora-App 2026 eingestellt, Sora 2 gibt es nur noch in ChatGPT." }
      ], erklaerung: "Werkzeugwahl nach Aufgabe und Verfügbarkeit, nicht nach Preis oder Schlagzeile.", quelle: "Neu im November 2026" }
  ],
  begriffe: [
    {"begriff":"Agent Skills","kurz":"Wiederverwendbare Anleitungen für KI-Agenten, die festlegen, wie eine bestimmte Aufgabe erledigt wird.","mehr":"Anthropic hat das Format am 22. Oktober 2026 an die Agentic AI Foundation gespendet.","siehe":["KI-Agent","Agentic AI Foundation"]},
    {"begriff":"Agenten-Schwarm","kurz":"Mehrere KI-Agenten teilen sich eine Aufgabe und arbeiten parallel an Teilschritten.","mehr":"Google zeigt das mit Gemini 4 Carbon als Vorschau für Entwickler („/swarm“ in Google Antigravity): Carbon koordiniert, schnellere Modelle erledigen Teilaufgaben.","siehe":["KI-Agent"]},
    {"begriff":"Agentic AI Foundation","kurz":"Stiftung unter dem Dach der Linux Foundation, die offene Standards für KI-Agenten wie MCP und Agent Skills betreut.","siehe":["MCP (Model Context Protocol)","Agent Skills"]},
    {"begriff":"AI Act (EU-KI-Verordnung)","kurz":"Die KI-Verordnung der EU, seit 1. August 2024 in Kraft, die KI nach Risiko regelt und stufenweise gilt.","mehr":"Seit 2. August 2026 allgemein anwendbar, u. a. mit Transparenzpflichten nach Art. 50. Bei verbotenen Praktiken drohen bis zu 35 Mio. Euro oder 7 % des Jahresumsatzes.","siehe":["Kennzeichnungspflicht (Art. 50 AI Act)","Hochrisiko-KI","GPAI (General-Purpose AI)","Digital Omnibus on AI"]},
    {"begriff":"AV-Vertrag (Auftragsverarbeitungsvertrag)","kurz":"Vertrag nach Art. 28 DSGVO, nötig, wenn ein Dienstleister wie ein KI-Anbieter personenbezogene Daten im Auftrag verarbeitet.","siehe":["DSGVO (Datenschutz-Grundverordnung)","Mandantendaten"]},
    {"begriff":"Bias","kurz":"Verzerrungen in KI-Ausgaben, die aus den Trainingsdaten stammen, etwa Klischees bei Bildern von Berufen.","mehr":"Ergebnisse deshalb kritisch prüfen, besonders bei der Darstellung von Personen.","siehe":["Trainingsdaten"]},
    {"begriff":"C2PA (Content Credentials)","kurz":"Technischer Standard für Herkunftsangaben in Bildern und Videos, der in Metadaten festhält, wie ein Inhalt entstanden ist.","mehr":"Eine Möglichkeit für die maschinenlesbare Markierung KI-generierter Inhalte.","siehe":["Maschinenlesbare Markierung","Kennzeichnungspflicht (Art. 50 AI Act)"]},
    {"begriff":"Coding-Agent","kurz":"KI-Agent, der selbstständig Code liest, schreibt und testet, z. B. Claude Code, OpenAI Codex oder GitHub Copilot.","mehr":"Lehre aus Datenlecks im November 2026: Freigaben nicht pauschal mit „Nicht erneut fragen“ abschalten, denn dabei können Befehle samt Passwörtern in Einstellungsdateien landen.","siehe":["KI-Agent","Human in the Loop"]},
    {"begriff":"Custom GPTs, Gems und Projekte","kurz":"Gespeicherte KI-Assistenten mit festen Anweisungen und Wissensdateien bei ChatGPT, Gemini und Claude.","mehr":"Ideal für wiederkehrende Aufgaben mit festen Stilregeln, etwa einen Redaktions-Assistenten für die Kanzlei-Website.","siehe":["Systemprompt","Prompt"]},
    {"begriff":"Deep Research","kurz":"Modus in ChatGPT, Gemini und anderen Tools, in dem die KI viele Quellen durchsucht und einen ausführlichen Bericht mit Belegen schreibt.","siehe":["RAG (Retrieval-Augmented Generation)","Halluzination"]},
    {"begriff":"Deepfake","kurz":"KI-erzeugter oder veränderter Bild-, Video- oder Audioinhalt, der echten Personen, Orten oder Ereignissen ähnelt und echt wirken kann.","mehr":"Wer ihn mit KI erstellt und veröffentlicht (Betreiber), muss ihn nach Art. 50 AI Act sichtbar als KI-generiert kennzeichnen.","siehe":["Kennzeichnungspflicht (Art. 50 AI Act)","Wasserzeichen"]},
    {"begriff":"Digital Omnibus on AI","kurz":"EU-Änderungspaket zum AI Act (Amtsblatt 24. Juli 2026), das vor allem Hochrisiko-Fristen nach hinten verschiebt.","mehr":"Anhang III gilt nun ab 2. Dezember 2027, Anhang I ab 2. August 2028. Auch die Pflicht zur KI-Kompetenz wurde abgeschwächt.","siehe":["AI Act (EU-KI-Verordnung)","Hochrisiko-KI","KI-Kompetenz (Art. 4 AI Act)"]},
    {"begriff":"DSGVO (Datenschutz-Grundverordnung)","kurz":"EU-Gesetz zum Schutz personenbezogener Daten, das auch für die Nutzung von KI-Diensten gilt.","mehr":"Keine personenbezogenen Daten in KI-Tools ohne geprüften Vertrag und passende Einstellungen.","siehe":["AV-Vertrag (Auftragsverarbeitungsvertrag)","Mandantendaten"]},
    {"begriff":"E-E-A-T (Experience, Expertise, Authoritativeness, Trust)","kurz":"Googles Qualitätskriterien Erfahrung, Fachwissen, Autorität und Vertrauen, auch wichtig dafür, von KI-Suchen zitiert zu werden.","mehr":"Für Kanzleien: echte Autoren mit Qualifikation, Datum, Belege und eigene Erfahrung zeigen.","siehe":["GEO (Generative Engine Optimization)"]},
    {"begriff":"Few-Shot-Prompting","kurz":"Man gibt der KI einige Beispiele für das gewünschte Ergebnis mit, damit sie Stil und Format übernimmt.","mehr":"Beispiel: zwei gute Meta-Descriptions als Muster mitgeben.","siehe":["Prompt","Systemprompt"]},
    {"begriff":"Fine-Tuning","kurz":"Ein bestehendes Modell wird mit eigenen Beispielen nachtrainiert, damit es einen Stil oder eine Aufgabe besser beherrscht.","mehr":"Für die meisten Marketing-Aufgaben reichen gute Prompts und RAG.","siehe":["RAG (Retrieval-Augmented Generation)","Trainingsdaten"]},
    {"begriff":"GEMA gegen OpenAI","kurz":"Urteil des LG München I vom 11.11.2025: Das Memorisieren und Wiedergeben von Liedtexten im Modell verletzt das Urheberrecht.","mehr":"Die Text-und-Data-Mining-Schranke greift dafür laut Gericht nicht. Das Urteil ist nicht rechtskräftig.","siehe":["TDM (Text und Data Mining)","Urheberrecht bei KI-Inhalten"]},
    {"begriff":"Generative KI","kurz":"KI, die neue Inhalte erzeugt, etwa Texte, Bilder, Videos, Musik oder Code, statt nur Daten zu sortieren.","siehe":["LLM (Large Language Model)","Multimodal"]},
    {"begriff":"GEO (Generative Engine Optimization)","kurz":"Inhalte so aufbereiten, dass KI-Systeme wie ChatGPT, Gemini oder Perplexity sie als Quelle nutzen und zitieren.","mehr":"Helfen direkte Antworten (Frage als Überschrift, Antwort in 2–3 Sätzen), klare Struktur, E-E-A-T und Erwähnungen auf anderen Seiten.","siehe":["Google AI Overviews","Zero-Click-Suche","E-E-A-T (Experience, Expertise, Authoritativeness, Trust)"]},
    {"begriff":"Google AI Mode","kurz":"Chatartiger KI-Suchmodus von Google („KI-Modus“) für komplexe Fragen mit Nachfragen, in Deutschland seit Oktober 2025.","siehe":["Google AI Overviews","KI-Opt-out in der Search Console"]},
    {"begriff":"Google AI Overviews","kurz":"KI-Zusammenfassungen („Übersicht mit KI“) über den normalen Suchergebnissen, mit Links zu Quellen.","mehr":"Wenn ein AI Overview erscheint, sinkt die Klickrate auf das erste organische Ergebnis deutlich, besonders bei informativen Fragen.","siehe":["Google AI Mode","Zero-Click-Suche","GEO (Generative Engine Optimization)"]},
    {"begriff":"GPAI (General-Purpose AI)","kurz":"KI-Modelle mit allgemeinem Verwendungszweck wie GPT, Gemini oder Claude, deren Anbieter seit 2. August 2025 Pflichten haben.","mehr":"Dazu gehören z. B. Dokumentation und eine Zusammenfassung der Trainingsdaten.","siehe":["AI Act (EU-KI-Verordnung)","Trainingsdaten"]},
    {"begriff":"GPTBot","kurz":"Der Web-Crawler von OpenAI, dessen Zugriff auf die eigene Website man über die robots.txt steuern kann.","siehe":["robots.txt"]},
    {"begriff":"Halluzination","kurz":"Eine KI-Antwort, die überzeugend klingt, aber falsch oder erfunden ist, etwa ein nicht existierendes Urteil.","mehr":"Gerade bei Rechtsthemen jede Angabe an der Originalquelle prüfen.","siehe":["RAG (Retrieval-Augmented Generation)","Human in the Loop"]},
    {"begriff":"Hochrisiko-KI","kurz":"KI in sensiblen Bereichen wie Personalauswahl, Bildung, Kreditvergabe oder Justiz, für die strenge Pflichten gelten.","mehr":"Pflichten für Anhang-III-Systeme gelten ab 2. Dezember 2027, für regulierte Produkte (Anhang I) ab 2. August 2028.","siehe":["AI Act (EU-KI-Verordnung)","Digital Omnibus on AI"]},
    {"begriff":"Human in the Loop","kurz":"Ein Mensch prüft und gibt frei, bevor eine KI-Aktion wirksam wird, etwa bevor ein Agent eine E-Mail sendet.","mehr":"Bei allem, was sendet, veröffentlicht oder löscht, sollte ein Mensch freigeben.","siehe":["KI-Agent","Prompt Injection"]},
    {"begriff":"Kennzeichnungspflicht (Art. 50 AI Act)","kurz":"Transparenzpflichten seit 2. August 2026: Chatbots offenlegen, Deepfakes kennzeichnen, KI-Texte zu öffentlichen Themen markieren.","mehr":"Ausnahme für Texte nur bei echter menschlicher Prüfung mit Faktencheck; eine Rechtschreibkorrektur reicht nicht.","siehe":["Deepfake","Maschinenlesbare Markierung","Verhaltenskodex zur KI-Kennzeichnung"]},
    {"begriff":"KI-Agent","kurz":"Eine KI, die ein Ziel selbstständig in mehreren Schritten verfolgt: planen, Werkzeuge nutzen, Ergebnisse prüfen.","mehr":"Beispiel: „Recherchiere fünf aktuelle Urteile zum Thema X und lege eine Tabelle an.“ Agenten machen Fehler und brauchen Freigaben.","siehe":["MCP (Model Context Protocol)","Human in the Loop","Prompt Injection","Coding-Agent"]},
    {"begriff":"KI-Kompetenz (Art. 4 AI Act)","kurz":"Unternehmen, die KI einsetzen, sollen die KI-Kompetenz ihrer Beschäftigten fördern; die Pflicht gilt seit Februar 2025.","mehr":"Durch den Digital Omnibus wurde sie von „sicherstellen“ zu „unterstützen“ abgeschwächt.","siehe":["AI Act (EU-KI-Verordnung)","Digital Omnibus on AI"]},
    {"begriff":"KI-Opt-out in der Search Console","kurz":"Einstellung, mit der man eine Website aus AI Overviews, AI Mode und KI-Funktionen in Discover herausnimmt.","mehr":"Standard ist „einschließen“. Wer sich abmeldet, verliert dort Sichtbarkeit; für ChatGPT und Perplexity gilt die Einstellung nicht.","siehe":["Google AI Overviews","Google AI Mode"]},
    {"begriff":"Kontextfenster","kurz":"Die Textmenge in Tokens, die ein Modell in einem Gespräch gleichzeitig berücksichtigen kann.","mehr":"Was darüber hinausgeht, wird abgeschnitten oder vergessen. Große Kontextfenster fassen ganze Handbücher oder Verträge.","siehe":["Token","LLM (Large Language Model)"]},
    {"begriff":"LLM (Large Language Model)","kurz":"Großes Sprachmodell, das mit riesigen Textmengen trainiert wurde und Text Stück für Stück vorhersagt.","mehr":"ChatGPT, Claude und Gemini basieren auf LLMs.","siehe":["Token","Kontextfenster","Generative KI"]},
    {"begriff":"Mandantendaten","kurz":"Informationen über Mandanten einer Kanzlei, die wegen DSGVO und Schweigepflicht nicht in KI-Tools gehören.","mehr":"KI-Dienste nur mit geprüftem Vertrag und passenden Einstellungen nutzen, im Zweifel Daten weglassen.","siehe":["DSGVO (Datenschutz-Grundverordnung)","AV-Vertrag (Auftragsverarbeitungsvertrag)"]},
    {"begriff":"Maschinenlesbare Markierung","kurz":"Pflicht für Anbieter generativer KI, Ausgaben technisch erkennbar zu markieren, etwa per Wasserzeichen oder Metadaten.","mehr":"Die Übergangsfrist für bereits angebotene Systeme endet am 2. Dezember 2026.","siehe":["Wasserzeichen","C2PA (Content Credentials)","Kennzeichnungspflicht (Art. 50 AI Act)"]},
    {"begriff":"MCP (Model Context Protocol)","kurz":"Offener Standard, über den KI-Anwendungen an externe Werkzeuge und Daten angeschlossen werden, oft „USB-C für KI“ genannt.","mehr":"Damit greift eine KI z. B. auf Google Drive, das CMS oder die Search Console zu. Betreut von der Agentic AI Foundation.","siehe":["KI-Agent","Agentic AI Foundation"]},
    {"begriff":"Multimodal","kurz":"Ein Modell kann mehrere Datenarten verarbeiten oder erzeugen, etwa Text, Bilder, Audio und Video.","mehr":"Beispiel: einen Screenshot hochladen und Fragen dazu stellen.","siehe":["LLM (Large Language Model)","Generative KI"]},
    {"begriff":"n8n","kurz":"Automatisierungswerkzeug (ähnlich Make oder Zapier), mit dem man Abläufe aus Bausteinen inklusive KI-Schritten baut.","mehr":"Beispiel: neuer Blogartikel → automatisch einen Social-Post-Entwurf erstellen, der vor dem Veröffentlichen geprüft wird.","siehe":["KI-Agent","Human in the Loop"]},
    {"begriff":"NotebookLM","kurz":"Google-Werkzeug, das nur mit hochgeladenen Quellen arbeitet und daraus Zusammenfassungen, Lernkarten oder Audios erstellt.","mehr":"Ein praktisches Beispiel für RAG. Nur Dokumente hochladen, die man teilen darf.","siehe":["RAG (Retrieval-Augmented Generation)"]},
    {"begriff":"Open-Weight-Modell","kurz":"Modell, dessen Gewichte veröffentlicht sind, sodass man es selbst betreiben kann, z. B. Llama, Mistral, Qwen oder DeepSeek.","mehr":"Vorteil: Daten bleiben im eigenen System, interessant für den Datenschutz.","siehe":["LLM (Large Language Model)","DSGVO (Datenschutz-Grundverordnung)"]},
    {"begriff":"Perplexity","kurz":"KI-Antwortmaschine, die Webquellen durchsucht und Antworten mit nummerierten Quellenangaben liefert.","siehe":["GEO (Generative Engine Optimization)","Zero-Click-Suche"]},
    {"begriff":"Prompt","kurz":"Die Eingabe oder Anweisung an die KI, idealerweise mit Ziel, Kontext, Zielgruppe, Format und Beispielen.","siehe":["Few-Shot-Prompting","Systemprompt"]},
    {"begriff":"Prompt Injection","kurz":"Angriff, bei dem versteckte Anweisungen in Webseiten, E-Mails oder Dokumenten eine KI zu ungewollten Aktionen bringen.","mehr":"Besonders gefährlich bei Agenten mit Zugriff auf Konten.","siehe":["KI-Agent","Human in the Loop"]},
    {"begriff":"RAG (Retrieval-Augmented Generation)","kurz":"Die KI sucht zuerst passende Infos in einer Wissensquelle und formuliert dann die Antwort darauf gestützt.","mehr":"Senkt Halluzinationen und macht Antworten aktueller, z. B. ein Chatbot, der zuerst die Kanzlei-FAQ durchsucht.","siehe":["Halluzination","NotebookLM","Fine-Tuning"]},
    {"begriff":"Reasoning","kurz":"Das Modell „denkt“ vor der Antwort in Zwischenschritten nach, was bei Logik, Rechnen und Planung hilft.","mehr":"Kostet mehr Zeit und Rechenleistung.","siehe":["LLM (Large Language Model)"]},
    {"begriff":"robots.txt","kurz":"Textdatei auf der Website, mit der man steuert, welche Crawler, auch KI-Crawler, Inhalte abrufen dürfen.","mehr":"Ein IETF-Entwurf sieht ein einheitliches Signal gegen KI-Training vor; ein Standard ist das noch nicht.","siehe":["GPTBot","TDM (Text und Data Mining)"]},
    {"begriff":"Systemprompt","kurz":"Grundanweisung, die für ein ganzes Gespräch oder Werkzeug gilt, etwa Rolle und Stilregeln.","mehr":"In Custom GPTs, Gems oder Claude-Projekten legt man so dauerhafte Vorgaben fest.","siehe":["Prompt","Custom GPTs, Gems und Projekte"]},
    {"begriff":"TDM (Text und Data Mining)","kurz":"Automatisches Auswerten großer Text- und Datenmengen, z. B. fürs KI-Training.","mehr":"Nach § 44b UrhG erlaubt, solange der Rechteinhaber nicht maschinenlesbar widersprochen hat (Opt-out).","siehe":["robots.txt","GEMA gegen OpenAI","Trainingsdaten"]},
    {"begriff":"Token","kurz":"Kleinste Texteinheit, mit der ein Sprachmodell rechnet, meist ein Wortteil.","mehr":"Preise und Kontextgrenzen werden in Tokens gemessen; ein deutsches Wort entspricht oft mehr als einem Token.","siehe":["Kontextfenster","LLM (Large Language Model)"]},
    {"begriff":"Trainingsdaten","kurz":"Die Texte, Bilder und anderen Daten, mit denen ein KI-Modell gelernt hat.","mehr":"Bei vielen Verbraucher-Konten können auch Eingaben zum Training genutzt werden; Business-Tarife schließen das meist aus.","siehe":["Bias","TDM (Text und Data Mining)","Fine-Tuning"]},
    {"begriff":"Urheberrecht bei KI-Inhalten","kurz":"Rein KI-generierte Inhalte sind nach deutschem Recht in der Regel nicht geschützt, weil die menschliche Schöpfung fehlt.","mehr":"Je mehr eigene Gestaltung ein Mensch einbringt, desto eher entsteht Schutz. Die Verantwortung für die Veröffentlichung bleibt beim Nutzer.","siehe":["GEMA gegen OpenAI","TDM (Text und Data Mining)"]},
    {"begriff":"Verbotene KI-Praktiken","kurz":"KI-Anwendungen, die der AI Act seit 2. Februar 2025 untersagt, etwa Social Scoring oder manipulative Systeme.","mehr":"Seit 2. Dezember 2026 auch KI, die Missbrauchsdarstellungen von Kindern oder nicht einvernehmliche intime Inhalte erzeugt.","siehe":["AI Act (EU-KI-Verordnung)"]},
    {"begriff":"Verhaltenskodex zur KI-Kennzeichnung","kurz":"Freiwilliger EU-Kodex vom Juni 2026, der beschreibt, wie KI-Inhalte markiert und Deepfakes gekennzeichnet werden.","mehr":"Enthält auch einheitliche KI-Symbole.","siehe":["Kennzeichnungspflicht (Art. 50 AI Act)","Deepfake"]},
    {"begriff":"Wasserzeichen","kurz":"Unsichtbare technische Markierung in KI-Inhalten, mit der sich ihre Herkunft maschinell erkennen lässt.","mehr":"Ersetzt nicht die sichtbare Kennzeichnung durch den Verwender, etwa bei Deepfakes.","siehe":["Maschinenlesbare Markierung","Deepfake"]},
    {"begriff":"Zero-Click-Suche","kurz":"Suche, bei der Nutzer die Antwort direkt auf der Ergebnisseite bekommen und keine Website anklicken.","mehr":"Nimmt durch KI-Antworten zu. Für Kanzleien werden deshalb Markenbekanntheit, lokale Signale und Inhalte wichtiger, die zur Kontaktaufnahme führen.","siehe":["Google AI Overviews","GEO (Generative Engine Optimization)"]}
  ]
});

/* ---------- NotebookLM-Medien (Notebook „KI aktuell 2026 (Lernwelt)“, erstellt 17.11.2026) ---------- */
(function () {
  var t = (window.LERN_THEMEN || []).find(function (x) { return x.id === "ki-aktuell-2026"; });
  if (!t) return;
  t.audio = [
    { titel: "AI Act Fristen und KI-Sichtbarkeit für Kanzleien (ausführlich)", datei: "audio-gesamt.m4a", dauer: "27:39" },
    { titel: "Googles KI-Suche schluckt Kanzlei-Traffic", datei: "audio-ki-suche.m4a", dauer: "7:15" },
    { titel: "KI-Kennzeichnungspflicht ab August 2026 rechtssicher umsetzen", datei: "audio-ai-act.m4a", dauer: "6:24" }
  ];
  t.videos = [{ titel: "State of AI 2026", art: "uebersicht", datei: "video-uebersicht.mp4", dauer: "7:36" }];
  if (Array.isArray(t.mindmaps) && t.mindmaps.length) t.mindmaps[0].bild = "mindmap.png";
  else t.mindmaps = [{ titel: "KI aktuell 2026", bild: "mindmap.png" }];
})();

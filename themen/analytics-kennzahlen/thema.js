window.LERN_THEMEN = window.LERN_THEMEN || [];
window.LERN_THEMEN.push({
  id: "analytics-kennzahlen",
  titel: "Analytics & Kennzahlen",
  untertitel: "GA4, Search Console und die Zahlen, die wirklich zählen",
  beschreibung: "Schlüsselereignisse, Search-Console-Berichte, Dashboards, UTM-Links, Consent und die wichtigsten Formeln: praxisnah für eine Kanzlei-Website, bei der Anfragen die eigentliche Conversion sind.",
  farbe: "#4f46e5",
  quelle: "Eigene Online-Recherche (Google-Hilfe zu GA4, Consent Mode und UTM, Google Cloud Blog, Search Engine Journal, Google Search Central, Matomo, Datenschutz-Ratgeber), Stand 16.11.2026. Rechtliche Hinweise sind keine Rechtsberatung.",

  berichte: [
    {
      titel: "Die Werkzeuge 2026: GA4, Search Console, Data Studio und UTM",
      html:
        "<p>Vier Werkzeuge decken fast alles ab, was du im Monatsalltag brauchst. Dieser Bericht zeigt, was sie können und was sich bis November 2026 geändert hat.</p>" +

        "<h3>1. Google Analytics 4: alles ist ein Ereignis</h3>" +
        "<p>GA4 kennt keine „Seitenaufrufe plus Ziele“ mehr wie das alte Universal Analytics, sondern nur <strong>Ereignisse</strong> (Events). Es gibt vier Arten:</p>" +
        "<ul>" +
        "<li><strong>Automatisch erfasste Ereignisse</strong>, z. B. <em>first_visit</em> und <em>session_start</em>.</li>" +
        "<li><strong>Erweiterte Messung</strong>: per Schalter im Datenstream, z. B. Scrollen, ausgehende Klicks, Websitesuche, Datei-Downloads, Video- und Formularinteraktionen.</li>" +
        "<li><strong>Empfohlene Ereignisse</strong> mit von Google vorgegebenen Namen, z. B. <em>generate_lead</em> für eine Anfrage.</li>" +
        "<li><strong>Benutzerdefinierte Ereignisse</strong>, die du selbst benennst (meist über den Google Tag Manager).</li>" +
        "</ul>" +

        "<h3>2. Aus „Conversions“ wurden „Schlüsselereignisse“</h3>" +
        "<p>Seit März 2024 heißen die wichtigen Ereignisse in GA4 <strong>Schlüsselereignisse</strong> (Key Events). Das Wort „Conversion“ ist seitdem für Google Ads reserviert. Auch die Messwerte wurden umbenannt, z. B. heißt die frühere Sitzungs-Conversion-Rate jetzt <strong>Schlüsselereignisrate der Sitzung</strong>. Praktisch: Du markierst ein Ereignis wie <em>generate_lead</em> als Schlüsselereignis und kannst es bei Bedarf als Conversion in Google Ads importieren.</p>" +

        "<h3>3. Berichte und Explorations</h3>" +
        "<ul>" +
        "<li><strong>Standardberichte</strong>: schnelle Übersichten, z. B. Akquisition (woher kommen Besucher?), Engagement (Seiten, Ereignisse) und Echtzeit (zum Testen neuer Ereignisse).</li>" +
        "<li><strong>Explorations</strong> (Explorative Datenanalysen): eigene Auswertungen, z. B. freies Format, Trichter, Pfad und Segmentvergleiche.</li>" +
        "<li><strong>Wichtig:</strong> Explorations nutzen die Ereignisdaten auf Detailebene. Deren Aufbewahrung steht bei Standard-Properties ab Werk auf <strong>2 Monaten</strong> und kann auf maximal <strong>14 Monate</strong> erhöht werden (Verwaltung → Datenerfassung und -änderung → Datenaufbewahrung). Die Änderung wirkt nicht rückwirkend. Standardberichte sind davon nicht betroffen.</li>" +
        "<li><strong>Neu seit Dezember 2025:</strong> Google hat mit dem „Analytics Advisor“ einen Gemini-gestützten Assistenten angekündigt, dem man Fragen zu seinen Daten stellen kann. Ob er in deiner Property schon verfügbar ist, hängt vom Rollout ab.</li>" +
        "</ul>" +

        "<h3>4. Interaktionsrate statt Absprungrate</h3>" +
        "<p>Google definiert eine <strong>Sitzung mit Interaktion</strong> so: Sie dauert länger als 10 Sekunden, <em>oder</em> sie enthält ein Schlüsselereignis, <em>oder</em> sie hat mindestens zwei Seitenaufrufe. Die <strong>Interaktionsrate</strong> ist der Anteil dieser Sitzungen. Die <strong>Absprungrate</strong> ist in GA4 einfach das Gegenteil (100 % minus Interaktionsrate). Sie ist also nicht mit der alten Absprungrate aus Universal Analytics vergleichbar.</p>" +

        "<h3>5. Google Search Console: was Google sieht</h3>" +
        "<ul>" +
        "<li><strong>Leistung</strong>: Klicks, Impressionen, CTR und durchschnittliche Position, filterbar nach Suchanfrage, Seite, Land und Gerät. Rund 16 Monate Daten.</li>" +
        "<li><strong>Markenfilter</strong>: Seit November 2025 trennt ein Filter Marken- und Nicht-Marken-Suchanfragen automatisch (per KI, kann sich irren). Im März 2026 wurde er auf alle geeigneten Properties ausgeweitet.</li>" +
        "<li><strong>Indexierung</strong>: Der Bericht „Seiten“ zeigt, was indexiert ist und warum andere URLs fehlen (z. B. „Gecrawlt – zurzeit nicht indexiert“, noindex, Duplikat). Mit der URL-Prüfung testest du einzelne Seiten.</li>" +
        "<li><strong>Neu 2026: Berichte zu generativer KI</strong>: Seit Juni 2026 (angekündigt am 3. Juni, laut Google seit 31. August weltweit ausgerollt) zeigt die Search Console Impressionen aus AI Overviews, AI Mode und KI-Funktionen in Discover, aufgeschlüsselt nach Seite, Land und Datum. <strong>Keine Klicks, keine Suchanfragen.</strong> Websites mit zu wenigen KI-Impressionen sehen eventuell keinen Bericht.</li>" +
        "</ul>" +

        "<h3>6. Looker Studio heißt wieder Data Studio</h3>" +
        "<p>Am 11. April 2026 hat Google Looker Studio wieder in <strong>Data Studio</strong> umbenannt (kostenlos) bzw. <strong>Data Studio Pro</strong> (kostenpflichtig, mit KI-Funktionen). Bestehende Berichte und Datenquellen wurden automatisch übernommen. Für dich ändert sich wenig: Du verbindest GA4 und Search Console als Datenquelle und baust ein Dashboard, das sich jeden Monat von selbst aktualisiert. Viele Anleitungen im Netz sprechen noch von „Looker Studio“.</p>" +

        "<h3>7. UTM-Parameter: Links sauber markieren</h3>" +
        "<p>Mit UTM-Parametern sagst du GA4, woher ein Klick kam, z. B. aus dem Newsletter. GA4 verlangt bei UTM-Links immer <strong>utm_source</strong>, <strong>utm_medium</strong> und <strong>utm_campaign</strong>. Optional sind u. a. utm_content, utm_term, utm_id und utm_source_platform. Fehlende Werte erscheinen als „(not set)“.</p>" +
        "<p>Beispiel: <em>…/erbrecht/?utm_source=brevo&amp;utm_medium=email&amp;utm_campaign=newsletter-2026-11</em></p>" +
        "<ul>" +
        "<li>GA4 unterscheidet <strong>Groß- und Kleinschreibung</strong>: „Newsletter“ und „newsletter“ sind zwei Kampagnen. Google empfiehlt durchgehend Kleinbuchstaben.</li>" +
        "<li>Für das Medium Werte verwenden, die GA4 einem Kanal zuordnen kann (z. B. <em>email</em>, <em>social</em>, <em>cpc</em>), sonst landet der Traffic unter „Unassigned“.</li>" +
        "<li><strong>Nie</strong> UTM-Links für interne Links auf der eigenen Website nutzen: Sie überschreiben die echte Herkunft.</li>" +
        "</ul>" +

        "<h3>Quellen</h3><ul>" +
        "<li><a href='https://support.google.com/analytics/answer/12195621?hl=de' target='_blank' rel='noopener'>Google Analytics-Hilfe: Interaktionsrate und Absprungrate</a></li>" +
        "<li><a href='https://www.searchinfluence.com/blog/google-renames-conversions-in-google-analytics-4-ga4-to-key-events' target='_blank' rel='noopener'>Search Influence: Conversions heißen jetzt Key Events</a></li>" +
        "<li><a href='https://www.cardinalpath.com/blog/understanding-data-retention-settings-in-google-analytics' target='_blank' rel='noopener'>Cardinal Path: Datenaufbewahrung in GA4</a></li>" +
        "<li><a href='https://support.google.com/analytics/announcements/10707884?hl=en' target='_blank' rel='noopener'>Google: What’s new in Google Analytics</a></li>" +
        "<li><a href='https://developers.google.com/search/blog/2025/11/search-console-branded-filter' target='_blank' rel='noopener'>Google Search Central: Markenfilter in der Search Console</a></li>" +
        "<li><a href='https://www.searchenginejournal.com/google-search-console-ai-reports-rolled-out-worldwide/587836/' target='_blank' rel='noopener'>Search Engine Journal: KI-Berichte in der Search Console weltweit</a></li>" +
        "<li><a href='https://cloud.google.com/blog/products/data-analytics/looker-studio-is-data-studio' target='_blank' rel='noopener'>Google Cloud Blog: Looker Studio is Data Studio</a></li>" +
        "<li><a href='https://support.google.com/analytics/answer/10917952?hl=de' target='_blank' rel='noopener'>Google Analytics-Hilfe: Kampagnen und UTM-Parameter</a></li>" +
        "</ul>"
    },
    {
      titel: "Kennzahlen, Consent und Messfehler",
      html:
        "<p>Zahlen sind nur so gut wie ihre Definition. Hier stehen die wichtigsten Formeln, die Grenzen der Messung durch Einwilligungen und die häufigsten Fehler, die Berichte verfälschen.</p>" +

        "<h3>1. Die Formeln, die du kennen solltest</h3>" +
        "<ul>" +
        "<li><strong>CTR</strong> (Klickrate) = Klicks ÷ Impressionen × 100. Beispiel: 150 Klicks bei 5.000 Impressionen = 3 %.</li>" +
        "<li><strong>Conversion Rate</strong> = Conversions ÷ Sitzungen (oder Nutzer) × 100. In GA4 heißt das Schlüsselereignisrate. Immer dazusagen, worauf sie sich bezieht.</li>" +
        "<li><strong>Interaktionsrate</strong> = Sitzungen mit Interaktion ÷ alle Sitzungen. <strong>Absprungrate</strong> = 100 % minus Interaktionsrate.</li>" +
        "<li><strong>CPC</strong> = Kosten ÷ Klicks. <strong>CPL</strong> (Cost per Lead) = Kosten ÷ Leads (Anfragen). Beispiel: 600 € ÷ 12 Anfragen = 50 € pro Anfrage.</li>" +
        "<li><strong>ROAS</strong> (Return on Ad Spend) = Umsatz aus Werbung ÷ Werbekosten. Beispiel: 4.000 € ÷ 1.000 € = 4, also 400 %. ROAS berücksichtigt keine sonstigen Kosten.</li>" +
        "<li><strong>ROI</strong> = (Gewinn − Kosten) ÷ Kosten × 100. Strenger als ROAS, weil er den Gewinn betrachtet.</li>" +
        "<li><strong>CLV</strong> (Customer Lifetime Value), einfache Formel = durchschnittlicher Umsatz pro Auftrag × Aufträge pro Jahr × Dauer der Kundenbeziehung in Jahren. Beispiel: 800 € × 1,5 × 3 = 3.600 €. Je genauer, desto eher mit Marge statt Umsatz rechnen.</li>" +
        "</ul>" +
        "<p><strong>Faustregel:</strong> Der CLV sagt dir, wie viel ein neuer Mandant höchstens kosten darf. Ein CPL von 80 € kann teuer oder günstig sein, je nachdem, wie viele Anfragen zu Mandaten werden und was ein Mandat wert ist.</p>" +

        "<h3>2. Consent Mode v2: messen trotz „Ablehnen“</h3>" +
        "<p>In der EU dürfen Analytics- und Werbe-Cookies nur mit Einwilligung gesetzt werden. Der Consent Mode übermittelt Google den Einwilligungsstatus über vier Signale: <em>ad_storage</em>, <em>analytics_storage</em>, <em>ad_user_data</em> und <em>ad_personalization</em>. Wer Google Ads im EWR nutzt, braucht die beiden neueren Signale (v2).</p>" +
        "<ul>" +
        "<li><strong>Basic</strong>: Google-Tags laden erst nach Zustimmung. Bei Ablehnung geht nichts an Google. Modellierung nur über ein allgemeines Modell.</li>" +
        "<li><strong>Advanced</strong>: Tags laden sofort, standardmäßig auf „abgelehnt“, und senden bei Ablehnung cookielose Pings. Damit kann Google fehlende Daten genauer modellieren (Verhaltensmodellierung in GA4 ab gewissen Datenmengen).</li>" +
        "<li><strong>Folge</strong>: In GA4 fehlen ohne Einwilligung echte Daten. Modellierte Werte sind Schätzungen. Deshalb nie erwarten, dass GA4-Zahlen „alle“ Besucher abbilden.</li>" +
        "</ul>" +
        "<p>Ob der Advanced-Modus datenschutzrechtlich passt, ist eine Frage für den Datenschutzbeauftragten, denn auch cookielose Pings sind Datenübertragungen.</p>" +

        "<h3>3. Datenschutzfreundliche Alternativen</h3>" +
        "<ul>" +
        "<li><strong>Matomo</strong>: Open Source, selbst hostbar oder als EU-Cloud. In Frankreich kann es nach CNIL-Kriterien ohne Einwilligung laufen. <strong>In Deutschland gilt diese Ausnahme nicht</strong>: Nach § 25 TDDDG (früher TTDSG) braucht Reichweitenmessung in der Regel eine Einwilligung. Matomo selbst weist darauf hin.</li>" +
        "<li><strong>Plausible</strong>: schlankes Tool ohne Cookies, zählt Besucher über einen täglich wechselnden Hash. Ob das in Deutschland ohne Einwilligung zulässig ist, ist nicht behördlich geklärt. Die rechtliche Position ist besser als bei GA4, aber keine Garantie.</li>" +
        "<li><strong>Für die Praxis</strong>: Weniger Daten, dafür vollständiger und datensparsamer. Für eine Kanzlei, die Vertraulichkeit verkauft, kann das auch ein Image-Argument sein. Entscheidung immer mit Datenschutz abstimmen.</li>" +
        "</ul>" +

        "<h3>4. KPI-Ziele setzen: SMART</h3>" +
        "<p>Ein gutes Ziel ist <strong>S</strong>pezifisch, <strong>M</strong>essbar, <strong>A</strong>ttraktiv (bzw. akzeptiert), <strong>R</strong>ealistisch und <strong>T</strong>erminiert.</p>" +
        "<ul>" +
        "<li>Schwach: „Mehr Anfragen über die Website.“</li>" +
        "<li>SMART: „Bis 30. Juni 2027 steigern wir die Online-Anfragen zum Erbrecht von 10 auf 15 pro Monat, gemessen als Schlüsselereignis generate_lead in GA4 und abgeglichen mit dem Kanzlei-Posteingang.“</li>" +
        "</ul>" +
        "<p>Unterscheide <strong>KPI</strong> (wenige Kennzahlen, die direkt auf das Geschäftsziel zahlen, z. B. Anfragen) von <strong>Hilfskennzahlen</strong> (z. B. Impressionen, Interaktionsrate), die erklären, warum der KPI steigt oder fällt.</p>" +

        "<h3>5. Typische Messfehler</h3>" +
        "<ul>" +
        "<li><strong>Doppelte Tags</strong>: GA4 per Plugin <em>und</em> per Tag Manager eingebunden, dadurch doppelte Seitenaufrufe und künstlich gute Interaktionswerte.</li>" +
        "<li><strong>Danke-Seite doppelt gezählt</strong>: Neu laden oder Lesezeichen lösen das Schlüsselereignis erneut aus.</li>" +
        "<li><strong>Interner Traffic</strong>: Kanzlei-Team und Agentur nicht ausgeschlossen (in GA4 per IP-Regel und Datenfilter).</li>" +
        "<li><strong>Uneinheitliche UTMs</strong>: Groß- und Kleinschreibung gemischt, Medium frei erfunden, dadurch „Unassigned“ und zersplitterte Kampagnen.</li>" +
        "<li><strong>Datenaufbewahrung auf 2 Monaten</strong>: Explorations über längere Zeiträume zeigen dann nichts.</li>" +
        "<li><strong>Äpfel mit Birnen</strong>: Search-Console-Klicks und GA4-Sitzungen sind nie gleich (Consent, andere Zählweise, Zeitzonen). Trends vergleichen, nicht absolute Werte.</li>" +
        "<li><strong>KI-Impressionen falsch deuten</strong>: Der neue KI-Bericht zeigt keine Klicks. Mehr KI-Impressionen bedeuten nicht automatisch mehr Besucher.</li>" +
        "<li><strong>Formular-Ereignis der erweiterten Messung blind übernehmen</strong>: Es erkennt nicht jedes Formular zuverlässig. Besser eine eigene, getestete Messung der erfolgreichen Absendung.</li>" +
        "<li><strong>Personenbezogene Daten an GA4 senden</strong>: Namen oder E-Mail-Adressen in URLs oder Ereignisparametern verstoßen gegen Googles Richtlinien und den Datenschutz.</li>" +
        "</ul>" +

        "<h3>Quellen</h3><ul>" +
        "<li><a href='https://developers.google.com/tag-platform/security/concepts/consent-mode' target='_blank' rel='noopener'>Google for Developers: Consent Mode</a></li>" +
        "<li><a href='https://www.cookieyes.com/blog/basic-vs-advanced-google-consent-mode/' target='_blank' rel='noopener'>CookieYes: Basic vs. Advanced Consent Mode</a></li>" +
        "<li><a href='https://matomo.org/faq/general/eprivacy-directive-national-implementations-and-website-analytic' target='_blank' rel='noopener'>Matomo: ePrivacy-Umsetzung und Web-Analyse je Land</a></li>" +
        "<li><a href='https://www.xictron.com/de/blog/cookie-banner-abschaffen-shop-ohne-consent/' target='_blank' rel='noopener'>XICTRON: Cookie-Banner abschaffen? (TDDDG, Matomo, Plausible)</a></li>" +
        "<li><a href='https://www.datenschutz.sachsen.de/download/20260130_Cookies_und_Drittanbieter_in_Websites_und_Apps_datenschutzkonform_einbinden.pdf' target='_blank' rel='noopener'>Datenschutz Sachsen: Cookies und Drittanbieter datenschutzkonform einbinden (2026)</a></li>" +
        "<li><a href='https://support.google.com/analytics/answer/10917952?hl=de' target='_blank' rel='noopener'>Google Analytics-Hilfe: UTM-Parameter</a></li>" +
        "</ul>"
    },
    {
      titel: "Mein Monats-Report: Welche 8 Zahlen ich jeden Monat anschaue",
      html:
        "<p>Ein Monats-Report soll in zehn Minuten zeigen, ob die Website ihren Job macht: <strong>Mandanten-Anfragen bringen</strong>. Deshalb steht die Anfrage oben, alles andere erklärt sie.</p>" +

        "<h3>Vorher einmalig: Anfragen als Conversion messen</h3>" +
        "<ul>" +
        "<li><strong>Kontaktformular</strong>: Erfolgreiche Absendung als Ereignis <em>generate_lead</em> erfassen (z. B. über den Tag Manager oder eine Danke-Seite) und als Schlüsselereignis markieren. Parameter wie <em>rechtsgebiet</em> helfen bei der Auswertung. Keine Namen, E-Mails oder Fallinhalte übertragen.</li>" +
        "<li><strong>Telefon-Klick</strong>: Klick auf einen tel:-Link als eigenes Ereignis, z. B. <em>anruf_klick</em>. Achtung: Ein Klick ist noch kein Gespräch.</li>" +
        "<li><strong>E-Mail-Klick und Terminbuchung</strong>: genauso als eigene Ereignisse. Online-Termine sind meist die stärkste Anfrage.</li>" +
        "<li><strong>Testen</strong>: Im Echtzeit-Bericht bzw. im DebugView prüfen, ob jedes Ereignis genau einmal ankommt.</li>" +
        "<li><strong>Abgleich</strong>: Monatlich mit dem Posteingang oder der Kanzlei-Software vergleichen. Wegen fehlender Einwilligungen zeigt GA4 immer weniger Anfragen als tatsächlich eingehen.</li>" +
        "</ul>" +

        "<h3>Die 8 Zahlen</h3>" +
        "<ul>" +
        "<li><strong>1. Anfragen gesamt</strong> (GA4, Schlüsselereignisse): Formular, Anruf-Klick, Termin, je getrennt. Das ist der Haupt-KPI.</li>" +
        "<li><strong>2. Anfrage-Rate</strong> (Schlüsselereignisrate der Sitzung): Wird die Website besser darin, aus Besuchern Anfragen zu machen?</li>" +
        "<li><strong>3. Organische Klicks</strong> (Search Console, ohne Markenanfragen über den Markenfilter): Wächst die Sichtbarkeit bei Menschen, die uns noch nicht kennen?</li>" +
        "<li><strong>4. Impressionen inklusive KI-Impressionen</strong> (Search Console, Leistung und KI-Bericht): Wie oft taucht die Kanzlei in der Suche und in AI Overviews auf, auch ohne Klick?</li>" +
        "<li><strong>5. CTR und Position der 10 wichtigsten Seiten</strong>: Viele Impressionen, aber wenig Klicks? Dann Titel und Meta-Beschreibung nachschärfen.</li>" +
        "<li><strong>6. Sitzungen nach Kanal</strong> (GA4, Akquisition): organische Suche, direkt, Social, E-Mail, Verweise. Verschiebt sich der Mix?</li>" +
        "<li><strong>7. Newsletter und Social über UTM</strong>: Sitzungen und Anfragen pro Kampagne. Bringt der Newsletter nur Lesen oder auch Anfragen?</li>" +
        "<li><strong>8. Qualifizierte Anfragen</strong> (aus Kanzlei-Rückmeldung): Wie viele Anfragen passten zum Rechtsgebiet, wie viele wurden Mandate? Die wichtigste Zahl, die GA4 nicht kennt.</li>" +
        "</ul>" +
        "<p><strong>Zusatz bei Bedarf:</strong> Interaktionsrate der Rechtsgebiet-Seiten (sinkt sie stark, stimmt Inhalt oder Ladezeit nicht) und, falls Anzeigen laufen, der CPL.</p>" +

        "<h3>So lese ich die Zahlen</h3>" +
        "<ul>" +
        "<li>Immer mit <strong>Vormonat</strong> und <strong>Vorjahresmonat</strong> vergleichen (Saison, Feiertage, Sommerloch).</li>" +
        "<li>Kleine Zahlen nicht überbewerten: Von 8 auf 6 Anfragen ist oft Zufall, kein Trend.</li>" +
        "<li>Erst den KPI anschauen, dann die Hilfskennzahlen als Erklärung.</li>" +
        "</ul>" +

        "<h3>Bericht für Vorgesetzte: eine Seite reicht</h3>" +
        "<ul>" +
        "<li><strong>Oben</strong>: drei Kernzahlen mit Veränderung (Anfragen, organische Klicks, qualifizierte Anfragen).</li>" +
        "<li><strong>Darunter</strong>: drei Sätze „Was ist passiert, warum, was heißt das?“ in Alltagssprache, ohne Fachbegriffe wie Schlüsselereignisrate.</li>" +
        "<li><strong>Dann</strong>: eine konkrete Maßnahme für den nächsten Monat.</li>" +
        "<li><strong>Grenzen ehrlich benennen</strong>: „GA4 zeigt wegen der Cookie-Einwilligung nur einen Teil der Besucher.“</li>" +
        "<li><strong>Werkzeug</strong>: Ein Data-Studio-Dashboard mit GA4 und Search Console spart die Handarbeit. Der Begleittext bleibt Handarbeit.</li>" +
        "</ul>" +

        "<h3>Quellen</h3><ul>" +
        "<li><a href='https://support.google.com/analytics/answer/12195621?hl=de' target='_blank' rel='noopener'>Google Analytics-Hilfe: Interaktionsrate</a></li>" +
        "<li><a href='https://www.lovesdata.com/blog/google-analytics-key-events/' target='_blank' rel='noopener'>Loves Data: Key Events in GA4</a></li>" +
        "<li><a href='https://developers.google.com/search/blog/2025/11/search-console-branded-filter' target='_blank' rel='noopener'>Google Search Central: Markenfilter</a></li>" +
        "<li><a href='https://www.searchenginejournal.com/google-search-console-ai-reports-rolled-out-worldwide/587836/' target='_blank' rel='noopener'>Search Engine Journal: KI-Berichte in der Search Console</a></li>" +
        "<li><a href='https://cloud.google.com/blog/products/data-analytics/looker-studio-is-data-studio' target='_blank' rel='noopener'>Google Cloud Blog: Data Studio</a></li>" +
        "</ul>"
    }
  ],

  tabellen: [
    {
      titel: "Kennzahl → Formel → Wann wichtig",
      spalten: ["Kennzahl", "Formel", "Wann wichtig", "Beispiel"],
      zeilen: [
        ["CTR", "Klicks ÷ Impressionen × 100", "Snippets in der Suche, Anzeigen, Newsletter-Links", "150 ÷ 5.000 = 3 %"],
        ["Conversion Rate", "Conversions ÷ Sitzungen × 100", "Wie gut die Website Besucher zu Anfragen macht", "20 ÷ 1.000 = 2 %"],
        ["Interaktionsrate", "Sitzungen mit Interaktion ÷ Sitzungen", "Qualität des Traffics und der Inhalte", "600 ÷ 1.000 = 60 %"],
        ["Absprungrate (GA4)", "100 % − Interaktionsrate", "Nur als Gegenstück zur Interaktionsrate", "100 % − 60 % = 40 %"],
        ["CPC", "Kosten ÷ Klicks", "Bezahlte Anzeigen", "500 € ÷ 250 = 2 €"],
        ["CPL", "Kosten ÷ Leads", "Was eine Anfrage kostet", "600 € ÷ 12 = 50 €"],
        ["ROAS", "Werbeumsatz ÷ Werbekosten", "Lohnt sich die Anzeige umsatzseitig?", "4.000 € ÷ 1.000 € = 4 (400 %)"],
        ["ROI", "(Gewinn − Kosten) ÷ Kosten × 100", "Gesamtrentabilität einer Maßnahme", "(3.000 − 1.000) ÷ 1.000 = 200 %"],
        ["CLV", "Ø Umsatz pro Auftrag × Aufträge pro Jahr × Jahre", "Wie viel ein Neukunde kosten darf", "800 € × 1,5 × 3 = 3.600 €"]
      ]
    },
    {
      titel: "GA4, Matomo und Plausible im Vergleich",
      spalten: ["Aspekt", "Google Analytics 4", "Matomo", "Plausible"],
      zeilen: [
        ["Prinzip", "Ereignisbasiert, sehr umfangreich", "Umfangreich, Open Source", "Schlank, wenige Kennzahlen"],
        ["Hosting", "Google-Server", "Selbst gehostet oder EU-Cloud", "EU-Cloud oder selbst gehostet"],
        ["Cookies", "Ja (mit Consent Mode ohne Cookies bei Ablehnung)", "Ja oder cookielos einstellbar", "Keine Cookies, täglicher Hash"],
        ["Einwilligung in Deutschland", "Erforderlich", "In der Regel erforderlich (CNIL-Ausnahme gilt nur in Frankreich)", "Nicht behördlich geklärt, rechtlich stärkere Position"],
        ["Stärke", "Google-Ads-Anbindung, Explorations, kostenlos", "Datenhoheit, viele Funktionen", "Einfach, datensparsam, schnell"],
        ["Schwäche", "Datenlücken durch Ablehnung, Datenschutzfragen", "Pflege beim Selbst-Hosting", "Weniger Analysetiefe"]
      ]
    }
  ],

  mindmaps: [
    {
      titel: "Analytics & Kennzahlen",
      baum: {
        text: "Analytics & Kennzahlen",
        kinder: [
          { text: "Google Analytics 4", kinder: [
            { text: "Ereignisse: automatisch, erweitert, empfohlen, eigene" },
            { text: "Schlüsselereignisse (früher Conversions)" },
            { text: "Berichte und Explorations" },
            { text: "Datenaufbewahrung: 2 → 14 Monate" }
          ]},
          { text: "Search Console", kinder: [
            { text: "Leistung: Klicks, Impressionen, CTR, Position" },
            { text: "Markenfilter" },
            { text: "Indexierung und URL-Prüfung" },
            { text: "KI-Bericht: nur Impressionen" }
          ]},
          { text: "Dashboards und Links", kinder: [
            { text: "Data Studio (früher Looker Studio)" },
            { text: "UTM: source, medium, campaign" },
            { text: "Kleinschreibung, keine internen UTMs" }
          ]},
          { text: "Kennzahlen", kinder: [
            { text: "CTR, Conversion Rate" },
            { text: "Interaktionsrate vs. Absprungrate" },
            { text: "CPL, ROAS, ROI" },
            { text: "CLV" }
          ]},
          { text: "Datenschutz", kinder: [
            { text: "Consent Mode v2: Basic / Advanced" },
            { text: "§ 25 TDDDG: Einwilligung" },
            { text: "Matomo, Plausible" }
          ]},
          { text: "Praxis Kanzlei", kinder: [
            { text: "Anfragen: Formular, Anruf, Termin" },
            { text: "SMART-Ziele" },
            { text: "Monats-Report mit 8 Zahlen" },
            { text: "Messfehler vermeiden" }
          ]}
        ]
      }
    }
  ],

  lernkarten: [
    { vorne: "Wie berechnet man die CTR?", hinten: "CTR = Klicks ÷ Impressionen × 100. Beispiel: 150 Klicks bei 5.000 Impressionen = 3 %." },
    { vorne: "Wie berechnet man die Conversion Rate?", hinten: "Conversion Rate = Conversions ÷ Sitzungen (oder Nutzer) × 100. Immer angeben, worauf sie sich bezieht." },
    { vorne: "Wie berechnet man den CPL?", hinten: "CPL (Cost per Lead) = Kosten ÷ Anzahl Leads. Beispiel: 600 € ÷ 12 Anfragen = 50 €." },
    { vorne: "Wie berechnet man den ROAS?", hinten: "ROAS = Umsatz aus Werbung ÷ Werbekosten. Beispiel: 4.000 € ÷ 1.000 € = 4 bzw. 400 %." },
    { vorne: "Was ist der Unterschied zwischen ROAS und ROI?", hinten: "ROAS setzt Umsatz ins Verhältnis zu Werbekosten. ROI = (Gewinn − Kosten) ÷ Kosten und berücksichtigt den Gewinn, ist also strenger." },
    { vorne: "Wie lautet eine einfache CLV-Formel?", hinten: "CLV = Ø Umsatz pro Auftrag × Aufträge pro Jahr × Dauer der Kundenbeziehung in Jahren. Beispiel: 800 € × 1,5 × 3 = 3.600 €." },
    { vorne: "Wozu dient der CLV im Marketing?", hinten: "Er zeigt, wie viel die Gewinnung eines neuen Kunden bzw. Mandanten höchstens kosten darf." },
    { vorne: "Wie berechnet man den CPC?", hinten: "CPC = Kosten ÷ Klicks." },
    { vorne: "Wann ist eine Sitzung in GA4 eine „Sitzung mit Interaktion“?", hinten: "Wenn sie länger als 10 Sekunden dauert ODER ein Schlüsselereignis enthält ODER mindestens zwei Seitenaufrufe hat." },
    { vorne: "Wie berechnet man die Interaktionsrate?", hinten: "Sitzungen mit Interaktion ÷ alle Sitzungen." },
    { vorne: "Was ist die Absprungrate in GA4?", hinten: "Das Gegenteil der Interaktionsrate: Anteil der Sitzungen ohne Interaktion (100 % − Interaktionsrate)." },
    { vorne: "Warum ist die GA4-Absprungrate nicht mit der alten aus Universal Analytics vergleichbar?", hinten: "Weil sie anders definiert ist: Sie basiert auf Sitzungen ohne Interaktion (10 Sekunden, Schlüsselereignis, 2 Seiten), nicht auf Ein-Seiten-Besuchen." },
    { vorne: "Wie heißen Conversions in GA4 seit März 2024?", hinten: "Schlüsselereignisse (Key Events). „Conversion“ bezeichnet seitdem Conversions in Google Ads." },
    { vorne: "Wie heißt die frühere Sitzungs-Conversion-Rate in GA4 heute?", hinten: "Schlüsselereignisrate der Sitzung (Session key event rate)." },
    { vorne: "Welche vier Arten von Ereignissen gibt es in GA4?", hinten: "Automatisch erfasste, Ereignisse der erweiterten Messung, empfohlene Ereignisse und benutzerdefinierte Ereignisse." },
    { vorne: "Was misst die erweiterte Messung in GA4 zum Beispiel?", hinten: "Scrollen, ausgehende Klicks, Websitesuche, Datei-Downloads, Video- und Formularinteraktionen." },
    { vorne: "Welches empfohlene GA4-Ereignis passt zu einer Kontaktanfrage?", hinten: "generate_lead" },
    { vorne: "Was ist der Unterschied zwischen GA4-Standardberichten und Explorations?", hinten: "Standardberichte sind fertige Übersichten. Explorations sind eigene, flexible Analysen (z. B. Trichter, Pfad, freies Format) auf Basis der Detaildaten." },
    { vorne: "Wie lange speichert GA4 Detaildaten für Explorations standardmäßig?", hinten: "2 Monate. Bei Standard-Properties auf maximal 14 Monate erhöhbar, nicht rückwirkend." },
    { vorne: "Betrifft die Datenaufbewahrung auch die GA4-Standardberichte?", hinten: "Nein, nur Explorations und Trichterberichte auf Detailebene." },
    { vorne: "Was ist der „Analytics Advisor“?", hinten: "Ein im Dezember 2025 angekündigter, Gemini-gestützter KI-Assistent in Google Analytics, dem man Fragen zu seinen Daten stellen kann." },
    { vorne: "Welche vier Kennzahlen zeigt der Leistungsbericht der Search Console?", hinten: "Klicks, Impressionen, CTR und durchschnittliche Position." },
    { vorne: "Was zeigt der KI-Bericht der Search Console (2026)?", hinten: "Impressionen aus AI Overviews, AI Mode und KI in Discover, nach Seite, Land und Datum. Keine Klicks, keine Suchanfragen." },
    { vorne: "Seit wann gibt es den KI-Bericht der Search Console?", hinten: "Angekündigt am 3. Juni 2026, laut Google seit 31. August 2026 weltweit ausgerollt. Daten ab Mitte Mai 2026." },
    { vorne: "Was macht der Markenfilter der Search Console?", hinten: "Er trennt automatisch Marken- von Nicht-Marken-Suchanfragen (per KI, kann Fehler machen). Eingeführt im November 2025." },
    { vorne: "Was zeigt der Indexierungsbericht „Seiten“?", hinten: "Welche URLs indexiert sind und aus welchen Gründen andere nicht (z. B. noindex, Duplikat, „Gecrawlt – zurzeit nicht indexiert“)." },
    { vorne: "Wofür nutzt man die URL-Prüfung?", hinten: "Um für eine einzelne Seite zu sehen, ob und wie Google sie indexiert hat, und um eine Indexierung anzufordern." },
    { vorne: "Wie heißt Looker Studio seit April 2026?", hinten: "Wieder Data Studio (kostenlos) bzw. Data Studio Pro (kostenpflichtig). Bestehende Berichte wurden automatisch übernommen." },
    { vorne: "Wofür nutzt man Data Studio (früher Looker Studio)?", hinten: "Für Dashboards, die Daten aus GA4, Search Console und anderen Quellen bündeln und sich automatisch aktualisieren." },
    { vorne: "Welche drei UTM-Parameter verlangt GA4 bei Kampagnenlinks?", hinten: "utm_source, utm_medium und utm_campaign." },
    { vorne: "Was passiert, wenn UTM-Werte fehlen?", hinten: "Sie erscheinen in GA4 als „(not set)“." },
    { vorne: "Unterscheidet GA4 bei UTM-Werten Groß- und Kleinschreibung?", hinten: "Ja. „Newsletter“ und „newsletter“ sind zwei Werte. Google empfiehlt einheitlich Kleinbuchstaben." },
    { vorne: "Warum keine UTM-Parameter in internen Links?", hinten: "Sie überschreiben die echte Herkunft der Sitzung und verfälschen die Kanalberichte." },
    { vorne: "Welche vier Signale kennt der Consent Mode v2?", hinten: "ad_storage, analytics_storage, ad_user_data und ad_personalization." },
    { vorne: "Was ist Basic Consent Mode?", hinten: "Google-Tags laden erst nach Zustimmung. Bei Ablehnung werden keine Daten an Google gesendet." },
    { vorne: "Was ist Advanced Consent Mode?", hinten: "Tags laden sofort mit Standard „abgelehnt“ und senden bei Ablehnung cookielose Pings. Das ermöglicht genauere Modellierung." },
    { vorne: "Gilt die französische CNIL-Ausnahme für Matomo auch in Deutschland?", hinten: "Nein. Nach § 25 TDDDG braucht Reichweitenmessung in Deutschland in der Regel eine Einwilligung." },
    { vorne: "Wie zählt Plausible Besucher ohne Cookies?", hinten: "Über einen täglich wechselnden kryptografischen Hash. Ob das in Deutschland ohne Einwilligung zulässig ist, ist nicht behördlich geklärt." },
    { vorne: "Wofür steht SMART bei Zielen?", hinten: "Spezifisch, Messbar, Attraktiv (akzeptiert), Realistisch, Terminiert." },
    { vorne: "Was ist der Unterschied zwischen KPI und Hilfskennzahl?", hinten: "Ein KPI zahlt direkt aufs Geschäftsziel ein (z. B. Anfragen). Hilfskennzahlen (z. B. Impressionen) erklären, warum der KPI sich verändert." },
    { vorne: "Wie misst man Anfragen auf einer Kanzlei-Website?", hinten: "Erfolgreiche Formularabsendung (generate_lead), Klicks auf tel:- und mailto:-Links und Terminbuchungen als Schlüsselereignisse, getestet und mit dem Posteingang abgeglichen." },
    { vorne: "Warum ist ein Klick auf die Telefonnummer keine sichere Anfrage?", hinten: "Weil ein Klick noch kein Gespräch ist. Er zeigt Interesse, die echte Anfrage bestätigt erst die Kanzlei." },
    { vorne: "Warum zeigt GA4 weniger Anfragen als tatsächlich eingehen?", hinten: "Weil Besucher ohne Einwilligung nicht (vollständig) erfasst werden. Deshalb monatlich mit Posteingang oder Kanzlei-Software abgleichen." },
    { vorne: "Was gehört nie in GA4-Ereignisse oder URLs?", hinten: "Personenbezogene Daten wie Namen, E-Mail-Adressen oder Fallinhalte." },
    { vorne: "Nenne drei typische Messfehler.", hinten: "Doppelte Tags (Plugin + Tag Manager), nicht ausgeschlossener interner Traffic, uneinheitliche UTMs (z. B. gemischte Groß- und Kleinschreibung)." },
    { vorne: "Warum stimmen Search-Console-Klicks und GA4-Sitzungen nie überein?", hinten: "Andere Zählweise, Consent-Lücken in GA4, Zeitzonen und Filter. Man vergleicht Trends, nicht absolute Werte." },
    { vorne: "Womit vergleicht man Monatszahlen sinnvoll?", hinten: "Mit dem Vormonat und dem Vorjahresmonat, um Saisoneffekte zu erkennen." },
    { vorne: "Wie sieht ein guter Bericht für Vorgesetzte aus?", hinten: "Eine Seite: drei Kernzahlen mit Veränderung, drei Sätze Erklärung in Alltagssprache, eine konkrete Maßnahme, ehrliche Grenzen der Messung." }
  ],

  quiz: [
    // ---------- Auswahl (15) ----------
    {
      frage: "Wie heißen Conversions in Google Analytics 4 seit März 2024?",
      optionen: ["Ziele", "Schlüsselereignisse", "Zielvorhaben", "Mikro-Conversions"],
      richtig: [1],
      erklaerung: "Google hat Conversions in GA4 in Schlüsselereignisse (Key Events) umbenannt. „Conversion“ steht seitdem für Google Ads.",
      quelle: "Die Werkzeuge 2026: GA4, Search Console, Data Studio und UTM"
    },
    {
      frage: "Wann gilt eine Sitzung in GA4 als „Sitzung mit Interaktion“? (Mehrere richtig)",
      optionen: ["Sie dauert länger als 10 Sekunden", "Sie enthält ein Schlüsselereignis", "Sie hat mindestens zwei Seitenaufrufe", "Der Besucher hat Cookies akzeptiert"],
      richtig: [0, 1, 2],
      erklaerung: "Eines der drei Kriterien genügt: über 10 Sekunden, ein Schlüsselereignis oder mindestens zwei Seiten- bzw. Bildschirmaufrufe. Die Einwilligung ist kein Kriterium.",
      quelle: "Die Werkzeuge 2026: GA4, Search Console, Data Studio und UTM"
    },
    {
      frage: "Rechenaufgabe: Eine Seite hat 5.000 Impressionen und 150 Klicks. Wie hoch ist die CTR?",
      optionen: ["0,3 %", "3 %", "15 %", "33 %"],
      richtig: [1],
      erklaerung: "CTR = 150 ÷ 5.000 × 100 = 3 %.",
      quelle: "Kennzahlen, Consent und Messfehler"
    },
    {
      frage: "Rechenaufgabe: Eine Kampagne kostet 600 € und bringt 12 Anfragen. Wie hoch ist der CPL?",
      optionen: ["12 €", "50 €", "72 €", "7.200 €"],
      richtig: [1],
      erklaerung: "CPL = Kosten ÷ Leads = 600 € ÷ 12 = 50 € pro Anfrage.",
      quelle: "Kennzahlen, Consent und Messfehler"
    },
    {
      frage: "Rechenaufgabe: 1.000 € Werbekosten bringen 4.000 € Umsatz. Wie hoch ist der ROAS?",
      optionen: ["0,25", "3", "4 (400 %)", "40 %"],
      richtig: [2],
      erklaerung: "ROAS = Umsatz ÷ Werbekosten = 4.000 ÷ 1.000 = 4, also 400 %.",
      quelle: "Kennzahlen, Consent und Messfehler"
    },
    {
      frage: "Rechenaufgabe: 1.000 Sitzungen führen zu 20 Anfragen. Wie hoch ist die Conversion Rate?",
      optionen: ["0,2 %", "2 %", "5 %", "20 %"],
      richtig: [1],
      erklaerung: "Conversion Rate = 20 ÷ 1.000 × 100 = 2 %.",
      quelle: "Kennzahlen, Consent und Messfehler"
    },
    {
      frage: "Rechenaufgabe: Ein Mandant bringt im Schnitt 800 € pro Auftrag, 1,5 Aufträge pro Jahr, und bleibt 3 Jahre. Wie hoch ist der CLV (einfache Formel)?",
      optionen: ["1.200 €", "2.400 €", "3.600 €", "4.800 €"],
      richtig: [2],
      erklaerung: "CLV = 800 € × 1,5 × 3 = 3.600 €.",
      quelle: "Kennzahlen, Consent und Messfehler"
    },
    {
      frage: "Was zeigt der 2026 eingeführte KI-Bericht der Search Console?",
      optionen: ["Klicks aus AI Overviews je Suchanfrage", "Impressionen aus AI Overviews, AI Mode und KI in Discover", "Wie oft ChatGPT die Website zitiert", "Den Umsatz aus KI-Traffic"],
      richtig: [1],
      erklaerung: "Der Bericht zeigt nur Impressionen aus Googles KI-Funktionen, nach Seite, Land und Datum. Klicks und Suchanfragen fehlen, andere KI-Dienste wie ChatGPT sind nicht enthalten.",
      quelle: "Die Werkzeuge 2026: GA4, Search Console, Data Studio und UTM"
    },
    {
      frage: "Wie heißt Looker Studio seit April 2026?",
      optionen: ["Google Dashboards", "Looker Insights", "Data Studio", "Analytics Studio"],
      richtig: [2],
      erklaerung: "Google hat Looker Studio am 11. April 2026 wieder in Data Studio umbenannt, die Bezahlversion heißt Data Studio Pro.",
      quelle: "Die Werkzeuge 2026: GA4, Search Console, Data Studio und UTM"
    },
    {
      frage: "Welche UTM-Parameter verlangt GA4 bei jedem Kampagnenlink? (Mehrere richtig)",
      optionen: ["utm_source", "utm_medium", "utm_campaign", "utm_content"],
      richtig: [0, 1, 2],
      erklaerung: "Source, Medium und Campaign sind Pflicht. utm_content ist optional, z. B. um zwei Links im selben Newsletter zu unterscheiden.",
      quelle: "Die Werkzeuge 2026: GA4, Search Console, Data Studio und UTM"
    },
    {
      frage: "Was ist der Kernunterschied zwischen Basic und Advanced Consent Mode?",
      optionen: ["Basic gilt nur für Apps, Advanced für Websites", "Bei Basic laden Google-Tags erst nach Zustimmung, bei Advanced sofort mit cookielosen Pings bei Ablehnung", "Advanced braucht keinen Cookie-Banner", "Basic überträgt bei Ablehnung trotzdem alle Daten"],
      richtig: [1],
      erklaerung: "Basic blockiert die Tags bis zur Zustimmung. Advanced lädt sie mit Standard „abgelehnt“ und sendet cookielose Pings, was genauere Modellierung erlaubt. Einen Banner braucht man in beiden Fällen.",
      quelle: "Kennzahlen, Consent und Messfehler"
    },
    {
      frage: "Welche Aussage zu Matomo in Deutschland stimmt?",
      optionen: ["Matomo darf immer ohne Einwilligung laufen", "Die französische CNIL-Ausnahme gilt auch in Deutschland", "Nach § 25 TDDDG ist in der Regel eine Einwilligung nötig", "Matomo ist in Deutschland verboten"],
      richtig: [2],
      erklaerung: "Die CNIL-Ausnahme gilt nur in Frankreich. In Deutschland verlangt § 25 TDDDG für Reichweitenmessung in der Regel eine Einwilligung, worauf auch Matomo selbst hinweist.",
      quelle: "Kennzahlen, Consent und Messfehler"
    },
    {
      frage: "Welches Ziel ist SMART formuliert?",
      optionen: ["Mehr Anfragen über die Website", "Die Website soll besser ranken", "Bis 30.06.2027 steigen die Erbrecht-Anfragen von 10 auf 15 pro Monat, gemessen in GA4", "Wir posten öfter auf Instagram"],
      richtig: [2],
      erklaerung: "Nur dieses Ziel ist spezifisch (Erbrecht), messbar (10 → 15, GA4), realistisch und terminiert (30.06.2027).",
      quelle: "Kennzahlen, Consent und Messfehler"
    },
    {
      frage: "Welche Zahl ist im Kanzlei-Monats-Report der Haupt-KPI?",
      optionen: ["Impressionen", "Seitenaufrufe", "Anfragen (Formular, Anruf, Termin)", "Follower"],
      richtig: [2],
      erklaerung: "Die Website soll Mandanten-Anfragen bringen. Impressionen und Seitenaufrufe sind Hilfskennzahlen, die erklären, warum die Anfragen steigen oder fallen.",
      quelle: "Mein Monats-Report: Welche 8 Zahlen ich jeden Monat anschaue"
    },
    {
      frage: "Welche Fehler verfälschen GA4-Daten typischerweise? (Mehrere richtig)",
      optionen: ["GA4 doppelt eingebunden (Plugin und Tag Manager)", "Interner Traffic nicht ausgeschlossen", "UTM-Werte mal groß, mal klein geschrieben", "Search Console mit GA4 verknüpft"],
      richtig: [0, 1, 2],
      erklaerung: "Doppelte Tags, interner Traffic und uneinheitliche UTMs sind klassische Messfehler. Die Verknüpfung mit der Search Console verfälscht nichts.",
      quelle: "Kennzahlen, Consent und Messfehler"
    },

    // ---------- Richtig/Falsch (8) ----------
    {
      typ: "wahrfalsch",
      aussage: "Die Absprungrate in GA4 ist das Gegenteil der Interaktionsrate.",
      richtig: true,
      erklaerung: "Laut Google ist die Absprungrate der Anteil der Sitzungen ohne Interaktion, also 100 % minus Interaktionsrate.",
      quelle: "Die Werkzeuge 2026: GA4, Search Console, Data Studio und UTM"
    },
    {
      typ: "wahrfalsch",
      aussage: "Der KI-Bericht der Search Console zeigt, wie viele Klicks aus AI Overviews kamen.",
      richtig: false,
      erklaerung: "Er zeigt bisher nur Impressionen, keine Klicks und keine Suchanfragen.",
      quelle: "Die Werkzeuge 2026: GA4, Search Console, Data Studio und UTM"
    },
    {
      typ: "wahrfalsch",
      aussage: "Wenn man die GA4-Datenaufbewahrung von 2 auf 14 Monate erhöht, sind auch ältere, bereits gelöschte Detaildaten wieder da.",
      richtig: false,
      erklaerung: "Die Änderung wirkt nur für die Zukunft. Bereits gelöschte Detaildaten kommen nicht zurück.",
      quelle: "Die Werkzeuge 2026: GA4, Search Console, Data Studio und UTM"
    },
    {
      typ: "wahrfalsch",
      aussage: "GA4 behandelt utm_source=Brevo und utm_source=brevo als denselben Wert.",
      richtig: false,
      erklaerung: "GA4 unterscheidet Groß- und Kleinschreibung. Google empfiehlt deshalb durchgehend Kleinbuchstaben.",
      quelle: "Die Werkzeuge 2026: GA4, Search Console, Data Studio und UTM"
    },
    {
      typ: "wahrfalsch",
      aussage: "Für interne Links auf der eigenen Website sollte man UTM-Parameter verwenden, um Klickwege zu verfolgen.",
      richtig: false,
      erklaerung: "Interne UTM-Links überschreiben die echte Herkunft der Sitzung. Für interne Klickwege nutzt man Ereignisse oder Pfad-Explorations.",
      quelle: "Die Werkzeuge 2026: GA4, Search Console, Data Studio und UTM"
    },
    {
      typ: "wahrfalsch",
      aussage: "Mit Consent Mode Advanced braucht eine Website keinen Cookie-Banner mehr.",
      richtig: false,
      erklaerung: "Der Consent Mode setzt einen Banner voraus: Er übermittelt nur den Status der dort getroffenen Entscheidung an Google.",
      quelle: "Kennzahlen, Consent und Messfehler"
    },
    {
      typ: "wahrfalsch",
      aussage: "Der ROAS berücksichtigt alle Kosten eines Unternehmens, nicht nur die Werbekosten.",
      richtig: false,
      erklaerung: "ROAS setzt nur Werbeumsatz und Werbekosten ins Verhältnis. Für die Gesamtrentabilität braucht man den ROI.",
      quelle: "Kennzahlen, Consent und Messfehler"
    },
    {
      typ: "wahrfalsch",
      aussage: "GA4 zeigt auf einer Kanzlei-Website meist weniger Anfragen, als tatsächlich eingehen.",
      richtig: true,
      erklaerung: "Besucher, die keine Einwilligung geben, werden nicht oder nur modelliert erfasst. Deshalb monatlich mit Posteingang oder Kanzlei-Software abgleichen.",
      quelle: "Mein Monats-Report: Welche 8 Zahlen ich jeden Monat anschaue"
    },

    // ---------- Lückentext (6) ----------
    {
      typ: "luecke",
      text: "Die CTR berechnet man als Klicks geteilt durch ___ mal 100.",
      optionen: ["Impressionen", "Sitzungen", "Conversions"],
      richtig: [0],
      erklaerung: "CTR = Klicks ÷ Impressionen × 100.",
      quelle: "Kennzahlen, Consent und Messfehler"
    },
    {
      typ: "luecke",
      text: "Das empfohlene GA4-Ereignis für eine Kontaktanfrage heißt ___.",
      optionen: ["page_view", "generate_lead", "first_visit"],
      richtig: [1],
      erklaerung: "generate_lead ist das empfohlene Ereignis für Leads. Man markiert es als Schlüsselereignis.",
      quelle: "Mein Monats-Report: Welche 8 Zahlen ich jeden Monat anschaue"
    },
    {
      typ: "luecke",
      text: "Standardmäßig speichert GA4 Detaildaten für Explorations ___ lang.",
      optionen: ["2 Monate", "14 Monate", "26 Monate"],
      richtig: [0],
      erklaerung: "Ab Werk 2 Monate, bei Standard-Properties auf maximal 14 Monate erhöhbar.",
      quelle: "Die Werkzeuge 2026: GA4, Search Console, Data Studio und UTM"
    },
    {
      typ: "luecke",
      text: "Fehlende UTM-Werte erscheinen in GA4-Berichten als ___.",
      optionen: ["(direct)", "(not set)", "(other)"],
      richtig: [1],
      erklaerung: "Google weist ausdrücklich darauf hin: Fehlende Parameter tauchen als „(not set)“ auf.",
      quelle: "Die Werkzeuge 2026: GA4, Search Console, Data Studio und UTM"
    },
    {
      typ: "luecke",
      text: "In Deutschland regelt § 25 ___, dass Zugriffe auf das Endgerät in der Regel eine Einwilligung brauchen.",
      optionen: ["TDDDG", "UWG", "BORA"],
      richtig: [0],
      erklaerung: "Das Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz (früher TTDSG) regelt in § 25 die Einwilligung für Cookies und ähnliche Techniken.",
      quelle: "Kennzahlen, Consent und Messfehler"
    },
    {
      typ: "luecke",
      text: "Der ___ zeigt, wie viel die Gewinnung eines neuen Mandanten höchstens kosten darf.",
      optionen: ["CLV", "CPC", "CTR"],
      richtig: [0],
      erklaerung: "Der Customer Lifetime Value beziffert den Wert einer Kundenbeziehung und damit die Obergrenze für Akquisekosten.",
      quelle: "Kennzahlen, Consent und Messfehler"
    },

    // ---------- Zuordnen (5) ----------
    {
      typ: "zuordnen",
      frage: "Ordne die Kennzahl ihrer Formel zu.",
      paare: [
        ["CTR", "Klicks ÷ Impressionen × 100"],
        ["CPL", "Kosten ÷ Leads"],
        ["ROAS", "Werbeumsatz ÷ Werbekosten"],
        ["Conversion Rate", "Conversions ÷ Sitzungen × 100"]
      ],
      erklaerung: "Diese vier Formeln brauchst du fast in jedem Bericht.",
      quelle: "Kennzahlen, Consent und Messfehler"
    },
    {
      typ: "zuordnen",
      frage: "Ordne die Frage dem passenden Werkzeug zu.",
      paare: [
        ["Für welche Suchanfragen werde ich gefunden?", "Search Console"],
        ["Wie viele Anfragen kamen über den Newsletter?", "Google Analytics 4"],
        ["Ein Dashboard für den Chef, das sich selbst aktualisiert", "Data Studio"],
        ["Datensparsam zählen ohne Cookies", "Plausible"]
      ],
      erklaerung: "Search Console zeigt die Google-Suche, GA4 das Verhalten auf der Website, Data Studio bündelt beides, Plausible ist die schlanke, cookielose Alternative.",
      quelle: "Die Werkzeuge 2026: GA4, Search Console, Data Studio und UTM"
    },
    {
      typ: "zuordnen",
      frage: "Ordne die Consent-Mode-Signale ihrer Bedeutung zu.",
      paare: [
        ["analytics_storage", "Speichern für Analysezwecke, z. B. Besuchsdauer"],
        ["ad_storage", "Speichern für Werbezwecke, z. B. Werbe-Cookies"],
        ["ad_user_data", "Nutzerdaten für Werbung an Google senden"],
        ["ad_personalization", "Personalisierte Werbung erlauben"]
      ],
      erklaerung: "ad_user_data und ad_personalization sind die beiden Signale, die mit v2 hinzukamen.",
      quelle: "Kennzahlen, Consent und Messfehler"
    },
    {
      typ: "zuordnen",
      frage: "Ordne den UTM-Parameter dem Beispielwert für einen Newsletter-Link zu.",
      paare: [
        ["utm_source", "brevo"],
        ["utm_medium", "email"],
        ["utm_campaign", "newsletter-2026-11"]
      ],
      erklaerung: "Source = wer schickt den Traffic, Medium = welcher Kanaltyp, Campaign = welche Aktion. Alles klein geschrieben.",
      quelle: "Die Werkzeuge 2026: GA4, Search Console, Data Studio und UTM"
    },
    {
      typ: "zuordnen",
      frage: "Ordne die SMART-Buchstaben zu.",
      paare: [
        ["S", "Spezifisch"],
        ["M", "Messbar"],
        ["A", "Attraktiv bzw. akzeptiert"],
        ["R", "Realistisch"],
        ["T", "Terminiert"]
      ],
      erklaerung: "SMART-Ziele machen aus „mehr Anfragen“ ein prüfbares Ziel mit Zahl, Messweg und Termin.",
      quelle: "Kennzahlen, Consent und Messfehler"
    },

    // ---------- Reihenfolge (4) ----------
    {
      typ: "reihenfolge",
      frage: "Bring die Schritte, um Formular-Anfragen in GA4 zu messen, in die richtige Reihenfolge.",
      schritte: [
        "Festlegen, was als Anfrage zählt (Formular, Anruf, Termin)",
        "Ereignis generate_lead bei erfolgreicher Absendung einrichten",
        "Im Echtzeit-Bericht bzw. DebugView testen",
        "Ereignis als Schlüsselereignis markieren",
        "Monatlich mit dem Kanzlei-Posteingang abgleichen"
      ],
      erklaerung: "Erst definieren, dann einrichten, testen, markieren und schließlich regelmäßig mit der Realität vergleichen.",
      quelle: "Mein Monats-Report: Welche 8 Zahlen ich jeden Monat anschaue"
    },
    {
      typ: "reihenfolge",
      frage: "Bring die Teile eines Berichts für Vorgesetzte in eine sinnvolle Reihenfolge.",
      schritte: [
        "Drei Kernzahlen mit Veränderung zum Vormonat",
        "Drei Sätze: Was ist passiert und warum?",
        "Eine konkrete Maßnahme für den nächsten Monat",
        "Grenzen der Messung kurz benennen"
      ],
      erklaerung: "Zahlen zuerst, dann die Erklärung, dann die Handlung. Grenzen der Messung gehören ehrlich dazu.",
      quelle: "Mein Monats-Report: Welche 8 Zahlen ich jeden Monat anschaue"
    },
    {
      typ: "reihenfolge",
      frage: "Bring den Weg von der Google-Suche zur Anfrage in die richtige Reihenfolge.",
      schritte: [
        "Impression in der Google-Suche",
        "Klick auf das Suchergebnis",
        "Sitzung auf der Website",
        "Anfrage über das Kontaktformular",
        "Mandat"
      ],
      erklaerung: "Jede Stufe hat ihre Kennzahl: Impressionen und CTR (Search Console), Sitzungen und Conversion Rate (GA4), qualifizierte Anfragen (Kanzlei).",
      quelle: "Mein Monats-Report: Welche 8 Zahlen ich jeden Monat anschaue"
    },
    {
      typ: "reihenfolge",
      frage: "Bring die Schritte für einen sauberen Newsletter-Link in die richtige Reihenfolge.",
      schritte: [
        "Ziel-URL der Landingpage festlegen",
        "utm_source, utm_medium und utm_campaign in Kleinbuchstaben ergänzen",
        "Link testen und im Echtzeit-Bericht prüfen",
        "Nach dem Versand Sitzungen und Anfragen der Kampagne auswerten"
      ],
      erklaerung: "Saubere UTMs entstehen vor dem Versand. Hinterher lassen sich Fehler nicht mehr korrigieren.",
      quelle: "Die Werkzeuge 2026: GA4, Search Console, Data Studio und UTM"
    }
  ],

  begriffe: [
    { begriff: "Absprungrate", kurz: "In GA4 der Anteil der Sitzungen ohne Interaktion, also das Gegenstück zur Interaktionsrate.", mehr: "Formel: Absprungrate = 100 % − Interaktionsrate. Beispiel: 60 % Interaktionsrate ergibt 40 % Absprungrate. Nicht mit der alten Absprungrate aus Universal Analytics vergleichbar.", siehe: ["Interaktionsrate","Sitzung mit Interaktion","Universal Analytics"] },
    { begriff: "Advanced Consent Mode", kurz: "Variante des Consent Mode, bei der Google-Tags sofort laden und bei Ablehnung nur cookielose Pings senden.", mehr: "Ermöglicht genauere Modellierung fehlender Daten. Ob das datenschutzrechtlich passt, klärt der Datenschutzbeauftragte, denn auch cookielose Pings übertragen Daten.", siehe: ["Basic Consent Mode","Consent Mode v2","Cookieloser Ping","Verhaltensmodellierung"] },
    { begriff: "AI Overviews", kurz: "KI-Zusammenfassungen, die Google über den normalen Suchergebnissen zeigt.", mehr: "Impressionen daraus zeigt seit 2026 der KI-Bericht der Search Console, Klicks aber nicht.", siehe: ["KI-Bericht (Search Console)","Impression"] },
    { begriff: "Akquisitionsbericht", kurz: "GA4-Standardbericht, der zeigt, über welche Kanäle Besucher auf die Website kommen.", mehr: "Typische Kanäle: organische Suche, direkt, Social, E-Mail, Verweise. Im Monats-Report liefert er die Sitzungen nach Kanal.", siehe: ["Standardbericht","Kanal","Sitzung"] },
    { begriff: "Analytics Advisor", kurz: "Gemini-gestützter KI-Assistent in Google Analytics, dem man Fragen zu den eigenen Daten stellen kann.", mehr: "Im Dezember 2025 angekündigt. Ob er in deiner Property schon verfügbar ist, hängt vom Rollout ab.", siehe: ["GA4 (Google Analytics 4)"] },
    { begriff: "Basic Consent Mode", kurz: "Variante des Consent Mode, bei der Google-Tags erst nach Zustimmung laden; bei Ablehnung geht nichts an Google.", mehr: "Datensparsamer als der Advanced-Modus, dafür nur allgemeine Modellierung fehlender Daten.", siehe: ["Advanced Consent Mode","Consent Mode v2"] },
    { begriff: "CLV (Customer Lifetime Value)", kurz: "Wert, den ein Kunde oder Mandant über die gesamte Dauer der Geschäftsbeziehung bringt.", mehr: "Einfache Formel: CLV = Ø Umsatz pro Auftrag × Aufträge pro Jahr × Jahre. Beispiel: 800 € × 1,5 × 3 = 3.600 €. Zeigt, wie viel ein neuer Mandant höchstens kosten darf.", siehe: ["CPL (Cost per Lead)","ROI (Return on Investment)"] },
    { begriff: "Consent Mode v2", kurz: "Google-Standard, der den Einwilligungsstatus aus dem Cookie-Banner an Google-Tags übergibt.", mehr: "Vier Signale: ad_storage, analytics_storage, ad_user_data, ad_personalization. Wer Google Ads im EWR nutzt, braucht v2. Ohne Einwilligung werden Daten modelliert statt gemessen.", siehe: ["Advanced Consent Mode","Basic Consent Mode","Verhaltensmodellierung"] },
    { begriff: "Conversion", kurz: "Gewünschte Handlung eines Besuchers, zum Beispiel eine Anfrage; in GA4 heißt das seit 2024 Schlüsselereignis.", mehr: "Das Wort „Conversion“ ist bei Google seit März 2024 für Google Ads reserviert. Ein GA4-Schlüsselereignis lässt sich als Conversion in Google Ads importieren.", siehe: ["Schlüsselereignis (Key Event)","Conversion Rate"] },
    { begriff: "Conversion Rate", kurz: "Anteil der Sitzungen oder Nutzer, die eine Conversion auslösen.", mehr: "Formel: Conversion Rate = Conversions ÷ Sitzungen (oder Nutzer) × 100. Beispiel: 20 ÷ 1.000 = 2 %. Immer dazusagen, worauf sie sich bezieht. In GA4: Schlüsselereignisrate.", siehe: ["Conversion","Schlüsselereignisrate"] },
    { begriff: "Cookieloser Ping", kurz: "Datensignal ohne Cookie, das Google-Tags im Advanced Consent Mode bei abgelehnter Einwilligung senden.", mehr: "Dient Google zur Modellierung fehlender Daten. Auch das ist eine Datenübertragung, deshalb mit dem Datenschutz abstimmen.", siehe: ["Advanced Consent Mode","Verhaltensmodellierung"] },
    { begriff: "CPC (Cost per Click)", kurz: "Durchschnittliche Kosten für einen Klick auf eine bezahlte Anzeige.", mehr: "Formel: CPC = Kosten ÷ Klicks. Beispiel: 500 € ÷ 250 Klicks = 2 €.", siehe: ["CPL (Cost per Lead)","Klick"] },
    { begriff: "CPL (Cost per Lead)", kurz: "Durchschnittliche Kosten für einen Lead, also zum Beispiel eine Anfrage.", mehr: "Formel: CPL = Kosten ÷ Leads. Beispiel: 600 € ÷ 12 Anfragen = 50 €. Ob das teuer ist, zeigt erst der Vergleich mit dem CLV.", siehe: ["CLV (Customer Lifetime Value)","CPC (Cost per Click)","Lead"] },
    { begriff: "CTR (Click-Through-Rate)", kurz: "Klickrate: Anteil der Impressionen, aus denen ein Klick wird.", mehr: "Formel: CTR = Klicks ÷ Impressionen × 100. Beispiel: 150 ÷ 5.000 = 3 %. Viele Impressionen, wenig Klicks? Dann Titel und Meta-Beschreibung nachschärfen.", siehe: ["Impression","Klick","Leistungsbericht"] },
    { begriff: "Dashboard", kurz: "Übersichtsseite, die wichtige Kennzahlen aus mehreren Quellen grafisch bündelt.", mehr: "Praxis: Ein Data-Studio-Dashboard mit GA4 und Search Console aktualisiert sich jeden Monat selbst und spart Handarbeit.", siehe: ["Data Studio"] },
    { begriff: "Data Studio", kurz: "Kostenloses Google-Werkzeug für Berichte und Dashboards, hieß bis April 2026 Looker Studio.", mehr: "Seit 11. April 2026 wieder Data Studio, kostenpflichtig als Data Studio Pro mit KI-Funktionen. Bestehende Berichte wurden übernommen. Viele Anleitungen sagen noch „Looker Studio“.", siehe: ["Dashboard"] },
    { begriff: "Datenaufbewahrung", kurz: "GA4-Einstellung, wie lange Ereignisdaten auf Detailebene für Explorations gespeichert bleiben.", mehr: "Ab Werk 2 Monate, bei Standard-Properties auf maximal 14 Monate erhöhbar, nicht rückwirkend. Standardberichte sind nicht betroffen.", siehe: ["Exploration","Standardbericht"] },
    { begriff: "Datenstream", kurz: "Datenquelle in einer GA4-Property, zum Beispiel die Website, aus der Ereignisse ankommen.", mehr: "Im Datenstream schaltest du auch die erweiterte Messung ein oder aus.", siehe: ["Erweiterte Messung","GA4 (Google Analytics 4)"] },
    { begriff: "DebugView", kurz: "GA4-Ansicht zum Testen, ob Ereignisse richtig und genau einmal ankommen.", mehr: "Zusammen mit dem Echtzeit-Bericht der wichtigste Prüfschritt, bevor ein neues Ereignis als Schlüsselereignis zählt.", siehe: ["Echtzeit-Bericht","Ereignis (Event)"] },
    { begriff: "Doppelte Tags", kurz: "Messfehler, bei dem GA4 zweimal eingebunden ist und Seitenaufrufe doppelt gezählt werden.", mehr: "Typisch: GA4 per WordPress-Plugin und zusätzlich über den Tag Manager. Folge: künstlich gute Interaktionswerte.", siehe: ["Google Tag Manager","Interaktionsrate"] },
    { begriff: "Durchschnittliche Position", kurz: "Search-Console-Kennzahl: mittlere Platzierung einer Seite oder Suchanfrage in den Google-Ergebnissen.", mehr: "Ein Durchschnitt über viele Suchen, daher nur als Trend sinnvoll, nicht als exakter Rang.", siehe: ["Leistungsbericht","Google Search Console"] },
    { begriff: "Echtzeit-Bericht", kurz: "GA4-Bericht, der zeigt, was gerade auf der Website passiert.", mehr: "Ideal zum Testen: Kontaktformular abschicken und prüfen, ob generate_lead ankommt.", siehe: ["DebugView","generate_lead"] },
    { begriff: "Empfohlenes Ereignis", kurz: "GA4-Ereignis mit einem von Google vorgegebenen Namen, zum Beispiel generate_lead.", mehr: "Vorteil gegenüber selbst erfundenen Namen: Google kann die Daten besser einordnen.", siehe: ["Ereignis (Event)","generate_lead"] },
    { begriff: "Ereignis (Event)", kurz: "Grundeinheit der Messung in GA4: jede erfasste Handlung, vom Seitenaufruf bis zur Anfrage.", mehr: "Vier Arten: automatisch erfasst, erweiterte Messung, empfohlen und benutzerdefiniert. Wichtige Ereignisse markierst du als Schlüsselereignis.", siehe: ["Empfohlenes Ereignis","Erweiterte Messung","Schlüsselereignis (Key Event)"] },
    { begriff: "Erweiterte Messung", kurz: "GA4-Funktion, die per Schalter im Datenstream typische Ereignisse automatisch erfasst.", mehr: "Zum Beispiel Scrollen, ausgehende Klicks, Websitesuche, Downloads, Video- und Formularinteraktionen. Das Formular-Ereignis erkennt nicht jedes Formular zuverlässig.", siehe: ["Datenstream","Ereignis (Event)"] },
    { begriff: "Exploration", kurz: "Explorative Datenanalyse in GA4: eigene, flexible Auswertung wie Trichter, Pfad oder freies Format.", mehr: "Nutzt Detaildaten und hängt deshalb an der Datenaufbewahrung. Bei 2 Monaten Aufbewahrung zeigen längere Zeiträume nichts.", siehe: ["Datenaufbewahrung","Standardbericht"] },
    { begriff: "GA4 (Google Analytics 4)", kurz: "Aktuelle Version von Google Analytics, die alles als Ereignis misst.", mehr: "Nachfolger von Universal Analytics. Zeigt wegen fehlender Einwilligungen nie alle Besucher, deshalb Anfragen monatlich mit dem Posteingang abgleichen.", siehe: ["Ereignis (Event)","Universal Analytics","Consent Mode v2"] },
    { begriff: "generate_lead", kurz: "Empfohlenes GA4-Ereignis für eine Anfrage, etwa ein erfolgreich abgeschicktes Kontaktformular.", mehr: "Als Schlüsselereignis markieren. Parameter wie rechtsgebiet helfen bei der Auswertung, aber nie Namen, E-Mails oder Fallinhalte übertragen.", siehe: ["Empfohlenes Ereignis","Schlüsselereignis (Key Event)","Personenbezogene Daten"] },
    { begriff: "Google Search Console", kurz: "Kostenloses Google-Werkzeug, das zeigt, wie eine Website in der Google-Suche erscheint.", mehr: "Wichtige Bereiche: Leistung (Klicks, Impressionen, CTR, Position), Indexierung, URL-Prüfung und seit 2026 der KI-Bericht. Rund 16 Monate Daten.", siehe: ["Leistungsbericht","Indexierungsbericht","KI-Bericht (Search Console)"] },
    { begriff: "Google Tag Manager", kurz: "Werkzeug, mit dem man Mess-Tags und Ereignisse auf der Website ohne Code-Änderung einbaut.", mehr: "Meist der Weg für benutzerdefinierte Ereignisse wie anruf_klick. Nicht zusätzlich zu einem GA4-Plugin nutzen, sonst doppelte Tags.", siehe: ["Doppelte Tags","Ereignis (Event)"] },
    { begriff: "Hilfskennzahl", kurz: "Kennzahl, die erklärt, warum ein KPI steigt oder fällt, etwa Impressionen oder Interaktionsrate.", mehr: "Im Report erst den KPI anschauen, dann die Hilfskennzahlen als Erklärung.", siehe: ["KPI (Key Performance Indicator)"] },
    { begriff: "Impression", kurz: "Einmaliges Anzeigen einer Seite in den Suchergebnissen oder einer Anzeige, unabhängig vom Klick.", mehr: "Steigen die Impressionen und fallen die Klicks, ist das oft Zero-Click durch KI-Antworten, kein Ranking-Verlust.", siehe: ["CTR (Click-Through-Rate)","Klick","KI-Bericht (Search Console)"] },
    { begriff: "Indexierungsbericht", kurz: "Search-Console-Bericht „Seiten“: zeigt, welche URLs im Google-Index sind und warum andere fehlen.", mehr: "Typische Gründe: noindex, Duplikat oder „Gecrawlt – zurzeit nicht indexiert“. Einzelne Seiten prüfst du mit der URL-Prüfung.", siehe: ["URL-Prüfung","Google Search Console"] },
    { begriff: "Interaktionsrate", kurz: "Anteil der Sitzungen mit Interaktion an allen Sitzungen in GA4.", mehr: "Formel: Interaktionsrate = Sitzungen mit Interaktion ÷ alle Sitzungen. Beispiel: 600 ÷ 1.000 = 60 %. Sinkt sie auf einer Rechtsgebiet-Seite stark, stimmen Inhalt oder Ladezeit nicht.", siehe: ["Absprungrate","Sitzung mit Interaktion"] },
    { begriff: "Interner Traffic", kurz: "Besuche des eigenen Teams oder der Agentur, die die Website-Zahlen verfälschen.", mehr: "In GA4 per IP-Regel und Datenfilter ausschließen.", siehe: ["GA4 (Google Analytics 4)"] },
    { begriff: "Kanal", kurz: "Gruppe von Traffic-Quellen in GA4, etwa organische Suche, E-Mail, Social oder Verweise.", mehr: "GA4 ordnet Kanäle unter anderem über utm_medium zu. Unbekannte Werte landen unter „Unassigned“.", siehe: ["Akquisitionsbericht","Unassigned","UTM-Parameter"] },
    { begriff: "KI-Bericht (Search Console)", kurz: "Search-Console-Bericht mit Impressionen aus AI Overviews, AI Mode und KI-Funktionen in Discover.", mehr: "Seit Juni 2026, laut Google seit 31. August weltweit. Zeigt keine Klicks und keine Suchanfragen. Mehr KI-Impressionen heißen nicht automatisch mehr Besucher.", siehe: ["AI Overviews","Impression","Google Search Console"] },
    { begriff: "Klick", kurz: "In der Search Console ein Klick aus den Google-Ergebnissen auf die eigene Website.", mehr: "Search-Console-Klicks und GA4-Sitzungen stimmen nie überein (Consent, Zählweise, Zeitzonen). Trends vergleichen, nicht absolute Werte.", siehe: ["CTR (Click-Through-Rate)","Impression","Sitzung"] },
    { begriff: "KPI (Key Performance Indicator)", kurz: "Schlüsselkennzahl, die direkt auf ein Geschäftsziel einzahlt, zum Beispiel Anfragen.", mehr: "Wenige KPIs, klar definiert. Für eine Kanzlei-Website ist der Haupt-KPI die Zahl der Anfragen, idealerweise der qualifizierten.", siehe: ["Hilfskennzahl","Qualifizierte Anfrage","SMART-Ziel"] },
    { begriff: "Lead", kurz: "Kontakt mit Interesse am Angebot, zum Beispiel eine Anfrage über Formular, Telefon oder Terminbuchung.", mehr: "Ein Klick auf die Telefonnummer ist noch kein Gespräch. Die echte Anfrage bestätigt erst die Kanzlei.", siehe: ["CPL (Cost per Lead)","generate_lead","Qualifizierte Anfrage"] },
    { begriff: "Leistungsbericht", kurz: "Search-Console-Bericht mit Klicks, Impressionen, CTR und durchschnittlicher Position.", mehr: "Filterbar nach Suchanfrage, Seite, Land und Gerät. Mit dem Markenfilter siehst du die Sichtbarkeit bei Menschen, die die Kanzlei noch nicht kennen.", siehe: ["CTR (Click-Through-Rate)","Durchschnittliche Position","Markenfilter"] },
    { begriff: "Markenfilter", kurz: "Search-Console-Filter, der Marken- und Nicht-Marken-Suchanfragen automatisch per KI trennt.", mehr: "Seit November 2025, im März 2026 auf alle geeigneten Properties ausgeweitet. Die KI kann sich irren.", siehe: ["Leistungsbericht","Google Search Console"] },
    { begriff: "Matomo", kurz: "Open-Source-Webanalyse, selbst gehostet oder in der EU-Cloud, als datenschutzfreundliche Alternative zu GA4.", mehr: "Die französische CNIL-Ausnahme gilt in Deutschland nicht: Nach § 25 TDDDG braucht Reichweitenmessung hier in der Regel eine Einwilligung.", siehe: ["Plausible","GA4 (Google Analytics 4)"] },
    { begriff: "(not set)", kurz: "Platzhalter in GA4, der erscheint, wenn ein Wert fehlt, zum Beispiel ein UTM-Parameter.", mehr: "Häufiger Grund: Ein Kampagnenlink enthält nicht alle drei Pflicht-Parameter. Viele „(not set)“-Einträge sind ein Hinweis auf unsaubere Links.", siehe: ["UTM-Parameter"] },
    { begriff: "Personenbezogene Daten", kurz: "Angaben, die sich einer Person zuordnen lassen, etwa Name oder E-Mail-Adresse; sie gehören nie in GA4.", mehr: "Nicht in URLs oder Ereignisparametern übertragen. Das verstößt gegen Googles Richtlinien und den Datenschutz.", siehe: ["generate_lead"] },
    { begriff: "Plausible", kurz: "Schlankes Analyse-Tool ohne Cookies, das Besucher über einen täglich wechselnden Hash zählt.", mehr: "Ob das in Deutschland ohne Einwilligung zulässig ist, ist nicht behördlich geklärt. Rechtlich stärker als GA4, aber keine Garantie.", siehe: ["Matomo"] },
    { begriff: "Qualifizierte Anfrage", kurz: "Anfrage, die wirklich zum Angebot passt, etwa zum eigenen Rechtsgebiet.", mehr: "Kommt aus der Rückmeldung der Kanzlei, nicht aus GA4. Die wichtigste Zahl im Monats-Report, weil sie zeigt, wie viele Anfragen zu Mandaten werden.", siehe: ["KPI (Key Performance Indicator)","Lead"] },
    { begriff: "ROAS (Return on Ad Spend)", kurz: "Verhältnis von Umsatz aus Werbung zu den Werbekosten.", mehr: "Formel: ROAS = Werbeumsatz ÷ Werbekosten. Beispiel: 4.000 € ÷ 1.000 € = 4 (400 %). Berücksichtigt keine sonstigen Kosten.", siehe: ["ROI (Return on Investment)"] },
    { begriff: "ROI (Return on Investment)", kurz: "Rendite einer Maßnahme: Wie viel Gewinn bringt sie im Verhältnis zu den Kosten?", mehr: "Formel: ROI = (Gewinn − Kosten) ÷ Kosten × 100. Beispiel: (3.000 − 1.000) ÷ 1.000 = 200 %. Strenger als ROAS, weil er den Gewinn betrachtet.", siehe: ["ROAS (Return on Ad Spend)","CLV (Customer Lifetime Value)"] },
    { begriff: "Schlüsselereignis (Key Event)", kurz: "Ereignis, das in GA4 als besonders wichtig markiert ist, früher „Conversion“ genannt.", mehr: "Seit März 2024. Für eine Kanzlei: Formular (generate_lead), Anruf-Klick, E-Mail-Klick und Terminbuchung, jeweils getestet.", siehe: ["Conversion","Ereignis (Event)","generate_lead","Schlüsselereignisrate"] },
    { begriff: "Schlüsselereignisrate", kurz: "GA4-Name für die Conversion Rate: Anteil der Sitzungen mit einem Schlüsselereignis.", mehr: "Vollständig: Schlüsselereignisrate der Sitzung (Session key event rate). Im Monats-Report die Anfrage-Rate.", siehe: ["Conversion Rate","Schlüsselereignis (Key Event)"] },
    { begriff: "Sitzung", kurz: "Zusammenhängender Besuch einer Person auf der Website, in GA4 gestartet durch session_start.", siehe: ["Sitzung mit Interaktion","Klick"] },
    { begriff: "Sitzung mit Interaktion", kurz: "GA4-Sitzung, die länger als 10 Sekunden dauert, ein Schlüsselereignis enthält oder mindestens zwei Seitenaufrufe hat.", mehr: "Grundlage für Interaktionsrate und Absprungrate.", siehe: ["Interaktionsrate","Absprungrate","Sitzung"] },
    { begriff: "SMART-Ziel", kurz: "Ziel, das spezifisch, messbar, attraktiv, realistisch und terminiert ist.", mehr: "Beispiel: „Bis 30. Juni 2027 steigern wir die Online-Anfragen zum Erbrecht von 10 auf 15 pro Monat, gemessen als generate_lead in GA4.“", siehe: ["KPI (Key Performance Indicator)"] },
    { begriff: "Standardbericht", kurz: "Fertige GA4-Übersicht, etwa Akquisition, Engagement oder Echtzeit.", mehr: "Schnell und nicht von der Datenaufbewahrung betroffen. Für eigene Fragen gibt es Explorations.", siehe: ["Exploration","Akquisitionsbericht","Echtzeit-Bericht"] },
    { begriff: "Unassigned", kurz: "GA4-Kanal für Traffic, den GA4 keinem bekannten Kanal zuordnen kann.", mehr: "Häufige Ursache: frei erfundene utm_medium-Werte. Besser Standardwerte wie email, social oder cpc nutzen.", siehe: ["Kanal","UTM-Parameter"] },
    { begriff: "Universal Analytics", kurz: "Vorgänger von GA4, der mit Seitenaufrufen und Zielen statt mit Ereignissen arbeitete.", mehr: "Kennzahlen wie die Absprungrate sind deshalb nicht mit GA4 vergleichbar.", siehe: ["GA4 (Google Analytics 4)","Absprungrate"] },
    { begriff: "URL-Prüfung", kurz: "Search-Console-Werkzeug, das für eine einzelne Seite zeigt, ob und wie Google sie indexiert hat.", mehr: "Hier kannst du auch eine Indexierung anfordern, etwa nach einer Überarbeitung.", siehe: ["Indexierungsbericht","Google Search Console"] },
    { begriff: "UTM-Parameter", kurz: "Zusätze an einem Link, die GA4 sagen, woher ein Klick kommt, etwa aus dem Newsletter.", mehr: "Pflicht: utm_source, utm_medium, utm_campaign. Beispiel: ?utm_source=brevo&utm_medium=email&utm_campaign=newsletter-2026-11. Durchgehend Kleinbuchstaben, nie für interne Links.", siehe: ["(not set)","Kanal","Unassigned"] },
    { begriff: "Verhaltensmodellierung", kurz: "GA4 schätzt das Verhalten von Besuchern ohne Einwilligung anhand ähnlicher Nutzer mit Einwilligung.", mehr: "Funktioniert erst ab gewissen Datenmengen. Modellierte Werte sind Schätzungen, keine Messungen.", siehe: ["Advanced Consent Mode","Consent Mode v2","Cookieloser Ping"] }
  ]
});

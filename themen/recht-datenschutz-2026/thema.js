window.LERN_THEMEN = window.LERN_THEMEN || [];
window.LERN_THEMEN.push({
  id: "recht-datenschutz-2026",
  titel: "Recht & Datenschutz im Marketing",
  untertitel: "DSGVO, Cookies, UWG, Impressum, Barrierefreiheit, KI-Verordnung und Anwaltswerbung",
  beschreibung: "Was im Marketing-Alltag in Deutschland und der EU rechtlich gilt, von Newsletter-Einwilligung über Consent-Banner bis zur KI-Kennzeichnung. Stand November 2026, mit Checkliste für Website und Newsletter.",
  farbe: "#b91c1c",
  quelle: "Eigene Online-Recherche (Gesetzestexte, EU-Amtsblatt, IHK, Kammern, Fachkanzleien), Stand 16.11.2026. Lernmaterial zur Orientierung, ersetzt keine Rechtsberatung. Im Einzelfall bitte die aktuelle Gesetzesfassung prüfen oder eine Rechtsprüfung einholen.",

  berichte: [
    {
      titel: "Datenschutz, Cookies, Impressum & Barrierefreiheit",
      html:
        "<p><strong>Hinweis:</strong> Diese Übersicht dient dem Lernen und ersetzt keine Rechtsberatung. Wo die Rechtslage umstritten oder im Fluss ist, steht das dabei.</p>" +

        "<h3>1. DSGVO: Jede Verarbeitung braucht eine Rechtsgrundlage</h3>" +
        "<p>Personenbezogene Daten (Name, E-Mail, IP-Adresse, Cookie-ID) darfst du nur verarbeiten, wenn eine Rechtsgrundlage aus <strong>Art. 6 Abs. 1 DSGVO</strong> greift. Im Marketing sind drei wichtig:</p>" +
        "<ul>" +
        "<li><strong>Einwilligung (lit. a):</strong> freiwillig, für einen bestimmten Zweck, informiert und unmissverständlich, also aktiv (kein vorangekreuztes Häkchen). Du musst sie <strong>nachweisen</strong> können, und der Widerruf muss so einfach sein wie die Erteilung (Art. 7 DSGVO).</li>" +
        "<li><strong>Vertrag (lit. b):</strong> was für die Durchführung eines Vertrags oder einer Anfrage nötig ist, z. B. eine Rückmeldung auf das Kontaktformular.</li>" +
        "<li><strong>Berechtigtes Interesse (lit. f):</strong> Abwägung zwischen deinem Interesse und dem der Betroffenen. Direktwerbung kann laut Erwägungsgrund 47 ein berechtigtes Interesse sein, gegen Direktwerbung gibt es aber ein <strong>bedingungsloses Widerspruchsrecht</strong> (Art. 21 Abs. 2 und 3 DSGVO).</li>" +
        "</ul>" +
        "<p>Dazu kommen <strong>Informationspflichten</strong> (Art. 13 DSGVO, meist in der Datenschutzerklärung), ein <strong>Auftragsverarbeitungsvertrag</strong> mit Dienstleistern wie dem Newsletter-Tool (Art. 28) und Regeln für Datenübermittlungen in Drittländer wie die USA (Art. 44 ff., z. B. über das EU-US Data Privacy Framework, wenn der Anbieter zertifiziert ist). Bußgelder können bis 20 Mio. Euro oder 4 % des weltweiten Jahresumsatzes reichen (Art. 83).</p>" +

        "<h3>2. Newsletter: Einwilligung und Double-Opt-in</h3>" +
        "<p>Für E-Mail-Werbung gilt neben der DSGVO das <strong>UWG</strong>: Werbung per E-Mail ohne vorherige <strong>ausdrückliche Einwilligung</strong> ist eine unzumutbare Belästigung (<strong>§ 7 Abs. 2 Nr. 2 UWG</strong>). Bewährter Weg ist das <strong>Double-Opt-in</strong>: Anmeldung, dann eine Bestätigungsmail mit Link, erst nach dem Klick wird die Adresse für den Newsletter genutzt. So lässt sich nachweisen, dass wirklich der Inhaber der Adresse zugestimmt hat. Die Bestätigungsmail selbst sollte <strong>keine Werbung</strong> enthalten.</p>" +
        "<p>Protokollieren solltest du: Zeitpunkt der Anmeldung und der Bestätigung, den Einwilligungstext und die Quelle (z. B. Formular auf Seite X). Pflichtfeld sollte nur die E-Mail-Adresse sein (Datenminimierung). In jedem Newsletter: leicht auffindbarer <strong>Abmeldelink</strong>.</p>" +
        "<p><strong>Ausnahme Bestandskunden (§ 7 Abs. 3 UWG):</strong> Ohne Einwilligung ist E-Mail-Werbung nur erlaubt, wenn alle vier Punkte erfüllt sind: Adresse im Zusammenhang mit dem Verkauf einer Ware oder Dienstleistung erhalten, Werbung nur für eigene ähnliche Angebote, kein Widerspruch, und klarer Hinweis auf das Widerspruchsrecht bei der Erhebung und in jeder Mail. Der EuGH hat am 13.11.2025 (C-654/23, Inteligo Media) entschieden, dass auch ein <strong>kostenloses Nutzerkonto</strong> ein solcher „Verkauf“ sein kann. Wie weit das trägt, wird in der Fachwelt unterschiedlich bewertet. Für eine Kanzlei bleibt die Einwilligung per Double-Opt-in der sichere Weg.</p>" +

        "<h3>3. Cookies und Consent-Banner: § 25 TDDDG</h3>" +
        "<p>Das frühere TTDSG heißt seit dem 14.05.2024 <strong>TDDDG</strong> (Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz). Nach <strong>§ 25 TDDDG</strong> braucht jedes Speichern von Informationen auf dem Endgerät oder jeder Zugriff darauf (Cookies, Local Storage, Pixel, Fingerprinting) eine <strong>Einwilligung</strong>, außer es ist <strong>unbedingt erforderlich</strong>, um den gewünschten Dienst bereitzustellen (z. B. Warenkorb, Login, Speichern der Cookie-Entscheidung). Für Analyse- und Marketing-Tools ist deshalb in aller Regel eine Einwilligung nötig. Die anschließende Datenverarbeitung richtet sich zusätzlich nach der DSGVO.</p>" +
        "<p>Anforderungen an das Banner nach Rechtsprechung (EuGH Planet49, BGH Cookie-Einwilligung II) und der Orientierungshilfe der Datenschutzkonferenz (DSK):</p>" +
        "<ul>" +
        "<li>Vor der Einwilligung werden keine einwilligungspflichtigen Tools geladen.</li>" +
        "<li>Keine vorausgewählten Häkchen.</li>" +
        "<li>Ablehnen muss so einfach sein wie Zustimmen (in der Praxis: „Ablehnen“-Button auf der ersten Ebene).</li>" +
        "<li>Klare Angaben, welche Dienste zu welchem Zweck laufen, und Hinweis auf Drittlandübermittlung.</li>" +
        "<li>Einstellungen jederzeit wieder aufrufbar und änderbar (z. B. Link im Footer).</li>" +
        "</ul>" +
        "<p>Seit dem 01.04.2025 gilt die <strong>Einwilligungsverwaltungsverordnung</strong>: Sie regelt anerkannte Dienste zur Einwilligungsverwaltung. Die Nutzung ist freiwillig, das klassische Banner bleibt der Normalfall.</p>" +
        "<p><strong>Ausblick:</strong> Die EU-Kommission hat im November 2025 einen „Digital Omnibus“ vorgeschlagen, der die Cookie-Regeln teilweise in die DSGVO verlagern würde. Dieser Daten-Teil war im Herbst 2026 laut Fachkanzleien <strong>noch nicht verabschiedet</strong>. Bis dahin gilt § 25 TDDDG unverändert.</p>" +

        "<h3>4. Impressum: jetzt § 5 DDG</h3>" +
        "<p>Seit dem 14.05.2024 ersetzt das <strong>Digitale-Dienste-Gesetz (DDG)</strong> das Telemediengesetz. Die Impressumspflicht steht jetzt in <strong>§ 5 DDG</strong> (inhaltlich weitgehend wie § 5 TMG). Ein Verweis auf „§ 5 TMG“ im Impressum ist veraltet und sollte angepasst werden. Das Impressum muss leicht erkennbar, unmittelbar erreichbar und ständig verfügbar sein, auch auf geschäftlich genutzten Social-Media-Profilen.</p>" +
        "<p>Bei <strong>reglementierten Berufen</strong> wie Rechtsanwälten kommen hinzu: zuständige Kammer, gesetzliche Berufsbezeichnung und der Staat, in dem sie verliehen wurde, sowie die berufsrechtlichen Regelungen und wo sie zugänglich sind. Zusätzlich verlangt die Dienstleistungs-Informationspflichten-Verordnung Angaben zur Berufshaftpflichtversicherung, wenn eine Pflichtversicherung besteht. Für journalistisch-redaktionelle Angebote (z. B. ein Kanzlei-Magazin) nennt § 18 Abs. 2 Medienstaatsvertrag zusätzlich einen inhaltlich Verantwortlichen.</p>" +
        "<p>Die EU-Plattform zur Online-Streitbeilegung (OS-Plattform) wurde im Juli 2025 abgeschaltet. Der früher übliche Link darauf sollte entfernt werden.</p>" +

        "<h3>5. Barrierefreiheitsstärkungsgesetz (BFSG)</h3>" +
        "<p>Seit dem <strong>28.06.2025</strong> gilt das BFSG. Es betrifft bestimmte Produkte und Dienstleistungen für <strong>Verbraucher</strong>, darunter „Dienstleistungen im elektronischen Geschäftsverkehr“, also Websites und Apps, über die Verbraucher einen Vertrag abschließen können (z. B. Onlineshop, Online-Buchung mit Vertragsschluss). <strong>Kleinstunternehmen</strong>, die Dienstleistungen anbieten (weniger als 10 Beschäftigte und höchstens 2 Mio. Euro Jahresumsatz oder Bilanzsumme), sind ausgenommen. Reine Informationsseiten ohne Vertragsschluss fallen nach überwiegender Ansicht nicht darunter. Ob ein Kontaktformular oder eine Terminbuchung schon reicht, ist im Einzelfall zu prüfen.</p>" +
        "<p>Praktischer Maßstab ist die europäische Norm EN 301 549, die sich an den WCAG (Stufe AA) orientiert: Alt-Texte, ausreichende Kontraste, Bedienung per Tastatur, verständliche Formulare, Untertitel bei Videos. Betroffene Anbieter müssen außerdem in einer Erklärung beschreiben, wie sie die Anforderungen erfüllen. Zuständig für die Kontrolle ist die gemeinsame Marktüberwachungsstelle der Länder (MLBF). Auch ohne Pflicht lohnt Barrierefreiheit: bessere Nutzbarkeit und meist auch bessere SEO.</p>" +

        "<h3>Quellen</h3>" +
        "<ul>" +
        "<li><a href=\"https://eur-lex.europa.eu/eli/reg/2016/679/oj/deu\">DSGVO (EUR-Lex)</a></li>" +
        "<li><a href=\"https://www.gesetze-im-internet.de/uwg_2004/__7.html\">§ 7 UWG (gesetze-im-internet.de)</a></li>" +
        "<li><a href=\"https://www.vzbv.de/urteile/zur-zulaessigkeit-von-e-mail-werbung-nutzer-kostenloser-online-dienste-soft-opt\">vzbv zum EuGH-Urteil C-654/23</a></li>" +
        "<li><a href=\"https://www.gesetze-im-internet.de/ttdsg/__25.html\">§ 25 TDDDG</a></li>" +
        "<li><a href=\"https://www.datenschutzkonferenz-online.de/orientierungshilfen.html\">DSK-Orientierungshilfen (u. a. digitale Dienste)</a></li>" +
        "<li><a href=\"https://www.heuking.de/de/news-events/newsletter-fachbeitraege/artikel/cookie-einwilligung-nach-dem-digital-omnibus-geplante-aenderungen-und-technische-umsetzung.html\">Heuking: Cookie-Einwilligung nach dem Digital Omnibus (Okt. 2026)</a></li>" +
        "<li><a href=\"https://www.gesetze-im-internet.de/ddg/__5.html\">§ 5 DDG</a></li>" +
        "<li><a href=\"https://www.gesetze-im-internet.de/bfsg/\">Barrierefreiheitsstärkungsgesetz</a></li>" +
        "<li><a href=\"https://www.bundesfachstelle-barrierefreiheit.de\">Bundesfachstelle Barrierefreiheit</a></li>" +
        "</ul>"
    },
    {
      titel: "Werberecht, KI & Urheberrecht, Anwaltswerbung",
      html:
        "<p><strong>Hinweis:</strong> Lernübersicht, keine Rechtsberatung. Besonders bei KI und Anwaltswerbung entwickelt sich die Rechtslage weiter.</p>" +

        "<h3>1. UWG: Irreführung und Schwarze Liste</h3>" +
        "<p>Das Gesetz gegen den unlauteren Wettbewerb verbietet <strong>irreführende</strong> Werbung (§ 5 UWG), also falsche oder täuschende Angaben etwa zu Leistungen, Preisen, Qualifikation oder Erfolgen, und das <strong>Vorenthalten wesentlicher Informationen</strong> (§ 5a UWG). Der Anhang zu § 3 Abs. 3 UWG enthält die „Schwarze Liste“: Praktiken, die gegenüber Verbrauchern <strong>immer</strong> unzulässig sind, ohne dass es auf den Einzelfall ankommt. Verstöße werden vor allem durch Abmahnungen von Mitbewerbern und Verbänden verfolgt, mit Unterlassungserklärung und Kosten.</p>" +
        "<p><strong>Neu seit 27.09.2026:</strong> Mit dem Dritten UWG-Änderungsgesetz (Umsetzung der EU-Richtlinie 2024/825) gelten strengere Regeln für Umweltaussagen. Allgemeine Aussagen wie „umweltfreundlich“ oder „klimafreundlich“ sind ohne nachgewiesene anerkannte hervorragende Umweltleistung unzulässig, Nachhaltigkeitssiegel brauchen ein unabhängiges Zertifizierungssystem, „klimaneutral“ allein über CO₂-Kompensation ist für Produkte verboten, und Zukunftsversprechen brauchen einen überprüfbaren Umsetzungsplan.</p>" +

        "<h3>2. Influencer und Kooperationen kennzeichnen</h3>" +
        "<p>Nach <strong>§ 5a Abs. 4 UWG</strong> ist es unlauter, den kommerziellen Zweck einer Handlung nicht kenntlich zu machen, wenn er sich nicht aus den Umständen ergibt. Seit 2022 steht im Gesetz: Wer für einen fremden Beitrag <strong>kein Entgelt und keine ähnliche Gegenleistung</strong> erhält, handelt in der Regel nicht kommerziell. Der BGH hatte 2021 in mehreren Influencer-Urteilen ähnlich entschieden. Gibt es Geld, Produkte, Reisen oder Provisionen, muss klar gekennzeichnet werden, am besten am Anfang des Beitrags mit „Werbung“ oder „Anzeige“. Versteckte Hashtags am Ende oder unklare Begriffe wie „sponsored by“ gelten als riskant. Für Telemedien kommen § 6 DDG und der Medienstaatsvertrag dazu, die Landesmedienanstalten haben dazu einen Leitfaden.</p>" +

        "<h3>3. Bewertungen und Testimonials</h3>" +
        "<ul>" +
        "<li>Wer Kundenbewertungen auf der eigenen Seite zeigt, muss informieren, <strong>ob und wie</strong> sichergestellt wird, dass sie von echten Kunden stammen (<strong>§ 5b Abs. 3 UWG</strong>).</li>" +
        "<li>Nach der Schwarzen Liste immer unzulässig: behaupten, Bewertungen stammen von echten Nutzern, ohne das angemessen zu prüfen, und gefälschte Bewertungen in Auftrag geben oder Bewertungen verfälscht darstellen (z. B. nur positive zeigen, aber „alle Bewertungen“ behaupten).</li>" +
        "<li>Gekaufte Bewertungen sind tabu. Gab es für eine Bewertung einen Anreiz, muss das offengelegt werden.</li>" +
        "<li>Testimonials mit Namen oder Foto brauchen die Einwilligung der Person (Datenschutz, Recht am eigenen Bild).</li>" +
        "</ul>" +

        "<h3>4. EU AI Act: Zeitplan und Kennzeichnung</h3>" +
        "<p>Die KI-Verordnung (EU) 2024/1689 gilt seit dem 01.08.2024 und wird stufenweise anwendbar. Mit dem „Digital Omnibus on AI“ (Verordnung (EU) 2026/1744, in Kraft seit 27.07.2026) wurden einige Fristen verschoben, die Transparenzpflichten aber <strong>nicht</strong>:</p>" +
        "<ul>" +
        "<li><strong>02.02.2025:</strong> Verbotene KI-Praktiken und KI-Kompetenz (Art. 4). Nach dem Omnibus müssen Anbieter und Betreiber weiterhin Maßnahmen zur KI-Kompetenz ihrer Beschäftigten ergreifen, ein bestimmtes Niveau wird aber nicht mehr garantiert verlangt.</li>" +
        "<li><strong>02.08.2025:</strong> Pflichten für Anbieter von KI-Modellen mit allgemeinem Verwendungszweck (z. B. die großen Sprachmodelle).</li>" +
        "<li><strong>02.08.2026:</strong> Transparenzpflichten nach <strong>Art. 50</strong>.</li>" +
        "<li><strong>02.12.2026:</strong> Übergangsfrist für die maschinenlesbare Markierung (Art. 50 Abs. 2) bei generativen Systemen, die schon vor dem 02.08.2026 auf dem Markt waren.</li>" +
        "<li><strong>02.12.2027 / 02.08.2028:</strong> Hochrisiko-Pflichten (Anhang III / Anhang I), durch den Omnibus verschoben.</li>" +
        "</ul>" +
        "<p><strong>Was Art. 50 für Marketing bedeutet:</strong> Die <strong>Anbieter</strong> der Tools (z. B. Bildgeneratoren) müssen KI-Ausgaben maschinenlesbar markieren, und Chatbots müssen erkennbar machen, dass man mit einer KI spricht. Als <strong>Betreiber</strong>, also Nutzer im Unternehmen, musst du <strong>Deepfakes</strong> (realistisch wirkende künstliche Bilder, Videos oder Audios von Personen, Orten oder Ereignissen) offenlegen. KI-erzeugte Texte, die veröffentlicht werden, um die Öffentlichkeit über Angelegenheiten von öffentlichem Interesse zu informieren, müssen ebenfalls gekennzeichnet werden, <strong>außer</strong> sie wurden von Menschen geprüft und jemand trägt die redaktionelle Verantwortung. Ein Blogartikel, der mit KI-Hilfe entsteht und redaktionell geprüft wird, ist damit nach Art. 50 in der Regel nicht kennzeichnungspflichtig. Die EU-Kommission hat Leitlinien und einen freiwilligen Verhaltenskodex zur Kennzeichnung veröffentlicht. Unabhängig vom AI Act kann eine fehlende Kennzeichnung irreführend nach UWG sein, etwa bei KI-„Kundenfotos“.</p>" +

        "<h3>5. Urheberrecht bei Bildern und KI-Inhalten</h3>" +
        "<ul>" +
        "<li><strong>Fotos</strong> sind fast immer geschützt, auch einfache Schnappschüsse (Lichtbildschutz, § 72 UrhG). Nutzung nur mit Lizenz, Lizenzbedingungen beachten (Einsatzzweck, Urhebernennung, Social Media erlaubt?).</li>" +
        "<li><strong>Personen auf Bildern:</strong> Grundsätzlich Einwilligung nötig (§ 22 KUG und DSGVO), z. B. bei Teamfotos. Einwilligungen schriftlich dokumentieren.</li>" +
        "<li><strong>Rein KI-generierte Inhalte</strong> sind nach herrschender Meinung in Deutschland mangels menschlicher „persönlicher geistiger Schöpfung“ (§ 2 Abs. 2 UrhG) in der Regel nicht urheberrechtlich geschützt. Andere dürfen sie dann oft übernehmen. Je mehr eigene kreative Gestaltung, desto eher entsteht Schutz.</li>" +
        "<li>KI-Ausgaben können <strong>fremde Rechte verletzen</strong>, etwa wenn sie geschützte Figuren, Marken oder Werke nachbilden. Prompt „im Stil von …“ mit bekannten Figuren vermeiden, Ergebnisse prüfen, Nutzungsbedingungen des Tools lesen.</li>" +
        "<li><strong>Training:</strong> Text und Data Mining ist nach § 44b UrhG erlaubt, außer der Rechteinhaber hat maschinenlesbar widersprochen (Opt-out). Das LG Hamburg hat 2024 das Erstellen eines Trainingsdatensatzes (LAION) als zulässig angesehen, das LG München I hat im November 2025 in erster Instanz (GEMA gegen OpenAI) das Auswendiglernen und Wiedergeben von Liedtexten als Verletzung gewertet.</li>" +
        "</ul>" +

        "<h3>6. Besonderheiten der Anwaltswerbung</h3>" +
        "<p>Anwälte dürfen werben, aber nur sachlich. <strong>§ 43b BRAO</strong>: Werbung ist erlaubt, soweit sie über die berufliche Tätigkeit in Form und Inhalt sachlich unterrichtet und nicht auf die Erteilung eines Auftrags im Einzelfall gerichtet ist. Die Berufsordnung wurde 2025 neu gefasst: Nach <strong>§ 6 Abs. 1 BORA</strong> dürfen Anwälte nicht unsachlich, unlauter und insbesondere nicht irreführend werben, in diesen Grenzen ist auch Werbung um ein einzelnes Mandat zulässig (die Rechtsprechung hatte das Einzelfall-Verbot schon zuvor stark eingeschränkt).</p>" +
        "<ul>" +
        "<li><strong>Mandanten und Mandate:</strong> Werbung damit nur mit <strong>ausdrücklicher Einwilligung</strong> (§ 6 Abs. 2 BORA), auch wenn das Mandat abgeschlossen ist. Das betrifft Testimonials, Fallbeispiele mit erkennbaren Personen und Referenzlisten.</li>" +
        "<li><strong>Verschwiegenheit</strong> (§ 43a Abs. 2 BRAO): Auch bei der Antwort auf eine schlechte Online-Bewertung dürfen keine Mandatsdetails preisgegeben werden.</li>" +
        "<li><strong>Bezeichnungen:</strong> „Fachanwalt“ nur mit Verleihung durch die Kammer. Begriffe wie „Spezialist“ oder „Experte“ sind nur zulässig, wenn sie zutreffen und nicht mit dem Fachanwaltstitel verwechselt werden können, die Darlegungslast liegt beim Anwalt (§ 7 BORA und BGH-Rechtsprechung).</li>" +
        "<li><strong>Werbung durch Dritte:</strong> Anwälte dürfen nicht daran mitwirken, dass Dritte (z. B. Agentur, Portal, Influencer) Werbung machen, die ihnen selbst verboten wäre (§ 6 Abs. 3 BORA).</li>" +
        "<li>Daneben gilt das normale UWG, auch für Kanzleien.</li>" +
        "</ul>" +
        "<p>Im Zweifel klären die Partner oder die Rechtsanwaltskammer, ob eine Maßnahme berufsrechtlich passt.</p>" +

        "<h3>Quellen</h3>" +
        "<ul>" +
        "<li><a href=\"https://www.gesetze-im-internet.de/uwg_2004/\">UWG (gesetze-im-internet.de)</a></li>" +
        "<li><a href=\"https://www.ihk.de/blueprint/servlet/cbihk24/service-und-beratung/recht/wettbewerbsrecht/strengere-regeln-fuer-umwelt-und-nachhaltigkeitsaussagen-7035050\">IHK: Strengere Regeln für Umweltaussagen ab 27.09.2026</a></li>" +
        "<li><a href=\"https://www.die-medienanstalten.de/themen/werbeaufsicht\">Die Medienanstalten: Werbeaufsicht und Leitfaden Werbekennzeichnung</a></li>" +
        "<li><a href=\"https://eur-lex.europa.eu/eli/reg/2024/1689/oj/deu\">KI-Verordnung (EU) 2024/1689 (EUR-Lex)</a></li>" +
        "<li><a href=\"https://artificialintelligenceact.eu/ai-act-explorer/digital-omnibus/\">AI Act Explorer: Digital Omnibus on AI</a></li>" +
        "<li><a href=\"https://www.dlapiper.com/en/insights/publications/law-in-tech/2026/digital-omnibus-on-ai\">DLA Piper: Digital Omnibus on AI (2026)</a></li>" +
        "<li><a href=\"https://www.gesetze-im-internet.de/urhg/\">Urheberrechtsgesetz</a></li>" +
        "<li><a href=\"https://www.gesetze-im-internet.de/brao/__43b.html\">§ 43b BRAO</a></li>" +
        "<li><a href=\"https://lxgesetze.de/bora/6\">§ 6 BORA (Fassung 2025)</a></li>" +
        "<li><a href=\"https://www.brak.de\">Bundesrechtsanwaltskammer</a></li>" +
        "</ul>"
    },
    {
      titel: "Checkliste für Website und Newsletter",
      html:
        "<p>Zum Abhaken bei jeder neuen Seite, jedem Relaunch und einmal im Jahr. Die Liste ersetzt keine Rechtsprüfung, hilft aber, die typischen Abmahn- und Bußgeldfallen zu vermeiden.</p>" +

        "<h3>Website: Pflichtseiten</h3>" +
        "<ul>" +
        "<li>Impressum von jeder Seite mit einem Klick erreichbar, Verweis auf <strong>§ 5 DDG</strong> statt TMG.</li>" +
        "<li>Kanzlei-Angaben vollständig: Kammer, Berufsbezeichnung und Verleihungsstaat, berufsrechtliche Regelungen mit Link, Berufshaftpflichtversicherung, USt-IdNr., Vertretungsberechtigte.</li>" +
        "<li>Link zur alten OS-Plattform der EU entfernt.</li>" +
        "<li>Impressum auch auf Social-Media-Profilen (oder klar verlinkt).</li>" +
        "<li>Datenschutzerklärung aktuell: alle eingesetzten Tools, Rechtsgrundlagen, Speicherdauer, Drittlandübermittlungen, Betroffenenrechte.</li>" +
        "</ul>" +

        "<h3>Website: Cookies und Tracking</h3>" +
        "<ul>" +
        "<li>Banner lädt Analyse- und Marketing-Tools erst <strong>nach</strong> Einwilligung (im Browser testen).</li>" +
        "<li>„Ablehnen“ genauso einfach wie „Akzeptieren“, keine vorausgewählten Häkchen.</li>" +
        "<li>Cookie-Einstellungen jederzeit wieder aufrufbar.</li>" +
        "<li>Eingebettete Inhalte (YouTube, Google Maps, Schriften von fremden Servern) nur nach Einwilligung oder lokal eingebunden.</li>" +
        "<li>Auftragsverarbeitungsverträge mit Hoster, Analyse- und Formular-Anbietern vorhanden.</li>" +
        "</ul>" +

        "<h3>Website: Inhalte</h3>" +
        "<ul>" +
        "<li>Für jedes Bild ist die Lizenz dokumentiert, Urhebernennung wie vorgeschrieben.</li>" +
        "<li>Einwilligungen für Team- und Personenfotos liegen schriftlich vor.</li>" +
        "<li>Keine Superlative oder Erfolgsversprechen, die nicht belegbar sind. „Spezialist“ nur, wenn es zutrifft, „Fachanwalt“ nur mit Titel.</li>" +
        "<li>Bewertungen: Hinweis, ob und wie die Echtheit geprüft wird. Keine gekauften Bewertungen.</li>" +
        "<li>Mandanten-Testimonials und Fallbeispiele nur mit ausdrücklicher Einwilligung.</li>" +
        "<li>Keine allgemeinen Umweltaussagen wie „klimaneutrale Kanzlei“ ohne Nachweis.</li>" +
        "<li>KI-Inhalte redaktionell geprüft, Deepfakes und realistisch wirkende KI-Bilder von Personen gekennzeichnet.</li>" +
        "<li>Barrierefreiheit: Alt-Texte, Kontraste, Tastaturbedienung, Formular-Beschriftungen. Klären, ob das BFSG für einzelne Angebote greift.</li>" +
        "</ul>" +

        "<h3>Newsletter</h3>" +
        "<ul>" +
        "<li>Anmeldung per <strong>Double-Opt-in</strong>, Bestätigungsmail ohne Werbung.</li>" +
        "<li>Nur die E-Mail-Adresse ist Pflichtfeld.</li>" +
        "<li>Einwilligungstext sagt klar, was kommt (Inhalt, ungefähre Häufigkeit) und dass man sich jederzeit abmelden kann. Link zur Datenschutzerklärung.</li>" +
        "<li>Keine Kopplung: Newsletter-Einwilligung nicht versteckt im Kontaktformular oder als Bedingung für einen Download, ohne dass das klar und freiwillig ist.</li>" +
        "<li>Protokoll: Zeitpunkt von Anmeldung und Bestätigung, IP-Adresse oder Kennung, Einwilligungstext, Formular-Quelle.</li>" +
        "<li>Jede Mail mit Impressum-Angaben und gut sichtbarem Abmeldelink. Abmeldungen sofort umsetzen.</li>" +
        "<li>Auftragsverarbeitungsvertrag mit dem Versand-Tool (z. B. Brevo) abgeschlossen.</li>" +
        "<li>Keine Adressen aus Visitenkarten, Mandatsakten oder gekauften Listen einfach in den Verteiler übernehmen.</li>" +
        "<li>Tracking von Öffnungen und Klicks in der Einwilligung und Datenschutzerklärung erwähnt.</li>" +
        "</ul>" +

        "<h3>Social Media</h3>" +
        "<ul>" +
        "<li>Kooperationen und bezahlte Beiträge am Anfang mit „Werbung“ oder „Anzeige“ kennzeichnen.</li>" +
        "<li>Musik, Bilder und Vorlagen nur mit passender Lizenz für geschäftliche Nutzung.</li>" +
        "<li>Antworten auf Bewertungen und Kommentare ohne Mandatsdetails.</li>" +
        "</ul>" +

        "<h3>Quellen</h3>" +
        "<ul>" +
        "<li><a href=\"https://www.gesetze-im-internet.de/ddg/__5.html\">§ 5 DDG</a></li>" +
        "<li><a href=\"https://www.gesetze-im-internet.de/ttdsg/__25.html\">§ 25 TDDDG</a></li>" +
        "<li><a href=\"https://www.gesetze-im-internet.de/uwg_2004/__7.html\">§ 7 UWG</a></li>" +
        "<li><a href=\"https://www.datenschutzkonferenz-online.de/orientierungshilfen.html\">DSK-Orientierungshilfen</a></li>" +
        "<li><a href=\"https://lxgesetze.de/bora/6\">§ 6 BORA</a></li>" +
        "</ul>"
    }
  ],

  lernkarten: [
    { vorne: "Welche drei Rechtsgrundlagen aus Art. 6 DSGVO sind im Marketing am wichtigsten?", hinten: "Einwilligung (lit. a), Vertrag bzw. vorvertragliche Anfrage (lit. b) und berechtigtes Interesse (lit. f)." },
    { vorne: "Was macht eine Einwilligung nach DSGVO wirksam?", hinten: "Freiwillig, für einen bestimmten Zweck, informiert und unmissverständlich durch aktive Handlung. Kein vorangekreuztes Häkchen." },
    { vorne: "Wer muss eine Einwilligung beweisen?", hinten: "Das Unternehmen, das sich darauf beruft (Art. 7 Abs. 1 DSGVO). Deshalb Einwilligungen protokollieren." },
    { vorne: "Wie einfach muss der Widerruf einer Einwilligung sein?", hinten: "So einfach wie die Erteilung (Art. 7 Abs. 3 DSGVO), z. B. ein Abmeldelink in jeder Mail." },
    { vorne: "Welches Recht haben Betroffene gegen Direktwerbung?", hinten: "Ein bedingungsloses Widerspruchsrecht (Art. 21 Abs. 2 und 3 DSGVO). Nach Widerspruch keine Werbung mehr." },
    { vorne: "Wie hoch können DSGVO-Bußgelder maximal sein?", hinten: "Bis 20 Mio. Euro oder 4 % des weltweiten Jahresumsatzes, je nachdem, was höher ist (Art. 83 DSGVO)." },
    { vorne: "Warum braucht man mit dem Newsletter-Tool einen AV-Vertrag?", hinten: "Weil das Tool personenbezogene Daten im Auftrag verarbeitet. Art. 28 DSGVO verlangt dafür einen Auftragsverarbeitungsvertrag." },
    { vorne: "Welche Norm verbietet E-Mail-Werbung ohne Einwilligung?", hinten: "§ 7 Abs. 2 Nr. 2 UWG: Werbung per E-Mail ohne vorherige ausdrückliche Einwilligung ist eine unzumutbare Belästigung." },
    { vorne: "Wie funktioniert Double-Opt-in?", hinten: "Anmeldung im Formular, dann Bestätigungsmail mit Link. Erst nach dem Klick wird die Adresse für den Newsletter genutzt." },
    { vorne: "Was darf in der Double-Opt-in-Bestätigungsmail nicht stehen?", hinten: "Werbung. Sie soll nur die Anmeldung bestätigen lassen." },
    { vorne: "Was sollte man beim Double-Opt-in protokollieren?", hinten: "Zeitpunkt von Anmeldung und Bestätigung, IP oder Kennung, den Einwilligungstext und die Quelle (welches Formular)." },
    { vorne: "Welche vier Bedingungen hat die Bestandskunden-Ausnahme (§ 7 Abs. 3 UWG)?", hinten: "Adresse beim Verkauf einer Ware/Dienstleistung erhalten, Werbung nur für eigene ähnliche Angebote, kein Widerspruch, klarer Hinweis auf das Widerspruchsrecht bei Erhebung und in jeder Mail." },
    { vorne: "Was hat der EuGH am 13.11.2025 (C-654/23, Inteligo Media) entschieden?", hinten: "Auch ein kostenloses Nutzerkonto kann ein „Verkauf“ im Sinne der Bestandskunden-Ausnahme sein. Die praktische Tragweite ist umstritten." },
    { vorne: "Wie heißt das frühere TTDSG seit dem 14.05.2024?", hinten: "TDDDG, Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz. Die Cookie-Regel steht weiter in § 25." },
    { vorne: "Was regelt § 25 TDDDG?", hinten: "Speichern auf dem und Zugriff auf das Endgerät (Cookies, Pixel, Local Storage) braucht eine Einwilligung, außer es ist unbedingt erforderlich für den gewünschten Dienst." },
    { vorne: "Nenne Beispiele für „unbedingt erforderliche“ Cookies.", hinten: "Warenkorb, Login-Sitzung, Speicherung der Cookie-Entscheidung, Sicherheitsfunktionen. Analyse und Marketing gehören nicht dazu." },
    { vorne: "Welche Urteile stehen für „kein vorangekreuztes Cookie-Häkchen“?", hinten: "EuGH Planet49 (2019) und BGH Cookie-Einwilligung II (2020)." },
    { vorne: "Was gilt für den „Ablehnen“-Button?", hinten: "Ablehnen muss so einfach sein wie Zustimmen. In der Praxis heißt das: Ablehnen-Button auf der ersten Ebene des Banners." },
    { vorne: "Was regelt die Einwilligungsverwaltungsverordnung (seit 01.04.2025)?", hinten: "Anerkannte Dienste zur Einwilligungsverwaltung. Ihre Nutzung ist freiwillig, das Banner bleibt Normalfall." },
    { vorne: "Was ist der Stand beim Daten-Teil des Digital Omnibus (Cookies in die DSGVO)?", hinten: "Von der Kommission im November 2025 vorgeschlagen, im Herbst 2026 noch nicht verabschiedet. § 25 TDDDG gilt bis dahin unverändert." },
    { vorne: "Wo steht die Impressumspflicht seit dem 14.05.2024?", hinten: "In § 5 Digitale-Dienste-Gesetz (DDG). Das TMG ist außer Kraft." },
    { vorne: "Welche Zusatzangaben braucht das Impressum einer Kanzlei?", hinten: "Zuständige Kammer, gesetzliche Berufsbezeichnung und Verleihungsstaat, berufsrechtliche Regelungen mit Zugang, dazu Angaben zur Berufshaftpflichtversicherung." },
    { vorne: "Was passiert mit dem Link zur OS-Plattform der EU?", hinten: "Die Plattform wurde im Juli 2025 abgeschaltet, der Link sollte entfernt werden." },
    { vorne: "Wer braucht nach § 18 Abs. 2 MStV einen inhaltlich Verantwortlichen?", hinten: "Anbieter journalistisch-redaktioneller Angebote, z. B. ein regelmäßiges Online-Magazin." },
    { vorne: "Seit wann gilt das Barrierefreiheitsstärkungsgesetz?", hinten: "Seit dem 28.06.2025." },
    { vorne: "Welche Websites erfasst das BFSG vor allem?", hinten: "„Dienstleistungen im elektronischen Geschäftsverkehr“ für Verbraucher, also Seiten und Apps mit Vertragsschluss (z. B. Onlineshop). Reine Infoseiten nach überwiegender Ansicht nicht." },
    { vorne: "Welche Unternehmen sind bei Dienstleistungen vom BFSG ausgenommen?", hinten: "Kleinstunternehmen: weniger als 10 Beschäftigte und höchstens 2 Mio. Euro Jahresumsatz oder Bilanzsumme." },
    { vorne: "Welcher technische Maßstab gilt praktisch für Barrierefreiheit im Web?", hinten: "Die Norm EN 301 549, die sich an den WCAG (Stufe AA) orientiert." },
    { vorne: "Was verbietet § 5 UWG?", hinten: "Irreführende geschäftliche Handlungen, also falsche oder täuschende Angaben z. B. zu Leistung, Preis, Qualifikation." },
    { vorne: "Was ist die „Schwarze Liste“ im UWG?", hinten: "Der Anhang zu § 3 Abs. 3 UWG: Praktiken, die gegenüber Verbrauchern immer unzulässig sind, ohne Einzelfallprüfung." },
    { vorne: "Was ändert sich seit 27.09.2026 bei Umweltaussagen?", hinten: "Allgemeine Aussagen wie „umweltfreundlich“ nur mit Nachweis hervorragender Umweltleistung, Siegel nur mit unabhängiger Zertifizierung, „klimaneutral“ nicht allein durch Kompensation, Zukunftsziele nur mit überprüfbarem Plan." },
    { vorne: "Wann muss ein Influencer-Beitrag als Werbung gekennzeichnet werden?", hinten: "Wenn ein kommerzieller Zweck vorliegt und nicht klar erkennbar ist, insbesondere bei Entgelt oder ähnlicher Gegenleistung (§ 5a Abs. 4 UWG)." },
    { vorne: "Wie kennzeichnet man Werbung auf Social Media am sichersten?", hinten: "Klar und am Anfang mit „Werbung“ oder „Anzeige“. Versteckte Hashtags oder unklare Begriffe sind riskant." },
    { vorne: "Was verlangt § 5b Abs. 3 UWG bei Kundenbewertungen?", hinten: "Information darüber, ob und wie sichergestellt wird, dass Bewertungen von echten Kunden stammen." },
    { vorne: "Was ist bei Bewertungen immer unzulässig?", hinten: "Gefälschte Bewertungen in Auftrag geben, Bewertungen verfälscht darstellen und Echtheit behaupten, ohne sie angemessen zu prüfen." },
    { vorne: "Seit wann gelten die Transparenzpflichten des AI Act (Art. 50)?", hinten: "Seit dem 02.08.2026. Der Digital Omnibus hat sie nicht verschoben." },
    { vorne: "Welche Übergangsfrist gilt für die maschinenlesbare Markierung (Art. 50 Abs. 2)?", hinten: "Bis 02.12.2026 für generative KI-Systeme, die schon vor dem 02.08.2026 auf dem Markt waren. Neue Systeme haben keine Übergangsfrist." },
    { vorne: "Was müssen Unternehmen als KI-Nutzer (Betreiber) nach Art. 50 kennzeichnen?", hinten: "Deepfakes und KI-Texte zur Information der Öffentlichkeit über Themen von öffentlichem Interesse, außer bei menschlicher Prüfung mit redaktioneller Verantwortung." },
    { vorne: "Wohin wurden die Hochrisiko-Pflichten des AI Act verschoben?", hinten: "Anhang III auf den 02.12.2027, Anhang I auf den 02.08.2028 (Digital Omnibus, VO (EU) 2026/1744)." },
    { vorne: "Was verlangt Art. 4 AI Act (KI-Kompetenz) nach dem Omnibus?", hinten: "Anbieter und Betreiber müssen Maßnahmen zur KI-Kompetenz ihrer Beschäftigten ergreifen, ein bestimmtes Niveau muss aber nicht garantiert werden." },
    { vorne: "Sind rein KI-generierte Bilder urheberrechtlich geschützt?", hinten: "In der Regel nicht, weil eine menschliche persönliche geistige Schöpfung fehlt (§ 2 Abs. 2 UrhG). Je mehr eigene Gestaltung, desto eher Schutz." },
    { vorne: "Sind einfache Fotos geschützt?", hinten: "Ja, auch Schnappschüsse sind als Lichtbilder geschützt (§ 72 UrhG). Nutzung nur mit Lizenz." },
    { vorne: "Was erlaubt § 44b UrhG?", hinten: "Text und Data Mining, also auch KI-Training, außer der Rechteinhaber hat maschinenlesbar widersprochen (Opt-out)." },
    { vorne: "Was sagt § 43b BRAO zur Anwaltswerbung?", hinten: "Werbung ist erlaubt, soweit sie in Form und Inhalt sachlich über die berufliche Tätigkeit unterrichtet und nicht auf einen Auftrag im Einzelfall gerichtet ist." },
    { vorne: "Was regelt § 6 Abs. 2 BORA?", hinten: "Werbung mit Mandaten oder Mandanten nur mit ausdrücklicher Einwilligung, auch nach Ende des Mandats." },
    { vorne: "Was gilt für „Spezialist“ oder „Experte“ in der Anwaltswerbung?", hinten: "Nur zulässig, wenn es zutrifft und nicht mit dem Fachanwaltstitel verwechselt werden kann. Die Darlegungslast liegt beim Anwalt." },
    { vorne: "Worauf ist bei Antworten auf negative Bewertungen in einer Kanzlei zu achten?", hinten: "Auf die Verschwiegenheitspflicht (§ 43a Abs. 2 BRAO): keine Mandatsdetails öffentlich machen." }
  ],

  quiz: [
    // ---------- Auswahl (15) ----------
    {
      frage: "Welche Rechtsgrundlage ist für einen Newsletter-Versand an Interessenten ohne Kundenbeziehung der übliche Weg?",
      optionen: ["Berechtigtes Interesse", "Einwilligung", "Vertragserfüllung", "Gesetzliche Pflicht"],
      richtig: [1],
      erklaerung: "Ohne Kundenbeziehung verlangt § 7 Abs. 2 Nr. 2 UWG eine vorherige ausdrückliche Einwilligung, datenschutzrechtlich Art. 6 Abs. 1 lit. a DSGVO.",
      quelle: "Datenschutz, Cookies, Impressum & Barrierefreiheit"
    },
    {
      frage: "Welche Angaben sollte ein Double-Opt-in-Protokoll enthalten? (mehrere richtig)",
      optionen: ["Zeitpunkt der Anmeldung", "Zeitpunkt der Bestätigung", "Den verwendeten Einwilligungstext", "Das Geburtsdatum der Person"],
      richtig: [0, 1, 2],
      erklaerung: "Für den Nachweis zählen Zeitpunkte, Text und Quelle. Das Geburtsdatum braucht man nicht, Pflichtfeld sollte nur die E-Mail sein.",
      quelle: "Checkliste für Website und Newsletter"
    },
    {
      frage: "Welcher Cookie darf ohne Einwilligung gesetzt werden?",
      optionen: ["Google-Analytics-Cookie", "Meta-Pixel", "Cookie, der die Cookie-Entscheidung speichert", "Retargeting-Cookie"],
      richtig: [2],
      erklaerung: "Nach § 25 Abs. 2 TDDDG sind unbedingt erforderliche Zugriffe ausgenommen. Die Speicherung der Banner-Entscheidung gehört dazu, Analyse und Marketing nicht.",
      quelle: "Datenschutz, Cookies, Impressum & Barrierefreiheit"
    },
    {
      frage: "Welches Gesetz regelt seit Mai 2024 die Impressumspflicht?",
      optionen: ["Telemediengesetz (TMG)", "Digitale-Dienste-Gesetz (DDG)", "TDDDG", "BFSG"],
      richtig: [1],
      erklaerung: "Seit dem 14.05.2024 steht die Impressumspflicht in § 5 DDG. Das TMG ist außer Kraft.",
      quelle: "Datenschutz, Cookies, Impressum & Barrierefreiheit"
    },
    {
      frage: "Welche Zusatzangaben gehören bei einer Anwaltskanzlei ins Impressum? (mehrere richtig)",
      optionen: ["Zuständige Rechtsanwaltskammer", "Gesetzliche Berufsbezeichnung und Verleihungsstaat", "Hinweis auf die berufsrechtlichen Regelungen", "Mandantenliste"],
      richtig: [0, 1, 2],
      erklaerung: "Für reglementierte Berufe verlangt § 5 DDG Kammer, Berufsbezeichnung mit Staat und die berufsrechtlichen Regelungen. Eine Mandantenliste wäre wegen Verschwiegenheit sogar problematisch.",
      quelle: "Datenschutz, Cookies, Impressum & Barrierefreiheit"
    },
    {
      frage: "Welche Website fällt am ehesten unter das Barrierefreiheitsstärkungsgesetz?",
      optionen: ["Reine Info-Seite eines Vereins", "Onlineshop eines mittelgroßen Händlers für Verbraucher", "B2B-Portal nur für Geschäftskunden", "Private Hobby-Seite"],
      richtig: [1],
      erklaerung: "Das BFSG erfasst vor allem Dienstleistungen im elektronischen Geschäftsverkehr für Verbraucher, also Seiten mit Vertragsschluss. Kleinstunternehmen sind bei Dienstleistungen ausgenommen.",
      quelle: "Datenschutz, Cookies, Impressum & Barrierefreiheit"
    },
    {
      frage: "Ab wann gelten die Transparenzpflichten nach Art. 50 AI Act?",
      optionen: ["02.02.2025", "02.08.2025", "02.08.2026", "02.12.2027"],
      richtig: [2],
      erklaerung: "Art. 50 gilt seit dem 02.08.2026. Der Digital Omnibus hat vor allem die Hochrisiko-Pflichten verschoben, nicht die Transparenzpflichten.",
      quelle: "Werberecht, KI & Urheberrecht, Anwaltswerbung"
    },
    {
      frage: "Ein Blogartikel wird mit KI vorgeschrieben, dann von der Redaktion geprüft und überarbeitet. Was gilt nach Art. 50 AI Act?",
      optionen: ["Muss immer als KI-Text gekennzeichnet werden", "In der Regel keine Kennzeichnungspflicht wegen menschlicher Prüfung und redaktioneller Verantwortung", "Darf gar nicht veröffentlicht werden", "Muss bei der Behörde angemeldet werden"],
      richtig: [1],
      erklaerung: "Die Kennzeichnungspflicht für KI-Texte von öffentlichem Interesse entfällt, wenn ein Mensch prüft und jemand redaktionelle Verantwortung trägt.",
      quelle: "Werberecht, KI & Urheberrecht, Anwaltswerbung"
    },
    {
      frage: "Was müssen Unternehmen als Nutzer von KI nach Art. 50 offenlegen?",
      optionen: ["Jede Rechtschreibkorrektur durch KI", "Deepfakes, also realistisch wirkende künstliche Bilder, Videos oder Audios", "Den Namen des verwendeten Prompts", "Die Kosten des KI-Tools"],
      richtig: [1],
      erklaerung: "Betreiber müssen Deepfakes offenlegen. Kleine Hilfen wie Rechtschreibkorrektur sind nicht gemeint.",
      quelle: "Werberecht, KI & Urheberrecht, Anwaltswerbung"
    },
    {
      frage: "Welche Aussage ist seit dem 27.09.2026 gegenüber Verbrauchern ohne besonderen Nachweis unzulässig?",
      optionen: ["„Unser Büro hat 12 Mitarbeitende.“", "„Wir sind eine umweltfreundliche Kanzlei.“", "„Wir sind montags bis freitags erreichbar.“", "„Wir beraten im Arbeitsrecht.“"],
      richtig: [1],
      erklaerung: "Allgemeine Umweltaussagen wie „umweltfreundlich“ sind nach der UWG-Novelle nur mit Nachweis einer anerkannten hervorragenden Umweltleistung zulässig.",
      quelle: "Werberecht, KI & Urheberrecht, Anwaltswerbung"
    },
    {
      frage: "Eine Influencerin bekommt ein Produkt geschenkt und postet es. Was gilt?",
      optionen: ["Keine Kennzeichnung nötig, weil kein Geld floss", "Kennzeichnung als Werbung, weil eine ähnliche Gegenleistung vorliegt", "Nur ein Hashtag am Ende reicht immer", "Kennzeichnung nur bei mehr als 10.000 Followern"],
      richtig: [1],
      erklaerung: "§ 5a Abs. 4 UWG stellt auf Entgelt oder ähnliche Gegenleistung ab. Ein Gratis-Produkt kann eine solche Gegenleistung sein. Eine Follower-Grenze gibt es nicht.",
      quelle: "Werberecht, KI & Urheberrecht, Anwaltswerbung"
    },
    {
      frage: "Was verlangt § 5b Abs. 3 UWG von Unternehmen, die Kundenbewertungen anzeigen?",
      optionen: ["Nur Bewertungen ab 4 Sternen zeigen", "Informieren, ob und wie die Echtheit der Bewertungen geprüft wird", "Jede Bewertung notariell beglaubigen", "Bewertungen nach 30 Tagen löschen"],
      richtig: [1],
      erklaerung: "Es geht um Transparenz über die Echtheitsprüfung. Nur positive zu zeigen und das zu verschweigen, kann sogar irreführend sein.",
      quelle: "Werberecht, KI & Urheberrecht, Anwaltswerbung"
    },
    {
      frage: "Was ist bei Werbung einer Kanzlei mit einem Mandanten-Testimonial nötig?",
      optionen: ["Nichts, wenn das Mandat beendet ist", "Ausdrückliche Einwilligung der Mandantin oder des Mandanten", "Genehmigung des Gerichts", "Nur die Initialen weglassen"],
      richtig: [1],
      erklaerung: "§ 6 Abs. 2 BORA: Werbung mit Mandaten oder Mandanten nur mit ausdrücklicher Einwilligung, auch nach Ende der Verschwiegenheitspflicht.",
      quelle: "Werberecht, KI & Urheberrecht, Anwaltswerbung"
    },
    {
      frage: "Was gilt für rein KI-generierte Bilder nach deutschem Urheberrecht in der Regel?",
      optionen: ["Sie sind 70 Jahre geschützt", "Sie sind mangels menschlicher Schöpfung meist nicht geschützt", "Sie gehören automatisch dem KI-Anbieter", "Sie sind als Lichtbild nach § 72 UrhG geschützt"],
      richtig: [1],
      erklaerung: "§ 2 Abs. 2 UrhG verlangt eine persönliche geistige Schöpfung. Bei rein KI-generierten Inhalten fehlt sie nach herrschender Meinung.",
      quelle: "Werberecht, KI & Urheberrecht, Anwaltswerbung"
    },
    {
      frage: "Welche Merkmale gehören zu einem rechtssicheren Consent-Banner? (mehrere richtig)",
      optionen: ["Ablehnen so einfach wie Zustimmen", "Tracking startet erst nach Einwilligung", "Alle Häkchen sind vorausgewählt", "Einstellungen später änderbar"],
      richtig: [0, 1, 3],
      erklaerung: "Vorausgewählte Häkchen sind keine wirksame Einwilligung (EuGH Planet49, BGH Cookie-Einwilligung II).",
      quelle: "Checkliste für Website und Newsletter"
    },

    // ---------- Richtig oder falsch (8) ----------
    {
      typ: "wahrfalsch",
      aussage: "Die Double-Opt-in-Bestätigungsmail darf schon den ersten Newsletter-Inhalt mit Angeboten enthalten.",
      richtig: false,
      erklaerung: "Die Bestätigungsmail soll nur die Anmeldung bestätigen lassen. Werbung darin wäre E-Mail-Werbung ohne bestätigte Einwilligung.",
      quelle: "Datenschutz, Cookies, Impressum & Barrierefreiheit"
    },
    {
      typ: "wahrfalsch",
      aussage: "Das TTDSG heißt seit Mai 2024 TDDDG, die Cookie-Regel steht weiterhin in § 25.",
      richtig: true,
      erklaerung: "Mit dem Inkrafttreten des DDG am 14.05.2024 wurde das TTDSG umbenannt, § 25 blieb inhaltlich gleich.",
      quelle: "Datenschutz, Cookies, Impressum & Barrierefreiheit"
    },
    {
      typ: "wahrfalsch",
      aussage: "Der Digital Omnibus hat die Cookie-Regeln bereits im Sommer 2026 in die DSGVO überführt.",
      richtig: false,
      erklaerung: "Verabschiedet ist bisher nur der KI-Teil. Der Daten-Teil mit den Cookie-Regeln war im Herbst 2026 noch in Verhandlung.",
      quelle: "Datenschutz, Cookies, Impressum & Barrierefreiheit"
    },
    {
      typ: "wahrfalsch",
      aussage: "Gegen Direktwerbung können Betroffene jederzeit widersprechen, ohne einen Grund anzugeben.",
      richtig: true,
      erklaerung: "Art. 21 Abs. 2 und 3 DSGVO: Widerspruch gegen Direktwerbung ist bedingungslos, danach ist Werbung tabu.",
      quelle: "Datenschutz, Cookies, Impressum & Barrierefreiheit"
    },
    {
      typ: "wahrfalsch",
      aussage: "Der Digital Omnibus hat auch die Transparenzpflichten aus Art. 50 AI Act auf 2027 verschoben.",
      richtig: false,
      erklaerung: "Verschoben wurden die Hochrisiko-Pflichten. Art. 50 gilt seit 02.08.2026, nur für die Markierung bei Alt-Systemen gibt es eine Frist bis 02.12.2026.",
      quelle: "Werberecht, KI & Urheberrecht, Anwaltswerbung"
    },
    {
      typ: "wahrfalsch",
      aussage: "Auch ein einfacher Handy-Schnappschuss ist in Deutschland geschützt und darf nicht ohne Erlaubnis verwendet werden.",
      richtig: true,
      erklaerung: "Einfache Fotos sind als Lichtbilder nach § 72 UrhG geschützt, auch ohne künstlerische Höhe.",
      quelle: "Werberecht, KI & Urheberrecht, Anwaltswerbung"
    },
    {
      typ: "wahrfalsch",
      aussage: "Eine Anwältin darf sich „Fachanwältin für Arbeitsrecht“ nennen, sobald sie überwiegend Arbeitsrecht macht.",
      richtig: false,
      erklaerung: "Den Fachanwaltstitel verleiht die Rechtsanwaltskammer nach Nachweis besonderer Kenntnisse und Erfahrungen. Ohne Verleihung ist die Bezeichnung unzulässig.",
      quelle: "Werberecht, KI & Urheberrecht, Anwaltswerbung"
    },
    {
      typ: "wahrfalsch",
      aussage: "Bei einer Antwort auf eine schlechte Google-Bewertung darf die Kanzlei Details zum Mandat nennen, um sich zu verteidigen.",
      richtig: false,
      erklaerung: "Die Verschwiegenheitspflicht (§ 43a Abs. 2 BRAO) gilt auch hier. Sachlich antworten, ohne Mandatsinhalte.",
      quelle: "Werberecht, KI & Urheberrecht, Anwaltswerbung"
    },

    // ---------- Lückentext (6) ----------
    {
      typ: "luecke",
      text: "E-Mail-Werbung ohne vorherige ausdrückliche Einwilligung ist nach § 7 Abs. 2 Nr. 2 ___ eine unzumutbare Belästigung.",
      optionen: ["UWG", "DDG", "BFSG"],
      richtig: [0],
      erklaerung: "Das Gesetz gegen den unlauteren Wettbewerb regelt Werbung per E-Mail, Telefon und Fax.",
      quelle: "Datenschutz, Cookies, Impressum & Barrierefreiheit"
    },
    {
      typ: "luecke",
      text: "Der Widerruf einer Einwilligung muss so ___ sein wie ihre Erteilung.",
      optionen: ["einfach", "teuer", "schriftlich"],
      richtig: [0],
      erklaerung: "Art. 7 Abs. 3 DSGVO. Deshalb gehört in jede Mail ein Abmeldelink.",
      quelle: "Datenschutz, Cookies, Impressum & Barrierefreiheit"
    },
    {
      typ: "luecke",
      text: "Das Barrierefreiheitsstärkungsgesetz gilt seit dem ___.",
      optionen: ["28.06.2025", "14.05.2024", "02.08.2026"],
      richtig: [0],
      erklaerung: "Das BFSG gilt seit 28.06.2025. Der 14.05.2024 ist der Start des DDG, der 02.08.2026 der Start von Art. 50 AI Act.",
      quelle: "Datenschutz, Cookies, Impressum & Barrierefreiheit"
    },
    {
      typ: "luecke",
      text: "Text und Data Mining für KI-Training ist nach § 44b UrhG erlaubt, außer der Rechteinhaber hat einen maschinenlesbaren ___ erklärt.",
      optionen: ["Nutzungsvorbehalt", "Lizenzvertrag", "Datenschutzhinweis"],
      richtig: [0],
      erklaerung: "Der Rechteinhaber kann sich das TDM vorbehalten (Opt-out), online muss das maschinenlesbar geschehen.",
      quelle: "Werberecht, KI & Urheberrecht, Anwaltswerbung"
    },
    {
      typ: "luecke",
      text: "Nach § 43b BRAO ist Anwaltswerbung erlaubt, soweit sie über die berufliche Tätigkeit in Form und Inhalt ___ unterrichtet.",
      optionen: ["sachlich", "emotional", "vergleichend"],
      richtig: [0],
      erklaerung: "Das ist das Sachlichkeitsgebot. § 6 BORA konkretisiert: nicht unsachlich, unlauter oder irreführend.",
      quelle: "Werberecht, KI & Urheberrecht, Anwaltswerbung"
    },
    {
      typ: "luecke",
      text: "Gegen Werbung durch Dritte gilt: Anwälte dürfen nicht daran mitwirken, dass Dritte für sie Werbung machen, die ihnen selbst ___ ist.",
      optionen: ["verboten", "erlaubt", "zu teuer"],
      richtig: [0],
      erklaerung: "§ 6 Abs. 3 BORA. Das betrifft Agenturen, Portale und Kooperationspartner.",
      quelle: "Werberecht, KI & Urheberrecht, Anwaltswerbung"
    },

    // ---------- Zuordnen (5) ----------
    {
      typ: "zuordnen",
      frage: "Ordne die Pflicht dem Gesetz zu.",
      paare: [
        ["Cookie-Einwilligung", "§ 25 TDDDG"],
        ["Impressum", "§ 5 DDG"],
        ["Werbekennzeichnung (Influencer)", "§ 5a Abs. 4 UWG"],
        ["Barrierefreier Onlineshop", "BFSG"]
      ],
      erklaerung: "Jede Pflicht hat ihr eigenes Gesetz. Für die Datenverarbeitung kommt jeweils noch die DSGVO dazu.",
      quelle: "Datenschutz, Cookies, Impressum & Barrierefreiheit"
    },
    {
      typ: "zuordnen",
      frage: "Ordne die Rechtsgrundlage aus Art. 6 DSGVO dem Beispiel zu.",
      paare: [
        ["Einwilligung (lit. a)", "Newsletter-Anmeldung per Double-Opt-in"],
        ["Vertrag (lit. b)", "Antwort auf eine Anfrage über das Kontaktformular"],
        ["Berechtigtes Interesse (lit. f)", "Postalische Werbung an Bestandskunden nach Abwägung"]
      ],
      erklaerung: "Für Werbe-Mails reicht berechtigtes Interesse wegen § 7 UWG meist nicht, für Post-Werbung kann es greifen.",
      quelle: "Datenschutz, Cookies, Impressum & Barrierefreiheit"
    },
    {
      typ: "zuordnen",
      frage: "Ordne dem Datum das passende Ereignis im AI Act zu.",
      paare: [
        ["02.02.2025", "Verbote und KI-Kompetenz"],
        ["02.08.2025", "Pflichten für KI-Modelle mit allgemeinem Verwendungszweck"],
        ["02.08.2026", "Transparenzpflichten nach Art. 50"],
        ["02.12.2027", "Hochrisiko-Pflichten nach Anhang III"]
      ],
      erklaerung: "Die Hochrisiko-Termine wurden durch den Digital Omnibus verschoben, die anderen blieben.",
      quelle: "Werberecht, KI & Urheberrecht, Anwaltswerbung"
    },
    {
      typ: "zuordnen",
      frage: "Ordne die Norm aus dem Anwaltsberufsrecht ihrem Inhalt zu.",
      paare: [
        ["§ 43b BRAO", "Werbung nur sachlich unterrichtend"],
        ["§ 43a Abs. 2 BRAO", "Verschwiegenheitspflicht"],
        ["§ 6 Abs. 2 BORA", "Werbung mit Mandanten nur mit ausdrücklicher Einwilligung"],
        ["§ 6 Abs. 3 BORA", "Keine verbotene Werbung durch Dritte"]
      ],
      erklaerung: "Für Kanzlei-Marketing sind diese vier Normen die wichtigsten Leitplanken, daneben gilt das UWG.",
      quelle: "Werberecht, KI & Urheberrecht, Anwaltswerbung"
    },
    {
      typ: "zuordnen",
      frage: "Ordne die Umweltaussage der Regel ab 27.09.2026 zu.",
      paare: [
        ["„Umweltfreundlich“", "Nur mit Nachweis anerkannter hervorragender Umweltleistung"],
        ["Eigenes Nachhaltigkeitssiegel", "Nur mit unabhängigem Zertifizierungssystem"],
        ["„Klimaneutral durch Kompensation“", "Für Produkte unzulässig"],
        ["„Bis 2030 klimaneutral“", "Nur mit überprüfbarem Umsetzungsplan"]
      ],
      erklaerung: "So setzt das Dritte UWG-Änderungsgesetz die EU-Richtlinie 2024/825 um.",
      quelle: "Werberecht, KI & Urheberrecht, Anwaltswerbung"
    },

    // ---------- Reihenfolge (4) ----------
    {
      typ: "reihenfolge",
      frage: "Bring den Double-Opt-in-Ablauf in die richtige Reihenfolge.",
      schritte: [
        "Person trägt E-Mail-Adresse ins Formular ein",
        "System verschickt Bestätigungsmail ohne Werbung",
        "Person klickt auf den Bestätigungslink",
        "Anmeldung und Bestätigung werden protokolliert",
        "Erster Newsletter wird verschickt"
      ],
      erklaerung: "Erst nach dem Klick auf den Link ist die Einwilligung bestätigt und nachweisbar.",
      quelle: "Checkliste für Website und Newsletter"
    },
    {
      typ: "reihenfolge",
      frage: "Bring diese Gesetzes-Stichtage in die zeitliche Reihenfolge.",
      schritte: [
        "DDG und TDDDG treten in Kraft",
        "AI Act: Verbote und KI-Kompetenz gelten",
        "Barrierefreiheitsstärkungsgesetz gilt",
        "AI Act: Transparenzpflichten nach Art. 50",
        "Neue UWG-Regeln für Umweltaussagen"
      ],
      erklaerung: "14.05.2024, 02.02.2025, 28.06.2025, 02.08.2026, 27.09.2026.",
      quelle: "Werberecht, KI & Urheberrecht, Anwaltswerbung"
    },
    {
      typ: "reihenfolge",
      frage: "Wie läuft ein sauberer Cookie-Check der Website ab?",
      schritte: [
        "Website in einem privaten Browserfenster öffnen",
        "Vor jeder Auswahl prüfen, ob schon Tracking-Cookies gesetzt werden",
        "Auf „Ablehnen“ klicken",
        "Prüfen, dass weiterhin keine Analyse- oder Marketing-Tools laden",
        "Einstellungen über den Footer-Link erneut aufrufen"
      ],
      erklaerung: "So siehst du, ob das Banner wirklich vor der Einwilligung blockiert und die Entscheidung änderbar ist.",
      quelle: "Checkliste für Website und Newsletter"
    },
    {
      typ: "reihenfolge",
      frage: "Bring die Schritte für ein KI-generiertes Bild im Blog in eine sinnvolle Reihenfolge.",
      schritte: [
        "Nutzungsbedingungen des KI-Tools prüfen",
        "Bild ohne Bezug auf geschützte Figuren oder Marken erzeugen",
        "Ergebnis auf Ähnlichkeit mit fremden Werken prüfen",
        "Bei realistisch wirkenden Personen als KI-Bild kennzeichnen",
        "Alt-Text ergänzen und veröffentlichen"
      ],
      erklaerung: "Erst die Rechte klären, dann erzeugen, prüfen, kennzeichnen und barrierearm veröffentlichen.",
      quelle: "Werberecht, KI & Urheberrecht, Anwaltswerbung"
    }
  ],

  tabellen: [
    {
      titel: "Stichtage und Fristen",
      spalten: ["Datum", "Was gilt", "Rechtsquelle"],
      zeilen: [
        ["25.05.2018", "DSGVO anwendbar", "VO (EU) 2016/679"],
        ["14.05.2024", "DDG ersetzt TMG, TTDSG heißt TDDDG", "DDG, TDDDG"],
        ["01.08.2024", "AI Act in Kraft (stufenweise anwendbar)", "VO (EU) 2024/1689"],
        ["02.02.2025", "KI-Verbote und KI-Kompetenz", "Art. 4 und 5 AI Act"],
        ["01.04.2025", "Einwilligungsverwaltungsverordnung", "EinwV"],
        ["28.06.2025", "Barrierefreiheit für Verbraucher-Angebote", "BFSG"],
        ["Juli 2025", "OS-Plattform der EU abgeschaltet, Link entfernen", "VO (EU) 2024/3228"],
        ["02.08.2025", "Pflichten für KI-Modelle mit allgemeinem Verwendungszweck", "AI Act"],
        ["27.07.2026", "Digital Omnibus on AI in Kraft", "VO (EU) 2026/1744"],
        ["02.08.2026", "Transparenzpflichten (Chatbots, Deepfakes, KI-Texte)", "Art. 50 AI Act"],
        ["27.09.2026", "Strengere Regeln für Umweltaussagen", "UWG (Drittes Änderungsgesetz)"],
        ["02.12.2026", "Markierungspflicht auch für KI-Alt-Systeme", "Art. 50 Abs. 2 AI Act"],
        ["02.12.2027", "Hochrisiko-KI (Anhang III)", "AI Act nach Omnibus"],
        ["offen", "Cookie-Regeln in die DSGVO (Vorschlag)", "Digital Omnibus, Daten-Teil"]
      ]
    },
    {
      titel: "Pflicht → Wo geregelt → Was tun",
      spalten: ["Pflicht", "Wo geregelt", "Was tun"],
      zeilen: [
        ["Rechtsgrundlage für Daten", "Art. 6 DSGVO", "Für jedes Tool festlegen und in der Datenschutzerklärung nennen"],
        ["Newsletter-Einwilligung", "§ 7 UWG, Art. 6 und 7 DSGVO", "Double-Opt-in, Protokoll, Abmeldelink in jeder Mail"],
        ["Cookie-Einwilligung", "§ 25 TDDDG", "Banner mit gleichwertigem Ablehnen, Tools erst nach Zustimmung laden"],
        ["Dienstleister-Verträge", "Art. 28 DSGVO", "AV-Verträge mit Hoster, Newsletter- und Analyse-Tool"],
        ["Impressum", "§ 5 DDG, DL-InfoV", "DDG statt TMG nennen, Kanzlei-Pflichtangaben, OS-Link entfernen"],
        ["Barrierefreiheit", "BFSG", "Prüfen, ob Angebote mit Vertragsschluss betroffen sind, WCAG-AA als Ziel"],
        ["Keine Irreführung", "§§ 5, 5a UWG", "Aussagen belegen, keine leeren Superlative oder Umweltclaims"],
        ["Werbekennzeichnung", "§ 5a Abs. 4 UWG, § 6 DDG, MStV", "„Werbung“ oder „Anzeige“ klar am Anfang"],
        ["Bewertungen", "§ 5b Abs. 3 UWG, Anhang UWG", "Echtheitsprüfung erklären, nichts kaufen oder filtern"],
        ["KI-Kennzeichnung", "Art. 50 AI Act", "Deepfakes offenlegen, KI-Texte redaktionell prüfen"],
        ["Bildrechte", "UrhG, KUG", "Lizenzen und Einwilligungen dokumentieren"],
        ["Sachliche Anwaltswerbung", "§ 43b BRAO, §§ 6, 7 BORA", "Keine Irreführung, Mandanten nur mit Einwilligung, Titel korrekt"]
      ]
    }
  ],

  mindmaps: [
    {
      titel: "Recht & Datenschutz im Marketing",
      baum: {
        text: "Recht im Marketing 2026",
        kinder: [
          { text: "Datenschutz (DSGVO)", kinder: [
            { text: "Rechtsgrundlage nach Art. 6" },
            { text: "Einwilligung nachweisen" },
            { text: "Widerspruch gegen Direktwerbung" },
            { text: "AV-Verträge und Drittland" }
          ] },
          { text: "Newsletter", kinder: [
            { text: "§ 7 UWG: ausdrückliche Einwilligung" },
            { text: "Double-Opt-in und Protokoll" },
            { text: "Bestandskunden-Ausnahme (eng)" },
            { text: "Abmeldelink in jeder Mail" }
          ] },
          { text: "Cookies (§ 25 TDDDG)", kinder: [
            { text: "Einwilligung außer unbedingt erforderlich" },
            { text: "Ablehnen so leicht wie Zustimmen" },
            { text: "Digital Omnibus: noch offen" }
          ] },
          { text: "Website-Pflichten", kinder: [
            { text: "Impressum nach § 5 DDG" },
            { text: "Kammer und Berufsrecht nennen" },
            { text: "BFSG seit 28.06.2025" }
          ] },
          { text: "Werberecht (UWG)", kinder: [
            { text: "Keine Irreführung" },
            { text: "Werbung kennzeichnen" },
            { text: "Bewertungen echt und transparent" },
            { text: "Umweltaussagen seit 27.09.2026" }
          ] },
          { text: "KI und Urheberrecht", kinder: [
            { text: "Art. 50 AI Act seit 02.08.2026" },
            { text: "Deepfakes offenlegen" },
            { text: "KI-Werke meist ungeschützt" },
            { text: "Bildlizenzen dokumentieren" }
          ] },
          { text: "Anwaltswerbung", kinder: [
            { text: "§ 43b BRAO: sachlich" },
            { text: "§ 6 BORA: nicht irreführend" },
            { text: "Mandanten nur mit Einwilligung" },
            { text: "Verschwiegenheit beachten" }
          ] }
        ]
      }
    }
  ]
});

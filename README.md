# Lernwelt

Persönliche Lern-App (statisch, läuft auf GitHub Pages und auf dem iPhone).

- **Startseite:** große Karten, eine pro Thema
- **Weiterbildung 2025 Ecomex:** 18 Module mit Quiz, Karteikarten, Übungen, Lerntipps, Zufallsmodus und Prüfungsmodus
- **Themen-Bereiche** (z. B. SEO-Tutorial 2026): Audio, Kurzvideo, Videoübersicht, Präsentation, Mindmap, Lernkarten, Quiz, Datentabelle, Berichte

## Lokal starten

`index.html` per Doppelklick öffnen, oder für Audio/Video/PDF besser: `node .claude/serve.js` ausführen und http://localhost:5178 öffnen.

## Neues Thema hinzufügen

1. Ordner `themen/<thema-id>/` anlegen mit `thema.js` und den Mediendateien (Format: `themen/FORMAT.md`)
2. In `index.html` eine Zeile `<script src="themen/<thema-id>/thema.js"></script>` vor `main.js` einfügen

## Veröffentlichen

Vor dem Veröffentlichen neuer Funktionen in `changelog.js` oben einen neuen Eintrag (Version, Datum, Neuerungen) ergänzen und in `index.html` die `?v=`-Nummer von `changelog.js` und `main.js` auf die neue Version setzen. Die App zeigt die Neuerungen nach dem Update einmal automatisch an.

Doppelklick auf `Veroeffentlichen.cmd`. Das Skript kopiert die App-Dateien aus diesem Ordner nach `Dokumente\GitHub\lern-app`, macht einen Commit und lädt alles auf GitHub hoch. Nach 1–2 Minuten ist die neue Version unter https://kevinschu365.github.io/lern-app/ online.

Dieser Ordner ist die einzige Quelle. Im Git-Ordner wird nie von Hand gearbeitet, er wird bei jedem Veröffentlichen komplett überschrieben.
Nach Änderungen die `?v=...`-Nummern in `index.html` erhöhen, damit das iPhone die neuen Dateien lädt.

## Dateien

- `index.html`: Seitengerüst
- `main.js`: komplette App-Logik (Navigation, Quiz, Karteikarten, Prüfung, Themen)
- `styles.css`: Design
- `real-modules.js`, `module-overrides.js`, `module-learningcard-imports.js`: Inhalte der Weiterbildung
- `themen/`: Themen-Bereiche

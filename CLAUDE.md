# CLAUDE.md · Zentrale Steuerungs- & Arbeitsdatei

> **Diese Datei ist der Leitfaden für jede Arbeit an diesem Projekt.**
> Sie wird von Claude Code automatisch beim Start gelesen und bildet
> die verbindliche „Gesamtsicht" auf das Projekt. Kein Prompt wird
> ausgeführt, ohne dass sie berücksichtigt wurde.

---

## Regel Null: Arbeits-Workflow

**Bei jedem neuen Arbeitsauftrag:**

1. **LESEN** — Diese Datei zuerst komplett lesen.
2. **EINTRAGEN** — Die neue Aufgabe unten im Abschnitt **„Aktuelle Aufgaben"**
   als Eintrag mit Datum und Kurzbeschreibung ergänzen.
3. **PLANEN** — Unter dem Aufgaben-Eintrag 3–6 konkrete Schritte skizzieren.
4. **ABARBEITEN** — Schritte schrittweise erledigen, nach jedem Schritt
   den Status am Aufgaben-Eintrag aktualisieren (⏳ offen / 🔧 in Arbeit / ✅ fertig).
5. **NACH FERTIG** — Erledigte Aufgabe aus „Aktuelle Aufgaben" ins
   **„Erledigt-Archiv"** (am Ende der Datei) verschieben.

**Keine Aufgabe gilt als abgeschlossen**, bevor:
- Build (`npm run build`) grün ist
- Lint (`npm run lint`) grün ist
- Neue/geänderte Dateien committet und gepusht sind
- Ggf. betroffene Abschnitte in CLAUDE.md oder BILDER.md aktualisiert wurden

---

## Projekt-Kompass

**Name:** KI-Entdecker
**Betreiber:** Belkis Aslani (Projektleitung, Konzeption, Technik) +
Damien Eynius (Organisation, Verwaltung) · **Live:**
[beko2210.github.io/KI-Entdecker](https://beko2210.github.io/KI-Entdecker/)
**Branch für Entwicklung:** `claude/teacher-courses-materials-FGVWb`
**Kontakt:** belkis.aslani@gmail.com · +49 176 81462526

### Ziel in einem Satz
Bildungsplan-orientierter, datenschutzfreundlich konzipierter KI-Kurs
für Kinder ab 8 Jahren (5 Online-Kurstage) mit Begleitangebot an Schulen
in Baden-Württemberg (Kurs 1–3, Klasse 3–8) und kompletter Fördermappe
für Start-up-BW-/IHK-/Stiftungsanträge.

---

## Wichtige Dateien (Links mit Kurzbeschreibung)

### Technisches Fundament
- [`package.json`](./package.json) — Abhängigkeiten, Scripts
- [`vite.config.ts`](./vite.config.ts) — Build + PWA + SW-Cache
- [`tsconfig.json`](./tsconfig.json) — TypeScript-Konfiguration
- [`tailwind.config.js`](./tailwind.config.js) — Design-Farben
- [`src/App.tsx`](./src/App.tsx) — zentrale Routen
- [`src/lib/paths.ts`](./src/lib/paths.ts) — `buildAssetUrl` / `buildDownloadUrl`
- [`src/hooks/useProgress.ts`](./src/hooks/useProgress.ts) — LocalStorage-Fortschritt

### Website-Seiten (`src/pages/`)
- [`Home.tsx`](./src/pages/Home.tsx) — Startseite mit Kurs-Vorschau + Zertifikat
- [`Kurs.tsx`](./src/pages/Kurs.tsx) — Kurs-Übersicht
- [`CourseDay1.tsx`](./src/pages/CourseDay1.tsx) bis
  [`CourseDay5.tsx`](./src/pages/CourseDay5.tsx) — die 5 Kurstage
- [`Materialien.tsx`](./src/pages/Materialien.tsx) — Download-Bereich + Zertifikat-Preview
- [`Eltern.tsx`](./src/pages/Eltern.tsx) — Eltern-Info + FAQ
- [`Schulen.tsx`](./src/pages/Schulen.tsx) — Schul-/Förderer-Seite (Kurs-Cards, Pilot-CTA, Konzept-Downloads)
- [`Wochenplan.tsx`](./src/pages/Wochenplan.tsx) — Wochenplan-Ansicht
- [`Impressum.tsx`](./src/pages/Impressum.tsx) — § 5 DDG konform, Belkis + Damien
- [`Datenschutz.tsx`](./src/pages/Datenschutz.tsx) — DSGVO, Art. 20/21/22/77 vollständig

### Branding & Navigation
- [`Navigation.tsx`](./src/components/Navigation.tsx) — Top-Navigation
- [`Footer.tsx`](./src/components/Footer.tsx) — Footer mit KI-Tool-Liste (telli/F13 + Consumer getrennt)
- [`Hero.tsx`](./src/sections/Hero.tsx) — Hero-Section der Startseite

### Fördermappe (`foerdermappe/`) — intern, nicht im Web-Build
- [`README.md`](./foerdermappe/README.md) — Inhaltsübersicht
- [`00-checkliste-foerdermittel.html`](./foerdermappe/00-checkliste-foerdermittel.html)
- [`01-paedagogisches-konzept.html`](./foerdermappe/01-paedagogisches-konzept.html)
- [`02-datenschutz-schutzkonzept.html`](./foerdermappe/02-datenschutz-schutzkonzept.html)
- [`03-durchfuehrungskonzept.html`](./foerdermappe/03-durchfuehrungskonzept.html)
- [`04-evaluation-fragebogen.html`](./foerdermappe/04-evaluation-fragebogen.html)
- [`05-kostenplan.html`](./foerdermappe/05-kostenplan.html) — mit Musterbeträgen befüllt
- [`06-partnerliste.html`](./foerdermappe/06-partnerliste.html) — Querformat
- [`07-elternbrief-einverstaendnis.html`](./foerdermappe/07-elternbrief-einverstaendnis.html)
- [`08-anschreiben-schulen.html`](./foerdermappe/08-anschreiben-schulen.html)
- [`09-executive-summary.html`](./foerdermappe/09-executive-summary.html) — Pitch Bildung
- [`09b-pitch-business.html`](./foerdermappe/09b-pitch-business.html) — Pitch Business (IHK/Start-up BW)
- [`10-businessmodell-canvas.html`](./foerdermappe/10-businessmodell-canvas.html) — Querformat

### Öffentlich verlinkte Downloads (`public/downloads/`)
- `wochenplan.html`, `arbeitsblaetter.html`, `prompt-cheat-sheet.html`,
  `ki-tools-uebersicht.html`, `eltern-guide.html`, `zertifikat.html`
- `lehrer-kurs-1/2/3-handreichung.html` + `-arbeitsblatt.html`
- `schulen-konformitaet.html`
- Gespiegelte Fördermappe-Dokumente: `konzept-paedagogisch.html`,
  `konzept-datenschutz.html`, `konzept-durchfuehrung.html`,
  `evaluation-vorlage.html`, `elternbrief-einverstaendnis.html`,
  `projekt-uebersicht.html`

### Zentrale Dokumentation
- [`BILDER.md`](./BILDER.md) — **Bild-Inventar + Waisen + Austausch-Anleitung**
- [`README.md`](./README.md) — öffentliche Projektbeschreibung
- [`LICENSE`](./LICENSE) — CC BY-NC-ND 4.0
- [`SECURITY.md`](./SECURITY.md) — Sicherheits-Hinweise

---

## Wichtige technische Eigenheiten

### Alles ist statisch
- **Hosting:** GitHub Pages (USA, aber via DPF + SCC DSGVO-konform)
- **Kein Backend.** Kein Auth. Kein Server.
- **LocalStorage** speichert den Fortschritt lokal im Browser — nicht auf Servern.

### PWA / Service Worker
- Alle gelisteten Dateitypen werden gecacht:
  `**/*.{js,css,html,png,jpg,svg,woff2,webp,pdf}`
- Nach Änderungen: Nutzer brauchen einen Reload, damit der SW neu läuft.
- `navigateFallbackDenylist: /\/downloads\//` damit PDFs nicht von der SPA-Shell überschrieben werden.

### Deployment
- Deployment passiert automatisch beim Push auf `main` (GitHub Pages Action).
- **Seite ist LIVE** — jede Änderung trifft sofort echte Nutzer.

### Kritische Build-Checks nach jeder Änderung
```bash
npm run build   # muss grün
npm run lint    # muss grün
```

---

## Rechtlicher Status (Snapshot)

- Impressum nach § 5 DDG + § 18 MStV ✓ (Belkis + Damien)
- Datenschutzerklärung nach Art. 13 DSGVO ✓ (Rechte 15-21 + 77 + 22)
- GitHub-Pages-Drittlandstransfer (USA) in Datenschutz offengelegt ✓
- LocalStorage-Hinweis + keine Cookies ✓
- Sorgerecht-Hinweis im Elternbrief ✓
- AVV-Erläuterung im Datenschutzkonzept ✓
- Telefon +49 176 81462526 im Impressum ✓

**Noch offen (muss Belkis / Damien liefern):**
- Steuernummer/USt-ID nach Gewerbeanmeldung
- Erweitertes Führungszeugnis (§ 72a SGB VIII) physisch beantragen
- Pilotschul-Namen in Fördermappe 06 eintragen, sobald LOI vorliegt
- Externer DSB (optional, in Fördermappe 02 Platzhalter)

---

## Regeln für Claude (KI-Hilfe)

1. **Nie Code schreiben, ohne diese Datei und BILDER.md vorher gelesen zu haben.**
2. **Bestehende Bilder nicht verschieben/umbenennen** — die Seite ist live.
   Nur neue Bilder hinzufügen / Waisen neu referenzieren ist sicher.
3. **Niemals sensible Daten** (echte Schülernamen, private Telefonnummern außer der Hauptnummer,
   echte Handschriften-Unterschriften) ins Repo legen.
4. **Jeder Build muss grün sein**, bevor gepusht wird.
5. **Branch-Regel:** Entwicklungsbranch ist `claude/teacher-courses-materials-FGVWb`.
   Nicht auf `main` pushen, kein Force-Push, keine Rebase auf shared branches.
6. **Legal-Guard:** Bei Änderungen an Impressum/Datenschutz/Elternbrief Prüfreihenfolge:
   Claude → Review durch Belkis → ggf. externer DSB/Steuerberater → Live-Push.
7. **Kein Claims-Inflationismus:** „DSGVO-konform" → „datenschutzfreundlich konzipiert, vor
   Einsatz mit schulischem DSB abzustimmen". Siehe durchgehend im Projekt verwendete
   Formulierungen.
8. **telli (SCHULE@BW) ist primäre KI-Empfehlung für Schulen BW**. F13 für Lehrkräfte.
   Consumer-Tools (ChatGPT, Claude, Copilot etc.) immer mit „Was zu beachten ist"-Hinweis.
9. **Sprache:** Aktuelle deutsche Rechtschreibung. Umlaute statt ae/oe/ue, ß statt ss
   nach Langvokal.
10. **Nach jedem Commit:** Kurzsummary in Markdown mit Links zu geänderten Dateien an
    Belkis zurückgeben.

---

## Aktuelle Aufgaben

<!-- Neue Aufgaben werden hier unten eingefügt, erledigte nach unten ins Archiv verschoben. -->

_(leer — kein laufender Auftrag)_

---

## Erledigt-Archiv (chronologisch, neueste zuerst)

### 2026-04-16 · Infrastruktur-Grundsteine für Förderfähigkeit & Live-Betrieb ✅
- 5-Tage-Online-Kurs komplett strukturiert (Tag 1–5) + 3 Schul-Workshops (Kurs 1–3)
- Komplette Fördermappe (11 Dokumente) für Start-up BW / IHK / Stiftungen
- Rechtliche Aktualisierung: TMG → DDG, Art. 20/21/22/77 DSGVO, DPF/SCC, Hosting-Offenlegung
- Landes-KI BW (telli / F13 via SCHULE@BW) als primäre Empfehlung
- Damien als Mitgesellschafter dezent eingebunden
- Telefon +49 176 81462526 überall
- Zertifikat: Print-Fix (Farben + Leerseiten), stilisierte Unterschrift B. Aslani
- Elternbrief PDF-Leerseiten-Bug behoben, `print-color-adjust: exact` auf allen 27 PDFs
- BILDER.md als zentrale Bild-Dokumentation
- CLAUDE.md als zentrale Steuerungsdatei (**diese Datei**)

---

## Änderungshistorie dieser Datei

| Datum | Änderung |
|-------|----------|
| 2026-04-16 | Erstellung. Regel Null, Projekt-Kompass, Datei-Verlinkung, Regeln für Claude. |

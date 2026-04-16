# CLAUDE.md · Zentrale Steuerungs- & Arbeitsdatei

> **Diese Datei ist der Leitfaden für jede Arbeit an diesem Projekt.**
> Sie wird von Claude Code automatisch beim Start gelesen und bildet
> die verbindliche „Gesamtsicht" auf das Projekt. Kein Prompt wird
> ausgeführt, ohne dass sie berücksichtigt wurde.

---

## 🔐 Regeländerungs-Schutz (PIN: 1518)

**Diese Schranke schützt das Verhalten von Claude vor versehentlichen
Änderungen.** Der PIN ist absichtlich öffentlich (er steht hier im Repo),
wirkt aber als **intentionale Bremse**: Änderungen an den Abschnitten,
die Claudes Verhalten steuern, gehen nur, wenn der Auftraggeber den PIN
**explizit im Prompt nennt**.

**Geschützte Abschnitte dieser Datei** (Änderungen nur mit `PIN 1518` im Prompt):
- Dieser Abschnitt „Regeländerungs-Schutz (PIN)"
- Abschnitt „Regel Null: Arbeits-Workflow"
- Abschnitt „Regeln für Claude (KI-Hilfe)"

**NICHT geschützt** (laufende Dokumentation, kein PIN nötig):
- Projekt-Kompass, Datei-Index, Eigenheiten, Rechtlicher Status
- Aktuelle Aufgaben, Erledigt-Archiv, Projekt-Chronologie, Änderungshistorie

**Ohne PIN im Prompt:** Claude weist Änderungen an geschützten Abschnitten
ab und fragt höflich nach dem PIN. Normale Arbeitsaufträge (Features
bauen, Bugs fixen, Doku pflegen) brauchen keinen PIN — sie laufen wie
gewohnt nach Regel Null.

**Wenn du den PIN änderst**, muss dieser Abschnitt selbst per aktuellem
PIN autorisiert werden; neuer PIN wird in diesem Block dokumentiert.

---

## Regel Null: Arbeits-Workflow

**Bei jedem neuen Arbeitsauftrag:**

1. **LESEN** — Diese Datei zuerst komplett lesen. Immer. Ohne Ausnahme.
2. **EINTRAGEN** — Die neue Aufgabe unten im Abschnitt **„Aktuelle Aufgaben"**
   als Eintrag mit Datum und Kurzbeschreibung ergänzen.
3. **PLANEN** — Unter dem Aufgaben-Eintrag 3–6 konkrete Schritte skizzieren.
4. **ABARBEITEN** — Schritte schrittweise erledigen, nach jedem Schritt
   den Status am Aufgaben-Eintrag aktualisieren (⏳ offen / 🔧 in Arbeit / ✅ fertig).
5. **DOKUMENTIEREN — HARTE PFLICHT** 🔒
   - **Jede Code-Änderung** wird in der passenden Dokumentation beschrieben.
   - **Bilder / Assets** → in [`BILDER.md`](./BILDER.md) einpflegen
   - **Fördermappe-Änderungen** → in [`foerdermappe/README.md`](./foerdermappe/README.md)
   - **Workflow / Arbeitsregeln / Projekt-Struktur** → in dieser Datei (CLAUDE.md)
   - **Öffentlich sichtbare Features** → in [`README.md`](./README.md)
   - **Rechtliches / Datenschutz** → Snapshot weiter unten aktualisieren
   - Nach jeder erledigten Aufgabe: im „Erledigt-Archiv" einen Eintrag mit
     Datum, Titel, Kurz-Bilanz der Änderungen. Kein Drift zwischen Code
     und Dokumentation zulassen.
6. **NACH FERTIG** — Erledigte Aufgabe aus „Aktuelle Aufgaben" ins
   **„Erledigt-Archiv"** (am Ende der Datei) verschieben.

**Keine Aufgabe gilt als abgeschlossen**, bevor:
- Build (`npm run build`) grün ist
- Lint (`npm run lint`) grün ist
- Neue/geänderte Dateien committet und gepusht sind
- **Alle betroffenen Doku-Dateien aktualisiert sind** (siehe Schritt 5)
- Summary-Antwort an Belkis mit Links zu geänderten Dateien gesendet wurde

---

## Projekt-Kompass

**Name:** KI-Entdecker
**Betreiber:** Belkis Aslani (Projektleitung, Konzeption, Technik) +
Damien Eynius (Organisation, Verwaltung) · **Live:**
[beko2210.github.io/KI-Entdecker](https://beko2210.github.io/KI-Entdecker/)
**Branch für Entwicklung:** jeweils der in der aktuellen Task-Anweisung
genannte `claude/...`-Branch (wechselt pro Auftrag, nie direkt auf `main`).
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
- Hero-Section: inline in [`Home.tsx`](./src/pages/Home.tsx) (ab „Hero Section"-Kommentar). Einen eigenen `Hero.tsx` gibt es bewusst nicht mehr.

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
5. **Branch-Regel:** Entwicklungsbranch ist immer der in der aktuellen
   Task-Anweisung genannte `claude/...`-Branch. Nicht auf `main` pushen,
   kein Force-Push, keine Rebase auf shared branches. (Stand 2026-04-16
   generalisiert mit PIN 1518 — früher fest: `claude/teacher-courses-materials-FGVWb`.)
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
11. **Verhaltensregeln sind PIN-geschützt:** Änderungen an diesem Abschnitt, an „Regel Null"
    oder am „Regeländerungs-Schutz" gehen nur, wenn der Auftraggeber den PIN **1518**
    im Prompt nennt. Ohne PIN: höflich nachfragen, nichts ändern.

---

## Aktuelle Aufgaben

_(leer — kein laufender Auftrag)_

---

## Projekt-Chronologie (lückenlos von Beginn bis heute)

Diese Chronik ist die Pflicht-Referenz, damit jeder Mitarbeitende (und
Claude) jederzeit weiß, **was bereits existiert, was gelöst wurde und
warum bestimmte Entscheidungen getroffen sind**. Änderungen immer hier
ergänzen, sobald ein neuer Commit zum Branch gelangt.

### 📅 Phase 1 · Projektstart &amp; Grundlagen (3. April 2026)

Der erste Entwicklungs-Sprint legte das Fundament des interaktiven
5-Tage-KI-Kurses inklusive Build-Pipeline, PWA-Fähigkeit und erstem
Zertifikat. Wichtige Schritte in der Reihenfolge:

- **Base-Setup & Deployment:** Vite + React + Tailwind + TypeScript,
  GitHub-Pages-Routing über HashRouter, GH-Pages-Action korrekt
  konfiguriert, Basis-URL `/KI-Entdecker` gesetzt.
- **Kurs-Framework:** 5 Kurstage (`CourseDay1–5.tsx`) mit je 3 Lektionen
  + FAQ. Progress via `useProgress`-Hook im LocalStorage, Badges pro Tag.
  Lock-Logik für Folgeinhalte.
- **Seiten:** Home, Kurs, Materialien, Eltern, Wochenplan, Impressum,
  Datenschutz, 404. Navigation, Footer, Hero, CourseOverview als
  Sections/Components. Lazy-Loading für die Kurstage.
- **Materialien & Downloads:** erste HTML-PDFs (`wochenplan.html`,
  `arbeitsblaetter.html`, `prompt-cheat-sheet.html`,
  `ki-tools-uebersicht.html`, `eltern-guide.html`, `zertifikat.html`).
- **Bug-Fixes (Tag der ersten Veröffentlichung):** Lock-Bypass auf
  Homepage, kaputte CSS-Klassen, Typos. `42b8222` — 404 bei
  Seitenrefresh beseitigt durch HashRouter-Umstellung. `21dcb64` —
  Download-Links nutzen GitHub-Pages-Basis-Pfad korrekt.
- **Interaktion:** `34ca1d5` — Infinite-Render-Loop in FAQs gefixt;
  `76fff02` — Scroll-to-Top beim Navigieren; `d8c2973` — Reading-Timer
  verhindert Speed-Klicken; `542e92c` — Section-Skipping unterbunden.
- **PWA & Branding:** `f6d03df` — App als PWA installierbar mit
  Roboter-Maskottchen als App-Icon. `85e0a60` — Sparkles-Icon durch
  Roboter ersetzt.
- **Zertifikat:** `f3e5dd5` — erste herunterladbare PDF-Version;
  `1be26b8` — Harvard-Style-Redesign; `3980db7` — Preview auf Home;
  `5b23d5c` — Download erst nach Abschluss freigeschaltet.
- **Policy:** `0747844` — README als Mission Statement + CC BY-NC-ND.

### 📅 Phase 2 · Absicherung &amp; Dependencies (5.–6. April 2026)

- **Sicherheits-Policy:** `6f35e72` — Supported Versions aktualisiert;
  `345add5` — SECURITY.md ins Deutsche übersetzt.
- **Lizenz:** `f54bd8c` / `6ba74d9` / `45267a9` — deutsche
  CC-Formulierung, Formatierung, verbindlicher Lizenzhinweis.
- **Dependabot-Wellen:** `f42184e` rollup 4.55.1→4.60.1, `32b0e78`
  flatted 3.3.3→3.4.2, `871f31d` minimatch, `d9849af` lodash
  4.17.21→4.18.1, `8016550` picomatch.
- **README:** `e04b2bb` animiertes Herz-GIF; `b844388` Autorenverweis.
  `2f1f37b` alte `info.md` gelöscht.

### 📅 Phase 3 · Schulen-Seite (13. April 2026)

- `6b8729c` — erste dedizierte Schulen-Seite mit Fokus auf Lehrkräfte
  und Schulkooperationen (Klassenstufen 3–8, 90-/180-Minuten-Formate,
  datenschutzfreundliche Workshop-Vorlage).

### 📅 Phase 4 · Lehrer-Kurse, Material &amp; erste Fördermaterialien (14. April 2026)

- `7b973bf` — **Kurs 1 (Kl. 3/4, 90 Min) + Kurs 2 (Kl. 5/6, 180 Min
  Projektformat)** inkl. Handreichungen und fillable Arbeitsblätter
  A1–A3 / B1–B4.
- `ab1376b` — drei Nutzungsmodelle (Lehrkraft allein / Team-Teaching /
  externe Durchführung), Service-Worker-Anpassungen für Downloads.
- `25bcd27` — „Premium"-Claims und OPS-Formulierungen entfernt; sachlichere
  Beschreibung, konformer zum Bildungsplan.
- `186001c` — Print-Layout aller Teacher-PDFs optimiert (saubere
  Seitenumbrüche, Farben im Druck).

### 📅 Phase 5 · Live-Kurs-Fixes (15. April 2026)

- `aa951bc` — Tag 1 vorzeitige „Geschafft"-Banner entfernt (hatte
  fälschlich Back-Button vor FAQ gezeigt).
- `7959ca5` — Gleicher Fix für Tage 2–4; Tag 5 war bereits korrekt.

### 📅 Phase 6 · Zertifikat-Vorschau, Security-Patches, Fördermappe (16. April 2026)

- `2cb3afa` — Zertifikat-Vorschau-Bild auf Materialien-Seite und im
  README.
- `f24136f` — Vorschau-Bild komprimiert: **10,9 MB → 827 KB PNG und
  162 KB WebP**.
- `e5850f9` — Mini-Zertifikat auf Home durch echtes Vorschau-Bild
  ersetzt.
- `6307d7a` — **Alle 5 offenen Dependabot-Advisories** gepatcht
  (vite 7.3.2, serialize-javascript 7.0.5 via overrides,
  brace-expansion über audit fix).
- `a9366a0` + `6830054` + `5630c98` + `9dc6ee2` + `cce3274` —
  **Komplette Fördermappe** (README, 00 Checkliste, 01 Pädagogisches
  Konzept, 02 Datenschutz, 03 Durchführung, 04 Evaluation, 05
  Kostenplan, 06 Partnerliste, 07 Elternbrief, 08 Anschreiben,
  09 Executive Summary, 10 Business Model Canvas).
- `847c56d` — Schulen-Seite „förderfähig" gemacht: Kompetenzen,
  Bildungsplan-Tabelle, Methoden, detaillierter Datenschutz mit
  Tool-Liste, Pilot-2026/27-CTA, 6 Konzept-Downloads.

### 📅 Phase 7 · Landes-KI, Rechtstatsächlichkeit, Content-Finesse (16. April 2026)

- `86d542c` — **telli / F13 (SCHULE@BW)** überall als primäre
  KI-Empfehlung verankert, Bildgenerierung ehrlich als „in Entwicklung"
  markiert.
- `6d2b4ea` — konsequente Umlaute/ß nach aktueller Rechtschreibung
  (160+ Ersetzungen in 5 Downloads).
- `9779283` — TMG → DDG/TDDDG, Art. 13/20/21/22/77 DSGVO, GitHub-Pages-
  Drittlandstransfer mit DPF/SCC offengelegt, Server-Log-Speicherdauer,
  Kostenmodell-Klarstellung (Online frei vs. Schul-Workshops
  kostenpflichtig), Elternbrief: Geburtsdatum → Jahrgang +
  Sorgerecht-Hinweis, Fördermappe 02 AVV-Erklärung + Art. 22.
- `77dc217` — Bildungsplan-Tabelle in Mobile-Ansicht sichtbar
  (Card-Layout unter sm-Breakpoint).
- `f4e5f5f` — **Kurs 3 (Kl. 7/8, Quellen / Deepfakes / Bias /
  Urheberrecht)** angelegt; Pitch in zwei Versionen gesplittet (09
  Bildung, 09b Business); Kostenplan mit Musterbeträgen befüllt;
  Gender-Formulierungen im Projekt vereinheitlicht (laut Commit
  „Gender-Fix").

### 📅 Phase 8 · Kontakt, Team, Details (16. April 2026)

- `fd716a2` — **Telefon +49 176 81462526** überall (Impressum,
  Datenschutz, Schulen, Fördermappe 02/07/08/09/09b, schulen-
  konformitaet.html).
- `dd04d3f` — Footer KI-Tools in zwei Reihen: „Für die Schule (BW)"
  mit telli/F13 + „Zu Hause (mit Eltern)" mit den Consumer-Tools.
- `09ddbeb` — KI-Tools-Übersicht: „Was zu beachten ist"-Boxen pro
  Tool (Altersgrenze, US-Server, Halluzinationen …) + Print-CSS aller
  alten Downloads robuster gemacht.
- `967d0aa` — **Damien Eynius** als Mitgesellschafter für Verwaltung
  subtil eingebunden (Impressum, Datenschutz Art. 26, Schulen-Kontakt,
  Fördermappe 02/09/09b/10).
- `98804d2` — Zertifikat-Hinweis auf der Webseite: PDF zum
  Selbstausdruck vs. Druck im Seminar.
- `ad9c661` + `d120d98` + `ab892e8` — Zertifikat: stilisierte
  Namens-Unterschrift „B. Aslani" (Schreibschrift `Great Vibes`, keine
  echte Handschrift im öffentlichen Repo); Klarstellung dass Name
  und Datum vom Nutzer einzutragen sind.
- `16663ef` — **Zertifikat-Druck-Fix:** `print-color-adjust: exact`
  aktiviert Hintergrundfarben, `@page 297mm 210mm` + `min-height: 0`
  beseitigen die erzwungene Leerseite.
- `9d5e5c3` — **Elternbrief-Leerseiten-Bug** behoben
  (`.letter { break-inside: avoid }` auf Großblock entfernt,
  `.form { break-before: page }` sauber gesetzt, `.page-break`-Div
  per `display: none` deaktiviert); `print-color-adjust: exact` auf
  **allen 27 PDFs** ergänzt.

### 📅 Phase 9 · Dokumentation &amp; Workflow-System (16. April 2026)

- `01d29c2` — **BILDER.md** als zentrale Bild-Dokumentation; Inline-
  🖼️-Kommentare in Home, Kurs, CourseOverview, Materialien,
  Navigation, Footer, Hero, alle 5 CourseDay-Dateien.
- `13841b0` — **CLAUDE.md** als zentrale Steuerungs- und
  Arbeitsdatei inkl. Regel Null, Projekt-Kompass, Datei-Index,
  10 Regeln für Claude. BILDER.md um Einbau-Vorschläge für Waisen-
  Bilder erweitert.
- `21b1d4f` — **Bilder-Reorganisation nach Regel Null:**
  `dayN-extra/` aufgelöst → flache `dayN/`-Struktur, Kurs-
  Übersichtsbilder nach `images/overview/`, 10 Waisen-Bilder nach
  `archive/images-unused/` (außerhalb `public/`, nicht im Build).
  Solo-Ordner `images/day4/` gelöscht. Alle 17 Code-Referenzen
  aktualisiert, 20+ Inline-Kommentare. Build-Precache von 83 → 72
  Einträge, 64,8 MB → 48,3 MB (−16,5 MB).

---

## Erledigt-Archiv (chronologisch, neueste zuerst)

### 2026-04-16 · Finanzierungsplan + restliche Fördermappe auf Team-Version + Gender-Korrektur ✅
- **Auftrag:** „Auch den Finanzierungsplan aktualisieren, da wir jetzt
  zu zweit sind. Und alle Dateien in der Fördermappe, die man anpassen
  sollte." + „ich bin männlich, Belkis Aslani ist männlich".
- **[`05-kostenplan.html`](./foerdermappe/05-kostenplan.html)** größter
  Umbau:
  - Muster-Note mit Team-Struktur erklärt (Belkis = Projektleitung/
    Pädagogik/Technik + Hauptantragsteller Gründungszuschuss; Damien =
    Organisation/Verwaltung, Einsatz je nach Erwerbsstatus).
  - Personalkosten-Tabelle: neue Zeilen **„Kooperationen &amp;
    Förderantragsmanagement"** (30 h, 45 €/h, 1.350 €) und **„Termin-,
    Vertrags- &amp; Rechnungsverwaltung"** (20 h, 45 €/h, 900 €) als
    Damien-Positionen. Alle Bestandspositionen mit „BA" / „DE"
    gekennzeichnet. Gesamt-Personal 10.340 € → **12.590 €**.
  - Fahrtkosten neue Zeile „Hardthausen → Ludwigsburg (DE ·
    Kooperations-/Beratungstermine)" (2 × 80 km × 0,30 € = 48 €).
    Fahrtkosten 176 € → **224 €**.
  - Totals-Block aktualisiert, Gesamt 14.939 € → **17.237 €** („Team-
    Version").
  - Finanzierungsseite: Start-up BW Pre-Seed 4.000 → 5.000 €, Stiftungen
    2.000 → 2.500 €, neue Zeile „Damien: Aufwandsentschädigung /
    Nebentätigkeit / Ehrenamt" (0 €, zu klären). Summe 15.000 → **16.500 €**.
    Label Gründungszuschuss klargestellt als „personenbezogen · Belkis".
  - Schluss-Note ergänzt: AfA-Zuschuss nur für Belkis; für Damien
    separate Regelungen (Aufwandsentschädigung/Nebentätigkeit/Minijob/
    Ehrenamt) mit AfA + Steuerberatung klären. Footer um Team ergänzt.
- **[`09-executive-summary.html`](./foerdermappe/09-executive-summary.html)
  + Mirror [`projekt-uebersicht.html`](./public/downloads/projekt-uebersicht.html):**
  Title-Tag und Footer von „09a Pitch Bildung" auf „09 Pitch Bildung"
  bereinigt (passt jetzt zum Datei-Index). Kontakt-Kasten oben um
  Damien erweitert.
- **[`09b-pitch-business.html`](./foerdermappe/09b-pitch-business.html):**
  Kontakt-Kasten auf „Belkis Aslani &amp; Damien Eynius · KI-Entdecker ·
  Gründer-Team". KPI-Kachel Pilot-Budget 15.000 € → **17.000 €**;
  Finanzplan-Kachel „Pilotphase" entsprechend aktualisiert.
- **[`10-businessmodell-canvas.html`](./foerdermappe/10-businessmodell-canvas.html):**
  Kostenstruktur neu strukturiert (Personalkosten Team: BA + DE; Sach-
  &amp; Betriebskosten). Schlüsselressourcen um „Verwaltungs- &amp;
  Kooperations-Know-how (Damien)" erweitert. Footer um Team ergänzt.
- **00-Checkliste, 02-Datenschutz, 04-Evaluation, 06-Partnerliste:**
  geprüft, keine Anpassung nötig (neutral formuliert bzw. Team-Zeile
  für Datenschutz war bereits vorhanden).
- **Gender-Korrektur:** Belkis Aslani ist männlich — in diesem Update
  versehentlich zwei Mal „Antragstellerin"/„Hauptantragstellerin"
  geschrieben, beide auf **„Antragsteller"/„Hauptantragsteller"**
  korrigiert. Grep über das gesamte Projekt nach femininen Endungen
  (Projektleiterin, Gründerin, Anbieterin, Referentin, Pädagogin etc.)
  liefert keine Belkis-bezogenen Treffer mehr. „Dozentinnen/Dozenten"
  (09b Z. 113) ist generische Wettbewerbsanalyse, bleibt.
- **Legal-Guard (Regel 6):** Kostenplan ist nicht rechtsverbindlich,
  aber vor Einreichung bei Fördergeber mit Steuerberatung und AfA
  abstimmen. Musterbeträge sind Richtwerte.
- **Build + Lint grün**, Precache weiterhin 72 / 48,3 MB, gepusht auf
  `claude/check-claude-dm-bugs-jQrpw`.

### 2026-04-16 · Fördermappe + Mirror-Downloads auf Team Belkis + Damien ✅
- **Auftrag:** „foerdermappe bitte updaten, da wird jetzt 2 sind".
- **[`08-anschreiben-schulen.html`](./foerdermappe/08-anschreiben-schulen.html):**
  alle 11 Betreiber-Ichs in den 4 Musterbriefen (Schulleitung,
  Medienzentrum, Förderverein, Stiftung) auf Wir-Form umgestellt.
  Einleitungen „mein Name ist Belkis Aslani. Ich entwickle…" →
  „wir sind Belkis Aslani (Projektleitung, Pädagogik, Technik) und
  Damien Eynius (Organisation, Verwaltung)… Wir entwickeln…".
  Alle 4 Grußzeilen auf „Belkis Aslani &amp; Damien Eynius · KI-Entdecker".
- **[`09-executive-summary.html`](./foerdermappe/09-executive-summary.html)
  + Mirror [`projekt-uebersicht.html`](./public/downloads/projekt-uebersicht.html):**
  „biete ich zusätzlich Vor-Ort-Workshops" → „bieten wir zusätzlich…".
- **[`07-elternbrief-einverstaendnis.html`](./foerdermappe/07-elternbrief-einverstaendnis.html)
  + Mirror [`elternbrief-einverstaendnis.html`](./public/downloads/elternbrief-einverstaendnis.html):**
  Kontakt-Zeile „erreichen Sie mich" → „erreichen Sie uns", Signatur
  „Belkis Aslani · KI-Entdecker" → „Belkis Aslani &amp; Damien Eynius ·
  KI-Entdecker". Eltern-Einverständnis-Checkboxen („Ich bin / wir sind
  einverstanden", „Ich bestätige", „Ich bin einverstanden") und die
  konkrete Workshop-Begleitungs-Zeile („Belkis Aslani (KI-Entdecker)")
  bewusst unverändert gelassen (rechtliche Erklärung aus erster Person
  bzw. tatsächliche Durchführungsperson).
- **[`10-businessmodell-canvas.html`](./foerdermappe/10-businessmodell-canvas.html):**
  Subtitle „Belkis Aslani" → „Belkis Aslani &amp; Damien Eynius".
  Key-Activities-Textarea hatte bereits beide Rollen; unverändert.
- **[`03-durchfuehrungskonzept.html`](./foerdermappe/03-durchfuehrungskonzept.html):**
  Phase 1 (Vorbereitung) und Phase 4 (Abschluss/Skalierung) um Damien
  ergänzt. Rollen-Tabelle mit neuer Zeile „Organisation &amp; Verwaltung
  · Damien Eynius · Kooperationen, Förderanträge, Termine, Verträge,
  Verwendungsnachweise".
- **Footer-Updates:** [`01-paedagogisches-konzept.html`](./foerdermappe/01-paedagogisches-konzept.html)
  und [`09b-pitch-business.html`](./foerdermappe/09b-pitch-business.html)
  — „Autor: Belkis Aslani" → „Team: Belkis Aslani &amp; Damien Eynius".
- **[`foerdermappe/README.md`](./foerdermappe/README.md):**
  „Vertraulich · Interne Arbeitsunterlage für Belkis Aslani" → „…für
  Belkis Aslani &amp; Damien Eynius". „…Dokumente, die du brauchst…" →
  „…die wir brauchen…" + expliziter Rollenverteilungs-Satz.
- **Unverändert (absichtlich):** 00-Checkliste, 05-Kostenplan,
  06-Partnerliste (reine Tabellen ohne Personenbezug); 02-Datenschutz
  und 09b-Pitch hatten Damien bereits; Schüler-Ichs in 01+04 und
  Eltern-Ichs in 07 sind rechtlich/pädagogisch korrekt.
- **Grep-Verifikation:** Nur 6 „ich"-Treffer in Fördermappe übrig,
  alle davon legitim (Schüler-Arbeitsblatt-Titel, Schüler-Fragebogen,
  Eltern-Einverständnis).
- **Legal-Guard (Regel 6):** Elternbrief berührt — vor Live-Einsatz an
  Eltern von schulischem DSB gegenprüfen lassen.
- **Build + Lint grün**, Precache weiterhin 72 Einträge / 48,3 MB,
  gepusht auf `claude/check-claude-dm-bugs-jQrpw`.

### 2026-04-16 · Impressum + Datenschutz auf professionelle Wir-Form ✅
- **Auftrag:** „Impressum und so professionell, nicht ich version".
- **[`Impressum.tsx`](./src/pages/Impressum.tsx):** 10 Ich-Stellen auf
  Wir-Form umgestellt (Haftung für Inhalte, Haftung für Links,
  Urheberrecht, Streitschlichtung). „bin ich" → „sind wir", „werde
  ich" → „werden wir", „von mir" → „von uns", „bitte ich" → „bitten
  wir", „Ich bin nicht bereit…" → „Wir sind nicht bereit…".
- **[`Datenschutz.tsx`](./src/pages/Datenschutz.tsx):** 4 Ich-Stellen
  auf Wir-Form umgestellt. Intro („ist mir" → „ist uns", „Ich
  verarbeite" → „Wir verarbeiten", „informiere ich Sie" →
  „informieren wir Sie"), Server-Logs („mein berechtigtes Interesse" →
  „unser berechtigtes Interesse", „durch mich" → „durch uns"),
  Rechte-Section („kontaktieren Sie mich" → „kontaktieren Sie uns").
- **Juristisch passend:** Beide Dokumente deklarieren Belkis + Damien
  als gemeinsames Angebot (§ 5 DDG bzw. Art. 26 DSGVO). Wir-Form ist
  hier sachlich zutreffend und professioneller als Ich-Form.
- **Grep-Verifikation:** `\b(ich|mich|mir|mein[ea-z]*)\b` liefert in
  beiden Dateien 0 Treffer.
- **Legal-Guard (Regel 6):** Erledigt durch Claude — vor Live-Sichtung
  durch Belkis ggf. noch ein Review mit DSB/Steuerberater möglich.
- **Build + Lint grün**, gepusht auf `claude/check-claude-dm-bugs-jQrpw`.

### 2026-04-16 · CLAUDE.md-Bugs gefixt + Dead-Code-Ordner `src/sections/` entfernt ✅
- **Auftrag:** „Checke die claude.md und prüfe auf bugs" — Fix-Freigabe
  für Bug 1.a und Drift 3 (mit PIN 1518).
- **Bug 1 + 2 (Dead Code):** Ordner `src/sections/` komplett entfernt
  (9 Dateien: `Hero.tsx`, `Navigation.tsx`, `Footer.tsx`,
  `CourseOverview.tsx`, `CTA.tsx`, `Features.tsx`, `Materials.tsx`,
  `Parents.tsx`, `ProgressTracker.tsx`). Keine davon war aus `src/`
  importiert; `sections/Navigation.tsx` verwendete noch das alte
  Sparkles-Icon. Hero-Section liegt weiterhin inline in
  [`Home.tsx`](./src/pages/Home.tsx).
- **Drift 3 (Branch):** Projekt-Kompass (Zeile 75) und Regel 5
  (Zeile 198) auf generische Formulierung umgestellt
  („jeweils der in der Task-Anweisung genannte `claude/...`-Branch").
  Regel 5 ist PIN-geschützt — mit PIN 1518 autorisiert.
- **Drift 4 (Chronologie):** Phase 7 sagte „09a Bildung, 09b Business",
  Datei heißt aber `09-executive-summary.html` → auf „09 Bildung,
  09b Business" korrigiert.
- **Kosmetik 5:** „Gender auf männliche Form korrigiert" → „Gender-
  Formulierungen im Projekt vereinheitlicht (laut Commit ‚Gender-Fix')".
- **Mit-Doku:** `BILDER.md` Zeile 71 (Hero.tsx-Referenz entfernt),
  `.planning/codebase/STRUCTURE.md` + `ARCHITECTURE.md` (sections/
  aus Struktur-Beschreibung und „Where to add new code" gestrichen,
  mit Historien-Hinweis).
- **Build + Lint grün**, gepusht auf `claude/check-claude-dm-bugs-jQrpw`.

### 2026-04-16 · Badge-Bubble auf Home (Mobile) nach oben verschoben ✅
- `src/pages/Home.tsx` Zeile 283: Klasse `top-10` → `top-2 sm:top-10`
- Wirkung: Auf Handy (Viewport < 640 px) sitzt die „X Badges
  freigeschaltet!"-Bubble jetzt ~32 px weiter oben und wird nicht mehr
  vom Roboter-Maskottchen verdeckt.
- Desktop und Tablet (≥ 640 px) unverändert — `sm:top-10` stellt den
  alten Wert wieder her.
- Kommentar im Code ergänzt, der die Mobile-Optimierung erklärt.

### 2026-04-16 · PIN-Schutz für Regel-Null- und Regel-Änderungen ✅
- Neuer Abschnitt „🔐 Regeländerungs-Schutz (PIN: 1518)" direkt vor
  „Regel Null" eingefügt. Legt fest, welche Abschnitte verhaltens-
  relevant sind und nur mit PIN im Prompt geändert werden dürfen
  (Regel-Null, Regeln für Claude, PIN-Schutz selbst).
- Nicht geschützt: Projekt-Kompass, Datei-Index, Eigenheiten,
  Rechtlicher Status, Aktuelle Aufgaben, Erledigt-Archiv,
  Projekt-Chronologie. Diese laufen normal als Doku-Updates.
- „Regeln für Claude" um Punkt 11 ergänzt: Verhaltensregeln sind
  PIN-geschützt.
- Erste Einführung durch User-Nennung des PIN 1518 autorisiert.

### 2026-04-16 · Lückenlose Projekt-Chronologie + Dokumentationspflicht ✅
- **Regel Null** um Schritt 5 (Dokumentationspflicht 🔒) erweitert: jede
  Code-Änderung muss in der passenden Doku beschrieben werden
  (BILDER.md / CLAUDE.md / README.md / Fördermappe-README / rechtlicher
  Snapshot). Kein Drift mehr zulässig.
- **Projekt-Chronologie** als neuer Abschnitt: lückenlose Darstellung
  aller bisherigen Commits in 9 thematischen Phasen von Projektstart
  (3. April 2026) bis heute (16. April 2026), jeweils mit Commit-Hashes
  und Kurz-Beschreibung der jeweiligen Änderungen.
- **README.md** aktualisiert: Kurs 3 ergänzt, neuer Abschnitt „Für
  Schulen in Baden-Württemberg" (3 Workshop-Formate), Team-Block mit
  Belkis + Damien, Telefon +49 176 81462526, neuer Abschnitt „Für
  Entwickler:innen &amp; Mitarbeitende" mit Verweisen auf CLAUDE.md &amp;
  BILDER.md sowie Dokumentations- und Build-Pflicht.

### 2026-04-16 · Bilder-Neuordnung: flache dayN/-Struktur, Overview-Ordner, Archiv außerhalb public/ ✅
- 10 Bilder aus `dayN-extra/` nach `dayN/` verschoben (flache Struktur)
- 5 Kurs-Übersichtsbilder von `images/` nach `images/overview/` verschoben
- 10 Waisen-Bilder nach `archive/images-unused/` (außerhalb public/, nicht im Build)
- Solo-Ordner `images/day4/` komplett gelöscht (error-fix.png war die einzige Datei)
- Alle 17 Code-Referenzen an neue Pfade angepasst (CourseDay1-5, Kurs, CourseOverview)
- 20+ Inline-🖼️-Kommentare vor jeder `<img>` mit Dateiname + Zweck
- BILDER.md komplett neu geschrieben mit finaler Struktur
- `archive/images-unused/README.md` angelegt mit Rückhol-Anleitung
- **Ergebnis:** Build-Precache von 83 → 72 Einträge, von 64,8 MB → 48,3 MB

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
| 2026-04-16 | Regel Null Schritt 5 (Dokumentationspflicht 🔒) hart festgeschrieben. Komplette Projekt-Chronologie (Phase 1–9) mit allen Commits seit Projektstart eingetragen. |
| 2026-04-16 | PIN-Schutz (1518) für Regel-Null- und Regeländerungen eingeführt. Neuer Abschnitt „🔐 Regeländerungs-Schutz" + neue Claude-Regel Nr. 11. |
| 2026-04-16 | Bugs aus Audit gefixt: Dead-Code-Ordner `src/sections/` gelöscht, Hero-Eintrag aus Datei-Index entfernt, Branch-Angabe (Zeile 75 + Regel 5, mit PIN 1518) auf generische Formulierung umgestellt, Chronologie-Drift „09a"→„09" korrigiert, Gender-Fix-Zeile klarer formuliert. Zusätzlich BILDER.md + `.planning/codebase/STRUCTURE.md` + `ARCHITECTURE.md` entsprechend nachgezogen. |
| 2026-04-16 | Impressum + Datenschutz auf professionelle Wir-Form umgestellt (10 + 4 Ich-Stellen). Passt zum gemeinsamen Angebot nach § 5 DDG / Art. 26 DSGVO (Belkis + Damien). Grep-Verifikation: 0 Ich-Treffer mehr. |
| 2026-04-16 | Fördermappe + Mirror-Downloads auf Team Belkis + Damien: 08-Anschreiben (11 Briefe-Ichs → wir, Unterschriften beider Namen), 09/projekt-uebersicht (1), 07/elternbrief-mirror (1 + Signatur), 10-Canvas (Subtitle), 03-Durchführung (Phasen 1+4, Rollen-Tabelle um Damien), 01+09b Footer „Team:…", foerdermappe/README.md. Schüler-Ichs, Eltern-Ichs und konkrete Workshop-Durchführungs-Nennungen absichtlich unverändert. |
| 2026-04-16 | Finanzierungsplan (05-Kostenplan) + restliche Fördermappe auf Team-Version + Gender-Korrektur: neue Damien-Zeilen (Kooperationen/Förderantragsmanagement 1.350 € + Termin-/Vertragsverwaltung 900 €), BA/DE-Kennzeichnung, Fahrtkosten-Zeile Hardthausen→Ludwigsburg, Gesamt 14.939 € → 17.237 €; Finanzierung Start-up BW 4.000 → 5.000 €, Stiftungen 2.000 → 2.500 €, neue Damien-Honorar-Zeile, Summe 15.000 → 16.500 €. 09+Mirror: Title+Footer „09a" → „09"; 09b: KPI 15.000 → 17.000 € Team-Budget; 09+09b+10: Kontakt-Kästen auf Team, 10-Canvas Kostenstruktur+Ressourcen um Damien. Gender-Fix: „(Haupt-)Antragstellerin" → „(Haupt-)Antragsteller" (Belkis ist männlich). |

# Bilder-Dokumentation · KI-Entdecker

**Diese Datei ist dein zentraler Leitfaden. Wenn du Bilder austauschen
willst, schau hier rein. Alle Pfade, Zwecke und Verwendungsstellen sind
hier dokumentiert.**

---

## Grundregel

| Wo liegen Bilder? | Wie heißen sie? |
|-------------------|-----------------|
| **`public/`** ist der Bild-Ordner für die Website | Pfade werden zu `/KI-Entdecker/…` beim Build |
| **`archive/images-unused/`** außerhalb von `public/` | Nicht im Build – nur für Reserve/Alternativen |
| **Dateinamen** | kleingeschrieben, mit Bindestrich |
| **Formate** | PNG (Standard), WebP (Preview), SVG, GIF/MP4 |

So tauschst du ein Bild aus: **Datei mit gleichem Namen an den gleichen
Pfad legen** – kein Code-Change nötig.

---

## Ordner-Baum (aktuell, konsolidiert)

```
public/
├─ favicon.png                   ← Tab-Icon, 32 × 32 px
├─ apple-touch-icon.png          ← iOS Homescreen, 180 × 180 px
├─ pwa-192x192.png               ← Android Homescreen klein
├─ pwa-512x512.png               ← Android Homescreen groß
├─ gif/
│  ├─ Logo_GIF.gif               ← Logo animiert (dunkel)
│  └─ Logo_GIF_hell.gif          ← Logo animiert (hell · README)
├─ video/
│  └─ Logo_video.mp4             ← Logo-Animation als Video
└─ images/
   ├─ robot-hero.png             ← ★ MASKOTTCHEN (Haupt-Roboter)
   ├─ overview/                  ← Kurs-Übersichtsbilder (Kurs.tsx + CourseOverview.tsx)
   │  ├─ day1-brain.png
   │  ├─ day2-chat.png
   │  ├─ day3-creative.png
   │  ├─ day4-puzzle.png
   │  └─ day5-trophy.png
   ├─ preview/
   │  ├─ zertifikatvorschau.png  (827 KB, 1600×1054)
   │  └─ zertifikatvorschau.webp (162 KB, modern)
   └─ courses/
      ├─ day1/    ← alle Detail-Bilder für Tag 1 (6 Stück)
      ├─ day2/    ← Tag 2 (4 Stück)
      ├─ day3/    ← Tag 3 (5 Stück)
      ├─ day4/    ← Tag 4 (4 Stück)
      └─ day5/    ← Tag 5 (5 Stück)

archive/
└─ images-unused/                ← ausrangierte Bilder, NICHT im Build
   ├─ README.md                  ← Erläuterung + Rückhol-Anleitung
   └─ day{1..5}-*.png            ← 10 Reserve-Bilder
```

**Wichtig:** Seit der Reorganisation gibt es **keine `*-extra/`-Ordner
mehr** – alle Detail-Bilder sind flach in `courses/dayN/` organisiert.

---

## Wo wird welches Bild verwendet?

### Branding & Navigation

| Datei | Verwendet in | Zweck |
|-------|-------------|-------|
| `public/images/robot-hero.png` | `Navigation.tsx`, `Footer.tsx`, `Home.tsx`, `zertifikat.html` | Haupt-Maskottchen |
| `public/favicon.png` | Browser | Tab-Icon |
| `public/apple-touch-icon.png` | iOS | Homescreen-Icon |
| `public/pwa-192x192.png`, `pwa-512x512.png` | `vite.config.ts` | Android/PWA-Icons |
| `public/gif/Logo_GIF_hell.gif` | `README.md` | Animiertes Logo |

### Zertifikat-Vorschau

| Datei | Verwendet in | Zweck |
|-------|-------------|-------|
| `public/images/preview/zertifikatvorschau.webp` | `Home.tsx`, `Materialien.tsx`, `README.md` | Primäres Vorschau-Bild (162 KB) |
| `public/images/preview/zertifikatvorschau.png` | dieselben (Fallback) | Fallback für ältere Browser |

### Kurs-Übersichtskarten (5 Stück)

Neu: unter `public/images/overview/`

| Datei | Tag | Verwendet in |
|-------|-----|-------------|
| `overview/day1-brain.png` | Tag 1 | `Kurs.tsx`, `CourseOverview.tsx` |
| `overview/day2-chat.png` | Tag 2 | dieselben |
| `overview/day3-creative.png` | Tag 3 | dieselben |
| `overview/day4-puzzle.png` | Tag 4 | dieselben |
| `overview/day5-trophy.png` | Tag 5 | dieselben |

Hinweis: `Home.tsx` zeigt für die Kurs-Vorschau eigene Detailbilder aus
`courses/dayN/…` statt die Übersichts-Kacheln – das ist Absicht.

### Detail-Bilder pro Kurstag

Alle unter `public/images/courses/dayN/` (flach, ohne extra-Ordner):

**Tag 1 · Was ist KI? → `courses/day1/`**
| Datei | Verwendet in | Beschreibung |
|-------|-------------|-------------|
| `robot-confused.png` | `CourseDay1.tsx`, `Home.tsx` | Opener (verwirrter Roboter) |
| `brain-circuits.png` | `CourseDay1.tsx` (2x) | Gehirn mit Schaltkreisen |
| `robot-learning.png` | `CourseDay1.tsx` | Lernender Roboter |
| `ai-vs-program.png` | `CourseDay1.tsx` | Vergleichsgrafik |
| `chatbot-friendly.png` | `CourseDay1.tsx` | Chatbot-Demo |
| `robot-teacher.png` | `CourseDay1.tsx` | FAQ-Section |

**Tag 2 · Prompt Engineering → `courses/day2/`**
| Datei | Verwendet in | Beschreibung |
|-------|-------------|-------------|
| `magic-prompt.png` | `CourseDay2.tsx` (2x), `Home.tsx` | Zauber-Prompt (Opener + Wrap-up) |
| `robot-speaking.png` | `CourseDay2.tsx` | Sprechender Roboter |
| `five-stars-recipe.png` | `CourseDay2.tsx` | 5-Sterne-Rezept |
| `prompt-transformation.png` | `CourseDay2.tsx` | Vorher/Nachher |

**Tag 3 · Kreativ mit KI → `courses/day3/`**
| Datei | Verwendet in | Beschreibung |
|-------|-------------|-------------|
| `art-easel.png` | `CourseDay3.tsx`, `Home.tsx` | Opener (Staffelei) |
| `robot-painting.png` | `CourseDay3.tsx` | Maler-Roboter (Text-zu-Bild) |
| `story-magic.png` | `CourseDay3.tsx` | Geschichten-Magie |
| `robot-artist.png` | `CourseDay3.tsx` | Kreativ-Projekte |
| `robot-artist-painting.png` | `CourseDay3.tsx` | FAQ-Section |

**Tag 4 · Problemlösen → `courses/day4/`**
| Datei | Verwendet in | Beschreibung |
|-------|-------------|-------------|
| `puzzle-solution.png` | `CourseDay4.tsx`, `Home.tsx` | Opener |
| `robot-math.png` | `CourseDay4.tsx` | Mathe-Schritt-für-Schritt |
| `magnifying-glass.png` | `CourseDay4.tsx` | Recherche |
| `robot-problem-solver.png` | `CourseDay4.tsx` (2x) | Problem-Löser (Korrektur + Abschluss) |

**Tag 5 · Abschlussprojekt → `courses/day5/`**
| Datei | Verwendet in | Beschreibung |
|-------|-------------|-------------|
| `trophy-celebration.png` | `CourseDay5.tsx` (2x), `Home.tsx` | Trophäe (Opener + Abschluss-Screen) |
| `robot-presentation.png` | `CourseDay5.tsx` | Projekt-Vorstellung |
| `rocket-launch.png` | `CourseDay5.tsx` | Raketenstart (Motivation) |
| `robot-graduate.png` | `CourseDay5.tsx` | Absolvent-Roboter |
| `certificate.png` | `CourseDay5.tsx` | Zertifikat-Thumbnail |

---

## Archiv: nicht verwendete Bilder

Liegen unter `archive/images-unused/`. **Nicht im Build**, sind aber im
Git versioniert. Details & Rückhol-Anleitung: `archive/images-unused/README.md`.

---

## So tauschst du ein Bild aus

### Bestehendes Bild ersetzen
Gleicher Name, gleicher Pfad → kein Code-Change:
```bash
cp neu.png public/images/robot-hero.png
```

### Neues Bild hinzufügen
1. Datei in passenden Unterordner legen (`public/images/courses/dayX/…`)
2. In der TSX-Datei einen `<img src={buildAssetUrl('images/courses/dayX/…')}/>` einfügen
3. **Kommentar mit 🖼️ direkt davor** (so wie alle anderen) – siehe bestehende Stellen
4. `BILDER.md` + ggf. `CLAUDE.md` aktualisieren
5. Build + Lint + Commit

### Bild komprimieren
```bash
node -e "require('sharp')('ein.png').resize(1200).png({quality:85}).toFile('aus.png')"
```

---

## Service Worker / PWA-Cache

In `vite.config.ts`:
```ts
globPatterns: ['**/*.{js,css,html,png,jpg,svg,woff2,webp,pdf}']
```

Alle Bilder aus `public/` landen im PWA-Cache. `archive/` liegt außerhalb
von `public/` und wird **nicht** mit deployed.

**Nach Bild-Änderungen:** Nutzer brauchen einen Seiten-Reload, damit der
Service Worker das neue Bild lädt.

---

**Stand:** April 2026 · zuletzt reorganisiert: flache `dayN/`-Struktur,
Overview-Unterordner, Waisen-Archiv außerhalb von `public/`

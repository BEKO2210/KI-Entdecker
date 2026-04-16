# Bilder-Dokumentation · KI-Entdecker

**Diese Datei ist dein zentraler Leitfaden. Wenn du Bilder austauschen
willst, schau hier rein. Alle Pfade, Zwecke und Verwendungsstellen sind
hier dokumentiert.**

---

## Grundregel

| Wo liegen Bilder? | Wie heißen sie? |
|-------------------|-----------------|
| **`public/`** ist der Bild-Ordner | Der Pfad, den der Build später unter `/KI-Entdecker/…` veröffentlicht |
| **Dateinamen sind kleingeschrieben** | mit Bindestrich, z. B. `robot-hero.png` |
| **Formate** | PNG (Standard), WebP (Preview), SVG (Icons), GIF/MP4 (Logo-Animation) |

So tauschst du ein Bild aus: **Datei mit gleichem Namen an den gleichen
Pfad legen** — das war's. Kein Code muss geändert werden.

---

## Ordner-Übersicht

```
public/
├─ favicon.png                   ← Tab-Icon, 32 × 32 px
├─ apple-touch-icon.png          ← iOS Homescreen, 180 × 180 px
├─ pwa-192x192.png               ← Android Homescreen klein
├─ pwa-512x512.png               ← Android Homescreen groß
├─ gif/
│  ├─ Logo_GIF.gif               ← Logo animiert (dunkle Variante)
│  └─ Logo_GIF_hell.gif          ← Logo animiert (helle Variante · README)
├─ video/
│  └─ Logo_video.mp4             ← Logo-Animation als Video
└─ images/
   ├─ robot-hero.png             ← ★ MASKOTTCHEN (Haupt-Roboter)
   │                                Verwendet: Navigation, Footer, Hero
   ├─ preview/
   │  ├─ zertifikatvorschau.png  ← Zertifikat-Vorschau (827 KB, 1600×1054)
   │  └─ zertifikatvorschau.webp ← Zertifikat-Vorschau (162 KB, modern)
   ├─ day1-brain.png             ← Kurs-Übersichtsbild Tag 1 (Gehirn)
   ├─ day2-chat.png              ← Kurs-Übersichtsbild Tag 2 (Chat)
   ├─ day3-creative.png          ← Kurs-Übersichtsbild Tag 3 (Kreativ)
   ├─ day4-puzzle.png            ← Kurs-Übersichtsbild Tag 4 (Puzzle)
   ├─ day5-trophy.png            ← Kurs-Übersichtsbild Tag 5 (Trophy)
   └─ courses/                   ← Detail-Bilder pro Kurstag
      ├─ day1/                   ← Detail-Bilder Tag 1
      ├─ day1-extra/             ← Zusätzliche Tag-1-Bilder
      ├─ day2/                   ← Detail-Bilder Tag 2
      ├─ day2-extra/             ← Zusätzliche Tag-2-Bilder
      ├─ day3/                   ← Detail-Bilder Tag 3
      ├─ day3-extra/             ← Zusätzliche Tag-3-Bilder
      ├─ day4/                   ← Detail-Bilder Tag 4
      ├─ day4-extra/             ← Zusätzliche Tag-4-Bilder
      ├─ day5/                   ← Detail-Bilder Tag 5
      └─ day5-extra/             ← Zusätzliche Tag-5-Bilder
```

---

## Wo wird welches Bild verwendet?

### Branding & Navigation

| Datei | Verwendet in | Zweck |
|-------|-------------|-------|
| `public/images/robot-hero.png` | `src/components/Navigation.tsx`, `src/components/Footer.tsx`, `src/pages/Home.tsx`, `src/sections/Hero.tsx`, `public/downloads/zertifikat.html` | Haupt-Maskottchen |
| `public/favicon.png` | automatisch vom Browser | Tab-Icon |
| `public/apple-touch-icon.png` | automatisch von iOS | Homescreen-Icon iOS |
| `public/pwa-192x192.png` | `vite.config.ts` (PWA) | Android Homescreen klein |
| `public/pwa-512x512.png` | `vite.config.ts` (PWA) | Android Homescreen groß + maskable |
| `public/gif/Logo_GIF_hell.gif` | `README.md` | Animiertes Logo im README |

### Zertifikat-Vorschau

| Datei | Verwendet in | Zweck |
|-------|-------------|-------|
| `public/images/preview/zertifikatvorschau.webp` | `src/pages/Home.tsx`, `src/pages/Materialien.tsx`, `README.md` | Primäres Vorschau-Bild (modern, 162 KB) |
| `public/images/preview/zertifikatvorschau.png` | dieselben (Fallback) | Fallback für ältere Browser (827 KB) |

### Kurs-Übersicht (5 Karten)

Diese 5 Bilder erscheinen als Vorschau-Karten auf `/` (Home) und `/kurs`:

| Datei | Tag | Verwendung |
|-------|-----|------------|
| `public/images/day1-brain.png` | Tag 1 | `src/pages/Kurs.tsx`, `src/sections/CourseOverview.tsx` |
| `public/images/day2-chat.png` | Tag 2 | dieselben |
| `public/images/day3-creative.png` | Tag 3 | dieselben |
| `public/images/day4-puzzle.png` | Tag 4 | dieselben |
| `public/images/day5-trophy.png` | Tag 5 | dieselben |

**Hinweis:** `Home.tsx` verwendet für die Kurs-Karten eine andere Auswahl
(siehe nächste Tabelle: `courses/dayN/…`). Das ist Absicht — Home zeigt
stimmungsvollere Illustrationen, Kurs.tsx zeigt die einheitlichen Kacheln.

### Detail-Bilder pro Kurstag

Diese werden innerhalb der Kurstag-Seiten (`src/pages/CourseDay{1..5}.tsx`)
verwendet.

**Tag 1 · Was ist KI?** (5 Bilder aktiv)
| Datei | Verwendet an |
|-------|-------------|
| `courses/day1/robot-confused.png` | `CourseDay1.tsx:109`, `Home.tsx:41` |
| `courses/day1/brain-circuits.png` | `CourseDay1.tsx:209`, `CourseDay1.tsx:239` |
| `courses/day1/robot-learning.png` | `CourseDay1.tsx:478` |
| `courses/day1-extra/ai-vs-program.png` | `CourseDay1.tsx:270` |
| `courses/day1-extra/chatbot-friendly.png` | `CourseDay1.tsx:659` |
| `courses/day1-extra/robot-teacher.png` | `CourseDay1.tsx:899` |

**Tag 2 · Prompt Engineering** (5 Bilder aktiv)
| Datei | Verwendet an |
|-------|-------------|
| `courses/day2/magic-prompt.png` | `CourseDay2.tsx:113`, `CourseDay2.tsx:878`, `Home.tsx:53` |
| `courses/day2/robot-speaking.png` | `CourseDay2.tsx:213` |
| `courses/day2-extra/five-stars-recipe.png` | `CourseDay2.tsx:445` |
| `courses/day2-extra/prompt-transformation.png` | `CourseDay2.tsx:673` |

**Tag 3 · Kreativ mit KI** (5 Bilder aktiv)
| Datei | Verwendet an |
|-------|-------------|
| `courses/day3/art-easel.png` | `CourseDay3.tsx:90`, `Home.tsx:65` |
| `courses/day3/robot-painting.png` | `CourseDay3.tsx:178` |
| `courses/day3/robot-artist.png` | `CourseDay3.tsx:565` |
| `courses/day3-extra/story-magic.png` | `CourseDay3.tsx:396` |
| `courses/day3-extra/robot-artist-painting.png` | `CourseDay3.tsx:714` |

**Tag 4 · Problemlösen** (4 Bilder aktiv)
| Datei | Verwendet an |
|-------|-------------|
| `courses/day4/puzzle-solution.png` | `CourseDay4.tsx:65`, `Home.tsx:77` |
| `courses/day4/robot-math.png` | `CourseDay4.tsx:118` |
| `courses/day4/magnifying-glass.png` | `CourseDay4.tsx:218` |
| `courses/day4/robot-problem-solver.png` | `CourseDay4.tsx:330`, `CourseDay4.tsx:453` |

**Tag 5 · Abschlussprojekt** (5 Bilder aktiv)
| Datei | Verwendet an |
|-------|-------------|
| `courses/day5/trophy-celebration.png` | `CourseDay5.tsx:80`, `CourseDay5.tsx:433`, `Home.tsx:89` |
| `courses/day5/robot-presentation.png` | `CourseDay5.tsx:138` |
| `courses/day5/rocket-launch.png` | `CourseDay5.tsx:226` |
| `courses/day5/robot-graduate.png` | `CourseDay5.tsx:326` |
| `courses/day5/certificate.png` | `CourseDay5.tsx:529` |

---

## Derzeit nicht verwendete Bilder (Waisen) – mit Einbau-Vorschlägen

Diese Dateien liegen im Repo, werden aber nirgends eingebunden. Build
wird dadurch aktuell um ca. **3–5 MB größer** als nötig.

**Wichtig:** Die Seite ist live. Jede Änderung an bestehenden Bildreferenzen
ist riskant. Zusätzliche `<img>`-Tags einzubauen ist dagegen sicher
(rein additiv, alter Code bleibt intakt).

| Datei | Status | Einbau-Vorschlag |
|-------|--------|-------------------|
| `public/images/courses/day1/chat-window.png` | ❔ | könnte bei Tag 1 Lektion 3 „Dein erster Chatbot" als Icon/Teaser verwendet werden |
| `public/images/courses/day1/robot-idea.png` | ❔ | Alternative Opener oder im „Was kann KI?"-Abschnitt |
| `public/images/courses/day2/five-stars.png` | 🔁 | Duplikat / Alternative zu aktivem `five-stars-recipe.png` |
| `public/images/courses/day2/robot-success.png` | 🗑️ | Löschen-Kandidat — keine Stelle, wo es natürlich passt |
| `public/images/courses/day2/writing-pad.png` | ❔ | in „Prompt-Übungen" (CourseDay2:250-300) als dekoratives Icon |
| `public/images/courses/day2-extra/prompt-magic.png` | 🔁 | Duplikat / Alternative zu `magic-prompt.png` |
| `public/images/courses/day3/music-notes.png` | ✅ | **passt!** In CourseDay3 bei „Musik & Songtexte" (Zeile ~125, 160) als Abschnitts-Icon |
| `public/images/courses/day3/story-book.png` | 🔁 | Alternative zu bereits aktivem `story-magic.png` |
| `public/images/courses/day4-extra/robot-detective.png` | ❔ | „Fehler finden & korrigieren"-Abschnitt in Tag 4 |
| `public/images/courses/day5-extra/graduation-celebration.png` | 🔁 | Alternative zu `trophy-celebration.png` |
| `public/images/day4/error-fix.png` | 🗑️ | Liegt in falschem Ordner (`images/day4/` statt `courses/day4/`). Keine Referenz. |

**Legende:** ✅ passt wo rein / ❔ könnte optional rein / 🔁 Duplikat / 🗑️ Löschen-Kandidat

**Zum Löschen** (falls du willst):
```bash
rm public/images/courses/day1/chat-window.png \
   public/images/courses/day1/robot-idea.png \
   public/images/courses/day2/five-stars.png \
   public/images/courses/day2/robot-success.png \
   public/images/courses/day2/writing-pad.png \
   public/images/courses/day2-extra/prompt-magic.png \
   public/images/courses/day3/music-notes.png \
   public/images/courses/day3/story-book.png \
   public/images/courses/day4-extra/robot-detective.png \
   public/images/courses/day5-extra/graduation-celebration.png \
   public/images/day4/error-fix.png
rmdir public/images/day4 2>/dev/null
```

---

## So tauschst du ein Bild aus

### 1. Einfaches Austauschen (gleicher Name)
Datei an denselben Pfad legen, gleichen Namen behalten → kein Code-Change nötig.

```bash
cp mein-neues-bild.png public/images/robot-hero.png
```

### 2. Bild komprimieren vor dem Commit
Große Bilder (> 500 KB) solltest du vorher komprimieren, sonst wird
der Build langsam.

```bash
# Mit sharp (bereits im Projekt installiert):
node -e "require('sharp')('eingabe.png').resize(1200).png({quality:85}).toFile('ausgabe.png')"
```

### 3. Neues Bild hinzufügen
1. Datei in passenden Unterordner legen (`public/images/courses/dayX/`)
2. In der entsprechenden TSX-Datei den Import via `buildAssetUrl(...)` einbauen
3. Diesen `BILDER.md`-Guide aktualisieren

---

## Service Worker / PWA-Cache

Alle Bilder werden automatisch in den Service-Worker-Cache aufgenommen.
Das ist in `vite.config.ts` konfiguriert:

```ts
globPatterns: ['**/*.{js,css,html,png,jpg,svg,woff2,webp,pdf}']
```

**Wichtig:** Wenn du ein Bild veränderst, bekommen Nutzer erst beim
nächsten Seiten-Reload die neue Version (Service-Worker-Update).

---

## Weitere Bild-Orte (außerhalb von public/)

Im `foerdermappe/`-Ordner und `public/downloads/`-Ordner gibt es keine
Bild-Dateien — die PDFs/HTML-Dokumente sind ausschließlich textbasiert mit
CSS-Styling. Änderungen an Layout-Farben etc. erfolgen direkt im jeweiligen
HTML-Dokument.

---

**Stand:** April 2026 · bei Änderungen diese Datei aktualisieren.

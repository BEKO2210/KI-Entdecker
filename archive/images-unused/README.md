# Archiv: ungenutzte Bilder

Diese Bilder liegen **außerhalb** von `public/` und werden dadurch
**nicht im Web-Build** mitgenommen (kein PWA-Cache, kein Deployment
auf GitHub Pages).

Sie sind versioniert (Git), falls wir sie später in die Website
zurückholen wollen.

## Inhalt

| Datei | Ursprung | Empfehlung |
|-------|----------|------------|
| `day1-chat-window.png` | `images/courses/day1/chat-window.png` | Alternative-Icon für Chatbot-Abschnitt |
| `day1-robot-idea.png` | `images/courses/day1/robot-idea.png` | Alternativ-Opener Tag 1 |
| `day2-five-stars.png` | `images/courses/day2-extra/five-stars.png` | Duplikat zu aktivem `five-stars-recipe.png` |
| `day2-robot-success.png` | `images/courses/day2/robot-success.png` | Löschbar (keine Stelle passt) |
| `day2-writing-pad.png` | `images/courses/day2/writing-pad.png` | Dekoration für Prompt-Übungen |
| `day2-prompt-magic.png` | `images/courses/day2-extra/prompt-magic.png` | Duplikat zu aktivem `magic-prompt.png` |
| `day3-music-notes.png` | `images/courses/day3/music-notes.png` | **Passt zu „Musik & Songtexte" Tag 3** |
| `day3-story-book.png` | `images/courses/day3/story-book.png` | Alternative zu aktivem `story-magic.png` |
| `day4-robot-detective.png` | `images/courses/day4-extra/robot-detective.png` | „Fehler finden"-Abschnitt Tag 4 |
| `day5-graduation-celebration.png` | `images/courses/day5-extra/graduation-celebration.png` | Alternative zu `trophy-celebration.png` |

## So holst du ein Bild zurück in die Website

1. Datei zurück in den passenden `public/images/courses/dayN/`-Ordner verschieben:
   ```bash
   git mv archive/images-unused/day3-music-notes.png public/images/courses/day3/music-notes.png
   ```
2. In der passenden `src/pages/CourseDayN.tsx`-Datei ein `<img>`-Tag einfügen:
   ```tsx
   <img
     src={buildAssetUrl('images/courses/day3/music-notes.png')}
     alt="Musiknoten"
     className="w-24 h-24 mx-auto"
   />
   ```
3. `BILDER.md` entsprechend aktualisieren.
4. Build + Lint + Commit.

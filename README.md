# KI-Entdecker

Ein interaktiver KI-Kurs für junge Entdecker. Entdecke die Welt der Künstlichen Intelligenz – spielerisch, verständlich und mit echten Projekten.

## 🚀 Live Demo

Die Webseite ist live unter: [https://beko2210.github.io/KI-Entdecker/](https://beko2210.github.io/KI-Entdecker/)

## 📋 Inhalt

- **5 Tage KI-Abenteuer**: Von den Grundlagen bis zum Abschlussprojekt
- **Interaktive Lektionen**: Videos, Übungen und Projekte
- **Badges sammeln**: Motivierendes Belohnungssystem
- **Arbeitsblätter**: Zum Ausdrucken oder digital Ausfüllen
- **Eltern-Guide**: Umfassende Informationen für Eltern

## 🛠️ Technologien

- React + TypeScript
- Tailwind CSS
- React Router
- Vite
- Local Storage für Fortschritte

## 📦 Installation & Entwicklung

```bash
# Repository klonen
git clone https://github.com/beko2210/KI-Entdecker.git
cd KI-Entdecker

# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev

# Build erstellen
npm run build
```

## 🚀 Deployment auf GitHub Pages

### 1. Repository Einstellungen

1. Gehe zu deinem GitHub Repository
2. Klicke auf **Settings**
3. Wähle im linken Menü **Pages**
4. Unter **Build and deployment** wähle:
   - **Source**: GitHub Actions

### 2. Workflow aktivieren

Der Workflow ist bereits konfiguriert (`.github/workflows/deploy.yml`). Er wird automatisch ausgeführt:

- Bei jedem Push auf `main` oder `master`
- Manuell über die Actions-Registerkarte

### 3. Ersten Deploy auslösen

```bash
# Änderungen committen und pushen
git add .
git commit -m "Initial commit"
git push origin main
```

Nach dem Push wird der Workflow automatisch gestartet. Du kannst den Fortschritt unter **Actions** in deinem Repository verfolgen.

### 4. URL anpassen (wichtig!)

Nach dem ersten Deploy:

1. Gehe zu **Settings** → **Pages**
2. Die URL wird angezeigt (z.B. `https://beko2210.github.io/KI-Entdecker/`)
3. Passe die `vite.config.ts` an:

```typescript
export default defineConfig({
  base: '/KI-Entdecker/',  // <-- Dein Repository-Name
  // ...
});
```

4. Commite und pushe die Änderung

## 📁 Projektstruktur

```
app/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions Workflow
├── public/
│   └── images/                 # Bilder und Assets
├── src/
│   ├── components/             # Wiederverwendbare Komponenten
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── hooks/
│   │   └── useProgress.ts      # Local Storage Hook für Fortschritte
│   ├── pages/                  # Seiten-Komponenten
│   │   ├── Home.tsx
│   │   ├── Kurs.tsx
│   │   ├── Materialien.tsx
│   │   ├── Eltern.tsx
│   │   ├── Wochenplan.tsx
│   │   ├── Impressum.tsx
│   │   └── Datenschutz.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎯 Features

### Fortschrittsspeicherung
- Fortschritte werden im Browser Local Storage gespeichert
- Keine Anmeldung nötig
- Daten bleiben auf dem Gerät
- Fortschritt kann zurückgesetzt werden

### Responsive Design
- Optimiert für Desktop, Tablet und Mobile
- Touch-freundliche Bedienung
- Schnelle Ladezeiten

### Barrierefreiheit
- Semantisches HTML
- ARIA-Labels
- Tastaturnavigation
- Reduced Motion Support

## 📝 Seiten

| Seite | Pfad | Beschreibung |
|-------|------|--------------|
| Startseite | `/` | Hero-Bereich mit Überblick |
| Der Kurs | `/kurs` | Alle 5 Tage mit Fortschritt |
| Materialien | `/materialien` | Downloads und Ressourcen |
| Für Eltern | `/eltern` | Informationen und FAQ |
| Wochenplan | `/wochenplan` | Detaillierter Zeitplan |
| Impressum | `/impressum` | Rechtliche Angaben |
| Datenschutz | `/datenschutz` | Datenschutzerklärung |

## 🔒 Datenschutz

- Keine Cookies
- Keine Tracking-Tools
- Keine Datenweitergabe
- Fortschritte nur lokal gespeichert
- DSGVO-konform

## 📧 Kontakt

Bei Fragen oder Anregungen:

**Belkis Aslani**  
Vogelsangstraße 32  
71691 Freiberg am Neckar  
E-Mail: [belkis.aslani@gmail.com](mailto:belkis.aslani@gmail.com)

## 📄 Lizenz

Dieses Projekt ist Open Source und unter der MIT-Lizenz verfügbar.

---

Gemacht mit ❤️ für junge Entdecker

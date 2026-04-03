# GitHub Pages Setup Anleitung

## Schritt 1: Repository erstellen

1. Gehe zu [GitHub](https://github.com)
2. Klicke auf **New Repository**
3. Repository-Name: `KI-Entdecker`
4. Wähle **Public**
5. Klicke auf **Create repository**

## Schritt 2: Dateien hochladen

### Option A: Über GitHub Web Interface

1. In deinem neuen Repository klicke auf **uploading an existing file**
2. Lade alle Dateien aus dem `app`-Ordner hoch
3. Commite die Änderungen

### Option B: Über Git Command Line

```bash
# In den app-Ordner wechseln
cd /pfad/zu/app

# Git initialisieren
git init

# Alle Dateien hinzufügen
git add .

# Committen
git commit -m "Initial commit"

# Remote hinzufügen (ersetze USERNAME mit deinem GitHub-Namen)
git remote add origin https://github.com/beko2210/KI-Entdecker.git

# Pushen
git push -u origin main
```

## Schritt 3: GitHub Pages aktivieren

1. Gehe zu deinem Repository auf GitHub
2. Klicke auf **Settings** (oben rechts)
3. Wähle im linken Menü **Pages**
4. Unter **Build and deployment**:
   - **Source**: Wähle **GitHub Actions**
5. Die Einstellung wird automatisch gespeichert

## Schritt 4: Ersten Deploy auslösen

Der Workflow wird automatisch ausgeführt, wenn du auf `main` oder `master` pushst.

Um den Deploy manuell zu starten:

1. Gehe zu **Actions** in deinem Repository
2. Wähle den Workflow **Deploy to GitHub Pages**
3. Klicke auf **Run workflow**

## Schritt 5: Warten und überprüfen

1. Der Workflow braucht ca. 2-3 Minuten
2. Du kannst den Fortschritt unter **Actions** verfolgen
3. Wenn der Workflow grün ist (✓), ist die Seite live
4. Die URL findest du unter **Settings** → **Pages**

## Deine URL wird sein:

```
https://beko2210.github.io/KI-Entdecker/
```

## Fehlerbehebung

### 404 Fehler bei Unterseiten

Wenn du direkt auf eine Unterseite zugreifst (z.B. `/kurs`) und einen 404-Fehler bekommst:

1. Stelle sicher, dass die `404.html` im `dist`-Ordner ist
2. Warte 1-2 Minuten nach dem Deploy (GitHub Pages braucht Zeit)
3. Leere deinen Browser-Cache

### Bilder werden nicht angezeigt

1. Prüfe, dass alle Bilder im `public/images`-Ordner sind
2. Stelle sicher, dass die Bilder im `dist/images`-Ordner nach dem Build sind

### Änderungen werden nicht angezeigt

1. Warte 1-2 Minuten (GitHub Pages Caching)
2. Drücke `Ctrl+Shift+R` (Hard Reload)
3. Leere den Browser-Cache

## Wichtige Dateien

- `.github/workflows/deploy.yml` - Der Deployment-Workflow
- `vite.config.ts` - Build-Konfiguration mit `base: '/KI-Entdecker/'`
- `public/404.html` - Für SPA-Routing auf GitHub Pages

## Support

Bei Problemen:
1. Prüfe die Actions-Logs unter **Actions** → **Deploy to GitHub Pages**
2. Öffne ein Issue in deinem Repository
3. Kontaktiere: belkis.aslani@gmail.com

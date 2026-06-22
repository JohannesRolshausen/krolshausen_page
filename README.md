# Fokus Text – Katharina Rolshausen

Website für Katharina Rolshausen (Journalistin, Gastrokolumnistin, PR-Redaktion u. a.), gebaut mit React, TypeScript und Vite.

## Entwicklung

```bash
npm install
npm run dev
```

Die App läuft lokal unter [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Erzeugt die Produktionsversion im Ordner `dist/`.

## Deployment auf GitHub Pages

Das Projekt nutzt [`gh-pages`](https://github.com/tschaub/gh-pages), um den Build automatisch auf GitHub Pages zu veröffentlichen.

### Einmalige Einrichtung auf GitHub

1. Repository auf GitHub öffnen: [JohannesRolshausen/krolshausen_page](https://github.com/JohannesRolshausen/krolshausen_page)
2. **Settings** → **Pages**
3. Unter **Build and deployment** → **Source** wählen: **Deploy from a branch**
4. Branch: **`gh-pages`**, Ordner: **`/ (root)`**
5. **Save** klicken

### Deploy ausführen

Voraussetzung: Du bist eingeloggt und hast Schreibrechte auf das Repository (Git remote `origin` muss auf GitHub zeigen).

```bash
npm run deploy
```

Das Skript führt automatisch `npm run build` aus und pusht den Inhalt von `dist/` auf den Branch `gh-pages`.

Nach ein paar Minuten ist die Seite erreichbar unter:

**https://johannesrolshausen.github.io/krolshausen_page/**

### Hinweise

- Die `base`-URL in `vite.config.ts` ist auf `/krolshausen_page/` gesetzt (Projekt-URL auf GitHub Pages).
- React Router nutzt denselben Pfad über `import.meta.env.BASE_URL`.
- Für direkte Aufrufe von Unterseiten wird beim Build eine `404.html` erzeugt (Kopie von `index.html`), damit Client-Routing auf GitHub Pages funktioniert.
- Bei jedem erneuten Deploy einfach wieder `npm run deploy` ausführen.

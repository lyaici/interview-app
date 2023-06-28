# Follow Beers

## An interview dedicated App

<img src="./doc/screenshot.png" alt="Follow-Beers screenshot" />

### Presentation

**Follow Beers** is a functional app. It's composed by a Node.js API and a React front

- [API documentation _./api/README.md_](./api/README.md)
- [React front documentation _./front/README.md_](./front/README.md)

### Bilan

**Mauvaises pratiques:**

- Ce projet n'utilise pas Typescript,
- Ce projet n'utilise pas d'outil de formattage du code, le code n'est pas formatter, ni formattable avec des raccourcis via vscode par exemple (e.g: à la sauvegarde)
- Aucune règle n'est défini, chaque développeur peut donc écrire du code comme bon lui semble formatter ou pas
- Le projet utilise à la fois du .css et du .scss
- L'utilité de séparer en plusieurs fichiers dans certains dossiers. Par exemple le dossier pages/form (Form.component, Form.container pour redux et Form.lazycomponent pour suspense)
- Ce projet utilise une class (Component/render) dans App.jsx
- Duplication de bloc de code dans certains fichiers SCSS

**Axes d'amélioration:**

- Installer et utiliser Typescript pour typer le code
- Installer, configurer des outils comme prettier, eslint, stylelint ... pour formatter le code, le rendre lisible et agréable à lire avec les même règles à suivre par tous les membres de l'équipe.
- L'utilisation de .scss seul aurait suffit dans le projet pour la stylisation
- Accédez aux props utilisés à plusieurs endroits directement en connectant le composant concerné au store redux et utiliser la donnée concernée depuis ce composant
- Évitez de passer une prop à plusieurs niveaux (e.g: la prop "loading"), le cas échéant définir un niveau, une limite
- Profitez des Hooks sans avoir à écrire une classe, un constructor, un render, this et setState...
- L'utilisation de redux peut être simplifier, redux-saga commence à se faire vieux
- Merger les styles communs pour éviter les duplications
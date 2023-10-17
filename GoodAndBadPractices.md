# 🚫 **Bad Practices**

## `Package.json`

- Packages obsolètes (ex: React en version 16.12 au lieu de la version 18.2, axios entre autres) => Problèmes de sécurité et compatibilités
- Utilisation de "recompose" qui n'est plus maintenu ni conseillé par les créateurs

## `store.js`

- L'utilisation de 'window' est orientée client et peut poser problème en SSR (cf. voir fichier `store.json` pour une solution)

## `Form.component.jsx`

- Plutôt une erreur qu'une mauvaise pratique, le type de l'input pour l'IBU est de type "IBU" au lieu de "number"

---

# ✅ **Good Practices**

## `Package.json`

- Utilisation de Prettier pour le formattage du code
- Ajouter des scripts pour faciliter le lancement de l'application en mode dev (ex: npm run dev) ou en mode prod.

## `App.scss`

- Utilisation de variable de style

## `beers.saga.js`

- Utilisation de try catch pour la gestion des erreurs suite aux call API

## `beers.reducer.js`

- Bonne gestion des états avec le principe d'immutabilité (aucune modification direct de l'initialState)

## `Form.lazycomponent.jsx`

- Utilisation de React.lazy pour ne charger le composant qu'au moment nécessaire

## `Form.component.jsx`

- Gestion de l'état pour désactiver ou non le bouton de submit si des champs ne sont pas remplis ou si le formulaire vient d'être submit (évite multiple call API)

## Global

- Structure des fichiers bien gérée. (ex: `input.component.jsx`)
- Les exports en "barrel" (ex: export { Input } from "./Input.component";)

---

# 🛠️ **Points d'amélioration**

- Mettre à jour les packages
- Remplacer les class components par les functionnal components
- remplacer le code n'utilisant pas et pouvant utiliser des React hooks (ex: componentDidMount() => useEffect)
- Validation des forms
- Implémenter des tests unitaires
- Mettre Typescript en place
- Ajout de métriques d'utilisation (ex: google analytics & tag manager)
- Rendre les composants responsive
- Eviter au maximum l'insertion de logique dans le jsx mais préférer la création de fonction pour une meilleure clarté

---

# ⭐ **Optionnel**

- Fichier index.js du dossier "rate" est vide
- Fichier Form.component.jsx plusieurs variables non utilisées (loading, setSubmitting)

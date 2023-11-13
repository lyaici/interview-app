## Redux-saga et React-query

Pour ce test j'ai réalisé une migration de redux-saga vers react-query

Pourquoi React-query ?
 - Simplicité : gestion des états de données, réduisant la complexité du code.
 - Productivité : Moins de code à écrire et à maintenir.
 - Performance : Meilleure gestion du cache et des mises à jour des données.
 - Moins de Boilerplate : Réduction du code nécessaire pour les actions et les réducteurs.

Redux-saga est un outils très puissant mais qui demande beaucoup de code pour gérer les actions et les reducers.

Une cohabitaiton entre les deux librairies est possible.

## Organisation du code

J'ai apprécié la convention de nommage des fichiers nom.reducer.js.
De manière générale, j'ai trouvé le code bien organisé et facile à lire.


J'ai ajouté redux-logger que je préfère à redux-devtools-extension. Les logs étant dans la console.

## Piste à explorer/à garder en tête

Checker de temps en temps Formik. Formik étant possiblement en fin de vie. Il ne faudrait pas se retrouver bloqué.
https://github.com/jaredpalmer/formik/issues/3601


Permettre de lancer le server et le client en une commande: https://www.npmjs.com/package/concurrently



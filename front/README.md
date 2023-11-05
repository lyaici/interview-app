This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Libraries

This app is build with the following libraries

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux-Saga](https://redux-saga.js.org/)
- [Axios](https://github.com/axios/axios)
- [Sass](https://sass-lang.com/)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# **Analyse de la Codebase**

## **Bonnes pratiques observées**

La séparation claire entre les fichiers de l'interface utilisateur et ceux de la logique métier améliore la lisibilité du projet et en facilite la maintenance.
Néanmoins cela augmente considérablement la taille de l'arborescence du projet.

## **Axes d'améliorations**

Renforcer la qualité et la maintenabilité du code avec l'utilisation de Typescript pour réduire les potentiels erreurs.

Maintenir à jour les packages.

Implémenter des tests unitaires. 

## **Mauvaises pratiques observées**

Pour un projet de petite envergure, il est souvent plus approprié d'utiliser le hook `useContext` pour la gestion de l'état global au lieu de mettre en place une solution plus complexe comme Redux. Cela permet de simplifier l'architecture et de réduire la surcharge.

La liste de Beers se re-render plusieurs fois, enquêter sur les causes et si nécecssaire penser à l'utiliser de la la memoization.

Il est recommandé d'implémenter le mode strict de React, qui peut nous aider à repérer les composants qui pourraient être à l'origine de comportements inattendus.

Good:

- Structure du projet propre
- Nomenclature des fichiers constante
- Redux claire avec un découpage propre
- Utilisation des composant react en mode fonction
- Utilisation des lazy component
- Ordre des imports

Bad:

- Utilisation des path relatif (Rajouter des alias, améliore les refact)
- Utilisation d'un composant class dans App.tsx à changer en fonction
- Naming des class sans majuscules
- le composant header devrais être utilisé dans Header
- Mettre à jour react-router-dom pour générer les routes avec createBrowserRouter. Mettre à jour les dépendances en règle général.
- Utiliser les hooks plutôt que les lifecycle dans les containers
- Faire attention au div non-nécessaire (exemple dans la page List ou on peux retourner un fragment)
- Naming des props (exemple dans la page List avec "loading" qui est un boolean et qui devrais être "isLoading")
- Faire attention au propsDrilling (Exemple dans BeerList avec le "loading" qui pourrait être récupérer avec un useSelector)
- Extraire la logique dans des fonctions du composants (Exemple sur BeerForm avec le validate qui pourrait être un useCallback nomé onValidate)
- Utiliser un schema de validation avec Yup, Zod ou encore Joi
- Rajouter une config linter
- Dans le composant Input, pas besoin de redéclarer les props par défaut du composant HTML input. Déstructurer uniquement les props qui ont besoin d'un computed { valid, value, autoCapitalize, ...props }
- Le composant Button retourne deux types de composant, on peut utiliser Link si on a besoin d'un lien sinon utiliser un button au moment de l'instanciation. Ou s'il n'y a jamais besoin de vrai balise plutôt utilisé useNavigate est faire des navigate. Le composant Button reçois une props text qui pourrais plutôt être un children.

Interrogation :

- Étrange d'avoir items et newItems dans le state
- BeerActionTypes.BEERS_FETCH_IF_NOT étonnant, car si on revient sur la page, il ne peut pas y avoir de refetchonmount pour récupérer la liste des bières à jour.
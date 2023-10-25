# Follow Beers

## An interview dedicated App


### Presentation

**Follow Beers** is a functional app. It's composed by a Node.js API and a React front

- [API documentation _./api/README.md_](./api/README.md)
- [React front documentation _./front/README.md_](./front/README.md)


## Retours sur le code - MCP

### 1è point : l'installation
L'installation du projet s'est avérée compliquée. Ce n'est pas très important theoriquement parlant car c'est un projet de test mais il me semble tout de même nécessaire d'attirer l'attention sur certains points : 
- En raison d'une version de node trop ancienne dans le Dockerfile, le conteneur ne parvient tout simplement pas à lancer le serveur koa (j'ai mis à jour sur mon fork). L'installation de Docker sur Windows est également parfois laborieuse (je suis familier avec mais tout les devs front n'auront pas le réflexe d'aller dans leur bios pour activer la virtualisation de leur CPU afin de pouvoir faire tourner le daemon docker).
- Côté front, impossible de lancer le projet également en raison de problèmes de sécurité liés aux certificats et à node qui a depuis patché et rendu obsolète l'app. Par soucis de temps, j'ai simplement utilisé un workaround en ajoutant une ligne sur le script de lancement du front. Plus d'informations sur cette réponse à ce thread : https://stackoverflow.com/a/73027407

Si l'un des objectifs de ce test front est de challenger les candidats à gérer ce genre de problèmes alors on peut ignorer tout cela, my bad :b. Si ce n'est pas l'objectif, résoudre ou faciliter ces soucis à l'avenir permettrait sans doute de gagner en temps et en efficacité. 

### 2è point : le code

Petite remarque avant : avec plus de temps, je n'aurais clairement pas fait de `history.go(0);` dans la saga de rating. Il faut plutot rafraichir le composant uniquement plutot que toute la page. <br><br>
Voici mon avis concernant les bonnes et les mauvaises choses du projet.<br> 
Je vais fonctionner en bullet points, c'est plus lisible : 
- Bons points
    - Utilisation d'openapi (swagger) et yup (même si aujd j'utiliserais zod) pour définir et valider l'api.
    - Utilisation d'axios
    - Pas d'aberrations sur l'archi
    - Volonté d'afficher de la loading UI

- Mauvais points & axes d'améliorations
    - L'utilisation de redux, react-router et surtout redux saga est "overkill" pour ce projet et rends toute la base de code très verbeuse. <br>J'aurais tendance aujourd'hui à privilégier des outils comme React Query, le Context, Prisma ou NextJS qui réduisent la verbosité et n'utiliser Redux que lorsque le besoin se fait sentir : "Don’t reach for a tool to solve a problem you don’t yet have". <br>Redux saga n'interviendra lui que très rarement, dans des besoins très spécifiques (concurrence de tâches asynchrones, besoin d'annulation d'appels serveurs/api...).
    <br> Je comprends malgré tout que l'utilisation de ces outils pour ce test se révèle sans doute important pour refléter la réelle complexité présente dans l'appli Follow.
    - Pas de typescript, ni de typage minimum sur les props des composants. Je trouve cela assez peu cohérent avec le fait d'utiliser des outils aussi puissants et complexes que redux saga. Ces outils montrent que l'objectif est de faire quelque chose de scalable et solide, or si il faut le faire il faut le faire en typescript selon moi. Difficile de tout lister sur les avantages du typage mais si je devais lister certains des plus importants :
        - Ecriture de code plus rapide (on sait avec quelle donnée on travaille, on connait les objets avec précision)
        - Moins de bugs (erreur humaine détectée à la compilation, restriction saine des déclarations...)
        - Cablage plus facile avec le back ou certaines api extérieures. Ici on a la chance d'avoir un backend en javascript, c'est parfait pour avoir  un typage commun entre le back et le front.
    - Le linter est un eslint de base monté avec le creat-react-app. Je monte personnelement aujourd'hui toujours un eslint sur un ruleset airbnb avec les plugins react + jsxa11y  + typescript + prettier au minimum sur tout mes projets. Cela permet pour une équipe de travailler de façon plus homogène et d'avoir un outil de qualimétrie efficace, réduisant l'accumulation de dette technique.
    - Quelques points de détails : 
        - La granularité décimale du score d'une bière me semble devoir être au minimum à deux (score max à 10 ne pouvant être affiché et la méthode de calcul fait que garder un nombre entier ne reflète quasi pas les changement de rating)
        - Il y a certaines props non utilisées dans des composants -> il faut enlever les props non utilisées, cela nuit à la lisibilité.
        - Les Input custom créés sont très verbeux et compliqués

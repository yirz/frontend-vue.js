# Fonctionnement du [View router](https://router.vuejs.org/)

Le **Vue Router** est une bibliothèque officielle de Vue.js conçue pour faciliter le routage dans les applications Vue. Il permet de naviguer entre différentes pages ou composants sans nécessiter le rechargement de la page. Le router permet de définir des 'pseudos-liens', qui, au lieu de naviguer vers une autre page, chargent un composant vue spécifique à un endroit particulier dans la page.

## Intégration dans l'Application

Le router est intégré dans l'instance principale de Vue, dans le fichier [`main.js`](./src/main.js).

## Configuration

Les pseudos-liens sont configurés dans le fichier [src/router/index.js](./src/router/index.js). Les routes sont définies dans un tableau, chaque route étant associée à un composant. L'instance de `router` est ensuite créée avec ce tableau de routes et exportée.

### Exemple de Configuration

```javascript
// src/router/index.js
const router = createRouter({
  // Associe des chemins d'accès au composant vue à afficher
  routes: [
    {
      path: '/', // Chemin d'accès
      name: 'home', // Nom du chemin d'accès
      component: HomeView // Composant vue.js à afficher
    },
    {
      path: '/categories',
      name: 'categories',
      component: CategorieView
    },
    // Autres routes...
  ]
})

export default router
```

## Navigation entre les composants

Dans les composants Vue, la navigation entre les composants s'effectue à l'aide du composant `<router-link>`, qui crée des liens navigables.

### Exemple de Navigation

```html
<template>
<div>
<router-link to="/">Accueil</router-link>
<router-link to="/categories">Afficher les catégories</router-link>
</div>
</template>
```

## Affichage des Composants Routés

Le composant où le contenu de la route actuelle doit être affiché est spécifié par `<router-view>`. Ce composant est placé dans [`App.vue`](./src/App.vue).

### Exemple d'Affichage

```html
<!-- src/App.vue -->
<template>
    <router-view/>
</template>
```

## Résumé

- **Initialisation** : Configuration de Vue Router dans `router/index.js` avec définition des routes et association à des composants.
- **Intégration** : Intégration du router dans l'application Vue dans `main.js` par passage à l'instance de Vue.
- **Navigation** : Utilisation de `<router-link>` dans les composants pour la navigation entre les pages.
- **Affichage** : Utilisation de `<router-view>` dans `App.vue` pour afficher le contenu des routes.

Vue Router offre ainsi une solution élégante pour le routage dans les applications Vue, permettant une navigation fluide et sans rechargement de page.

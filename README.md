[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/Fbrh6DdB)
- nom :
- prénom :
- URL Netlify :

# Travail

N'oublier pas votre nom, prénom et l'URL de publication Netlify...

# Complétez le CSS

Compléter le fichier [menu.css](/src/css/components/menu.css) et visualiser l'effet sur [index.html](/index.html) .

**Faire un commit** : "code CSS"

# Manuellement sans JS

## Ouvrir manuellement le menu

1. Ouvrir le fichier `index.html`
2. Afficher le fichier `index.html` avec "Go Live"
3. Localiser la balise `<nav>` du menu
4. Modifier l'attribut `aria-hidden` de `true` à `false`
5. Le menu devrait maintenant être visible sur la page

Exemple de modification :

```html
<!-- Avant -->
<nav class="menu" aria-hidden="true">
  <!-- Après -->
  <nav class="menu" aria-hidden="false"></nav>
</nav>
```

## Faire de même pour le bouton

```html
<!-- Avant -->
<button class="menu" aria-expanded="false">
  <!-- Après -->
  <button class="menu" aria-expanded="true"></button>
</button>
```

**Faire un commit** : "Ouverture manuelle du menu par code HTML"

# Ouvrir le menu par code JS

**Faire un commit qui** : annule les précedentes modification (le commit précédant)

## Tester dans la console JS du navigateur (inspecter)

### Afficher le menu

Les `____` sont à remplacer par les termes corrects.

Trouvez l'élément `nav` de classe CSS `menu` :

```js
nav = document.querySelector("______");
```

Doit afficher dans la console :

```html
<nav class=​"header__menu menu" id=​"mainNav" aria-hidden=​"true">​…​</nav>
```

Maintenant changer à `false` l'attribut `"aria-hidden"` de l'élément référencé par la variable `nav`.

```js
nav.aria______ = ____;
```

La page doit afficher le menu

### Changer l'état du bouton du menu

Trouvez l'élément de classe CSS `menu-btn` :

```js
toggle = ________.__________("________");
```

Maintenant changer à `true` l'attribut `"aria-expanded"` de l'élément référencé par la variable `toggle`.

```js
toggle______________________________;
```

Le bouton doit tourner de 90 degrés.

## Réagir à un click sur le bouton

Dans le fichier [script.js](/src/js/script.js), compléter le code suivant :

```js
// On cible les éléments à modifier
const toggle = _____________________;
const nav = ______________________;

// Ajoute un écouteur d'événements à l'élément 'toggle' qui écoute les événements 'click'.
toggle.____________("______", () => {
  // Mise à jour des attributs ARIA pour accessibilité
  nav__________________;
  toggle__________________;
});
```

Testez en rechargeant la page et cliquant sur le bouton : le menu doit s'ouvrir et le bouton tourner.

**Faire commit** : ouverture menu.

## Agir suivant l'état (actuel)

Ajouter au début de l'écouteur dévénement le code suivant :

```js
const isOpen = toggle.ariaExpanded === "true";
const isClosed = !isOpen;
console.log("isOpen : ", isOpen, "isClosed : ", isClosed);
```

Testez et regardez ce qui s'affiche dans la console. En déduire les modifications à faire au code pour qu'il alternativement ouvre et ferme le menu.

**Faire commit** : ouverture/fermeture menu.

## Ajout classe `nosrcoll` à `body`

Faire que l'élément `body` ait la classe CSS `noscroll` quand le menu est ouvert.

https://developer.mozilla.org/fr/docs/Web/API/Element/classList#toggle

**Faire commit** : classe `noscroll`.

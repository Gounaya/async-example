Exemple illustration principes et problématiques asynchrones
============================================================

La méthode `window.setTimeout` est utilisé pour simuler les appels asynchrones.

Ouvrir `ìndex.html` pour observer l'exécution du script contenu dans `example.js`

Plusieurs versions successives pour `example.js`.
Charger une version avec

```git checkout <tag>```

où `tag` peut prendre comme valeur :

* `v0` : appel asyncrhone simple
* `v1` : version avec 2 appels asynchrones "en séquence"
* `v2` : tentative (échouée) d'exploitation du résultat d'un appel asynchrone...
* `v3` : ajout d'un callback pour gérer la suite du traitement
* `v3.1` : premier aperçu du *callback hell*
* `v3.2` : utilisation des paramètres du callback pour "retourner" une valeur
* `v3.5` : exemple de promesse + utilisation de then
* `v3.6` : exemple de promesse + utilisation de reject/catch
* `v3.7` : propagation des erreurs dans la chaine des promesses
* `v3.8` : chainage sur `catch` (comportement à la finally)
* `v4` : utilisation de promesses pour gérer l'appel asynchrone, comparaison avec utilisation des callbacks
* `v4.2` : les promesses simplifient le *callback hell*

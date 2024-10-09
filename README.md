# Entre Deux Faes - Un jeu dont vous êtes le héros !
Oyez, oyez, braves aventuriers et aventurières ! Vous êtes par la présente invités à participer à une aventure qui vous permettra d'affiner vos compétences en JavaScript (React) au travers de la création d'une aventure dont vous êtes le héros.

## Quelques petites notes d'emblée
► Le texte de l'aventure est déjà écrit et séparé en étapes à choix uniques ou multiples
► Vous utiliserez React, installé avec Vite
► Typescript est optionnel
► Si vous le souhaitez, vous pouvez ajouter votre framework CSS favori
► Ce workshop est centré sur la fonctionnalité plutôt que l'apparence, si bien que le CSS est minimal, mais libre à vous de le travailler.
► Le code est disponible dans le répertoire, mais nous vous invitons à suivre le pseudocode ci-dessous pour essayer d'y parvenir vous-mêmes.

## Notions abordées
**React** : états, contextes, gestion de composant
**Logique** : gestion des choix multiples et d'un arbre de décisions

## Ressources
► La documentation de React : https://react.dev/learn
► Installation via Vite : https://vite.dev/guide/
► UseState : https://react.dev/reference/react/useState
► UseContext : https://react.dev/reference/react/useContext
► Le texte de l'aventure : https://docs.google.com/document/d/1ZN8qppsL5Cn5XT7IjruBVQGsGcmxUVeqPXJTu8YXSgM/edit?usp=sharing

## Pseudocode

**Étape 1** : Installez Vite dans un nouveau projet. Vous pouvez le nommer comme vous le souhaitez mais, au cas où, sachez que l'aventure s'appelle Entre Deux Faes.

**Étape 2** : Créer un dossier components dans le dossier src. Dans ce dossier, créer les dossiers suivants : personnage et histoire. Dans le dossier histoire, créer un dossier entries. Ensuite, à nouveau dans le dossier components, créer un dossier contexte.

**Étape 3** : Commençons par créer nos contextes. Dans le dossier contexte, créer un fichier myProvider.tsx → c'est dans ce fichier que vous créerez les contextes qui vous permettront ensuite de dynamiser la fiche de personnage et la gestion des entrées.

**Étape 4** : Vous aurez besoin d'un seul contexte, dans lequel vous devrez ensuite créer tous vos useState et le return avec une arborescence correspondant aux dépendances de chaque module.

**Étape 5** : Nous vous conseillons de créer des useState pour : CharacterStats - CharacterClass - CharacterTempHP - CharacterInventory - StoryProgression

##### Explications
CharacterStats contient les statistiques du personnage, avec les modificateurs nécessaires, CharacterClass contient en réalité son archétype, c'est-à-dire sa combinaison classe/race, CharacterTempHP vous permet de gérer le nombre de points de vie du personnage à un moment donné, CharacterInventory gère son inventaire, et StoryProgression gère la progression d'une entrée à l'autre.

##### L'objet CharacterStats
Ce jeu se joue avec un dé à six faces pour les jets de compétences au lieu d'un dé à 20 faces comme on retrouve dans Donjons et Dragons. Pour refléter ce changement, les stats neutres des personnages sont à 0, et chaque archétype a des modificateurs qui augmentent ou diminuent la statistique. Voici les archétypes en question :

###### Neutre
strength: 0,
dexterity: 0,
constitution: 0,
intelligence: 0,
wisdom: 0,
charisma: 0,
AC: 10,
HP: 10,

###### Guerrier humain
strength: 3,
dexterity: 2,
constitution: 2,
intelligence: -1,
wisdom: 0,
charisma: 1,
AC: 15,
HP: 20,

###### Mage elfe
strength: -1,
dexterity: 0,
constitution: 1,
intelligence: 3,
wisdom: 2,
charisma: 2,
AC: 13,
HP: 15,

###### Roublard halfelin
strength: 1,
dexterity: 3,
constitution: 2,
intelligence: 0,
wisdom: -1,
charisma: 2,
AC: 14,
HP: 17,

**Étape 6** : Dans le return, placez {children} comme enfant de toute l'arborescence des états, et organisez-les en gardant bien en tête que chaque enfant a accès au contexte de ses parents.

**Étape 7** : Composez maintenant chaque entrée dans un fichier séparé, en plaçant tous ces fichiers dans le dossier entries. Nous vous conseillons de donner à chaque entrée un ID différent afin de faciliter le CSS plus tard.

**Étape 8** : Dans le dossier histoire, créez un composant du même nom. Ce composant gérera l'affichage des entrées. Pour ce faire, crées une boucle if else if dans une fonction (nous l'avons appelée 'routing' personnellement, mais ce n'est qu'une idée) qui, s'il faut afficher une entrée X, retourne le composant correspondant.

**Étape 9** : Assurez-vous que tout est affiché correctement dans votre fichier App et dans les divers composants.

Voilà, vous avez un système basique fonctionnel ! Maintenant, il est temps si vous le souhaitez d'ajouter du CSS et/ou des fonctionnalités qui rendront le projet plus complexe mais aussi plus proche d'une vraie expérience de jeu narratif.

## Quelques pistes pour la suite
► Intégrer un vrai back-end - pour des explications plus poussées à ce sujet, rendez-vous sur le répertoire dédié : https://github.com/Yourisrachid/herogamebackend
► Choisir un framework CSS et développer une vraie interface dont les couleurs et l'ambiance correspondent aux thème de l'histoire racontée
► Poursuivre l'histoire : le prologue qui vous est fourni est le vrai prologue d'une aventure D&D écrite par une GM pour ses joueurs. Libre à vous de la continuer comme vous le souhaitez.
► Intégrer un système de combat au tour par tour avec des lancers de dé pour toucher et des dés de dégâts
► Intéragir avec le système d'inventaire pour ajouter et retirer en fonction des choix du joueur différents objets (équipement, consommables, autres).
► Dissocier la classe et la race du personnage pour permettre une plus grande flexibilité de personnalisation
► Permettre au joueur de donner un nom à son personnage et même de lui attribuer un avatar (uploadé à partir de sa machine, ou à partir d'un lien se terminant par une extension d'image)
► Intégrer un système d'argent qui permettra au personnage d'être payé pour les missions accomplies et d'acheter ou vendre auprès de marchands.
► Et bien d'autres encore !

Si vous souhaitez de l'inspiration libre de droit et d'usage pour nourrir votre Aventure Dont Vous Êtes le Héros, voici pour conclure le lien du Document de Référence du Système pour Donjons et Dragons : https://dnd.wizards.com/fr/resources/systems-reference-document <br />

###### Nous espérons que vous avez apprécié cet exercice, et qu'il vous a donné des envies d'aventure !
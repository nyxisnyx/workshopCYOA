# Entre Deux Faes - Un jeu dont vous êtes le héros !
Oyez, oyez, braves aventuriers et aventurières ! Vous êtes par la présente invités à participer à une aventure qui vous permettra d'affiner vos compétences en JavaScript (React) au travers de la création d'une aventure dont vous êtes le héros.

## Quelques petites notes d'emblée
► Le texte de l'aventure est déjà écrit et séparé en étapes à choix uniques ou multiples<br />
► Vous utiliserez React, installé avec Vite<br />
► Typescript est optionnel<br />
► Si vous le souhaitez, vous pouvez ajouter votre framework CSS favori<br />
► Ce workshop est centré sur la fonctionnalité plutôt que l'apparence, si bien que le CSS est minimal, mais libre à vous de le travailler.<br />
► Le code est disponible dans le répertoire, mais nous vous invitons à suivre le pseudocode ci-dessous pour essayer d'y parvenir vous-mêmes.<br />

## Notions abordées
**React** : états, contextes, gestion de composant
**Logique** : gestion des choix multiples et d'un arbre de décisions

## Ressources
► La documentation de React : https://react.dev/learn<br />
► Installation via Vite : https://vite.dev/guide/<br />
► UseState : https://react.dev/reference/react/useState<br />
► UseContext : https://react.dev/reference/react/useContext<br />
► Le texte de l'aventure : https://docs.google.com/document/d/1ZN8qppsL5Cn5XT7IjruBVQGsGcmxUVeqPXJTu8YXSgM/edit?usp=sharing<br />

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
strength: 0,<br />
dexterity: 0,<br />
constitution: 0,<br />
intelligence: 0,<br />
wisdom: 0,<br />
charisma: 0,<br />
AC: 10,<br />
HP: 10,<br />

###### Guerrier humain
strength: 3,<br />
dexterity: 2,<br />
constitution: 2,<br />
intelligence: -1,<br />
wisdom: 0,<br />
charisma: 1,<br />
AC: 15,<br />
HP: 20,<br />

###### Mage elfe
strength: -1,<br />
dexterity: 0,<br />
constitution: 1,<br />
intelligence: 3,<br />
wisdom: 2,<br />
charisma: 2,<br />
AC: 13,<br />
HP: 15,<br />

###### Roublard halfelin
strength: 1,<br />
dexterity: 3,<br />
constitution: 2,<br />
intelligence: 0,<br />
wisdom: -1,<br />
charisma: 2,<br />
AC: 14,<br />
HP: 17,<br />

**Étape 6** : Dans le return, placez {children} comme enfant de toute l'arborescence des états, et organisez-les en gardant bien en tête que chaque enfant a accès au contexte de ses parents.

**Étape 7** : Composez maintenant chaque entrée dans un fichier séparé, en plaçant tous ces fichiers dans le dossier entries. Nous vous conseillons de donner à chaque entrée un ID différent afin de faciliter le CSS plus tard.

**Étape 8** : Dans le dossier histoire, créez un composant du même nom. Ce composant gérera l'affichage des entrées. Pour ce faire, crées une boucle if else if dans une fonction (nous l'avons appelée 'routing' personnellement, mais ce n'est qu'une idée) qui, s'il faut afficher une entrée X, retourne le composant correspondant.

**Étape 9** : Assurez-vous que tout est affiché correctement dans votre fichier App et dans les divers composants.<br />

Voilà, vous avez un système basique fonctionnel ! Maintenant, il est temps si vous le souhaitez d'ajouter du CSS et/ou des fonctionnalités qui rendront le projet plus complexe mais aussi plus proche d'une vraie expérience de jeu narratif.

## Quelques pistes pour la suite
► Intégrer un vrai back-end - pour des explications plus poussées à ce sujet, rendez-vous sur le répertoire dédié : https://github.com/Yourisrachid/herogamebackend<br />
► Choisir un framework CSS et développer une vraie interface dont les couleurs et l'ambiance correspondent aux thème de l'histoire racontée<br />
► Poursuivre l'histoire : le prologue qui vous est fourni est le vrai prologue d'une aventure D&D écrite par une GM pour ses joueurs. Libre à vous de la continuer comme vous le souhaitez.<br />
► Intégrer un système de combat au tour par tour avec des lancers de dé pour toucher et des dés de dégâts<br />
► Intéragir avec le système d'inventaire pour ajouter et retirer en fonction des choix du joueur différents objets (équipement, consommables, autres).<br />
► Dissocier la classe et la race du personnage pour permettre une plus grande flexibilité de personnalisation<br />
► Permettre au joueur de donner un nom à son personnage et même de lui attribuer un avatar (uploadé à partir de sa machine, ou à partir d'un lien se terminant par une extension d'image)<br />
► Intégrer un système d'argent qui permettra au personnage d'être payé pour les missions accomplies et d'acheter ou vendre auprès de marchands.<br />
► Et bien d'autres encore !<br />

Si vous souhaitez de l'inspiration libre de droit et d'usage pour nourrir votre Aventure Dont Vous Êtes le Héros, voici pour conclure le lien du Document de Référence du Système pour Donjons et Dragons : https://dnd.wizards.com/fr/resources/systems-reference-document <br />

###### Nous espérons que vous avez apprécié cet exercice, et qu'il vous a donné des envies d'aventure !
# Title Case for French

[![Build Status](https://travis-ci.org/benoitvallon/titlecase-french.svg)](https://travis-ci.org/benoitvallon/titlecase-french)

# What is Title Case?

Basically it is using "Capital and Lowercase Letters in Titles". This means only using capital letters for the principal words. Articles, conjunctions, and prepositions do not get capital letters unless they start the title. For example:

- The Last of the Mohicans

## In English

There are quite a few nice libraries to Title Case a text in English. This [implementation by John Resig](http://ejohn.org/blog/title-capitalization-in-javascript) is one of them and works well. In English, the first word in the title and all subsequent "important" words (everything except articles, conjunctions, and prepositions) are capitalized.

## In French

The capitalization of titles in French and English is quite a bit different. The rules are more complicated in French, so complicated, in fact, that even *Le Petit Robert* (the quintessential French dictionary) and *Le Bon Usage* (the French grammar bible) can't seem to agree on how to capitalize titles.

It is clear that either there is no standard system or that the standard is not well known. As a French person I tried to apply the rules that I have most commonly seen.

# Using the package

## Installation

```js
npm install titlecase-french
```

## Basic usage

You just need to require the package and call the `convert('mon texte de démonstration')` function.

```js
var titleCaseFrench = require('titlecase-french');

var myText = titleCaseFrench.convert('mon texte de démonstration');
console.log(myText); // => Mon Texte de Démonstration
```

## API

### `addLowerCaseWords`

#### Description

If you do not want specific words to be capitalized then include them to the list with the function.

#### Signature

`addLowerCaseWords(words: String)`

Where `words` is a list of words separated by Commas.

#### Example

In the first example the 'démonstration' word is added to the list and won't be capitalized. In the second example both words 'démonstration' and 'texte' won't be capitalized.

```js
var titleCaseFrench = require('titlecase-french');
titleCaseFrench.addLowerCaseWords('démonstration');

var myText = titleCaseFrench.convert('mon texte de démonstration');
console.log(myText); // => Mon Texte de démonstration

titleCaseFrench.addLowerCaseWords('démonstration,texte');

var myText = titleCaseFrench.convert('mon texte de démonstration');
console.log(myText); // => Mon texte de démonstration
```

### `removeLowerCaseWords`

#### Description

If you want to remove specific words from the default list (see words in the rules below) then call this function with your list of words.

#### Signature

`removeLowerCaseWords(words: String)`

Where `words` is a list of words separated by Commas.

#### Example

In this example the 'de' word should have been in lowercase because it is in the default list of words that are not capitalized. We are going to remove it from the list to get it capitalized.

```js
var titleCaseFrench = require('titlecase-french');
titleCaseFrench.removeLowerCaseWords('de,du,la,la');

var myText = titleCaseFrench.convert('mon texte de démonstration');
console.log(myText); // => Mon Texte De Démonstration
```

### `keepCapitalizedSpecials`

#### Description

Sometimes you do not want to replace all the capitalized special letters. You can avoid replacement by declaring which letter you want to keep.

#### Signature

`keepCapitalizedSpecials(letters: String)`

Where `letters` is a list of uppercase special letters separated by Commas.

#### Example

```js
var titleCaseFrench = require('titlecase-french');
titleCaseFrench.keepCapitalizedSpecials('À,Ç,É');

var myText = titleCaseFrench.convert('ça va!');
console.log(myText); // => Ça Va!
```

# Tests

```js
npm test
```

# The rules

There are 5 main rules:

- A title always starts with a word in uppercase
- A specific list of words are in lowercase
- After a quote *'* words can be in lowercase or uppercase depending of the word before the quote
- Acronyms are in uppercase
- Special uppercase letters (with accent for example) are replaced with their simple version

Some examples ([see below for a bigger list](#samples-of-converted-titles)).

```js
/*
Le Dernier des Mohicans
Du Vent dans les Branches
Junior l'Aventurier
Ca m'intéresse
Avec S.A.M.
Cet Eté à la Plage
*/
```

## List of lowercase words

- Definite articles:
    - *le, la, les*

- Indefinite articles:
    - *un, une, des*

- Partitive articles:
    - *du, de, des*

- Contracted articles:
    - *au, aux, du, des*

- Demonstrative adjectives:
    - *ce, cet, cette, ces*

- Exclamative adjectives:
    - *quel, quels, quelle, quelles*

- Possessive adjectives:
    - *mon, ton, son, notre, votre, leur, ma, ta, sa, mes, tes, ses, nos, vos, leurs*

- Coordinating conjunctions:
    - *mais, ou, et, donc, or, ni, car, voire*

- Subordinating conjunctions:
    - *que, qu, quand, comme, si, lorsque, lorsqu, puisque, puisqu, quoique, quoiqu*

- Prepositions:
    - *à, chez, dans, entre, jusque, jusqu, hors, par, pour, sans, vers, sur, pas, parmi, avec, sous, en*

- Personal pronouns:
    - *je, tu, il, elle, on, nous, vous, ils, elles, me, te, se, y*

- Relative pronouns:
    - *qui, que, quoi, dont, où*

- Other words:
    - *ne*

## After a quote

- Words after a quote are in lowercase if the word before the quote is:
    - *c', j', m', n', s', t'*

- Words after a quote are in uppercase if the word before the quote is:
    - *d', l'*

## Special uppercase letters

- All the following special uppercase letters are replaced:
    - *À, Â, Ä, É, È, Ê, Ë, Ç, Î, Ï, Ô, Ö, Û, Ü, Ù*

# Samples of converted titles

```js
/*
Le Triangle Rouge
Loki, le Détective Mythique
La Secte
Leon la Came
Littlest Petshop les Aventures
Les Banquiers
Junior l'Aventurier
L'Accordeur
Je Suis un Vampire
Un Messager
Il Etait une Fois...
Une Histoire de France
Le Haut des Arbres
Des Mohicans
Danse du Temps
Du Côté de chez Poje
Le Masque de Fer
De Beaux Moments
Le Marteau des Sorcières
Des Bêtes
Rentre au Pays
Au Pays des Monstres
Rentrez aux Pays
Aux Pays des Monstres
Histoires du Passé
Du Vent dans les Branches
Avant des Lustres
Des Répétitions
Regarde ce Chemin
Ce Chemin Est Long
A la Plage cet Eté
Cet Eté à la Plage
Ils Font cette Liste
Cette Liste
Regarde-Moi ces Hommes
Ces Longs Trajets
Dis Moi quel Nom
Quel Beau Paysage
En quel Pays
Quels Sapins pour Noël
En quelle Saison
Quelle Ville
Elles Font quelles Recettes
Quelles Couleurs
Sauf mon Père
Mon Ancètre
Vis ton Rêve
Ton Espoir ne Meurt pas
Louna et son Fils
Son Coeur Résistera
A notre Bourse
Notre Vie
Avec votre Accord
Votre Avis
C'est leur Choix
Leur Style
Tout Est de ma Faute
Ma Mère
Range ta Chambre
Ta Lumière
Un Père et sa Fille
Sa Dulciné
Pourtant mes Choix Etaient Bons
Mes Devoirs
Prends tes Responsabilités
Tes Dessins Sont Brillants
Lui et ses Frères
Ses Cousins et Cousines
Ce Sont nos Femmes
Nos Clients
A vos Marques
Vos Idées
Jamais sans leurs Bicyclettes
Leurs Régions Ont du Talents
Il Est Studieux mais Turbulent
Mais Comment Font-Ils?
Ici ou Là
Ou Bien
Entre Ciel et Terre
Boule et Bill
Je Pense donc je Suis
Donc nous Partons
Le Temps Est Chaud or il A Froid
Or il Tomba
Je ne Bois, ni ne Fume
Ni Eux ni Moi
Part car il Est Temps
Car il Partait
Deux voire Trois
Voire Même Trois
Il Faut que je Parte
Que Faire
A Moins qu'elle Parte
Qu'en Dise les Gens
Elle Rêve quand elle Dors
Quand Viendra le Temps
Elle Est Belle comme le Jour
Comme si nous Pouvions
Nous Sommes Allé si Loin
Si Loin
Elle Partit lorsque tu Arrivas
Lorsque tu Pars
Il Partit lorsqu'elle Arriva
Lorsqu'elle Arriva
Il Est Là puisque je l'Ai Vu
Puisque tu Pars
Ils Viennent puisqu'elle Part
Puisqu'elle Part
Il Ira quoique tu Fasses
Quoique nous Fassions
Il l'Aime quoiqu'elle Fasse
Quoiqu'elle Fasse
Motards à Jamais
A Toute Allure
Viens chez nous
Chez nous
Le Pont dans la Vase
Dans mes Veines
Le Jour entre les Lattes
Entre Lui et elle
Depuis Là jusque dans la Maison
Jusque Par-Dessus la Tête
Révêr jusqu'au Jour
Jusqu'au Lendemain
Sortez hors de chez Moi
Hors la Loi
Deçue par la Vie
Par Dessus les Nuages
Tout pour le Tout
Pour la Vie
Vivre sans Limite
Sans Foi ni Loi
Le Regard vers le Large
Vers l'Infini et Au-Delà
Argent sur Providence
Sur Lui
Il ne Faut pas
Pas Toi
L'Intru parmi Eux
Parmi nous
Lui avec ses Amis
Avec Eux
L'Eau sous la Glace
Sous la Neige
En Route
Escales en Terres Inconnues
Pourquoi je Pleure
Je Suis Moi
Toi au Moins, tu Es Mort Avant
Tu Mourras Moins Bête
Après il Est Parti
Il Etait Seul
En Chemin elle Rencontre...
Elle et Lui
Après on Ira au Bois
On nous Dit Rien
Le Monde Est à nous
Nous Rentrons
Si vous Acceptez
Vous et Eux
Après ils Sont Partis
Ils Etaient Dix
Comme elles
Elles Etaient Dix
Laisse Moi me Prendre en Charge
Me Perdre
Je te Rejoindrai
Te Dira pas
Il Faut se Connaître Soi-Même
Se Perdre
Il y Avait
Y A pas
Ceux qui Ont des Ailes
Qui Est La?
Pendant que le Roi de Prusse...
Que sa Volonté Soit Faite
A quoi Bon
Quoi Faire
Celui dont on Parle
Dont nous Aimons la Compagnie
Le Pays où il Est Né
Où Aller?
Il ne Viendra pas
Ne Fais pas Ca
Ca, c'est Paris
C'est Triste
Le Marquis d'Anaon
D'Artagnan
Dites-Moi que j'existe
J'ai Tué François
Moi l'Homme
L'Emmerdeur
Ca m'intéresse
Avoue tu m'aimes
Je n'ai pas Raison
N'ai pas Peur
Elle s'est Fait Mal
S'affoler pour Rien
Simon's Cat
Si tu Freines t'es un Lâche
T'abuses Ikko
En Extrême-Orient
Extrême-Orient
Comment s'appelle-t-il?
Ce Mot Existe-t-il?
Avec S.A.M.
S.A.M.
Motards à Jamais
A Toute Allure
Le Bruit de l'Echo
Echo des Savanes
Post Ere Moderne
Ere Moderne
Ca m'intéresse
Tu Aimes Ca
*/
```

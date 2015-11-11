module.exports = {
  // le, la, les, l'
  wordReplacementsDefiniteArticles: [
    // le
    {input: 'le triangle rouge', output: 'Le Triangle Rouge'},
    {input: 'loki, le détective mythique', output: 'Loki, le Détective Mythique'},
    // la
    {input: 'la secte', output: 'La Secte'},
    {input: 'leon la came', output: 'Leon la Came'},
    // les
    {input: 'littlest petshop les aventures', output: 'Littlest Petshop les Aventures'},
    {input: 'les banquiers', output: 'Les Banquiers'},
    // l'
    {input: 'junior l\'aventurier', output: 'Junior l\'Aventurier'},
    {input: 'l\'accordeur', output: 'L\'Accordeur'}
  ],
  // un, une, des
  wordReplacementsIndefiniteArticles: [
    // un
    {input: 'je suis un vampire', output: 'Je Suis un Vampire'},
    {input: 'un messager', output: 'Un Messager'},
    // une
    {input: 'il était une fois...', output: 'Il Etait une Fois...'},
    {input: 'une histoire de france', output: 'Une Histoire de France'},
    // des
    {input: 'Le haut des arbres', output: 'Le Haut des Arbres'},
    {input: 'des mohicans', output: 'Des Mohicans'}
  ],
  // du, de la, de l', des
  wordReplacementsPartitiveArticles: [
    // du
    {input: 'danse du temps', output: 'Danse du Temps'},
    {input: 'du côté de chez poje', output: 'Du Côté de chez Poje'},
    // de
    {input: 'le masque de fer', output: 'Le Masque de Fer'},
    {input: 'de beaux moments', output: 'De Beaux Moments'},
    // des
    {input: 'Le marteau des sorcières', output: 'Le Marteau des Sorcières'},
    {input: 'des bêtes', output: 'Des Bêtes'}
  ],
  // au, aux, du, des
  wordReplacementsContractedArticles: [
    // au
    {input: 'rentre au pays', output: 'Rentre au Pays'},
    {input: 'au pays des monstres', output: 'Au Pays des Monstres'},
    // aux
    {input: 'rentrez aux pays', output: 'Rentrez aux Pays'},
    {input: 'aux pays des monstres', output: 'Aux Pays des Monstres'},
    // du
    {input: 'histoires du passé', output: 'Histoires du Passé'},
    {input: 'du vent dans les branches', output: 'Du Vent dans les Branches'},
    // des
    {input: 'avant des lustres', output: 'Avant des Lustres'},
    {input: 'des répétitions', output: 'Des Répétitions'}
  ],
  // ce, cet, cette, ces
  wordReplacementsDemonstrativeAdjectives: [
    // ce
    {input: 'regarde ce chemin', output: 'Regarde ce Chemin'},
    {input: 'ce chemin est long', output: 'Ce Chemin Est Long'},
    // cet
    {input: 'A la plage cet été', output: 'A la Plage cet Eté'},
    {input: 'Cet été à la plage', output: 'Cet Eté à la Plage'},
    // cette
    {input: 'ils font cette liste', output: 'Ils Font cette Liste'},
    {input: 'cette liste', output: 'Cette Liste'},
    // ces
    {input: 'regarde-moi ces hommes', output: 'Regarde-Moi ces Hommes'},
    {input: 'ces longs trajets', output: 'Ces Longs Trajets'}
  ],
  // quel, quels, quelle, quelles
  wordReplacementsExclamativeAdjectives: [
    // quel
    {input: 'dis moi quel nom', output: 'Dis Moi quel Nom'},
    {input: 'quel beau paysage', output: 'Quel Beau Paysage'},
    // quels
    {input: 'en quel pays', output: 'En quel Pays'},
    {input: 'quels sapins pour noël', output: 'Quels Sapins pour Noël'},
    // quelle
    {input: 'en quelle saison', output: 'En quelle Saison'},
    {input: 'quelle ville', output: 'Quelle Ville'},
    // quelles
    {input: 'elles font quelles recettes', output: 'Elles Font quelles Recettes'},
    {input: 'quelles couleurs', output: 'Quelles Couleurs'}
  ],
  // mon, ton, son, notre, votre, leur
  // ma, ta, sa
  // mes, tes, ses, nos, vos, leurs
  wordReplacementsPossessiveAdjectives: [
    // mon
    {input: 'sauf mon père', output: 'Sauf mon Père'},
    {input: 'mon ancètre', output: 'Mon Ancètre'},
    // ton
    {input: 'vis ton rêve', output: 'Vis ton Rêve'},
    {input: 'ton espoir ne meurt pas', output: 'Ton Espoir ne Meurt pas'},
    // son
    {input: 'louna et son fils', output: 'Louna et son Fils'},
    {input: 'son coeur résistera', output: 'Son Coeur Résistera'},
    // notre
    {input: 'a notre bourse', output: 'A notre Bourse'},
    {input: 'notre vie', output: 'Notre Vie'},
    // votre
    {input: 'avec votre accord', output: 'Avec votre Accord'},
    {input: 'votre avis', output: 'Votre Avis'},
    // leur
    {input: 'c\'est leur choix', output: 'C\'est leur Choix'},
    {input: 'leur style', output: 'Leur Style'},
    // ma
    {input: 'tout est de ma faute', output: 'Tout Est de ma Faute'},
    {input: 'ma mère', output: 'Ma Mère'},
    // ta
    {input: 'range ta chambre', output: 'Range ta Chambre'},
    {input: 'ta lumière', output: 'Ta Lumière'},
    // sa
    {input: 'un père et sa fille', output: 'Un Père et sa Fille'},
    {input: 'sa dulciné', output: 'Sa Dulciné'},
    // mes
    {input: 'pourtant mes choix étaient bons', output: 'Pourtant mes Choix Etaient Bons'},
    {input: 'mes devoirs', output: 'Mes Devoirs'},
    // tes
    {input: 'prends tes responsabilités', output: 'Prends tes Responsabilités'},
    {input: 'tes dessins sont brillants', output: 'Tes Dessins Sont Brillants'},
    // ses
    {input: 'lui et ses frères', output: 'Lui et ses Frères'},
    {input: 'ses cousins et cousines', output: 'Ses Cousins et Cousines'},
    // nos
    {input: 'ce sont nos femmes', output: 'Ce Sont nos Femmes'},
    {input: 'nos clients', output: 'Nos Clients'},
    // vos
    {input: 'à vos marques', output: 'A vos Marques'},
    {input: 'vos idées', output: 'Vos Idées'},
    // leurs
    {input: 'jamais sans leurs bicyclettes', output: 'Jamais sans leurs Bicyclettes'},
    {input: 'leurs régions ont du talents', output: 'Leurs Régions Ont du Talents'}
  ],
  // mais, ou, et, donc, or, ni, car
  wordReplacementsCoordinatingConjunctions: [
    // mais
    {input: 'il est studieux mais turbulent', output: 'Il Est Studieux mais Turbulent'},
    {input: 'mais comment font-ils?', output: 'Mais Comment Font-Ils?'},
    // ou
    {input: 'ici ou là', output: 'Ici ou Là'},
    {input: 'ou bien', output: 'Ou Bien'},
    // et
    {input: 'entre ciel et terre', output: 'Entre Ciel et Terre'},
    {input: 'boule et bill', output: 'Boule et Bill'},
    // donc
    {input: 'je pense donc je suis', output: 'Je Pense donc je Suis'},
    {input: 'donc nous partons', output: 'Donc nous Partons'},
    // or
    {input: 'le temps est chaud or il a froid', output: 'Le Temps Est Chaud or il A Froid'},
    {input: 'or il tomba', output: 'Or il Tomba'},
    // ni
    {input: 'je ne bois, ni ne fume', output: 'Je ne Bois, ni ne Fume'},
    {input: 'ni eux ni moi', output: 'Ni Eux ni Moi'},
    // car
    {input: 'part car il est temps', output: 'Part car il Est Temps'},
    {input: 'car il partait', output: 'Car il Partait'},
    // voire
    {input: 'deux voire trois', output: 'Deux voire Trois'},
    {input: 'voire même trois', output: 'Voire Même Trois'}
  ],
  // que, qu, quand, comme, si, lorsque, lorsqu, puisque, puisqu, quoique, quoiqu
  wordReplacementsSubordinatingConjunctions: [
    // que
    {input: 'il faut que je parte', output: 'Il Faut que je Parte'},
    {input: 'que faire', output: 'Que Faire'},
    // qu
    {input: 'à moins qu\'elle parte', output: 'A Moins qu\'elle Parte'},
    {input: 'qu\'en dise les gens', output: 'Qu\'en Dise les Gens'},
    // quand
    {input: 'elle rêve quand elle dors', output: 'Elle Rêve quand elle Dors'},
    {input: 'quand viendra le temps', output: 'Quand Viendra le Temps'},
    // comme
    {input: 'elle est belle comme le jour', output: 'Elle Est Belle comme le Jour'},
    {input: 'comme si nous pouvions', output: 'Comme si nous Pouvions'},
    // si
    {input: 'nous sommes allé si loin', output: 'Nous Sommes Allé si Loin'},
    {input: 'si loin', output: 'Si Loin'},
    // lorsque
    {input: 'elle partit lorsque tu arrivas', output: 'Elle Partit lorsque tu Arrivas'},
    {input: 'lorsque tu pars', output: 'Lorsque tu Pars'},
    // lorsqu
    {input: 'il partit lorsqu\'elle arriva', output: 'Il Partit lorsqu\'elle Arriva'},
    {input: 'lorsqu\'elle arriva', output: 'Lorsqu\'elle Arriva'},
    // puisque
    {input: 'il est là puisque je l\'ai vu', output: 'Il Est Là puisque je l\'Ai Vu'},
    {input: 'puisque tu pars', output: 'Puisque tu Pars'},
    // puisqu
    {input: 'ils viennent puisqu\'elle part', output: 'Ils Viennent puisqu\'elle Part'},
    {input: 'puisqu\'elle part', output: 'Puisqu\'elle Part'},
    // quoique
    {input: 'il ira quoique tu fasses', output: 'Il Ira quoique tu Fasses'},
    {input: 'quoique nous fassions', output: 'Quoique nous Fassions'},
    // quoiqu
    {input: 'il l\'aime quoiqu\'elle fasse', output: 'Il l\'Aime quoiqu\'elle Fasse'},
    {input: 'quoiqu\'elle fasse', output: 'Quoiqu\'elle Fasse'}
  ],
  // à, chez, dans, entre, jusque, jusqu, hors, par, pour, sans, vers, sur, pas, parmi,
  // avec, sous, en (and others)
  wordReplacementsPrepositions: [
    // à
    {input: 'motards à jamais', output: 'Motards à Jamais'},
    {input: 'à toute allure', output: 'A Toute Allure'},
    // chez
    {input: 'viens chez nous', output: 'Viens chez nous'},
    {input: 'chez nous', output: 'Chez nous'},
    // dans
    {input: 'le pont dans la vase', output: 'Le Pont dans la Vase'},
    {input: 'dans mes veines', output: 'Dans mes Veines'},
    // entre
    {input: 'le jour entre les lattes', output: 'Le Jour entre les Lattes'},
    {input: 'entre lui et elle', output: 'Entre Lui et elle'},
    // jusque
    {input: 'depuis là jusque dans la maison', output: 'Depuis Là jusque dans la Maison'},
    {input: 'jusque par-dessus la tête', output: 'Jusque Par-Dessus la Tête'},
    // jusqu
    {input: 'révêr jusqu\'au jour', output: 'Révêr jusqu\'au Jour'},
    {input: 'jusqu\'au lendemain', output: 'Jusqu\'au Lendemain'},
    // hors
    {input: 'sortez hors de chez moi', output: 'Sortez hors de chez Moi'},
    {input: 'hors la loi', output: 'Hors la Loi'},
    // par
    {input: 'deçue par la vie', output: 'Deçue par la Vie'},
    {input: 'par dessus les nuages', output: 'Par Dessus les Nuages'},
    // pour
    {input: 'tout pour le tout', output: 'Tout pour le Tout'},
    {input: 'pour la vie', output: 'Pour la Vie'},
    // sans
    {input: 'vivre sans limite', output: 'Vivre sans Limite'},
    {input: 'sans foi ni loi', output: 'Sans Foi ni Loi'},
    // vers
    {input: 'le regard vers le large', output: 'Le Regard vers le Large'},
    {input: 'vers l\'infini et au-delà', output: 'Vers l\'Infini et Au-Delà'},
    // sur
    {input: 'argent sur providence', output: 'Argent sur Providence'},
    {input: 'sur lui', output: 'Sur Lui'},
    // pas
    {input: 'il ne faut pas', output: 'Il ne Faut pas'},
    {input: 'pas toi', output: 'Pas Toi'},
    // parmi
    {input: 'l\'intru parmi eux', output: 'L\'Intru parmi Eux'},
    {input: 'parmi nous', output: 'Parmi nous'},
    // avec
    {input: 'lui avec ses amis', output: 'Lui avec ses Amis'},
    {input: 'avec eux', output: 'Avec Eux'},
    // sous
    {input: 'l\'eau sous la glace', output: 'L\'Eau sous la Glace'},
    {input: 'sous la neige', output: 'Sous la Neige'},
    // en
    {input: 'en route', output: 'En Route'},
    {input: 'escales en terres inconnues', output: 'Escales en Terres Inconnues'}
  ],
  // je, tu, il, elle, on, nous, vous, ils, elles, me, te, se, y
  wordReplacementsPersonalPronouns: [
    // je
    {input: 'pourquoi je pleure', output: 'Pourquoi je Pleure'},
    {input: 'je suis moi', output: 'Je Suis Moi'},
    // tu
    {input: 'toi au moins, tu es mort avant', output: 'Toi au Moins, tu Es Mort Avant'},
    {input: 'tu mourras moins bête', output: 'Tu Mourras Moins Bête'},
    // il
    {input: 'après il est parti', output: 'Après il Est Parti'},
    {input: 'il était seul', output: 'Il Etait Seul'},
    // elle
    {input: 'en chemin elle rencontre...', output: 'En Chemin elle Rencontre...'},
    {input: 'elle et lui', output: 'Elle et Lui'},
    // on
    {input: 'Après on ira au bois', output: 'Après on Ira au Bois'},
    {input: 'on nous dit rien', output: 'On nous Dit Rien'},
    // nous
    {input: 'le monde est à nous', output: 'Le Monde Est à nous'},
    {input: 'nous rentrons', output: 'Nous Rentrons'},
    // vous
    {input: 'si vous acceptez', output: 'Si vous Acceptez'},
    {input: 'vous et eux', output: 'Vous et Eux'},
    // ils
    {input: 'après ils sont partis', output: 'Après ils Sont Partis'},
    {input: 'ils étaient dix', output: 'Ils Etaient Dix'},
    // elles
    {input: 'comme elles', output: 'Comme elles'},
    {input: 'elles étaient dix', output: 'Elles Etaient Dix'},
    // me
    {input: 'laisse moi me prendre en charge', output: 'Laisse Moi me Prendre en Charge'},
    {input: 'me perdre', output: 'Me Perdre'},
    // te
    {input: 'je te rejoindrai', output: 'Je te Rejoindrai'},
    {input: 'te dira pas', output: 'Te Dira pas'},
    // se
    {input: 'il faut se connaître soi-même', output: 'Il Faut se Connaître Soi-Même'},
    {input: 'se perdre', output: 'Se Perdre'},
    // y
    {input: 'il y avait', output: 'Il y Avait'},
    {input: 'y a pas', output: 'Y A pas'}

  ],
  // qui, que, quoi, dont, où
  wordReplacementsRelativePronouns: [
    // qui
    {input: 'ceux qui ont des ailes', output: 'Ceux qui Ont des Ailes'},
    {input: 'qui est la?', output: 'Qui Est La?'},
    // que
    {input: 'pendant que le roi de prusse...', output: 'Pendant que le Roi de Prusse...'},
    {input: 'que sa volonté soit faite', output: 'Que sa Volonté Soit Faite'},
    // quoi
    {input: 'A quoi bon', output: 'A quoi Bon'},
    {input: 'quoi faire', output: 'Quoi Faire'},
    // dont
    {input: 'celui dont on parle', output: 'Celui dont on Parle'},
    {input: 'dont nous aimons la compagnie', output: 'Dont nous Aimons la Compagnie'},
    // où
    {input: 'le pays où il est né', output: 'Le Pays où il Est Né'},
    {input: 'où aller?', output: 'Où Aller?'}
  ],
  // ne
  wordReplacementsOthers: [
    // ne
    {input: 'il ne viendra pas', output: 'Il ne Viendra pas'},
    {input: 'ne fais pas ca', output: 'Ne Fais pas Ca'}
  ],
  wordReplacementswithQuotes: [
    // c'
    {input: 'ça, c\'est paris', output: 'Ca, c\'est Paris'},
    {input: 'c\'est triste', output: 'C\'est Triste'},
    // d'
    {input: 'le marquis d\'anaon', output: 'Le Marquis d\'Anaon'},
    {input: 'd\'artagnan', output: 'D\'Artagnan'},
    // j'
    {input: 'dites-moi que j\'existe', output: 'Dites-Moi que j\'existe'},
    {input: 'j\'ai tué françois', output: 'J\'ai Tué François'},
    // l'
    {input: 'moi l\'homme', output: 'Moi l\'Homme'},
    {input: 'l\'emmerdeur', output: 'L\'Emmerdeur'},
    // m'
    {input: 'ça m\'intéresse', output: 'Ca m\'intéresse'},
    {input: 'avoue tu m\'aimes', output: 'Avoue tu m\'aimes'},
    // n'
    {input: 'je n\'ai pas raison', output: 'Je n\'ai pas Raison'},
    {input: 'n\'ai pas peur', output: 'N\'ai pas Peur'},
    // s'
    {input: 'elle s\'est fait mal', output: 'Elle s\'est Fait Mal'},
    {input: 's\'affoler pour rien', output: 'S\'affoler pour Rien'},
    // 's
    {input: 'simon\'s cat', output: 'Simon\'s Cat'},
    // t'
    {input: 'si tu freines t\'es un lâche', output: 'Si tu Freines t\'es un Lâche'},
    {input: 't\'abuses ikko', output: 'T\'abuses Ikko'}
  ],
  wordReplacementsSpecialChars: [
    // -
    {input: 'en extrême-orient', output: 'En Extrême-Orient'},
    {input: 'extrême-orient', output: 'Extrême-Orient'},
    // -t-
    {input: 'comment s\'appelle-t-il?', output: 'Comment s\'appelle-t-il?'},
    {input: 'ce mot existe-t-il?', output: 'Ce Mot Existe-t-il?'},
    // A.C.R.O.N.Y.M.S
    {input: 'avec s.a.m.', output: 'Avec S.A.M.'},
    {input: 's.a.m.', output: 'S.A.M.'}
  ],
  upperCaseReplacements: [
    // à
    {input: 'motards à jamais', output: 'Motards à Jamais'},
    {input: 'à toute allure', output: 'A Toute Allure'},
    // é
    {input: 'le bruit de l\'écho', output: 'Le Bruit de l\'Echo'},
    {input: 'écho des savanes', output: 'Echo des Savanes'},
    // è
    {input: 'post ère moderne', output: 'Post Ere Moderne'},
    {input: 'ère moderne', output: 'Ere Moderne'},
    // ç
    {input: 'ça m\'intéresse', output: 'Ca m\'intéresse'},
    {input: 'tu aimes ça', output: 'Tu Aimes Ca'}
  ],
  withNewWords: [
    // tutu
    {input: 'mon nouvau texte avec tutu', output: 'Mon Nouvau Texte avec tutu'},
    {input: 'tutu est arrivé', output: 'Tutu Est Arrivé'},
    // toto
    {input: 'mon nouvau texte avec tutu et tata', output: 'Mon Nouvau Texte avec tutu et tata'},
    {input: 'tata et tutu sont là', output: 'Tata et tutu Sont Là'},
    // tata
    {input: 'mon nouvau texte avec tata sans tutu', output: 'Mon Nouvau Texte avec tata sans tutu'},
    {input: 'Toto se rajoute à tutu et tata', output: 'Toto se Rajoute à tutu et tata'}
  ],
  withoutNewWords: [
    // tutu
    {input: 'mon nouvau texte avec tutu', output: 'Mon Nouvau Texte avec Tutu'},
    {input: 'tutu est arrivé', output: 'Tutu Est Arrivé'},
    // toto
    {input: 'mon nouvau texte avec tutu et tata', output: 'Mon Nouvau Texte avec Tutu et Tata'},
    {input: 'tata et tutu sont là', output: 'Tata et Tutu Sont Là'},
    // tata
    {input: 'mon nouvau texte avec tata sans tutu', output: 'Mon Nouvau Texte avec Tata sans Tutu'},
    {input: 'Toto se rajoute à tutu et tata', output: 'Toto se Rajoute à Tutu et Tata'}
  ],
  keepCapitalizedSpecials: [
    // Ç
    {input: 'tu aimes ça', output: 'Tu Aimes Ça'},
    {input: 'ça va ou bien', output: 'Ça Va ou Bien'},
    // À
    {input: 'à l\'eau', output: 'À l\'Eau'},
    {input: 'lampe à pétrole', output: 'Lampe à Pétrole'},
    // À
    {input: 'l\'été indien', output: 'L\'Été Indien'},
    {input: 'en avant vers les étoiles', output: 'En Avant vers les Étoiles'}
  ]
};

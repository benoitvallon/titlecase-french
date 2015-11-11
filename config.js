module.exports = {
  capitalizedSpecials: [
    { input: 'À', output: 'A'},
    { input: 'Â', output: 'A'},
    { input: 'Ä', output: 'A'},
    { input: 'É', output: 'E'},
    { input: 'È', output: 'E'},
    { input: 'Ê', output: 'E'},
    { input: 'Ë', output: 'E'},
    { input: 'Ç', output: 'C'},
    { input: 'Î', output: 'I'},
    { input: 'Ï', output: 'I'},
    { input: 'Ô', output: 'O'},
    { input: 'Ö', output: 'O'},
    { input: 'Û', output: 'U'},
    { input: 'Ü', output: 'U'},
    { input: 'Ù', output: 'U'}
  ],
  removeCapitalizedSpecials : [],
  lowerCaseAfterQuoteAnd: ['c', 'j', 'm', 'n', 's', 't'],
  capitalizeAfterQuoteAnd: ['l', 'd'],
  lowerCaseWordList:
    // definite articles
    'le,la,les' +
    // indefinite articles
    ',un,une,des' +
    // partitive articles
    ',du,de,des' +
    // contracted articles
    ',au,aux,du,des' +
    // demonstrative adjectives
    ',ce,cet,cette,ces' +
    // exclamative adjectives
    ',quel,quels,quelle,quelles' +
    // possessive adjectives
    ',mon,ton,son,notre,votre,leur,ma,ta,sa,mes,tes,ses,nos,vos,leurs' +
    // coordinating conjunctions
    ',mais,ou,et,donc,or,ni,car,voire' +
    // subordinating conjunctions
    ',que,qu,quand,comme,si,lorsque,lorsqu,puisque,puisqu,quoique,quoiqu' +
    // prepositions
    ',à,chez,dans,entre,jusque,jusqu,hors,par,pour,sans,vers,sur,pas,parmi,avec,sous,en' +
    // personal pronouns
    ',je,tu,il,elle,on,nous,vous,ils,elles,me,te,se,y' +
    // relative pronouns
    ',qui,que,quoi,dont,où' +
    // others
    ',ne'
};

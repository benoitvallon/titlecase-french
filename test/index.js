require('chai').should();
var examples = require('./examples');
var titleCaseFrench = require('../index');

describe('titleCase-french', function() {
  it('should replace the definite articles (le,la,les,l\')', function() {
    examples.wordReplacementsDefiniteArticles.forEach(function(example) {
      titleCaseFrench.convert(example.input).should.equal(example.output);
    });
  });

  it('should replace the indefinite articles (un,une,des)', function() {
    examples.wordReplacementsIndefiniteArticles.forEach(function(example) {
      titleCaseFrench.convert(example.input).should.equal(example.output);
    });
  });

  it('should replace the partitive articles (du,de la,de l\',des)', function() {
    examples.wordReplacementsPartitiveArticles.forEach(function(example) {
      titleCaseFrench.convert(example.input).should.equal(example.output);
    });
  });

  it('should replace the contracted articles (au,aux,du,des)', function() {
    examples.wordReplacementsContractedArticles.forEach(function(example) {
      titleCaseFrench.convert(example.input).should.equal(example.output);
    });
  });

  it('should replace the demonstrative adjectives (ce,cet,cette,ces)', function() {
    examples.wordReplacementsDemonstrativeAdjectives.forEach(function(example) {
      titleCaseFrench.convert(example.input).should.equal(example.output);
    });
  });

  it('should replace the exclamative adjectives (quel,quels,quelle,quelles)', function() {
    examples.wordReplacementsExclamativeAdjectives.forEach(function(example) {
      titleCaseFrench.convert(example.input).should.equal(example.output);
    });
  });

  it('should replace the possessive adjectives (mon,ton,son,notre,votre,leur,ma,ta,sa,mes,tes,ses,nos,vos,leurs)', function() {
    examples.wordReplacementsPossessiveAdjectives.forEach(function(example) {
      titleCaseFrench.convert(example.input).should.equal(example.output);
    });
  });

  it('should replace the coordinating conjunctions (mais,ou,et,donc,or,ni,car,voire)', function() {
    examples.wordReplacementsCoordinatingConjunctions.forEach(function(example) {
      titleCaseFrench.convert(example.input).should.equal(example.output);
    });
  });

  it('should replace the subordinating conjunctions (que,quand,comme,si,lorsque,puisque,quoique)', function() {
    examples.wordReplacementsSubordinatingConjunctions.forEach(function(example) {
      titleCaseFrench.convert(example.input).should.equal(example.output);
    });
  });

  it('should replace the prepositions (à,chez,dans,entre,jusque,hors,par,pour,sans,vers,sur,pas,parmi,avec,sous,en,(and others))', function() {
    examples.wordReplacementsPrepositions.forEach(function(example) {
      titleCaseFrench.convert(example.input).should.equal(example.output);
    });
  });

  it('should replace the personal pronouns (je,tu,il,elle,nous,vous,ils,elles,me,te,se,y)', function() {
    examples.wordReplacementsPersonalPronouns.forEach(function(example) {
      titleCaseFrench.convert(example.input).should.equal(example.output);
    });
  });

  it('should replace the relative pronouns (qui,que,quoi,dont,où)', function() {
    examples.wordReplacementsRelativePronouns.forEach(function(example) {
      titleCaseFrench.convert(example.input).should.equal(example.output);
    });
  });

  it('should replace the other words (ne)', function() {
    examples.wordReplacementsOthers.forEach(function(example) {
      titleCaseFrench.convert(example.input).should.equal(example.output);
    });
  });

  it('should replace wih quotes (c\',d\',j\',m\',n\',s\',\'s,t\')', function() {
    examples.wordReplacementswithQuotes.forEach(function(example) {
      titleCaseFrench.convert(example.input).should.equal(example.output);
    });
  });

  it('should replace the special chars (-,-t-,A.C.R.O.N.Y.M.S)', function() {
    examples.wordReplacementsSpecialChars.forEach(function(example) {
      titleCaseFrench.convert(example.input).should.equal(example.output);
    });
  });

  it('should replace the uppercase accent (É,È,À,Ç)', function() {
    examples.upperCaseReplacements.forEach(function(example) {
      titleCaseFrench.convert(example.input).should.equal(example.output);
    });
  });

  it('should replace the added words "tutu,tata,toto"', function() {
    // add the words a first time with specific inconsistent writing
    titleCaseFrench.addLowerCaseWords('tutu, toto , tata ');
    examples.withNewWords.forEach(function(example) {
      titleCaseFrench.convert(example.input).should.equal(example.output);
    });

    // add the words a second time
    titleCaseFrench.addLowerCaseWords('tutu,toto,tata');
    examples.withNewWords.forEach(function(example) {
      titleCaseFrench.convert(example.input).should.equal(example.output);
    });
  });

  it('should not replace the removed words "tutu,tata,toto"', function() {
    // remove the words a first time with specific inconsistent writing
    titleCaseFrench.removeLowerCaseWords('tutu, toto , tata ');
    examples.withoutNewWords.forEach(function(example) {
      titleCaseFrench.convert(example.input).should.equal(example.output);
    });

    // remove the words a second time
    titleCaseFrench.removeLowerCaseWords('tutu,toto,tata');
    examples.withoutNewWords.forEach(function(example) {
      titleCaseFrench.convert(example.input).should.equal(example.output);
    });
  });

  it('should not replace the removed capitalized specials "À,Ç,É"', function() {
    // remove the words a first time with specific inconsistent writing
    titleCaseFrench.keepCapitalizedSpecials(' À ,Ç , É ');
    examples.keepCapitalizedSpecials.forEach(function(example) {
      titleCaseFrench.convert(example.input).should.equal(example.output);
    });

    // remove the words a second time
    titleCaseFrench.keepCapitalizedSpecials('À,Ç,É');
    examples.keepCapitalizedSpecials.forEach(function(example) {
      titleCaseFrench.convert(example.input).should.equal(example.output);
    });
  });
});

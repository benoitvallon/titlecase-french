'use strict';

var config = require('./config');

function replaceCapitalizedSpecials(text) {
  if (text) {
    config.capitalizedSpecials.forEach(function(capitalizedSpecial){
      if (!~config.removeCapitalizedSpecials.indexOf(capitalizedSpecial.input)) {
        text = text.replace(new RegExp(capitalizedSpecial.input, 'g'), capitalizedSpecial.output);
      }
    });
  }
  return text;
}

function isLowerCaseWord(text) {
  return config.lowerCaseWordList.split(',').some(function(word) {
    if (text.toLowerCase() === word) {
      return word;
    }
  });
}

function capitalizeFirst(text) {
  return text.charAt(0).toUpperCase() + text.substr(1);
}

function capitalizeFirstIfNeeded(text) {
  if (isLowerCaseWord(text)) {
    return text.toLowerCase();
  }
  return capitalizeFirst(text);
}

function hasQuote(text) {
  var txtWithQuote = text.split('\'');
  if (txtWithQuote.length === 2) {
    return true;
  } else {
    return false;
  }
}

function capitalizeWithQuote(text) {
  var txtWithQuote = text.split('\'');
  if (txtWithQuote.length === 2) {
    // could be d' or l', if it is the first word (l'Autre)
    if (txtWithQuote[0].length === 1 && ~config.capitalizeAfterQuoteAnd.indexOf(txtWithQuote[0])) {
      text = txtWithQuote[0].toLowerCase() + '\'' + capitalizeFirstIfNeeded(txtWithQuote[1]);
    }
    // could be c', m', t', j', n', s' if it is the first word (c'est)
    if (txtWithQuote[0].length === 1 && ~config.lowerCaseAfterQuoteAnd.indexOf(txtWithQuote[0])) {
      text = txtWithQuote[0].toLowerCase() + '\'' + txtWithQuote[1].toLowerCase();
    }
    // could be 's
    if (txtWithQuote[1].length === 1) {
      text = capitalizeFirstIfNeeded(txtWithQuote[0]) + '\'' + txtWithQuote[1].toLowerCase();
    }
    // could be jusqu'au
    if (txtWithQuote[0].length > 1 && txtWithQuote[1].length > 1) {
      text = capitalizeFirstIfNeeded(txtWithQuote[0]) + '\'' + capitalizeFirstIfNeeded(txtWithQuote[1]);
    }
    return text;
  } else {
    return capitalizeFirstIfNeeded(text);
  }
}

function capitalizeEachWord(text) {
  if (text) {
    text = text.split(' ').map(function(txt, index) {
      var isComposedWord = false;

      // reset the word with lowercase
      txt = txt.toLowerCase();

      // look for '
      if (hasQuote(txt)) {
        isComposedWord = true;
        txt = capitalizeWithQuote(txt);
      }

      // look for -
      var txtWithDash = txt.split('\-');
      if (txtWithDash.length === 2) {
        return capitalizeFirst(txtWithDash[0]) + '\-' + capitalizeFirstIfNeeded(txtWithDash[1]);
      }

      // look for .
      var txtWithDot = txt.split('.');
      if (txtWithDot.length > 1) {
        return txtWithDot.map(function(letter) {
          return capitalizeFirst(letter);
        }).join('.');
      }

      // look for know words to replace if it is not the first word of the sentence
      if (index === 0) {
        return capitalizeFirst(txt);
      } else {
        if (isLowerCaseWord(txt)) {
          return txt.toLowerCase();
        }
        if (isComposedWord) {
          return txt;
        }
        return capitalizeFirst(txt);
      }
    }).join(' ');
  }
  return text;
}

module.exports.convert = function (text) {
  return replaceCapitalizedSpecials(capitalizeEachWord(text));
};

module.exports.addLowerCaseWords = function (words) {
  config.lowerCaseWordList = config.lowerCaseWordList + ',' + words.split(',').map(function(word){
    return word.trim();
  }).join(',');
};

module.exports.removeLowerCaseWords = function (words) {
  var wordsToRemove = words.split(',').map(function(word) {
    return word.trim();
  });
  config.lowerCaseWordList = config.lowerCaseWordList.split(',').filter(function(word) {
    if (!~wordsToRemove.indexOf(word)) {
      return true;
    }
  }).join(',');
};

module.exports.keepCapitalizedSpecials = function(letters) {
  config.removeCapitalizedSpecials = letters.split(',').map(function(letter) {
    return letter.trim();
  });
};

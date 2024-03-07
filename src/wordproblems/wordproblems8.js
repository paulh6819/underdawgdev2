"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tempWordList_1 = require("../../scripts/tempWordList");
// What are all of the words with no vowel and not even a Y?
function wordsWithNoVowelsOrY(arr) {
  return arr.filter(function (word) {
    var vowels = "aeuioy";
    var toUpperCaseVowels = vowels.toUpperCase();
    var splitWord = word.toUpperCase().split("");
    for (var _i = 0, splitWord_1 = splitWord; _i < splitWord_1.length; _i++) {
      var char = splitWord_1[_i];
      if (toUpperCaseVowels.includes(char)) {
        console.log("this should be a vowel:", char);
        splitWord.pop();
        break;
      }
    }
    return splitWord.length === word.length;
  });
}
console.log(wordsWithNoVowelsOrY(tempWordList_1.tempWords));

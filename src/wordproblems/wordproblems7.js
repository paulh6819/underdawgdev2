"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tempWordList_1 = require("../../scripts/tempWordList");
// What are all of the words that both start and end with a Y?
function startsWithEndsWithY(arr) {
  var result = [];
  for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var word = arr_1[_i];
    if (word[0] === "y" && word[word.length - 1] === "y") {
      result.push(word);
    }
  }
  return result;
}
console.log(startsWithEndsWithY(tempWordList_1.tempWords));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tempWordList_1 = require("../scripts/tempWordList");
// Words with X, Y, and Z: []
function returnsWordsWithXYZIncluded(arr) {
    return arr.filter(function (word) { return word.includes("x") && word.includes("y") && word.includes("z"); });
}
console.log(tempWordList_1.tempWords);
console.log(returnsWordsWithXYZIncluded(tempWordList_1.tempWords));

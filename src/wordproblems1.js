"use strict";
//word problem one
//What are all of the words containing UU?
Object.defineProperty(exports, "__esModule", { value: true });
var tempWordList_1 = require("../scripts/tempWordList");
// console.log(tempWords);
var tempWordsB = [
    "vacuum",
    "continuum",
    "luxury",
    "xylophone",
    "quartz",
    "quiz",
    "catapult",
    "cater",
    "strengths",
    "rhythms",
    "symphony",
    "unquestionably",
    "box",
    "buxom",
    "yesterday",
    "yummy",
    "crypt",
    "gypsy",
    "aeiou",
    "facetious",
    "sequoia",
    "educationally",
    "queue",
    "muumuu",
    "buxomly",
    "exquisite",
    "taxonomy",
    "quixotic",
    "yakuza",
    "catty",
    "catalog",
    "crystal",
    "pneumonoultramicroscopicsilicovolcanoconiosis",
    "subsequent",
    "ambiguous",
    "juxtapose",
    "zealous",
    "xylography",
];
function returnsWordsWithUUIncluded(arr) {
    return arr.filter(function (word) { return word.includes("UU"); });
}
console.log(tempWordList_1.tempWords);
console.log(returnsWordsWithUUIncluded(tempWordList_1.tempWords));

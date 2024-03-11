// import { tempWords } from "../scripts/tempWordList";
// What are all of the words that have all 5 vowels, in any order?
var tempWords = [
    "aieuo",
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
    "UU",
    "uu",
    "UUYUUYUUUU",
    "qat",
    "scats",
    "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
    "hohohohohohohohohohohohohohohoohohohohohohohhohohoho",
    "sh",
    "mm",
    "MM",
];
function allWordWithFiveVowels(arr) {
    var result = [];
    var vowels = "aeiou";
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var word = arr_1[_i];
        var counter = 0;
        var splitWord = word.split("");
        for (var _a = 0, splitWord_1 = splitWord; _a < splitWord_1.length; _a++) {
            var char = splitWord_1[_a];
            if (splitWord.includes(char)) {
                counter += 1;
            }
        }
        if (counter === word.length) {
            result.push(word);
        }
    }
    return result;
}
console.log(allWordWithFiveVowels(tempWords));

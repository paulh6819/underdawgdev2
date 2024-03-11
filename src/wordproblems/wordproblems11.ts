//shortest word that contains all 5 vowels

//these below wont export
// import { allWordWithFiveVowels } from "./wordproblems10";
//import { tempWords } from "../../scripts/tempWordList";
const tempWords7: string[] = [
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
];

function allWordWithFiveVowels(arr: string[]): string[] {
  let result: string[] = [];

  let vowels: string = "aeiou";

  for (let word of arr) {
    if (word.length < 5) continue;
    let vowelSet: Set<string> = new Set();

    for (let char of word) {
      if (vowels.includes(char)) {
        vowelSet.add(char);
      }
    }
    if (vowelSet.size === vowels.length) {
      result.push(word);
    }
  }

  return result;
}

function shortestWordAllVowels(arr: string[]): string {
  const wordsWithAllVowels = allWordWithFiveVowels(arr);
  return wordsWithAllVowels.sort((a, b) => a.length - b.length)[0];
}

console.log(shortestWordAllVowels(tempWords7));

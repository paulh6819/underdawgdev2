// import { tempWords } from "../scripts/tempWordList";

const words: string[] = [
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

// What are all of the words that have all 5 vowels, in alphabetical order

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

function allWordsWithAEIOUinAlphbaticalOrder(arr: string[]): string[] {
  let hasAllVowels: string[] = allWordWithFiveVowels(arr);
  return hasAllVowels.filter(
    (word) =>
      word.indexOf("a") < word.indexOf("e") &&
      word.indexOf("e") < word.indexOf("i")
  );
}

console.log(allWordsWithAEIOUinAlphbaticalOrder(words));

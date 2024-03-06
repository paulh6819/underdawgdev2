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
  "aeaeiou",
];

// What are all of the words that have all 5 vowels, in alphabetical order- with no vowels can be out of alphabetical order

function allWordsWithFiveVowels(arr: string[]): string[] {
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
  let hasAllVowels: string[] = allWordsWithFiveVowels(arr);

  return hasAllVowels.filter(
    (word) =>
      word.lastIndexOf("a") < word.indexOf("e") &&
      word.lastIndexOf("e") < word.indexOf("i") &&
      word.lastIndexOf("i") < word.indexOf("o") &&
      word.lastIndexOf("o") < word.indexOf("u")
  );

  //compare for each vowel its lastindexOf with the next vowels indexOf, and if lastIndexOf is larger, it fails.
}

console.log(allWordsWithAEIOUinAlphbaticalOrder(words));

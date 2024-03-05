// import { tempWords } from "../scripts/tempWordList";
// What are all of the words that have all 5 vowels, in any order?

const tempWords: string[] = [
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
  "aaaaeeeiiiiuuuoooooooiuiue",
];

function allWordWithFiveVowelsFirst(arr: string[]): string[] {
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

console.log(allWordWithFiveVowelsFirst(tempWords));

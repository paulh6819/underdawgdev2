// What is the longest palindrome?
import { tempWords } from "../../scripts/tempWordList";

const tempwords10: string[] = [
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
  "racecar",
  "hohohohohohohohohohohohohohohoohohohohohohohhohohoho",
  "qqt",
  "mm",
  "xtfgy",
];

const longestPalindrome = (arr: string[]): string => {
  let count = 0;
  let result = "";
  for (let word of arr) {
    if (word.split("").reverse().join("") === word && word.length > count) {
      count = word.length;
      result = word;
    }
  }
  if (result.length) {
    return result;
  } else {
    return "There are no palindromes";
  }
};
console.log(longestPalindrome(tempWords));

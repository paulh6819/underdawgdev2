//longest word no vowels

const tempwords8: string[] = [
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
  "qqt",
  "mm",
  "xtfgy",
];

function shortestWordNoVowels(arr: string[]): string {
  const wordsWithNoVowels = arr.filter((word) => {
    const lowerCaseWord = word.toLowerCase();
    if (
      !lowerCaseWord.includes("a") &&
      !lowerCaseWord.includes("e") &&
      !lowerCaseWord.includes("i") &&
      !lowerCaseWord.includes("o") &&
      !lowerCaseWord.includes("u")
    ) {
      return true;
    } else {
      return false;
    }
  });

  const longestWord = wordsWithNoVowels.sort((a, b) => b.length - a.length);
  return longestWord[0];
}

console.log(shortestWordNoVowels(tempwords8));

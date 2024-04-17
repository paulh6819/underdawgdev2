//which of the letters q,x and z, is the least common?

// 1. i would make an object that would hold counts for these letters. 2. i would iterate over ever word and then iterate over every letter and add
// a count to the letters in the object. and then i will sort the keys by the values and that will give the least common

const parser16 = require("../../scripts/cvsParser");
const words16 = parser16.takesPath("../../csv/sowpods.txt");

function leastOfQXZ(words: string[]): string {
  const letterObj = {
    Q: 0,
    Y: 0,
    Z: 0,
  };

  let joinedWords = words16.join("");

  for (let char of joinedWords) {
    if (char === "Q") {
      letterObj["Q"] += 1;
    }
    if (char === "Y") {
      letterObj["Y"] += 1;
    }
    if (char === "Z") {
      letterObj["Z"] += 1;
    }
  }

  let leastCommonChar = "Q";
  let leastCommonCharCount = letterObj["Q"];

  for (let item of Object.keys(letterObj)) {
    console.log(letterObj[(item as "Q") || "X" || "Z"], item);
    if (
      letterObj[(item as "Q") || "X" || "Z"] < leastCommonCharCount ||
      letterObj[(item as "Q") || "X" || "Z"] === leastCommonCharCount
    ) {
      console.log(item);
    }
  }

  return "";
}

leastOfQXZ(words16);

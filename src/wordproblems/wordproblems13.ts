// Which of the letters Q, X, and Z is the least common?

const tempwords9: string[] = [
  "vacuum",
  "continuum",
  "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
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
  "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
  "hohohohohohohohohohohohohohohoohohohohohohohhohohoho",
  "qqt",
  "mm",
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxtfgy",
];

//finish this later

function whichIsLessCommonQXZ(arr: string[]): string {
  let charObj: any = { q: 0, x: 0, z: 0 };

  const joinedArr = arr.join("");
  for (let char of joinedArr) {
    if (char === "q") {
      charObj.q++;
    }

    if (char === "x") {
      charObj.x++;
    }
    if (char === "z") {
      charObj.z++;
    }
  }

  // let count = charObj.q;
  let leastCommon = "q";

  if (charObj.x < charObj.q) {
    leastCommon = "x";
  }
  if (charObj.z < charObj.x && charObj.z < charObj.q) {
    leastCommon = "z";
  }

  //   console.log(charObj, "this is the char object");

  //   for (let char in charObj) {
  //     if (charObj[char] < count) {
  //       leastCommon = char;
  //       count = charObj[char];
  //     }
  //   }
  return leastCommon;
}

console.log(whichIsLessCommonQXZ(tempwords9));

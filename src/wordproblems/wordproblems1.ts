//word problem one
//What are all of the words containing UU?

import { tempWords } from "../../scripts/tempWordList";
// console.log(tempWords);

function returnsWordsWithUUIncluded(arr: string[]): string[] {
  return arr.filter((word) => word.includes("UU"));
}

console.log(returnsWordsWithUUIncluded(tempWords));

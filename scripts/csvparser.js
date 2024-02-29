//input: csv text file, output parsed text into array of strings

import { readFileSync } from "node:fs";

// macOS, Linux, and Windows
readFileSync("../csv/sowpods.txt");
// => [Error: EISDIR: illegal operation on a directory, read <directory>]

function takesPath(path) {
  let buffer = readFileSync(path);
  let parsedText = [];
  console.log(buffer);
  return parsedText;
}

takesPath("../csv/sowpods.txt");

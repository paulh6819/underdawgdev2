// import { readFileSync } from "node:fs";
const fs = require("fs");
// macOS, Linux, and Windows
// fs.readFileSync("../csv/sowpods.txt")
// => [Error: EISDIR: illegal operation on a directory, read <directory>]

// TODO: 1. look up the type of "path"
//       2. think of more appropiate name for the function
//       3. configure this file to allow for more functions
//       4. create a unit test for this -- look up on my own and read the IMB article
//       5. create an error handling for an empty path

function takesPath(path: string): string[] {
  let buffer = fs.readFileSync(path);
  let words: string[] = buffer.toString().split("\n");

  return words;
}

module.exports = { takesPath };

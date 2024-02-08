const fs = require("fs");

// Reading data from the file
const data = fs.readFileSync("./text.txt", "utf-8");
console.log(data);

// Writing data to the file
fs.appendFileSync("./text.txt", "\n we are not humans experiencing the universe; we are the universe experiencing a human life!", "utf-8");
console.log(data);
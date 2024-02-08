const fs = require("fs")


const data = fs.writeFileSync("text.txt","hellooo ........")
console.log(data)

fs.appendFileSync('text.txt','this is oum');

fs.copyFileSync('text.txt','text-1.txt');

//fs.unlinkSync('text-1.txt');

console.log("oumaima kadir was here");

const fs = require("fs")


const data = fs.readFileSync("./text.txt","utf-8")
console.log(data)

const chaiData = "Where there's a will, there's a way.";
fs.writeFileSync("./text.txt" , chaiData , "utf-8");
console.log(chaiData);
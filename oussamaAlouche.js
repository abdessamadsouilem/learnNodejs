
const fs = require("fs");

const quote = 'Madeira, Manchester, Madrid, Turin and Manchester again, Reeved in red. Restored to this great gallery of the game. A walking work of art. Vintage. Beyond valuation. Beyond forgery or imitation. 18 years since that trembling teenager of touch and tease first tiptoed onto this storied stage, now in his immaculate maturity, CR7 reunited!';

try {
    fs.writeFileSync('./text.txt', quote);
} 
    catch (error) {
    console.log(error);
}
const data = fs.readFileSync("./text.txt","utf-8");
console.log(data);
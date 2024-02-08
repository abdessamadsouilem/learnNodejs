const fs = require('fs');
const textAdd = `Hello, i'm josé morinho`;

function appendTextToFile(text) {
  const filePath = 'text.txt';

  fs.appendFile(filePath, text, (err) => {
    if (err) {
      console.error('Error:', err);
    } else {
      console.log('successfully.');
    }
  });
}

appendTextToFile(textAdd);

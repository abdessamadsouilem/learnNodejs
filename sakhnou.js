const fs = require('fs');

const filePath = 'text.txt';

const dataToAppend = '\nHellon it\'s younes, this my first commit.\n';

fs.appendFile(filePath, dataToAppend, (err) => {
  if (err) {
    console.error('Error appending to file:', err);
  } else {
    console.log('Data has been appended to the file.');
  }
});

const fs = require('fs');
const content = "I'm going to blow your mind with a simple truth: the power to change your life lies within your own thoughts and actions.";
const filePath = 'text.txt';

fs.writeFile(filePath, content, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
  console.log('File created successfully!');
});

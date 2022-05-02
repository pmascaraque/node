const fs = require('fs');

const dirname = process.argv[2];
const ext = process.argv[3];

fs.readdir(dirname, (err, list) => { //read directory
  if (err) {
    console.log(err);
    return;
  }

  list.forEach(file => { //list each file in directory
      file.split('.')[1] === ext ? console.log(file) : null;
  });
});
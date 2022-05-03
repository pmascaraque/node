const fs = require('fs');

module.exports = (dirname, ext, callback) => {
    fs.readdir(dirname, (err, list) => { //read directory
        if (err) {
            return callback(err);
        }

        const filteredList = list.filter(file => { //list each file in directory
            return file.split('.')[1] === ext;
        });

        callback(null, filteredList);
    });

};
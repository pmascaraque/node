const mymodule = require('./mymodule.js');

mymodule(process.argv[2], process.argv[3], (err, list) => {
    if (err) return console.error('There was an error:', err);

    list.forEach(file => {
        console.log(file);
    });
});
const fs = require('fs');
const fsPromises = fs.promises;

fsPromises.opendir(__dirname)
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });

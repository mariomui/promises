/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = (filePath, callback) => {
  fs.readFile(filePath, (err, lines) => {
    if (err) {
      callback(err);          
    } else{
      var firstLine = lines.toString().split('\n')[0];      
      callback(null, firstLine);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = (url, callback) => {
  request(url, (err, statusCode)=> {
    if(err) {
      callback(err);
    } else {
      callback(null, 200);
    }

  })
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};

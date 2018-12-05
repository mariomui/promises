
/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var rp = require('request-promise');
var fsp = Promise.promisifyAll(fs);

var fetchProfileAndWriteToFile = function (readFilePath, writeFilePath) {
  // TODO
  //read a githubusername
  // console.log(readFilePath);
  return fsp.readFileAsync(readFilePath).then(function (lines) {
    if (!lines) {
      throw new Error('line doesnt exists!');
    } else {
      var gitHandle = lines.toString().split('\n')[0];
      // console.log(gitHandle, 'ggjkdfjdlkfj');
      return gitHandle;
    }
  }).then(function (gitHandle) {
    var options = {
      uri: 'https://api.github.com/users/' + gitHandle,
      header: { statusCode: 200 },
      json: true,
    };
    var response = rp(options);
    // console.log(response);
    return response;
  }).then(function (response) {
    return fsp.writeFileAsync(writeFilePath, JSON.stringify(response));
  });

};

// var fetchProfileAndWriteToFileAsync = Promise

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};

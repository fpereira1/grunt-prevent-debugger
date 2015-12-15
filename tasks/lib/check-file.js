function disallowedIndex(largeString, disallowedString) {

  var regex = new RegExp(disallowedString, 'gm');
  var match = regex.exec(largeString);

  // Return the match accounting for the first submatch length.
  return match != null ? match.index : -1;
}

// returns undefined || obj
module.exports = function (fileContents, disallowed) {
  var res;

  if (disallowed instanceof Array) {

    disallowed.forEach(function (str) {
      if (disallowedIndex(fileContents, str) !== -1) {
        res = res || [];
        res.push({
          str: str,
          line: fileContents.substr(0, disallowedIndex(fileContents, str)).split('\n').length
        });
      }
    });
  }
  return res;
};

function countWords(inputWords) {
  // SOLUTION GOES HERE
  return inputWords.reduce(function(map, word) {
    map[word] = ++map[word] || 1;
    return map; 
  }, {});
}
function logger(namespace) {
  // SOLUTION GOES HERE
  return function() {
    var newArgs = [].concat.apply([namespace], arguments);
    console.log.apply(console, newArgs);
  };
}

module.exports = logger
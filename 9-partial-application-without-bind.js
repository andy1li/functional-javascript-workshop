function logger(namespace) {
  // SOLUTION GOES HERE
  return function() {
    var args = [].slice.call(arguments);
    console.log.apply(console, [namespace].concat(args));
  };
}

module.exports = logger
function duckCount() {
  // SOLUTION GOES HERE
  return [].filter.call(arguments, function(arg) {
    // console.log(arg, {}.hasOwnProperty.call(arg, 'quack'));
    return {}.hasOwnProperty.call(arg, 'quack');
  }).length;
}

module.exports = duckCount
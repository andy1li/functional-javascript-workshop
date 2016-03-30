module.exports = function arrayMap(arr, fn) {
  // SOLUTION GOES HERE
  return arr.reduce(function(a, b) {
    a.push(fn(b))
    return a;
  }, []);
}

// official solution with optional thisArg implemented
//
// module.exports = function arrayMap(arr, fn, thisArg) {
//   return arr.reduce(function(acc, item, index, arr) {
//     acc.push(fn.call(thisArg, item, index, arr))
//     return acc
//   }, [])
// }
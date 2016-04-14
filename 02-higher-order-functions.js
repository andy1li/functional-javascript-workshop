function repeat(operation, num) {
  operation();
  if (num >= 1) repeat(operation, --num);
}

// official solution:
//
// function repeat(operation, num) {
//   if (num <= 0) return
//   operation()
//   return repeat(operation, --num)
// }

// Do not remove the line below
module.exports = repeat
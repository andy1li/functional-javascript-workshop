function repeat(operation, num) {
  operation();
  if (num >= 1) repeat(operation, --num);
}

// Do not remove the line below
module.exports = repeat
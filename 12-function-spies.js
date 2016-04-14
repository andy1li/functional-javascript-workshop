function Spy(target, method) {
  // SOLUTION GOES HERE
  var context = {count: 0};

  var fn = target[method];

  target[method] = function() {
    context.count++;
    return fn.apply(this, arguments);
  }

  return context;
}

module.exports = Spy

// Here's the official solution in case you want to compare notes:

//     function Spy(target, method) {
//       var originalFunction = target[method]

//       // use an object so we can pass by reference, not value
//       // i.e. we can return result, but update count from this scope
//       var result = {
//         count: 0
//       }

//       // replace method with spy method
//       target[method] = function() {
//         result.count++ // track function was called
//         return originalFunction.apply(this, arguments) // invoke original function
//       }

//       return result
//     }

//     module.exports = Spy



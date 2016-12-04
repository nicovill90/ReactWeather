function addPromise (a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    }

    reject('A and B must be numbers');
  });
}

addPromise(1, 2).then(function (sum) {
  console.log(sum);
}, function (error) {
  console.log(error);
});

addPromise(1, 's').then(function (sum) {
  console.log(sum);
}, function (error) {
  console.log(error);
});

addPromise(1).then(function (sum) {
  console.log(sum);
}, function (error) {
  console.log(error);
});

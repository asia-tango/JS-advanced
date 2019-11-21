let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('a'), 1000);
})
.then(result => {
  console.log(result);
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result+'b'), 1000);
  });
})
.then(result => {
  console.log(result);
})
.then(reject => {
    throw new Error ('Something failed');
  })
.catch(reject => {
  console.log(reject + '.');
});

myPromise.then(result => {
  console.log('ab');
});
async function myNewPromise() {
    let firstPromise = new Promise((resolve, reject) => {
      setTimeout(() => resolve('a'), 1000);
    });
    let result = await firstPromise;
    console.log(result);
  
    let secondPromise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(result+'b'), 1000);
    });
    let newResult = await secondPromise;
    console.log(newResult);

    throw new Error('Something failed');
}

async function runPromise() {
  try {
    await myNewPromise();
  } catch (reject) {
    console.error(reject);
  } finally {
    console.log('ab');
  }
}

runPromise();
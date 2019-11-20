const makeAdder = num_1 => num_2 => num_1 + num_2;
const addFunction = makeAdder(5);
console.log(addFunction(2));
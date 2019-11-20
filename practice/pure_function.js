function newFormat(value) {
  let newValue = value.split('-').reverse().join(', ');
  return newValue;
}
const date = newFormat('11-15-1944');
console.log(date);
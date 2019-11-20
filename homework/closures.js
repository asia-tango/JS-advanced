let count = 1;
let counter = () => {
  return () => console.log(count++);
}
let countInvokations = new counter();
countInvokations();
countInvokations();
countInvokations();
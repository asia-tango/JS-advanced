let i;
for (i = 0; i < 11; i++) {
  console.log(i);
}

try{
  if (i === 11) {
  throw new Error('Ten is enough');
  }
} catch(error) {
  console.error(error, 'rf');
} finally {
  console.log('hello my sweetie ' + i + ' :)');
}
const originalArray = [1,2,3];
const copyArray = [].concat(originalArray);
console.log(`Original Array: ${originalArray}`);
console.log(`Copy Array: ${copyArray}`);
console.log(`Are they the same object? ${copyArray === originalArray}`);
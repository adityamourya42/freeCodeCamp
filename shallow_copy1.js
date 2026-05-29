const originalArray = [1,2,3];
const copyArray = [...originalArray];
copyArray.push(4);
copyArray.unshift(5);
console.log(`Original Array: ${originalArray}`);
console.log(`Copy Array: ${copyArray}`);
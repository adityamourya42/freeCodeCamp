let fruits = ["apple", "banana", "orange", "mango", "kiwi"];
let removed = fruits.splice(2,2);
console.log(fruits);
console.log(removed);

let removed1 = fruits.splice(2,2,"grapes");
console.log(fruits);
console.log(removed1);

let numbers = [1,2,3,4,5,];
let removedNumbers = numbers.splice(4,0,6,7);
console.log(numbers);
console.log(removedNumbers);
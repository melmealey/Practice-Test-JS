//create a function called `addTwo` that takes two numbers as arguments and returns the sum of those numbers

const addTwo = (num1, num2) => {
    return num1 + num2;
}
addTwo();

console.log (addTwo (4,5))

//create a function called `addThree` that takes three numbers as arguments and returns the sum of those numbers

const addThree = (num1, num2, num3)=> {
    return num1 + num2 + num3;
}
addThree();
console.log (addThree (4,5,3))
//create a function called `isNegative` that takes a number as an argument and returns true or false if that number is negative.
const isNegative = (number) => {
    if (number <0) {
        return true
    } else {
        return false;
    }
};
console.log (isNegative (-5));
console.log (isNegative (10));

//create a function called `isDivisibleByThree` that takes a number as an argument and returns true or false if that number is evenly divisible by 3
const isDivisibleByThree = (number) => {
    if (number % 3===0) {
        return true
    } else {
        return false;
    }
};
console.log (isDivisibleByThree(9));
console.log (isDivisibleByThree(4));

//create a function called `isBetween` that takes a number as an argument and returns true if the number is between 1 and 10, inclusive. Otherwise, return false.
const isBetween = (number) => {
    if (number >1 & number <10) {
        return true
    } else {
        return false;
    }
};
console.log (isBetween (14));

//create a function called `isLongName` that takes a string as an argument and returns true if the name is longer than 7 characters, and false otherwise
const isLongName = (name) => {
    if (name.length >7) {
        return true
    } else {
        return false;
    }
};
console.log (isLongName ("Leskosky"));
console.log (isLongName ("Will"));

//create a function called `getMaxOfTwo` that takes two numbers as arguments and returns the largest of them. If they are equal, return either number.
const getMaxOfTwo = (num1, num2) => {
    if (num1 >= num2){
        return num1
    } else{
        return num2
    }
};
console.log (getMaxOfTwo (10,30));

//create a function called `getMaxOfThree` that takes three numbers as arguments and returns the largest of them. If they are equal, return either number.
const getMaxOfThree =(num1, num2, num3) => {
    if (num1>= num2 & num1 >=num3){
        return num1
    }else if (num2 >= num1 & num2 >= num3){
        return num2
    }else {
        return num3
    }
 };
console.log (getMaxOfThree (5,3,4))

//create a function callled `sayHello` that returns the string 'Hello, ' concatenated with a name passed to the function
const sayHello = (name) => {
    return "Hello, " + name;
};
console.log (sayHello ("Joseph"));

//create a function called `returnFirst` that takes an array as an argument and returns the first item in the array
const returnFirst = ([num1, num2, num3]) => {
    return num1
};
console.log (returnFirst [5,3,4]);

//create a function called `returnSecond` that takes an array as an argument and returns the second item in the array
const returnSecond = ([num1, num2, num3]) => {
    return num2
};
console.log (returnSecond [5,3,4]);

//create a function called `returnLast` that takes an array as an argument and returns the last item in the array
const returnLast = ([num1, num2, num3]) => {
    return num3
};
console.log (returnLast [5,3,4]);

//create a function called `getArrayLength` that takes an array as an argument and returns the length of the array
const getArrayLength =(array) => {
    return array.length
};
console.log (getArrayLength [5,3,4]);

//create a function called `incrementByOne` that takes an array of numbers and returns a new array with each number incremented by one
const incrementByOne =(inc) => {
    let newArray = [];
    for (let i = 0; i<inc.length; i++){
        newArray.push (inc[i] +1);
    }
    return newArray
};
console.log (incrementByOne ([5,3,4]));

//create a function called `addItemToArray` that takes an array and an item, and returns a new array with all the items from the original array plus the new item
const originalArray = [5, 3, 4];
const newItem = 7;

const newArray = addItemToArray(originalArray, newItem);
console.log(newArray);

//create a function called `isBigOrSmall` that returns the string 'big' if a number is greater than 10, and 'small' if a number is less than 10

//create a function called `findIndex` that takes an array and a value and returns the index of the first occurrence of the value in the array. If the value does not exist in the array, return negative 1.

//create a function called `sumArray` that takes an array of numbers and returns the sum of all numbers in the array

//create a function called `returnEvens` that takes an array of numbers and returns a new array containing only the even numbers from the original array

//create a function called `returnFirstGreaterThanTwo` that takes an array of numbers and returns the first number from the array that is greater than 2

//create a function called `getMax` that takes an array of numbers and returns the largest number from that array

//create a function called `averageArray` that takes an array of numbers and returns the average of all the numbers in the array

//create a function called `getValue` that takes an object and a property name and returns the value assigned to that property name on the object

//create a function called `isInObject` that takes two arguments, an object and a string. It should return true if the string is a key on the object, false otherwise

//create a function called `getAllValues` that takes an object as an argument, and returns an array of all the values from that object








// Exercise 1 

const names = ["Rod", "Dave", "Stuart"];

const newName = names.concat("Phil");

// 

//  Exercise 2 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0; 

numbers.forEach( (number) => {
  sum += number
});

// 

//  Challenge 

const addToBatch = (arr, number) => {
  if (arr.length <= 5) {
    return arr.concat(number);
  } else {
    return arr;
  }
};

// 
const fizzBuzz = require("./fizzbuzz")

const fizzbuzzUntil = (number) => {
  for (let i = 1 ; i <= number ; i++) {
    console.log(fizzBuzz(i));
  };
};

module.exports = fizzbuzzUntil; 

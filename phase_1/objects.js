// Exercise 1

const person = {
  name: 'Maxine',
  age: 32,
  address: {
    city: 'London',
    postcode: 'E1 123'
  },
  hobbies: ['writing', 'tennis', 'cooking']
};

// 

// Challenge

const cohort = {
  name: 'May2022',
  id: 1234,
  students: ["Rob", "Bob", "Bill"]
};


const message = (object) => {
  console.log(`${object.id} - ${object.name} - ${object.students.length} students in this cohort`);
};

//
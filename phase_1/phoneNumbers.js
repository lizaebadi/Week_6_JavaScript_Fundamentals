const checkLength = (phoneNumber) => {
  if (phoneNumber.length <= 10) {
    return true; 
  } else {
    return false;
  }
};

const numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd' 
];

const filterLongNumbers = (numbers) => {
  return numbers.filter(checkLength);
};

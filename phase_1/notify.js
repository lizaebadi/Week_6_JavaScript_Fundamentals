// Exercise 1

const notifyByEmail = (email) => {
  return(`Email sent to: ${email}`);
};

const notifyByText = (number) => {
  return(`Text sent to: ${number}`);
};

const notify = (contact, transformFunction) => {
  return transformFunction(contact);
};

module.exports = notifyByEmail;
module.exports = notifyByText;
module.exports = notify;

//

// Exercise 2 

const printHello = () => {
  console.log('Hello there');
};


const executeAfterDelay = (timeout, callFunction) => {
  setTimeout(callFunction, (1000 * timeout));
};


executeAfterDelay(5, printHello);

// 




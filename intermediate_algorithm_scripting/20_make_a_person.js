const Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let fullname = firstAndLast;

  this.getFirstName = function () {
    const [first] = fullname.split(' ');
    return first;
  };

  this.setFirstName = function (name) {
    const [, last] = fullname.split(' ');
    fullname = name + ' ' + last;
  };

  this.getLastName = function () {
    const [, last] = fullname.split(' ');
    return last;
  };

  this.setLastName = function (name) {
    const [first] = fullname.split(' ');
    fullname = first + ' ' + name;
  };

  this.getFullName = function () {
    return fullname;
  };

  this.setFullName = function (name) {
    fullname = name;
  };
};

const bob = new Person('Bob Ross');
bob.getFullName();

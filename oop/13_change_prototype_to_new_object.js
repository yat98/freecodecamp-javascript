function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs: 2,
  eat() {
    console.log('Noom nom nom');
  },
  describe() {
    console.log('My name is ' + this.name);
  },
};

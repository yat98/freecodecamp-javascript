function add(x) {
  // Only change code below this line
  return (y) => (z) => x + z + y;

  // Only change code above this line
}

console.log(add(10)(20)(30));
const x = add(10);
console.log(x);
const y = x(20);
console.log(y);
const z = y(30);
console.log(z);

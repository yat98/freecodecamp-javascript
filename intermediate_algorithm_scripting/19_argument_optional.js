function addTogether(...args) {
  if (args.length > 1) {
    if (typeof args[0] === 'number' && typeof args[1] === 'number') {
      return args.reduce((sum, val) => sum + val, 0);
    }
    return undefined;
  } else {
    if (typeof args[0] === 'number')
      return (x) => {
        if (typeof x === 'number') return args[0] + x;
      };
  }
}

console.log(addTogether(2, 3));
console.log(addTogether(5)(7));
console.log(addTogether('https://www.youtube.com/watch?v=dQw4w9WgXcQ'));
console.log(addTogether(2, '3'));
console.log(addTogether(2)([3]));
console.log(addTogether(5, undefined));

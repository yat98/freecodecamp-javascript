function destroyer(arr, ...rest) {
  return arr.filter((val) => !rest.includes(val));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

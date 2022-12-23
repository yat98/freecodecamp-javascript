function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter((val) => !arr1.includes(val) || !arr2.includes(val));
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(
  diffArray(
    ['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
    ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
  )
);

function frankenSplice(arr1, arr2, n) {
  const local = [...arr2];
  local.splice(n, 0, ...arr1);
  return local;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));

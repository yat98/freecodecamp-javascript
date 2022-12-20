function findLongestWordLength(str) {
  const regex = /\w+/g;
  const arr = str.match(regex);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].length;
  }

  return Math.max(...arr);
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');

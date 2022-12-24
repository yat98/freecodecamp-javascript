function myReplace(str, before, after) {
  let newAfter = after.slice().toLowerCase();
  if (/[A-Z]/.test(before[0])) {
    newAfter = after[0].toUpperCase() + after.slice(1);
  }
  return str.replace(before, newAfter);
}

console.log(
  myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped')
);
console.log(myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting'));

function fearNotLetter(str) {
  let letter = str.charCodeAt(0);
  let missing = undefined;
  str.split('').forEach((s) => {
    if (s.charCodeAt(0) === letter) {
      letter++;
    } else {
      missing = String.fromCharCode(letter);
    }
  });

  return missing;
}

console.log(fearNotLetter('abce'));
console.log(fearNotLetter('stvwx'));

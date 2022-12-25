function palindrome(str) {
  const newStr = str.toLowerCase().replace(/[\W_]+/g, '');
  const reverseStr = newStr.split('').reverse().join('');
  return newStr === reverseStr;
}

console.log(palindrome('eye'));
console.log(palindrome('_eye'));
console.log(palindrome('My age is 0, 0 si ega ym.'));
console.log(palindrome('0_0 (: /- :) 0-0'));

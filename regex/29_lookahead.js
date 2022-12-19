let sampleWord = '12345';
let pwRegex = /(?=\w{3,5})(?=\D\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);
console.log(result);

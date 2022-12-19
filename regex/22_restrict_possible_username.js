let username = 'A1';
let userCheck = /^[a-zA-Z][a-zA-Z]{1,}[0-9]*$|^[a-zA-Z][0-9]{2,}$/i; // Change this line
let result = userCheck.test(username);
console.log(result);

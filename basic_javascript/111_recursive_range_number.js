function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const arrayNumber = rangeOfNumbers(startNum, endNum - 1);
    arrayNumber.push(endNum);
    return arrayNumber;
  }
}

console.log(rangeOfNumbers(1, 5));

function uniteUnique(...arr) {
  return arr.reduce((acc, val) => {
    val.forEach((v) => {
      if (!acc.includes(v)) acc.push(v);
    });
    return acc;
  }, []);
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

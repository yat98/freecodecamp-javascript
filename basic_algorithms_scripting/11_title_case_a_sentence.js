function titleCase(str) {
  const arr = str
    .split(' ')
    .map((s) => s.toLowerCase())
    .map((s) => {
      const rest = s.slice(1, s.length);
      return `${s[0].toUpperCase()}${rest}`;
    });
  return arr.join(' ');
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase('sHoRt AnD sToUt'));

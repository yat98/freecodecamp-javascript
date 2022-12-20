function confirmEnding(str, target) {
  const strEnd = str.slice(str.length - target.length);

  return strEnd === target;
}

confirmEnding('Bastian', 'n');

function truthCheck(collection, pre) {
  for (let i = 0; i < collection.length; i++) {
    if (!Boolean(collection[i][pre])) return false;
  }
  return true;
}

console.log(
  truthCheck(
    [
      { name: 'Quincy', role: 'Founder', isBot: false },
      { name: 'Naomi', role: '', isBot: false },
      { name: 'Camperbot', role: 'Bot', isBot: true },
    ],
    'isBot'
  )
);

console.log(
  truthCheck(
    [
      { name: 'Quincy', role: 'Founder', isBot: false },
      { name: 'Naomi', role: '', isBot: false },
      { name: 'Camperbot', role: 'Bot', isBot: true },
    ],
    'role'
  )
);

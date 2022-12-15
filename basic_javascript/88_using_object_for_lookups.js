function phoneticLookup(val) {
  let result = '';

  const contacts = {
    alpha: 'Adams',
    bravo: 'Boston',
    charlie: 'Chicago',
    delta: 'Denver',
    echo: 'Easy',
    foxtrot: 'Frank',
  };

  result = contacts[val];

  return result;
}

phoneticLookup('charlie');

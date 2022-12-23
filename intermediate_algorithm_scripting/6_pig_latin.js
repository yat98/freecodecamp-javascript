function translatePigLatin(str) {
  let index;
  const vocal = 'aiueo';

  for (let i = 0; i < str.length; i++) {
    if (vocal.includes(str[i])) {
      index = i;
      break;
    }
  }

  if (index !== undefined) {
    return (
      str.slice(index) + str.slice(0, index) + (index === 0 ? 'way' : 'ay')
    );
  } else {
    return str + 'ay';
  }
}

console.log(translatePigLatin('consonant'));
console.log(translatePigLatin('california'));
console.log(translatePigLatin('glove'));
console.log(translatePigLatin('algorithm'));
console.log(translatePigLatin('rhythm'));

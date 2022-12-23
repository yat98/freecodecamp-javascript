function whatIsInAName(collection, source) {
  const sourceProperties = Object.keys(source);
  return collection.filter((val) =>
    sourceProperties.every(
      (prop) => val.hasOwnProperty(prop) && val[prop] === source[prop]
    )
  );
}

console.log(
  whatIsInAName(
    [
      { first: 'Romeo', last: 'Montague' },
      { first: 'Mercutio', last: null },
      { first: 'Tybalt', last: 'Capulet' },
    ],
    { last: 'Capulet' }
  )
);

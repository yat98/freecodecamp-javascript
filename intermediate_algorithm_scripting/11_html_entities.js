function convertHTML(str) {
  const pattern = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    "'": '&apos;',
    '"': '&quot;',
  };

  return str
    .split('')
    .map((s) => (pattern.hasOwnProperty(s) ? pattern[s] : s))
    .join('');
}

console.log(convertHTML('Dolce & Gabbana'));

let count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
  }

  if ((card === 7 || card === 8 || card === 9) && count == 0) {
    return '0 Hold';
  }

  if (count < 0) {
    return `${count} Hold`;
  }

  return `${count} Bet`;
}

cc(2);
cc(3);
cc(7);
cc('K');
cc('A');

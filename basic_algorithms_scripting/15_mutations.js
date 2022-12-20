function mutation(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[0].toLowerCase().indexOf(arr[i][j].toLowerCase()) === -1)
        return false;
    }
  }

  return true;
}

console.log(mutation(['hello', 'hey']));

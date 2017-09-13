function moves(position){
  var moveIt;
  switch (position) {
    case 0:
      moveIt = [1,3];
      break;
    case 1:
    moveIt = [0,2,4];
      break;
    case 2:
    moveIt = [1,5];
      break;
    case 3:
      moveIt = [0,4,6];
      break;
    case 4:
      moveIt = [1, 3, 5, 7];
      break;
    case 5:
      moveIt = [2, 4, 8];
      break;
    case 6:
      moveIt = [3, 7];
      break;
    case 7:
      moveIt = [4, 6, 8];
      break;
    case 8:
      moveIt = [5,7];
      break;
  }
  return moveIt;
}

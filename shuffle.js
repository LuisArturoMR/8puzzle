for (var puzzle=[],i=0;i<9;++i) puzzle[i]=i;

function shuffle(array) {
  var tmp, current, top = 8;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}
// var puzzle = shuffle(puzzle);
var puzzle = [1,2,3,0,5,6,4,7,8];

document.getElementById("initialMatrix").innerHTML= puzzle;
console.log("New Random 8Puzzle created:",puzzle);

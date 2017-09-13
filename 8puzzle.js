var repeat;

function count(nodeArray){
  cont = 0;
  solution = [1,2,3,4,5,6,7,8,0];
  for (var i = 0; i < 8; i++) {
    if (nodeArray[i] == solution[i]) {
      cont++;
    }
  }
  console.log("My cont: ", cont);
  return cont;
}

function bfsArray(node, myMoves,i){
  console.log("Hi :)");
  var j = 0;
  var temp, cont;
  var nodeArray;
  var best = [];
  var nodes = [];
  for (var j = 0; j < myMoves.length; j++) {
    nodeArray = node.slice();
    console.log("Original Node: ", node);
    temp = nodeArray[myMoves[j]];
    nodeArray[myMoves[j]] = 0;
    nodeArray[i] = temp;
    nodes[j] = nodeArray.slice();
    console.log("Nodo:",nodes);
    console.log("Move: ",nodeArray);
    cont = count(nodeArray);
    best[j] = cont;
    console.log("BFS: "+cont);
  }
  var max = Math.max.apply(null,best);

  for (var i = 0; i < best.length; i++) {

    if (max == best[i]) {
      if (max == best[i+1]) {
        console.log("WARNING");
        return nodes[i+Math.floor((Math.random()*2)+0)];
      }
      else {
        console.log("return :", nodes[i]);
        repeat = nodes[i].slice();
        document.getElementById("data").innerHTML+= nodes[i]+"<br>";
        return nodes[i];
      }
    }
  }

  return null;
}

console.time('bfs');
function bfs(node1){
  var nodeArray = node1.slice();
  for (var i = 0; i < nodeArray.length; i++) {
    if (nodeArray[i] == 0) {
      var myMoves = moves(i);
      console.log(myMoves);
      bestArray = bfsArray(nodeArray,myMoves,i);
    }
  }
  if (count(bestArray) != 8 ) {
    console.log("DIME:",count(bestArray));
    console.log("Not ready: ", bestArray);
    console.log("Last save:", repeat);
    bfs(bestArray);
  }else {
    console.log("Finished: ", bestArray);
    document.getElementById("result").innerHTML= bestArray;
    return bestArray;
  }
}
console.timeEnd('bfs');

  console.log(puzzleSolved = bfs(puzzle));

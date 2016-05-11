function rotateMatrix(matrix) {
  var output = [];
  for (var i = 0; i<matrix.length; i++){
    //create data structure
    output.push([])
  }
  //reverse parent
  matrix.reverse()
  for(var i = 0; i < matrix.length; i++){
    for(var j = 0; j < matrix[i].length; j++){
      output[j].push(matrix[i][j]);
    }
  }
  return output
}
//doing reverse loops would only save 1-2 lines
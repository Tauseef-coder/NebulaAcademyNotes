function gridIndex(grid, indices) {
    let newArray = grid.flat();
    let result = '';
    
    for(let i = 0; i < indices.length; i++){
      result += newArray[indices[i] - 1];
    }
    
    return result
  }
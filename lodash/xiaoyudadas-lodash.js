var xiaoyudadas = {
  chunk: 
    function(array, size = 1) {
      var temp = new Array(Math.ceil(array.length / size))
      var a = 0
      for (var i = 0; i < array.length; i++) {
        temp[a] ? temp[a] : temp[a] = []
        temp[a].push(array[i])
        if (temp[a].length == size) {
          a++
        }
      }
      return temp
    },
  
  concat:
    function(array,[value]) {
      for (var i = 0; i < [value].length; i++){
        array.push([value])
      }
      return array
    },
  
  fill:
    function(array,value,start = 0,end = array.length) {
      for (var i = start; i < end; i++){
        array[i] = value
      }
      return array
    },
  
  indexOf:
    function(array,value,fromIndex = 0) {
      for (var i = fromIndex; i < array.length; i++){
        if (array[i] == value) {
          return i
        }
      }
      return -1
    },
  
  compact:
    function (array) {
      var result = []
      for (var i = 0; i < array.length; i++){
        if (array[i]) {
          result.push(array[i])
        }
      }
      return result
    },
  drop:
    function (array, n) {
      var result = []
      for (var i = 0; i < array.length; i++){
        if (n == null) {
          n = 1
        }
        if (i >= n) {
          result.push(array[i])
        }
      }
      return result
    },
  
  findIndex:
    function (array, predicate, fromIndex = 0) {
      for (var i = fromIndex; i < array.length; i++){
        var preducate = array[i]
        if (predicate == true) {
          return i
        }
      }
      return -1
    },
  findLastIndex:
    function (array, predicate, fromIndex = array.length - 1) {
      for (var i = fromIndex; i >= 0; i--){
        var predicate = array[i]
        if (predicate == true) {
          return i
        }
      }
      return -1
    },
  flatten:
    function (array) {
      var result = []
      for (var i = 0; i < array.length; i++){
        if (array.isArray(array[i])) {
          for (var j = 0; j < array[i].length; j++){
            result.push(array[i][j])
          }
        } else {
          result.push(array[i])
        }
      } 
      return result 
    },
  
}

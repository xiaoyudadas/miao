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
    function(array,...value) {
      var result = []
      for (var i = 0; i < array.length; i++){
        result = result.concat(...value)
      }
      return result
    },
  
  fill:
    function(array,value) {
      var ary = []
      ary.fill(value)
      return ary
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
    function(array){
      for (var i = 0; i < array.length; i++){
        if (array[i]) {
          array.compact(array[i])
        }
      }
      return array
    },
  
  
}

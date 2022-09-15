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
    function (array, ...value) {
      var val = [...value]
      
      for (var i = 0; i < val.length; i++){
        if (Array.isArray(val)) {
          array.push(val[i])
        }
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
    function (array, fromIndex = 0) {
      for (var i = fromIndex; i < array.length; i++){
        if (array[i] == true) {
          return i
        } 
      }
      return -1
    },
  findLastIndex:
    function (array, predicate, fromIndex = array.length - 1) {
      for (var i = fromIndex; i >= 0; i--){
        if (array[i] == true) {
          return i
        } else {
          return -1
        }
      }
    },
  flatten:
    function (array) {
      var result = []
      for (var i = 0; i < array.length; i++){
        if (Array.isArray(array[i])) {
          for (var j = 0; j < array[i].length; j++){
            result.push(array[i][j])
          }
        } else {
          result.push(array[i])
        }
      } 
      return result 
    },
  flattenDeep:
    function (array) {
      for (var i = 0; i < array.length; i++){
        if (Array.isArray(array[i])) {
          array = array[i]
        }
      }
      return array
    },
  flattenDepth:
    function (array, depth) {
      for (var i = 0; i < array.length; i++){
        if (Array.isArray(array[i])) {
          array = array[i]
          if (i == depth) {
            return array
          }
        }

      }
    },
  head:
    function (array) {
      if (array == null) {
        return undefined 
      } else {
        return array[0]
      }
    },
  initial:
    function(array) {
      for (var i = 0; i < array.length; i++){
        array.slice(0,array.length - 1)
      }
      return array
    },
  join:
    function (array, separator='') {
      for (var i = 0; i < array.length; i++){
        array[0] = array[0] + separator
        if (array[i] == array.length - 1) {
          array[i] = array[i] + ''
        }
      }
      return array
    },
  last:
    function (array) {
      return array.length - 1
    },
  lastIndexOf:
    function (array, value, fromIndex = array.length - 1) {
      for (var i = fromIndex; i >= 0; i--){
        if (value == array[i]) {
          return i
        }
      }
      return -1
    },
  pull:
    function (array, values) {
      for (var i = 0; i < array.length; i++){
        if (array[i] == values) {
          array.remove(array[i])
        }
      }
      return array
  },
  reverse:
    function (array) {
      var i = 0,j = array.length - 1
      while (i < j) {
        var temp = array[i]
        array[i] = array[j]
        array[j] = temp
        i++
        j--
      }
      return array
    },
  slice:
    function (array, start, end) {
      var result = []
      for (var i = 0; i < array.length; i++){
        if (i < start || i > end) {
          result.push(array[i])
        }
      }
      return result 
    },
  every:
    function (collection, predicate) {
      if (collection == null) {
        return true
      }
      for (var i = 0; i < collection.length; i++){
        if (!predicate(collection[i], i, collection)) {
          return false
        }
      }
      return true 
    },
  
  some:
    function (collection, predicate) {
      for(var i = 0; i < collection.length; i++){
        if (!predicate(collection[i], i, collection)) {
          return true
        }
      }
      return false
    },
  
}

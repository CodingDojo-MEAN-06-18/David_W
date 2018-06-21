//Can we make this into a method of an object?
function each(arr, callback) {
    // loop through the array
    for(var i = 0; i < arr.length; i++) {
      callback(arr[i]); // invoking the callback many times... delegation!
    }
  }


  var _ = {
    map: function(array, callback) {
        // loops through each index of array
        for (let i = 0; i < array.length; i++) {
        //  changes current index of array with the callback(defined iteratee/argument of array[index current value])
          array[i] = callback(array[i]);
        }
      },
      
    reduce: function(array, [memo], callback)  { 
        for(index = 0; index < array.length; index++){
            if (!memo) {
                memo = callback(array[index]);
                index++;
            }
            array[index] = callback(array[index]);
        }
    },
    find: function(array, predicate, callback) {
        for (index = 0; index < array.length; index++ ){
            var new_predicate = callback(array[index]);
            if (predicate = new_predicate){
                return array[index];
            }
        }
        return undefined;
    },
    filter: function(array, predicate, callback) {
        var passed = [];
        for (index = 0; index < array.length; index++ ){
            var new_predicate = callback(array[index]);
            if (predicate = new_predicate){
                passed.push(array[index]);
            }
        }
        if (passed){
            return passed;
        } else {
            return undefined;
        }
    },
    reject: function() { 
      // code here;
    }
  }
 // you just created a library with 5 methods!

 var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].

  
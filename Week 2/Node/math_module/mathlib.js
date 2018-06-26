module.exports = function (){
    return {
      add: function(num1, num2) { 
           return (num1 + num2);
      },
      multiply: function(num1, num2) {
            return (num1 * num2);
      },
      square: function(num) {
        return (num * num);

      },
      random: function(num1, num2) {
           var x = Math.floor.random(num1, num2);
           return x;
      }
    }
  };



// math.add(2,3) should return 5)

// multiply two numbers (e.g. math.multiply(3,5) should return 15)

// square a number (e.g. math.square(5) should return 25)

// return a random number between the two numbers 
// (e.g. math.random(1,35) should return a random number between 1 and 35)
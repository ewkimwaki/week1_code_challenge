
function calculateDemeritPoints(speed) {
    const speedLimit = 70; //this declares the speed limit 
    const kmPerPoint = 5; //points to be added once the speed is above the speed limit
    if (speed < speedLimit + kmPerPoint) {
      return "Ok";
    } else {
      const points = Math.floor((speed - speedLimit) / kmPerPoint);
      //used the command math.floor to average the value of "speed" to a whole integer
      if (points >= 12) {
        return "License suspended";
      } else {
        return "Points: " + points;
      }
    }
  }

console.log(calculateDemeritPoints(70)); //I used the speed of 70 to test the function
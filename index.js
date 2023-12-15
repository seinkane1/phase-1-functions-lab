function distanceFromHqInBlocks(street){
    const blocks = 42
    const distance = Math.abs(blocks -street);
    return distance 
}


function distanceFromHqInBlocks(Location) {
    const hqLocation = 42;
    return Math.abs(Location - hqLocation);
}

function distanceFromHqInFeet(Location) {
    const blocks = distanceFromHqInBlocks(Location);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
}


function distanceTravelledInFeet(Block, destination) {
    const blocksTravelled = Math.abs(destination - Block);
    const feetPerBlock = 264;
    return blocksTravelled * feetPerBlock;
}


function calculatesFarePrice(start, destination) {

    var feetPerBlock = 264;
  
    var distanceInBlocks = Math.abs(destination - start);
  
    var distanceInFeet = distanceInBlocks * feetPerBlock;
  
    if (distanceInFeet <= 400) {
      return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  
  


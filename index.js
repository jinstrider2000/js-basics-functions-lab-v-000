// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber) {
  return Math.abs(streetNumber - 42);
}

function distanceFromHqInFeet(streetNumber) {
  return distanceFromHqInBlocks(streetNumber) * 264;
}

function distanceTravelledInFeet(startStreet,endStreet) {
  return Math.abs(startStreet - endStreet) * 264;
}

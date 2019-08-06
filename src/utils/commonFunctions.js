// Reduce input array as objects with radius, people and angle
export const reduceInputArr = (arr) => {
  const result = arr.map(itemArr => ({
    radius: itemArr[0],
    people: itemArr[1],
    angle: convertDMSToDegree(itemArr[2], itemArr[3], itemArr[4])
  }));
  return result;
}

// Convert degree, minute, second to degrees
export const convertDMSToDegree = (
  degrees = 0, minutes = 0, seconds = 0
) => degrees + minutes/60 + seconds/3600;

// Calculate circle slice area
export const calculateCircleAreaSlice = (
  angle, radius
) => parseFloat(((angle/360)*Math.PI*Math.pow(radius, 2)).toFixed(6));

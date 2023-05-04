function analyzeArray(array) {
    const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const length = array.length;
    const average = sum / length;
    const min = Math.min(...array);
    const max = Math.max(...array);
    return {
      average: average,
      min: min,
      max: max,
      length: length
    };
  }

//   const object = analyzeArray([1, 8, 3, 4, 2, 6]);
//   console.log(object); // Output: { average: 4, min: 1, max: 8, length: 6 }
   
export default analyzeArray;
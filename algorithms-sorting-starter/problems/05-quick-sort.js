// Implement Quick Sort

function quickSort(array) {
  // your code here
  if (array.length <= 1) {
    return array;
  }

  let pivot = array[0];
  let leftArray = [];
  let rightArray = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] <= pivot) {
      leftArray.push(array[i]);
    } else if (array[i] > pivot) {
      rightArray.push(array[i]);
    }
  }

  let sortedLeftArray = quickSort(leftArray);
  let sortedRightArray = quickSort(rightArray);
  return sortedLeftArray.concat(pivot).concat(sortedRightArray);
}

module.exports = {
  quickSort,
};

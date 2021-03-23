// Implement Bubble Sort

function swap(array, idx1, idx2) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      let index1 = j;
      let index2 = j + 1;
      if (array[index1] >= array[index2]) {
        swap(array, index1, index2);
      }
    }
  }
  return array;
}

module.exports = {
  bubbleSort,
  swap,
};

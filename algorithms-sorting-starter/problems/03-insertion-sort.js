// Implement Insertion Sort

function insertionSort(list) {

  for (let i = 1; i < list.length; i++) {

    for (let j = i; j > 0; j--) {

      if (list[j] < list[j - 1]) {

        [list[j], list[j - 1]] = [list[j - 1], list[j]];
      }
    }
  }
  return list;
}

module.exports = {
  insertionSort,
};

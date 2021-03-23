// Implement Merge Sort

function merge(array1, array2) {
  // your code here
  let mergedArr = [];
  let i = 0;
  let j = 0;
  while(i < array1.length && j < array2.length){
    if(array1[i] <= array2[j]){

      mergedArr.push(array1[i]);
      i++;
    }
    else if(array2[j] <= array1[i]){

      mergedArr.push(array2[j]);
      j++;
    }
  }
  // if(array1.length){
  //   mergedArr.concat(array1.slice(i));
  // }else if(array2.length){
  //   mergedArr.concat(array2.slice(j));
  // }
  // return mergedArr;
  let result = mergedArr.concat(array1.slice(i)).concat(array2.slice(j));
  return result;
}

// console.log(merge([1, 5, 10, 15], [0, 2, 3, 7, 10]))

function mergeSort(array) {
  // your code here
  if(array.length <= 1){
    return array;
  }
  let midIndex = Math.floor(array.length / 2);
  let leftHalf = array.slice(0, midIndex);
  let rightHalf = array.slice(midIndex);
  let sortedLeft = mergeSort(leftHalf);
  let sortedRight = mergeSort(rightHalf);

  return merge(sortedLeft, sortedRight);
}

console.log(mergeSort([2, -1, 4, 3, 7, 3]));
//[2,-1,4,3] [7,3]
//[2,-1,4] [3], [7], [3]
//[2, -1,] [4], [3], [7], [3]
//[2], [-1], [4], [3], [7], [3]

module.exports = {
  merge,
  mergeSort
};

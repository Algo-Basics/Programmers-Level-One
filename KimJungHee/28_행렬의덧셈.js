function solution(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i].map((value, index) => arr1[i][index] + arr2[i][index]));
  }

  return result;
}

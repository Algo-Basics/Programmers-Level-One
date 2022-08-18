function solution(arr) {
  let sum = 0;
  let count = 0;
  let average = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    count++;
  }
  if (sum != 0 && count != 0) {
    average = sum / count;
  }
  return average;
}

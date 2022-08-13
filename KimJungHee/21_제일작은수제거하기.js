function solution(arr) {
  let min = Number.MAX_SAFE_INTEGER;
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min && arr.length > 1) {
      min = arr[i];
    }
  }

  arr.length === 1
    ? (result = [-1])
    : (result = arr.filter((value) => value > min));

  return result;
}

function solution(arr) {
  var answer = arr.filter((value, index) => value !== arr[index + 1]);
  return answer;
}

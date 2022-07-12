function solution(arr, divisor) {
  var answer = [];
  arr.every((num) => num % divisor !== 0)
    ? (answer = [-1])
    : arr
        .sort((a, b) => a - b)
        .map((element) => {
          if (element % divisor === 0) {
            answer.push(element);
          }
        });
  return answer;
}

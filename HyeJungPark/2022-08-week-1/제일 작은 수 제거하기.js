// 문제
/* 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.
 */

function solution1(arr) {
  // 입력 : 정수가 들어있는 배열 arr
  // 출력 : 가장 작은 수를 제거한 배열 answer, 리턴할 배열이 빈 배열일 경우 -1을 넣어 리턴한다.

  let min = Math.min(...arr);
  let answer = arr.filter(el => el !== min);

  return answer.length > 0 ? answer : [-1];
}

console.log(solution1([10]));

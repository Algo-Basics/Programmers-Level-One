// 문제
/* array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.
*/

function solution(arr, divisor) {
  // 입력 : 자연수를 담은 배열 arr(길이 1 이상), 자연수 divisor
  // 출력 : divisor로 나누어 떨어지는 수가 담긴 answer 배열(오름차순 정렬), 하나도 없을 경우  배열에 -1 담아 리턴

  // 1. arr 배열을 돌아 조건과 맞는 요소를 배열에 push
  // 2. 정답 배열 answer에 원소가 있다면(길이가 1 이상이라면) 정렬된 배열 리턴, 아닐 경우 [-1] 리턴
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] % divisor)) answer.push(arr[i]);
  }
  return answer.length > 0 ? answer.sort((a, b) => a - b) : [-1];
}

console.log(solution([2, 36, 1, 3], 1));

// 메서드를 사용한 풀이
function solution2(arr, divisor) {
  // 입력 : 자연수를 담은 배열 arr(길이 1 이상), 자연수 divisor
  // 출력 : divisor로 나누어 떨어지는 수가 담긴 answer 배열(오름차순 정렬), 하나도 없을 경우  배열에 -1 담아 리턴

  // 1. filter 메서드로 divisor와 나누어 떨어지는 요소만 모아 새 배열 생성.
  // 2. sort 메서드로 정렬 : 두 개의 전달 인자 a,b (배열의 인접한 두 값) 을 비교해 정렬하는 메서드
  // ... 두 요소를 비교해  a - b 일 때, 리턴값이 0보다 작으면 a < b, 리턴값이 0보다 ㅋ면 a > b 가 되는 것.
  let answer = arr.filter(num => num % divisor === 0).sort((a, b) => a - b);
  return answer.length > 0 ? answer : [-1];
}

console.log(solution2([5, 9, 7, 10], 5));

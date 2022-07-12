// 문제
/* 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.
*/

function solution(a, b) {
  // 입력 :  두 정수
  // 출력 : 두 정수 사이의 합.
  // 조건 : a와 b가 같을 경우 둘 중 아무 수나 리턴/ a와 b 의 대소관계는 정해지지 않음.

  // 1. a와 b가 같은 예외 경우 먼저 리턴
  // 2. 대소를 비교하여 a와 b 중 min과 max 값을 결정한다.
  // 3. min부터 max를 포함한 값까지 반복하며 answer에 누적하여 합산한다.
  // 4. answer를 리턴한다.
  if (a === b) return a;

  let answer = 0;
  let max = Math.max(a, b);
  let min = a + b - max;

  for (let i = min; i <= max; i++) {
    answer += i;
  }
  return answer;
}

console.log(solution(3, 5));

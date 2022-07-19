// 문제
/* 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
 */

function solution(n) {
  // 입력 : 3000 이하 정수
  // 출력 : n의 약수를 모두 더한 값

  // 약수 : n을 나누었을 때 나누어 떨어지는 모든 수

  let sum = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) sum += i;
  }

  return sum;
}

console.log(solution(12));

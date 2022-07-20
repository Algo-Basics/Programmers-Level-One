// 문제
/* 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, 
n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.
 */

function solution(n) {
  // 입력 : 양의 정수 n
  // 출력 : 제곱근이 양의 정수이면 제곱근 +1 의 제곱, 아니라면 -1 리턴
  // 제곱근 x : 제곱하면 n이 되는 수

  // 1. n의 제곱근 root를 구한다.
  // 2. root가 정수인지 판별하고, 정수일 경우 root + 1 을 거듭제곱하여 리턴한다.
  // 3. 판별 결과가 false 일 경우 -1을 리턴한다.
  let root = Math.sqrt(n);
  if (Number.isInteger(root)) return (root + 1) ** 2;
  else return -1;
}

console.log(solution(121));

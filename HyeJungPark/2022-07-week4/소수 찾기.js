// 문제
/* 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)
 */

// 1부터 n 까지의 각 수를 반복하며 소수인지 판별
// ... 2부터 각 수의 제곱근 까지 비교하여 나누어 떨어지지 않을 경우 카운트를 추가
// 2중 for문이라 그런지 시간 초과가 났다 흑 ㅠ
function solution1(n) {
  // 입력 : 2 이상 자연수 n
  // 출력 : 1과 n 사이의 소수의 갯수

  let cnt = 0;

  for (let i = 1; i <= n; i++) {
    let flag = true;
    if (i === 1) flag = false;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) flag = false;
    }
    if (flag) cnt++;
  }
  return cnt;
}

// console.log(solution1(10));

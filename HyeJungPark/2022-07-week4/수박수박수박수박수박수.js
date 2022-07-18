// 문제
/* 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 
3이라면 "수박수"를 리턴하면 됩니다.
 */

function solution(n) {
  // 입력 : 자연수 n
  // 출력 : 길이에 따라 수 박 수 박 문자를 이어붙인 문자열

  // i가 홀수일때는 '수'
  // i가 짝수일때는 '박' 을 더해 문자열을 완성시킨다.
  let answer = '';
  for (let i = 1; i <= n; i++) {
    if (i % 2) answer += '수';
    else answer += '박';
  }

  return answer;
}

console.log(solution(4));

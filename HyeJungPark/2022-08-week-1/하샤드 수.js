// 문제
/* 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 
예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 
자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.
 */

// 입력 : 양의 정수
// 출력 : 불린 - x가 자릿수의 합으로 나누어 떨어지는가 여부 리턴
function solution(x) {
  const sum = x
    .toString()
    .split('')
    .reduce((acc, cur) => acc + Number(cur), 0);

  return x % sum === 0;
}

console.log(solution(10));

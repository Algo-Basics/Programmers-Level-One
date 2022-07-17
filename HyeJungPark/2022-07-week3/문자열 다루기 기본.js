// 문제
/* 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 
예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.
 */

function solution(s) {
  // 입력 : 숫자와 문자가 섞인 문자열 s
  // 출력 : 해당 문자열이 길이 (4 || 6) && 숫자로만 구성되어있는지 여부

  if (s.length === 4 || s.length === 6) {
    for (let l of s) {
      if (isNaN(Number(l))) return false;
    }
    return true;
  }
  return false;
}

console.log(solution('a234'));

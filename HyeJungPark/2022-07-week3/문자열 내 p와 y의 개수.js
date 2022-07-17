// 문제
/* 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. 
s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 
다르면 False를 return 하는 solution를 완성하세요. 
'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 

단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.
*/

function solution(s) {
  // 입력 : 대소문자가 섞인 문자열 s
  // 출력 : s의 p 개수와 y 개수가 같으면 true, 다르면 false를 리턴.
  // 조건 : 대소문자를 구별하지 않는다.

  // 대소문자를 구별하지 않으므로 s를 소문자로 통일시킨다.
  // p와 y의 갯수를 세어줄 cnt 변수 두개를 선언한다.
  // s문자열을 반복하며 각 문자열의 문자가 p 혹은 y일 때 해당하는 카운트 변수를 증감한다.
  // 각 카운트의 비교 결과를 리턴한다.

  s = s.toLowerCase();
  let pCnt = 0;
  let yCnt = 0;
  for (let l of s) {
    if (l === 'p') pCnt++;
    if (l === 'y') yCnt++;
  }
  return pCnt === yCnt;
}

console.log(solution('Pyy'));

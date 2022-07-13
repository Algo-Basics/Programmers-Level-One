// 문제
/* 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 
각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 
예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 
각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.
*/

function solution(strings, n) {
  // 입력 :  strings 배열과 정수 n
  // 출력 : 정수 n 인덱스 순서대로 정렬된 배열
  // 조건 : 같은 문자열이 여럿일 경우, 사전 순으로 앞선 문자열이 앞에 위치한다.

  // sort 메서드를 사용해 a[n]과 b[n]을 직접 비교하고 오름차순 정렬을 위한 양수, 음수를 리턴한다.
  // 만약 두 문자열이 같다면, a와 b 문자열을 직접 비교한다.
  let answer = strings.sort((a, b) => {
    if (a[n] < b[n]) return -1;
    if (a[n] > b[n]) return 1;
    if (a[n] === b[n]) {
      if (a < b) return -1;
      else return 1;
    }
  });
  return answer;
}

console.log(solution(['abce', 'abcd', 'cdx'], 2));

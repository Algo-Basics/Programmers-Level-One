// 문제
/* 2단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다. */

function solution(s) {
  // 입력 : abcde, qwer 문자열
  // 출력 : 단어의 가운데 인덱스에 위치한 문자, 짝수라면 두 글자

  // 1. 가운데 글자의 인덱스 : s의 길이 절반의 반내림
  // 2. 짝수일 경우 가운데 인덱스와 그 이전 인덱스를 출력
  // 3. 홀수일 경우 가운데 인덱스를 출력
  let answer = '';
  let half = Math.floor(s.length / 2);

  if (s.length % 2 === 0) answer = s[half - 1] + s[half];
  else answer = s[half];

  return answer;
}

console.log(solution('abcde'));

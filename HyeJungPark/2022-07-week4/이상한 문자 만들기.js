// 문제
/* 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 
각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 
각 단어의 짝수번째 알파벳은 대문자로, 
홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.
 */

function solution(s) {
  // 입력 : 문자열 s
  // 출력 : 짝수 인덱스는 대문자, 홀수 인덱스는 소문자 변환
  // 조건 : 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.

  // 1. 공백 기준으로 각 단어의 짝/홀을 판단해야 하기 때문에, 원본 문자열을 공백 기준으로 split 한다.
  s = s.split(' ');
  // 각 문자를 map으로 돌아 새 문자열을 생성하고, 단어의 문자 짝/홀 판별하여 새로운 문자열로 변환한 뒤 공백으로 join 하여 새로운 문자열 생성
  let answer = s
    .map(word => {
      let newWord = '';
      for (let i = 0; i < word.length; i++) {
        if (i % 2 === 0) newWord += word[i].toUpperCase();
        else newWord += word[i].toLowerCase();
      }
      return newWord;
    })
    .join(' ');

  return answer;
}

console.log(solution('try hello world'));

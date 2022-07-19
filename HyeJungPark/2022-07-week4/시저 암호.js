// 문제
/* 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.
 */

// 대실패.. 대실패코드 ...
// 아스키코드를 활용한다는 시도는 ㄱㅊ았는데
// 일정 범위를 넘어갔을 때 다시 알파벳 시작점으로 돌아오는게 잘 안됨.
// 내일 다시 풀어 보겠음...
function solution1(s, n) {
  let answer = '';
  for (let i = 0; i < s.length; i++) {
    // s[i]가 공백일 경우
    if (s[i] === ' ') {
      answer += ' ';
      continue;
    }
    let code = s[i].charCodeAt();

    if (s[i] === 'z') {
      answer += String.fromCharCode(97 + n - 1);
      continue;
    }
    if (s[i] === 'Z') {
      answer += String.fromCharCode(65 + n - 1);
      continue;
    }

    let codeStart = 0;
    if (code >= 65 && code <= 90) codeStart = 65;
    if (code >= 97 && code <= 122) codeStart = 97;

    if (code - codeStart + n < 25) {
      answer += String.fromCharCode(code + n);
      console.log(code, code + n);
    } else {
      let codeIdx = (code - codeStart + n) % 25;
      answer += String.fromCharCode(code + codeIdx);
      console.log(code, code + codeIdx);
    }
  }
  return answer;
}

// console.log(solution1('a B z', 4));

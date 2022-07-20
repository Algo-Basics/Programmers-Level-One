// 문제
/* 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.
 */

// s의 아스키 코드를 구한다.
// s의 아스키코드를 판별해 대 소문자를 구별하고 각각 스타트 코드를 구한다.
// (스타트코드 - 아스키코드) + n <= 25이면 그대로 아스키코드 + n
// (스타트코드 - 아스키코드) + n > 25 이면, 스타트 코드에, (기존 코드 + n - 스타트 코드)을 더해준다.
// ... 이렇게 하는 이유는 25 범위를 넘어가면 스타트 코드에서부터 빠진 만큼 추가로 더해야 하기 때문이다.
// ... 단 n 좀 클 경우에는, (기존 코드 + n - 스타트 코드) <=25 가 될 때까지 25를 계속 빼 주어야한다.
// ... 혹은 25로 나눈 나머지로 하던가. 그런데 이러면 이 newN이 25 범위내에 있는지 확인하는 조건식이 추가되어야해서 while문으로 계속 빼주었다.
function solution1(s, n) {
  let answer = '';

  for (let i = 0; i < s.length; i++) {
    let code = s[i].charCodeAt();
    let startCode = 0;
    if (code >= 65 && code <= 90) startCode = 65;
    if (code >= 97 && code <= 122) startCode = 97;

    if (s[i] === ' ') {
      answer += ' ';
      continue;
    }
    if (code - startCode + n <= 25) {
      answer += String.fromCharCode(code + n);
      continue;
    } else {
      let newN = code + n - startCode;
      while (newN >= 25) {
        newN -= 25;
      }
      answer += String.fromCharCode(startCode + newN - 1);
    }
  }
  return answer;
}

console.log(solution1('P', 15));

// 대실패.. 대실패코드 ...
// 아스키코드를 활용한다는 시도는 ㄱㅊ았는데
// 일정 범위를 넘어갔을 때 다시 알파벳 시작점으로 돌아오는게 잘 안됨.
// 내일 다시 풀어 보겠음...
function solution2(s, n) {
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

// console.log(solution2('a B z', 4));

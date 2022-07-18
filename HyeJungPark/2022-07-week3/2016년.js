// 문제
/* 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요?
두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 
요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT입니다. 
예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요. */

function solution(a, b) {
  // 입력 : a = 월, b = 일
  // 출력 : 문자열 요일
  // 2016년은 윤년 : 2월 29일까지 있음.

  // 1. 월을 제외한 일 수와, 1월 1일이 금요일부터 시작하므로 b가 1일 때 FRI가 될 수 있는 값을 더해준다.
  // 2. a월이 되기 전까지의 모든 월의 일 수를 sum에 누적한다.
  // 3. 그 sum을 7로 나눈 나머지가 찾고 있는 인덱스 값이 된다.

  const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let sum = b + 4;

  for (let i = 0; i < a - 1; i++) {
    sum += month[i];
  }

  return day[sum % 7];
}

// console.log(solution(1, 1));

// for문의 조건을 보면, a가 1일 때는 조건문을 아예 돌지 않기 때문에 a가 1일 때의 예외를 둘 필요가 없었다.
// 처음 day 배열을 FRI 부터 시작하는 것으로 했는데,
// 인덱스가 1일 경우 그 다음 요소인 SAT가 나오므로 예외를 추가해야해서 조건이 복잡해짐
// 인덱스는 sum 을 7로 나눈 나머지이므로 sum에, b가 1일 때 (1월 1일) FRI 가 되도록 값을 더해줌.

function solution2(a, b) {
  // new Date 객체에서 day의 인덱스를 얻고, 그 값으로 찾은 day 배열의 요소를 리턴
  const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  return day[new Date(2016, a - 1, b).getDay()];
}

solution2(1, 1);

// commit test

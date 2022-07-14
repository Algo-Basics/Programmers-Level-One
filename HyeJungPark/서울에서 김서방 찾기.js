// 문제
/* String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, 
"김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. 
seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.
 */

function solution(arr) {
  // 입력 : Kim 이 포함되어 있는 배열
  // 출력 : 배열 중 kim 의 위치를 찾아 문자열 리턴

  //arr.indexOf(str) => arr 배열에서 str를 찾아 인덱스를 리턴. 여러개 있다면 가장 첫 번째 발견한 인덱스.
  let index = arr.indexOf('Kim');
  return `김서방은 ${index}에 있다`;
}

console.log(solution(['Jane', 'Kim']));

// 문제
/* 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 
2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.
 */

// 입력 : 행과 열의 크기가 같은 두 행렬
// 출력 : 같은 행, 같은 열의 값을 서로 더한 결과값 => 두 개의 배열이 포함된 배열
// 2중 for문에서 배열의 반복 길이에 대해서 수정해보자!
function solution(arr1, arr2) {
  let answer = [[], []];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      answer[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  return answer;
}

console.log(solution([[1], [2]], [[3], [4]]));

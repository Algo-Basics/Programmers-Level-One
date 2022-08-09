// 문제
/* 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 
2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.
 */

// 입력 : 행과 열의 크기가 같은 두 행렬
// 출력 : 같은 행, 같은 열의 값을 서로 더한 결과값 => 두 개의 배열이 포함된 배열

// 풀이과정
// 1. 두 개의 배열이 주어지고, 두 배열이 길이가 모두 동일하기 때문에 2중 반복으로 돌았을 때 undefined가 되지는 않을거라고 생각함.
// 2. 바깥쪽 반복문에서는 전달된 각 배열의 요소의 갯수만큼 반복. 안쪽 반복문에서는 각 배열이 요소로 가진 배열의 길이만큼 반복.
// 3. 안쪽 요소끼리 더하기 전에 더한 값을 담아줄 임시 배열을 선언.
// 4. 매 안쪽 반복문에서는 두 배열의 각 요소 배열의 같은 인덱스 값을 더해 임시배열에 추가한다.
// 5. 하나의 임시배열이 완성되면 answer 배열에 추가하고, 임시 배열을 초기화 한 뒤 다음 덧셈 배열을 만든다.

function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let tmp = [];
    for (let j = 0; j < arr1[i].length; j++) {
      tmp.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(tmp);
  }
  return answer;
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ],
  ),
);

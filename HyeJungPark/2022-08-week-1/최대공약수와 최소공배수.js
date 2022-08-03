// 문제
/* 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 
배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 
예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.
 */

// 입력 : 자연수 n과 m
// 출력 : 두 수 사이의 최대공약수, 최소공배수가 순서대로 들어있는 배열
// 최대공약수는... 공통으로 나누어떨어지는 가장 큰 수 : 공통 소인수를 모두 곱하여 도출
// 최소공배수는... 공통 배수 중 가장 작은 수 : 모든 소인수를 곱하면 도출

// 1. 소인수분해 이용하기 => 소인수분해를 어떻게 코드로 표현해야할지 잘 모르겠다.
// 2. 직접 나누어본 뒤 나누어 떨어지는 수 중 최대공약수 찾기 => 너무 오래걸릴듯 ㅠ
// 3. 직접 곱한뒤 두 수의 배수가 같아지는 시점에서 최소공배수 도출하기. => 너무 오래걸릴듯 2

// 유클리드 호제법? : 두 수 n과 m 이 있을 때, n * m = 최대공약수 * 최소공배수 이다.

// 소인수분해 로직
function soinsu(num) {
  let cnt = 2;
  const result = [];

  // num이 1이 될 때 까지 반복 => 더이상 나누어 떨어지지 않을때까지, 나누어 떨어진 값을 배열에 추가하고 그 몫을 다시 나눈다.
  // 1. num이 cnt로 나누어 떨어질 경우 cnt 를 정답배열에 추가한 뒤
  // ...num을 cnt로 나눈다. (14가 2로 나누어 떨어지면, 2는 정답배열에 추가되고 num은 7이 됨.)
  // 2. 나누어 떨어지지 않으면 cnt 를 증감하고 반복을 계속한다.

  while (num !== 1) {
    if (num % cnt === 0) {
      result.push(cnt);
      num /= cnt;
    } else cnt++;
  }

  return result;
}

///// 테스트케이스 5, 8, 13, 14, 15 실패 ㅠ
function solution1(n, m) {
  let nSoinsu = soinsu(n);
  let mSoinsu = soinsu(m);

  // 최대공약수 : nSoinsu 중 mSoinsu와 공통인 수를 모두 곱한다.
  let Greateast = nSoinsu.filter(num => mSoinsu.includes(num)).reduce((acc, cur) => acc * cur, 1);

  // (n * m) / 최대공약수 = 최소공배수
  let Least = (n * m) / Greateast;

  return [Greateast, Least];
}

console.log(solution1(3, 12));

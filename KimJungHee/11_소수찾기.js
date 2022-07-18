let n = 2;

let arr = Array.from({ length: n - 1 }, (v, i) => i + 2);
let count = 0;
let isPrime = [];

for (i = 0; i < n - 1; i++) {
  for (j = 1; j <= i; j++) {
    if (arr[i] % j === 0) {
      count++;
    }
    console.log(count);
  }
  console.log(count);
  if (count === 2) {
    isPrime.push(arr[i]);
  }
}
console.log(isPrime);

// 너무어려워서 일단 보류하겠습니다...ㅠ

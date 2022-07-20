function solution(n) {
  let arr = [];
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
      arr.push([j]);
    }
    if (arr[n - 1] % i === 0) {
      sum = sum + i;
    }
  }
  return sum;
}

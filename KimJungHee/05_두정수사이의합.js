function solution(a, b) {
  var sum = 0;
  for (i = 0; i < Math.abs(b - a) + 1; i++) {
    if (b >= a) {
      sum = sum + a + i;
    } else {
      sum = sum + b + i;
    }
  }
  return sum;
}

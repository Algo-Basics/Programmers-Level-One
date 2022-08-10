function solution(n) {
  let changeToString = n.toString();
  let sum = 0;

  for (let i = 0; i < changeToString.length; i++) {
    sum = sum + Number(changeToString[i]);
  }
  return sum;
}

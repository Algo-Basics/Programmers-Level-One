function solution(n) {
  const result = n
    .toString()
    .split("")
    .reverse()
    .map((v) => Number(v));

  return result;
}

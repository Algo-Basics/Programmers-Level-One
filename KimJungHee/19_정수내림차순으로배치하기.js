function solution(n) {
  let sortByDesc = String(n)
    .split("")
    .sort((a, b) => b - a)
    .join("");

  let answer = Number(sortByDesc);

  return answer;
}

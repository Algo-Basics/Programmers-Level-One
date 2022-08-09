function solution(s) {
  let answer = s
    .split(" ")
    .map((value) =>
      value
        .split("")
        .map((v, i) => (i % 2 === 0 ? v.toUpperCase() : v.toLowerCase()))
        .join("")
    )
    .join(" ");
  return answer;
}

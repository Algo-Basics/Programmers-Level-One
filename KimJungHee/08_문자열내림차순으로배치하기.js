function solution(s) {
  const answer = s.split("").sort().reverse().join("");
  return answer;
}

// 문자열을 배열에 넣을 생각하지말고 바로 split으로 배열을 만들어줄 생각을 하자.

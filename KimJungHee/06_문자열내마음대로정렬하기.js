function solution(strings, n) {
  var answer = strings.sort((a, b) =>
    a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n])
  );
  return answer;
}

// 인덱스별로 정렬은 했는데 그걸 다시 어떻게 배열로 정렬하지?

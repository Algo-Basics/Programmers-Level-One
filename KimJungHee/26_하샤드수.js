function solution(x) {
  let isHarshard = String(x)
    .split("")
    .map((v) => Number(v))
    .reduce(function add(sum, currValue) {
      return sum + currValue;
    });

  if (x % isHarshard === 0) {
    return true;
  } else return false;
}

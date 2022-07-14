function solution(s) {
  let count = 0;

  var convertedString = s.toLowerCase();

  for (i = 0; i < convertedString.length; i++) {
    if (convertedString[i] === "p") {
      ++count;
    } else if (convertedString[i] === "y") {
      --count;
    }
  }
  if (count === 0) {
    return true;
  } else {
    return false;
  }
}

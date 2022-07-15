function solution(s) {
  if (s.length === 4 || s.length === 6) {
    if (s.match(/^[0-9]+$/) != null) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

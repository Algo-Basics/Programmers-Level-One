function solution(phone_number) {
  const num = phone_number.substr(phone_number.length - 4, 4);
  let secret = "*".repeat(phone_number.length - 4);
  return secret + num;
}

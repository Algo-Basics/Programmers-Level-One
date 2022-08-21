function solution(n, m) {
  let gcd = 1; // 최대공약수
  let lcm = 1; // 최소공배수

  // 최대공약수를 구하는 방법 -> 2부터 min(n,m)까지 모든 정수로 나누어본다.
  for (let i = 2; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      //만약에 둘 다 공통으로 나누어지는 수가 있다면
      gcd = i; // 그 값을 최대공약수로 지정. 제일 마지막으로 gcd에 저장된 수가 최대 공약수.
    }
  }

  // 최소공배수를 구하는 방법 -> 둘 모두 공통으로 나누어 떨어지는 최소의 수를 구한다음 나온다.
  while (true) {
    if (lcm % n === 0 && lcm % m === 0) {
      break;
    }
    lcm++; //참일때까지 lcm을 계속 증가시킨다.
  }

  let answer = [gcd, lcm];
  return answer;
}

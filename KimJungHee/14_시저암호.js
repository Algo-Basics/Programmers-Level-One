const arr = new Array(26).fill().map((_, i) => String.fromCharCode(i + 97));
const n = 1;
const s = "z";

let result = [];
let checkLowerCase = false;
let convertS = s.toLowerCase().split("");

if (s === s.toLowerCase()) {
  checkLowerCase = true;
} else {
  checkLowerCase = false;
}

for (let i = 0; i < arr.length; i++) {
  for (j = 0; j < convertS.length; j++) {
    if (arr[i] === convertS[j]) {
      console.log(convertS[j]);
      result.push(arr[i + n]);
    }
  }
}

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === convertS[i]) {
//     result.push(arr[i + n]);
//   }
// }

checkLowerCase
  ? (result = result.join(""))
  : (result = result.join("").toUpperCase());
console.log(result);

// 현재 알파벳을 어떻게 끊임없이 순회할지 고민

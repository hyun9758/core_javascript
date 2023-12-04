/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

console.log(resultX);
console.log(resultY);
console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function (a, b, c, d, e, f, g) {
  // 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 유사 배열 변수 : arguments
  console.log(arguments);
  return a + b + c + d + e + f + g;
};

const result = calculateTotal(1000, 2300, 5000, 1500, 3500, 4600, 35000);

console.log(result);

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression;

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression;

// 콜백 함수 (표현)식
let callbackFunctionExpression;

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;

var i = 'tiger';

for (var i = 0; i < 10; i++) {
  console.log(i);
}

console.log('outer:' + i);

//

let condition = Boolean('1');

if (condition) {
  const i = 0;
}

console.log(i);

const user = {
  nickName: 'tiger',
  age: 28,
};

user.age = 30;

let a = '';
let b = false;

a |= b;
console.log(a);

/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값

let empty = null;

console.log(typeof empty); // object

// 2. 값이 할당되지 않은 상태

let undef;
console.log(undef); //undefined

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)

const double = "hello";
const single = 'hello';
const backtick = `hello ${10 + 30}`;

console.log( typeof(backtick)); // string

// 4. 정수, 부동 소수점 숫자(길이 제약)

const num = new Number(123); // 123 -> Number -> Object
console.log(num);

const integer = 150;
const floatingPointNumber = 10.123;

console.log(typeof integer)


// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)

const bigNumber = 123n;

console.log(typeof bigNumber);

// 6. 참(true, yes) 또는 거짓(false, no)

const isActive = false;
console.log(typeof isActive);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)

const object = new Object({name: 'seonbeom'}) // object constructor

const obj = {name: 'tiger'}; // object literal
console.log(typeof obj); 

// 8. 고유한 식별자(unique identifier)

const unique = Symbol('uuid');

console.log(unique);


/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류




// Object

const user = {
  name: 'tiger',
  age: 25,
  sayHi: function() {
    console.log('hello~');
  },

  alert1: function() { //normal function

  },

  alert2() { //concise method

  }, 

  alert3: ()=>{ //arrow function

  }
}

user.sayHi()

console.log( user );


// Array
const newArray = new Array([1,2,3]);
const arr = [10, 100, 1000, 1, 2, 3];

console.log( arr [2]);

// function

// 함수 vs 클래스 = 붕어빵틀

function 붕어빵틀() {
  console.log('냠냠 붕어빵');
  return '붕어빵';
}

붕어빵틀();

// this



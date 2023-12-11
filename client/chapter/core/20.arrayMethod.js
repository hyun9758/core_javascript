/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

const isArray = (data) => Array.isArray(data);
const isNull = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null';

function normalIsArray(data) {
  // return Array.isArray(data)
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array'
  );
}

// isArray([]) // true|false
//console.log(Array.isArray([]));

const arr = [10, 100, 1000, 10_000];

const people = [
  {
    id: 0,
    name: '김다영',
    job: '프론트엔드 개발자',
    age: 25,
    imageSrc: 'ASdkl31',
  },
  {
    id: 1,
    name: '김충만',
    job: '치킨집사장',
    age: 51,
    imageSrc: 'asFkzo23',
  },
  {
    id: 2,
    name: '조윤주',
    job: '화가',
    age: 12,
    imageSrc: 'Gzoskq13',
  },
  {
    id: 3,
    name: '송현규',
    job: '마델',
    age: 25,
    imageSrc: 'aabaq23',
  },
];

/* 요소 순환 ---------------------------- */

//forEach
// [10, 100, 1000, 10_000]

const span = document.querySelectorAll('span');

span.forEach((item) => {
  item.addEventListener('click', function () {
    this.style.color = 'red';
  });
});

// forEach

/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift
// reverse
// splice
// sort
const arr = [10, 100, 1000, 10_000];
// const reverseArray = arr.reverse();

const reverseArray = arr.toReversed(); // 원형 파괴  2023

// console.log( reverseArray );

console.log(arr.splice(1, 2, 'javascript', 'css', 'react'));

arr.sort();

/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
// toReversed
// toSpliced
// map

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
// findIndex

/* 요소 걸러내기 --------------------------- */

// filter

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
// reduceRight

/* string ←→ array 변환 ------------------ */

/* string ←→ array 변환 ------------------ */

// split
// join

const str = '종명 예진 현주 지인 훈 은원';

// split : 문자 → 배열
const stringToArray = str.split(' ');
console.log(stringToArray);

// join : 배열 → 문자
const arrayToString = stringToArray.join('-');
console.log(arrayToString);

// split
// join

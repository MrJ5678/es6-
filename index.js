// const arr = ['foo', 1, NaN, false]

// console.log(arr.includes('foo'));
// console.log(arr.includes(NaN));

const obj = {
  foo: 'value1',
  bar: 'value2'
}

// console.log(Object.values(obj));

// console.log(Object.entries(obj));
// for (const [key, value] of Object.entries(obj)) {
//   console.log(key, value);
// }

// console.log(new Map(Object.entries(obj)));

// const p1 = {
//   firstName: 'dong',
//   lastName: 'jiang',
//   get fullName() {
//     return this.firstName + ' ' + this.lastName
//   }
// }

// console.log(p1.fullName);

// const p2 = Object.assign({}, p1)
// p2.firstName = 'long'
// console.log(p2);

// const descriptors = Object.getOwnPropertyDescriptors(p1)
// const p2 = Object.defineProperties({}, descriptors)
// p2.firstName = 'long'
// console.log(p2.fullName);

const books = {
  html: 5,
  css: 15,
  javascript: 134
}

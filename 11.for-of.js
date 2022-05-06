const arr = [100, 200, 300, 400]

// arr.forEach(item => {
//   console.log(item);
// })

// for (const item of arr) {
//   if(item > 100) break
//   console.log(item);
// }

// const s = new Set(['foo', 'bar'])

// for (const item of s) {
//   console.log(item);
// }

// const m = new Map()
// m.set('foo', 123)
// m.set('bar', 456)
// console.log(m);

// for (const [key, value] of m) {
//   console.log(key, value);
// }

const obj = {foo: 123, bar: 456}

for (const item of obj) {
  console.log(item);
}
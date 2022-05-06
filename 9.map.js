// const obj = {}
// obj[true] = 'value'
// obj[123] = 'value'
// obj[{a: 1}] = 'value'

// console.log(Object.keys(obj));

const m = new Map()

const tom = {name: 'tom'}

m.set(tom, 90)

// console.log(m);
// console.log(m.get(tom));
// console.log(m.size);
m.forEach((value, key) => {
  console.log(value);
  console.log(key);
})
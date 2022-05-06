// const s = new Set()

// console.log(s.add(1).add(2).add(3).add(2))

// s.forEach(i => console.log(i))

// console.log(s.size);
// for (const i of s) {
//   console.log(i);
// }

// console.log(s.has(100));

// console.log(s.delete(3));
// console.log(s);

// s.clear()
// console.log(s);

const arr = [1, 2, 3, 1]

const result = [...new Set(arr)]
// const result = Array.from(new Set(arr))

// console.log(result.constructor);

console.log(result);
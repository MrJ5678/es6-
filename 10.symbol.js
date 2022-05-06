// const cache = {}

// cache['foo'] = Math.random()

// cache['foo'] = '123'

// console.log(cache);

// const s = Symbol()
// console.log(typeof s);
// console.log(s.constructor);
// console.log(s);

// console.log(Symbol() === Symbol())
// console.log(Symbol('foo'))
// console.log(Symbol('bar'))

// const obj = {}
// obj[Symbol()] = '123'
// obj[Symbol()] = '456'

// console.log(obj);

// const obj = {
//   [Symbol()]: 123
// }

// console.log(Object.keys(obj))

// const name = Symbol()
// const person = {
//   [name]: 'jld',
//   say() {
//     console.log(this[name]);
//   }
// }

// person.say()

//  String Number Boolean null undefined Symbol Bigint Object

// const s1 = Symbol.for('foo')
// const s2 = Symbol.for('foo')
// console.log(s1 === s2);

// console.log(Symbol.for(true) === Symbol.for('true'))

// console.log(Symbol.iterator);
// console.log(Symbol.hasInstance);

// const obj = {
//   [Symbol.toStringTag]: 'XObject'
// }
// console.log(obj.toString());

name = Symbol.for('bar')
const obj = {
  [name]: "Symbol value",
  foo: "normal value",
}

// for (let key in obj) {
//   console.log(key);
// }

// console.log(Object.keys(obj))

// console.log(JSON.stringify(obj))

console.log(Object.getOwnPropertySymbols(obj))

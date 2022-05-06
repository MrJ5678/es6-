// const obj = {
//   foo: '123',
//   bar: '456'
// }

// const proxy = new Proxy(obj, {
//   get(target, property) {
//     return Reflect.get(target, property)
//   }
// })

const obj = {
  name: "jld",
  age: 30,
}

// console.log("name" in obj)
console.log(Reflect.has(obj, "name"));

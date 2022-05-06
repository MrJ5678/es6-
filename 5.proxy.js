// const person = {
//   name: "jld",
//   age: 30
// }

// const personProxy = new Proxy(person, {
//   deleteProperty(target, property) {
//     console.log('delete', property);
//     delete target[property]
//   }
// })

// delete personProxy.age
// console.log(person);

// const personProxy = new Proxy(person, {
//   get(target, property) {
//     console.log(target, property);
//     return property in target ? target[property] : undefined
//   },
//   set(target, property, value) {
//     if(property === 'age') {
//       if(!Number.isInteger(value)) {
//         throw new TypeError(`${value} is not a int`)
//       }
//     }

//     target[property] = value
//     // console.log(target, property, value);
//   }
// })

// personProxy.age = 'hhh'
// personProxy.age = 31
// console.log(personProxy.name);
// console.log(personProxy.xxx);
// personProxy.gender = true
// console.log(person);

const list = []

const listProxy = new Proxy(list, {
  set(target, property, value) {
    console.log('set', property, value);
    target[property] = value
    return true // 表示写入成功
  }
})

listProxy.push(100)
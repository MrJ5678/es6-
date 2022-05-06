// function * createIdMaker() {
//   let id = 1
//   while(true) {
//     yield id++
//   }
// }

// const idMaker = createIdMaker()
// console.log(idMaker.next().value)
// console.log(idMaker.next().value)

const todos = {
  life: ["吃饭", "睡觉", "喝酒"],
  learn: ["vue", "react"],

  // each: function (callback) {
  //   const all = [].concat(this.life, this.learn)
  //   for (const item of all) {
  //     callback(item)
  //   }
  // },

  [Symbol.iterator]: function * () {
    const all = [...this.life, ...this.learn]
    // let index = 0
    // return {
    //   next: function () {
    //     return {
    //       value: all[index],
    //       done: index++ >= all.length,
    //     }
    //   },
    // }
    for (const item of all) {
        yield item
    }
  }
}

for (const item of todos) {
  console.log(item);
}
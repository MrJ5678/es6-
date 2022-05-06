const todos = {
  life: ["吃饭", "睡觉", "喝酒"],
  learn: ["vue", "react"],

  each: function (callback) {
    const all = [].concat(this.life, this.learn)
    for (const item of all) {
      callback(item)
    }
  },

  [Symbol.iterator]: function () {
    const all = [...this.life, ...this.learn]
    let index = 0
    return {
      next: function () {
        return {
          value: all[index],
          done: index++ >= all.length
        }
      }
    }
  },
}

// for (const item of todos.life) {
//   console.log(item);
// }

// for (const item of todos.learn) {
//   console.log(item);
// }

// todos.each(console.log)

for (const item of todos) {
  console.log(item);
}

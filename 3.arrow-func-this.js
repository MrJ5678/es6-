const person = {
  name: "zx",
  sayHi: function () {
    return () => {
      console.log(this.name);
    }
  }
  // sayHi: () => {
  //   console.log(this.name);
  // }
  // sayHi: function () {
  //   console.log(this);
  // }
}

person.sayHi()()
person.name = 'ls'
person.sayHi()()
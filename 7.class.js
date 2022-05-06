class Person {
  constructor(name) {
    this.name = name
  }

  say() {
    console.log(`h1, my name is ${this.name}`);
  }

  static create(name) {
    // console.log(this);
    return new Person(name)
  }
}

class Student extends Person {
  constructor(name, num) {
    super(name)
    this.num = num
  }

  hello() {
    super.say()
    console.log(`my school num is ${this.num}`);
  }
}

const student = new Student('jld', 22)
student.hello()

// const p = new Person('jld')
// p.say()

// const tom = Person.create('tom')
// tom.say()
const arr = [1,2,3]

// const [,,baz] = arr
// console.log(baz);

// const [foo, ...rest] = arr
// console.log(rest);

const path = '/foo/bar/baz'
const [,rootdir] = path.split('/')
console.log(rootdir);
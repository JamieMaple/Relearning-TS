let a = 10
let bb = 100
const ccc = 1000
// ......

for (var i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i)
  })
}
for (let i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i)
  })
}

// Destructing
let input = [1, 2]
// let [first, second] = input

let first = input[0]
let second = input[1]
console.log(first, second)
// swap
// [first, second] = [second, first]
function f([first, second]: [number, number]) {
  console.log(first, second)
}
f([1,2])

// rest and optional
let [first0, ...rest] = [1, 2, 3, 4]
let [, second0, , fouth] = [1,2,3,4]

let o = {
  a: "foo",
  b: 12,
  c: "bar"
}

let { a: a0, b: b0 }: { a: string, b: number } = o
let { a: a1, ...c0 } = o
function keepWholeObject(wholeObject: { a: string, b?: number }) {
  let { a, b = 1001 } = wholeObject
}
type C = { a: string, b?: number }

class CC {
  p = 12;
  m() {}
}
let c1 = new CC()
let clone = {...c1}
clone.p
// clone.m  only for enum


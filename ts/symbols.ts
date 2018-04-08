let sym1 = Symbol()
let sym2 = Symbol("key")
// symbols are immutable and unique
Symbol("key") !== Symbol("key")
// props
let sym = Symbol()
let o = {
  [sym]: "value"
}
console.log(o[sym])
// computed property
const getClassNameSymbol = Symbol()
class C {
  [getClassNameSymbol]() {
    return "C"
  }
}

// well-known

Symbol.hasInstance
// for instanceof

Symbol.species
// specifies a function-valued 
// property that the constructor function
// uses to create ** derived objects **.

Symbol.isConcatSpreadable
// for String.prototype.match()

Symbol.replace
// for String.prototype.repalce

Symbol.search
// for String.prototype.search

// ....
function identity<T>(arg: T): T {
  return arg
}

let output = identity("myString")

function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}

// let myIdentity: <U>(arg: U) => U = identity

interface GenericIdentityFn<U> {
  (arg: U): U;
}
let myIdentity: GenericIdentityFn<number> = identity

class GenericNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}

// types generic constraints
interface Lengthwise {
  length: number
}
function loggingIdentityNext<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}

loggingIdentityNext({length: 3})

// generic constraints
function getProp<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

let x = {a: 1, b: 2, c: 3, d: 4}
getProp(x, "b")
// getProp(x, "E")

// use classes types in generics
interface ClassInterface<T> {
  new(): T
}
function create<T>(c: ClassInterface<T>): T{
  return new c()
}

class BeeKeeper {
  hasMask: boolean
}
class ZooKeeper {
  nametag: string
}
class Animal {
  numLegs: number
}
class Bee extends Animal {
  keeper: BeeKeeper
}
class Lion extends Animal {
  keeper: ZooKeeper
}

create(Bee)
create(Lion)

class Test<T> {
  st: T
  constructor(st: T) {
    this.st = st
  }
}

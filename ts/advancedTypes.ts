// intersection types
function extend<T, U>(first: T, second: U): T & U {
  let result = <T & U>{}
  for (let id in first) {
    (<any>result)[id] = (<any>first)[id]
  }
  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      (<any>result)[id] = (<any>second)[id]
    }
  }
  return result
}

class Person {
  constructor(public name: string) {}
}
interface Loggable {
  log(): void
}
class ConsoleLogger implements Loggable {
  log() {
    // 
  }
}

var jim = extend(new Person("Jim"), new ConsoleLogger())
var n = jim.name
jim.log()

// union types
function padLeft(value: string, padding: string|number) {
  // code
}
let indentedString = padLeft("Hello World", 123)

interface Bird {
  fly(): void
  layEggs(): void
}

interface Fish {
  swim(): void
  layEggs(): void
}

function getSmallPet(): Fish|Bird {
  // codes.
  return { layEggs() {}, fly() {} }
}

let pet = getSmallPet()
pet.layEggs()
// pet.swim() error

// type guards and differentiating types
if ((<Fish>pet).swim) {
  (<Fish>pet).swim()
} else if ((<Bird>pet).fly) {
  (<Bird>pet).fly()
}

// user defined type guards
// pet is Fish is type predicate
// form: parameterName is type
function isFish(pet: Fish|Bird): pet is Fish {
  return (<Fish>pet).swim !== undefined
}

if (isFish(pet)) {
  pet.swim()
} else {
  pet.fly()
}

// typeof guards
// typeof "typeName"
function isNumber(x: any): x is number {
  return typeof x === "number"
}

function isString(x: any): x is string {
  return typeof x === "string"
}
function padLeftNext(value: string, padding: string|number) {
  if (isNumber(padding)) {
    return Array(padding + 1).join(" ") + value
  } else if (isString(padding)) {
    return padding + value
  }
  throw new Error(`Expected string or number, got '${padding}'`)
}

// instanceof Contructor
interface Padder {
  getPaddingString(): string
}
class SpaceRepeatingPadder implements Padder {
  constructor(private numSpaces: number) { }
  getPaddingString() {
    return Array(this.numSpaces + 1).join(" ")
  }
}
class StringPadder implements Padder {
  constructor(private value: string) { }
  getPaddingString() {
    return this.value
  }
}
function getRandomPadder() {
  return Math.random() < 0.5 ?
    new SpaceRepeatingPadder(4) :
    new StringPadder("  ")
}
let padder: Padder = getRandomPadder()

if (padder instanceof SpaceRepeatingPadder) {
  padder
} else if (padder instanceof StringPadder) {
  padder
}

// nullable types
// The inventor of null, 
// Tony Hoare, 
// calls this his “billion dollar mistake”.
let s: string|null = "foo"
s = null
// s = undefined

// Optional parameters and properties
function f(x: number, y?: number) {
  return x + (y||0)
}
f(1,2)
f(1)
f(1, undefined)
// f(1, null)

// optional properties
class C {
  a: number
  b?: number
}
let c = new C()
c.a = 12
// c.a = undefined
c.b = 13
c.b = undefined
// c.b = null

// nullable types guards
function fixed(name: string|null): string {
  function postfix(epithet: string) {
    return name!.charAt(0) + '. the ' + epithet
  }
  name = name || "Bob"
  return postfix(name)
}

// type aliases
type Name = string
type NameOrResolver = () => string
type NameOrResovler = Name | NameOrResolver
function getName(n: NameOrResolver): Name {
  if (typeof n === "string") {
    return n
  } else {
    return n()
  }
}

type Tree<T> = {
  value: T
  left: Tree<T>
  right: Tree<T>
}

type LinkedList<T> = T & { next: LinkedList<T> }

interface Person {
  name: string
}

var people: LinkedList<Person>

type Alias = { num: number }
interface Interface {
  num: number
}
declare function aliased(arg: Alias): Alias
declare function interfaced(arg: Interface): Interface

// string literal types
// enum-like
type Easing = "ease-in" | "ease-out" | "ease-in-out"
class UIElement {
  animate(dx: number, dy: number, easing: Easing) {
    if (easing === "ease-in") {
      easing
    } else if (easing === "ease-out") {
      easing
    } else {
      easing
    }
  }
}
let button = new UIElement()
// button.animate(0, 0, "unsafe")
button.animate(0, 0, "ease-in")
// string literal types with overloads
function createElement(tagName: "img"): HTMLImageElement
function createElement(tagName: "input"): HTMLInputElement
function createElement(tagName: string): Element {
  // code here
  return new Element
}

// numberic literal types
function joke(): 1|2|3|4|5 {
  return 4
}

// discriminated unions(可辨识联合)
interface Square {
  kind: "square"
  size: number
}
interface Rectangle {
  kind: "rectangle"
  width: number
  height: number
}
interface Circle {
  kind: "circle"
  radius: number
}
interface Triangle {
  kind: "triangle"
  length: number
}
type Shap = Square | Rectangle | Circle | Triangle
function assertNever(x: never): never {
  throw new Error("unexpected object: " + x)
}
function area(s: Shap): number {
  switch(s.kind) {
    case "square":
      return s.size * s.size
    case "rectangle":
      return s.height * s.width
    case "circle":
      return Math.PI * s.radius * s.radius
    case "triangle":
      return s.length
    default:
      return assertNever(s)
  }
}

// polymorphic this types
class BasicCalculator {
  public constructor(protected value: number = 0) {}
  public currentValue(): number {
    return this.value
  }
  public add(operand: number): this {
    return this
  }
  public multiply(operand: number): this {
    this.value *= operand
    return this
  }
}
let v = new BasicCalculator(2).multiply(5).add(2).currentValue()

class ScientificCalculator extends BasicCalculator {
  public constructor(value = 0) {
    super(value)
  }
  public sin() {
    this.value = Math.sin(this.value)
    return this
  }
}
let v0 = new ScientificCalculator(20).multiply(30).sin()

// index types
// the index type query operator.
// For any type T, keyof T is the union of known,
// public property names of T
function pluck<T, K extends keyof T>(o: T, names: K[]) {
  return names.map(n => o[n])
}

// mapped types（映射类型）
interface Person {
  name: string
  age: number
}
let person: Person = { name: "Kevin", age: 29 }
pluck(person, ['age'])

interface MapNext<T> {
  [key: string]: T
}
let keys: keyof MapNext<number>
let values: MapNext<number>['foo']
type Keys = 'option1'|'option2'
// The syntax resembles the syntax for index 
// signatures with a for .. in inside.
// 1. The type variable K, which gets bound to each property in turn.
// 2. The string literal union Keys, which contains the names 
// of properties to iterate over.
// 3. The resulting type of the property.
type Flags = { [K in Keys]: boolean}
type Nullable<T> = { [P in keyof T]: T[P]|null }

type Proxy<T> = {
  get(): T
  set(value: T): void
}
type Proxify<T> = {
  [P in keyof T]: Proxy<T[P]>
}

// ts lib map
// Readonly, Partial and Pick are homomorphic 
// whereas Record is not. 
type ReadonlyNext<T> = {
  readonly [P in keyof T]: T[P]
}
type PartialNext<T> = {
  [P in keyof T]?: T[P]
}
type PickNext<T, K extends keyof T> = {
  [P in K]: T[P]
}
type RecordNext<K extends string, T> = {
  [P in K]: T
}

type ThreeStringProps = Record<'prop1'|'prop2'|'prop3', string>

function unproxify<T>(t: Proxify<T>): T {
  let result = {} as T
  for (const k in t) {
    result[k] = t[k].get()
  }
  return result
}

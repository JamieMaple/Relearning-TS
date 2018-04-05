interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label)
}

// it’s only the shape that matters. 
// If the object we pass to the function meets
// the requirements listed, then it’s allowed.

let myObj = {size: 10, label: "size 10 obj"}
printLabel(myObj)

// optional props
interface SquareConfig {
  color?: string;
  width?: number;
}
function createSquare(config: SquareConfig): {color: string, area: number} {
  let newSquare = {color: "white", area: 100}
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width
  }
  return newSquare
}

let myObj2 = {color: "black", width: 100, test: 200}
let mySquare = createSquare(myObj2)

interface Point {
  readonly x: number;
  readonly y: number;
}
let p1: Point = { x: 10, y: 20 }


let anums: number[] = [1,2,3,4,5]
let ro: ReadonlyArray<number> = anums
// ro[0] = 12
// ro.push()
// ro.length = 100
anums = ro as number[]

// Function types
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc = function(src, sub) {
  let result = src.search(sub)
  return result > -1
}
interface StringArray {
  [index: number]: string;
}

// Indexable Types
let myArray: StringArray = ["jamie", "maple"]
let myStr: string = myArray[1]

class Animal {
  name: string;
}
class Dog extends Animal {
  breed: string;
}

interface Okay {
  [x: number]: Dog;
  [x: string]: Animal;
}

interface NumberDictionary {
  [index: string]: number;
  length: number;
  // name: string; error
}

interface ReadonlyStringArray {
  readonly [index: number]: string;
}
let myArray0: ReadonlyStringArray = ["Alice", "Bob"]
// myArray0[2] = "Mallory" error

// Class Types
interface ClockInterface {
  // when a class implements an interface, 
  // only the instance side of the class is checked. 
  // Since the constructor sits in the static side, 
  // it is not included in this check.
  // new (hour: number, minute: number); error
  currentTime: Date;
  setTime(d: Date);
}

class Clock implements ClockInterface {
  currentTime: Date;
  constructor(h: number, m: number) {}
  setTime(date: Date) {
    this.currentTime = date
  }
}

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterfaceNext;
}

interface ClockInterfaceNext {
  tick()
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterfaceNext {
  return new ctor(hour, minute)
}

class DigitalClock implements ClockInterfaceNext {
  constructor(h: number, m: number) {}
  tick() {
    console.log("beep beep")
  }
}

class AnalogClock implements ClockInterfaceNext {
  constructor(h: number, m: number) {}
  tick() {
    console.log("tick tick")
  }
}

createClock(DigitalClock, 12, 17)
createClock(AnalogClock, 7, 32)

interface Shap {
  color: string;
}
interface PenStroke {
  penWidth: number;
}
interface Square extends Shap, PenStroke {
  sideLength: number;
}

let square = <Square>{}
square.color = "blue"
square.penWidth = 5.0
square.sideLength = 10

// Hybrid Types
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}
function getCounter(): Counter {
  let counter = <Counter>function(start: number) {}
  counter.interval = 123
  counter.reset = function() {}

  return counter
}
let counter = getCounter()
counter(10)
counter.reset()
counter.interval = 5.0

class Control {
  private state: any;
}
interface SelectableControl extends Control {
  select(): void;
}
class Button extends Control implements SelectableControl {
  select() {}
}
class TextBox extends Control {
  select() {}
}

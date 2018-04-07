// function parameter brivariance
enum EventType {
  Mouse,
  Keyboard,
}

interface Event { timestamp: number; }
interface MouseEvent extends Event { x0: number; y0: number }
interface KeyEvent extends Event { keyCode: number }

function listenEvent(eventType: EventType, handler: (n: Event) => void) {
  // some code here
}
listenEvent(EventType.Mouse, (e: MouseEvent) => {
  console.log(e.x0 + ', ' + e.y0)
})
listenEvent(EventType.Keyboard, (e: KeyEvent) => {
  console.log(e.keyCode)
})
// listenEvent(EventType.Mouse, function(e: number) {})

function invokeLater(args: any[], callback: (...args: any[]) => void) {
  // invoke
}
invokeLater([1,2,3,4], (x, y) => console.log(x, y))
invokeLater([1,2,3,4], (x?, y?) => console.log(x, y))

// enums
enum Status { Ready, Waiting }
enum Color { Red, Blue, Green }
let statusNext = Status.Ready
// statusNext = Color.Red error cannot asign from different values

// classes
// When comparing two objects of a class type, 
// only members of the instance are compared. 
// Static members and constructors do not affect compatibility.
class Animal {
  feet: number
  constructor(feet: number, temp: string) {
    this.feet = feet
  }
}
class Size {
  feet: number
  constructor(feet: number) {
    this.feet = feet
  }
}

let a: Animal = new Animal(123, "hello")
let s: Size = new Size(23)

a = s
s = a

// generics
interface Empty<T> {}
let x: Empty<string> = 1
let y: Empty<number> = "string"

x = y

interface NotEmpty<T> {
  data: T
}
let x1: NotEmpty<number> = { data: 12 }
let y1: NotEmpty<string> = { data: "string" }

// x1 = y1 error

let identity = function<T>(x: T): T {
  return x
}

let reverse = function<U>(x: U): U {
  return x
}

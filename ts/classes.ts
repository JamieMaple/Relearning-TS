class Greeter {
  greeting: string
  constructor(message: string) {

  }
  greet() {
    return "Hello, " + this.greeting
  }
}

let greeter = new Greeter("world")

class Animal {
  name: string
  constructor(thName: string) {
    this.name = thName
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}`)
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name)
  }
  move(distanceInMeters = 5) {
    console.log("Slithering...")
    super.move(distanceInMeters)
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name)
  }
  move(distanceInMeters = 45) {
    console.log("Galloping...")
    super.move(distanceInMeters)
  }
}
let sam = new Snake("Sammy the Python")
let tom: Animal = new Horse("Tommy the Palomino")

sam.move()
tom.move(34)

// Public, Private and Protected
class AnimalNext {
  private name: string
  constructor(theName: string)  {
    this.name = theName
  }
}

class Rhino extends AnimalNext {
  constructor() {
    super("Rhino")
  }
}

class Employee {
  private name: string
  constructor(theName: string) {
    this.name = theName
  }
}

let animal = new AnimalNext("Goat")
let rhino = new Rhino()
let employy = new Employee("Bob")
rhino = animal
// animal = employy

class Person {
  protected name: string
  constructor(name: string) {
    this.name = name
  }
}

class EmployeeNext extends Person {
  private department: string
  static test: string = "hello"
  constructor(name: string, department: string) {
    super(name)
    this.department = department
  }
  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`
  }
}

let howard = new EmployeeNext("Howard", "Sales")
console.log(howard.getElevatorPitch())
console.log(EmployeeNext.test)
// console.log(howard.name)

let passcode = "scret passcode"

class EmployeeNextNext {
  private _fullName: string

  get fullName(): string {
    return this._fullName
  }

  set fullName(newName: string) {
    if (passcode && passcode == "scret passcode") {
      this._fullName = newName
    } else {
      console.log("Error: fullName")
    }
  }
}

// Abstrac Classes
abstract class AnimalNextNext {
  abstract makeSound: void
  move(): void {
    console.log("remong th end")
  }
}

// Advanced Techniques
class GreeterNext {
  greeting: string
  constructor(message: string) {
    this.greeting = message
  }
  greet() {
    return `Hello, ${this.greeting}`
  }
}

let greeterNext: typeof Greeter = GreeterNext

class Point {
  x: number;
  y: number;
}

interface Point3d extends Point {
  z: number;
}

let point3d: Point3d = {x:1, y: 2, z: 3}
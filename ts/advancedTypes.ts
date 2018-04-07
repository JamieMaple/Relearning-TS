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
  fly()
  layEggs()
}

interface Fish {
  swim()
  layEggs()
}

function getSmallPet(): Fish|Bird {
  // codes.
  return
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
  return (<Fish>pet).swim()
}

if (isFish(pet)) {
  pet.swim()
} else {
  pet.fly()
}

// typeof guards
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


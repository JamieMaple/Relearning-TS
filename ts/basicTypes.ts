// numbers, strings, boolean

let isDone: boolean = false

let decimal: number = 6
let hex: number = 0xf00d
let binary: number = 0b1010
let octal: number = 0o744

let color: string = "blue"
color = "red"
let fullName: string = `Jamie Maple`
let age = 37
let setence: string = `
Hello, my name is ${fullName}.

I'll be ${age + 1} years old next month.
`

// Array
let list1: number[] = [1,2,3]
// generic way
let list2: Array<number> = [1,2,3]

// Tuple
let x: [string, number]
x = ["hello", 10]
// x = [10, "hello"]
console.log(x[0].substr(1))
// console.log(x[1].substr)
x[3] = "world"
// x[6]=true not string or number

// enum
enum Color { Red = 1, Green = 2, Blue = 4 }
let c: Color = Color.Blue
let colorName: string = Color[2]

// any
let notSure: any = 4
notSure = "hello"
let prettySure: Object = 4
prettySure.toString()
// pretttySure.toFixed()

// void
function warnUser(): void {
  alert('this is my warning message')
}
let unusable: void = undefined // or null
// However, when using the --strictNullChecks flag, 
// null and undefined are only assignable to void and their respective types.
// unusable = null
// unusable = 3

// undefined and null
// By default null and undefined are subtypes 
// of all other types. 
// That means you can assign
// null and undefined to something like number.

let u: undefined = undefined
let n: null = null

// never
// The never type is a subtype of, and assignable to,
// every type; however, no type is a subtype of, 
// or assignable to, never (except never itself). 
// Even any isn’t assignable to never.
let never: never
function error(message: string): never {
  throw new Error()
}
function fail() {
  return error("Something failed")
}
function infiniteLoop(): never {
  while (true) {}
}

// Types assertions
let someValue: any = "this is a string"
let strlength1: number = (<string>someValue).length
let strlength2: number = (someValue as string).length // jsx only


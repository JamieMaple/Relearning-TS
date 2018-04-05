class Greeter {
  greeting: string
  constructor(message: string) {

  }
  greet() {
    return "Hello, " + this.greeting
  }
}

let greeter = new Greeter("world")

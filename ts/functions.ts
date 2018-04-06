function add(x: number, y: number): number {
  return x + y
}

let myAdd: (x: number, y: number) => number = function(x: number, y: number) {
  return x + y
}

function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + " " + lastName
  } else {
    return firstName
  }
}

function buildNameNext(firstName: string, lastName: string = "Smith") {
  return firstName + " " + lastName
}

function buildNameNextNext(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ")
}

let employeeNames = buildNameNextNext("Joseph", "Samuel", "Lucas", "MacKinzie")

interface Card {
  suit: string
  card: number
}
interface Deck {
  suits: string[]
  cards: number[]
  createCardPicker(this: Deck): () => Card
}
let deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: new Array(52),
  createCardPicker(this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52)
      let pickedSuit = Math.floor(pickedCard / 13)

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 }
    }
  }
}

// overloads
function test(x: number): number;
function test(x: string): string;
function test(x: any): any {
  if (typeof x === 'number') {
    return x
  } else if (typeof x === 'string') {
    return x
  }
}

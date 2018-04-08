let someArray = [1, "string", false]

// for ... of
for (let entry of someArray) {
  console.log(entry)
}

// for ... in
let list = [4, 5, 6]
for (let i in list) {
  console.log(i)
}
for (let i of list) {
  console.log(i)
}

let pets = new Set(["cat", "dog", "hamster"])
for (let pet in pets) {
  console.log(pet)
}


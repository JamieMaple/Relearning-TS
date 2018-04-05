function printLabel(labelledObj: { label: string }) {
  console.log(labelledObj.label)
}
let myObj = { size: 10, label: "size 10 object" }
printLabel(myObj)

// interface LabelledValue
let isDone = false;
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
let color = "blue";
color = "red";
let fullName = `Jamie Maple`;
let age = 37;
let setence = `
Hello, my name is ${fullName}.

I'll be ${age + 1} years old next month.
`;
let list1 = [1, 2, 3];
let list2 = [1, 2, 3];
let x;
x = ["hello", 10];
console.log(x[0].substr(1));
x[3] = "world";
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
let c = Color.Blue;
let colorName = Color[2];
let notSure = 4;
notSure = "hello";
let prettySure = 4;
prettySure.toString();
function warnUser() {
    alert('this is my warning message');
}
let unusable = undefined;
let u = undefined;
let n = null;
let never;
function error(message) {
    throw new Error();
}
function fail() {
    return error("Something failed");
}
function infiniteLoop() {
    while (true) { }
}
let someValue = "this is a string";
let strlength1 = someValue.length;
let strlength2 = someValue.length;

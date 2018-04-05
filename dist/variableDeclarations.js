var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var a = 10;
let bb = 100;
const ccc = 1000;
for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    });
}
for (let i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    });
}
let input = [1, 2];
let first = input[0];
let second = input[1];
console.log(first, second);
function f([first, second]) {
    console.log(first, second);
}
f([1, 2]);
let [first0, ...rest] = [1, 2, 3, 4];
let [, second0, , fouth] = [1, 2, 3, 4];
let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a: a0, b: b0 } = o;
let { a: a1 } = o, c0 = __rest(o, ["a"]);
function keepWholeObject(wholeObject) {
    let { a, b = 1001 } = wholeObject;
}
class CC {
    constructor() {
        this.p = 12;
    }
    m() { }
}
let c1 = new CC();
let clone = Object.assign({}, c1);
clone.p;

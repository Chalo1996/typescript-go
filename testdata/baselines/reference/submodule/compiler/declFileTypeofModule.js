//// [tests/cases/compiler/declFileTypeofModule.ts] ////

//// [declFileTypeofModule.ts]
module m1 {
    export var c: string;
}
var m1_1 = m1;
var m1_2: typeof m1;

module m2 {
    export var d: typeof m2;
}

var m2_1 = m2;
var m2_2: typeof m2;

//// [declFileTypeofModule.js]
var m1;
(function (m1) {
})(m1 || (m1 = {}));
var m1_1 = m1;
var m1_2;
var m2;
(function (m2) {
})(m2 || (m2 = {}));
var m2_1 = m2;
var m2_2;

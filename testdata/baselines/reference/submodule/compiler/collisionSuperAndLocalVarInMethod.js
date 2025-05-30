//// [tests/cases/compiler/collisionSuperAndLocalVarInMethod.ts] ////

//// [collisionSuperAndLocalVarInMethod.ts]
var _super = 10; // No Error
class Foo {
    x() {
        var _super = 10; // No error
    }
}
class b extends Foo {
    public foo() {
        var _super = 10; // Should be error 
    }
}
class c extends Foo {
    public foo() {
        var x = () => {
            var _super = 10; // Should be error
        }
    }
}

//// [collisionSuperAndLocalVarInMethod.js]
var _super = 10; // No Error
class Foo {
    x() {
        var _super = 10; // No error
    }
}
class b extends Foo {
    foo() {
        var _super = 10; // Should be error 
    }
}
class c extends Foo {
    foo() {
        var x = () => {
            var _super = 10; // Should be error
        };
    }
}

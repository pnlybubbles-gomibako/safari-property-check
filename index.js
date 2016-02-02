"use strict";

function Klass1() {}

Klass1.staticProp = 'staticProp';

var Klass2 = new Function();

Klass2.staticProp = 'staticProp';

var Klass3 = function () {};

Klass3.staticProp = 'staticProp';

console.log(Object.getOwnPropertyNames(Klass1));
console.log(Object.getOwnPropertyNames(Klass2));
console.log(Object.getOwnPropertyNames(Klass3));
console.log(Klass1.name);
console.log(Klass2.name);
console.log(Klass3.name);
console.log(Klass1.__proto__ === Function.prototype);
console.log(Klass2.__proto__ === Function.prototype);
console.log(Klass3.__proto__ === Function.prototype);

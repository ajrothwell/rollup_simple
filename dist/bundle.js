(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.rc = {})));
}(this, (function (exports) { 'use strict';

var foo = 'foo';

var a = function () {
  return foo;
};

var b = function () {
  Promise.resolve().then(function () { return bar$1; }).then(({ default: bar }) => console.log(bar));
};

console.log(b);

var bar = 'bar';


var bar$1 = Object.freeze({
	default: bar
});

exports.a = a;
exports.b = b;

Object.defineProperty(exports, '__esModule', { value: true });

})));

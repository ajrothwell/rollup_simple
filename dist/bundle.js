(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.rc = factory());
}(this, (function () { 'use strict';

var foo = 'foo';

function main () {
  return foo;
}

// export default function () {
//   import('./foo.js').then(({ default: foo }) => return foo);
// }

return main;

})));

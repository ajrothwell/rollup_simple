
import foo from './foo.js';
var a = function () {
  return foo;
}

var b = function () {
  import('./bar.js').then(({ default: bar }) => console.log(bar));
}

// console.log(b);

export default { a, b }

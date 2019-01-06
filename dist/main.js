var foo = 'foo';

var a = function () {
  return foo;
};

var b = function () {
  import('./chunk-5bf2d485.js').then(({ default: bar }) => console.log(bar));
};

// console.log(b);

var main = { a, b };

export default main;

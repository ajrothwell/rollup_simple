console.log('foo.js is running');
var foo = 'foo';

var a = function () {
  return foo;
};

var b = function () {
  import('./chunk-8fbb60ae.js').then(({ default: bar }) => console.log(bar));
};

export { a, b };


import foo from './foo.js';
export default function () {
  return foo;
}

// export default function () {
//   import('./foo.js').then(({ default: foo }) => return foo);
// }


export default function () {
  import('./bar.js').then(({ default: bar }) => console.log(bar));
}

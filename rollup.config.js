
// import json from 'rollup-plugin-json';

export default {
  input: ['src/main.js', 'src/main2.js'],
  output: {
    dir: 'dist',
    format: 'esm'
  },
  experimentalCodeSplitting: true,
  experimentalDynamicImport: true,
  // plugins: [ json() ]
};

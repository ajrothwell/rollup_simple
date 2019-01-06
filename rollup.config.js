
import json from 'rollup-plugin-json';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    name: 'rc'
  },
  experimentalCodeSplitting: true,
  experimentalDynamicImport: true,
  plugins: [ json() ]
};s

import buble from '@rollup/plugin-buble'

export default {
  input: 'src/EslintValidator.js',
  output: [
    {
      file: 'dist/EslintValidator.umd.js',
      format: 'umd',
      name: 'EslintValidator',
    },
    {
      file: 'dist/EslintValidator.esm.js',
      format: 'es',
    },
    {
      file: 'dist/EslintValidator.cjs.js',
      format: 'cjs',
    },
  ],
  plugins: [
    buble(),
  ],
}
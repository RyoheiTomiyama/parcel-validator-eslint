export default {
  input: 'src/EslintValidator.js',
  output: [
    {
      file: 'dist/EslintValidator.esm.js',
      format: 'es',
    },
    {
      file: 'dist/EslintValidator.cjs.js',
      format: 'cjs',
    },
  ],
}
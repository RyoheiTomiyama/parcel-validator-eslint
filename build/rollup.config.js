export default {
  input: 'src/EslintValidator.js',
  output: [
    {
      file: 'dist/EslintValidator.esm.js',
      format: 'es',
      exports: 'default',
    },
    {
      file: 'dist/EslintValidator.cjs.js',
      format: 'cjs',
      exports: 'default',
    },
  ],
  external: ['@parcel/plugin'],
}
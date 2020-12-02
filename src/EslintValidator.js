import { Validator } from '@parcel/plugin'

const EslintValidator = (new Validator({
  async validate({asset, options}) {
    const npmPackage = await asset.getPackage()

    const validatorResult = {
      warnings: [],
      errors: [],
    }

    const { ESLint } = await options.packageManager.require(
      'eslint',
      asset.filePath,
      { autoinstall: options.autoinstall },
    )
    
    const eslintOptions = Object.fromEntries(
      Object
        .entries(npmPackage?.config?.parcel?.eslint || {})
        .filter(([_, v]) => typeof v !== 'undefined')
    )

    const eslint = new ESLint(eslintOptions)
    const code = await asset.getCode()
    const results = await eslint.lintText(code, {
      filePath: asset.filePath
    })

    await ESLint.outputFixes(results)

    if (results.some((result) => result.errorCount)) {
      const formatter = await eslint.loadFormatter('codeframe');
      const resultText = formatter.format(results);
      validatorResult.errors.push({
        origin: 'parcel-validator-eslint',
        message: resultText,
        filePath: asset.filePath,
      }) 
    } else if (results.some((result) => result.warningCount)) {
      const formatter = await eslint.loadFormatter('codeframe');
      const resultText = formatter.format(results);
      validatorResult.warnings.push({
        origin: 'parcel-validator-eslint',
        message: resultText,
        filePath: asset.filePath,
      }) 
    }

    return validatorResult
  },
}))
export default EslintValidator
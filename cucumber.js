module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: ['step-definitions/**/*.ts', 'support/**/*.ts'],
    format: ['progress'],
    paths: ['features/**/*.feature']
  }
};

const { injectBabelPlugin } = require('react-app-rewired');
module.exports = (config, env) => {
  config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
  return config;
}
module.exports = (configs, env) => {
  configs = injectBabelPlugin(['import', { libraryName: 'antd', style: 'css' }], configs);
  return configs;
}

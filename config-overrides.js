const { injectBabelPlugin } = require('react-app-rewired');
module.exports = (config, env) => {
  config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }, 'antd-mobile'], config);
  config = injectBabelPlugin(['import', { libraryName: 'antd', style: 'css' }, 'antd'], config)
  return config;
}

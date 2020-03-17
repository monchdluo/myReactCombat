const { override, fixBabelImports, addLessLoader, addDecoratorsLegacy, addWebpackAlias,
  addPostcssPlugins
} = require('customize-cra');

module.exports = override(
  // 按需加载
  fixBabelImports('import', {
<<<<<<< HEAD
    libraryName: 'antd-mobile',
    // libraryDirectory: 'es',
    style: 'css',
=======
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
>>>>>>> fdc3e67d3ebf95b0df656e413e88cb93faeb6be2
  }),
  // 自定义主题
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
  }),
  // ES7 装饰器语法兼容
  addDecoratorsLegacy(),
  // 配置路径别名
  addWebpackAlias({}),
  addPostcssPlugins([require('postcss-pxtorem')({
    rootValue: 37.5,
    propList: ['*']
  }),])
)
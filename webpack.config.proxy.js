const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const OpenBrowserPlugin = require('open-browser-webpack-plugin');
// const NpmInstallPlugin = require('npm-install-webpack-plugin');

const isomorphicPath = path.resolve(__dirname, 'src/common/isomorphic.js');

// const APPENV = process.env.APPENV;
// const config = require(`./config/config.${APPENV}`);

const svgDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. 属于 antd-mobile 内置 svg 文件
  // path.resolve(__dirname, 'src/assets/images/'),  // 2. 自己私人的 svg 存放目录
];


module.exports = {
  entry: "./src/index.js", // string | object | array
  // 这里应用程序开始执行
  // webpack 开始打包

  output: {
    // webpack 如何输出结果的相关选项

    path: path.resolve(__dirname, "dist"), // string
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）

    filename: "bundle.[hash].js", // string
    // 「入口分块(entry chunk)」的文件名模板（出口分块？）

    publicPath: "/", // string
    // 输出解析文件的目录，url 相对于 HTML 页面

    library: "common", // string,
    // 导出库(exported library)的名称

    pathinfo: true, // boolean
    // 在生成代码时，引入相关的模块、导出、请求等有帮助的路径信息。

    chunkFilename: "[chunkhash].js", // 长效缓存(/guides/caching)
    // 「附加分块(additional chunk)」的文件名模板

    sourceMapFilename: "[file].map", // string

  },

  module: {
    // 关于模块配置

    rules: [
      // 模块规则（配置 loader、解析器等选项）
      {
        test: /\.js?$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        exclude: [
          // path.resolve(__dirname, "src/demo-files")
        ],
        use: [{
          loader: 'babel-loader',
        }],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            }
          },
          'postcss-loader',
        ],
        exclude: [
          path.resolve(__dirname, "node_modules"),
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
        include: [
          path.resolve(__dirname, "node_modules"),
        ]
      },
      {
        test: /\.(png|jpg|webp)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }
      },
      // {
      //   test: /\.(svg)$/i,
      //   loader: 'svg-sprite',
      //   include: svgDirs,  // 把 svgDirs 路径下的所有 svg 文件交给 svg-sprite-loader 插件处理
      // },
      // {
      //   test: /\.svg$/,
      //   loader: 'babel-loader!react-svg',
      //   include: path.resolve(__dirname, 'src/assets/images/'),
      // },
      {
        test: /\.svg$/,
        use: [
          "babel-loader",
          "react-svg-loader"
        ]
      },

      // {
      //   test: "\.html$"
      //
      //   use: [
      //     // 应用多个 loader 和选项
      //     "htmllint-loader",
      //     {
      //       loader: "html-loader",
      //       options: {
      //         /* ... */
      //       }
      //     }
      //   ]
      // },
      //
      // { oneOf: [ /* rules */ ] },
      // // 只使用这些嵌套规则之一
      //
      // { rules: [ /* rules */ ] },
      // // 使用所有这些嵌套规则（合并可用条件）
      //
      // { resource: { and: [ /* 条件 */ ] } },
      // // 仅当所有条件都匹配时才匹配
      //
      // { resource: { or: [ /* 条件 */ ] } },
      // { resource: [ /* 条件 */ ] },
      // // 任意条件匹配时匹配（默认为数组）
      //
      // { resource: { not: /* 条件 */ } }
      // // 条件不匹配时匹配
    ],

  },

  resolve: {
    // 解析模块请求的选项
    // （不适用于对 loader 解析）

    modules: [
      "node_modules",
      path.resolve(__dirname, "src")
    ],
    // 用于查找模块的目录

    extensions: ['.web.js', '.js', '.jsx', '.json', '.css'],
    // 使用的扩展名

    alias: {
      // 模块别名列表
      'isomorphic': isomorphicPath,

      "module": "new-module",
      // 起别名："module" -> "new-module" 和 "module/path/file" -> "new-module/path/file"

      "only-module$": "new-module",
      // 起别名 "only-module" -> "new-module"，但不匹配 "module/path/file" -> "new-module/path/file"

      "module": path.resolve(__dirname, "app/third/module.js"),
      // 起别名 "module" -> "./app/third/module.js" 和 "module/file" 会导致错误
      // 模块别名相对于当前上下文导入
    },
    /* 可供选择的别名语法（点击展示） */

    /* 高级解析选项（点击展示） */
  },

  // performance: {
  //   hints: "warning", // 枚举
  //   maxAssetSize: 200000, // 整数类型（以字节为单位）
  //   maxEntrypointSize: 400000, // 整数类型（以字节为单位）
  //   assetFilter: function(assetFilename) {
  //     // 提供资源文件名的断言函数
  //     return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
  //   }
  // },

  devtool: "source-map", // enum
  // 通过在浏览器调试工具(browser devtools)中添加元信息(meta info)增强调试
  // 牺牲了构建速度的 `source-map' 是最详细的。

  context: __dirname, // string（绝对路径！）
  // webpack 的主目录
  // entry 和 module.rules.loader 选项
  // 相对于此目录解析

  target: "web", // 枚举
  // 包(bundle)应该运行的环境
  // 更改 块加载行为(chunk loading behavior) 和 可用模块(available module)

  externals: [],
  // 不要遵循/打包这些模块，而是在运行时从环境中请求他们

  // stats: "errors-only",
  stats: { //object
    assets: true,
    colors: true,
    errors: true,
    errorDetails: true,
    hash: true,
  },
  // 精确控制要显示的 bundle 信息

  devServer: {
    proxy: { // proxy URLs to backend development server
      '/api/*': {
        changeOrigin: true,
        // target:  'http://xiguawang.com.cn',
        target: 'http://118.190.158.183:8080',
        secure: false
      },
      '/oss/*': {
        changeOrigin: true,
        // target:  'http://xiguawang.com.cn',
        target: 'http://118.190.158.183:8080',
        secure: false
      }
    },
    // host: '168.168.0.103',
    host: '0.0.0.0',
    port: '3800',
    contentBase: path.join(__dirname), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    noInfo: true, // only errors & warns on hot reload
    // open: true,
  },

  plugins: [
    // new webpack.ProvidePlugin({
    //         $: "jquery",
    //         jQuery: "jquery"
    //     }),
    new HtmlWebpackPlugin({
      title: 'jianghu-admin',
      filename: 'index.html',
      template: 'src/template.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.DefinePlugin(config.app),
    // new OpenBrowserPlugin({ url: `http://${config.host}:${config.port}/webpack-dev-server/`}),
    // new NpmInstallPlugin(),
  ]
}

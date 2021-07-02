// const SentryWebpackPlugin = require('@sentry/webpack-plugin')




// const config = {
//     configureWebpack: {
//         plugins: [
//             new SentryWebpackPlugin({
//                 release: function(hash) {
//                     return hash; // webpack build hash
//                   },
//                 include: './dist', // 打包后的目录
//                 ignore: ['node_modules', 'vue.config.js', 'babel.config.js'],
//             }),
//         ],
//     },
// }

// // 只在生产环境下上传 sourcemap
// module.exports = process.env.NODE_ENV == 'production'? config : {}

const SentryWebpackPlugin = require('@sentry/webpack-plugin');

module.exports = {
  configureWebpack: config => {
    //生产and测试环境
		let pluginsPro = [
      new SentryWebpackPlugin({
        include: './dist',
        ignoreFile: '.sentrycliignore',
        ignore: ['node_modules', 'webpack.config.js'],
        configFile: 'sentry.properties',
        release: 'ssp' + process.env.VERSION //仅仅是sourcemap的名字
      })
		];
		//开发环境
		let pluginsDev = [];
		if(process.env.ENV === 'production') {
			config.plugins = [...config.plugins, ...pluginsPro];
		} else {
			// 为开发环境修改配置...
			config.plugins = [...config.plugins, ...pluginsDev];
    }
  }
};


module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/LoadingOverlay.js',
  output: {
    library: 'LoadingOverlay',
    libraryTarget: 'umd'
  },
  stats: {
    colors: true,
    modules: true,
    reasons: true,
    errorDetails: true
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react/lib/ReactCSSTransitionGroup': 'ReactCSSTransitionGroup',
    'react-dom': 'ReactDOM'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  }
}

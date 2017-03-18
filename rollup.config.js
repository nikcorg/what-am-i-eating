module.exports = {
  plugins: [
    require('rollup-plugin-node-resolve')({
      jsnext: true,
      browser: true,
      main: true
    }),
    require('rollup-plugin-commonjs')()
  ]
}

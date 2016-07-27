import nodeResolve from 'rollup-plugin-node-resolve'

export default {
  entry: 'd3.source.js',
  format: 'umd',
  moduleName: 'd3',
  plugins: [ nodeResolve({jsnext: true}) ],
  dest: 'build/d3.js'
}

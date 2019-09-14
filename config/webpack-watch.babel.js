import path from 'path'

import baseConfig from './webpack-base.js'


export default {
  ...baseConfig,
  mode: 'development',
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },
}

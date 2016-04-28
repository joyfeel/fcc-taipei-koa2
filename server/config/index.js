import port from './env/port'

const env = process.env.NODE_ENV || 'development'
const config = require(`./env/${env}`).default

export default {
  ...port,
  ...config
}

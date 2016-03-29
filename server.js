import Koa from 'koa'
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import session from 'koa-session';
import serve from 'koa-static'
import convert from 'koa-convert';
import router from './router';
import path from 'path'

import webpack from 'webpack'
import WebpackDevMiddleware from "koa-webpack-dev-middleware"
import WebpackHotMiddleware from "koa-webpack-hot-middleware"

import webpackConfig from './webpack.config'

const app = new Koa()

app.use(serve(__dirname + '/public'))

const compiler = webpack(webpackConfig);
app.use(convert(WebpackDevMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  historyApiFallback: true
})));

app.use(convert(WebpackHotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
})));

app.use(logger());
app.use(convert(bodyParser()));
app.keys = ['some secret hurr'];
app.use(convert(session(app)));

app
  .use(router.routes())
  .use(router.allowedMethods());

export default app

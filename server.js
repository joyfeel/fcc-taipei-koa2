import Koa from 'koa'
import path from 'path'
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import session from 'koa-session';
import serve from 'koa-static'
import convert from 'koa-convert';

import Router from 'koa-router'
import indexRouter from './router/index';
import userRouter from './router/user';
import loginRouter from './router/login';

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

app.use(indexRouter.routes(), indexRouter.allowedMethods());
app.use(userRouter.routes(), userRouter.allowedMethods());
app.use(loginRouter.routes(), loginRouter.allowedMethods());

export default app

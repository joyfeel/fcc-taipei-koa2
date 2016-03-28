import Koa from 'koa'
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import session from 'koa-session';
import serve from 'koa-static'
import convert from 'koa-convert';
import router from './router';

const app = new Koa()

app.use(serve(__dirname + 'public'))

app.use(logger());
app.use(convert(bodyParser()));
app.keys = ['some secret hurr'];
app.use(convert(session(app)));

app
  .use(router.routes())
  .use(router.allowedMethods());

export default app

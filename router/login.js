import Router from 'koa-router'
import faker from 'faker'

const router = new Router();

router.get('/login', async (ctx, next) => {
  ctx.response.body = "Login"
  ctx.response.status = 200
});

export default router;

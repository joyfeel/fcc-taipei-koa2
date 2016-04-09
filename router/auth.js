import Router from 'koa-router'
import convert from 'koa-convert';

const router = new Router()

router.get('/auth/github', async (ctx, next) => {
  //ctx.response.body = "Login"

  console.log(ctx.request.body)
  console.log('2222222')
  ctx.response.status = 200
});

export default router;

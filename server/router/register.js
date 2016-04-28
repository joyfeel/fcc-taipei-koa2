import Router from 'koa-router'
import convert from 'koa-convert';

const router = new Router()

router.post('/register', async (ctx, next) => {
  ctx.response.body = { a: 'emailsssss' }
  ctx.response.status = 200
})

export default router

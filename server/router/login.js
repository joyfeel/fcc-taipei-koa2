import Router from 'koa-router'
import jwt from 'koa-jwt'
import convert from 'koa-convert';

const jwtSecret = process.env.JWT_SECRET
const router = new Router()

const userInfo = {
  email: 'joybee210@gmail.com',
  password: 'p'
}

const tokenInfo = () => {
  return {
    authenticated: true,
    token: jwt.sign({
      username: userInfo.email
    }, jwtSecret)
    //token: Math.random().toString(36).substring(7)
  }
}

router.post('/login',
  authenticate,
  async (ctx, next) => {
      console.log(ctx.request.body.email)
      const email = ctx.request.body.email
      ctx.response.body = { ...tokenInfo(), email }
      ctx.response.status = 200
  }
)

async function authenticate(ctx, next) {
  const [email, password] = [ctx.request.body.email, ctx.request.body.password]
  if (!email || !password) {
    console.log("少一個 (email 或 password)")
    ctx.response.status = 400
    return;
  }

  if (email !== userInfo.email || password !== userInfo.password) {
    console.log("驗證失敗 (email or password 錯)")
    ctx.response.status = 401
    return;
  }

  await next()
}

export default router

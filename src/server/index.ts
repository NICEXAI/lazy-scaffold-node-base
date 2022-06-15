import Koa from "koa"
import { Context } from "koa"
import KoaRouter from "koa-router"
import { address } from "ip"

// 启动服务
export function start(port: number) {
	const app = new Koa()
	const router = new KoaRouter()

	router.get("/", (ctx: Context, next) => {
		ctx.body = "Hello, World"
	})

	app.use(router.routes())

	app.listen(port, () => {
		console.log(`
Server running at:
- Local: http://localhost:${port}
- Network: http://${address()}:${port}
        `)
	})
}

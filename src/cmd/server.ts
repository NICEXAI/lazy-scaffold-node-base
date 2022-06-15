import { Command } from "commander"

import { config } from "../config"
import { start } from "../server"

// 服务相关指令
export function serverCommand(): Command {
	const server = new Command("server")

	server
		.argument("<start>", "启动当前服务")
		.description("服务管理相关操作")
		.option(
			"-p, --port",
			"指定服务监听端口，默认：8000",
			config.application.port.toString()
		)
		.action(() => {
			const port = server.opts()["port"]
			// 启动服务
			start(port)
		})

	return server
}

import { Command } from "commander"

import { configCommand } from "./config"
import { serverCommand } from "./server"

// 执行入口
export function execute() {
	// 初始化Command实例
	const program = new Command()

	// 注册所有Command
	program.addCommand(configCommand())
	program.addCommand(serverCommand())

	// 解析命令行参数
	program.parse(process.argv)
}

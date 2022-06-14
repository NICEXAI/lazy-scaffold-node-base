import { Command } from "commander"

// 服务配置相关指令
export function configCommand(): Command {
	const config = new Command("config")

	config.command("init").action(() => {
		console.log("初始化配置")
	})

	return config
}

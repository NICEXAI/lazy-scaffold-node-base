import { Command } from "commander"
import { testCommand } from "./test";

// 执行入口
export function execute() {
    // 初始化Command实例
    const program = new Command()
    
    // 注册所有Command
    program.addCommand(testCommand())

    // 解析命令行参数
    program.parse(process.argv)
}
import { readFileSync } from "fs"
import { parse } from "yaml"

import { Setting } from "./setting"

const CONFIG_DEFAULT_PATH = "./setting.default.yml"

const configContent = readFileSync(CONFIG_DEFAULT_PATH, "utf8")

export const config: Setting = parse(configContent)

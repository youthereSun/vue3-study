import { defineConfig, loadEnv } from 'vite'
import base_config from './vite.base.config'
import dev_config from './vite.dev.config'
import prod_config from './vite.prod.config'


//策略模式
const envResolver = {
  'build': () => Object.assign({}, base_config, prod_config),
  'serve': () => {
    return Object.assign({}, base_config, dev_config)
  }
}

export default defineConfig(({ command, mode }) => {
  console.log('通过node获取当前文件路径', process.cwd())
  //根据mode的值去读取对应.env文件的数据
  //mode==development,读取.env.development中的环境变量
  const env = loadEnv(mode, process.cwd(), "")
  return envResolver[command]();

})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base:"./", //设置项目的根目录
  build: {
    outDir: 'docs' // 打包文件的输出目录
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')  // 为./src配置别名
    }
  }
})

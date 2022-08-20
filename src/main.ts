/*
 * @Author: cest
 * @Date: 2022-08-20 19:22:16
 * @LastEditTime: 2022-08-21 07:09:11
 * @LastEditors: cest
 * @FilePath: /color-ui-next/src/main.ts
 * @Description: 编辑描述内容
 */
import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'
import type { UserModule } from './types'
import generatedRoutes from '~pages'

// import '@unocss/reset/tailwind.css'
// import './styles/main.css'
// import 'uno.css'

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
  },
)

/*
 * @Author: cest
 * @Date: 2022-08-18 13:57:11
 * @LastEditTime: 2022-08-18 14:39:47
 * @LastEditors: cest
 * @FilePath: /color-ui-next/src/shims.d.ts
 * @Description: 腻子脚本 类型声明文件
 */
declare interface Window {
  // extend the window
}

// with vite-plugin-vue-markdown, markdown files can be treated as Vue components
declare module '*.md' {
  import { type DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.vue' {
  import { type DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// declare module 'lodash/cloneDeep'
// declare module 'element-plus/lib/locale/lang/zh-cn'
// declare module 'element-plus/lib/locale/lang/en'
declare module '@intlify/vite-plugin-vue-i18n'

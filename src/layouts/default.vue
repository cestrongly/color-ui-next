<!--
 * @Author: cest
 * @Date: 2022-08-20 19:22:16
 * @LastEditTime: 2022-08-21 02:28:47
 * @LastEditors: cest
 * @FilePath: /color-ui-next/src/layouts/default.vue
 * @Description: 默认布局系统
-->
<script lang="ts" setup>
import '~/assets/color-ui/stylus/index.styl'
import '~/pages/color-ui/assets/stylus/index.styl'
</script>

<template>
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <RouterView />
    <Footer />
    <div class="mt-5 mx-auto text-center opacity-75 dark:opacity-50 text-sm">
      [Default Layout]
    </div>
  </main>
</template>

<!--
 * @Author: cest
 * @Date: 2022-08-18 13:57:11
 * @LastEditTime: 2022-08-18 15:22:31
 * @LastEditors: cest
 * @FilePath: /color-ui-next/src/App.vue
 * @Description: 编辑描述内容
-->
<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'ColorUI Next',
  meta: [
    { name: 'description', content: '基于 antfu/vitesse 构建新一代 ColorUI' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#00aba9' : '#ffffff'),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: computed(() => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg'),
    },
  ],
})
const { locale } = useI18n()
locale.value = 'zh-CN'
</script>

<template>
  <RouterView />
</template>

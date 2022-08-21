<!--
 * @Author: cest
 * @Date: 2022-08-21 07:25:24
 * @LastEditTime: 2022-08-21 10:58:00
 * @LastEditors: cest
 * @FilePath: /color-ui-next/src/pages/color-ui/components/ArticleH1Content/index.vue
 * @Description: 编辑描述内容
-->
<script lang="ts" setup name="ArticleH1Content">
const props = defineProps({
  h1: {
    type: String,
    default: '文章一级标题',
  },
  description: {
    type: String,
    default: '标题说明',
  },

})
</script>

<template lang="pug">
.pb-10
  div
    h1.inline-block.text-3xl.font-extrabold.text-gray-900.tracking-tight {{ props.h1 }}
  p.mt-1.text-lg.text-gray-500 {{ props.description }}
</template>

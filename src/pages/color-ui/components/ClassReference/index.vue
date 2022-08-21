<!--
 * @Author: cest
 * @Date: 2022-08-21 10:06:48
 * @LastEditTime: 2022-08-21 10:58:39
 * @LastEditors: cest
 * @FilePath: /color-ui-next/src/pages/color-ui/components/ClassReference/index.vue
 * @Description: 编辑描述内容
-->

<script lang="ts" setup name="ClassReference">
import type { ClassReferenceProps } from './type'

const props = defineProps({
  items: {
    type: Array<ClassReferenceProps>,
  },
  message: {
    type: String,
    default: '消息',
  },
})
</script>

<template lang="pug">
div {{props.message}} {{props.items?.length}}
</template>


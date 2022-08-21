<!--
 * @Author: cest
 * @Date: 2022-08-21 07:20:37
 * @LastEditTime: 2022-08-21 10:59:06
 * @LastEditors: cest
 * @FilePath: /color-ui-next/src/pages/color-ui/layout/box-sizing/index.vue
 * @Description: 编辑描述内容
-->
<script lang='ts' setup name='BoxSizing'>
import ArticleH1Content from '../../components/ArticleH1Content/index.vue'
import type { ClassReferenceProps } from '../../components/ClassReference/type'
import ClassReference from '../../components/ClassReference/index.vue'

const getClassReferenceList = (): Array<ClassReferenceProps> => [{
  Class: 'box-border',
  Property: 'box-sizing: border-box;',
}, {
  Class: 'box-content',
  Property: 'box-sizing: content-box;',
}]

const items = reactive(getClassReferenceList())
const message = ref('66666')
// console.log('ClassReferenceList:', ClassReferenceList)
// const ClassReferenceListReactive = reactive(ClassReferenceList)
</script>

<template lang='pug'>
.container
  ArticleH1Content(h1='Box Sizing' description='控制浏览器如何计算元素的总大小的功能类。')
  ClassReference(:message='message' :items='items' )
</template>

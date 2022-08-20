<!--
 * @Author: cest
 * @Date: 2022-08-21 01:21:56
 * @LastEditTime: 2022-08-21 02:18:52
 * @LastEditors: cest
 * @FilePath: /color-ui-next/src/pages/color-ui/layout/container/index.vue
 * @Description: 编辑描述内容
-->
<script lang="ts" setup>
import Usage from './markdown/Usage.md'
</script>

<template lang="pug">
.container
  .prose.prose-sm.m-auto.text-left
    .pb-10
      div
        h1.inline-block.text-3xl.font-extrabold.tracking-tight 容器
      p.mt-1.text-lg 根据当前断点固定元素宽度的组件。
    table.w-full.text-left.border-collapse
      colgroup
        col(class="w-1/2")
        col(class="w-1/2")
      thead
        tr
          th.z-20.sticky.top-0.text-sm.font-semibold.text-gray-600.bg-white.p-0
            .pb-2.border-b.border-gray-200 Class
          th.z-20.sticky.top-0.text-sm.font-semibold.text-gray-600.bg-white.p-0
            .pb-2.border-b.border-gray-200 Properties
      tbody.align-baseline
        tr
          td.py-2.font-mono.text-xs.text-violet-600.whitespace-nowrap(translate="no")
            | container
          td.py-2.font-mono.text-xs.text-light-blue-600.whitespace-pre(translate="no")
            | width: 100%;
        tr
          td.py-2.font-mono.text-xs.text-violet-600.whitespace-nowrap(translate="no")
            | container-sm
          td.py-2.font-mono.text-xs.text-light-blue-600.whitespace-pre.border-t.border-gray-200(translate="no")
            | max-width: 640px;
        tr
          td.py-2.font-mono.text-xs.text-violet-600.whitespace-nowrap(translate="no")
            | container-md
          td.py-2.font-mono.text-xs.text-light-blue-600.whitespace-pre.border-t.border-gray-200(translate="no")
            | max-width: 768px;
        tr
          td.py-2.font-mono.text-xs.text-violet-600.whitespace-nowrap(translate="no")
            | container-lg
          td.py-2.font-mono.text-xs.text-light-blue-600.whitespace-pre.border-t.border-gray-200(translate="no")
            | max-width: 1024px;
        tr
          td.py-2.font-mono.text-xs.text-violet-600.whitespace-nowrap(translate="no")
            | container-xl
          td.py-2.font-mono.text-xs.text-light-blue-600.whitespace-pre.border-t.border-gray-200(translate="no")
            | max-width: 1280px;
        tr
          td.py-2.font-mono.text-xs.text-violet-600.whitespace-nowrap(translate="no")
            | container-2xl
          td.py-2.font-mono.text-xs.text-light-blue-600.whitespace-pre.border-t.border-gray-200(translate="no")
            | max-width: 1536px;
  Usage
</template>

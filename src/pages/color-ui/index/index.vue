<!--
 * @Author: cest
 * @Date: 2022-08-18 14:53:38
 * @LastEditTime: 2022-08-18 16:43:12
 * @LastEditors: cest
 * @FilePath: /color-ui-next/src/pages/color-ui/index/index.vue
 * @Description: 编辑描述内容
-->
<script lang="ts" setup>
import '~/assets/color-ui/stylus/index.styl'
</script>

<template lang="pug">
.container 预设背景样式
  section 深色背景
    .background-color-black 墨黑
    .background-color-blue 海蓝
    .background-color-brown 棕褐
    .background-color-cyan 天青
    .background-color-gray 草灰
    .background-color-green 森绿
    .background-color-grey 玄灰
    .background-color-mauve 木槿
    .background-color-olive 橄榄
    .background-color-orange 桔橙
    .background-color-pink 桃粉
    .background-color-purple 姹紫
    .background-color-red 嫣红
    .background-color-white 雅白
    .background-color-yellow 明黄
  section 浅色背景
    .light.background-color-black 墨黑
    .light.background-color-blue 海蓝
    .light.background-color-brown 棕褐
    .light.background-color-cyan 天青
    .light.background-color-gray 草灰
    .light.background-color-green 森绿
    .light.background-color-grey 玄灰
    .light.background-color-mauve 木槿
    .light.background-color-olive 橄榄
    .light.background-color-orange 桔橙
    .light.background-color-pink 桃粉
    .light.background-color-purple 姹紫
    .light.background-color-red 嫣红
    .light.background-color-white 雅白
    .light.background-color-yellow 明黄
  section 渐变背景
    .background-image-shade-top
      | .background-image-shade-top
      | .background-image-shade-top
    .background-image-shade-bottom
      | .background-image-shade-bottom
      | .background-image-shade-bottom
    .background-image-gradual-red
      | 魅红
      | .background-image-gradual-red
    .background-image-gradual-orange
      | 鎏金
      | .background-image-gradual-orange
    .background-image-gradual-green
      | 翠柳
      | .background-image-gradual-green
    .background-image-gradual-purple
      | 靛青
      | .background-image-gradual-purple
    .background-image-gradual-pink
      | 惑紫
      | .background-image-gradual-pink
    .background-image-gradual-blue
      | 霞彩
      | .background-image-gradual-blue
</template>

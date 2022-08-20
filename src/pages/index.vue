<!--
 * @Author: cest
 * @Date: 2022-08-18 13:57:11
 * @LastEditTime: 2022-08-21 01:22:51
 * @LastEditors: cest
 * @FilePath: /color-ui-next/src/pages/index.vue
 * @Description: 编辑描述内容
-->
<script setup lang="ts">
const user = useUserStore()
const name = $ref(user.savedName)

const router = useRouter()
const goItems = $ref([{
  name: 'Preflight',
  url: '/base/preflight',
},
{
  name: '容器',
  url: '/layout/container',
}])
const go = (url: string) => {
  router.push(url)
}

const { t } = useI18n()
</script>

<template>
  <div>
    <div text-4xl>
      <div i-carbon-campsite inline-block />
    </div>
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank">
        Vitesse
      </a>
    </p>
    <p>
      <em text-sm opacity-75>{{ t('intro.desc') }}</em>
    </p>

    <div py-4 />

    <input
      id="input"
      v-model="name"
      :placeholder="t('intro.whats-your-name')"
      :aria-label="t('intro.whats-your-name')"
      type="text"
      autocomplete="false"
      p="x4 y2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="go(`/hi/${encodeURIComponent(name)}`)"
    >
    <label class="hidden" for="input">{{ t('intro.whats-your-name') }}</label>

    <div>
      <button
        btn m-3 text-sm
        :disabled="!name"
        @click="go(`/hi/${encodeURIComponent(name)}`)"
      >
        {{ t('button.go') }}
      </button>
    </div>
    <div v-for="(item, index) in goItems" :key="index">
      <button
        btn m-3 text-sm
        @click="go(`/color-ui${item.url}`)"
      >
        {{ item.name }}
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

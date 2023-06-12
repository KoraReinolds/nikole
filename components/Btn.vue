<script setup>
const props = defineProps({ link: String, title: String, icon: String })
</script>

<template>
  <div
    class="cursor-pointer px-4 text-xl text-dark -skew-x-8 h-12 rounded-2xl font-bold italic text-center bg-main flex items-center justify-center">
    <a :href="props.link">
      {{ props.title }}
    </a>
    <slot></slot>
  </div>
</template>

<style lang="postcss" scoped></style>

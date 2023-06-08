<script setup>
const props = defineProps({ link: String })
</script>

<template>
  <div
    class="cursor-pointer text-xl text-dark -skew-x-8 h-12 w-64 rounded-2xl font-bold italic text-center bg-main flex items-center justify-center">
    <a :href="props.link">
      Получить скидку
    </a>
  </div>
</template>

<style lang="postcss" scoped></style>

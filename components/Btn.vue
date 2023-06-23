<script setup>
const props = defineProps({
  link: String,
  title: String,
  type: {
    type: String,
    required: false,
  }
})
let btnClasses = 'text-xl'
if (props.type === 'lg') {
  btnClasses = 'text-2xl'
}
</script>

<template>
  <div
    :class="[btnClasses, 'cursor-pointer px-6 py-4 text-dark rounded-2xl font-bold italic text-center bg-main flex items-center justify-center']">
    <a :href="props.link">
      {{ props.title }}
    </a>
    <slot></slot>
  </div>
</template>

<style lang="postcss" scoped></style>

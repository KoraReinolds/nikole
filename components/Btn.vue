<script setup>
const props = defineProps({
  href: String,
  title: String,
  icon: String,
  type: {
    type: String,
    required: false,
  }
})
let btnClasses = {
  fontSize: 'text-base',
  height: 'h-12',
}
if (props.type === 'lg') {
  btnClasses.fontSize = 'text-xl'
  btnClasses.height = 'h-16'
}
let iconClasses = 'w-6 h-6 ml-3'
if (props.type === 'lg') {
  iconClasses = 'w-8 h-8 ml-4'
}
</script>

<template>
  <component :is="href ? 'a' : 'button'"
    :class="[btnClasses.fontSize, btnClasses.height, 'max-w-max cursor-pointer px-6 rounded-2xl font-bold italic text-center flex items-center justify-center text-2xl']"
    :href="props.href">
    {{ props.title }}
    <img v-if="props.icon" :class="iconClasses" :src="props.icon">
  </component>
</template>

<style lang="postcss" scoped></style>

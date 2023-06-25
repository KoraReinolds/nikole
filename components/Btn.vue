<script setup>
const props = defineProps({
  link: String,
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
console.log(props.type, btnClasses, props.icon)
</script>

<template>
  <div
    :class="[btnClasses.height, 'max-w-max cursor-pointer px-6 text-dark rounded-2xl font-bold italic text-center bg-main flex items-center justify-center text-2xl']">
    <a :class="btnClasses.fontSize" :href="props.link">
      {{ props.title }}
    </a>
    <img v-if="props.icon" :class="iconClasses" :src="props.icon">
  </div>
</template>

<style lang="postcss" scoped></style>

<template>
  <slot></slot>
  <div :class="['w-full h-full bg-black absolute inset-0', $attrs.class]" />
  <div class="w-full h-full bg-gradient-to-t from-black via-transparent absolute inset-0" />
</template>
<script setup>
import { tryOnMounted } from '@vueuse/core';

const isMounted = ref(false)
tryOnMounted(() => {
  isMounted.value = true;
})
</script>

<template>
  <section class="bg-white text-center">
    <h1 class="font-m pt-16 text-5xl text-secondary">Как нас найти?</h1>
    <p class="pt-8 text-2xl">Мурманск</p>
    <p class="pb-8 text-2xl">ул.Володарского, 13</p>
    <div v-if="isMounted">
      <yandex-map :coords="[68.9732619, 33.0877664]">
        <ymap-marker markerId="123" marker-type="placemark" hint-content="element.hint" :coords="[54, 39]"></ymap-marker>
      </yandex-map>
    </div>
  </section>
</template>



<style>
.ymap-container {
  height: 400px;
}
</style>
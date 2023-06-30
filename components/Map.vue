<script setup>
import { tryOnMounted } from '@vueuse/core';

const isMounted = ref(false)
tryOnMounted(() => {
  isMounted.value = true;
})

const options = {
  searchControlProvider: 'none',
}

const markerCoords = [68.9732619, 33.0899664]

const markerOptions = {
  iconLayout: 'default#image',
  iconImageHref: '@/assets/img/vk.png',
  iconImageSize: [30, 30],
  iconImageOffset: [-15, -30],
}

</script>

<template>
  <section class="bg-black pt-16 text-center flex flex-col justify-center items-center md:flex-row gap-8 md:gap-16">
    <div>
      <h1 class="font-m text-5xl text-secondary">Как нас найти?</h1>
      <p class="pt-8 text-2xl text-main">Мурманск</p>
      <p class="text-2xl text-main">ул.Володарского, 13</p>
    </div>
    <div v-if="isMounted" class="w-full md:w-[400px]">
      <yandex-map :settings="settings" :coords="markerCoords" zoom="17" :cluster-options="{
        1: { clusterDisableClickZoom: true }
      }" :behaviors="['drag', 'scrollZoom']" :controls="[]">
        <ymap-marker markerId="1" marker-type="placemark" :coords="markerCoords" hint-content="Николе"
          :balloon="{ header: 'header', body: 'body', footer: 'footer' }" cluster-name="1" />
      </yandex-map>
    </div>
  </section>
</template>



<style>
.ymap-container {
  height: 400px;
  width: 100%;
}
</style>
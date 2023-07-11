<script setup>
import { tryOnMounted } from '@vueuse/core';
const socialImgs = import.meta.globEager('@/assets/img/socials/*.png');
const isMounted = ref(false)
tryOnMounted(() => {
  isMounted.value = true;
})

const options = {
  searchControlProvider: 'none',
}

const markerCoords = [68.9740499, 33.0887814]

const markerOptions = {
  iconLayout: 'default#image',
  iconImageHref: socialImgs['/assets/img/socials/map.png'].default,
  iconImageSize: [90, 105],
  iconImageOffset: [-15, -30],
}

</script>

<template>
  <section
    class="bg-black pt-16 md:pb-16 text-center flex flex-col justify-center items-center md:flex-row gap-8 md:gap-16">
    <div class="flex flex-col items-center text-xl text-main md:items-end">
      <h1 class="font-m text-5xl text-secondary">Как нас найти?</h1>
      <div class="bg-main h-[1px] w-48 my-6"></div>
      <p>Мурманск</p>
      <p>ул.Володарского, 13</p>
      <p>Пн-Вс: с 10:00 до 21:00</p>
    </div>
    <div v-if="isMounted" class="w-full md:w-[400px]">
      <yandex-map :settings="settings" :coords="markerCoords" zoom="16" :cluster-options="{
        1: { clusterDisableClickZoom: true }
      }" :behaviors="['drag']" :controls="[]">
        <ymap-marker markerId="1" marker-type="placemark" :options="markerOptions" :coords="markerCoords"
          hint-content="Николе" :balloon="{ header: 'header', body: 'body', footer: 'footer' }" cluster-name="1" />
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
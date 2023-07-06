<script setup>
const aboutList2 = [
  {
    title: 'ТОЛЬКО',
    text: `высококачественные сертифицированные продукты и инструменты`,
  },
  {
    title: 'БЕЗОПАСНОСТЬ',
    text: `- одноразовые инструменты, вскрываются и утилизируются при Вас`,
  },
]
const aboutList = [
  {
    title: 'Депиляция',
    text: `за 15 минут БЕЗ боли от ТОП мастера с практическим опытом более 11 лет`,
  },
  {
    title: 'Перманентный макияж',
    text: `всех зон от мастера-тренера с опытом 4000+ процедур`,
  },
  {
    title: 'СПА',
    text: `программы, для тех, кто хочет расслабиться и отдохнуть в полной мере с пользой для организма`,
  },
  {
    title: 'МАССАЖ',
    text: `– направленный на улучшение эстетического вида и функционального состояния кожи тела и лица`,
  },
  {
    title: 'Косметология',
    text: ``,
  },
]
</script>

<template>
  <div
    class="bg-black pt-4 px-4 sm:px-12 lg:px-16 pb-12 sm:pb-16 lg:pb-24 text-main grid grid-cols-1 gap-12 sm:gap-16 lg:grid-cols-12 lg:gap-4 max-w-7xl mx-auto">
    <div
      class="max-w-prose overflow-auto text-base sm:text-xl flex flex-col gap-4 lg:gap-6 sm:order-last lg:col-span-7 lg:col-end-13">
      <h1 class="font-m text-6xl text-secondary">О нас</h1>
      <p>Профстудия «Николе» - верный шаг на пути к гармонии души и тела!</p>
      <div class="bg-secondary h-[1px] w-48"></div>
      <p>Уютная атмосфера в центре Мурманска.</p>

      <h5 class="font-bold text-xl sm:text-2xl my-4">Вас ожидают:</h5>
      <ul class="flex flex-col gap-2">
        <li v-for="item in aboutList">
          <List class="w-4 h-4 mb-1 fill-secondary inline-block mr-2" />
          <b>{{ item.title }}</b>
          {{ item.text }}
        </li>
      </ul>

      <ul class="py-4 flex flex-col gap-2">
        <li v-for="item in aboutList2">
          ✅ <b>{{ item.title }}</b>
          {{ item.text }}
        </li>
      </ul>

      <p>Бесплатный wi-fi<br>☕️Вкусный чай/кофе с конфетами</p>

      <p>Приходите и мы позаботимся о Вашем теле, чтобы Вашей душе было приятно и драйвово в нем жить!</p>

    </div>
    <div class="w-full h-0 relative lg:col-span-4 pb-[100%] sm:pb-[33%] lg:pb-[300%]">
      <div class="absolute inset-0 grid grid-cols-2 sm:grid-cols-3 lg:grid-rows-3 lg:grid-cols-1 gap-4 w-full">
        <div class="bg-cover bg-[url('@/assets/img/reseption.jpg')]"></div>
        <div class="bg-cover bg-[url('@/assets/img/procedure.jpg')]"></div>
        <div class="bg-cover bg-bottom col-span-2 sm:col-span-1 bg-[url('@/assets/img/chairs.jpg')]"></div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>

<script setup>
const props = defineProps({
  master: Object,
})
const descHidden = ref(false)
</script>

<template>
  <div class="flex flex-col items-center bg-black text-xl text-secondary pb-20">
    <div class="h-52 md:h-96 relative w-full flex justify-center">
      <FadedImg>
        <img class="object-cover w-full h-full absolute inset-0" :src="master.img">
      </FadedImg>
      <div class="flex flex-row items-end justify-center md:w-full">
        <div class="flex md:text-right mb-2 flex-col font-m text-secondary relative text-center">
          <h1 class="break-words leading-12 text-6xl mr-8" v-html="master.name + '<br/>' + master.specialization"></h1>
        </div>
        <div class="hidden md:block w-32 h-32">
          <img class="object-cover w-full h-full rounded-full relative" :src="master.imgMaster">
        </div>
      </div>
    </div>
    <div class="bg-secondary h-[1px] w-96 my-6" />
    <div v-if="master.description" @click="descHidden = true"
      :class="['w-96 flex justify-center md:w-full cursor-pointer relative', descHidden ? '' : 'h-24 overflow-hidden']">
      <div v-if="!descHidden"
        class="w-full h-full bg-gradient-to-t from-black via-transparent via-30% absolute inset-0" />
      <Arrow v-if="!descHidden" class="absolute rotate-90 top-16 z-10 left-1/2 -translate-x-1/2" />
      <div class="absolute h-10 cursor-pointer w-full top-16"></div>
      <div class="text-main text-base max-w-prose" v-html="master.description"></div>
    </div>
    <ul class="pt-6 md:w-full max-w-[688px] w-96">
      <li v-for="item in master.list" class="even:bg-dark leading-9 flex justify-between items-center px-4 text-main">
        <List class="w-4 h-4 fill-secondary" />
        <div class="w-48 md:text-left md:w-full md:ml-6">
          {{ item.name }}
        </div>
        <div class="text-secondary min-w-[100px]">
          {{ item.price }}&nbsp;{{ item.post || 'р' }}
        </div>
      </li>
    </ul>
    <div>
      <Btn class="mt-8 bg-main" link="https://dikidi.ru/ru/profile/profstudiya_nikole_715159/" title="Записаться">
      </Btn>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>

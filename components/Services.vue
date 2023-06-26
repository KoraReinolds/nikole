<script setup>
const props = defineProps({
  master: Object,
})
const descHidden = ref(false)
</script>

<template>
  <div class="flex flex-col justify-center items-center bg-black text-xl text-secondary relative">

    <FadedImg v-if="master.img">
      <img class="object-cover w-full h-[360px] sm:h-[500px] absolute inset-0" :src="master.img">
    </FadedImg>

    <div class="h-[360px] sm:h-[500px] w-full grid grid-cols-12 max-w-7xl px-16">

      <div
        class="flex flex-wrap sm:flex-nowrap items-end justify-center col-start-1 sm:col-start-3 lg:col-start-1 col-span-12 sm:col-span-8 lg:col-span-6 mt-auto mb-12 lg:mb-16">
        <div class="shrink-0 w-28 h-28 sm:w-40 sm:h-40 float-left mr-4">
          <img class="object-cover w-full h-full rounded-full relative" :src="master.imgMaster">
        </div>
        <h1 class="font-m break-words leading-12 text-5xl text-secondary relative sm:hidden">{{ master.name }}</h1>
        <div class="w-full mt-4 text-center sm:text-start">
          <h1
            class="font-m break-words leading-12 text-5xl md:text-6xl lg:text-7xl text-secondary relative hidden sm:block mb-4">
            {{ master.name }}
          </h1>
          <h1 class="break-words leading-12 text-xl sm:text-2xl font-bold text-main relative">
            {{ master.specialization }}
          </h1>
        </div>
      </div>

    </div>

  </div>

  <!-- <div class="max-w-2xl">

    <div class="bg-secondary h-[1px] w-96 my-6 max-w-2xl" />

    <div v-if="master.description" @click="descHidden = true"
      :class="['flex justify-center w-full cursor-pointer relative', descHidden ? '' : 'h-24 overflow-hidden']">
      <div v-if="!descHidden"
        class="w-full h-full bg-gradient-to-t from-black via-transparent via-30% absolute inset-0" />
      <Arrow v-if="!descHidden" class="absolute rotate-90 top-16 z-10 left-1/2 -translate-x-1/2" />
      <div class="absolute h-10 cursor-pointer w-full top-16"></div>
      <div class="text-main px-8 text-base max-w-prose" v-html="master.description"></div>
    </div>

    <div class="bg-secondary h-[1px] w-96 my-6" />

    <ul class="pt-6 w-full max-w-2xl">
      <li v-for="item in master.services"
        class="cursor-pointer leading-9 flex flex-col justify-between items-center px-4 text-main">

        <div class="hover:bg-dark font-bold flex flex-row items-center justify-center w-full py-2 px-4"
          @click="item.opened = !item.opened">
          <List class="w-4 h-4 fill-secondary mr-4" />
          <div class="text-left w-full h-16 flex items-center">
            {{ item.name }}
          </div>
          <Arrow :class="['fill-secondary w-10 top-16 left-1/2', item.opened ? '-rotate-90' : 'rotate-90']" />
        </div>

        <ul v-if="item.opened" class="w-full px-10 py-4">
          <li v-for="service in item.list" class="odd:bg-dark px-2 w-full flex justify-between">
            <div>
              {{ service.name }}
            </div>
            <div class="text-secondary min-w-[100px] text-right">
              {{ service.price }}&nbsp;{{ service.post || 'р' }}
            </div>
          </li>
        </ul>

      </li>
    </ul>

    <Btn class="mt-8 bg-main" link="https://dikidi.ru/ru/profile/profstudiya_nikole_715159/" title="Записаться">
    </Btn>
  </div> -->
</template>

<style lang="postcss" scoped></style>

<script setup>
const props = defineProps({
  master: Object,
})
const descHidden = ref(false)
</script>

<template>
  <div class="flex flex-col items-center bg-black text-xl text-secondary pb-20">

    <div class="h-52 relative w-full flex justify-center">
      <FadedImg v-if="master.img">
        <img class="object-cover w-full h-full absolute inset-0" :src="master.img">
      </FadedImg>
      <div class="flex flex-row items-end justify-start w-full max-w-2xl">
        <div class="shrink-0 w-32 h-32">
          <img class="object-cover w-full h-full rounded-full relative" :src="master.imgMaster">
        </div>
        <div class="flex text-left ml-4 mb-2 flex-col font-m text-secondary relative">
          <h1 class="break-words leading-12 text-5xl">{{ master.name }}</h1>
          <h1 class="break-words leading-12 text-4xl">{{ master.specialization }}</h1>
        </div>
      </div>
    </div>

    <div class="max-w-2xl">

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
    </div>

  </div>
</template>

<style lang="postcss" scoped></style>

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

  <div class="max-w-7xl px-4 lg:px-16 mx-auto grid grid-cols-12 mb-12 md:mb-16 lg:mb-24">

    <div
      :class="['col-span-12 sm:col-span-8 lg:col-span-12 col-start-0 sm:col-start-3 lg:col-start-0 w-full cursor-pointer relative lg:h-full lg:grid lg:grid-cols-12']">

      <div v-if="master.description" class="col-span-6">
        <div @click="descHidden = true" :class="['h-20 lg:h-full relative overflow-hidden lg:overflow-auto']">
          <div v-if="!descHidden"
            class="w-full absolute bg-gradient-to-t from-black via-transparent via-90% inset-0 lg:hidden" />
          <div class="text-main text-base max-w-prose" v-html="master.description"></div>
        </div>

        <div @click="descHidden = true" v-if="!descHidden"
          class="text-secondary flex justify-start items-center top-16 h-6 col-span-12 lg:hidden">
          <span class="text-sm mr-2">Больше</span>
          <Arrow class="fill-secondary rotate-90 z-10 lg:hidden w-2" />
        </div>
      </div>

      <div class="col-span-5 col-end-13">

        <ul class="w-full max-w-2xl col-span-12 pb-8 pt-8 lg:pt-0">
          <li v-for="item in master.services"
            class="cursor-pointer leading-9 flex flex-col justify-between items-center text-main">

            <div class="hover:bg-dark font-bold flex flex-row items-center justify-center w-full py-3 px-2 sm:px-4"
              @click="item.opened = !item.opened">
              <List class="w-4 h-4 fill-secondary mr-4" />
              <div class="text-left w-full flex items-center text-xl">
                {{ item.name }}
              </div>
              <Arrow
                :class="['fill-secondary h-6 top-16 left-1/2 lg:hidden', item.opened ? '-rotate-90' : 'rotate-90']" />
            </div>

            <ul :class="['w-full px-6 py-4 lg:block', !item.opened && 'hidden']">
              <li v-for="service in item.list"
                class="odd:bg-dark px-2 py-2 w-full flex justify-between items-center text-sm">
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

        <Btn class="ml-8 bg-main" link="https://dikidi.ru/ru/profile/profstudiya_nikole_715159/" title="Записаться">
        </Btn>

      </div>

    </div>

  </div>
</template>

<style lang="postcss" scoped></style>

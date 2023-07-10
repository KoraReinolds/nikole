<script setup>
const props = defineProps({
  service: Object,
})
const descHidden = ref(false)
const masterIndex = ref(0)
const oneMaster = computed(() => props.service.masters.length === 1)
const secondMasterIndex = computed(() => (masterIndex.value + 1) % props.service.masters.length)
const next = () => {
  masterIndex.value = secondMasterIndex.value
}
</script>

<template>
  <div class="flex flex-col justify-center items-center bg-black text-xl text-secondary relative" :id="service.ref">

    <FadedImg v-if="service.img">
      <img class="object-cover w-full h-[360px] sm:h-[500px] absolute inset-0" :src="service.img">
    </FadedImg>

    <div class="mt-16 mb-12 relative flex items-center gap-3 sm:gap-6">

      <div v-if="!oneMaster"
        class="absolute top-1/2 -translate-y-1/2 left-0 shrink-0 w-20 h-20 sm:w-32 sm:h-32 flex items-center">
        <img class="object-cover w-full h-full p-1 mx-auto rounded-full relative"
          :src="service.masters[secondMasterIndex].img">
        <div class="backdrop-blur-[1px] w-full h-full inset-0 absolute rounded-full"></div>
      </div>
      <div
        :class="['shrink-0 w-24 h-24 sm:w-44 sm:h-44 relative rounded-full bg-dark border-secondary border-2 sm:border-4', !oneMaster && 'ml-8 sm:ml-12']">
        <img class="object-cover p-0.5 sm:p-1 w-full h-full rounded-full relative"
          :src="service.masters[masterIndex].img">
      </div>

      <div class="flex flex-col gap-2 sm:gap-3">
        <div class="flex items-center gap-2 sm:gap-3 justify-between">
          <h1 class="font-m break-words leading-12 text-4xl sm:text-6xl text-secondary relative">
            {{ service.masters[masterIndex].name }}
          </h1>
          <div v-if="!oneMaster" @click="next"
            class="border border-secondary rounded-full w-5 h-5 sm:w-8 sm:h-8 flex items-center justify-center cursor-pointer">
            <Arrow class="h-full py-0.5 sm:p-1" />
          </div>
        </div>
        <h1 class="break-words leading-12 text-xl sm:text-3xl font-bold text-main relative">
          {{ service.specialization }}
        </h1>
      </div>

    </div>
    <!-- <div class="h-[360px] sm:h-[500px] w-full grid grid-cols-12 max-w-7xl px-16">

      <div
        class="flex flex-wrap sm:flex-nowrap items-end justify-center col-start-1 sm:col-start-3 lg:col-start-1 col-span-12 sm:col-span-8 lg:col-span-6 mt-auto mb-12 lg:mb-16">
        <h1 class="font-m break-words leading-12 text-5xl text-secondary relative sm:hidden">{{
          service.masters[masterIndex].name }}</h1>
        <div class="w-full mt-4 text-center sm:text-start">
          <h1
            class="font-m break-words leading-12 text-5xl md:text-6xl lg:text-7xl text-secondary relative hidden sm:block mb-4">
            {{ service.masters[masterIndex].name }}
          </h1>i
          <h1 class="break-words leading-12 text-xl sm:text-2xl font-bold text-main relative">
            {{ service.specialization }}
          </h1>
        </div>
      </div> -->

  </div>


  <!-- <div class="max-w-7xl px-4 lg:px-16 mx-auto grid grid-cols-12 mb-12 md:mb-16 lg:mb-24">

    <div
      :class="['col-span-12 sm:col-span-8 lg:col-span-12 col-start-0 sm:col-start-3 lg:col-start-0 w-full cursor-pointer relative lg:h-full lg:grid lg:grid-cols-12']">

      <div class="col-span-6">
        <div @click="descHidden = true" :class="['h-20 lg:h-full relative overflow-hidden lg:overflow-auto']">
          <div v-if="!descHidden"
            class="w-full absolute bg-gradient-to-t from-black via-transparent via-90% inset-0 lg:hidden" />
          <div class="text-main text-base max-w-prose" v-html="service.masters[masterIndex].description"></div>
        </div>

        <div @click="descHidden = true" v-if="!descHidden"
          class="text-secondary flex justify-start items-center top-16 h-6 col-span-12 lg:hidden">
          <span class="text-sm mr-2">Больше</span>
          <Arrow class="fill-secondary rotate-90 z-10 lg:hidden w-2" />
        </div>
      </div>

      <div class="col-span-5 col-end-13">

        <ul class="w-full max-w-2xl col-span-12 pb-8 pt-8 lg:pt-0">
          <li v-for=" item  in  service.services "
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
              <li v-for=" service  in  item.list "
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

        <Btn class="ml-8 bg-main" href="#contacts" title="Записаться">
        </Btn>

      </div>

    </div>

  </div> -->
</template>

<style lang="postcss" scoped></style>

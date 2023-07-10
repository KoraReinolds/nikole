<script setup>
const props = defineProps({
  service: Object,
})
const descHidden = ref(true)
const masterIndex = ref(0)
const oneMaster = computed(() => props.service.masters.length === 1)
const secondMasterIndex = computed(() => (masterIndex.value + 1) % props.service.masters.length)
const next = () => {
  masterIndex.value = secondMasterIndex.value
}
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-8 mb-12 bg-black text-xl text-secondary relative"
    :id="service.ref">

    <div class="object-cover w-full h-full max-h-[330px] md:max-h-[440px] sm:h-[500px] absolute inset-0">
      <FadedImg v-if="service.img">
        <img class="object-cover w-full h-full absolute inset-0" :src="service.img">
      </FadedImg>
    </div>

    <div
      class="max-w-screen-xl mx-auto w-full flex flex-col mt-16 lg:mt-[168px] lg:mb-24 gap-8 px-10 relative sm:grid sm:grid-cols-12">

      <div
        class="flex items-center gap-3 sm:gap-6 sm:col-span-12 sm:mx-auto md:mx-0 md:col-start-3 lg:col-start-1 lg:col-span-5">
        <div v-if="!oneMaster" class="absolute shrink-0 w-20 h-20 sm:w-32 sm:h-32 flex items-center">
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
          <div class="flex items-end gap-2 sm:gap-3 justify-between">
            <h1 class="font-m break-words leading-12 text-4xl sm:text-6xl text-secondary relative">
              {{ service.masters[masterIndex].name }}
            </h1>
            <div v-if="!oneMaster" @click="next"
              class="mb-1 border md:border-2 border-secondary rounded-full w-5 h-5 sm:w-8 sm:h-8 flex items-center justify-center cursor-pointer">
              <Arrow class="h-full py-0.5 sm:p-1" />
            </div>
          </div>
          <h1 class="break-words leading-12 text-lg sm:text-3xl font-bold text-main relative">
            {{ service.specialization }}
          </h1>
        </div>
      </div>

      <div
        :class="['flex flex-col gap-2 sm:col-span-8 sm:col-start-3 lg:col-start-1 lg:col-span-5', descHidden && 'cursor-pointer']"
        @click="descHidden = false">
        <div
          :class="['lg:h-full relative lg:overflow-auto', descHidden ? 'h-[72px] overflow-hidden text-ellipsis' : 'h-full overflow-auto']">
          <div class="text-main text-sm max-w-prose font-light leading-6"
            v-html="service.masters[masterIndex].description"></div>
        </div>

        <div v-if="descHidden" class="text-secondary flex justify-start items-center top-16 h-6 col-span-12 lg:hidden">
          <span class="text-sm mr-2">Больше</span>
          <Arrow class="fill-secondary rotate-90 z-10 lg:hidden w-2" />
        </div>
      </div>

      <div class="col-span-12 sm:col-span-8 sm:col-start-3 lg:col-span-6 lg:col-end-13">
        <ul class="relative lg:col-span-6 lg:col-start-7 service-list" :style="'idth: calc(100% + 40px)'">
          <li v-for="item in service.services"
            class="cursor-pointer leading-9 col-span-12 sm:col-span-8 flex flex-col justify-between items-center text-main">

            <div class="hover:bg-dark font-bold flex flex-row items-center justify-center gap-2.5 w-full py-3 px-4"
              @click="item.opened = !item.opened">
              <List class="w-4 h-4 fill-secondary" />
              <div class="text-left w-full flex items-center text-xl lg:text-2xl">
                {{ item.name }}
              </div>
              <Arrow
                :class="['fill-secondary h-6 top-16 left-1/2 lg:hidden', item.opened ? '-rotate-90' : 'rotate-90']" />
            </div>

            <ul :class="['w-full px-8 py-4 lg:block', !item.opened && 'hidden']">
              <li v-for="service in item.list"
                class="odd:bg-dark font-medium px-2 py-2 w-full flex justify-between items-center text-sm lg:text-base">
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

        <Btn class="bg-main mt-8 mx-auto text-dark" href="#contacts" title="Записаться">
        </Btn>

      </div>

    </div>

  </div>
</template>

<style lang="postcss" scoped>
.service-list {
  @media (max-width: 640px) {
    width: calc(100% + 80px);
    left: -40px;
  }

  @media (max-width: 1023px) {
    width: calc(100% + 84px);
    left: -42px;
  }
}
</style>

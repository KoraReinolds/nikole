<script setup>
defineEmits(['scroll'])
const isMobile = ref(true)
if (process.client) {
  isMobile.value = useMobile()
}
</script>

<template>
  <div class="h-screen sm:h-[900px] relative flex justify-center">
    <FadedImg>
      <img src="../assets/img/massage_main.png" alt="Массаж в салоне Николе" title="Массаж"
        class="h-full w-full object-cover absolute inset-0">
    </FadedImg>
    <div
      class="relative flex flex-col w-full max-w-screen-xl items-center sm:items-start justify-center sm:justify-start sm:pt-[124px] h-full sm:pl-16">
      <Logo class="fill-secondary pb-12 sm:pb-16 w-[256px] sm:w-[468px]" />
      <div class="flex mb-[10vh] sm:mb-0 flex-col items-center sm:items-start">
        <div class="text-3xl sm:text-5xl font-bold italic sm:text-left text-center text-main">
          Скидка
          <span class="text-secondary"><span class="text-5xl sm:text-7xl">20</span>%</span>
          <br>
          <span class="text-2xl sm:text-3xl">на первое посещение</span>
        </div>
        <Btn class="mt-12 bg-main" :type="!isMobile && 'lg'" @click="$emit('scroll')" title="Получить скидку" />
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>

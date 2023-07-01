<script setup>
</script>

<template>
  <div class="h-screen sm:h-[900px] relative flex justify-center">
    <FadedImg>
      <img src="../assets/img/massage_main.png" alt="Массаж в салоне Николе" title="Массаж"
        class="h-full w-full object-cover absolute inset-0">
    </FadedImg>
    <div
      class="relative flex flex-col w-full max-w-screen-xl items-center sm:items-start justify-center sm:justify-start sm:pt-[124px] h-full sm:pl-16">
      <Logo class="fill-secondary pb-16 w-[328px] sm:w-[468px]" />
      <div class="flex flex-col items-center sm:items-start">
        <div class="text-3xl sm:text-5xl font-bold italic sm:text-left text-center text-main">
          Скидка
          <span class="text-secondary"><span class="text-5xl sm:text-7xl">20</span>%</span>
          <br>
          <span class="text-2xl sm:text-3xl">на первое посещение</span>
        </div>
        <Btn class="mt-12 bg-main" type="lg" link="https://dikidi.ru/ru/profile/profstudiya_nikole_715159/"
          title="Получить скидку" />
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>

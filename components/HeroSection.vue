<script setup>
</script>

<template>
  <div class="h-screen sm:h-[600px] relative flex justify-center">
    <FadedImg>
      <img src="../assets/img/massage_main.png" alt="Массаж в салоне Николе" title="Массаж"
        class="h-full w-full object-cover absolute inset-0">
    </FadedImg>
    <div class="relative px-8 flex flex-col lg:flex-row items-center justify-center h-full">
      <Logo class="fill-secondary pb-12 lg:pb-0 w-96 lg:mr-16" />
      <div class="flex flex-col items-center lg:items-start">
        <div class="text-3xl font-bold italic lg:text-left text-center text-main">
          Скидка <span class="text-5xl text-secondary">20%</span>
          <p>на первое посещение</p>
        </div>
        <Btn class="mt-12 w-64" link="https://dikidi.ru/ru/profile/profstudiya_nikole_715159/" title="Получить скидку" />
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>

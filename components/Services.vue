<script setup>
const props = defineProps({
  master: Object,
})
</script>

<template>
  <div class="flex flex-col items-center bg-black text-xl text-secondary pb-20">
    <div class="h-52 relative w-full flex justify-center">
      <slot name="bg" />
      <div class="flex flex-row items-end justify-center">
        <div class="w-full sm:w-64 flex mb-2 flex-col font-m text-secondary relative text-center">
          <h1 class="break-words leading-12 text-6xl mr-8" v-html="master.name + '<br/>' + master.specialization"></h1>
        </div>
        <div class="hidden sm:block">
          <slot name="master" />
        </div>
      </div>
    </div>
    <div class="bg-secondary h-[1px] w-96 my-6" />
    <div v-if="master.description" class="w-96 text-main text-base" v-html="master.description"></div>
    <ul>
      <li v-for="item in master.list"
        class="even:bg-dark leading-9 flex justify-between items-center w-96 px-4 text-main">
        <List class="w-4 h-4 fill-secondary" />
        <div class="w-48">
          {{ item.name }}
        </div>
        <div class="text-secondary">
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

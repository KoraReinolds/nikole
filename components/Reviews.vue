<script setup>
import { tryOnMounted } from '@vueuse/core';

const reviews = [
  {
    master: "Ольга",
    area: "Депиляция",
    text: "Спасибо за чудесно проведенное время и результат!!!\n Безболезненно, будто на массаж ходила!)))"
  }, {
    master: "Ксения",
    area: "Макияж",
    text: "Моему счастью нет предела! Я наконец то нашла мастера, который из работ не очень толковых мастеров сделала шикарные, а главное естественные брови! Ксюша - большая умничка! Брови - это твое)"
  }, {
    master: "Карина",
    area: "Массаж",
    text: "Добрый день, Карина прекрасный специалист своего дела! Во время сеанса забываешь обо всем и отключаешься от реальности, а сильные, нежные и чувственные руки помогают расслабить все мышцы тела и снять всё напряжение"
  },
]
const reviewIndex = ref(0)
let intervalId
const resetInterval = () => {
  clearInterval(intervalId)
  intervalId = setInterval(increase, 5000)
}
const increase = () => {
  resetInterval()
  reviewIndex.value = (reviewIndex.value + 1) % reviews.length
}
const decrease = () => {
  resetInterval()
  reviewIndex.value = (reviewIndex.value || reviews.length) - 1
}
resetInterval()
const r = computed(() => reviews[reviewIndex.value])
const textRef = ref(null)
const textStyle = computed(() => ({
  right: reviewIndex.value * textRef.value?.offsetWidth + 'px'
}))
tryOnMounted(() => {
  window.addEventListener('resize', () => {
    const val = reviewIndex.value
    reviewIndex.value = -1
    reviewIndex.value = val
  })
})
</script>

<template>
  <div class="bg-main px-8 py-16 text-xl flex flex-col text-dark justify-center items-center">
    <div class="flex items-center">
      <h1 class="font-m text-5xl pr-6">Отзывы</h1>
      <img class="object-cover w-32 h-32 rounded-full" src="@/assets/img/review.png" alt="Ваши отзывы">
    </div>
    <div class="bg-dark h-[1px] w-80 my-6"></div>
    <div class="italic mb-4 text-center">
      <span>Мастер </span>
      <span class="font-bold underline cursor-pointer">{{ r.master }}</span> -
      <span class="font-bold underline cursor-pointer">{{ r.area }}</span>
    </div>
    <div class="relative w-full max-w-2xl">
      <Arrow class="h-full cursor-pointer absolute top-1/2 -translate-y-1/2 -left-4 rotate-180" @click="decrease" />
      <Arrow class="h-full cursor-pointer absolute top-1/2 -translate-y-1/2 -right-4" @click="increase" />
      <div ref="textRef" class="w-full flex items-center overflow-hidden">
        <div :style="textStyle" class="relative px-8 min-w-full text-center text-base italic" v-for="rew in reviews">
          {{ rew.text }}
        </div>
      </div>
    </div>
    <Btn class="mt-8 bg-secondary min-w-[340px]" link="https://vk.com/topic-147662899_49317232"
      title="Показать все отзывы">
      <img class="w-8 h-8 ml-4" src="@/assets/img/vk.png">
    </Btn>
  </div>
</template>

<style lang="postcss" scoped></style>

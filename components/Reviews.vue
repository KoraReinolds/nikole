<script setup>
import { tryOnMounted } from '@vueuse/core';
const socialsImgs = import.meta.globEager('@/assets/img/socials/*.png');
defineEmits(['scroll'])
const reviewImgs = import.meta.globEager('@/assets/img/reviews/*.jpg');

const reviews = [
  {
    ref: "olga",
    // img: reviewImgs['/assets/img/reviews/review-olga.jpg'].default,
    master: "Ольга",
    area: "Депиляция",
    text: "Спасибо за чудесно проведенное время и результат!!!\n Безболезненно, будто на массаж ходила!)))"
  }, {
    ref: "ksenia",
    // img: reviewImgs['/assets/img/reviews/review-ksenia.jpg'].default,
    master: "Ксения",
    area: "Макияж",
    text: "Моему счастью нет предела! Я наконец то нашла мастера, который из работ не очень толковых мастеров сделала шикарные, а главное естественные брови! Ксюша - большая умничка! Брови - это твое)"
  }, {
    ref: "karina",
    // img: reviewImgs['/assets/img/reviews/review-karina.jpg'].default,
    master: "Карина",
    area: "Массаж",
    text: "Добрый день, Карина прекрасный специалист своего дела! Во время сеанса забываешь обо всем и отключаешься от реальности, а сильные, нежные и чувственные руки помогают расслабить все мышцы тела и снять всё напряжение"
  }, {
    ref: "natalia",
    // img: reviewImgs['/assets/img/reviews/review-natalia.jpg'].default,
    master: "Наталия",
    area: "Макияж",
    text: "На работе оценили вашу работу и муж тоже) девчонки мои тоже сказали придут к вам после отпуска"
  },
]
const reviewIndex = ref(0)
let intervalId
const resetInterval = () => {
  clearInterval(intervalId)
  intervalId = setInterval(increase, 8000)
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
  <div class="bg-main px-4 sm:px-12 lg:px-16 py-12 md:py-16 text-base text-dark flex flex-col items-center gap-6">
    <div class="flex justify-center items-center gap-4">
      <h1 class="font-m text-5xl">Отзывы</h1>
      <img class="object-cover w-32 h-32 rounded-full" src="@/assets/img/review.png" alt="Ваши отзывы">
    </div>
    <div class="bg-dark h-[1px] w-48 mx-auto"></div>
    <div class="italic text-center" @click="$emit('scroll', r.ref)">
      Мастер
      <span class="font-bold underline cursor-pointer">{{ r.master }}</span>
      -
      <span class="font-bold underline cursor-pointer">{{ r.area }}</span>
    </div>
    <div class="flex flex-col gap-8 items-center w-full max-w-md">

      <div class="flex flex-row justify-center items-center w-full gap-4">
        <Arrow class="h-full cursor-pointer rotate-180" @click="decrease" />
        <div ref="textRef" class="w-full flex items-center overflow-hidden">
          <div :style="textStyle" class="relative w-full shrink-0 text-center text-base italic" v-for="review in reviews">
            {{ r.text }}
            <!-- <img class="object-contain h-full mx-auto" :src="r.img" alt="Ваши отзывы"> -->
          </div>
        </div>
        <Arrow class="h-full cursor-pointer" @click="increase" />
      </div>

      <Btn class="bg-secondary text-sm grow-0" link="https://vk.com/topic-147662899_49317232" title="Показать все отзывы"
        :icon="socialsImgs['/assets/img/socials/vk.png'].default">
      </Btn>

    </div>
  </div>
</template>

<style lang="postcss" scoped></style>

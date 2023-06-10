<script setup>
</script>

<template>
  <div class="bg-black px-8 py-24 text-xl flex flex-col text-main justify-center">
    <div class="grid grid-cols-2 gap-4">
      <div class="h-48 bg-main">
        <img class="object-cover h-full w-full" src="@/assets/img/reseption.jpg" />
      </div>
      <div class="h-48 bg-main">
        <img class="object-cover h-full w-full" src="@/assets/img/procedure.jpg" />
      </div>
      <div class="h-48 bg-main col-span-2">
        <img class="object-cover h-full w-full" src="@/assets/img/chairs.jpg" />
      </div>
    </div>
    <h1 class="font-z text-6xl text-secondary pt-12">О нас</h1>
    <p class="pt-12">Профстудия «Николе» - верный шаг на пути к гармонии души и тела!</p>
    <div class="bg-secondary h-[1px] w-48 mt-6"></div>
    <p class="pt-6">Уютная атмосфера в центре Мурманска.</p>
    <p class="pt-6">
      <b>Вас ожидают:</b>
    <ul class="list-image-[url(@/assets/svg/list.svg)]">
      <li class="pt-3.5"><b>Депиляция</b> за 15 минут БЕЗ боли от ТОП мастера с практическим опытом более 11 лет</li>
      <li class="pt-3.5"><b>Перманентный макияж</b> всех зон от мастера-тренера с опытом 4000+ процедур</li>
      <li class="pt-3.5"><b>СПА</b> программы, для тех, кто хочет расслабиться и отдохнуть в полной мере с пользой для
        организма</li>
      <li class="pt-3.5"><b>МАССАЖ</b> – направленный на улучшение эстетического вида и функционального состояния кожи
        тела и лица</li>
      <li class="pt-3.5"><b>Косметология</b></li>
    </ul>
    </p>
    <ul class="pt-12">
      <li>
        ✅ <b>ТОЛЬКО</b> высококачественные сертифицированные продукты и инструменты
      </li>
      <li class="pt-3.5">
        ✅ <b>БЕЗОПАСНОСТЬ</b> - одноразовые инструменты, вскрываются и утилизируются при Вас
      </li>
    </ul>
    <p class="pt-12">
      Бесплатный wi-fi
      <br>
      ☕️Вкусный чай/кофе с конфетами
    </p>
    <p class="pt-12">
      Приходите и мы позаботимся о Вашем теле, чтобы Вашей душе было приятно и драйвово в нем жить!
    </p>
    <Btn class="mt-12 w-48" title="Записаться" link="https://dikidi.ru/ru/profile/profstudiya_nikole_715159/" />
  </div>
</template>

<style lang="postcss" scoped></style>

<script setup>
const masters = [
  {
    name: "Ольга",
    specialization: "Депиляция",
    list: [
      { name: 'Голени/бедра', price: 1400 },
      { name: 'Глубокое бикини', price: 1600 },
      { name: 'Подмышки', price: 600 },
      { name: 'Лицо(1 зона)', price: 450 },
      { name: 'Лицо полностью', price: 1000 },
      { name: 'Руки(до локтя)', price: 800 },
      { name: 'Руки полностью', price: 1100 },
      { name: 'Ягодицы', price: 700 },
      { name: 'Живот полностью', price: 500 },
      { name: 'Голени/подмышки/ бикини', price: 2700 },
      { name: 'Ноги/бикини/подмышки', price: 3500 },
      { name: 'Ноги/бикини/подмышки/руки', price: 4300 },
    ]
  },
  {
    name: "Ольга",
    specialization: "Шугаринг (мужской)",
    list: [
      { name: 'Грудь + живот', price: 2000 },
      { name: 'Зона паха', price: 2700 },
      { name: 'Ноги полностью', price: 2800 },
      { name: 'Окантовка шеи', price: 800 },
      { name: 'Плечи', price: 800 },
      { name: 'Подмышки', price: 700 },
      { name: 'Руки полностью', price: 1800 },
      { name: 'Спина вместе с плечами', price: 2000 },
    ]
  },
  {
    name: "Ольга",
    specialization: "Электро\nэпиляция",
    description: `Избавиться от волос навсегда это реально!<br/><br/>

      Что вы получите пройдя курс электроэпиляции?<br/><br/>

      <b>Гигиена:</b><br/>
      при избавлении от волос гигиена значительно упрощается, как подмышечных впадин так и зоны бикини<br/><br/>

      <b>Эстетика:</b><br/>
      гладкая кожа это красиво! Никакой щетины на лице, волосатых ног, торчащих волос из трусов и маек. Бесконечная уверенности в себе и жизнь без комплексов<br/><br/>

      <b>Тактильные ощущения:</b><br/> после полного удаления волос кожа становится гладкой, мягкой и шелковистой. Ее хочется трогать и гладить<br/><br/>

      <b>Экономия времени:</b><br/> удалив волосы вам больше не придётся посещать мастера депиляции, ежедневное бритье. Свободное время можно потратить на более полезные занятия<br/><br/>

      <b>Финансовая выгода:</b><br/> по итогу ээ считается самым выгодным вложением, так как пройдя курс больше не придётся тратить деньги на депиляцию, бритье и т. п.<br/><br/>`,
    list: [
      { name: 'Подмышки, руки, ноги', price: 38, post: 'р/мин' },
      { name: 'Лицо, бикини', price: 45, post: 'р/мин' },
    ]
  },
  {
    name: "Ксения",
    specialization: "Перманентный макияж",
    list: [
      { name: 'ПМ бровей - Волосковая техника', price: 9000 },
      { name: 'ПМ бровей - Теневая техника', price: 9000 },
      { name: 'ПМ бровей - Коррекция', price: 5500 },
      { name: 'ПМ губ - Акварельный прокрас', price: 9000 },
      { name: 'ПМ губ - Помадный прокрас', price: 9000 },
      { name: 'ПМ губ - Коррекция', price: 5500 },
      { name: 'ПМ век - Межресничная стрелка', price: 7000 },
      { name: 'ПМ век - Классическая стрелка', price: 9000 },
      { name: 'ПМ век - Стрелка с растушевкой (теневая)', price: 9000 },
      { name: 'ПМ век - Коррекция', price: 5500 },
    ]
  },
  {
    name: "Ксения",
    specialization: "Перманентный макияж",
    list: [
      { name: 'ПМ бровей - Волосковая техника', price: 9000 },
      { name: 'ПМ бровей - Теневая техника', price: 9000 },
      { name: 'ПМ бровей - Коррекция', price: 5500 },
      { name: 'ПМ губ - Акварельный прокрас', price: 9000 },
      { name: 'ПМ губ - Помадный прокрас', price: 9000 },
      { name: 'ПМ губ - Коррекция', price: 5500 },
      { name: 'ПМ век - Межресничная стрелка', price: 7000 },
      { name: 'ПМ век - Классическая стрелка', price: 9000 },
      { name: 'ПМ век - Стрелка с растушевкой (теневая)', price: 9000 },
      { name: 'ПМ век - Коррекция', price: 5500 },
    ]
  },
  {
    name: "Карина",
    specialization: "Хиропластический массаж",
    description: `Имеет ярко выраженное подтягивающее воздействие на кожу лица. Проминаем мышцы и не даём им скукожиться в морщинки.Данный вид массажа делается только по тальку,для более глубокой проработки мышц.<br><br>

      Для стойкого эффекта рекомендуется проходить курс из 5-10 сеансов.<br><br>

      В стоимость все включено(вам не нужно дополнительно оплачивать масло или тальк)<br><br>

      Вы оплачиваете длительность сеанса, а технику и зоны выбираете исходя из своих пожеланий или по рекомендации специалиста.<br><br>`,
    list: [
      { name: '30 минут', price: 1600 },
      { name: '60 минут', price: 2400 },
    ]
  },
  {
    name: "Карина",
    specialization: "Антицелюлитный массаж",
    description: `
      Антицеллюлитный массаж глубоко прорабатывает прорабатывает подкожно-жировую клетчатку,разбивая ее, тем самым увеличивая приток и отток лимфы к межклеточной жидкости, и выводя из клеток токсины и шлаки<br><br>

      Антицеллюлитный массаж рекомендуется проходить курсом , вместе с лимфодренажным массажем, чтобы убрать отеки и улучшить приток и отток лимфы.<br><br>
      При прохождении курса,также рекомендуется:<br><br>
      <b>- пить больше воды<br></b>
      <b>- регулярные тренировки<br></b>
      <b>- правильное питание<br><br></b>

      В стоимость все включено(вам не нужно ничего дополнительно оплачивать)<br><br>

      Вы оплачиваете длительность сеанса, а технику и зоны выбираете исходя из своих пожеланий или по рекомендации специалиста.<br><br>
    `,
    list: [
      { name: '30 минут', price: 1600 },
      { name: '60 минут', price: 2400 },
      { name: '90 минут', price: 3200 },
      { name: '120 минут', price: 4200 },
    ]
  },
  {
    name: "Карина",
    specialization: "Силовой релакс",
    description: `
      Особенности силового релакс-массажа<br><br>

      Силовой расслабляющий массаж предплечьями даёт уставшей мышечной системе и отдохнуть, и набраться сил. Сочетание мягких и активизирующих движений в итоге даёт ощущение «выросших крыльев».
      Силовой массаж ускоряет и активизирует три важнейших компонента для осуществления работы организма человека: кровь, кислород и лимфу.<br><br>
      Релаксирующий массаж:<br>
      •снимает напряжение и зажимы, •восстанавливает кровоток,<br>
      •активирует обменные процессы.<br><br>
    `,
    list: [
      { name: '30 минут', price: 1600 },
      { name: '60 минут', price: 2400 },
      { name: '90 минут', price: 3200 },
      { name: '120 минут', price: 4200 },
    ]
  },
  {
    name: "Карина",
    specialization: "Лимфодренажный массаж",
    description: `
      Какой эффект дает данный вид массажа?<br><br>
      - снижает отёчность<br>
      - нормализуется отток лимфы<br>
      - ускоряется обмен веществ<br>
      - выводит токсины<br>
      - улучшает метаболизм<br>
      - усиливает иммунитет<br><br>
      Лимфодренажный массаж рекомендовано проходить курсом от 3 до 5 сеансов.<br>
      Во время массажа важно проработать все тело, поэтому время сеанса предпочтительно выбирать от 60 до 90 минут<br><br>

      В стоимость все включено(вам не нужно ничего дополнительно оплачивать)<br><br>

      Вы оплачиваете длительность сеанса, а технику и зоны выбираете исходя из своих пожеланий или по рекомендации специалиста.<br><br>
    `,
    list: [
      { name: '30 минут', price: 1600 },
      { name: '60 минут', price: 2400 },
      { name: '90 минут', price: 3200 },
      { name: '120 минут', price: 4200 },
    ]
  },
  {
    name: "Карина",
    specialization: "Японский массаж (кобидо)",
    description: `
      Лёгкие поглаживания чередуются с быстрыми постукиваниями.<br>
      Прорабатывается: лицо, шея и зона декольте.<br><br>

      В стоимость все включено(вам не нужно дополнительно оплачивать масло или тальк)<br><br>

      Вы оплачиваете длительность сеанса, а технику и зоны выбираете исходя из своих пожеланий или по рекомендации специалиста.<br><br>
    `,
    list: [
      { name: '30 минут', price: 1600 },
      { name: '60 минут', price: 2400 },
    ]
  },
]
</script>

<template>
  <!-- <HeroSection /> -->
  <!-- <AboutUs /> -->
  <!-- <Reviews /> -->
  <!-- <Services class="relative" :master="masters[0]">
    <template #bg>
      <FadedImg>
        <img class="object-cover w-full h-full absolute inset-0" src="@/assets/img/services/депиляция.png">
      </FadedImg>
    </template>
    <template #master>
      <img class="object-cover w-32 h-32 rounded-full relative" src="@/assets/img/masters/Olga.jpg">
    </template>
  </Services>

  <Services class="relative" :master="masters[1]">
    <template #bg>
      <FadedImg>
        <img class="object-cover w-full h-full absolute inset-0" name="master" src="@/assets/img/services/шугаринг.png">
      </FadedImg>
    </template>
    <template #master>
      <img class="object-cover w-32 h-32 rounded-full relative" name="bg" src="@/assets/img/masters/Olga.jpg">
    </template>
  </Services>

  <Services class="relative" :master="masters[2]">
    <template #bg>
      <FadedImg>
        <img class="object-cover w-full h-full absolute inset-0" name="master"
          src="@/assets/img/services/электроэпиляция.png">
      </FadedImg>
    </template>
    <template #master>
      <img class="object-cover w-32 h-32 rounded-full relative" name="bg" src="@/assets/img/masters/Olga.jpg">
    </template>
  </Services>

  <Services class="relative" :master="masters[3]">
    <template #bg>
      <FadedImg>
        <img class="object-cover w-full h-full absolute inset-0" name="master" src="@/assets/img/services/пм.png">
      </FadedImg>
    </template>
    <template #master>
      <img class="object-cover w-32 h-32 rounded-full relative" name="bg" src="@/assets/img/masters/Ksenia.jpg">
    </template>
  </Services>

  <Services class="relative" :master="masters[5]">
    <template #bg>
      <FadedImg>
        <img class="object-cover w-full h-full absolute inset-0" name="master"
          src="@/assets/img/services/хиропластика.png">
      </FadedImg>
    </template>
    <template #master>
      <img class="object-cover w-32 h-32 rounded-full relative" name="bg" src="@/assets/img/masters/Karina.jpg">
    </template>
  </Services>

  <Services class="relative" :master="masters[6]">
    <template #bg>
      <FadedImg>
        <img class="object-cover w-full h-full absolute inset-0" name="master" src="@/assets/img/services/целюлит.png">
      </FadedImg>
    </template>
    <template #master>
      <img class="object-cover w-32 h-32 rounded-full relative" name="bg" src="@/assets/img/masters/Karina.jpg">
    </template>
  </Services>

  <Services class="relative" :master="masters[7]">
    <template #bg>
      <FadedImg>
        <img class="object-cover w-full h-full absolute inset-0" name="master" src="@/assets/img/services/сила.png">
      </FadedImg>
    </template>
    <template #master>
      <img class="object-cover w-32 h-32 rounded-full relative" name="bg" src="@/assets/img/masters/Karina.jpg">
    </template>
  </Services>

  <Services class="relative" :master="masters[8]">
    <template #bg>
      <FadedImg>
        <img class="object-cover w-full h-full absolute inset-0" name="master" src="@/assets/img/services/лимфа.png">
      </FadedImg>
    </template>
    <template #master>
      <img class="object-cover w-32 h-32 rounded-full relative" name="bg" src="@/assets/img/masters/Karina.jpg">
    </template>
  </Services>

  <Services class="relative" :master="masters[9]">
    <template #bg>
      <FadedImg>
        <img class="object-cover w-full h-full absolute inset-0" name="master" src="@/assets/img/services/кобидо.png">
      </FadedImg>
    </template>
    <template #master>
      <img class="object-cover w-32 h-32 rounded-full relative" name="bg" src="@/assets/img/masters/Karina.jpg">
    </template>
  </Services> -->

  <!-- <School /> -->
  <Contacts />
</template>

<style lang="postcss" scoped></style>

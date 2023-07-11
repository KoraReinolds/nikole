<script setup>
import olga from '@/components/Olga.vue'
import ksenia from '@/components/Ksenia.vue'
import natalia from '@/components/Natalia.vue'
import karina from '@/components/Karina.vue'
const servicesImgs = import.meta.globEager('@/assets/img/services/*.png');
const mastersImgs = import.meta.globEager('@/assets/img/masters/*.jpg');
const masters = [
  {
    name: "Ольга",
    img: mastersImgs['/assets/img/masters/Olga.jpg'].default,
    description: olga,
  },
  {
    name: "Ксения",
    img: mastersImgs['/assets/img/masters/Ksenia.jpg'].default,
    description: ksenia,
  },
  {
    name: "Карина",
    img: mastersImgs['/assets/img/masters/Karina.jpg'].default,
    description: karina,
  },
  {
    name: "Наталия",
    img: mastersImgs['/assets/img/masters/Natalia.jpg'].default,
    description: natalia,
  }
]
const specializations = {
  1: [
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
  ],
  2: [
    { name: 'Грудь + живот', price: 2000 },
    { name: 'Зона паха', price: 2700 },
    { name: 'Ноги полностью', price: 2800 },
    { name: 'Окантовка шеи', price: 800 },
    { name: 'Плечи', price: 800 },
    { name: 'Подмышки', price: 700 },
    { name: 'Руки полностью', price: 1800 },
    { name: 'Спина вместе с плечами', price: 2000 },
  ],
  3: [
    { name: 'Подмышки, руки, ноги', price: 38, post: 'р/мин' },
    { name: 'Лицо, бикини', price: 45, post: 'р/мин' },
  ],
  9: [
    { name: 'Волосковая техника', price: 9000 },
    { name: 'Теневая техника', price: 9000 },
    { name: 'Коррекция', price: 5500 },

  ],
  10: [
    { name: 'Межресничная стрелка', price: 7000 },
    { name: 'Классическая стрелка', price: 9000 },
    { name: 'Стрелка с растушевкой (теневая)', price: 9000 },
    { name: 'Коррекция', price: 5500 },
  ],
  11: [
    { name: 'Акварельный прокрас', price: 9000 },
    { name: 'Помадный прокрас', price: 9000 },
    { name: 'Коррекция', price: 5500 },
  ],
  4: [
    { name: '30 минут', price: 1600 },
    { name: '60 минут', price: 2400 },
  ],
  5: [
    { name: '30 минут', price: 1600 },
    { name: '60 минут', price: 2400 },
    { name: '90 минут', price: 3200 },
    { name: '120 минут', price: 4200 },
  ],
  6: [
    { name: '30 минут', price: 1600 },
    { name: '60 минут', price: 2400 },
    { name: '90 минут', price: 3200 },
    { name: '120 минут', price: 4200 },
  ],
  7: [
    { name: '30 минут', price: 1600 },
    { name: '60 минут', price: 2400 },
    { name: '90 минут', price: 3200 },
    { name: '120 минут', price: 4200 },
  ],
  8: [
    { name: '30 минут', price: 1600 },
    { name: '60 минут', price: 2400 },
  ]
}
const services = ref([
  {
    ref: 'olga',
    specialization: 'Депиляция',
    img: servicesImgs['/assets/img/services/депиляция.png'].default,
    masters: [masters[0]],
    services: [
      {
        name: "Депиляция",
        list: specializations['1'],
        opened: false,
      },
      {
        name: "Шугаринг (мужской)",
        list: specializations['2'],
        opened: false,
      },
      {
        name: "Электроэпиляция",
        list: specializations['3'],
        opened: false,
      },
    ],
  }, {
    ref: 'ksenia',
    specialization: 'Перманентный макияж',
    img: servicesImgs['/assets/img/services/пм.png'].default,
    masters: [masters[1], masters[3]],
    services: [
      {
        name: "Перманентный макияж бровей",
        list: specializations['9'],
        opened: false,
      },
      {
        name: "Перманентный макияж век",
        list: specializations['10'],
        opened: false,
      },
      {
        name: "Перманентный макияж губ",
        list: specializations['11'],
        opened: false,
      },
    ],
  }, {
    ref: 'karina',
    specialization: 'Массаж',
    img: servicesImgs['/assets/img/services/сила.png'].default,
    masters: [masters[2]],
    services: [
      {
        name: "Хиропластический массаж",
        list: specializations['4'],
        opened: false,
      },
      {
        name: "Антицеллюлитный массаж",
        list: specializations['5'],
        opened: false,
      },
      {
        name: "Силовой релакс",
        list: specializations['6'],
        opened: false,
      },
      {
        name: "Лимфодренажный массаж",
        list: specializations['7'],
        opened: false,
      },
      {
        name: "Японский массаж (кобидо)",
        list: specializations['8'],
        opened: false,
      },
    ],
  }
]
)
const scrollToRef = (html) => {
  html.scrollIntoView({ behavior: 'smooth' });
}
</script>

<template>
  <HeroSection />
  <AboutUs />
  <Reviews />
  <Services v-for="service in services" :service="service" />
  <Contacts />
  <ClientOnly>
    <Map></Map>
  </ClientOnly>
</template>

<style lang="postcss" scoped></style>

<script setup>
const list = [
  'статус тренера по ПМ с сертификатом соответствия',
  'преподавательский опыт в области перманента и оформлению бровей более 2 лет',
  'автор собственных обучающих программ и методик по перманентному макияжу',
]
</script>

<template>
  <div class="text-sm flex flex-col gap-5">
    <p><b class="font-bold">Сертифицированный</b> ТОП мастер по перманентному макияжу профстудии НИКОЛЕ - <b
        class="font-bold">Ксения</b>.</p>

    <p>Имеет огромный опыт, более <b class="font-bold">5000</b> процедур, поэтому Вы можете ей доверять на все 100</p>

    <p>Техники работы:</p>

    <p><b class="font-bold">Брови:</b> пудровое напыление, плотный прокрас, градиент.</p>

    <p>Также владеет волосковой техникой <b class="font-bold">"Гиперреализм"</b>. Работает с алопецией (полное отсутствие
      бровей) женской,
      мужской и детской.</p>

    <p><b class="font-bold">Веки:</b> межресничное пространство, элегантная стрелочка с растушевкой или без.</p>
    <p><b class="font-bold">Губы:</b> акварельное напыление, помадный прокрас.</p>

    <p>При необходимости осветление и очищение нежелательного перманента при помощи ремувера, без рубцов и других
      неприятностей.</p>

    <p>Кроме волшебных рук и профессионализма имеется ряд заслуг:</p>

    <ul>
      <li v-for="item in list" class="font-medium mb-2">
        <List class="w-3 h-3 mb-1 fill-secondary inline-block mr-1" />
        {{ item }}
      </li>
    </ul>

    <p>Активно принимает <b class="font-bold">участие в
        международных</b> конференциях, конгрессах и мастер-классах по ПМ. Коллекционирует сертификаты о повышении
      квалификации,
      их уже больше <b class="font-bold">50</b>.</p>

    <p>А ещё Ксения официальный представитель бренда <b class="font-bold">"SL COLOR"</b> г. СПБ пигменты и продукция для
      ПМ.</p>

    <p>У Ксении нет шаблонных работ, но есть индивидуальный подход к каждому клиенту.</p>
  </div>
</template>

<script setup>
const name = ref('')
const phone = ref('')
const formSended = ref(false)
const formValid = computed(() => name.value && phone.value)

const sendMsg = async () => {
  await useFetch(`/api/sendMsg?name=${name.value}&phone=${phone.value}`);
  name.value = ""
  phone.value = ""
  formSended.value = true
}
</script>

<template>
  <div class="bg-main px-8 py-16 text-xl flex flex-col gap-6 text-dark justify-center items-center">
    <h1 class="font-m text-5xl">Как записаться?</h1>

    <div class="bg-dark h-[1px] w-48"></div>

    <div class="flex flex-col gap-3 w-full">

      <div class="flex flex-col justify-center items-center gap-4 sm:flex-row sm:w-full">
        <p class="sm:w-1/2 sm:text-right">Звоните нам по телефону</p>
        <p class="sm:w-1/2 sm:text-left font-bold">+7 (909) 561-70-07</p>
      </div>

      <div class="flex flex-col justify-center items-center gap-4 sm:flex-row sm:w-full">
        <p class="sm:w-1/2 sm:text-right">Пишите в мессенджеры</p>
        <div class="sm:w-1/2 sm:text-left flex">
          <a class="pr-4" href="https://vk.com/im?media=&sel=-147662899">
            <Vk class="w-10 h-10" />
          </a>
          <a href="https://wa.me/79095617007">
            <WhatsApp class="w-10 h-10" />
          </a>
        </div>
      </div>

      <div class="flex flex-col justify-center items-center sm:items-start gap-4 sm:flex-row sm:w-full">
        <template v-if="!formSended">

          <p class="sm:w-1/2 sm:text-right text-center">Или оставьте контакты<br>Мы Вам перезвоним</p>

          <div class="sm:w-1/2 sm:text-left flex flex-col items-center sm:items-start gap-2">
            <div class="w-full px-6 placeholder:text-dark rounded-lg bg-white sm:max-w-xs">
              <input class="py-3" type="text" v-model="name" placeholder="Имя">
            </div>
            <div class="w-full px-6 placeholder:text-dark rounded-lg bg-white flex items-center sm:max-w-xs">
              <span class="mr-2">+7</span>
              <input class="py-3 w-full" type="number" v-model="phone" placeholder="Телефон">
            </div>
            <Btn :class="['bg-dark text-main mt-2 disabled:bg-gray-400', !formValid && 'disabled']" :disabled="!formValid"
              @click="sendMsg" title="Записаться">
            </Btn>
          </div>

        </template>
        <p v-else class="text-center">
          Ваши данные успешно отправленны.<br>Мы Вам перезвоним!
        </p>
      </div>

    </div>

  </div>
</template>

<style lang="postcss" scoped></style>

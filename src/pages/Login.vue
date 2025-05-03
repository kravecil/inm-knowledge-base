<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter()

const onSubmit = () => router.push("/dashboard")
const defaultRule = [(val) => !!val || "Обязательное поле"]

const username = ref("")
const password = ref("")
</script>

<template>
  <q-page class="flex flex-center bg-blue-1">
    <q-card class="form">
      <q-form :submit="onSubmit">
        <q-card-section class="bg-blue-2">
          <div class="text-h5">Идель Нефтемаш</div>
          <div>База знаний</div>
        </q-card-section>
        <q-card-section>
          <q-input v-model="username" label="Имя пользователя" :rules="defaultRule"/>
          <q-input v-model="password" label="Пароль" :rules="defaultRule" />
        </q-card-section>
        <q-card-actions align="center">
          <q-btn label="Вход" type="submit" />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-page>
</template>

<style scoped>
.form {
  max-width: 300px;
  width: 100%;
}
</style>
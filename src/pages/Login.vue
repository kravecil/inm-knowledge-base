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
  <q-page class="page flex flex-center">
    <q-card class="form q-pa-md">
      <q-form :submit="onSubmit">
        <q-card-section class="text-center">
          <!-- <div class="text-h5 text-weight-bold">Идель Нефтемаш</div> -->
          <img src="/inm_title.png" width="200" />
          <div class="text-h6 text-primary text-weight-bold">База знаний</div>
        </q-card-section>
        <q-card-section>
          <q-input v-model="username" label="Имя пользователя" :rules="defaultRule" />
          <q-input v-model="password" label="Пароль" :rules="defaultRule" />
        </q-card-section>
        <q-card-actions align="center">
          <q-btn label="Вход" type="submit" class="full-width" color="primary" />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-page>
</template>

<style scoped>
.form {
  max-width: 300px;
  width: 100%;
  border-radius: 15px;
  background-color: #fff7;
  backdrop-filter: blur(5px);
  border: 1px solid #ccc;
}

.page {
  background-image: url('/bg_login.jpg');
}
</style>
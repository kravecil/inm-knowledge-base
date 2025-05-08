<script setup>
import data from '@/assets/data_asup.json'
import CardInfo from '@/components/CardInfo.vue'
</script>

<template>
  <q-list>
    <template v-for="(item, idx) in data" :key="idx">
      <q-expansion-item :label="item.post" :caption="item.title" header-class="bg-grey-2 q-my-sm rounded-borders">
        <q-card class="bg-grey-2 q-ma-md" bordered style="border-radius: 15px;">
          <q-card-section class="bg-blue-grey-3">
            <q-item>
              <q-item-section avatar>
                <q-avatar size="xl">
                  <img src="/avatar.jpg" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-h6 text-blue-grey-9">{{ item.title }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-card-section>

          <q-item-section>
            <div class="info">
              <CardInfo title="Зарплата" :caption="`${item.salary} ₽`" />
              <CardInfo title="Дата рождения" :caption="item.birthdate" />
              <CardInfo title="Возраст" :caption="`${item.age} лет`" />
              <CardInfo title="Обязанности" :caption="item.description" />
            </div>
          </q-item-section>

          <q-separator />

          <q-card-section>
            <div class="rounded-borders bg-black text-grey-4 q-pa-sm">Прикреплённые файлы:</div>

            <q-list dense class="q-py-md">

              <q-item>
                <q-item-section avatar><q-icon name="description" /></q-item-section>
                <q-item-section><a href="/sample.doc" download>Должностная инструкция</a></q-item-section>
              </q-item>
              <!--  -->
              <q-item>
                <q-item-section avatar><q-icon name="description" /></q-item-section>
                <q-item-section><a href="/sample.doc" download>Регламент ИБ</a></q-item-section>
              </q-item>
              <!--  -->
              <q-item>
                <q-item-section avatar><q-icon name="description" /></q-item-section>
                <q-item-section><a href="/sample.doc" download>Справочник станков</a></q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </template>
  </q-list>
</template>

<style scoped>
.info {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  padding: 20px 10px;
}
</style>
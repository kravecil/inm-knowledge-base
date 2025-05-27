<script setup>
const list = [
  {
    title: "Сотрудников всего",
    caption: "Общее количество числящихся сотрудников согласно штатного расписания",
    value: 8,
  },
  {
    title: "Показатель 1",
    caption: "Описание показателя 1",
    value: 7,
  },
  {
    title: "Показатель показатель 2",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    value: 8,
  },
]
</script>

<template>
  <q-list>
    <template v-for="(item, idx) in list" :key="idx">
      <q-item class="bg-grey-2 rounded-borders q-my-sm">
        <q-item-section>
          <q-item-label>{{ item.title }}</q-item-label>
          <q-item-label caption>{{ item.caption }}</q-item-label>
        </q-item-section>
        <q-item-section side> {{ item.value }}</q-item-section>
      </q-item>
    </template>
  </q-list>
</template>
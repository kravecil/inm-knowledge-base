<script setup>
import data from '@/assets/data_asup.json'
</script>

<template>
  <q-list>
    <template v-for="(item, idx) in data" :key="idx">
      <q-expansion-item :label="item.title" :caption="item.post" header-class="bg-grey-2 q-my-sm rounded-borders">
        <q-card class="bg-grey-2 q-pa-md q-ma-md" bordered style="border-radius: 15px;">
          <q-card-section>
            <q-item>
              <q-item-section class="text-weight-bold">Запрлата</q-item-section>
              <q-item-section side>{{ item.salary }} ₽</q-item-section>
            </q-item>
          </q-card-section>
          <q-separator />
          <q-card-section class="text-caption text-justify">
            {{ item.description }}
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </template>
  </q-list>
</template>
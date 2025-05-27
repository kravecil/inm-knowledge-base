<script setup>
import OrgChart from '@/components/OrgChart.vue';
import { useCoreStore } from '@/stores/core';
import { onMounted, ref } from 'vue';

const core = useCoreStore()

const search = ref('')
const showing = ref(false)

const data = ref()

onMounted(async () => {
  showing.value = true
  try {
    data.value = await core.fetchOrganizationStructure()
  } catch (error) {
    console.error('Не удалось загрузить структуру организации', error)
  } finally {
    showing.value = false
  }

})
</script>

<template>
  <q-page padding>
    <OrgChart v-if="data != undefined" :search="search" :data="data" />
    <q-page-sticky position="top" expand>
      <q-toolbar class="bg-white q-pa-sm">
        <q-input v-model="search" label="быстрый поиск" outlined dense />
      </q-toolbar>
    </q-page-sticky>

    <q-inner-loading :showing="showing" label="Загружаем структуру организации..." />
  </q-page>
</template>
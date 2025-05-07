<script setup>
import OrgChart from '@/components/OrgChart.vue'
import { ref } from 'vue';

const search = ref('')
</script>

<template>
  <q-page padding>
    <OrgChart :search="search" />
    <q-page-sticky position="top" expand>
      <q-toolbar class="bg-white q-pa-sm">
        <q-input v-model="search" label="быстрый поиск" outlined dense />
      </q-toolbar>
    </q-page-sticky>
  </q-page>
</template>
<script setup>
import OrgChart from '@/components/OrgChart.vue'
import { ref, onMounted } from 'vue';
import { useCoreStore } from '@/stores/core'

const core = useCoreStore()

const search = ref('')


onMounted(async () => {
  const orgStructure = await core.fetchOrganizationStructure()
})
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
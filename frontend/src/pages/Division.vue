<script setup>
import { onMounted, ref } from 'vue';

import PersonnelPanel from '@/components/PersonnelPanel.vue';
import SummaryPanel from '@/components/SummaryPanel.vue';
import { useRoute } from 'vue-router';

import { useCoreStore } from '@/stores/core';

const core = useCoreStore()

const route = useRoute()
const divisionUUID = route.params.UUID

const tab = ref("summary");

const division = ref()
const persons = ref([])

const loading = ref(false)

const getDivisionById = (id, divisions) => {
  return divisions.find(d => d.id == id)
}

onMounted(async () => {
  loading.value = true
  try {

    const results = await Promise.all([
      core.fetchOrganizationStructure(),
      core.fetchPersonsByDivision(divisionUUID),
    ])

    const [_divisions, _persons] = results

    division.value = getDivisionById(divisionUUID, _divisions)
    persons.value = _persons

  } catch (error) {
    console.log('Не удалось получить сведения об подразделении!', error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <q-page padding>
    <q-toolbar>
      <q-btn dense color="primary" flat rounded icon="arrow_back" to="/structure" />
      <q-toolbar-title class="text-body1">{{ division?.name }}</q-toolbar-title>
    </q-toolbar>

    <q-separator class="q-mb-md" />

    <q-list>
      <template v-for="person in persons" :key="person.GUID">
        <q-item :to="`/divisions/${divisionUUID}/employees/${person.GUID}`" class="rounded-borders bg-grey-4 q-my-sm">
          <q-item-section>
            <q-item-label>{{ person.name }}</q-item-label>
            <q-item-label caption>{{ person.post }}</q-item-label>
          </q-item-section>
        </q-item>
      </template>
    </q-list>

    <q-inner-loading :showing="loading" label="Загружаем сведения об подразделении..." />
  </q-page>
</template>
<script setup>
import { useCoreStore } from '@/stores/core';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';

const core = useCoreStore()

const route = useRoute()
const divisionUUID = route.params.divisionUUID
const employeeUUID = route.params.employeeUUID

const loading = ref(false)

const employee = ref()

const getEmployeeById = (id, employees) => {
  return employees.find(e => e.GUID == id)
}

onMounted(async () => {
  loading.value = true
  try {
    const persons = await core.fetchPersonsByDivision(divisionUUID)
    employee.value = getEmployeeById(employeeUUID, persons)
  } catch (error) {
    console.log('Не удалось получить сведения о сотруднике!', error)
  } finally {
    loading.value = false
  }

})
</script>

<template>
  <q-page padding>
    <q-toolbar>
      <q-btn dense color="primary" flat rounded icon="arrow_back" :to="`/divisions/${divisionUUID}`" />
    </q-toolbar>

    <q-separator class="q-mb-md" />

    <q-card v-if="employee">
      <q-card-section horizontal>
        <q-card-section>
          <q-avatar size="200px">
            <img src="/avatar.jpeg" />
          </q-avatar>
        </q-card-section>
        <q-card-section class="q-pa-xl">
          <div class="text-h4 text-primary text-bold">{{ employee?.name }}</div>
          <div class="text-h5">{{ employee?.post }}</div>
          <q-space class="q-py-md"/>
          <div class="text-h6 text-grey-6">табельный номер {{ employee?.tabnum }}</div>
        </q-card-section>
      </q-card-section>
    </q-card>

    <q-inner-loading :showing="loading" label="Загружаем сведения о сотруднике..." />
  </q-page>
</template>
<script setup>
import { ref } from 'vue';

import SummaryPanel from '@/components/SummaryPanel.vue'
import PersonnelPanel from '@/components/PersonnelPanel.vue'

const tab = ref("summary");
</script>

<template>
  <q-page padding>
    <q-toolbar>
      <q-btn dense color="primary" rounded icon="arrow_back" to="/structure" />
      <q-toolbar-title class="text-body1">Отдел автоматизированных систем управления производством</q-toolbar-title>
    </q-toolbar>

    <q-separator  class="q-mb-md" />

    <q-card class="">
      <q-card-section>
        <q-tabs v-model="tab" class="text-primary" inline-label align="left">
          <q-tab name="summary" label="Сводка" icon="summarize" />
          <q-tab name="personnel" label="Персонал" icon="groups" />
        </q-tabs>
        <q-separator />
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="summary">
            <SummaryPanel />
          </q-tab-panel>
          <q-tab-panel name="personnel">
            <PersonnelPanel />
          </q-tab-panel>
        </q-tab-panels>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script setup>
import { useCoreStore } from '@/stores/core';

const core = useCoreStore()
</script>

<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn flat @click="core.drawer = !core.drawer" round dense icon="menu" />
      <q-toolbar-title>ИНМ: База знаний</q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>
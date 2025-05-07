<script setup>
import Header from './components/Header.vue'
import Drawer from '@/components/Drawer.vue'

import { useRoute } from 'vue-router';

const route = useRoute()
</script>

<template>
  <q-layout view="hHh Lpr lFf">
    <Header v-if="route.path !== '/' && route.path !== '/login'" />
    <Drawer v-if="route.path !== '/' && route.path !== '/login'" />
    <q-page-container class="bg-blue-grey-1">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

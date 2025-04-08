<script setup>
import Header from './components/Header.vue'
import Drawer from '@/components/Drawer.vue'
</script>

<template>
  <q-layout view="hHh lpr lFf">
    <Header />
    <Drawer />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

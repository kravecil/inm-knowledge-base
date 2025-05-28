<script setup>
import { useCoreStore } from '@/stores/core';

const core = useCoreStore()
const menu = [
  {
    label: "Организационная структура",
    path: "/structure",
    icon: "inbox",
  },
  { label: 'Lorem ipsum', path: '/page-menu-2', icon: 'dataset' },
  { label: 'Dolor sit amet', path: '/page-menu-3', icon: 'summarize' },
  { label: 'Consectetur adipiscing elit', path: '/page-menu-4', icon: 'padding' },
  { label: 'Sed do eiusmod', path: '/page-menu-5', icon: 'subscriptions' },
  { label: 'Tempor incididunt', path: '/page-menu-6', icon: 'av_timer' },
  { label: 'Ut labore et', path: '/page-menu-7', icon: 'paid' },
  { label: 'Dolore magna aliqua', path: '/page-menu-8', icon: 'stacked_line_chart' },
]
</script>

<template>
  <q-drawer v-model="core.drawer" show-if-above :width="300" :breakpoint="500" bordered class="bg-blue-grey-2">
    <q-scroll-area class="fit">
      <q-list padding class="menu-list">
        <q-item clickable v-ripple to="/dashboard">
          <q-item-section avatar>
            <q-icon name="dataset" />
          </q-item-section>
          <q-item-section>Dashboard</q-item-section>
        </q-item>
        <q-separator />
        <template v-for="(item, idx) in menu" :key="idx">
          <q-item clickable v-ripple :to="item.path">
            <q-item-section avatar>
              <q-icon :name="item.icon" />
            </q-item-section>
            <q-item-section>
              {{ item.label }}
            </q-item-section>
          </q-item>
        </template>
        <q-separator />
        <q-item clickable v-ripple to="/login">
          <q-item-section avatar>
            <q-icon name="logout" />
          </q-item-section>
          <q-item-section>Выход</q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>
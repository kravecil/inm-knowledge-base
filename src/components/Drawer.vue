<script setup>
import { useCoreStore } from '@/stores/core';

const core = useCoreStore()
const menu = [
  {
    label: "Организационная структура",
    path: "/structure",
    icon: "inbox",
  },
  {label: 'Меню 2', path: '/under-construction', icon: 'dataset'}
]
</script>

<template>
  <q-drawer v-model="core.drawer" show-if-above :width="300" :breakpoint="500" bordered class="bg-grey-3">
    <q-scroll-area class="fit">
      <q-list padding class="menu-list">
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
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>
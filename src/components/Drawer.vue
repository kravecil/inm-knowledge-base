<script setup>
import { useCoreStore } from '@/stores/core';

const core = useCoreStore()
</script>

<template>
  <q-drawer
    v-model="core.drawer"
    show-if-above
    :width="300"
    :breakpoint="500"
    bordered
    class="bg-grey-3"
  >
    <q-scroll-area class="fit">
      <q-list padding class="menu-list">
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="inbox" />
          </q-item-section>

          <q-item-section>
            Организационная структура
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>
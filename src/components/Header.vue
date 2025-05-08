<script setup>
import { useCoreStore } from '@/stores/core';

const core = useCoreStore()
</script>

<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn flat @click="core.drawer = !core.drawer" round dense icon="menu" />
      <q-toolbar-title>ИНМ: База знаний</q-toolbar-title>
      <q-btn icon="account_circle" rounded dense flat>
        <q-menu>
          <q-list>
            <q-item>
              <q-item-section class="text-body2 text-blue-10">
                Иванов Пётр Сидорович
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item to="/login">
              <q-item-section avatar>
                <q-icon name="logout" />
              </q-item-section>
              <q-item-section>
                Завершить сеанс
              </q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </q-toolbar>
  </q-header>
</template>
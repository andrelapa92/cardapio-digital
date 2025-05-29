<template>
  <v-col cols="12" md="6" lg="4">
    <v-card>
      <v-img
        v-if="item.image_url"
        :src="item.image_url"
        height="200px"
        cover
      />
      <v-card-title>{{ item.name }}</v-card-title>
      <v-card-subtitle>{{ item.category }}</v-card-subtitle>
      <v-card-text>
        {{ item.description }}<br />
        <strong>R$ {{ item.price.toFixed(2) }}</strong>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script setup lang="ts">
import type { MenuItem } from '@/models/MenuItem'

defineProps<{
  item: MenuItem
}>()
</script>

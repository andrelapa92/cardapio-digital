<template>
  <v-container>
    <v-row>
      <MenuItemCard v-for="item in menuItems" :key="item.id" :item="item" />
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useMenuController } from '@/controllers/menuController'
import MenuItemCard from '@/components/Menu/MenuItemCard.vue'

const { menuItems } = useMenuController()
</script>

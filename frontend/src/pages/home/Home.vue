<template>
  <v-container>
    <v-row>
      <v-col
        v-for="item in menuItems"
        :key="item.id"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card>
          <v-img :src="item.image || '/images/placeholder.png'" height="200px" cover />
          <v-card-title>{{ item.name }}</v-card-title>
          <v-card-subtitle>R$ {{ item.price.toFixed(2) }}</v-card-subtitle>
          <v-card-text>{{ item.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

interface MenuItem {
  id: number
  name: string
  description: string
  price: number
  category: string
  image: string
}

const menuItems = ref<MenuItem[]>([])

onMounted(async () => {
  try {
    const response = await axios.get<MenuItem[]>('http://localhost:3000/api/menu')
    menuItems.value = response.data
  } catch (error) {
    console.error('Erro ao buscar cardápio:', error)
  }
})
</script>

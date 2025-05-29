<template>
  <v-app>
    <!-- Barra superior fixa -->
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Cardápio Digital</v-toolbar-title>
    </v-app-bar>

    <!-- Conteúdo principal via rotas -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
// Nenhuma lógica necessária aqui por enquanto
</script>

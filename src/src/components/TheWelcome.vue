<script setup lang="ts">
import { useConnectedUserStore } from '@/stores/connectedUserStore'

const store = useConnectedUserStore()
</script>

<template>
  <h1>Hello {{ store.currentUserName }}</h1>
</template>

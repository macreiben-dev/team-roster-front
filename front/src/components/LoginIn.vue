<script setup lang="ts">
import { onMounted } from 'vue'
import { getUserInformation } from '../services/connectedUser/UserService'

onMounted(async () => {
  console.log('LoginIn component mounted')
  const current = await getUserInformation()

  console.info(current)
})
</script>

<template>Hello from Login in component</template>

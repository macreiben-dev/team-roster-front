<script setup lang="ts">
import { ref, onMounted } from 'vue'

const currentUser = ref({ email: 'NA' })

onMounted(() => {
  fetch('http://localhost:9000/api/v1/users/me')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      currentUser.value = data.introspectResponse.email
    })
    .catch((err) => {
      console.log(err)
    })
})
</script>

<template>
  <main>
    <h1>Profile</h1>
    <ul>
      <li>{{ currentUser.email }}</li>
    </ul>
  </main>
</template>

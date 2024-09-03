<script setup lang="ts">
import { useConnectedUserStore } from '@/stores/connectedUserStore'

const store = useConnectedUserStore()
</script>

<template>
  <div>
    <div>
      <h1>Hello {{ store.currentUserName }}</h1>
    </div>
    <div class="action-button">
      <RouterLink to="/teams/create">CreateTeam</RouterLink>
    </div>
  </div>
</template>

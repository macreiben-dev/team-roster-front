<script setup lang="ts">
import router from '@/router'
import { useConnectedUserStore } from '@/stores/connectedUserStore'

const store = useConnectedUserStore()

function toCreateTeam() {
  router.push('/teams/create')
}
</script>

<template>
  <div>
    <div>
      <h1 id="currentTitle">Hello {{ store.currentUserName }}</h1>
    </div>
    <div>
      <button class="action-button action-button-padded" @click="toCreateTeam">
        Create Team ...
      </button>
    </div>
    <!-- <div class="action-button">
      <RouterLink to="/teams/create">CreateTeam</RouterLink>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { useTeamRoster } from '@/stores/teamStore'
import { computed } from 'vue'

const store = useTeamRoster()

const isEmpty = computed(() => store.allTeams.length === 0)
</script>

<template>
  <div>
    <template v-if="isEmpty">
      <p>... sorry, no teams created !</p>
    </template>
    <template v-else>
      <table class="table-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="team in store.allTeams" :key="team.id" odd:bg-gray-100>
            <td>{{ team.name }}</td>
          </tr>
        </tbody>
      </table>
    </template>
  </div>
</template>

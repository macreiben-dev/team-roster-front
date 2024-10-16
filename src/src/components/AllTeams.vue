<script setup lang="ts">
import { useTeamRoster } from '@/stores/teamStore'

const store = useTeamRoster()
</script>

<template>
  <div>
    <table>
      <tr>
        <th>Team Name</th>
        <th>Team Description</th>
      </tr>
      <tr v-for="team in store.allTeams" :key="team.id">
        <td>{{ team.name }}</td>
      </tr>
    </table>
  </div>
</template>

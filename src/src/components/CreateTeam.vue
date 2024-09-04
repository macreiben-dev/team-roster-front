<script setup lang="ts">
import { ref } from 'vue'

const teamName = ref('')
const teamDescription = ref('')

function executeCreateTeam(event: Event) {
  event.preventDefault()
  console.log('Creating team ...')
  console.log('teamName:', teamName.value)
}
</script>

<template>
  <div>
    <h1>Create Team ...</h1>
  </div>
  <form @submit="executeCreateTeam">
    <div class="flex flex-row">
      <div>
        <label for="teamName">Team Name:</label>
        <input type="text" id="teamName" v-model="teamName" />
      </div>

      <div>
        <label for="teamDescription">Team Description:</label>
        <input type="text" id="teamDescription" v-model="teamDescription" />
      </div>
      <div>
        <button type="submit" class="action-button">Create Team</button>
      </div>
    </div>
  </form>
</template>

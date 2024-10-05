<script setup lang="ts">
import { ref } from 'vue'

import { useTeamRoster } from '@/stores/teamStore'
import { validateTeamName } from '@/services/validators/TeamPropertiesValidator'

const store = useTeamRoster()
const teamName = ref('')
const teamDescription = ref('')
const isTeamNameValid = ref(false)

function executeCreateTeam(event: Event) {
  event.preventDefault()
  console.log('Creating team ...')
  console.log('teamName:', teamName.value)

  store.createTeam(teamName.value, teamDescription.value)
}

function validateTeamNameValue() {
  isTeamNameValid.value = validateTeamName(teamName.value).isValid

  console.info('isTeamNameValid:', isTeamNameValid.value)
}
</script>

<template>
  <div class="flex flex-col">
    <div>
      <h1 id="currentTitle">Create Team ...</h1>
    </div>
    <form @submit="executeCreateTeam">
      <div class="one-row">
        <label for="teamName">Team Name:</label>
        <input
          type="text"
          id="teamName"
          v-model="teamName"
          :class="{ 'validation-error': !isTeamNameValid }"
          @blur="validateTeamNameValue()"
          data-test="teamName"
        />
      </div>

      <div class="one-row">
        <label for="teamDescription">Team Description:</label>
        <input
          type="text"
          id="teamDescription"
          v-model="teamDescription"
          data-test="teamDescription"
        />
      </div>
      <div>
        <button id="executeButton" class="action-button" @click="executeCreateTeam">
          Create Team
        </button>
      </div>
    </form>
  </div>
</template>

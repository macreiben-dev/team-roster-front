import ValidationResult from './ValidationResult'

const MINIMUM_TEAMNAME_LENGTH = 3
const EMPTY = ''

const MESSAGE_TEAMNAME_REQUIRED = 'Team name is required'
const MESSAGE_TEAMNAME_MINIMUM_LENGTH = 'Team name minimum length is 3'

function validateTeamName(source: string): ValidationResult {
  const messages: string[] = []

  if (isNameEmpty(source)) {
    messages.push(MESSAGE_TEAMNAME_REQUIRED)
  }
  if (isTeamNameLengthValid(source)) {
    messages.push(MESSAGE_TEAMNAME_MINIMUM_LENGTH)
  }

  const isValid = messages.length === 0

  return new ValidationResult(isValid, messages)
}

function isTeamNameLengthValid(name: string) {
  return name.length < MINIMUM_TEAMNAME_LENGTH
}

function isNameEmpty(name: string) {
  return name === EMPTY
}

export { validateTeamName }

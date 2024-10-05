import { describe, expect, test } from 'vitest'

import { validateTeamName } from '@/services/validators/TeamPropertiesValidator'
import { validateTeamDescription } from '@/services/validators/TeamPropertiesValidator'

const MESSAGE_TEAMNAME_MINIMUM_LENGTH = 'Team name minimum length is 3'
const MESSAGE_TEAMNAME_REQUIRED = 'Team name is required'

describe('TeamPropertiesValidator', () => {
  describe('TeamName', () => {
    describe('GIVEN teamName is empty', () => {
      test('THEN isValid is false', () => {
        // Arrange
        const teamName = ''

        // Act
        const actual = validateTeamName(teamName)

        // Assert
        expect(actual.isValid).toBe(false)
      })
      test('THEN errorMessages contains "Team name is required"', () => {
        // Arrange
        const teamName = ''

        // Act
        const actual = validateTeamName(teamName).message[0]

        // Assert
        expect(actual).toBe(MESSAGE_TEAMNAME_REQUIRED)
      })
    })
    describe('GIVEN teamName is less than 3 characters', () => {
      test('THEN isValid is false', () => {
        // Arrange
        const teamName = 'VE'

        // Act
        const actual = validateTeamName(teamName)

        // Assert
        expect(actual.isValid).toBe(false)
      })
      test('THEN errorMessages contains "Team name minimum length is 3"', () => {
        // Arrange
        const teamName = 'VE'

        // Act
        const actual = validateTeamName(teamName).message[0]

        // Assert
        expect(actual).toBe(MESSAGE_TEAMNAME_MINIMUM_LENGTH)
      })
    })
  })
})

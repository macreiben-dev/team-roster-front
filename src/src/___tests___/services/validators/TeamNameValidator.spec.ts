import { describe, expect, test } from 'vitest'

import { validateTeamName } from '@/services/validators/TeamValidators'

describe('TeamNameValidator', () => {
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
      expect(actual).toBe('Team name is required')
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
      expect(actual).toBe('Team name minimum length is 3')
    })
  })
})

import Team from '@/services/models/Team'
import { describe, expect, it } from 'vitest'

describe('Team', () => {
  describe('Convert to JSON', () => {
    it('given teamName is "Team Name" and id is "1" then asJson returns { id: 1, name: "Team Name" }', () => {
      // Arrange
      const team = new Team(1, 'Team Name')

      // Act
      const actual = team.asJson()

      // Assert
      expect(actual).toEqual({ id: 1, name: 'Team Name' })
    })
  })
  describe('Validation', () => {
    it('given team name is "Team Name" then valid returns true', () => {
      // Arrange
      const team = new Team(1, 'Team Name')

      // Act
      const actual = team.validate()

      // Assert
      expect(actual).toBe(true)
    })
    it('given team name is empty then valid returns true', () => {
      // Arrange
      const team = new Team(1, '')

      // Act
      const actual = team.validate()

      // Assert
      expect(actual).toBe(false)
    })
  })
})

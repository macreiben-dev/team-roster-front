import Team from '@/services/models/Team'
import { beforeAll, describe, expect, it, vi } from 'vitest'

describe('Team', () => {
  beforeAll(() => {
    vi.spyOn(console, 'log').mockImplementation(() => undefined)
    vi.spyOn(console, 'error').mockImplementation(() => undefined)
  })

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
})

import CreateTeam from '@/components/CreateTeam.vue'
import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import { describe, expect, test } from 'vitest'

describe('CreateTeam.vue', () => {
  test('should present title', async () => {
    const target = mountComponentWithPinia()

    const actual = await target.find('#currentTitle').text()

    expect(actual).toBe('Create Team ...')
  })
  describe('should expose input', () => {
    test('should present teamName', async () => {
      const target = mountComponentWithPinia()

      const actual = await target.find('#teamName').attributes('type')

      expect(actual).toBe('text')
    })
    test('should present teamName', async () => {
      const target = mountComponentWithPinia()

      const actual = await target.find('#teamDescription').attributes('type')

      expect(actual).toBe('text')
    })
  })
})

function mountComponentWithPinia() {
  return mount(CreateTeam, {
    global: {
      plugins: [createPinia()]
    }
  })
}

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
  describe('given component is mounted', () => {
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
    test('should present save button', async () => {
      const target = mountComponentWithPinia()

      const actual = await target.find('#executeButton').text()

      expect(actual).toBe('Create Team')
    })
  })

  describe('given component mounted', () => {
    test('and teamName is changed', async () => {
      const target = mountComponentWithPinia()

      const input = target.find('[data-test="teamName"]')

      await input.setValue('Team Name2')

      // @ts-ignore
      expect(target.vm.teamName).toBe('Team Name2')
    })
    test('and teamDescription is changed', async () => {
      const target = mountComponentWithPinia()

      const input = target.find('[data-test="teamName"]')

      await input.setValue('Team desc3')

      // @ts-ignore
      expect(target.vm.teamName).toBe('Team desc3')
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

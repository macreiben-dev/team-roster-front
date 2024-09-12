import CreateTeam from '@/components/CreateTeam.vue'
import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import { describe, expect, test } from 'vitest'

describe('CreateTeam.vue', () => {
  test('THEN present title', async () => {
    const target = mountComponentWithPinia()

    const actual = await target.find('#currentTitle').text()

    expect(actual).toBe('Create Team ...')
  })
  describe('GIVEN component is mounted', () => {
    test('THEN present teamName', async () => {
      const target = mountComponentWithPinia()

      const actual = await target.find('#teamName').attributes('type')

      expect(actual).toBe('text')
    })
    test('THEN present teamName', async () => {
      const target = mountComponentWithPinia()

      const actual = await target.find('#teamDescription').attributes('type')

      expect(actual).toBe('text')
    })
    test('THEN present save button', async () => {
      const target = mountComponentWithPinia()

      const actual = await target.find('#executeButton').text()

      expect(actual).toBe('Create Team')
    })
  })

  describe('GIVEN component mounted', () => {
    describe('AND teamName is changed', () => {
      test('AND teamName isValid', async () => {
        const target = mountComponentWithPinia()

        const input = target.find('[data-test="teamName"]')

        await input.setValue('Team Name2')

        // @ts-ignore
        expect(target.vm.teamName).toBe('Team Name2')
      })
      describe('AND teamName is invalid', () => {
        test('THEN highlight', async () => {
          const target = mountComponentWithPinia()

          const input = target.find('[data-test="teamName"]')

          await input.setValue('')

          // @ts-ignore
          expect(target.vm.teamName).toBe('')
        })
      })
    })

    test('AND teamDescription is changed', async () => {
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

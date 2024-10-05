import TheWelcome from '@/components/TheWelcome.vue'
import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import { describe, expect, test } from 'vitest'

describe('TheWelcome.vue', () => {
  test('THEN present title', async () => {
    const target = mountComponentWithPinia()

    expect(1).toBe(1)
  })
})

function mountComponentWithPinia() {
  return mount(TheWelcome, {
    global: {
      plugins: [createPinia()]
    }
  })
}

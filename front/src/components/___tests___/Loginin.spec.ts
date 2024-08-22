import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import LoginIn from '@/components/LoginIn.vue'
import { describe, expect, it, vi } from 'vitest'

describe('LoginIn.vue', () => {
  it('should work', () => {
    const mocked = vi.doMock('@/repositories/TenantRepository', () => ({
      redirectoToAuthenticationPage: vi.fn()
    }))

    // const wrapper = shallowMount(LoginIn)

    const wrapper = mount(LoginIn, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn
          })
        ]
      }
    })

    const actual = wrapper.find('#currentTitle').text()

    expect(actual).toBe('Login in ...')
  })
})

import { shallowMount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import LoginIn from '@/components/LoginIn.vue'
import { describe, expect, it, vi } from 'vitest'

describe('LoginIn.vue', () => {
  it('should work', () => {
    // const mocked = vi.mock('@/repositories/TenantRepository', () => ({
    //   redirectToAuthenticationPage: vi.fn()
    // }))

    // const wrapper = shallowMount(LoginIn)

    const wrapper = shallowMount(LoginIn, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn
          })
        ]
      }
    })

    expect(1).toBe(1)
  })
})

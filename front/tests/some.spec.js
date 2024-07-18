import { expect, test } from 'vitest'

test('some test suite', () => {
  expect('some test', () => {
    expect(1 + 1).toBe(2)
  })
})

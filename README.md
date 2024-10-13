# team-roster-assistant

## Configure your own fusion auth

- Create an application
- Fill client_id and application_id with the fusionauth's client id.
- Fill the secret accordingly
- Create user || on your user,
  - Add the app registration to allow the user to access the application.

## Resources

- Vuejs with fusion auth: https://fusionauth.io/blog/securely-implement-oauth-vuejs

### Moching with typescript

- https://medium.com/trendyol-tech/jest-mocking-part-2-module-60b80080d5d9

### Configure pinia to be entirely mocked

Example for LoginIn vue component.

```typescript
import { createTestingPinia } from '@pinia/testing'

function createWrappedComponent() {
  return mount(LoginIn, {
    global: { 
      plugins: [
        createPinia()
        createTestingPinia({
          createSpy: vi.fn
        })
      ]
    }
  })
}
```
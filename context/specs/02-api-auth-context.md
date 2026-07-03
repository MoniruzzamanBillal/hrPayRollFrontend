# Unit 02: API & Auth Context

## Goal

Set up global state management for the authenticated user session and wire up the existing API utilities.

## Design

This unit leverages the existing boilerplate code in `hrPayRollFrontend/utils` and `hrPayRollFrontend/hooks` to handle API communication securely.

## Implementation

### 1. Axios & Token Manager

- Utilize the existing `utils/axiosInstance.ts` and `utils/tokenManager.ts`. No need to build from scratch.
- Ensure `axiosInstance` correctly attaches the JWT to the `Authorization: Bearer` header.

### 2. API Hooks

- Utilize the existing `hooks/useApi.ts` for data fetching instead of writing raw Axios calls in components.

### 3. Auth State Management

- Do **NOT** store user data in `localStorage` or any persisted local state.
- The `accessToken` and `refreshToken` received from the login API must be stored purely in cookies.
- Decode the `accessToken` (using `jwt-decode`) to extract `userId`, `userEmail`, and `userRole` dynamically when needed, or hold them in a purely in-memory Zustand store (`lib/store/useAuthStore.ts`) that resets on refresh.
- Provide `login` (saves cookies) and `logout` (clears cookies) actions.

### 4. Auth Types

- Define `IUser` (matching token payload), `ILoginPayload`, and `ILoginResponse` in `types/auth.ts`.

## Dependencies

- `zustand`
- `jwt-decode`
- `cookies-next` (or similar cookie library already in boilerplate)

## Verify when done

- [ ] Making a test call with `useApi` or `axiosInstance` correctly appends the Authorization header.
- [ ] User role and ID can be successfully extracted from the access token cookie.
- [ ] "Logout" action correctly clears the token cookies.

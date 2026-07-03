# Unit 04: Authentication UI

## Goal

Build the login screen and implement Next.js middleware to strictly enforce role-based route protection.

## Design

- Centered card layout on a subtle gray background.
- Clean, minimal form using the existing controlled input components.

## Implementation

### 1. Login Page

- Create `app/login/page.tsx`.
- Create a `LoginForm` component using `react-hook-form` and `zod`.
- MUST use `components/shared/input/ControlledInput.tsx` for the Email and Password fields.
- On submit, call the `login` service via `axiosInstance`, update the Zustand store, set the token cookie via `utils/tokenManager.ts`, and redirect based on role.

### 2. Route Protection Middleware

- Create `middleware.ts` at the root of the project.
- Check for the presence of the JWT token cookie.
- If unauthenticated and accessing a protected route, redirect to `/login`.
- If authenticated, check the role, and prevent access to unauthorized routes.

## Dependencies

- `jwt-decode` (to read role from token in middleware/client)

## Verify when done

- [ ] Submitting empty credentials shows Zod validation errors on the `ControlledInput` components.
- [ ] Successful login redirects the user to the dashboard.

# Progress Tracker

Update this file after every meaningful implementation change.

## Current Phase

- Phase 1: Project Setup & Foundation

## Current Goal

- Implement Axios interceptors and global Zustand/React Context for user session state.

## Completed

- Setup of 6-file context methodology for the frontend.
- Unit 01: Project Setup — Next.js boilerplate verified, `.env.local` configured, dependencies installed, `@types/jsonwebtoken` added, build passes with zero TypeScript errors.
- Unit 01 re-verified against `context/specs/01-project-setup.md` (2026-07-01): `.env.local` has `NEXT_PUBLIC_API_BASE_URL`; `yarn install` completes cleanly; `components/shared/`, `components/common/`, `components/dashboard/`, `hooks/`, `utils/` all present and populated; `yarn dev` starts (`Ready in 1749ms`, HTTP 200 on `/`); `npx tsc --noEmit` reports zero errors.
- **Unit 01: Project Setup — COMPLETE** (2026-07-01).

## Completed (continued)

- **Unit 02: API & Auth Context — COMPLETE** (2026-07-01). Reused existing `utils/axiosInstance.ts` (already attaches `Authorization: Bearer` header) and `utils/tokenManager.ts` (already decodes JWT via `jsonwebtoken` and manages cookies via `cookies-next`) unmodified, per spec. Added: `types/auth.ts` (`Role`, `IUser`, `ILoginPayload`, `ILoginResponse`), `lib/store/useAuthStore.ts` (in-memory Zustand store with `login`/`logout` actions wrapping `tokenManager`; no `localStorage`/persistence used). Added `zustand` dependency. Verified: `tsc --noEmit` and `yarn build` both clean; `yarn lint` unchanged at 14 pre-existing problems (none introduced); JWT decode of `userId`/`userEmail`/`userRole` confirmed via scratch script; header-attachment and cookie-clearing logic confirmed by code trace (both pre-existing, unmodified).

## Completed (continued 2)

- **Unit 03: Base Dashboard Layout — COMPLETE** (2026-07-01). Added `components/dashboard/dashboardLinks/dashboardLinks.tsx` exporting `adminLinks`, `managerLinks`, `employeeLinks` (and a `dashboardLinksByRole` lookup) derived from `project-overview.md`'s documented feature set. Created `app/(dashboard)/layout.tsx` composing the existing `Sidebar` + `DashboardHeader` with a `<main>` container (client component, holds mobile sidebar-open state). Updated `Sidebar.tsx` to read `userRole` from `useAuthStore` (Unit 02) and render only that role's links (replaced the old hardcoded generic `menuItems` list, which was unrelated warehouse/procurement boilerplate — deleted the now-orphaned `menuItem.tsx`, confirmed unused elsewhere). Fixed a pre-existing broken `next/image` import in `Sidebar.tsx` (`@/public/images/drugLogo.png` did not exist — would have crashed the build the moment any page mounted this layout) with a plain text "HR Payroll" wordmark. Updated `DashboardHeader.tsx`'s logout handler to call `useAuthStore.logout()` instead of `tokenManager.clearTokens()` directly, so the in-memory auth state is cleared too, not just cookies. Also swapped the undefined custom color-scale classes (`bg-primary-500`, `text-neutral-700`, `bg-surface`, etc. — not defined anywhere in `globals.css`'s Tailwind v4 theme, so they silently no-op) for `ui-context.md`'s documented tokens (`bg-blue-600`, `text-slate-700`, `bg-white`, etc.) only in the lines being rewritten anyway. Verified via a temporary throwaway route + Playwright (removed before finishing, not part of the deliverable): role-based link filtering (ADMIN vs EMPLOYEE sidebars), mobile (375px, hidden by default + hamburger toggle) and desktop (1440px, pinned) responsiveness, and logout clearing both `accessToken`/`refreshToken` cookies — all passed. `tsc --noEmit` and `yarn build` clean; `yarn lint` unchanged at 14 pre-existing problems.
- Updated `architecture.md`: replaced the per-role `(admin)`/`(manager)`/`(employee)` route-group plan with the single shared `app/(dashboard)/*` group + client-side role-filtered nav actually built in Unit 03 (documentation sync per `ai-workflow-rules.md`).

## In Progress

- None — ready to start Unit 04 (Authentication UI: Login page + role-based route middleware) on request.

## Next Up

- Unit 03: Base Dashboard Layout (Sidebar + Header).
- Unit 04: Login Page and Auth Middleware.

## Open Questions

- Will the backend provide a Swagger/OpenAPI spec for automatic type generation on the frontend?
- Are we using cookies or localStorage for the JWT access token? (Architecture currently assumes cookies).
- Pre-existing boilerplate has 1 ESLint error and 13 warnings (mostly unused vars and an `any` type in `components/main/ControlledInputImplement/form/CreateUpdateForm.tsx`, plus TanStack Table incompatible-library notices). Out of scope for Unit 01 (verification only, no unrelated-file edits); should be cleaned up when those specific files are next touched by a feature unit.
- Both `package-lock.json` (npm) and `yarn.lock` are present. `yarn install` is the working flow; consider removing `package-lock.json` to avoid resolution drift.
- `types/auth.ts` assumes `ILoginPayload` is `{ email, password }` and `Role` values are `"ADMIN" | "MANAGER" | "EMPLOYEE"` — not confirmed against an actual backend contract/Swagger spec. Please confirm exact field names and enum casing before wiring the real login request in Unit 04.
- Did not add `jwt-decode` (listed as a Unit 02 dependency in the spec) because the existing `utils/tokenManager.ts` already decodes tokens via `jsonwebtoken`'s `jwt.decode`, and the spec says to reuse existing boilerplate rather than build from scratch. Flagging in case a dedicated `jwt-decode` package is still wanted for consistency.
- `DashboardHeader.tsx` still has a hardcoded profile name/role ("Md. Moniruzzaman" / "Super Admin") and several of the same undefined custom color-scale classes noted above (`text-neutral-400`, `bg-success-600`, etc.). Left untouched since Unit 03 only required wiring its logout action to the auth store; wiring the real user's name/email from `useAuthStore` and a full token-cleanup pass should happen when that component is next in scope.

## Architecture Decisions

- Frontend framework: Next.js App Router.
- Styling: Tailwind CSS + shadcn/ui.
- Backend integration: Axios with strict TypeScript interfaces matching the NestJS backend.

## Session Notes

- Frontend context files have been established based on the backend HR Payroll SRS document. The project is ready for initial scaffolding.

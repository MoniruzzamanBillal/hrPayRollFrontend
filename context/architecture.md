# Architecture

## Stack

| Layer | Technology | Role |
| --- | --- | --- |
| **Framework** | Next.js (App Router) | Core React framework for routing, SSR, and client components. |
| **Language** | TypeScript | Static typing to ensure strict contracts with backend API interfaces. |
| **Styling** | Tailwind CSS | Utility-first CSS framework for rapid, responsive UI development. |
| **UI Components** | shadcn/ui (Radix) | Accessible, customizable pre-built components (buttons, forms, modals). |
| **API Client** | Axios | Configured client with interceptors for attaching JWTs and handling refreshes. |
| **State Management**| Zustand / React Query| Server state caching (React Query) and lightweight client state (Zustand). |
| **Form Handling** | React Hook Form + Zod| Form state management and schema-based validation. |

## System Boundaries

- `app/`: Next.js App Router pages, layouts, and API route handlers. Protected routes share a single `(dashboard)` route group (`app/(dashboard)/layout.tsx`) housing the common Sidebar + Header shell; role-specific access within it is enforced by client-side role checks (Sidebar renders only the nav links for the current `IUser.userRole`) rather than separate `(admin)`/`(manager)`/`(employee)` route groups. (Decided in Unit 03 per `context/specs/03-base-dashboard.md`; supersedes the previous per-role route-group plan.)
- `components/ui/`: Reusable, generic UI components (buttons, inputs, dialogs).
- `components/features/`: Domain-specific components (e.g., `LeaveRequestForm`, `PayslipTable`).
- `lib/api/`: Axios instances and API request functions (services), organized by domain.
- `lib/store/`: Zustand stores for global client state (e.g., UI toggles, current user context).
- `types/`: Global TypeScript interfaces mapping to backend Prisma models.
- `hooks/`: Custom React hooks (e.g., `useAuth`, `useAttendance`).

## Storage Model

- **Authentication:** JWT Access Tokens stored in memory or short-lived cookies. Refresh tokens stored in HTTP-only secure cookies.
- **Client Cache:** React Query cache for server state (attendance records, leave balances).
- **Persistent Client State:** `localStorage` only used for non-sensitive user preferences (e.g., theme preference).

## Auth and Access Model

- Users authenticate via `/auth/login` and receive a JWT.
- **Middleware:** Next.js middleware checks for token presence and valid roles, redirecting unauthorized users before page render.
- **Client-side:** UI elements (like admin buttons) are conditionally rendered based on the decoded JWT role.
- **Interceptors:** Axios interceptors automatically attach the token to all outgoing requests and handle 401 errors by attempting token refresh or forcing logout.

## Invariants

1. **API Centralization:** No raw `fetch` or `axios` calls inside components. All API requests must use the centralized service functions in `lib/api/`.
2. **Type Safety:** All API responses must be typed using interfaces that exactly match the NestJS backend DTOs/Entities. `any` is strictly prohibited.
3. **Role Segregation:** Pages specific to a role reside under sub-paths within the shared `app/(dashboard)/*` group (e.g., `app/(dashboard)/admin/*`, `app/(dashboard)/manager/*`, `app/(dashboard)/employee/*`) and must enforce role checks (route middleware and/or layout-level redirect) once auth middleware is added in Unit 04 — the `(dashboard)` layout itself only handles the shared shell, not access control.
4. **Error Handling:** Components must not handle raw API errors. API functions should throw standardized errors, caught by UI boundaries or handled via global toast notifications.
5. **No Business Logic in UI:** Complex data transformations or business rules should be handled in hooks or service layers, keeping UI components pure and focused on rendering.

# Code Standards

## TypeScript Conventions

- Use strict mode.
- Avoid the `any` type completely. Use `unknown` if the type is truly dynamic.
- Define interfaces for all API payloads and responses in the `types/` directory.
- Prefix interfaces with `I` (e.g., `IEmployee`, `ILeaveRequest`) or use PascalCase types (e.g., `EmployeeType`). Keep consistent across the project.
- Use Enums or Union Types for fixed sets of values matching backend enums (e.g., `Role`, `LeaveStatus`).

## Next.js & React Patterns

- Use Server Components by default. Add `"use client"` only at the top of files that require interactivity (hooks, state, event listeners).
- Keep Server Components stateless and focused on data fetching and layout.
- Extract complex interactive UI into small, focused Client Components.
- Use React Hook Form with Zod for all form handling and validation.

## File Organization & Naming

- **Pages:** `app/[route]/page.tsx`
- **Layouts:** `app/[route]/layout.tsx`
- **Components:** PascalCase (e.g., `EmployeeCard.tsx`)
- **Hooks:** camelCase, starting with `use` (e.g., `useAuth.ts`)
- **Utilities:** camelCase (e.g., `formatDate.ts`)
- Group files by feature where appropriate, rather than purely by file type.

## Styling Rules

- Use Tailwind CSS for all styling.
- Avoid writing custom CSS in `.css` files unless absolutely necessary for complex animations or overrides.
- Use the `cn()` utility (clsx + tailwind-merge) for conditionally joining Tailwind class names.
- Extract repeated Tailwind class combinations into reusable UI components.

## Error Handling

- API services should catch HTTP errors and throw standard application errors.
- UI components should use a toast notification system (e.g., `sonner` or `react-hot-toast`) to display error messages to the user.
- Forms should display inline validation errors automatically via React Hook Form / Zod integration.

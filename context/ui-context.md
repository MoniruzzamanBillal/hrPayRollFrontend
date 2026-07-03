# UI Context

## Visual Language

The application should feel like a modern, professional, enterprise-grade B2B tool. The UI should be clean, dense enough for data-heavy views (like payroll tables), but accessible and friendly. 

## Color Tokens (Tailwind)

| Token | Tailwind Class | Purpose |
| --- | --- | --- |
| **Primary** | `bg-blue-600` / `text-blue-600` | Primary buttons, active nav items, key highlights. |
| **Primary Hover** | `bg-blue-700` | Hover states for primary actions. |
| **Secondary** | `bg-slate-100` / `text-slate-700` | Secondary buttons, card backgrounds, muted text. |
| **Background** | `bg-slate-50` | Main application background (off-white). |
| **Surface** | `bg-white` | Card, modal, and table backgrounds. |
| **Success** | `bg-emerald-500` / `text-emerald-600` | Approved leaves, successful actions, active status. |
| **Danger** | `bg-red-500` / `text-red-600` | Rejected leaves, destructive actions (delete, logout). |
| **Warning** | `bg-amber-500` / `text-amber-600` | Pending approvals, warnings. |

## Typography

- **Font Family:** Inter (via `next/font/google`).
- **Headings:** Bold, dark slate (`text-slate-900`).
- **Body Text:** Regular weight (`text-slate-600`).
- **Small Text:** Tables and meta-data (`text-sm`, `text-slate-500`).

## Component Library Conventions

We use **shadcn/ui** for core components.
- **Buttons:** Use `Variant="default"` for main actions, `Variant="outline"` for secondary, `Variant="destructive"` for deletions/rejections.
- **Inputs:** Use standard borders, slightly rounded (`rounded-md`). Provide clear focus rings (`focus:ring-2 focus:ring-blue-600`).
- **Tables:** Must include sticky headers for long datasets (e.g., attendance lists). Use pagination components for datasets > 10 rows.
- **Cards:** Use cards with slight shadows (`shadow-sm`, `border border-slate-200`) to contain distinct functional areas.

## Layout Patterns

### Dashboard Shell
- **Sidebar:** Fixed left sidebar containing role-specific navigation links. Active link is highlighted with Primary color background.
- **Top Header:** Contains Breadcrumbs for current page, User Profile dropdown (with Logout), and notification bell.
- **Main Content:** Occupies remaining space, uses a max-width container for readability on ultra-wide screens.

### Modals & Drawers
- Use **Modals (Dialogs)** for short, definitive actions (e.g., Confirm Payroll Run, Approve Loan).
- Use **Slide-out Drawers (Sheet)** for complex forms (e.g., Create Employee, Configure Salary Structure).

# Unit 03: Base Dashboard Layout

## Goal

Build the responsive application shell that will house all protected routes using the existing dashboard components.

## Design

- **Sidebar & Header:** Utilize the existing layout components in `components/dashboard/`.

## Implementation

### 1. Navigation Configuration

- Create a folder named `dashboardLinks` inside the dashboard component directory.
- Inside it, export arrays of objects for each role (e.g., `adminLinks`, `hrLinks`, `employeeLinks`).
- Reference example:
  ```tsx
  import {
    User,
    BarChart3,
    Users,
    BookOpen,
    Layers,
    ClipboardList,
  } from "lucide-react";
  export const adminLinks = [
    {
      name: "Profile",
      path: "/dashboard/profile",
      icon: <User className="w-5 h-5" />,
    },
    {
      name: "Statistics",
      path: "/dashboard/admin/stat",
      icon: <BarChart3 className="w-5 h-5" />,
    },
    {
      name: "Manage Instructors",
      path: "/dashboard/admin/manage-instructor",
      icon: <Users className="w-5 h-5" />,
    },
  ];
  ```
- The sidebar will dynamically render the correct array of links based on the user's role extracted from the token.

### 2. Layout Integration

- Create `app/(dashboard)/layout.tsx`.
- Import and use the existing `components/dashboard/DashboardHeader.tsx`.
- Import and use the existing sidebar components from `components/dashboard/sidebar/`.
- Compose them together with a `<main>` container for the `children`.

## Dependencies

- `lucide-react` (if not already in boilerplate)

## Verify when done

- [ ] The Sidebar correctly renders only the links allowed for the user's role extracted from the token.
- [ ] The layout is responsive.
- [ ] Clicking "Logout" in the `DashboardHeader` clears the auth state.

# Unit 05: Employee Management (Admin)

## Goal
Build the Employee Management dashboard for Admins and HR Managers. This includes a data table to view all employees and a slide-out drawer (form) to create new employees.

## Design
- **Table:** MUST use `components/common/GenericTable.tsx`.
- **Form:** MUST use components from `components/shared/input/` (e.g., `ControlledInput.tsx`, `DateSelect.tsx`, `ControlledSelectField.tsx`).
- **Role Guarding:** The "Add Employee" button should only render if the authenticated user's role is `ADMIN` or `HR_MANAGER`.

## Implementation

### 1. Types & Zod Schema
- Create `types/employee.ts` matching the backend Prisma model.
- Create a Zod schema `employeeFormSchema`.

### 2. Employee API Hooks
- Create `hooks/features/useEmployee.ts` utilizing the existing `hooks/useApi.ts` pattern for `getEmployees` and `createEmployee`.

### 3. Employee Data Table
- Create `app/(admin)/employees/page.tsx`.
- Fetch data using the hook from Step 2.
- Render the data using `components/common/GenericTable.tsx`.

### 4. Add Employee Form (Sheet)
- Create `components/features/AddEmployeeForm.tsx` inside a shadcn/ui Sheet.
- Implement `react-hook-form` resolved with the Zod schema.
- Use `ControlledInput.tsx`, `DateSelect.tsx`, and `ControlledSelectField.tsx` for form fields.
- Invalidate the query cache on success to refresh the table.

## Dependencies
- `@hookform/resolvers`
- `zod`

## Verify when done
- [ ] Only `ADMIN` or `HR_MANAGER` roles can see the "Add Employee" button.
- [ ] `GenericTable.tsx` correctly displays the fetched data.
- [ ] Validation errors correctly display on the `Controlled*` input components.

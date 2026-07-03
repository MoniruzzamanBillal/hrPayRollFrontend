# Unit 08: Salary Structure Configuration

## Goal
Allow Admins to define reusable salary components and assign a complete salary structure to an employee.

## Design
- **Tables:** Use `components/common/GenericTable.tsx` for listing components and structures.
- **Forms:** Use `components/shared/input/ControlledInput.tsx` and `ControlledSelectField.tsx`.

## Implementation

### 1. Salary Components CRUD
- Create `app/(dashboard)/admin/salary/components/page.tsx`.
- Use `GenericTable.tsx` to list existing components.
- Use a form with `ControlledInput.tsx` and `ControlledSelectField.tsx` to add new ones.

### 2. Assign Structure Form
- Use `useFieldArray` from `react-hook-form` to allow adding multiple `SalaryStructureItem` rows dynamically.
- Use `ControlledSelectField.tsx` for selecting the component in each row.

## Dependencies
- None additional.

## Verify when done
- [ ] `GenericTable` accurately displays the components.
- [ ] The dynamic form allows adding and removing component rows correctly.

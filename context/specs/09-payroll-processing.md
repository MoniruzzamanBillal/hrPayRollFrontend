# Unit 09: Payroll Processing

## Goal
Build the automated payroll run trigger for Admins and the payslip viewer for Employees.

## Design
- **Admin:** Form using `components/shared/input/ControlledSelectField.tsx` (for Month/Year) and a `components/common/GenericTable.tsx` for processed records.
- **Employee:** A clean, printable payslip view.

## Implementation

### 1. Admin Payroll Run
- Create `app/(dashboard)/admin/payroll/page.tsx`.
- Use `ControlledSelectField.tsx` for selecting Month and Year.
- Call `/payroll/run` via `hooks/useApi.ts`.
- Show the results in `components/common/GenericTable.tsx`.

### 2. Employee Payslip Viewer
- Create `app/(dashboard)/employee/payslips/[id]/page.tsx`.
- Fetch the `PayrollRecord` via `hooks/useApi.ts`.
- Render the payslip layout and provide a print button.

## Dependencies
- None additional.

## Verify when done
- [ ] Clicking "Run Payroll" prevents double-submission.
- [ ] The `GenericTable` updates with the processed payroll records.

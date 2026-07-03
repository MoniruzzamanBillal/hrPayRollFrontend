# Unit 07: Leave Management

## Goal
Build the workflow for employees to request leave and managers to approve/reject them.

## Design
- **Employee Request Form:** Use `components/shared/input/DateSelect.tsx` and `components/shared/input/ControlledSelectField.tsx`.
- **Manager Approval Table:** Use `components/common/GenericTable.tsx` with action buttons.

## Implementation

### 1. Employee Leave Request
- Create `components/features/LeaveRequestForm.tsx` inside a Dialog.
- Use `ControlledSelectField.tsx` for leave type, `DateSelect.tsx` for dates, and `ControlledTextArea.tsx` for reasons.
- Ensure form uses `react-hook-form` and `zod`.

### 2. Manager Approval View
- Create `app/(dashboard)/manager/leaves/page.tsx`.
- Fetch pending leave requests via `hooks/useApi.ts`.
- Render a table using `components/common/GenericTable.tsx` with "Approve" and "Reject" action buttons.

## Dependencies
- None additional.

## Verify when done
- [ ] Form prevents selecting past dates using `DateSelect.tsx`.
- [ ] Manager clicking "Approve" immediately updates the table without a page reload.

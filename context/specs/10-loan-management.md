# Unit 10: Loan Management

## Goal
Build the loan request workflow for employees and the approval interface for admins.

## Design
- **Form:** Use `components/shared/input/ControlledInput.tsx` and `ControlledTextArea.tsx`.
- **Table:** Use `components/common/GenericTable.tsx`.

## Implementation

### 1. Loan Request Form (Employee)
- Create `components/features/LoanRequestForm.tsx`.
- Fields: `amount` (ControlledInput, type number), `installments` (ControlledInput, type number), `reason` (ControlledTextArea).
- UI should automatically calculate and display the estimated EMI.

### 2. Loan Approval (Admin)
- Create `app/(dashboard)/admin/loans/page.tsx`.
- Render `components/common/GenericTable.tsx` showing pending loans with Approve/Reject buttons.

## Dependencies
- None additional.

## Verify when done
- [ ] Estimated EMI updates dynamically in the form.
- [ ] Admins can approve a loan, removing it from the `GenericTable`.

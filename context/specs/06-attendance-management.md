# Unit 06: Attendance Management

## Goal
Provide employees with a simple check-in/out interface and provide managers with a data table to monitor team attendance.

## Design
- **Employee View:** A Check-in widget on the dashboard.
- **Manager View:** A data table using `components/common/GenericTable.tsx`.

## Implementation

### 1. Employee Check-in Widget
- Create `components/features/AttendanceWidget.tsx`.
- Fetch today's attendance status via `hooks/useApi.ts`.
- Display current time and a button to check in/out.

### 2. Manager Attendance View
- Create `app/(dashboard)/manager/attendance/page.tsx`.
- Fetch attendance records for the team via `hooks/useApi.ts`.
- Render a data table using `components/common/GenericTable.tsx`. Show Employee Name, Date, Check-In Time, Check-Out Time, and Status.

## Dependencies
- `date-fns`

## Verify when done
- [ ] Employee can only check in once per day.
- [ ] Manager can view the attendance table rendered via `GenericTable.tsx`.

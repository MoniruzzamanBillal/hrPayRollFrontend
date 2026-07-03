# Unit 11: Reporting & Analytics

## Goal
Provide Admins and Managers with visual insights into payroll costs and attendance trends.

## Design
- A dashboard layout with KPI cards at the top and interactive charts below.

## Implementation

### 1. Reporting Dashboard
- Create `app/(dashboard)/admin/reports/page.tsx`.
- Fetch aggregate data using `hooks/useApi.ts`.

### 2. Visualizations
- Use `recharts` to render data dynamically fetched via the API hook.

## Dependencies
- `recharts`

## Verify when done
- [ ] Charts render correctly using the real data fetched from `useApi`.

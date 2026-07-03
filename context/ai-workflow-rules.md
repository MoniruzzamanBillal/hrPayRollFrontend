# AI Workflow Rules

## Overall Approach

Follow a spec-driven, incremental development approach. Never build multiple major features in a single step. Implement components and pages unit by unit, verifying functionality at each step.

## Scoping Rules

1. **One Unit at a Time:** Focus strictly on the single unit defined in the active spec file.
2. **No Speculative Changes:** Do not modify unrelated files, refactor existing systems, or build placeholder UI for future features unless explicitly instructed.
3. **Strict Boundaries:** Frontend UI changes should not require backend schema modifications. Rely on the defined API contracts.

## Splitting Work

- If a spec requires building a complex page (e.g., the Payroll Dashboard), split it into smaller component implementation steps (e.g., build the table first, then the filters, then the action buttons).
- Do not attempt to write >300 lines of complex UI logic in a single prompt output.

## Handling Missing Requirements

- If a visual design element (e.g., color, padding) is not specified in the spec, refer to `ui-context.md`.
- If an API payload structure is ambiguous, pause implementation and ask for clarification based on the backend schema. Do NOT guess the API payload structure.
- If an edge case is identified (e.g., what happens when an employee has no salary structure assigned?), stop and ask how it should be handled in the UI.

## Protected Files

- Do not modify generated UI library components (e.g., shadcn/ui components in `components/ui/`) unless explicitly instructed to customize them globally.
- Do not alter the core routing structure `app/layout.tsx` unless adding a global provider.

## Documentation Sync

- If an implementation decision diverges from the architecture or requires a new global pattern, update `architecture.md` or `code-standards.md` immediately.
- Always update `progress-tracker.md` upon completion of a unit.

## Verification Checklist Before Moving On

Before declaring a unit complete, ensure:
- [ ] No TypeScript compilation errors exist.
- [ ] No ESLint warnings/errors are introduced.
- [ ] The feature is responsive (check mobile and desktop layouts).
- [ ] UI accurately reflects API loading and error states.
- [ ] `npm run build` succeeds locally.

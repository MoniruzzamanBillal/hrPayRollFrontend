# Unit 01: Project Setup Verification

## Goal

Verify that the existing Next.js 15 (App Router) boilerplate in `hrPayRollFrontend` is correctly configured and all environment variables are set.

## Design

The boilerplate already includes Tailwind CSS, TypeScript, shadcn/ui components, and custom shared UI components.

## Implementation

### 1. Environment Configuration

- Ensure `.env.local` exists in `hrPayRollFrontend` with the backend API URL.

### 2. Verify Dependencies

- Run `yarn install` to ensure all dependencies from the existing `package.json` are installed.

### 3. Verify Boilerplate Structure

- Confirm `components/shared/`, `components/common/`, `components/dashboard/`, `hooks/`, and `utils/` are intact and ready for use.

## Dependencies

- Already included in `package.json`.

## Verify when done

- [ ] `yarn dev` successfully starts the development server.
- [ ] No TypeScript errors in the boilerplate installation.

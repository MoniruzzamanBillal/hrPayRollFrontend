# Project Overview: HR & Payroll Management System (Frontend)

## Overview

The HR & Payroll Management System is a web-based frontend application built to interface with a NestJS backend. It automates core human resources operations for a manufacturing organization, providing specialized dashboards for Administrators, Department Managers, and Employees.

## Goals

1. Streamline HR operations by providing a centralized employee management portal.
2. Provide a self-service portal for employees to track attendance, leave, loans, and payslips.
3. Enable Department Managers to easily approve or reject leave requests and monitor team attendance.
4. Provide Admins with automated payroll processing UI and configuration of salary structures.

## Core User Flows

### Admin / HR Manager

1. Logs into the system and is directed to the Admin Dashboard.
2. Can navigate to Employee Management to create/edit employee records and assign reporting structures.
3. Can configure Salary Components and assign them to employees.
4. Triggers the monthly Payroll Run and views generated payslips and cost reports.
5. Approves or rejects employee loan requests.

### Department Manager

1. Logs into the system and is directed to the Manager Dashboard.
2. Views team-level attendance patterns.
3. Receives notifications for team leave requests and approves/rejects them.

### Employee

1. Logs into the system and is directed to the Employee Portal.
2. Checks in and checks out to record daily attendance.
3. Submits leave and loan requests and tracks their approval status.
4. Downloads monthly payslips once generated.

## Features by Category

- **Authentication:** JWT-based login, role-based redirection.
- **Employee Management:** CRUD operations for employee records, departments, and designations.
- **Attendance Tracking:** Daily check-in/out button, monthly attendance summary view.
- **Leave Management:** Leave request forms, approval workflow UI, leave balance display.
- **Payroll Processing:** Salary structure configuration forms, payroll execution trigger, payslip generation and download.
- **Loan Management:** Loan request forms, EMI tracking, admin approval interface.
- **Reporting:** Visual charts and tables for payroll costs, attendance trends, and leave balances.

## In Scope

- Next.js application (App Router) integrating with the NestJS REST API.
- Role-based dashboards (Admin, Manager, Employee).
- Forms with client-side and server-side validation.
- Responsive design for desktop and tablet usage.

## Out of Scope

- Recruitment and onboarding workflows.
- Performance appraisals and training management.
- Integration with external accounting systems.
- Mobile application (native iOS/Android).
- Biometric hardware integration.

## Success Criteria

- A logged-in Admin can successfully create an employee, configure their salary, and run payroll.
- A logged-in Employee can record attendance, request leave, and view their payslip.
- The UI handles all API errors gracefully with clear user feedback.
- Role-based access control restricts users from viewing pages outside their permissions.

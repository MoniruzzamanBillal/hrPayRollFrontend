import {
  BarChart3,
  Banknote,
  CalendarCheck,
  CalendarDays,
  ClipboardList,
  FileText,
  LayoutGrid,
  Layers,
  Users,
} from "lucide-react";
import type { Role } from "@/types/auth";

export type TDashboardLink = {
  name: string;
  path: string;
  icon: React.ReactNode;
};

export const adminLinks: TDashboardLink[] = [
  {
    name: "Overview",
    path: "/overview",
    icon: <LayoutGrid className="w-5 h-5" />,
  },
  {
    name: "Employees",
    path: "/admin/employees",
    icon: <Users className="w-5 h-5" />,
  },
  {
    name: "Salary Structure",
    path: "/admin/salary-structure",
    icon: <Layers className="w-5 h-5" />,
  },
  {
    name: "Payroll",
    path: "/admin/payroll",
    icon: <ClipboardList className="w-5 h-5" />,
  },
  {
    name: "Loans",
    path: "/admin/loans",
    icon: <Banknote className="w-5 h-5" />,
  },
  {
    name: "Reports",
    path: "/admin/reports",
    icon: <BarChart3 className="w-5 h-5" />,
  },
];

export const managerLinks: TDashboardLink[] = [
  {
    name: "Overview",
    path: "/overview",
    icon: <LayoutGrid className="w-5 h-5" />,
  },
  {
    name: "Team Attendance",
    path: "/manager/attendance",
    icon: <CalendarCheck className="w-5 h-5" />,
  },
  {
    name: "Leave Approvals",
    path: "/manager/leave-approvals",
    icon: <CalendarDays className="w-5 h-5" />,
  },
];

export const employeeLinks: TDashboardLink[] = [
  {
    name: "Overview",
    path: "/overview",
    icon: <LayoutGrid className="w-5 h-5" />,
  },
  {
    name: "Attendance",
    path: "/employee/attendance",
    icon: <CalendarCheck className="w-5 h-5" />,
  },
  {
    name: "Leave",
    path: "/employee/leave",
    icon: <CalendarDays className="w-5 h-5" />,
  },
  {
    name: "Loans",
    path: "/employee/loans",
    icon: <Banknote className="w-5 h-5" />,
  },
  {
    name: "Payslips",
    path: "/employee/payslips",
    icon: <FileText className="w-5 h-5" />,
  },
];

export const dashboardLinksByRole: Record<Role, TDashboardLink[]> = {
  ADMIN: adminLinks,
  MANAGER: managerLinks,
  EMPLOYEE: employeeLinks,
};

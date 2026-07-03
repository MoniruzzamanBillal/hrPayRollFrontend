"use client";

import { useGetUser } from "@/hooks/useGetUser";
import { useAuthStore } from "@/lib/store/useAuthStore";
import { usePathname, useRouter } from "next/navigation";
import { dashboardLinksByRole } from "../dashboardLinks/dashboardLinks";

type TSidebarProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export default function Sidebar({ isOpen, setIsOpen }: TSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const role = useAuthStore((state) => state.user?.userRole);
  const links = role ? dashboardLinksByRole[role] : [];

  const userData = useGetUser();

  console.log("userData = ", userData);

  return (
    <>
      {/*  Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/*  Sidebar */}
      <aside
        className={`
          bg-white border-r border-slate-200 fixed top-0 left-0 lg:sticky z-40 h-screen
          w-56 sc-laptop:w-70
          transform transition-transform duration-300 ease-in-out
          lg:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          shrink-0 overflow-y-auto
        `}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="my-4 mx-5">
            <span className="text-xl font-bold text-slate-900">HR Payroll</span>
          </div>

          {/* Menu */}
          <nav className="flex-1 px-4 overflow-y-auto no-scrollbar">
            {links.map((link) => {
              const isActive = pathname === link.path;

              return (
                <button
                  key={link.path}
                  onClick={() => {
                    setIsOpen(false);
                    router.push(link.path);
                  }}
                  className={`
                    w-full flex items-center gap-x-2
                    p-2 sc-laptop:p-3 rounded-md mb-2
                    transition-all text-left
                    cursor-pointer
                    ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-slate-700 hover:bg-slate-100"
                    }
                  `}
                >
                  {/* Icon */}
                  <span className={isActive ? "text-white" : "text-inherit"}>
                    {link.icon}
                  </span>

                  {/* Label */}
                  <span className="text-sm sc-laptop:text-base font-medium truncate">
                    {link.name}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}

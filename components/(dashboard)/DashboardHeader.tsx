"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { clearTokens } from "@/utils/tokenManager";

import { ChevronDown, CircleUserRound, LogOut, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function DashboardHeader({
  toggleSidebar,
}: {
  toggleSidebar?: () => void;
}) {
  const handleLogout = () => {
    // logout();

    clearTokens();

    setTimeout(() => {
      redirect("/login");
    }, 100);
  };

  return (
    <div className=" py-4 px-6  bg-white dark:bg-surface border border-neutral-200 dark:border-[#27272B] flex  ">
      {/* left side menu logo */}
      {toggleSidebar && (
        <div className="menuLogo flex justify-start items-center  flex-1  lg:hidden  ">
          <Menu
            className=" size-6 text-white cursor-pointer "
            onClick={toggleSidebar}
          />
        </div>
      )}

      <div className="  flex justify-end  flex-1   ">
        {/* right side menu  */}
        <div className="  flex items-center gap-x-4 ">
          <span className="  h-full w-px bg-neutral-50 "></span>

          {/* profile section  */}
          <div className=" profileSection ">
            <Popover>
              <PopoverTrigger asChild>
                <div className="flex  cursor-pointer items-center justify-between gap-x-3 ">
                  {/* ========= profile image ======= */}
                  <div className=" size-8  relative ">
                    <Image
                      alt="Profile image"
                      src={"https://i.pravatar.cc/150?img=1"}
                      width={100}
                      height={100}
                      className=" w-full h-full rounded-full  "
                    />
                    <p className="bg-success-600 border-neutral-800 absolute -right-0.5 bottom-0 z-10 h-3 w-3 rounded-full border-2"></p>
                  </div>

                  {/* ======= details ========== */}
                  <div>
                    <p className=" font-semibold text-[0.875rem] leading-5.25 mb-1 text-neutral-900 dark:text-white  ">
                      Md. Moniruzzaman
                    </p>

                    <p className=" font-medium text-[12px] leading-[0.84rem] text-neutral-400 dark:text-white/50  ">
                      Super Admin
                    </p>
                  </div>
                  {/* ========== */}
                  <div>
                    <ChevronDown className="  text-neutral-50  " />
                  </div>
                </div>
              </PopoverTrigger>
              <PopoverContent
                sideOffset={10}
                className=" w-[var(--radix-popover-trigger-width)] p-0 "
              >
                <div className="flex flex-col ">
                  <Link
                    href={`/overview`}
                    className="  flex items-center gap-x-3 text-neutral-50 py-3 px-4 dark:hover:bg-primary-50/10 "
                  >
                    <CircleUserRound className=" size-5 " />
                    <span className=" text-[14px] leading-[21px] font-medium ">
                      View Profile
                    </span>
                  </Link>

                  {/*  */}
                  {/* <div className="  flex items-center gap-x-3 text-neutral-50 py-3 px-4 dark:hover:bg-primary-50/10 cursor-pointer ">
                    <Sun className=" size-5 " />

                    <span className=" text-[14px] leading-[21px] font-medium ">
                      Switch To Light mode
                    </span>
                  </div> */}
                  {/*  */}
                  <div
                    className="  flex items-center gap-x-3 text-neutral-50 py-3 px-4 dark:hover:bg-primary-50/10 cursor-pointer "
                    onClick={() => handleLogout()}
                  >
                    <LogOut className=" size-5 " />

                    <span className=" text-[14px] leading-[21px] font-medium ">
                      Log out
                    </span>
                  </div>
                  {/*  */}
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
}

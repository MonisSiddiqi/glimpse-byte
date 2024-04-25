import { createFileRoute, Outlet } from "@tanstack/react-router";
import { BellIcon, Compass, HomeIcon, LogOutIcon, UserCircle2, Users2 } from "lucide-react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { NavLink } from "@/routes/_layout-dashboard/-components/nav-link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import LogoBASF from "@/assets/basf-logo.svg";
import { Search } from "./_layout-dashboard/-components/search";

export const Route = createFileRoute("/_layout-dashboard")({
  component: LayoutDashboard,
});

function LayoutDashboard() {
  return (
    <div className="flex flex-col max-h-screen min-h-screen flex-1 overflow-hidden">
      <div className="flex items-center justify-between bg-white px-5 py-3.5 h-[4.5rem] shadow-xl border-b border-gray-200">
        <div className="flex items-center">
          <img src={LogoBASF} alt="Logo" className="h-12 " />
        </div>

        <div className="mx-auto flex items-center w-96">
          <Search />
        </div>

        <div className="flex items-center gap-2.5">

          <div className="p-2 rounded-full hover:bg-gray-100 duration-300 cursor-pointer">
            <BellIcon className="cursor-pointer w-6 h-6" />
          </div>

          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="flex flex-1 flex-row overflow-hidden shadow">
        <div className="flex min-w-[16rem] max-w-[16rem] flex-1 flex-col bg-white">
          <div className="flex flex-1 flex-col overflow-hidden">
            <ScrollArea>
              <div className="flex flex-col gap-2.5 m-2">
                <NavLink
                  to="/home"
                  name="Home"
                  icon={HomeIcon}
                />
              </div>
              <div className="flex flex-col gap-2.5 m-2">
                <NavLink
                  to="/following"
                  name="Following"
                  icon={Users2}
                />
              </div>
              <div className="flex flex-col gap-2.5 m-2">
                <NavLink
                  to="/explore"
                  name="Explore"
                  icon={Compass}
                />
              </div>
            </ScrollArea>
          </div>

          <div className="flex flex-col gap-2.5 m-2">
            <NavLink to="/profile" name="Profile" icon={UserCircle2} />
            <NavLink to="/" name="Logout" icon={LogOutIcon} />
          </div>
        </div>

        <div className="flex flex-1 flex-col bg-stone-50 overflow-hidden shadow">
          <ScrollArea>
            <Outlet />
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}

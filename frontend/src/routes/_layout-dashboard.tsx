import { createFileRoute, Outlet } from "@tanstack/react-router";

import { ScrollArea } from "@/components/ui/scroll-area";

import { Sidebar } from "./_layout-dashboard/-components/layout/sidebar";
import { Header } from "@/routes/_layout-dashboard/-components/layout/header";

export const Route = createFileRoute("/_layout-dashboard")({
  component: LayoutDashboard,
});

function LayoutDashboard() {
  return (
    <div className="flex flex-col max-h-screen min-h-screen flex-1 overflow-hidden">
      <Header />
      <div className="flex flex-1 flex-row overflow-hidden shadow custom-height">
        <div className="hidden lg:flex">
          <Sidebar />
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

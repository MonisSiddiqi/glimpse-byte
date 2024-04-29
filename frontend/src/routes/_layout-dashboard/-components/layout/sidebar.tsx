import { Compass, HomeIcon, LogOutIcon, UserCircle2, Users2 } from "lucide-react"
import { NavLink } from "@/routes/_layout-dashboard/-components/layout/nav-link";
import { ScrollArea } from "@/components/ui/scroll-area"
import LogoBASF from "@/assets/basf-logo.svg";

export const Sidebar = () => {
    return (
        <div className="min-w-[16rem] max-w-[16rem] h-full flex flex-1 flex-col justify-between border-r border-gray-200">
            <div>
                <div className="border-b border-gray-200 p-2 lg:hidden"><img src={LogoBASF} alt="Logo" className="h-12 m-4" /></div>

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
            </div>
            <div className="flex flex-col gap-2.5 m-2 justify-end">
                <NavLink to="/profile" name="Profile" icon={UserCircle2} />
                <div
                    className="flex font-medium items-center px-3 py-2.5 text-gray-500 duration-300 hover:text-basf-red cursor-pointer"
                >
                    <LogOutIcon className="mr-2 h-6 w-6" /> Logout
                </div>
            </div>
        </div>
    )
}
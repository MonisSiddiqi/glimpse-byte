import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import LogoBASF from "@/assets/basf-logo.svg";
import { Search } from "@/routes/_layout-dashboard/-components/layout/search";
import { BellIcon, MenuIcon } from "lucide-react";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Sidebar } from "./sidebar";
import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";


export const Header = () => {
    const [open, setOpen] = useState<boolean>(false)

    const { location } = useRouterState()
    const pathname = location.pathname

    useEffect(() => {
        setOpen(false)
    }, [pathname])

    return (
        <div className="flex items-center justify-between bg-white px-5 py-3.5 h-[4.5rem] border-b border-gray-200">
            <div className="lg:flex items-center hidden">
                <img src={LogoBASF} alt="Logo" className="h-10 " />
            </div>

            <Sheet open={open} onOpenChange={() => setOpen(!open)}>
                <SheetTrigger onClick={() => setOpen(true)} > <MenuIcon className='lg:hidden' /></SheetTrigger>
                <SheetContent side={"left"} className="w-fit full max-h-full p-0 lg:hidden">
                    <Sidebar />
                </SheetContent>
            </Sheet>


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
    )
}
import { Link, useNavigate } from "@tanstack/react-router"
import { SearchIcon } from "lucide-react"

export const Search = () => {
    const navigate = useNavigate()

    const handleKeyDown = (e: any) => {
        if (e.key === 'Enter') {
            navigate({ to: "/search" });
        }
    };
    return (
        <div className="flex h-11 w-full bg-gray-100 rounded-2xl items-center pl-3 ">
            <input onKeyDown={handleKeyDown} type="text" className="w-full h-full focus:outline-none focus-visible:ring-0 bg-transparent px-2" placeholder="Search..." />
            <Link to='/search' className="rounded-full p-3 cursor-pointer">
                <SearchIcon className="text-gray-400 " />
            </Link>
        </div>
    )
}
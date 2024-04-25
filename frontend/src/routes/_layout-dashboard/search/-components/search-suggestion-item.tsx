import { SearchIcon } from "lucide-react"

export const SearchSuggestionItem = () => {
    return (
        <div className='flex gap-1 text-gray-400 hover:cursor-pointer hover:text-gray-700 duration-300'>
            <SearchIcon className='size-5 min-h-5 min-w-5 mt-[2px]' />
            <div>
                <p>Lorem ipsum dolor sit amet </p>
            </div>
        </div>
    )
}
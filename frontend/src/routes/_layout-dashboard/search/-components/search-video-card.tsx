import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getInitials } from "@/utils/helpers"
import humanFormat from "human-format"
import { HeartIcon } from "lucide-react"

import pageImage from "@/assets/page-2.png"
import image from "@/assets/page-2-thumbnail-3.png"

export const SearchVideoCard = () => {
    return (
        <div className='w-full overflow-hidden flex flex-col gap-2'>
            <img src={image} alt="image" className='w-full object-cover aspect-reel' />
            <div className='flex flex-col w-full gap-1'>
                <p className='text-gray-800 text-lg'>Title</p>
                <p className='text-gray-500'>#lorem #lorem #lorem #lorem</p>
                <div className='w-full flex justify-between items-end'>
                    <div className='flex gap-1 items-center cursor-pointer'>
                        <Avatar>
                            <AvatarImage src={pageImage} />
                            <AvatarFallback>{getInitials("Page Name")}</AvatarFallback>
                        </Avatar>
                        <p className='text-gray-700 line-clamp-2'>Page Name </p>
                    </div>
                    <div className='flex gap-1'>
                        <HeartIcon className='cursor-pointer' />
                        <p className='whitespace-nowrap'>{humanFormat(10000)}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
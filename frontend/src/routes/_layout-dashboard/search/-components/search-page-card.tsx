import humanFormat from 'human-format'
import pageImage from "@/assets/page-2.png"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getInitials } from '@/utils/helpers'
import { Button } from '@/components/ui/button'

export const SearchPageCard = () => {
    return (
        <div className='flex flex-col gap-8 p-6 justify-center items-center border border-gray-200 rounded-sm'>
            <div className='flex justify-center gap-2 flex-col items-center'>
                <p className='text-2xl text-gray-800 w-fit text-center'>Page Name</p>
                <p className='text-xl text-gray-400 w-fit text-center'>{humanFormat(397842)}</p>
            </div>
            <div className='space-y-3'>
                <Avatar className='size-20'>
                    <AvatarImage src={pageImage} />
                    <AvatarFallback>{getInitials("Page Name")}</AvatarFallback>
                </Avatar>
                <Button className='bg-basf-blue hover:bg-basf-blue/80 w-fit'>Follow</Button>
            </div>
        </div>
    )
}
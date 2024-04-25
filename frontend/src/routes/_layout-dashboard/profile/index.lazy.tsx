import { createLazyFileRoute } from '@tanstack/react-router'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import image from '@/assets/page-1-thumbnail-2.png'
import { getInitials } from '@/utils/helpers'
import { VideoCard } from './-components/video-card'
import { Link } from '@tanstack/react-router'



export const Route = createLazyFileRoute('/_layout-dashboard/profile/')({
  component: ProfilePage
})

type User = {
  name: string
  phoneNumber: string
  email: string
}

const user: User = {
  name: "User",
  email: "user@basf.com",
  phoneNumber: "+910000000000"
}

function ProfilePage() {
  return (
    <main className='p-4 bg-white flex flex-col gap-4'>
      <div className='flex gap-2'>
        <Avatar className='size-20'>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
        </Avatar>
        <div className='flex flex-col gap-1'>
          <p className='text-gray-900'>{user.name}</p>
          <p className='text-gray-400'>{user.email}</p>
          <p className='text-gray-400'>{user.phoneNumber}</p>
        </div>
      </div>
      <div className='w-full h-[1px] bg-gray-200'></div>

      <div className='flex'>
        <Link className='px-6 py-3 border-b border-basf-blue text-basf-blue'>
          Save
        </Link>
        <Link className='px-6 py-3 hover:border-b hover:text-basf-blue border-basf-blue'>
          Like
        </Link>
      </div>

      <div className='grid grid-cols-5 gap-4'>
        <VideoCard img={image} views={20000} />
        <VideoCard img={image} views={20000} />
        <VideoCard img={image} views={20000} />
        <VideoCard img={image} views={20000} />
        <VideoCard img={image} views={20000} />
        <VideoCard img={image} views={20000} />
        <VideoCard img={image} views={20000} />
        <VideoCard img={image} views={20000} />
        <VideoCard img={image} views={20000} />
        <VideoCard img={image} views={20000} />
        <VideoCard img={image} views={20000} />
      </div>

    </main>
  )
}
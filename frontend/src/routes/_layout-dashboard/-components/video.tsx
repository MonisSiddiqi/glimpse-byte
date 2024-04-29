import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import PageImage from "@/assets/page-image.png"
import { Button } from "@/components/ui/button"
import ReportSpamVideo from "@/assets/report-spam.mp4"
import { VideoOptionsMenu } from "./video-options"
import { useState } from "react"

export const Video = () => {
    const [option, setOption] = useState<string | null>(null)

    const handleSetOption = (value: string | null) => {
        setOption(value)
    }
    return (
        <div className="custom-height flex justify-center p-2.5 snap-start">
            <div className="h-full flex flex-col shrink-0">
                <div className="flex gap-2 h-[4.5rem]">
                    <div className="w-16 h-16 min-h-16 min-w-16 flex items-center justify-center rounded-full overflow-hidden">
                        <Avatar className="w-full h-full">
                            <AvatarImage src={PageImage} alt="Page Image" className="w-full h-full object-cover" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                    <div>
                        <p className="text-xl text-gray-600">BASF Dubai Page</p>
                        <p className="text-gray-400">22/04/2024</p>
                        <div className="flex flex-1 flex-wrap gap-1 text-gray-400">
                            <p>#education</p>
                            <p>#tips</p>
                            <p>#lorem</p>
                            <p>#lorem</p>
                        </div>
                    </div>
                    <Button className="bg-basf-blue hover:bg-basf-blue/80">
                        Follow
                    </Button>
                </div>
                <div className="flex mt-2 gap-2 custom-height-reel duration-300">
                    <div className="flex aspect-reel relative">
                        <video src={ReportSpamVideo} className="size-full object-contain bg-gray-900" autoPlay muted loop />
                        <div className={`${option !== null && "absolute right-2 bottom-2"} h-full mt-auto`}>
                            <VideoOptionsMenu option={option} setOption={handleSetOption} />
                        </div>
                    </div>

                    <div className={`p-4 custom-height-reel aspect-reel bg-white  ${!option && "hidden"} `}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit iure molestiae enim nesciunt quidem fugiat, amet consequuntur dignissimos minus architecto tempore id voluptatem repellendus eum, veritatis placeat ipsum! Vel explicabo sit, mollitia in dolorum expedita tenetur sint maxime ut nostrum odio quos dolore modi dolores enim assumenda deleniti ad blanditiis commodi ipsam neque. Vel suscipit omnis doloribus excepturi deserunt, eaque modi consequatur porro ipsa voluptatem optio ea minus dolorum fuga. At cumque perferendis optio iste temporibus. Tenetur praesentium, asperiores voluptas illum vitae nesciunt facere in possimus, minus nam consectetur enim blanditiis dolorum facilis reiciendis, sunt placeat repellat. Molestiae, recusandae accusantium!</div>

                </div>
            </div>
        </div>
    )
}
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import PageImage from "@/assets/page-image.png"
import { Button } from "@/components/ui/button"
import ReportSpamVideo from "@/assets/report-spam.mp4"
import { VideoOptionsMenu } from "./video-options"

export const Video = () => {
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
                <div className="flex justify-center mt-2 gap-2 custom-height-reel">
                    <div className="flex justify-center aspect-reel">
                        <video src={ReportSpamVideo} className="size-full object-contain" autoPlay muted loop />
                        <VideoOptionsMenu />
                    </div>
                </div>
            </div>
        </div>
    )
}
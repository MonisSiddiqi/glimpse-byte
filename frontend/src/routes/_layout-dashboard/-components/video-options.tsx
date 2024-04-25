import { AlignLeftIcon, ForwardIcon, HeartIcon, MessageSquareMoreIcon, MessageSquareWarningIcon } from "lucide-react"

export const VideoOptionsMenu = () => {
    return (
        <div className="flex flex-col justify-end gap-3 ml-2">
            <div className="rounded-full p-3 bg-gray-100 hover:bg-gray-200 cursor-pointer">
                <HeartIcon />
            </div>
            <div className="rounded-full p-3 bg-gray-100 hover:bg-gray-200 cursor-pointer">
                <MessageSquareMoreIcon />
            </div>
            <div className="rounded-full p-3 bg-gray-100 hover:bg-gray-200 cursor-pointer">
                <ForwardIcon />
            </div>
            <div className="rounded-full p-3 bg-gray-100 hover:bg-gray-200 cursor-pointer">
                <MessageSquareWarningIcon />
            </div>
            <div className="rounded-full p-3 bg-gray-100 hover:bg-gray-200 cursor-pointer">
                <AlignLeftIcon />
            </div>
        </div>
    )
}
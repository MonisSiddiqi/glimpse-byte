import { AlignLeftIcon, ForwardIcon, HeartIcon, MessageSquareMoreIcon, MessageSquareWarningIcon } from "lucide-react"
import { FC } from "react"

type Props = {
    option: string | null
    setOption: (open: string | null) => void;
}



export const VideoOptionsMenu: FC<Props> = ({ option, setOption }) => {

    const handleClick = (currentOption: string) => {
        if (!option) {
            setOption(currentOption)
        } else {
            setOption(null)
        }
    }

    return (
        <div className={`flex flex-col h-full justify-end gap-3 ml-2`}>
            <div className="rounded-full p-3 bg-gray-100 hover:bg-gray-200 cursor-pointer">
                <HeartIcon />
            </div>
            <div onClick={() => handleClick("comments")} className="rounded-full p-3 bg-gray-100 hover:bg-gray-200 cursor-pointer">
                <MessageSquareMoreIcon />
            </div>
            <div className="rounded-full p-3 bg-gray-100 hover:bg-gray-200 cursor-pointer">
                <ForwardIcon />
            </div>
            <div className="rounded-full p-3 bg-gray-100 hover:bg-gray-200 cursor-pointer">
                <MessageSquareWarningIcon />
            </div>
            <div onClick={() => handleClick("description")} className="rounded-full p-3 bg-gray-100 hover:bg-gray-200 cursor-pointer">
                <AlignLeftIcon />
            </div>
        </div>
    )
}
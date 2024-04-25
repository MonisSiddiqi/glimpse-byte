import { FC } from "react";

type Props = {
    name: string
}
export const CategoryTag: FC<Props> = ({ name }) => {
    return (
        <div className="flex gap-1 px-4 py-4 items-center rounded-3xl border border-gray-200 cursor-pointer w-fit">
            {name}
        </div>
    )
}
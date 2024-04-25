import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

type Category = {
    id: string
    name: string
}
const categories: Category[] = [
    {
        id: '2',
        name: "Business"
    },
    {
        id: '3',
        name: "Education"
    },
    {
        id: '4',
        name: "Business"
    },
    {
        id: '5',
        name: "Education"
    }
]

export const CategoryContainer = () => {
    return (
        <main className=" w-full h-full">
            <ScrollArea className="flex">
                <div className="flex gap-2">
                    <div className="cursor-pointer px-4 py-2 rounded-sm bg-basf-light-blue">
                        <p className="text-white">All Categories</p>
                    </div>
                    {categories.map(({ id, name }) => {
                        return (
                            <div key={id} className="cursor-pointer px-4 py-2 border border-gray-200 rounded-sm ">
                                <p className="text-gray-500">{name}</p>
                            </div>
                        )
                    })}
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </main>

    )
}
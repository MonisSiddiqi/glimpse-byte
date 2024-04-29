type Thumbnail = {
    thumbnail: string
}

type FollowingPageData = {
    id: string;
    name: string;
    views: number;
    description: string;
    thumbnails: Thumbnail[]
}

import p1t1 from "@/assets/page-1-thumbnail-1.png"
import p1t2 from "@/assets/page-1-thumbnail-2.png"
import p1t3 from "@/assets/page-1-thumbnail-3.png"

import p2t1 from "@/assets/page-2-thumbnail-1.png"
import p2t2 from "@/assets/page-2-thumbnail-2.png"
import p2t3 from "@/assets/page-2-thumbnail-3.png"

import p3t1 from "@/assets/page-3-thumbnail-1.png"
import p3t2 from "@/assets/page-3-thumbnail-2.png"
import p3t3 from "@/assets/page-3-thumbnail-3.png"

export const followingPageData: FollowingPageData[] = [{
    id: '1',
    name: "Page",
    views: 20000,
    description: "Lorem lorem lorem lorem lorem",
    thumbnails: [{ thumbnail: p1t1 }, { thumbnail: p1t2 }, { thumbnail: p1t3 }]
}, {
    id: '2',
    name: "Page",
    views: 20000,
    description: "Lorem lorem lorem lorem lorem",
    thumbnails: [{ thumbnail: p2t1 }, { thumbnail: p2t2 }, { thumbnail: p2t3 }]
}, {
    id: '3',
    name: "Page",
    views: 20000,
    description: "Lorem lorem lorem lorem lorem",
    thumbnails: [{ thumbnail: p3t1 }, { thumbnail: p3t2 }, { thumbnail: p3t3 }]
}, {
    id: '4',
    name: "Page",
    views: 20000,
    description: "Lorem lorem lorem lorem lorem",
    thumbnails: [{ thumbnail: p1t1 }, { thumbnail: p1t2 }, { thumbnail: p1t3 }]
}, {
    id: '5',
    name: "Page",
    views: 20000,
    description: "Lorem lorem lorem lorem lorem",
    thumbnails: [{ thumbnail: p2t1 }, { thumbnail: p2t2 }, { thumbnail: p2t3 }]
}]
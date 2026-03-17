import { ArrowUpRight, MessageCircleMore, Star, User2, Heart } from "lucide-react";

export const activityBarCardData = [
    {
        id: 0,
        icon: <User2 className="size-5 text-primary" />,
        heading: "Followed by",
        text: "@SarahAnimates, @MotionMike, and 23 others",
        time: "this week"
    },
    {
        id: 1,
        icon: <Heart className="size-5 text-primary" />,
        heading: "Liked",
        text: '"Character Walk Cycle Tutorial" by @AnimationAcademy',
        time: "2 days ago"
    },
    {
        id: 2,
        icon: <MessageCircleMore className="size-5 text-primary" />,
        heading: "Commented on",
        text: '"Fluid Transitions Breakdown" by @JenMotion',
        comment: '"Love the easing on that bounce! Mind sharing your graph editor settings?"',
        time: "3 days ago"
    },
    {
        id: 3,
        icon: <ArrowUpRight className="size-5 text-primary" />,
        heading: "Shared",
        text: '"Best Explainer Video Practices 2025" to their collection',
        time: "5 days ago"
    },
    {
        id: 4,
        icon: <Star className="size-5 text-primary" />,
        heading: "Added to Favorite",
        text: '"Kinetic Typography Masterclass" by @TypeInMotion',
        time: "1 week ago"
    },
]
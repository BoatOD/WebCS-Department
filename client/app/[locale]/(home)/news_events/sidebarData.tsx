import { SidebarProps } from "@/types/sidebar";

export const sidebarItem: SidebarProps[] = [
    {
        content: "NEWS & EVENTS",
        type: "header",
    },
    {
        content: "News",
        href: "/news_events/news",
        type: "singleItem",
    },
    {
        content: "Events",
        href: "/news_events/events",
        type: "singleItem",
    },
];
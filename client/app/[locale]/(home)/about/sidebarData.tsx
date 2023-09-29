import { SidebarProps } from "@/types/sidebar";

export const sidebarItem: SidebarProps[] = [
    {
        content: "ABOUT",
        type: "header",

    },
    {
        content: "Vision",
        href: "/about/vision",
        type: "singleItem",
    },
    {
        content: "Departmental History",
        href: "/about/history",
        type: "singleItem",
    },
    {
        content: "Maps and Direction",
        href: "/about/maps",
        type: "singleItem",
    },
    
];
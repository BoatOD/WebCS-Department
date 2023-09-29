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
        href: "/about/departmental",
        type: "singleItem",
    },
    {
        content: "Maps And Direction",
        href: "/about/maps",
        type: "singleItem",
    },
    
];
import { SidebarProps } from "@/types/sidebar";

export const sidebarItem: SidebarProps[] = [
    {
        content: "UNDERGRADUATE PROGRAMS",
        type: "header",
        href: "/academics/undergraduate",
    },
    {
        content: "Courses",
        href: "/academics/undergraduate/courses",
        type: "singleItem",
    },
    {
        content: "Undergraduate 64+",
        type: "multiItem",
        SidebarOption: [
            {
                title: "Study Plans",
                href: "/academics/undergraduate/undergraduate64+/study_plans",
                type: "NotHave",
            },
            {
                title: "Required Courses",
                href: "#",
                type: "NotHave",
            },
            {
                title: "Core Courses",
                href: "#",
                type: "NotHave",
            },
            {
                title: "Elective Courses",
                type: "Have",
                SideBarSubOption: [
                    {
                        title: "Free Elective Courses",
                        href: "#",
                    },
                    {
                        title: "GE Elective Courses",
                        href: "#",
                    },
                    {
                        title: "Major Elective Courses",
                        href: "#",
                    },
                ],
            },
            {
                title: "Compulsory Courses",
                type: "Have",
                SideBarSubOption: [
                    {
                        title: "Organization Issues and Information System",
                        href: "#",
                    },
                    {
                        title: "Technology for Application",
                        href: "#",
                    },
                    {
                        title: "Technology and System Methodology",
                        href: "#",
                    },
                    {
                        title: "System of Fundamental Structure",
                        href: "#",
                    },
                    {
                        title: "Hardware and Computer Architecture",
                        href: "#",
                    },
                ],
            },
            {
                title: "Plan-Specific Compulsory Courses",
                type: "Have",
                SideBarSubOption: [
                    {
                        title: "Regular Plan",
                        href: "#",
                    },
                    {
                        title: "Co-Operative Education Plan",
                        href: "#",
                    },
                    {
                        title: "Honors Plan",
                        href: "#",
                    },
                ],
            },
        ],
    },
    {
        content: "Undergraduate 59(63)",
        type: "multiItem",
        SidebarOption: [
            {
                title: "Study Plan",
                href: "#",
            },
            {
                title: "Required Courses",
                href: "#",
            },
            {
                title: "Core Courses",
                href: "#",
            },
            {
                title: "Elective Courses",
                type: "Have",
                SideBarSubOption: [
                    {
                        title: "Free Elective Courses",
                        href: "#",
                    },
                    {
                        title: "GE Elective Courses",
                        href: "#",
                    },
                    {
                        title: "Major Elective Courses",
                        href: "#",
                    },
                ],
            },
            {
                title: "Compulsory Courses",
                type: "Have",
                SideBarSubOption: [
                    {
                        title: "Organization Issues and Information System",
                        href: "#",
                    },
                    {
                        title: "Technology for Application",
                        href: "#",
                    },
                    {
                        title: "Technology and System Methodology",
                        href: "#",
                    },
                    {
                        title: "System of Fundamental Structure",
                        href: "#",
                    },
                    {
                        title: "Hardware and Computer Architecture",
                        href: "#",
                    },
                ],
            },
            {
                title: "Plan-Specific Compulsory Courses",
                type: "Have",
                SideBarSubOption: [
                    {
                        title: "Regular Plan",
                        href: "#",
                    },
                    {
                        title: "Co-Operative Education Plan",
                        href: "#",
                    },
                    {
                        title: "Honors Plan",
                        href: "#",
                    },
                ],
            },
        ],
    },
    {
        content: "Student Portal",
        type: "multiItem",
        SidebarOption: [
            {
                title: "Score Report",
                href: "#",
                type: "NotHave",
            },
            {
                title: "Assignment Submission",
                href: "#",
                type: "NotHave",
            },
            {
                title: "Student Research",
                href: "#",
                type: "NotHave",
            },
            {
                title: "Phone Number",
                href: "#",
                type: "NotHave",
            },
            {
                title: "Line Chat Bot",
                href: "#",
                type: "NotHave",
            },
        ],
    },
];
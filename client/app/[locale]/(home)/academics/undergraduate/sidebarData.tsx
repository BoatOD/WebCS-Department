import { SidebarProps } from "@/types/sidebar";

export const sidebarItem: SidebarProps[] = [
    {
        content: "UNDERGRADUATE",
        type: "header",
        href: "/academics/undergraduate",
    },
    {
        content: "Courses",
        href: "/academics/undergraduate/courses",
        type: "singleItem",
    },
    {
        content: "Undergraduate 64",
        type: "multiItem",
        SidebarOption: [
            {
                title: "Study Plans",
                href: "/academics/undergraduate/undergraduate64/study_plans",
                type: "NotHave",
            },
            {
                title: "Required Courses",
                href: "/academics/undergraduate/undergraduate64/required_courses",
                type: "NotHave",
            },
            {
                title: "Core Courses",
                href: "/academics/undergraduate/undergraduate64/core_course",
                type: "NotHave",
            },
            {
                title: "Elective Courses",
                type: "Have",
                SideBarSubOption: [
                    {
                        title: "Free Elective Courses",
                        href: "/academics/undergraduate/undergraduate64/elective_courses#fe",
                    },
                    {
                        title: "GE Elective Courses",
                        href: "/academics/undergraduate/undergraduate64/elective_courses#ge",
                    },
                    {
                        title: "Major Elective Courses",
                        href: "/academics/undergraduate/undergraduate64/elective_courses#me",
                    },
                ],
            },
            {
                title: "Compulsory Courses",
                type: "Have",
                SideBarSubOption: [
                    {
                        title: "Organization Issues and Information System",
                        href: "/academics/undergraduate/undergraduate64/compulsory_courses#oi",
                    },
                    {
                        title: "Technology for Application",
                        href: "/academics/undergraduate/undergraduate64/compulsory_courses#ta",
                    },
                    {
                        title: "Technology and System Methodology",
                        href: "/academics/undergraduate/undergraduate64/compulsory_courses#ts",
                    },
                    {
                        title: "System of Fundamental Structure",
                        href: "/academics/undergraduate/undergraduate64/compulsory_courses#sf",
                    },
                    {
                        title: "Hardware and Computer Architecture",
                        href: "/academics/undergraduate/undergraduate64/compulsory_courses#hc",
                    },
                ],
            },
            {
                title: "Plan-Specific Compulsory Courses",
                type: "Have",
                SideBarSubOption: [
                    {
                        title: "Regular Plan",
                        href: "/academics/undergraduate/undergraduate64/plan_specific_compulsory_courses#rp",
                    },
                    {
                        title: "Co-Operative Education Plan",
                        href: "/academics/undergraduate/undergraduate64/plan_specific_compulsory_courses#co",
                    },
                    {
                        title: "Honors Plan",
                        href: "/academics/undergraduate/undergraduate64/plan_specific_compulsory_courses#hp",
                    },
                ],
            },
            {
                title: "Minor Courses",
                href: "/academics/undergraduate/undergraduate64/minor_courses",
                type: "NotHave",
            },
        ],
    },
    {
        content: "Undergraduate 59(63)",
        type: "multiItem",
        SidebarOption: [
            {
                title: "Study Plans",
                href: "/academics/undergraduate/undergraduate63#sp",
            },
            {
                title: "Required Courses",
                href: "/academics/undergraduate/undergraduate63#rc",
            },
            {
                title: "Core Courses",
                href: "/academics/undergraduate/undergraduate63#cc",
            },
            {
                title: "Elective Courses",
                type: "Have",
                SideBarSubOption: [
                    {
                        title: "Free Elective Courses",
                        href: "/academics/undergraduate/undergraduate63#fe",
                    },
                    {
                        title: "GE Elective Courses",
                        href: "/academics/undergraduate/undergraduate63#ge",
                    },
                    {
                        title: "Major Elective Courses",
                        href: "/academics/undergraduate/undergraduate63#me",
                    },
                ],
            },
            {
                title: "Compulsory Courses",
                type: "Have",
                SideBarSubOption: [
                    {
                        title: "Organization Issues and Information System",
                        href: "/academics/undergraduate/undergraduate63#oi",
                    },
                    {
                        title: "Technology for Application",
                        href: "/academics/undergraduate/undergraduate63#ta",
                    },
                    {
                        title: "Technology and System Methodology",
                        href: "/academics/undergraduate/undergraduate63#ts",
                    },
                    {
                        title: "System of Fundamental Structure",
                        href: "/academics/undergraduate/undergraduate63#sf",
                    },
                    {
                        title: "Hardware and Computer Architecture",
                        href: "/academics/undergraduate/undergraduate63#hc",
                    },
                ],
            },
            {
                title: "Plan-Specific Compulsory Courses",
                type: "Have",
                SideBarSubOption: [
                    {
                        title: "Regular Plan",
                        href: "/academics/undergraduate/undergraduate63#rp",
                    },
                    {
                        title: "Co-Operative Education Plan",
                        href: "/academics/undergraduate/undergraduate63#co",
                    },
                ],
            },
            {
                title: "Minor Courses",
                href: "/academics/undergraduate/undergraduate63#mc",
                type: "NotHave",
            },
        ],
    },
    {
        content: "Student Portal",
        type: "multiItem",
        SidebarOption: [
            {
                title: "Score Report",
                href: "https://score.cs.science.cmu.ac.th/",
                type: "NotHave",
                target: "_blank",
            },
            {
                title: "Assignment Submission",
                href: "http://hw.cs.science.cmu.ac.th/",
                type: "NotHave",
                target: "_blank",
            },
            {
                title: "Student Research",
                href: "http://rsdb.cs.science.cmu.ac.th/",
                type: "NotHave",
                target: "_blank",
            },
            {
                title: "Phone Number",
                href: "https://www2.cs.science.cmu.ac.th/cmucontact/",
                type: "NotHave",
                target: "_blank",
            },
            {
                title: "Line Chat Bot",
                href: "https://line.me/R/ti/p/%40355avaex",
                type: "NotHave",
                target: "_blank",
            },
        ],
    },
];
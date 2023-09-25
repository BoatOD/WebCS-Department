import { SidebarProps } from "@/types/sidebar";

export const sidebarItem: SidebarProps[] = [
    {
        content: "LIFELONG EDUCATION",
        type: "header",
        href: "/academics/lifelong_education",
    },
    {
        content: "Intelligent Data Analysis Course",
        type: "multiItem",
        href: "/academics/lifelong_education/intelligent",
        SidebarOption: [
            {
                title: "Course 1",
                href: "/academics/lifelong_education/intelligent/course1",
                type: "NotHave",
            },
            {
                title: "Course 2",
                href: "/academics/lifelong_education/intelligent/course2",
                type: "NotHave",
            },
            {
                title: "Course 3",
                href: "/academics/lifelong_education/intelligent/course3",
                type: "NotHave",
            },
            {
                title: "Course 4",
                href: "/academics/lifelong_education/intelligent/course4",
                type: "NotHave",
            },
            {
                title: "Course 5",
                href: "/academics/lifelong_education/intelligent/course5",
                type: "NotHave",
            },
            {
                title: "Course 6",
                href: "/academics/lifelong_education/intelligent/course6",
                type: "NotHave",
            },
            {
                title: "Course 7",
                href: "/academics/lifelong_education/intelligent/course7",
                type: "NotHave",
            },
        ]
    },
    {
        content: "Cryptocurrency Training Course",
        type: "multiItem",
        href: "/academics/lifelong_education/cryptocurrency",
        SidebarOption: [
            {
                title: "Course 1: Basics of Cryptocurrency",
                href: "/academics/lifelong_education/cryptocurrency/course1",
                type: "NotHave",
            },
            {
                title: "Course 2: Robot Trading",
                href: "/academics/lifelong_education/cryptocurrency/course2",
                type: "NotHave",
            },
            {
                title: "Course 3: Crypto Investment Tips",
                href: "/academics/lifelong_education/cryptocurrency/course3",
                type: "NotHave",
            },
        ]
    },
];
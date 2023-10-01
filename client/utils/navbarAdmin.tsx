import { navbar } from "@/types/navbar";

export const navItemsAdmin: navbar[] = [
  {
    title: "PEOPLE",
    type: "dropdown",
    options: [
      {
        title: "View",
        href: "/admin/people-crud",
      },
      {
        title: "Add",
        href: "/admin/people-crud/addpeople",
      },
      
    ],
  },
  {
    title: "BLOG",
    type: "dropdown",
    options: [
      {
        title: "View",
        href: "/admin/blog/news-edit",
      },
      {
        title: "Add",
        href: "/admin/blog/news-edit/[id]",
      },
    ],
  },
];

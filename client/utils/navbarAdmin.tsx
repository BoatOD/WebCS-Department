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
        href: "/admin/people-crud/people",
      },
      
    ],
  },
  {
    title: "BLOG",
    type: "dropdown",
    options: [
      {
        title: "News",
        href: "/admin/blog/news-edit",
      },
      {
        title: "Event",
        href: "/admin/blog/events-edit",
      },
    ],
  },
];

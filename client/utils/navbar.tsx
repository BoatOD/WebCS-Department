import { navbar } from "@/types/navbar";

export const navItems: navbar[] = [
  {
    title: "ACADEMICS",
    type: "dropdown",
    options: [
      {
        title: "Undergraduate",
        href: "/academics/undergraduate",
      },
      {
        title: "Master",
        href: "/program/phd",
      },
      {
        title: "Doctoral",
        href: "/program/phd",
      },
      {
        title: "Lifelong Education",
        href: "/academics/lifelong_education",
      }
      ,
      {
        title: "Non Degree",
        href: "/academics/nondegree",
      }
    ],
  },
  {
    title: "RESEARCH",
    type: "dropdown",
    options: [
      {
        title: "Augmented/ Virtual Reality",
        href: "/courses/master-degree-course",
      },
      {
        title: "Bioinformatics",
        href: "/courses/phd-course",
      },
      {
        title: "Blockchain",
        href: "/courses/phd-course",
      },
      {
        title: "Computational Astronomy",
        href: "/courses/phd-course",
      },
      {
        title: "Computer Vision",
        href: "/courses/phd-course",
      },
      {
        title: "Health Informatics",
        href: "/courses/phd-course",
      },
      {
        title: "Human Computer Interaction",
        href: "/courses/phd-course",
      },
      {
        title: "Machine Learning",
        href: "/courses/phd-course",
      },
      {
        title: "Medical Informatics",
        href: "/courses/phd-course",
      },
      {
        title: "Next Generation Computer Network",
        href: "/courses/phd-course",
      }
    ],
  },
  {
    title: "PEOPLE",
    type: "dropdown",
    options: [
      {
        title: "Lecturers",
        href: "/courses/master-degree-course",
      },
      {
        title: "Staffs",
        href: "/courses/phd-course",
      }
    ],
  },
  {
    title: "NEWS & EVENTS",
    type: "dropdown",
    options: [
      {
        title: "News",
        href: "/announcement",
      },
      {
        title: "Events",
        href: "/congratulations",
      }
    ],
  },
  {
    title: "ABOUT",
    type: "dropdown",
    options: [
      {
        title: "Departmental History",
        href: "/staff/academic",
      },
      {
        title: "Employment & Jobs",
        href: "/staff/supporting-staff",
      },
      {
        title: "Maps And Directions",
        href: "/staff/supporting-staff",
      },
      {
        title: "Contacts",
        href: "/staff/supporting-staff",
      },
    ],
  },
  {
    title: "FAQs",
    type: "button",
    href: "/faqs"
},
];

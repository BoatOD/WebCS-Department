export type Option2 = {
  title?: string;
  href?: string;
};

export type Option1 = {
  type?: "Have" | "NotHave"; 
  title?: string;
  href?: string;
  SideBarSubOption?: Array<Option2>;
};

export type SidebarProps = {
  type: "header" | "singleItem" | "multiItem"; 
  href?: string;
  content?: string;
  SidebarOption?: Array<Option1>;
};

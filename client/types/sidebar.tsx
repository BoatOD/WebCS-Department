export type Option2 = {
  title?: string;
  href?: string;
  target?: string;
};

export type Option1 = {
  type?: "Have" | "NotHave"; 
  title?: string;
  href?: string;
  SideBarSubOption?: Array<Option2>;
  target?: string;
};

export type SidebarProps = {
  type: "header" | "singleItem" | "multiItem"; 
  href?: string;
  content?: string;
  SidebarOption?: Array<Option1>;
  target?: string;
};

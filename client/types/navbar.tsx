export type navbarOption = {
    title: string,
    href: string
}

export type navbar = {
    title: string,
    href?: string,
    type: "button" | "dropdown",
    options?: Array<navbarOption>
}
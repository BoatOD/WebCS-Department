"use client";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Switch,
  Listbox,
  ListboxItem,
  Input,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { navItems } from "@/utils/navbar";

type Props = {};

const NavbarHeader = (props: Props) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <Navbar
        className="md:py-5"
        maxWidth="2xl"
        aria-label="navbar"
        height="3.5rem"
      >
        <NavbarContent justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden"
          />
          <NavbarBrand className="justify-start">
            <Image
              className="hidden md:block"
              src={"/cs-cmu-logo.svg"}
              alt="Logo CSCMU"
              width="90"
              height="90"
            />
            <div>
              <h2 className="font-semibold text-base md:text-xl">
                Department of
              </h2>
              <h2 className="font-semibold text-base md:text-xl">
                Computer science
              </h2>
            </div>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className=" hidden md:flex pl-5" justify="end">
          <div className="w-50 mr-8">
            <Input
              label="Search"
              isClearable
              classNames={{
                innerWrapper: "bg-transparent",
                inputWrapper: [
                  "group-data-[focus=true]:bg-[#F29D35]/80",
                  "data-[hover=true]:bg-[#F29D35]/90",
                  "shadow-xl",
                  "bg-[#F29D35]",
                  "dark:bg-[#F29D35]",
                  "backdrop-blur-xl",
                  "backdrop-saturate-200",
                  "hover:bg-[#F29D35]",
                  "dark:hover:bg-[#F29D35]",
                  "group-data-[focused=true]:bg-[#F29D35]",
                  "dark:group-data-[focused=true]:bg-[#F29D35]",
                  "!cursor-text",
                ],
              }}
            />
          </div>
        </NavbarContent>
        <NavbarMenu className="uppercase bg-[#F4F4F4] gap-0">
          {navItems.map((item, index) =>
            item.type === "dropdown" ? (
              <NavbarMenuItem className="text-primary" key={item.title}>
                <h4 className="text-black">{item.title}</h4>
                <Listbox
                  aria-label={`${item.title} list`}
                  color="primary"
                  variant="flat"
                >
                  {item.options ? (
                    item.options.map((value, index) => (
                      <ListboxItem
                        className="p-1"
                        key={value.title}
                        onPress={() => router.push(value.href ?? "#")}
                      >
                        {value.title}
                      </ListboxItem>
                    ))
                  ) : (
                    <></>
                  )}
                </Listbox>
              </NavbarMenuItem>
            ) : (
              

              <NavbarMenuItem key={item.title}>
                <Link
                  className="w-full text-black"
                  href={item.href ?? "#"}
                  size="lg"
                >
                  {item.title}
                </Link>
              </NavbarMenuItem>
            )
          )}
          <div className="w-30 pt-3">
            <Input
              label="Search"
              isClearable
              classNames={{
                innerWrapper: "bg-transparent",
                inputWrapper: [
                  "group-data-[focus=true]:bg-[#F29D35]/80",
                  "data-[hover=true]:bg-[#F29D35]/90",
                  "shadow-xl",
                  "bg-[#F29D35]",
                  "dark:bg-[#F29D35]",
                  "backdrop-blur-xl",
                  "backdrop-saturate-200",
                  "hover:bg-[#F29D35]",
                  "dark:hover:bg-[#F29D35]",
                  "group-data-[focused=true]:bg-[#F29D35]",
                  "dark:group-data-[focused=true]:bg-[#F29D35]",
                  "!cursor-text",
                ],
              }}
            />
          </div>
        </NavbarMenu>
      </Navbar>
      <Navbar
        className="bg-[#F4F4F4] py-2 hidden md:flex"
        height="2.5rem"
        maxWidth="2xl"
        aria-label="navbar"
      >
        <NavbarContent className="hidden md:flex gap-0 px-3" justify="end">
          {navItems.map((item, index) =>
            item.type === "dropdown" ? (
              <Dropdown key={item.title}>
                <NavbarItem>
                  <DropdownTrigger>
                    <Button
                      // disableRipple
                      className="px-2 py-0.5 bg-transparent data-[hover=true]:bg-[#e8e8e8] text-sm font-medium uppercase"
                      endContent={<ChevronDownIcon className="w-5 h-5" />}
                      radius="sm"
                      variant="light"
                    >
                      {item.title}
                    </Button>
                  </DropdownTrigger>
                </NavbarItem>
                <DropdownMenu
                  className="w-full"
                  itemClasses={{
                    base: "gap-4",
                  }}
                >
                  {item.options ? (
                    item.options?.map((value, index) => (
                      <DropdownItem
                        className="capitalize"
                        key={value.title}
                        aria-label={value.title}
                        onPress={() => router.push(value.href ?? "#")}
                      >
                        {value.title}
                      </DropdownItem>
                    ))
                  ) : (
                    <></>
                  )}
                </DropdownMenu>
              </Dropdown>
            ) : (
              <NavbarItem key={item.title}>
                <Link
                  className="text-sm font-medium uppercase"
                  color="foreground"
                  href={item.href ?? "#"}
                  aria-label={item.title}
                >
                  <Button
                    className="px-2 py-0.5 bg-transparent data-[hover=true]:bg-[#e8e8e8] text-sm font-medium uppercase"
                    radius="sm"
                    variant="light"
                  >
                    {item.title}
                  </Button>
                </Link>
              </NavbarItem>
            )
          )}
        </NavbarContent>
        
      </Navbar>
    </>
  );
};

export default NavbarHeader;

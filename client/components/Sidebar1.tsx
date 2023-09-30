"use client";
import { useCallback } from "react";
// import { sidebarItem } from "@/utils/sidebar";
import { CustomFlowbiteTheme, Sidebar } from "flowbite-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SidebarProps } from "@/types/sidebar";
import { useTranslations } from "next-intl";

type Props = {};

const Sidebar1 = ({ sidebarItem }: { sidebarItem: SidebarProps[] }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;
  const s = useTranslations("Sidebar")

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const customTheme: CustomFlowbiteTheme["sidebar"] = {
    root: {
      inner: "bg-orange",
    },
    collapse: {
      button: "text-2xl",
    },
  };
  
  return (
    <>
      <Sidebar theme={customTheme} className="w-full">
        <Sidebar.Items className=" p-0">
          <Sidebar.ItemGroup className="p-0">
            {sidebarItem.map((item, index) =>
              item.type === "header" ? (
                <>
                  <Sidebar.Item
                    className="text-lg font-bold hover:bg-transparent"
                    onClick={() => {
                      router.push(
                        pathname +
                        "?" +
                        createQueryString("page", item.content ?? "#")
                      );
                    }}
                    key={s(item.content)}
                  >
                    <h1 className="font-bold">{s(item.content)}</h1>
                  </Sidebar.Item>

                  <div className="border-b border-black border-3 my-2"></div>
                </>
              ) : item.type === "singleItem" ? (
                <>
                  <Sidebar.Item className="hover:bg-[#e8e8e8]" target={s(item.target)} href={s(item.href)} key={s(item.content)}>
                    <p>{s(item.content)}</p>
                  </Sidebar.Item>

                  <div className="border-b border-black my-2"></div>
                </>
              ) : item.type === "multiItem" ? (
                <>
                  <Sidebar.Collapse className="hover:bg-[#e8e8e8]"
                    label={s(item.content)} key={s(item.content)}
                  >
                    {item.SidebarOption? (
                      item.SidebarOption.map((value, index) =>
                        value.type === "Have" ? (
                          <>
                            <div className="ml-5">
                              <Sidebar.Collapse className="hover:bg-[#e8e8e8]" label={s(value.title)}>
                                {value.SideBarSubOption?.map(
                                  (value2, index) => (
                                    <>
                                      <Sidebar.Item className="hover:bg-[#e8e8e8]" target={s(value2.target)} href={s(value2.href)}>
                                        <div className="ml-2">
                                          {s(value2.title)}
                                        </div>
                                      </Sidebar.Item>
                                    </>
                                  )
                                )}
                              </Sidebar.Collapse>
                            </div>
                          </>
                        ) : (
                          <>
                            <Sidebar.Item className="hover:bg-[#e8e8e8]" target={s(value.target)} href={s(value.href)}>{s(value.title)}</Sidebar.Item>
                          </>
                        )
                      )
                    ) : (
                      <></>
                    )}
                  </Sidebar.Collapse>
                  <div className="border-b border-black my-2"></div>
                </>
              ) : (
                <></>
              )
            )}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
};

export default Sidebar1;

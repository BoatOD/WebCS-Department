"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const i18n = {
    locales: ["en", "th"],
  } as const;

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    let segments = pathName.split("/");

    if (i18n.locales.includes(segments[1] as "en" | "th")) {
      segments[1] = locale;
    } else {
      segments.splice(1, 0, locale);
    }

    return segments.join("/");
  };

  return (
    <>
      <ul className="flex gap-x-3">
        {i18n.locales.map((locale, index) => {
          return (
            <li key={locale}>
              <Link
                href={redirectedPathName(locale)}
                className="rounded-md border bg-black px-3 py-2 text-white"
              >
                {locale}
              </Link>
            </li>
          );
        })} 
      </ul>
    </>
  );
}

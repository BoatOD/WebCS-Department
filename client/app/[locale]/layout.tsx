import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";

import React from "react"; // Import React for StrictMode
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "th" }];
}

export const metadata: Metadata = {
  title: "Computer Science CMU",
  description: "Computer Science CMU",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: any;
}) {
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <React.StrictMode>
      <html lang={locale}>
        <body className="font-kanit">
          <Providers>
            <NextIntlClientProvider locale={locale} messages={messages}>
              
              <div className="content">{children}</div>
          
            </NextIntlClientProvider>
          </Providers>
        </body>
      </html>
    </React.StrictMode>
  );
}

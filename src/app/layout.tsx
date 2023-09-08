import "./globals.css";
import { repositoryName } from "../prismicio";
import { PrismicPreview } from "@prismicio/next";
import { getPrismicData } from "@utils";
import { Header } from "@ui";
import { Karla } from "next/font/google";
import { Metadata } from "next";

export const metadata: Metadata = {
  // default values
  // to be overriden when page.tsx fetches content from Prismic
  title: "Ideal Cover",
  description:
    "Secure your financial future with Ideal Cover. Offering personalised service for income protection, life insurance, TPD and trauma cover. Get your free quote today!",
};

const karla = Karla({
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menu = await getPrismicData("menu");
  return (
    <html lang="en" className={karla.className}>
      <body className="container mx-auto max-w-7xl">
        <Header
          menuItems={menu.data.menu_items.map(
            (item: { label: string; link: { url: any } }) => ({
              label: item.label,
              url: item.link.url,
            })
          )}
          phoneCTA={menu.data.phone_cta}
          phoneLabel={menu.data.phone_label}
          phoneNumber={menu.data.phone_number}
          ctaLabel={menu.data.cta_label}
        />
        <main className="">{children}</main>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}

import "./globals.css";
import { repositoryName } from "../prismicio";
import { PrismicPreview } from "@prismicio/next";
import { getPrismicSingle } from "@utils";
import { Footer, Header } from "@ui";
import { Karla } from "next/font/google";
import { Metadata } from "next";
import { menuItem, socialItem } from "@/types";
import GoogleTagManager from "@magicul/next-google-tag-manager";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Suspense } from "react";

export const metadata: Metadata = {
  // default values
  // to be overriden when page.tsx fetches content from Prismic
  title: "Ideal Cover",
  description:
    "Secure your financial future with Ideal Cover. Offering personalised service for income protection, life insurance, TPD and trauma cover. Get your free quote today!",
  metadataBase: new URL("https://idealcover.com.au/"),
};

const karla = Karla({
  subsets: ["latin"],
  display: "swap",
});

function Fallback() {
  return <span className="sr-only">Loading...</span>;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menu = await getPrismicSingle("menu");
  const footer = await getPrismicSingle("footer");
  const menuItems: menuItem[] = menu.data.menu_items.map(
    (item: { label: string; link: { url: string } }) => ({
      label: item.label,
      url: item.link.url,
    })
  );
  const footerMenuItems: menuItem[] = footer.data.additional_links.map(
    (item: { label: string; link: { url: string } }) => ({
      label: item.label,
      url: item.link.url,
    })
  );
  const socialItems: socialItem[] = footer.data.socials.map(
    (item: { platform: string; link: any }) => ({
      platform: item.platform,
      link: item.link,
    })
  );

  return (
    <html lang="en" className={karla.className}>
      <body className="min-w-full">
        <Suspense fallback={<Fallback />}>
          <GoogleTagManager id="GTM-5TNBWZ66" />
        </Suspense>
        <div className="max-w-7xl container mx-auto">
          <Header
            menuItems={menuItems}
            phoneCTA={menu.data.phone_cta}
            phoneLabel={"(02) 7801 6639"}
            phoneNumber={"0278016639"}
            ctaLabel={menu.data.cta_label}
          />
          <main>{children}</main>
          <footer>
            <Footer
              menuItems={menuItems}
              footerMenuItems={footerMenuItems}
              socialItems={socialItems}
              text={footer.data.text}
              copyright={footer.data.copyright}
            />
          </footer>
        </div>
        <Suspense fallback={<Fallback />}>
          <Analytics />
          <SpeedInsights />
        </Suspense>
        <Suspense fallback={<Fallback />}>
          <PrismicPreview repositoryName={repositoryName} />
        </Suspense>
      </body>
    </html>
  );
}

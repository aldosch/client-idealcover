import { Metadata } from "next";
import { getPrismicSingle } from "@utils";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
import { Hero } from "@ui";

const page = await getPrismicSingle("home");

export const metadata: Metadata = {
  title: page.data.meta_title,
  description: page.data.meta_description,
  openGraph: {
    images: [page.data.meta_image.url],
  },
};

export default async function Page() {
  return (
    <>
      <Hero
        title={page.data.title}
        subTitle={page.data.subtitle}
        callToAction={page.data.call_to_action}
        image={page.data.image}
      />
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}

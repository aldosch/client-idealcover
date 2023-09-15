import { SliceZone } from "@prismicio/react";
import { components } from "../../slices";
import { PrismicRichText } from "@prismicio/react";
import { Hero, QuoteForm } from "@ui";
import { getPrismicSingle } from "@utils";

const page = await getPrismicSingle("pds");

export default async function Page() {
  return (
    <>
      <section className="flex flex-col max-w-3xl gap-8 p-4 mx-auto my-8">
        <div className="text-4xl font-semibold">
          <span>{page.data.title}</span>
        </div>
      </section>
      <section className="flex flex-col max-w-3xl gap-8 p-4 mx-auto my-8">
        <PrismicRichText field={page.data.content} />
      </section>
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}

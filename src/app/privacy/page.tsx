import { PrismicRichText } from "@prismicio/react";
import { Hero, QuoteForm } from "@ui";
import { getPrismicSingle } from "@utils";

export default async function Page() {
  const page = await getPrismicSingle("privacy_policy");
  return (
    <>
      <section className="flex flex-col max-w-3xl gap-8 p-4 mx-auto my-8 text-center">
        <div className="text-4xl font-semibold">
          <span>{page.data.title}</span>
        </div>
      </section>
      <section className="flex flex-col max-w-3xl gap-8 p-4 mx-auto my-8">
        <PrismicRichText field={page.data.content} />
      </section>
    </>
  );
}

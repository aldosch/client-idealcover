import { Hero, QuoteForm } from "@ui";
import { getPrismicSingle } from "@utils";

const page = await getPrismicSingle("about");

export default async function Page() {
  return (
    <>
      <Hero
        title={page.data.title}
        subTitle={"none"}
        callToAction={"none"}
        image={page.data.image}
      ></Hero>
      <section className="flex flex-col max-w-3xl gap-8 p-4 mx-auto my-8 text-center">
        <div className="text-4xl font-semibold">
          <span>{page.data.hook_title}</span>
        </div>
        <div className="text-lg">
          <span>{page.data.hook_sub_title}</span>
        </div>
      </section>
      <section>
        <QuoteForm />
      </section>
    </>
  );
}

import { Hero, TallyForm } from "@ui";
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
      >
        <div className="flex flex-col gap-8">
          {page.data.service_cards.map((card: any, index: number) => (
            <div
              className="rounded-xl hover:shadow p-8 duration-200 border"
              key={index}
            >
              <>{card.description}</>
            </div>
          ))}
        </div>
      </Hero>
      <section className="w-full">
        <div className="max-w-lg mx-auto mb-16">
          <TallyForm contactForm />
        </div>
      </section>
    </>
  );
}

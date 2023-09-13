import { Hero } from "@ui";
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
          <iframe
            data-tally-src="https://tally.so/embed/3y2bWx?hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="543"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Contact us"
          ></iframe>
        </div>
      </section>
    </>
  );
}

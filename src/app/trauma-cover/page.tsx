import { Hero, Icon, TallyForm } from "@ui";
import { getPrismicType, getPrismicSingle } from "@utils";

export default async function Page({ params }: { params: { uid: string } }) {
  const page = await getPrismicSingle("trauma_cover");
  return (
    <>
      <Hero
        title={page.data.name}
        subTitle={"none"}
        callToAction={"none"}
        image={page.data.image}
      >
        <div className="flex flex-col gap-8 my-8">
          {page.data.features.map((item: any, index: number) => (
            <div className="flex gap-4" key={index}>
              <div className="bg-brand-shape h-min p-4 bg-no-repeat bg-cover">
                {/* item.icon is safe but I can't figure out how to fix the ts error quickly */}
                {/* @ts-ignore */}
                <Icon name={item.icon} className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-medium">{item.title}</span>
                <span>{item.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </Hero>
      <section className="flex flex-col max-w-3xl gap-8 p-4 mx-auto my-8 text-center">
        <div className="text-4xl font-semibold">
          <span>{page.data.hook_title}</span>
        </div>
        <div className="text-lg">
          <span>{page.data.hook_subtitle}</span>
        </div>
      </section>
      <section>
        <div className="max-w-lg mx-auto mb-16">
          {/* <QuoteForm /> */}
          <TallyForm />
        </div>
      </section>
    </>
  );
}

export async function generateStaticParams() {
  const pages = await getPrismicType("product");
  return pages.map((page: { uid: any }) => {
    return { uid: page.uid };
  });
}

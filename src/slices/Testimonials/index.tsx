import { Icon, Testimonials as Reviews, ScrollArea, ScrollBar } from "@ui";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { getPrismicData } from "@/src/lib/utils";

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */

const Stars = ({ stars }: { stars: "1" | "2" | "3" | "4" | "5" }) => {
  const starsArray = Array.from({ length: Number(stars) });
  return (
    <div className="flex items-center justify-end w-full gap-2 mb-4">
      {starsArray.map((_, i) => (
        <Icon key={i} name="star" className="fill-black w-4 h-4" />
      ))}
    </div>
  );
};

const Testimonials = async ({
  slice,
}: TestimonialsProps): Promise<JSX.Element> => {
  const testimonials = await getPrismicData("testimonials");
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="p-4"
    >
      <div className="text-4xl font-medium text-center">
        <span>{slice.primary.title}</span>
      </div>
      <ScrollArea className="py-8 my-8">
        <div className="flex-nowrap flex gap-8">
          {testimonials &&
            testimonials.data.testimonials.map((item: any) => (
              <div
                key={item.name}
                className="rounded-xl hover:shadow w-96 flex flex-col justify-between p-8 duration-200 border"
              >
                <div>
                  <Stars stars={item.stars} />
                  <div className="line-clamp-6">
                    <PrismicRichText field={item.review} />
                  </div>
                </div>
                <div className="pt-4">
                  <span className="font-semibold">{item.name}</span>
                </div>
              </div>
            ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};

export default Testimonials;

import { Icon, ScrollArea, ScrollBar } from "@ui";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { getPrismicData } from "@/src/lib/utils";
import { PrismicNextLink } from "@prismicio/next";

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
    <div className="flex items-center w-full gap-2">
      {starsArray.map((_, i) => (
        <Icon
          key={i}
          name="star"
          className="fill-primary-300 text-primary-300 w-4 h-4"
        />
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
        <div className="flex-nowrap flex gap-4 px-8">
          {testimonials &&
            testimonials.data.testimonials.map((item: any) => (
              <PrismicNextLink
                key={item.name}
                className="rounded-xl hover:shadow-lg w-96 hover hover:text-black flex flex-col justify-between p-8 my-8 text-gray-500 duration-200 border"
                field={item.url}
                target="_blank"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <Stars stars={item.stars} />
                  </div>
                  <div className="line-clamp-6 ">
                    <PrismicRichText field={item.review} />
                  </div>
                </div>
                <div className="flex items-center justify-end pt-4">
                  <span className="font-semibold">{item.name}</span>
                </div>
              </PrismicNextLink>
            ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};

export default Testimonials;

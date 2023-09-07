import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Card, FadeIn, FadeInStagger } from "@ui";

/**
 * Props for `ThreeCards`.
 */
export type ThreeCardsProps = SliceComponentProps<Content.ThreeCardsSlice>;

/**
 * Component for "ThreeCards" Slices.
 */
const ThreeCards = ({ slice }: ThreeCardsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col gap-3 p-4"
    >
      <FadeIn>
        <span className="mx-4 mb-4 text-3xl font-bold text-center">
          <PrismicRichText field={slice.primary.heading} />
        </span>
      </FadeIn>
      <FadeInStagger>
        <div className="md:grid md:grid-cols-3 sm:flex sm:flex-col gap-4 text-lg">
          {slice.items.map((item, index) => (
            <FadeIn key={index}>
              <div className="rounded-xl px-12 py-8 prose text-gray-600 border">
                <PrismicRichText field={item.card} />
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeInStagger>
    </section>
  );
};

export default ThreeCards;

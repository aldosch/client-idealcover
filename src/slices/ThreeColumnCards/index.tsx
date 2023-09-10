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
      className="p-4"
    >
      <FadeInStagger>
        <div className="my-16 text-4xl font-semibold text-center">
          <FadeIn>
            <PrismicRichText field={slice.primary.heading} />
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg text-gray-700 my-16 [&>div]:p-8">
          <Card>
            <PrismicRichText field={slice.primary.card_one} />
          </Card>
          <Card>
            <PrismicRichText field={slice.primary.card_two} />
          </Card>
          <Card>
            <PrismicRichText field={slice.primary.card_three} />
          </Card>
        </div>
      </FadeInStagger>
    </section>
  );
};

export default ThreeCards;

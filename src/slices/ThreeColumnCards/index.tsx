import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Card, FadeIn } from "@ui";

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
      className="flex flex-col gap-3 px-4 py-4"
    >
      <FadeIn>
        <h2 className="mx-4 mb-4 text-3xl font-bold text-center">
          Getting insured with us is as easy as 1,2,3:
        </h2>
      </FadeIn>
      <FadeIn>
        <div className="grid grid-cols-3 gap-4">
          <Card>
            <p>1. Choose a popcy that suits your needs and budget</p>
          </Card>
          <Card>
            <p>2. Fill out our form to get a free quote</p>
          </Card>
          <Card>
            <p>
              3. Rest easy knowing we&apos;re here to help with reviews, claims,
              and inquiries
            </p>
          </Card>
        </div>
      </FadeIn>
    </section>
  );
};

export default ThreeCards;

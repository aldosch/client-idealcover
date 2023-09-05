import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
    >
      Placeholder component for three_cards (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ThreeCards;

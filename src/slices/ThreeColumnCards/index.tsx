import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Card from "@components/Card";

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
      className="bg-blue-300 rounded-lg p-4 m-4"
    >
      <Card>Content</Card>
    </section>
  );
};

export default ThreeCards;

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FeatureList`.
 */
export type FeatureListProps = SliceComponentProps<Content.FeatureListSlice>;

/**
 * Component for "FeatureList" Slices.
 */
const FeatureList = ({ slice }: FeatureListProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for feature_list (variation: {slice.variation})
      Slices
    </section>
  );
};

export default FeatureList;

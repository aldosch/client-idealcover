import { ClippedImage, Icon } from "@ui";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Image from "next/image";

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
      className="container my-16"
    >
      {slice.variation === "default" && (
        <div className="flex flex-col gap-8 px-4">
          <span className="mb-8 text-4xl font-semibold">
            <PrismicRichText field={slice.primary.heading} />
          </span>
          <div className="flex flex-col gap-8">
            {slice.items.map((item, index) => (
              <div className="flex gap-4" key={index}>
                <div className="bg-brand-shape p-4 bg-no-repeat bg-cover">
                  {/* item.icon is safe but I can't figure out how to fix the ts error quickly */}
                  {/* @ts-ignore */}
                  <Icon name={item.icon} className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-lg font-medium">
                    <PrismicRichText field={item.feature} />
                  </span>
                  <span>
                    <PrismicRichText field={item.feature_description} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {slice.variation === "imageLeft" && (
        <div className="md:flex-row flex flex-col items-center gap-8">
          <div className="md:w-1/2 md:block hidden">
            <ClippedImage
              field={slice.primary.image}
              clip="left"
              classNames="w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 flex flex-col gap-8 px-4">
            <span className="mb-8 text-4xl font-semibold">
              <PrismicRichText field={slice.primary.heading} />
            </span>
            <div className="flex flex-col gap-8">
              {slice.items.map((item, index) => (
                <div className="lg:pr-8 flex gap-4" key={index}>
                  <div className="bg-brand-shape h-fit p-4 bg-no-repeat bg-cover">
                    {/* item.icon is safe but I can't figure out how to fix the ts error quickly */}
                    {/* @ts-ignore */}
                    <Icon name={item.icon} className="w-6 h-6" />
                  </div>
                  <div className="text-lg">
                    <span className="text-xl font-medium">
                      <PrismicRichText field={item.feature} />
                    </span>
                    <span>
                      <PrismicRichText field={item.feature_description} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {slice.variation === "imageRight" && (
        <div className="flex items-center gap-8">
          <div className="flex flex-col w-1/2 gap-8 px-4">
            <span className="mb-8 text-4xl font-semibold">
              <PrismicRichText field={slice.primary.heading} />
            </span>
            <div className="flex flex-col gap-8">
              {slice.items.map((item, index) => (
                <div className="flex gap-4" key={index}>
                  <div className="bg-brand-shape p-4 bg-no-repeat bg-cover">
                    {/* item.icon is safe but I can't figure out how to fix the ts error quickly */}
                    {/* @ts-ignore */}
                    <Icon name={item.icon} className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-lg font-medium">
                      <PrismicRichText field={item.feature} />
                    </span>
                    <span>
                      <PrismicRichText field={item.feature_description} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/2 py-8">
            <ClippedImage
              field={slice.primary.image}
              clip="right"
              classNames="w-full h-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default FeatureList;

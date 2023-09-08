import { cn } from "@utils";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TextSection`.
 */
export type TextSectionProps = SliceComponentProps<Content.TextSectionSlice>;

/**
 * Component for "TextSection" Slices.
 */
const TextSection = ({ slice }: TextSectionProps): JSX.Element => {
  let align;
  switch (slice.primary.text_align) {
    case "Left":
      align = "text-left";
      break;
    case "Center":
      align = "text-center";
      break;
    case "Right":
      align = "text-right";
      break;
    default:
      align = "text-center";
      break;
  }
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={cn("p-4 max-w-3xl mx-auto flex flex-col gap-8 my-8", align)}
    >
      <div className="text-4xl font-medium">
        <span>{slice.primary.header}</span>
      </div>
      <div className="text-lg">
        <PrismicRichText field={slice.primary.content} />
      </div>
    </section>
  );
};

export default TextSection;

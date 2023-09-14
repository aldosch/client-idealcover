import { Button, Icon } from "@ui";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Link from "next/link";

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction = ({ slice }: CallToActionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="p-4 my-24"
    >
      <div className="flex flex-col justify-between gap-8">
        <div className="max-w-3xl text-4xl font-bold tracking-tight">
          <span>{slice.primary.title}</span>
        </div>
        <div className="md:flex-row flex flex-col justify-between gap-8">
          <span className="font-gray-500 max-w-7xl text-lg">
            <PrismicRichText field={slice.primary.sub_title} />
          </span>
          <Link href={"/quote"}>
            <Button
              size="lg"
              className="flex items-center justify-between gap-4 py-8 text-lg"
            >
              {slice.primary.button_text}
              <Icon name="arrow-right" className="w-5 h-auto" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

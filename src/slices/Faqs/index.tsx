import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@ui";
/**
 * Props for `Faqs`.
 */
export type FaqsProps = SliceComponentProps<Content.FaqsSlice>;

/**
 * Component for "Faqs" Slices.
 */
const Faqs = ({ slice }: FaqsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="p-4 my-16"
    >
      <div className="mb-8 text-4xl font-medium text-center">
        <span>{slice.primary.title}</span>
      </div>
      <div className="max-w-6xl">
        <Accordion type="single" collapsible className="flex flex-col gap-4">
          {slice.items.map((item, index) => (
            <AccordionItem
              // @ts-ignore: Unsure what the valid types are, ignoring in the interest of time
              value={item.question}
              key={index}
              className="rounded-xl border border-gray-200"
            >
              <AccordionTrigger className="hover:no-underline hover:bg-gray-50 px-4 text-gray-600 data-[state=open]:rounded-t-xl data-[state=closed]:rounded-xl duration-200 font-semibold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                <div className="px-4 pt-4">
                  <PrismicRichText field={item.answer} />
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faqs;

import { Metadata } from "next";
import { repositoryName } from "../prismicio";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@prismicio/client";
import { components } from "../slices";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@ui";

export default async function Home() {
  const client = createClient(repositoryName);
  const page = await client.getSingle("home");

  return (
    <>
      <h1>Homepage</h1>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient(repositoryName);
  const page = await client.getSingle("home");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

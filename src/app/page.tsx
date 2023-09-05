import { Metadata } from "next";
import { repositoryName } from "../prismicio";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@prismicio/client";
import { components } from "../slices";

export default async function Home() {
  const client = createClient(repositoryName);
  const page = await client.getSingle("home");

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient(repositoryName);
  const page = await client.getSingle("home");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

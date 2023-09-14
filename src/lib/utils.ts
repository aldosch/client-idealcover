import { createClient } from "@prismicio/client";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { repositoryName } from "../prismicio";
import { PrismicCustomTypes } from "@/types";

export async function getPrismicSingle(
  single: PrismicCustomTypes
): Promise<any> {
  const client = createClient(repositoryName, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    fetchOptions:
      process.env.NODE_ENV === "production"
        ? { next: { tags: ["prismic"] }, cache: "force-cache" }
        : { next: { revalidate: 5 } },
  });
  const data = await client.getSingle(single);
  return data;
}

export async function getPrismicUID(
  type: PrismicCustomTypes,
  uid: string
): Promise<any> {
  const client = createClient(repositoryName, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    fetchOptions:
      process.env.NODE_ENV === "production"
        ? { next: { tags: ["prismic"] }, cache: "force-cache" }
        : { next: { revalidate: 5 } },
  });
  try {
    const data = await client.getByUID(type, uid);
    return data;
  } catch (error) {
    console.error("Error fetching data from Prismic:", error);
    throw error;
  }
}

export async function getPrismicType(type: PrismicCustomTypes): Promise<any> {
  const client = createClient(repositoryName, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });
  const data = await client.getAllByType(type);
  return data;
}

// ### Classname helper: cn() ###
// Resolves tailwind class conflicts by merging with twMerge
// Uses clsx to support object inputs
//
// Syntax example:
//
// cn("DEFAULT_CLASS_NAMES", "OVERRIDE_CLASS_NAMES", { "CONDITIONAL_CLASS_NAMES": CONDITIONAL_EXPRESSION })
//
// Practical example:
// - blue text is the default state
// - we're passing the className prop from a parent component which allows us to use <MyComponent className="text-indigo-500" />
// - we're passing a conditional expression which allows us to use <MyComponent isRed={true} /> or <MyComponent isGreen={true} />
//
// cn("text-blue-500", className, { "text-red-500": isRed, "text-green-500": isGreen })
//
// More details: https://youtu.be/re2JFITR7TI
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

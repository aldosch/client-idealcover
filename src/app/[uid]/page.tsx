import { getPrismicUID, getPrismicType } from "@/src/lib/utils";

export default async function Page({ params }: { params: { uid: string } }) {
  const page = await getPrismicUID("product", params.uid);
  return <h1>{page.uid}</h1>;
}

export async function generateStaticParams() {
  const pages = await getPrismicType("product");
  return pages.map((page: { uid: any }) => {
    return { uid: page.uid };
  });
}

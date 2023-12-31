import Image from "next/image";
import Link from "next/link";
import React from "react";
import { menuItem, socialItem } from "@/types";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, PrismicRichTextProps } from "@prismicio/react";

type Props = {
  menuItems: menuItem[];
  footerMenuItems: menuItem[];
  socialItems: socialItem[];
  text: any;
  copyright: any;
};

const IconLinkedin = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const IconFacebook = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
  </svg>
);

const IconInstagram = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const Logo = (
  <Image
    src={"/logo.svg"}
    alt={"Ideal Cover logo"}
    width={200}
    height={200}
    className="md:h-12 w-auto h-8"
  />
);

const Copyright = (
  <span>
    2023 Ideal Cover. All Rights Reserved, Ideal Cover Pty Ltd. ABN: 85 667 470
    582
  </span>
);

const Disclaimer = (
  <>
    <p className=" text-gray-600">
      <span className="font-semibold text-black">Disclaimer:</span> The
      information on this website is general in nature and not tailored to your
      specific financial situation. Before acting on any information, consider
      your circumstances and seek appropriate advice. The website compares
      certain products based on price alone and may not include all available
      options. Ideal Cover and its advisers are authorised representatives of
      Consilium Advise Australia, licensed to provide advice on superannuation
      and life insurance products.
    </p>
    <p className=" text-gray-600">
      Ideal Cover and its advisers operate as authorised representatives of
      Consilium Advise Australia ABN 90088 128 170 Australian Financial Services
      Licensee 246623. Ideal Cover and its advisers are authorised to advise and
      deal in superannuation and life insurance products only.
    </p>
  </>
);

function Footer({
  menuItems,
  footerMenuItems,
  socialItems,
  text,
  copyright,
}: Props) {
  const FooterLinks = (
    <div className="md:gap-8 flex flex-col gap-4">
      <ul className="md:flex-row md:px-0 flex flex-col gap-4 px-3">
        {/* {menuItems?.map((item) => (
          <li key={item.label}>
            <PrismicNextLink field={item.link}>
              <span className="hover:bg-primary-100 px-3 py-2 text-sm font-medium duration-200 rounded-full">
                {item.label}
              </span>
            </PrismicNextLink>
          </li>
        ))} */}
        <li>
          <Link href={"/income-protection"}>
            <span className="hover:bg-primary-100 px-3 py-2 text-sm font-medium duration-200 rounded-full">
              Income protection
            </span>
          </Link>
        </li>
        <li>
          <Link href={"/life-insurance"}>
            <span className="hover:bg-primary-100 px-3 py-2 text-sm font-medium duration-200 rounded-full">
              Life insurance
            </span>
          </Link>
        </li>
        <li>
          <Link href={"/tpd-cover"}>
            <span className="hover:bg-primary-100 px-3 py-2 text-sm font-medium duration-200 rounded-full">
              TPD Cover
            </span>
          </Link>
        </li>
        <li>
          <Link href={"/trauma-cover"}>
            <span className="hover:bg-primary-100 px-3 py-2 text-sm font-medium duration-200 rounded-full">
              Trauma cover
            </span>
          </Link>
        </li>
        <li>
          <Link href={"/about"}>
            <span className="hover:bg-primary-100 px-3 py-2 text-sm font-medium duration-200 rounded-full">
              About us
            </span>
          </Link>
        </li>
      </ul>
      <ul className="md:flex-row md:px-0 flex flex-col gap-4 px-3">
        {/* {footerMenuItems?.map((item) => (
          <li key={item.label}>
            <PrismicNextLink field={item.link}>
              <span className="hover:bg-primary-100 px-3 py-2 text-sm font-medium duration-200 rounded-full">
                {item.label}
              </span>
            </PrismicNextLink>
          </li>
        ))} */}
        <li>
          <Link href={"/pds"}>
            <span className="hover:bg-primary-100 px-3 py-2 text-sm font-medium duration-200 rounded-full">
              PDS
            </span>
          </Link>
        </li>
        <li>
          <Link href={"/privacy"}>
            <span className="hover:bg-primary-100 px-3 py-2 text-sm font-medium duration-200 rounded-full">
              Privacy policy
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
  const SocialLinks = (
    <>
      {socialItems?.map((item) => (
        <PrismicNextLink field={item.link} key={item.platform} target="_blank">
          {item.platform === "Linkedin" && IconLinkedin}
          {item.platform === "Instagram" && IconInstagram}
          {item.platform === "Facebook" && IconFacebook}
          <span className="sr-only">{item.platform}</span>
        </PrismicNextLink>
      ))}
    </>
  );
  return (
    <>
      <div className="my-6 border-t-8 border-black">
        {/* Mobile footer */}
        <div className="md:hidden flex flex-col gap-4">
          <div className="flex flex-col">
            <div className="py-8 mx-6">{Logo}</div>
            <div className="flex gap-8 text-sm">{FooterLinks}</div>
            <div className="flex gap-8 mx-6 my-8">{SocialLinks}</div>
          </div>
          <div className="flex flex-col gap-6 px-6">
            <PrismicRichText field={text} />
            <p className="mt-8">{Copyright}</p>
          </div>
        </div>
        {/* Desktop footer */}
        <div className="md:block hidden mt-4">
          <div className="grid grid-cols-2 gap-4 pt-12">
            <div className="flex flex-col gap-4">
              <div className="pb-8 mx-3">{Logo}</div>
              <div className="flex gap-8 text-sm">{FooterLinks}</div>
              <div className="flex gap-8 mx-3 my-8">{SocialLinks}</div>
            </div>
            <div className="flex flex-col gap-4 mx-3">
              <PrismicRichText field={text} />
              <div className="flex gap-1">
                <span>©</span>
                <PrismicRichText field={copyright} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

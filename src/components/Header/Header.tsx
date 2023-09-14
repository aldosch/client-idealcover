"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Button,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@ui";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

type Props = {
  logoUrl?: string;
  logoAlt?: string;
  menuItems?: {
    label: string;
    link: any;
  }[];
  phoneCTA?: string;
  phoneLabel?: string;
  phoneNumber?: string;
  ctaLabel?: string;
};

function Header({
  logoUrl = "/logo.svg",
  logoAlt = "Ideal Cover logo",
  menuItems,
  phoneCTA = "Call us:",
  phoneLabel = "123 456 789",
  phoneNumber,
  ctaLabel = "Get quick quote",
}: Props) {
  const logoLink = (
    <Link href={"/"}>
      <Image
        src={logoUrl}
        alt={logoAlt}
        width={120}
        height={120}
        className="w-auto h-8"
        priority
      />
      <span className="sr-only">Home</span>
    </Link>
  );
  const phoneLink = (
    <>
      <a
        href={"tel:+" + phoneNumber}
        className="flex gap-1 text-sm font-semibold truncate border-b-2 border-black"
      >
        {phoneCTA} {phoneLabel}
      </a>
    </>
  );
  const quoteLink = (
    <Link href={"/quote"}>
      <Button>{ctaLabel}</Button>
    </Link>
  );
  const mobileMenu = (
    <Sheet>
      <SheetTrigger>
        <span className="sr-only">Open main menu</span>
        <Image
          src={"/icon-menu.svg"}
          alt={"Menu button"}
          width={120}
          height={120}
          className="w-auto h-6"
        />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle className="mb-14 px-3">{logoLink}</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-6">
          {/* {menuItems?.map((item) => (
            <PrismicNextLink field={item.link} key={item.label}>
              <span className="hover:bg-primary-100 px-3 py-2 text-sm font-medium text-black duration-200 rounded-full">
                {item.label}
              </span>
            </PrismicNextLink>
          ))} */}
          <Link href={"/income-protection"}>
            <span className="hover:bg-primary-100 px-3 py-2 text-sm font-medium text-black duration-200 rounded-full">
              Income protection
            </span>
          </Link>
          <Link href={"/life-insurance"}>
            <span className="hover:bg-primary-100 px-3 py-2 text-sm font-medium text-black duration-200 rounded-full">
              Life insurance
            </span>
          </Link>
          <Link href={"/tpd-cover"}>
            <span className="hover:bg-primary-100 px-3 py-2 text-sm font-medium text-black duration-200 rounded-full">
              TPD Cover
            </span>
          </Link>
          <Link href={"/trauma-cover"}>
            <span className="hover:bg-primary-100 px-3 py-2 text-sm font-medium text-black duration-200 rounded-full">
              Trauma cover
            </span>
          </Link>
          <Link href={"/about"}>
            <span className="hover:bg-primary-100 px-3 py-2 text-sm font-medium text-black duration-200 rounded-full">
              About us
            </span>
          </Link>
          <div className="flex flex-col gap-6 mt-10">
            {quoteLink}
            <div className="w-min mx-auto">{phoneLink}</div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
  return (
    <header className="px-4 py-6 bg-white">
      <nav
        className="flex items-center justify-between gap-6"
        aria-label="Global"
      >
        <div className="flex gap-6">
          <div className="lg:hidden flex">{mobileMenu}</div>
          {logoLink}
        </div>
        <ul className="lg:flex hidden gap-4">
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
        <div className="flex items-center gap-8">
          <div className="lg:flex hidden">{phoneLink}</div>
          {quoteLink}
        </div>
      </nav>
    </header>
  );
}

export default Header;

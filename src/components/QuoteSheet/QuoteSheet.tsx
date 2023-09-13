// prettier-ignore
"use client"

import React from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  Button,
} from "@ui";
import { ArrowRightIcon } from "lucide-react";
import { cva } from "class-variance-authority";
import { cn } from "@utils";

type Props = {
  buttonText: string;
  children: React.ReactNode;
};

function QuoteSheet({ buttonText, children }: Props) {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="md:block hidden">
          <div
            className={cn(
              "inline-flex items-center justify-center rounded-full text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
              "bg-primary text-primary-foreground hover:bg-primary/90",
              "h-14 px-8 text-md"
            )}
          >
            <span className="flex items-center justify-center w-full gap-2">
              <span>{buttonText}</span>
              <ArrowRightIcon className="w-5 h-5" />
            </span>
          </div>
        </div>
        <div className="md:hidden">
          <div
            className={cn(
              "inline-flex items-center justify-center rounded-full text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
              "bg-primary text-primary-foreground hover:bg-primary/90",
              "h-11 px-8 text-md"
            )}
          >
            <span className="flex items-center justify-center w-full gap-2">
              <span>{buttonText}</span>
              <ArrowRightIcon className="w-5 h-5" />
            </span>
          </div>
        </div>
      </SheetTrigger>
      <SheetContent side="left" className="w-full">
        {children}
      </SheetContent>
    </Sheet>
  );
}

export default QuoteSheet;

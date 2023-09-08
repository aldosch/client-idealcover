import { getPrismicData } from "@/src/lib/utils";
import { PrismicRichText } from "@prismicio/react";
import { Card, Icon, ScrollArea, ScrollBar } from "@ui";
import React from "react";

type Props = {
  reviews: [
    {
      review: React.ReactNode;
      name: string;
      description?: string;
      stars: number;
    }
  ];
  className?: string;
};

function Testimonials({ reviews, className }: Props) {
  return (
    <>
      {reviews.map((review) => (
        <div key={review.name} className={className}>
          <div className="line-clamp-6">{review.review}</div>
          <div className="text-medium pt-4">
            <span>{review.name}</span>
          </div>
        </div>
      ))}
    </>
  );
}

export default Testimonials;

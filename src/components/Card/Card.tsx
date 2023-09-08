import { cn } from "@utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

function Card({ children, className }: Props) {
  return (
    <div
      className={cn(
        "rounded-xl hover:shadow p-8 duration-200 border",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Card;

import React from "react";

type Props = {
  children: React.ReactNode;
};

function Card({ children }: Props) {
  return <div className="border rounded-lg p-4">{children}</div>;
}

export default Card;

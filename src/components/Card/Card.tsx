import React from "react";

type Props = {
  children: React.ReactNode;
};

function Card({ children }: Props) {
  return (
    <div className="rounded-xl hover:shadow p-4 duration-200 border">
      {children}
    </div>
  );
}

export default Card;

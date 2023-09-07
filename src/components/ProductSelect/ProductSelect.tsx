import { CheckCircleIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

type Props = {};

function ProductSelect({}: Props) {
  return (
    <div className="rounded-xl grid grid-cols-4 text-sm font-medium text-center border border-gray-200 divide-x divide-gray-100">
      <div className="hover:bg-gray-50 hover:cursor-pointer flex flex-col gap-4 px-2 py-4 rounded-l-lg">
        <Image
          src={"/icon-income-protection.svg"}
          width={24}
          height={24}
          alt={"Income protection icon"}
          className="md:w-8 md:h-8 w-6 h-6 mx-auto"
        />
        <span>
          Income <br /> protection
        </span>
        <CheckCircleIcon className="w-5 h-5 mx-auto" />
      </div>
      <div className="hover:bg-gray-50 hover:cursor-pointer flex flex-col gap-4 px-2 py-4">
        <Image
          src={"/icon-life-insurance.svg"}
          width={24}
          height={24}
          alt={"Life insurance icon"}
          className="md:w-8 md:h-8 w-6 h-6 mx-auto"
        />
        <span>
          Life <br /> insurance
        </span>
        <PlusCircleIcon className="text-zinc-300 w-5 h-5 mx-auto" />
      </div>
      <div className="hover:bg-gray-50 hover:cursor-pointer flex flex-col gap-4 px-2 py-4">
        <Image
          src={"/icon-tpd-cover.svg"}
          width={24}
          height={24}
          alt={"TPD Cover icon"}
          className="md:w-8 md:h-8 w-6 h-6 mx-auto"
        />
        <span>
          TPD <br /> Cover
        </span>
        <PlusCircleIcon className="text-zinc-300 w-5 h-5 mx-auto" />
      </div>
      <div className="hover:bg-gray-50 hover:cursor-pointer flex flex-col gap-4 px-2 py-4 rounded-r-lg">
        <Image
          src={"/icon-trauma-cover.svg"}
          width={24}
          height={24}
          alt={"Trauma cover icon"}
          className="md:w-8 md:h-8 w-6 h-6 mx-auto"
        />
        <span>
          Trauma <br /> Cover
        </span>
        <PlusCircleIcon className="text-zinc-300 w-5 h-5 mx-auto" />
      </div>
    </div>
  );
}

export default ProductSelect;

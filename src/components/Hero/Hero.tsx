import { ImageFieldImage } from "@prismicio/client";
import {
  ClippedImage,
  ProductSelect,
  Button,
  LogoCloud,
  FadeIn,
  FadeInStagger,
} from "@ui";
import { ArrowRightIcon } from "lucide-react";

type Props = {
  title: string;
  subTitle: string;
  callToAction: string;
  image: ImageFieldImage;
};

function Hero({ title, subTitle, callToAction, image }: Props) {
  const mobileHero = (
    <div className="md:hidden">
      <div className="grid grid-cols-7">
        <div className="pb-7 col-span-4 pt-6 pl-4">
          <h1 className="line-clamp-4 mb-4 text-4xl font-bold leading-tight text-gray-900">
            {title}
          </h1>
          <p className="text-base font-normal leading-relaxed text-gray-600">
            {subTitle}
          </p>
        </div>
        <div className="col-span-3">
          <ClippedImage field={image} clip="hero" />
        </div>
      </div>
      <div className="p-4 mt-6">
        <ProductSelect />
        <div className="flex items-center justify-center my-8">
          <Button size="lg" className="w-full">
            <span className="flex items-center justify-center w-full gap-2">
              <span>{callToAction}</span>
              <ArrowRightIcon className="w-5 h-5" />
            </span>
          </Button>
        </div>
        <LogoCloud />
      </div>
    </div>
  );
  const hero = (
    <div className="md:flex flex-col hidden gap-4">
      <div className="grid grid-cols-7">
        <div className="flex flex-col col-span-3 gap-8 pl-4 mt-16">
          <div className="flex flex-col gap-8 mr-12">
            <FadeInStagger>
              <FadeIn>
                <h1 className="line-clamp-4 text-6xl font-bold leading-tight text-gray-900">
                  {title}
                </h1>
              </FadeIn>
              <FadeIn>
                <p className="text-lg font-normal leading-relaxed text-gray-600">
                  {subTitle}
                </p>
              </FadeIn>
            </FadeInStagger>
          </div>
          <ProductSelect />
          <div className="flex items-center">
            <Button size="lg" className="py-7">
              <span className="flex items-center justify-center w-full gap-2">
                <span>{callToAction}</span>
                <ArrowRightIcon className="w-5 h-5" />
              </span>
            </Button>
          </div>
          <LogoCloud />
        </div>
        <div className="col-span-4">
          <ClippedImage field={image} clip="hero" />
        </div>
      </div>
    </div>
  );
  return (
    <>
      <div className="md:block hidden">{hero}</div>
      <div className="md:hidden">{mobileHero}</div>
    </>
  );
}

export default Hero;

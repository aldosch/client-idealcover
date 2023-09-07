import Image from "next/image";

type LogoCloudProps = {
  // children?: React.ReactNode;
  logos?: string[];
};

export const LogoCloud = ({
  logos = [
    "/logo-aia.svg",
    "/logo-clearview.svg",
    "/logo-metlife.svg",
    "/logo-mlc.svg",
    "/logo-onepath.svg",
    "/logo-tal.svg",
    "/logo-zurich.svg",
  ],
}: LogoCloudProps) => {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {logos.map((logo) => (
          <li key={logo}>
            <Image
              src={logo}
              alt={"Ideal Cover logo"}
              width={120}
              height={120}
              className="w-auto h-8"
            />
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {logos.map((logo) => (
          <li key={logo}>
            <Image
              src={logo}
              alt={"Ideal Cover logo"}
              width={120}
              height={120}
              className="w-auto h-8"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogoCloud;

import { cn } from "@utils";
import { ImageFieldImage } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import React from "react";

type Props = {
  field: ImageFieldImage;
  clip: "hero" | "left" | "right";
  classNames?: string;
  width?: number;
  height?: number;
};

function ClippedImage({ field, clip, classNames, width, height }: Props) {
  // Adjust using svg-path-editor
  // github.com/Yqnn/svg-path-editor
  const smClipPathHero = {
    clipPath:
      "path('M308.3685 17.3202C271.0652 1.2455 242.1118-16.8861 223.6095-30.5702 212.0162-39.1445 196.4609-41.3814 183.1224-35.9035 148.1824-21.554 112.7493-13.7707 88.5004-10.189 75.8849-8.3257 64.7331-.4723 59.3902 11.107 41.0357 50.8841 23.8754 79.293 11.4412 97.0074 3.0158 109.0101.9371 124.9981 6.4522 138.5864 19.4772 170.678 26.9587 205.2143 30.631 229.7284 32.6286 243.0631 41.4877 254.5237 53.8944 259.8037 89.0192 274.7515 119.3689 294.1928 139.1684 308.9089 150.2351 317.1349 164.9738 319.084 177.8095 314.0455 210.979 301.0245 245.7447 293.8652 270.45 290.467 284.4599 288.5402 296.4757 279.0756 301.9821 266.0502 315.7253 233.5418 335.9778 202.4371 351.5195 181.5728 359.6619 170.6417 361.3989 156.0767 356.2816 143.4433 342.2311 108.7594 334.5965 72.5247 331.0657 47.3969 329.2052 34.1556 320.6485 22.6117 308.3685 17.3202Z')",
  };
  const clipPathHero = {
    clipPath:
      "path('M796.497 30.8982C708.4127-7.0589 640.0449-49.8731 596.3555-82.1855 568.9802-102.432 532.2494-107.7138 500.7532-94.7789 418.2493-60.8954 334.5812-42.5168 277.3222-34.0593 247.5333-29.6595 221.2005-11.1153 208.5843 16.227 165.2438 110.1526 124.7232 177.2346 95.3623 219.0637 75.4674 247.4055 70.559 285.1581 83.5818 317.2442 114.3377 393.022 132.0039 474.5727 140.6753 532.4578 145.3922 563.945 166.3111 591.007 195.6072 603.4746 278.5475 638.7709 350.2121 684.6776 396.9647 719.4268 423.0965 738.8508 457.899 743.4532 488.208 731.5558 566.531 700.8093 648.6233 683.904 706.9599 675.8798 740.0415 671.3302 768.4145 648.9815 781.4167 618.2245 813.8685 541.4623 861.6908 468.0149 898.3894 418.748 917.616 392.9363 921.7177 358.544 909.6341 328.7126 876.4567 246.8137 858.4292 161.2526 850.0919 101.9184 845.6987 70.6516 825.4937 43.3931 796.497 30.8982Z')",
  };
  const clipPathLeft = {
    clipPath:
      "path('M381.7581 99.7749C325.3842 75.4823 281.6287 48.0812 253.6675 27.4013 236.1474 14.4435 212.6396 11.0632 192.4821 19.3415 139.6795 41.027 86.132 52.7893 49.4862 58.2021 30.4213 61.0179 13.5683 72.8862 5.4939 90.3853-22.244 150.4977-48.1771 193.4302-66.9682 220.2008-79.7009 238.3395-82.8422 262.5012-74.5077 283.0363-54.8238 331.5341-43.5175 383.7266-37.9678 420.773-34.949 440.9248-21.5609 458.2445-2.8114 466.2238 50.2704 488.8134 96.1358 518.1937 126.0574 540.4331 142.7818 552.8645 165.0554 555.8101 184.4531 548.1957 234.5798 528.5179 287.1189 517.6986 324.4543 512.563 345.6266 509.6514 363.7853 495.3482 372.1067 475.6637 392.8758 426.5358 423.4821 379.5295 446.9692 347.9987 459.2742 331.4792 461.8994 309.4682 454.1658 290.3761 432.9323 237.9608 421.3947 183.2017 416.0588 145.2278 413.2472 125.217 400.316 107.7716 381.7581 99.7749Z')",
  };
  const clipPathRight = {
    clipPath:
      "path('M541.7581 99.7749C485.3842 75.4823 441.6287 48.0812 413.6675 27.4013 396.1474 14.4435 372.6396 11.0632 352.4821 19.3415 299.6795 41.027 246.132 52.7893 209.4862 58.2021 190.4213 61.0179 173.5683 72.8862 165.4939 90.3853 137.756 150.4977 111.8229 193.4302 93.0318 220.2008 80.2991 238.3395 77.1578 262.5012 85.4923 283.0363 105.1762 331.5341 116.4825 383.7266 122.0322 420.773 125.051 440.9248 138.4391 458.2445 157.1886 466.2238 210.2704 488.8134 256.1358 518.1937 286.0574 540.4331 302.7818 552.8645 325.0554 555.8101 344.4531 548.1957 394.5798 528.5179 447.1189 517.6986 484.4543 512.563 505.6266 509.6514 523.7853 495.3482 532.1067 475.6637 552.8758 426.5358 583.4821 379.5295 606.9692 347.9987 619.2742 331.4792 621.8994 309.4682 614.1658 290.3761 592.9323 237.9608 581.3947 183.2017 576.0588 145.2278 573.2472 125.217 560.316 107.7716 541.7581 99.7749Z')",
  };
  return (
    <>
      <PrismicNextImage
        field={field}
        className={cn(
          "md:block hidden object-cover object-bottom h-full",
          classNames
        )}
        style={
          clip === "hero"
            ? clipPathHero
            : clip === "left"
            ? clipPathLeft
            : clipPathRight
        }
        width={width}
        height={height}
      />
      <PrismicNextImage
        field={field}
        className={cn(
          "md:hidden object-cover object-bottom h-full",
          classNames
        )}
        style={
          clip === "hero"
            ? smClipPathHero
            : clip === "left"
            ? clipPathLeft
            : clipPathRight
        }
        width={width}
        height={height}
      />
    </>
  );
}

export default ClippedImage;

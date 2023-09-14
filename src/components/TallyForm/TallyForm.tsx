// prettier-ignore
"use client"

import Script from "next/script";
import React from "react";

type Props = { contactForm?: boolean };

function TallyForm({ contactForm }: Props) {
  if (contactForm) {
    return (
      <>
        <iframe
          data-tally-src="https://tally.so/embed/3y2bWx?hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="eager"
          width="100%"
          height="543"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Contact us"
        ></iframe>
        <Script
          src="https://tally.so/widgets/embed.js"
          strategy="lazyOnload"
          onReady={() => {
            // router.refresh();
            // @ts-ignore
            Tally.loadEmbeds();
          }}
        />
      </>
    );
  } else {
    return (
      <>
        <iframe
          data-tally-src="https://tally.so/embed/n0BzNN?hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="eager"
          width="100%"
          height="945"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="All products quote"
        ></iframe>
        <Script
          src="https://tally.so/widgets/embed.js"
          strategy="lazyOnload"
          // onLoad={() => {
          //   // @ts-ignore
          //   Tally.loadEmbeds();
          //   router.refresh();
          // }}
          onReady={() => {
            // router.refresh();
            // @ts-ignore
            Tally.loadEmbeds();
          }}
        />
      </>
    );
  }
}

export default TallyForm;

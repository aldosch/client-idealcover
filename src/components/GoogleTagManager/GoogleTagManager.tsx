import Script from "next/script";

type Props = {
  gtmID?: string;
};

function GoogleTagManager({ gtmID = "GTM-5TNBWZ66" }: Props) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gtmID}`}
        strategy="beforeInteractive"
      />
      <Script id="google-tag-manager" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${gtmID}');
        `}
      </Script>
    </>
  );
}

export default GoogleTagManager;

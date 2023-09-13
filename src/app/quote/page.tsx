export default async function Page() {
  return (
    <>
      <section className="w-full my-16 text-center">
        <span className="mb-8 text-4xl font-semibold">Get a quote</span>
      </section>
      <section>
        <div className="max-w-lg mx-auto mb-16">
          <iframe
            data-tally-src="https://tally.so/embed/n0BzNN?hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="945"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="All products quote"
          ></iframe>
        </div>
      </section>
    </>
  );
}

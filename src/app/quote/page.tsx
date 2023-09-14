import { TallyForm } from "@ui";

export default function Page() {
  return (
    <>
      <section className="w-full my-16 text-center">
        <span className="mb-8 text-4xl font-semibold">Get a quote</span>
      </section>
      <section>
        <div className="max-w-lg mx-auto mb-16">
          <TallyForm />
        </div>
      </section>
    </>
  );
}

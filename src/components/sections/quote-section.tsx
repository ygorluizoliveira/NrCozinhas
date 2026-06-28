import { QuoteForm } from "@/components/quote-form";

export function QuoteSection() {
  return (
    <section id="orcamento" className="px-5 pb-14 pt-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <QuoteForm />
      </div>
    </section>
  );
}

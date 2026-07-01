import { QuoteForm } from "@/components/quote-form";

export function QuoteSection() {
  return (
    <section id="orcamento" className="w-full px-4 pb-14 pt-10 sm:px-6 lg:px-8">
      <div className="w-full">
        <QuoteForm />
      </div>
    </section>
  );
}

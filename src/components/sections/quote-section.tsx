import { QuoteForm } from "@/components/quote-form";

export function QuoteSection() {
  return (
    <section id="orcamento" className="w-full px-4 pb-14 pt-6 max-[425px]:pt-3 sm:px-6 sm:pt-10 lg:px-8">
      <div className="w-full">
        <QuoteForm />
      </div>
    </section>
  );
}

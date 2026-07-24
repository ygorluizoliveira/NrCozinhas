import { QuoteForm } from "@/components/quote-form";

export function QuoteSection() {
  return (
    <section id="orcamento" className="quote-section-tight w-full px-4 pb-14 pt-6 max-[768px]:px-0 max-[768px]:pt-4 max-[768px]:pb-8 max-[425px]:pt-3 max-[320px]:pb-1 sm:px-6 sm:pt-10 lg:px-8">
      <div className="w-full">
        <QuoteForm />
      </div>
    </section>
  );
}

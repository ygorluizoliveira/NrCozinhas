import Image from "next/image";

export function ClientsSection() {
  return (
    <section id="clientes" className="w-full px-4 py-10 max-[768px]:px-0 max-[768px]:py-6 sm:px-6 lg:px-8">
      <div className="w-full">
        <div className="mb-6">
          <p className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
            <span className="text-[color:var(--brand-blue)]">ALGUNS DE NOSSOS </span>
            <span className="text-[color:var(--brand-red)]">CLIENTES</span>
          </p>
          <span className="mx-auto mt-2 block h-[2px] w-28 rounded-full bg-gradient-to-r from-[color:var(--brand-blue)] to-[color:var(--brand-red)]" />
        </div>

        <div className="overflow-hidden rounded-[1.25rem] border border-black/10 bg-white px-2 py-1.5 shadow-[0_16px_36px_rgba(21,42,108,0.09)] max-[768px]:rounded-none max-[768px]:border-0 max-[768px]:shadow-none sm:px-4 sm:py-2">
          <Image
            src="/products/logo_parceiros.png"
            alt="Logotipos dos parceiros da NR Cozinhas"
            width={1800}
            height={320}
            className="h-[58px] w-full object-contain sm:h-[150px]"
            sizes="100vw"
          />
        </div>

        <p className="mt-5 text-center text-sm text-black/65 max-[325px]:mx-auto max-[325px]:max-w-[18rem] max-[325px]:px-3 max-[325px]:text-[12px] max-[325px]:leading-5 sm:text-base">
          Marcas e grupos que confiam no atendimento da NR Cozinhas.
        </p>
      </div>
    </section>
  );
}

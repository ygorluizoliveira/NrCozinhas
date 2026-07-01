"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { Send, ShieldCheck } from "lucide-react";
import { whatsappUrl } from "@/lib/contact";

type FormState = {
  name: string;
  email: string;
  phone: string;
  segment: string;
  details: string;
  projectType: "2D" | "3D" | "2D e 3D";
  consent: boolean;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  segment: "",
  details: "",
  projectType: "2D",
  consent: false,
};

export function QuoteForm() {
  const [form, setForm] = useState<FormState>(initialState);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = [
      "Olá, gostaria de solicitar um projeto de cozinha industrial.",
      "",
      `Nome: ${form.name}`,
      `Email: ${form.email}`,
      `Telefone: ${form.phone}`,
      `Segmento: ${form.segment || "Não informado"}`,
      `Tipo de projeto: ${form.projectType}`,
      `Detalhes: ${form.details || "Não informado"}`,
      `Consentimento LGPD: ${form.consent ? "Sim" : "Não"}`,
    ].join("\n");

    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <div className="overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-white shadow-[0_24px_56px_rgba(21,42,108,0.12)]">
      <div className="grid lg:grid-cols-[1.06fr_0.94fr]">
        <aside className="relative min-h-[580px] overflow-hidden bg-[#142a63]">
          <Image
            src="/products/formulario2.png"
            alt="Profissional de cozinha industrial"
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 55vw"
            priority
          />
        </aside>

        <div className="bg-[#f7f8fb] px-5 py-7 sm:px-8 lg:px-9">
          <div className="mx-auto max-w-xl">
            <h3 className="mx-auto max-w-md text-center text-3xl font-black uppercase leading-[1.05] text-[color:var(--brand-blue)] sm:text-4xl">
              Solicite seu projeto
              <br />
              de cozinha industrial
            </h3>
            <div className="mx-auto mt-3 h-[3px] w-16 rounded-full bg-[color:var(--brand-red)]" />
            <p className="mx-auto mt-4 max-w-md text-center text-sm leading-6 text-black/68">
              Preencha o formulario abaixo e nossa equipe entrara em contato para entender seu projeto.
            </p>

            <form className="mt-6 grid gap-3" onSubmit={handleSubmit}>
              <label className="grid gap-1.5 text-sm font-medium text-black/80">
                Nome*
                <input
                  required
                  className="rounded-xl border border-black/14 bg-white px-4 py-2.5 outline-none transition focus:border-[color:var(--brand-blue)]"
                  value={form.name}
                  onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                  placeholder="Digite seu nome"
                />
              </label>

              <label className="grid gap-1.5 text-sm font-medium text-black/80">
                Email*
                <input
                  required
                  type="email"
                  className="rounded-xl border border-black/14 bg-white px-4 py-2.5 outline-none transition focus:border-[color:var(--brand-blue)]"
                  value={form.email}
                  onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                  placeholder="Digite seu e-mail"
                />
              </label>

              <label className="grid gap-1.5 text-sm font-medium text-black/80">
                Telefone*
                <input
                  required
                  className="rounded-xl border border-black/14 bg-white px-4 py-2.5 outline-none transition focus:border-[color:var(--brand-blue)]"
                  value={form.phone}
                  onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
                  placeholder="(11) 99999-9999"
                />
              </label>

              <label className="grid gap-1.5 text-sm font-medium text-black/80">
                Segmento de Atuacao*
                <select
                  required
                  className="rounded-xl border border-black/14 bg-white px-4 py-2.5 outline-none transition focus:border-[color:var(--brand-blue)]"
                  value={form.segment}
                  onChange={(event) => setForm((current) => ({ ...current, segment: event.target.value }))}
                >
                  <option value="">Selecione o segmento</option>
                  <option>Restaurante</option>
                  <option>Hotel</option>
                  <option>Escola / Instituicao</option>
                  <option>Industria alimenticia</option>
                  <option>Outro</option>
                </select>
              </label>

              <label className="grid gap-1.5 text-sm font-medium text-black/80">
                Conte-nos sobre seu projeto*
                <textarea
                  required
                  rows={4}
                  className="rounded-xl border border-black/14 bg-white px-4 py-2.5 outline-none transition focus:border-[color:var(--brand-blue)]"
                  value={form.details}
                  onChange={(event) => setForm((current) => ({ ...current, details: event.target.value }))}
                  placeholder="Fale sobre seu projeto, necessidades e expectativas..."
                />
              </label>

              <fieldset className="mt-1 rounded-xl border border-black/10 bg-white p-3">
                <legend className="mx-auto px-2 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-blue)]">
                  Qual tipo de projeto voce precisa?
                </legend>
                <div className="grid gap-2 sm:grid-cols-3">
                  {(["2D", "3D", "2D e 3D"] as const).map((option) => {
                    const active = form.projectType === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setForm((current) => ({ ...current, projectType: option }))}
                        className={`rounded-lg border px-3 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition ${
                          active
                            ? "border-[color:var(--brand-blue)] bg-[color:var(--brand-blue)] text-white"
                            : "border-black/15 bg-white text-[color:var(--brand-blue)] hover:bg-[color:var(--brand-blue-soft)]"
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <label className="mt-1 flex items-start gap-2 text-xs leading-5 text-black/70">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(event) => setForm((current) => ({ ...current, consent: event.target.checked }))}
                  className="mt-0.5 h-4 w-4 rounded border border-black/25"
                />
                <span>Autorizo o uso dos meus dados para contato e envio de comunicacoes relacionadas a minha solicitacao.</span>
              </label>

              <button type="submit" className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[color:var(--brand-blue)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#102257]">
                <Send className="h-4 w-4" />
                Enviar solicitacao
              </button>

              <p className="flex items-center justify-center gap-1.5 text-xs text-black/58">
                <ShieldCheck className="h-4 w-4" />
                Seus dados estao seguros conosco.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
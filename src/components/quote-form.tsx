"use client";

import { FormEvent, useState } from "react";
import { whatsappUrl } from "@/lib/contact";

type FormState = {
  name: string;
  environment: string;
  budget: string;
  details: string;
};

const initialState: FormState = {
  name: "",
  environment: "Cozinha planejada",
  budget: "A definir",
  details: "",
};

export function QuoteForm() {
  const [form, setForm] = useState<FormState>(initialState);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = [
      "Olá, gostaria de solicitar um orçamento.",
      "",
      `Nome: ${form.name}`,
      `Ambiente: ${form.environment}`,
      `Faixa de investimento: ${form.budget}`,
      `Detalhes: ${form.details || "Não informado"}`,
    ].join("\n");

    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--brand-red)]">
          Solicite seu contato
        </p>
        <h3 className="display-font mt-3 text-3xl leading-tight sm:text-4xl">
          Envie os dados essenciais e continue o atendimento no WhatsApp.
        </h3>
      </div>

      <form className="grid gap-4" onSubmit={handleSubmit}>
        <label className="grid gap-2 text-sm font-medium text-black/78">
          Nome
          <input
            required
            className="rounded-2xl border border-[color:var(--line)] bg-white px-4 py-3 outline-none transition focus:border-[color:var(--brand-blue)]"
            value={form.name}
            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
            placeholder="Seu nome"
          />
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-black/78">
            Ambiente
            <select
              className="rounded-2xl border border-[color:var(--line)] bg-white px-4 py-3 outline-none transition focus:border-[color:var(--brand-blue)]"
              value={form.environment}
              onChange={(event) =>
                setForm((current) => ({ ...current, environment: event.target.value }))
              }
            >
              <option>Cozinha planejada</option>
                <option>Área gourmet</option>
                <option>Painel e armários</option>
              <option>Outro ambiente</option>
            </select>
          </label>

          <label className="grid gap-2 text-sm font-medium text-black/78">
            Faixa de investimento
            <select
              className="rounded-2xl border border-[color:var(--line)] bg-white px-4 py-3 outline-none transition focus:border-[color:var(--brand-blue)]"
              value={form.budget}
              onChange={(event) => setForm((current) => ({ ...current, budget: event.target.value }))}
            >
              <option>A definir</option>
                <option>Até R$ 10 mil</option>
              <option>Entre R$ 10 mil e R$ 25 mil</option>
              <option>Acima de R$ 25 mil</option>
            </select>
          </label>
        </div>

        <label className="grid gap-2 text-sm font-medium text-black/78">
          Detalhes do projeto
          <textarea
            rows={5}
            className="rounded-2xl border border-[color:var(--line)] bg-white px-4 py-3 outline-none transition focus:border-[color:var(--brand-blue)]"
            value={form.details}
            onChange={(event) => setForm((current) => ({ ...current, details: event.target.value }))}
            placeholder="Descreva medidas, estilo desejado, prazo ou referências."
          />
        </label>

        <button
          type="submit"
          className="button-brand mt-2 px-6 py-3 text-sm font-semibold"
        >
          Enviar dados pelo WhatsApp
        </button>
      </form>
    </div>
  );
}
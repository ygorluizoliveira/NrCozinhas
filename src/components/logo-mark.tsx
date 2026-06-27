type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className = "" }: LogoMarkProps) {
  return (
    <div className={`${className} bg-transparent`}>
      <p className="display-font text-center text-3xl leading-none text-[color:var(--brand-blue)] sm:text-5xl">
        Conheca a
      </p>
      <div className="mt-2 flex flex-wrap items-end justify-center gap-x-2 gap-y-1 text-center uppercase leading-none sm:gap-x-3">
        <span className="text-[2.7rem] font-black tracking-[-0.05em] text-[color:var(--brand-red)] sm:text-[4.8rem]">
          NR
        </span>
        <span className="text-[2.7rem] font-black tracking-[-0.06em] text-[color:var(--brand-blue)] sm:text-[4.8rem]">
          PASSOS COZINHAS
        </span>
      </div>
      <div className="mx-auto mt-3 h-2.5 w-[88%] rounded-full bg-[color:var(--brand-red)]" />
    </div>
  );
}
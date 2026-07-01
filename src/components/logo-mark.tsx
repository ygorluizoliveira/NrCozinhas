import Image from "next/image";

type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className = "" }: LogoMarkProps) {
  return (
    <div className={`${className} relative`}>
      <div className="relative mx-auto aspect-square w-full overflow-hidden">
        <Image
          src="/logo2.jpeg"
          alt="NR Cozinhas"
          fill
          className="object-cover object-[50%_30%] scale-[1.45]"
          sizes="(max-width: 640px) 84px, 96px"
          priority
        />
      </div>
    </div>
  );
}
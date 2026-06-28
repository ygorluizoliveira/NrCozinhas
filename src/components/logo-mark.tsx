import Image from "next/image";

type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className = "" }: LogoMarkProps) {
  return (
    <div className={`${className} relative`}>
      <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-full bg-white">
        <Image
          src="/logo2.jpeg"
          alt="NR Cozinhas"
          fill
          className="object-cover object-center"
          sizes="(max-width: 640px) 84px, 96px"
          priority
        />
      </div>
    </div>
  );
}
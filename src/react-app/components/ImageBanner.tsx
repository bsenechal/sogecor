import exempleBE from "@/assets/images/ExempleBE.png";

export function ImageBanner() {
  return (
    <div className="relative h-72 lg:h-96 overflow-hidden">
      <img
        src={exempleBE}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Filtre bleu marine */}
      <div className="absolute inset-0 bg-foreground/65 mix-blend-multiply" />
      <div className="absolute inset-0 bg-primary/30" />
    </div>
  );
}

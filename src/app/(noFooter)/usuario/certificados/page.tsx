import CertificateCard from "@/components/usuario/CertificateCard";

export default function Certificados() {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <h6 className="text-center text-2xl font-bold text-cens-brand">
        En total lograste 3 Diplomas <br />{" "}
        <span className="text-white">¡Felicidades!</span>
      </h6>
      {/* CERTIFICATES GRID */}
      <div className="grid w-full grid-cols-[repeat(auto-fill,_300px)] justify-center gap-5 grid-rows-1 max-w-5xl">
        <CertificateCard certificate={{}} />
        <CertificateCard certificate={{}} />
        <CertificateCard certificate={{}} />
      </div>
    </div>
  );
}

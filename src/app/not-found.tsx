import Button from "@/components/Button";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function NotFound() {
  redirect("/error");

  return (
    <div className="fixed z-20 flex h-full w-full flex-col items-center justify-center gap-4 text-center">
      <h2 className="text-5xl font-black text-white">¡Upssss!</h2>
      <p className="w-full max-w-md text-lg text-stone-500">
        No hemos podido encontrar esta página, puede que la misma haya sido
        eliminada y ya no exista
      </p>
      <div>
        <Button hierarchy="primary" size="md" href="/" type="button">
          Volver al inicio
        </Button>
      </div>
    </div>
  );
}

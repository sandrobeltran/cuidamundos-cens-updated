"use client";

import { useUserStore } from "@/store/useUserStore";
import dateToString from "@/utils/dateToString";
import { useCallback, useEffect } from "react";

export default function Usuario() {
  const { user, setLoading, setError, setUser } = useUserStore();

  function showEditModal() {
    document.getElementById("editProfileModalWrapper")!.style.display = "flex";
  }


  return (
    <div className="flex w-full gap-4 max-sm:flex-col-reverse">
      {/* ABOUT ME CARD */}
      <div className="flex w-4/12 flex-col items-start gap-2 rounded-3xl bg-white/80 p-8 text-left backdrop-blur-sm max-sm:w-full">
        <h6 className="font-medium text-cens-medium">Sobre mí</h6>
        {user?.bio ? (
          <p>{user.bio}</p>
        ) : (
          <button
            onClick={() => showEditModal()}
            className="text-left underline underline-offset-2"
          >
            Cuéntanos un poco sobre ti. ¡Nos encantaría conocerte más!
          </button>
        )}
      </div>
      {/* INFO CARD */}
      <div className="flex w-8/12 flex-col items-start gap-2 rounded-3xl bg-white/80 p-8 text-left backdrop-blur-sm max-sm:w-full">
        <table className="border-separate border-spacing-1 text-stone-700">
          <tbody className="">
            <tr>
              <td>Nombres:</td>
              <td className="pl-7 text-stone-400">{user?.name}</td>
            </tr>
            <tr>
              <td>Apellidos:</td>
              <td className="pl-7 text-stone-400">{user?.lastname}</td>
            </tr>
            <tr>
              <td>Usuario:</td>
              <td className="pl-7 text-stone-400">{user?.username}</td>
            </tr>
            <tr>
              <td>Ciudad:</td>
              <td className="pl-7 text-stone-400">{user!.city}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export const FormAuth = () => {
  const router = useRouter();

  const phoneNumberEnv = process.env.NEXT_PUBLIC_PHONE_NUMBER;
  const [phoneNumber, setphoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (phoneNumber !== phoneNumberEnv) {
      setErrorMessage(true);
      return;
    }

    setErrorMessage(false);
    router.push("/dashboard");
  };

  return (
    <form
      className="flex flex-col gap-5 w-10/12 px-5"
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        type="text"
        placeholder="Escribe tu número de WhatsApp"
        className="w-full bg-transparent border-b border-b-gray-900 focus:outline-none focus:border-b-red-800"
        maxLength={10}
        value={phoneNumber}
        onChange={(e) => setphoneNumber(e.target.value)}
      />

      <input
        type="submit"
        value="Entrar"
        className="border-2 border-blue-950 p-2 uppercase font-bold text-blue-950 rounded-md cursor-pointer focus:bg-blue-950 focus:text-blue-50"
      />

      <div className="w-full">
        {errorMessage && (
          <p className="text-red-500 uppercase font-bold">Número incorrecto</p>
        )}
      </div>
    </form>
  );
};

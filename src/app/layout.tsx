import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "❤️Te Amo Issa❤️",
  description: "",
};

//TODO: Agregar un corazón en el favicon.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`bg-blue-200 flex flex-col min-h-screen`}>
        {children}
      </body>
    </html>
  );
}

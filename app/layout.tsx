import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Carro Perfeito Direto com o Dono!",
  description: "Chega de intermediários e preços abusivos! Aqui você negocia com segurança, encontra as melhores ofertas e realiza o seu sonho sobre rodas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

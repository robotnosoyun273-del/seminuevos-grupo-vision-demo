import type { Metadata } from "next";
import { Lato, Montserrat } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["300", "400", "700", "900"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Seminuevos Grupo Visión | Seminuevos Garantizados en CDMX • Grupo Visión",
  description: "Compra, venta y consignación de autos seminuevos en Av. Río Consulado. Red de 7 agencias en CDMX y Zona Metropolitana, garantía por escrito y financiamiento bancario a tu medida.",
  keywords: [
    "seminuevos grupo visión automotriz",
    "autos seminuevos vallejo",
    "seminuevos río consulado",
    "lote de autos gustavo a. madero cdmx",
    "seminuevos grupo visión",
    "financiamiento automotriz cdmx",
  ],
  openGraph: {
    title: "Seminuevos Grupo Visión | Inventario Garantizado",
    description: "Seminuevos con garantía legal y mecánica por escrito. Respaldo de Grupo Visión Automotriz.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning className={`${lato.variable} ${montserrat.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900 antialiased selection:bg-[#E52528] selection:text-white">
        {children}
      </body>
    </html>
  );
}

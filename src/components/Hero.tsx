"use client";

import React from "react";
import Image from "next/image";
import { businessInfo } from "@/data/inventory";
import { 
  ShieldCheck, 
  Car, 
  ChevronRight, 
  Award, 
  CheckCircle2
} from "lucide-react";
import { WhatsAppIcon } from "./Icons";

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#111315] text-white overflow-hidden">
      {/* Background Car Photo - Web & Mobile Responsive */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Desktop Web Responsive: Aligned to the right, perfectly fitted to hero height */}
        <div className="hidden md:flex absolute right-0 top-0 bottom-0 h-full w-[65%] lg:w-[62%] justify-end items-center z-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1920&auto=format&fit=crop"
            alt="Seminuevos Grupo Visión Agencia"
            fill
            priority
            sizes="(min-width: 768px) 65vw, 100vw"
            className="object-cover opacity-90 transition-all duration-700"
            style={{ objectPosition: "25% center" }}
          />
        </div>

        {/* Mobile Responsive: Centered, perfectly fitted to hero height */}
        <div className="md:hidden absolute inset-0 h-full w-full flex justify-center items-center overflow-hidden z-0">
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1920&auto=format&fit=crop"
            alt="Seminuevos Grupo Visión Agencia"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-55 transition-all duration-700"
            style={{ objectPosition: "50% 50%" }}
          />
        </div>

        {/* Desktop Gradients: Solid dark behind text on left, clear on right to showcase car */}
        <div 
          className="hidden md:block absolute inset-0 z-[1] pointer-events-none" 
          style={{ background: "linear-gradient(to right, #111315 0%, #111315 40%, rgba(28,30,35,0.7) 58%, transparent 82%)" }} 
        />
        <div 
          className="hidden md:block absolute inset-0 z-[1] pointer-events-none" 
          style={{ background: "linear-gradient(to top, #111315 0%, transparent 35%)" }} 
        />

        {/* Mobile Gradient: Soft vignette ensuring crystal clear text readability over centered car */}
        <div 
          className="md:hidden absolute inset-0 z-[1] pointer-events-none" 
          style={{ background: "linear-gradient(to top, #111315 15%, rgba(28,30,35,0.65) 60%, rgba(28,30,35,0.85) 100%)" }} 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-28 sm:pb-36">
        <div className="max-w-3xl space-y-6">


          {/* Punchy Headline (Ref 2 Style) */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] uppercase drop-shadow-md">
            Seminuevos Garantizados con{" "}
            <span className="text-[#FF4D4D] drop-shadow-sm">
              Seguridad Total
            </span>{" "}
            en CDMX.
          </h1>

          {/* Subtitle / Value Proposition */}
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed drop-shadow-sm">
            Compra, venta y consignación con <strong className="text-white">garantía mecánica por escrito</strong> y respaldo de Grupo Visión Automotriz. Aceptamos tu auto a cuenta y tramitamos tu crédito bancario con <strong className="text-[#FF4D4D]">Scotiabank, Banorte, BBVA y Santander</strong>.
          </p>

          {/* Highlights Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-[#FF4D4D] shrink-0" />
              <span>Garantía por escrito</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-[#FF4D4D] shrink-0" />
              <span>Enganche desde 20%</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-[#FF4D4D] shrink-0" />
              <span>Compramos tu auto hoy</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#catalogo"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded bg-[#E52528] hover:bg-[#C81D25] text-white font-black text-sm sm:text-base tracking-wide transition-all shadow-lg hover:shadow-red-950/30 active:scale-[0.98]"
            >
              <Car className="w-5 h-5 text-white" />
              <span>Ver Inventario Disponible</span>
              <ChevronRight className="w-4 h-4 text-white" />
            </a>

            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-[#1A1D20] hover:bg-[#22252A] text-slate-200 border border-slate-700 font-bold text-sm sm:text-base transition-all hover:border-[#FF4D4D]/50"
            >
              <WhatsAppIcon className="w-5 h-5 fill-emerald-400" />
              <span>Cotizar Financiamiento</span>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {businessInfo.stats.map((stat, idx) => (
              <div key={idx} className="space-y-0.5">
                <div className="text-xl sm:text-2xl font-black text-[#FF4D4D] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

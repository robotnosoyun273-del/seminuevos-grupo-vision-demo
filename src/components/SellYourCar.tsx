"use client";

import React, { useState } from "react";
import { businessInfo } from "@/data/inventory";
import { 
  ShieldCheck, 
  CheckCircle, 
  Car, 
  Sparkles,
  ArrowRight,
  FileCheck2
} from "lucide-react";
import { WhatsAppIcon } from "./Icons";

export const SellYourCar: React.FC = () => {
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "2020",
    mileage: "",
    name: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [estimatedValuation, setEstimatedValuation] = useState<{ min: number; max: number } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.make || !formData.model || !formData.phone) return;

    // Algorithmic valuation estimate based on year
    const baseYear = Number(formData.year) || 2020;
    const baseValue = Math.max(120000, (baseYear - 2012) * 28000 + 100000);
    const minVal = Math.round(baseValue * 0.95);
    const maxVal = Math.round(baseValue * 1.12);

    setEstimatedValuation({ min: minVal, max: maxVal });
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hola Seminuevos Grupo Visión, quiero valuar mi auto para venta o toma a cuenta:\n\n` +
    `• Marca: ${formData.make}\n` +
    `• Modelo: ${formData.model}\n` +
    `• Año: ${formData.year}\n` +
    `• Kilometraje: ${formData.mileage || "No especificado"} km\n` +
    `• Propietario: ${formData.name}\n` +
    `• Teléfono: ${formData.phone}\n\n` +
    `¿Cuándo puedo llevarlo a revisión en Av. Río Consulado?`
  );

  return (
    <section id="vender-auto" className="py-20 bg-[#111315] text-white relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1A1D20] border border-red-600/30 text-xs font-bold text-[#FF4D4D]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Valuación Transparente y Sin Compromiso</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase">
              ¿QUIERES VENDER TU AUTO <br />
              <span className="text-[#FF4D4D]">
                O DEJARLO A CUENTA?
              </span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              En <strong className="text-white">Seminuevos Grupo Visión</strong> compramos tu auto el mismo día o lo tomamos como enganche para cualquiera de nuestras unidades garantizadas. Respaldado por la solidez de Grupo Visión Automotriz.
            </p>

            {/* Steps & benefits */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded bg-[#E52528] text-white font-black text-sm flex items-center justify-center shrink-0">
                  1
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Dictamen físico y mecánico en 15 minutos</h4>
                  <p className="text-xs text-slate-400">Revisión en nuestras instalaciones de Av. Río Consulado sin ningún costo ni compromiso.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded bg-[#E52528] text-white font-black text-sm flex items-center justify-center shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Oferta justa al valor de libro y mercado</h4>
                  <p className="text-xs text-slate-400">Sin intermediarios ni regateos abusivos; trato directo de agencia formal.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded bg-[#E52528] text-white font-black text-sm flex items-center justify-center shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Transferencia bancaria inmediata y segura</h4>
                  <p className="text-xs text-slate-400">Contrato de compraventa certificado con entrega de cheque de caja o transferencia en firme.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400">
                <FileCheck2 className="w-4 h-4 text-emerald-400" />
                <span>¿Tiene adeudos de tenencia o verificación? Nosotros nos encargamos del trámite.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Valuation Card */}
          <div className="lg:col-span-6">
            <div className="bg-[#1A1D20] border border-slate-700 rounded-lg p-6 sm:p-8 shadow-2xl">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-700/80 pb-3 mb-4">
                    <h3 className="text-lg font-extrabold text-white flex items-center gap-2">
                      <Car className="w-5 h-5 text-[#FF4D4D]" />
                      <span>Cotizador Exprés de Tu Auto</span>
                    </h3>
                    <p className="text-xs text-slate-400">
                      Ingresa los datos básicos para calcular un rango estimado de compra al momento.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Marca *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Nissan, VW, Mazda..."
                        value={formData.make}
                        onChange={(e) => setFormData({ ...formData, make: e.target.value })}
                        className="w-full bg-[#111315] border border-slate-700 rounded px-3.5 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#E52528]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Modelo y Versión *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Versa Advance, Jetta..."
                        value={formData.model}
                        onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                        className="w-full bg-[#111315] border border-slate-700 rounded px-3.5 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#E52528]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Año
                      </label>
                      <select
                        value={formData.year}
                        onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                        className="w-full bg-[#111315] border border-slate-700 rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#E52528]"
                      >
                        {[2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015].map((y) => (
                          <option key={y} value={y}>{y}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Kilometraje Aproximado
                      </label>
                      <input
                        type="number"
                        placeholder="Ej. 45000"
                        value={formData.mileage}
                        onChange={(e) => setFormData({ ...formData, mileage: e.target.value })}
                        className="w-full bg-[#111315] border border-slate-700 rounded px-3.5 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#E52528]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Tu Nombre
                      </label>
                      <input
                        type="text"
                        placeholder="Nombre completo"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#111315] border border-slate-700 rounded px-3.5 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#E52528]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="55 1234 5678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#111315] border border-slate-700 rounded px-3.5 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#E52528]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#E52528] hover:bg-[#C81D25] text-white font-black py-3.5 rounded text-sm shadow-md transition-all cursor-pointer mt-2"
                  >
                    <span>Calcular Valuación Estimada</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    Tus datos son confidenciales y están protegidos por el aviso de privacidad de Seminuevos Grupo Visión.
                  </p>
                </form>
              ) : (
                <div className="text-center py-6 space-y-5 animate-in fade-in duration-300">
                  <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle className="w-7 h-7" />
                  </div>

                  <div>
                    <span className="text-xs text-[#FF4D4D] font-bold uppercase tracking-wider block mb-1">
                      Estimación Preliminar para {formData.make} {formData.model} ({formData.year})
                    </span>
                    <div className="text-2xl sm:text-3xl font-black text-white">
                      ${estimatedValuation?.min.toLocaleString()} – ${estimatedValuation?.max.toLocaleString()} MXN
                    </div>
                    <p className="text-xs text-slate-300 mt-2 max-w-md mx-auto">
                      Para concretar la oferta formal y agendar tu inspección en Av. Río Consulado 1410, envía los datos a un asesor:
                    </p>
                  </div>

                  <div className="pt-2 space-y-3">
                    <a
                      href={`${businessInfo.whatsappUrl}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#E52528] hover:bg-[#C81D25] text-white font-black py-4 rounded text-sm shadow-xl transition-all"
                    >
                      <WhatsAppIcon className="w-5 h-5 fill-white" />
                      <span>Enviar a Asesor por WhatsApp y Agendar Cita</span>
                    </a>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-slate-400 hover:text-white underline cursor-pointer block mx-auto"
                    >
                      Cotizar otro vehículo
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

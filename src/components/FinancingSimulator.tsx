"use client";

import React, { useState, useMemo } from "react";
import { vehicles, businessInfo } from "@/data/inventory";
import { 
  Calculator, 
  CheckCircle2, 
  FileCheck
} from "lucide-react";
import { WhatsAppIcon } from "./Icons";

const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const FinancingSimulator: React.FC = () => {
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>(vehicles[0].id);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(30); // 30% default
  const [loanTermMonths, setLoanTermMonths] = useState<number>(48); // 48 months default

  const activeVehicle = useMemo(() => {
    return vehicles.find((v) => v.id === selectedVehicleId) || vehicles[0];
  }, [selectedVehicleId]);

  // Calculations
  const calculations = useMemo(() => {
    const price = activeVehicle.price;
    const downPayment = Math.round((price * downPaymentPercent) / 100);
    const amountToFinance = price - downPayment;
    
    // Average automotive bank interest rate in Mexico (~14.99% annual)
    const annualRate = 0.1499;
    const monthlyRate = annualRate / 12;
    
    // Amortization formula
    const monthlyPayment = Math.round(
      (amountToFinance * (monthlyRate * Math.pow(1 + monthlyRate, loanTermMonths))) /
      (Math.pow(1 + monthlyRate, loanTermMonths) - 1)
    );

    return {
      price,
      downPayment,
      amountToFinance,
      monthlyPayment,
    };
  }, [activeVehicle, downPaymentPercent, loanTermMonths]);

  const whatsappMessage = encodeURIComponent(
    `Hola Seminuevos Grupo Visión, quiero solicitar una pre-aprobación de crédito con esta cotización:\n\n` +
    `🚘 Auto: ${activeVehicle.make} ${activeVehicle.model} ${activeVehicle.version} (${activeVehicle.year})\n` +
    `💵 Precio total: $${formatNumber(calculations.price)} MXN\n` +
    `💳 Enganche propuesto (${downPaymentPercent}%): $${formatNumber(calculations.downPayment)} MXN\n` +
    `⏱️ Plazo: ${loanTermMonths} meses\n` +
    `📊 Mensualidad estimada: $${formatNumber(calculations.monthlyPayment)} MXN/mes\n\n` +
    `¿Cuáles son los requisitos para iniciar mi trámite bancario?`
  );

  return (
    <section id="simulador" className="py-20 bg-[#111315] text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1A1D20] border border-red-600/30 text-xs font-bold text-[#FF4D4D] uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Simulador Financiero</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase">
            Crédito Automotriz a Tu Medida
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Estrena con enganche desde el 20% y plazos de hasta 60 meses. Trabajamos con <strong className="text-white">Scotiabank, Banorte, BBVA y Santander</strong> para ofrecerte la tasa más competitiva.
          </p>
        </div>

        {/* Simulator Grid (Sharp styling with dark container matching Valuación Transparente) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 bg-[#1A1D20] border border-slate-700 rounded-lg p-6 sm:p-8 space-y-6">
            
            {/* Vehicle Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                1. Selecciona el Vehículo de Tu Interés
              </label>
              <select
                value={selectedVehicleId}
                onChange={(e) => setSelectedVehicleId(e.target.value)}
                className="w-full bg-[#111315] border border-slate-700 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E52528] transition-colors cursor-pointer"
              >
                {vehicles.map((v) => (
                  <option key={v.id} value={v.id}>
                    {v.make} {v.model} {v.version} ({v.year}) — {v.priceFormatted} MXN
                  </option>
                ))}
              </select>
            </div>

            {/* Down Payment Slider */}
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  2. Porcentaje de Enganche
                </label>
                <div className="text-right">
                  <span className="text-xl font-black text-[#FF4D4D]">
                    {downPaymentPercent}%
                  </span>
                  <span className="text-xs text-slate-400 ml-2">
                    (${formatNumber(calculations.downPayment)} MXN)
                  </span>
                </div>
              </div>

              <input
                type="range"
                min={20}
                max={70}
                step={5}
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-700 rounded appearance-none cursor-pointer accent-[#E52528]"
              />

              <div className="flex justify-between text-[11px] text-slate-400 mt-1.5 font-medium">
                <span>20% (Mínimo)</span>
                <span>35%</span>
                <span>50%</span>
                <span>70%</span>
              </div>
            </div>

            {/* Loan Term Selection Buttons */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                3. Plazo en Meses
              </label>
              <div className="grid grid-cols-5 gap-2">
                {[12, 24, 36, 48, 60].map((term) => {
                  const isSelected = loanTermMonths === term;
                  return (
                    <button
                      key={term}
                      type="button"
                      onClick={() => setLoanTermMonths(term)}
                      className={`py-3 px-2 rounded text-xs sm:text-sm font-black transition-all cursor-pointer text-center ${
                        isSelected
                          ? "bg-[#E52528] text-white shadow-md font-black"
                          : "bg-[#111315] text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500"
                      }`}
                    >
                      {term}m
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Requirements Checklist */}
            <div className="pt-4 border-t border-slate-700/80">
              <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-300 mb-3 flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-[#FF4D4D]" />
                <span>Requisitos Mínimos para Aprobación</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Identificación oficial (INE / Pasaporte)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Comprobante de ingresos (3 últimos meses)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Comprobante de domicilio reciente</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Buen historial crediticio en Buró</span>
                </div>
              </div>
            </div>

          </div>

          {/* Results Column (5 cols) */}
          <div className="lg:col-span-5 bg-[#111315] border border-slate-700 rounded-lg p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            <div className="space-y-5">
              <div className="border-b border-slate-700 pb-4">
                <span className="text-[11px] font-bold text-[#FF4D4D] uppercase tracking-wider block">
                  Resumen de Cotización
                </span>
                <h3 className="text-xl font-black text-white mt-1">
                  {activeVehicle.make} {activeVehicle.model} {activeVehicle.version}
                </h3>
                <span className="text-xs text-slate-400">
                  Modelo {activeVehicle.year} • {activeVehicle.mileageFormatted}
                </span>
              </div>

              {/* Breakdown List */}
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between text-slate-300">
                  <span>Precio de la unidad:</span>
                  <span className="font-bold text-white">${formatNumber(calculations.price)} MXN</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Enganche ({downPaymentPercent}%):</span>
                  <span className="font-bold text-[#FF4D4D]">${formatNumber(calculations.downPayment)} MXN</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Monto a financiar:</span>
                  <span className="font-bold text-white">${formatNumber(calculations.amountToFinance)} MXN</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Plazo seleccionado:</span>
                  <span className="font-bold text-white">{loanTermMonths} meses</span>
                </div>
              </div>

              {/* Monthly Payment Prominent Display */}
              <div className="p-4 rounded bg-[#1A1D20] border border-slate-700 space-y-1 text-center">
                <span className="text-xs uppercase font-extrabold tracking-wider text-slate-400 block">
                  Pago Mensual Estimado
                </span>
                <div className="text-3xl sm:text-4xl font-black text-[#FF4D4D] tracking-tight">
                  ${formatNumber(calculations.monthlyPayment)}{" "}
                  <span className="text-xs font-normal text-slate-300">MXN/mes</span>
                </div>
                <span className="text-[10px] text-slate-400 block">
                  *Cálculo orientativo sujeto a aprobación de crédito y perfil crediticio.
                </span>
              </div>

              {/* Bank logos text */}
              <div className="flex items-center justify-center gap-3 text-[11px] text-slate-400 pt-1">
                <span>Alianzas:</span>
                <span className="font-bold text-slate-300">BBVA</span>
                <span>•</span>
                <span className="font-bold text-slate-300">Banorte</span>
                <span>•</span>
                <span className="font-bold text-slate-300">Scotiabank</span>
                <span>•</span>
                <span className="font-bold text-slate-300">Santander</span>
              </div>
            </div>

            {/* Direct WhatsApp Call to Action */}
            <div className="space-y-2 pt-4">
              <a
                href={`${businessInfo.whatsappUrl}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded bg-[#E52528] hover:bg-[#C81D25] text-white font-black text-sm uppercase tracking-wide transition-all shadow-xl hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white" />
                <span>Solicitar Pre-Aprobación por WhatsApp</span>
              </a>

              <p className="text-[11px] text-slate-400 text-center">
                Respuesta en menos de 2 horas hábiles directamente a tu teléfono.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

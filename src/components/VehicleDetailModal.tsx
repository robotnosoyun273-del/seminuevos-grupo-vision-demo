"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Vehicle, businessInfo } from "@/data/inventory";
import { 
  X, 
  ShieldCheck, 
  FileText, 
  UserCheck, 
  Check, 
} from "lucide-react";
import { WhatsAppIcon } from "./Icons";

interface VehicleDetailModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
}

export const VehicleDetailModal: React.FC<VehicleDetailModalProps> = ({ vehicle, onClose }) => {
  if (!vehicle) return null;

  const [activePhoto, setActivePhoto] = useState<string>(vehicle.image);

  const whatsappInquiryMessage = encodeURIComponent(
    `Hola Seminuevos Grupo Visión, quiero apartar / solicitar más información sobre este auto de su catálogo:\n\n` +
    `🚘 Vehículo: ${vehicle.make} ${vehicle.model} ${vehicle.version} (${vehicle.year})\n` +
    `💵 Precio: ${vehicle.priceFormatted}\n` +
    `🛣️ Kilometraje: ${vehicle.mileageFormatted}\n` +
    `📋 Factura: ${vehicle.specs.factura}\n\n` +
    `¿Sigue disponible y cómo puedo apartarlo?`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
      
      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden my-8 border border-slate-700">
        
        {/* Header Bar */}
        <div className="bg-[#1A1D20] text-white px-5 sm:px-7 py-4 flex items-center justify-between border-b border-slate-700">
          <div>
            <span className="text-[11px] font-bold text-[#FF4D4D] uppercase tracking-wider block">
              Ficha Técnica Oficial • Grupo Visión
            </span>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
              {vehicle.make} {vehicle.model} <span className="text-slate-400 font-medium text-base">({vehicle.year})</span>
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-7 max-h-[75vh] overflow-y-auto space-y-6">
          
          {/* Photos Showcase */}
          <div className="space-y-3">
            <div className="relative h-64 sm:h-80 w-full rounded overflow-hidden bg-slate-900">
              <Image
                src={activePhoto}
                alt={`${vehicle.make} ${vehicle.model}`}
                fill
                className="object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded bg-[#1A1D20]/95 backdrop-blur-md text-[#FF4D4D] text-xs font-bold border border-red-600/40">
                  {vehicle.badge || "Certificado GVA"}
                </span>
              </div>
            </div>

            {/* Thumbnails */}
            {vehicle.gallery.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {vehicle.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePhoto(img)}
                    className={`relative w-20 h-14 rounded overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      activePhoto === img ? "border-[#E52528] ring-2 ring-red-600/50" : "border-slate-200 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Foto ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Pricing and Quick Finance Card */}
          <div className="p-5 rounded bg-[#111315] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-slate-700">
            <div>
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                Precio de Venta Contado
              </span>
              <div className="text-3xl font-black text-white tracking-tight mt-0.5">
                {vehicle.priceFormatted}{" "}
                <span className="text-xs text-slate-400 font-normal">MXN</span>
              </div>
            </div>

            <div className="sm:text-right border-t sm:border-t-0 sm:border-l border-slate-700 pt-3 sm:pt-0 sm:pl-6 w-full sm:w-auto">
              <span className="text-[11px] text-[#FF4D4D] font-bold uppercase tracking-wider block">
                Financiamiento Disponible
              </span>
              <div className="text-xl font-black text-[#FF4D4D]">
                Desde {vehicle.monthlyFormatted}
              </div>
              <span className="text-[10px] text-slate-400">
                Enganche estimado del 25% a 48 meses
              </span>
            </div>
          </div>

          {/* Core Specs Grid */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase font-extrabold tracking-wider text-slate-700">
              Especificaciones de Unidad
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-slate-400 font-bold uppercase text-[10px] block">Kilometraje</span>
                <span className="font-extrabold text-slate-900 text-sm">{vehicle.mileageFormatted}</span>
              </div>
              <div className="p-3 rounded bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-slate-400 font-bold uppercase text-[10px] block">Transmisión</span>
                <span className="font-extrabold text-slate-900 text-sm">{vehicle.transmission}</span>
              </div>
              <div className="p-3 rounded bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-slate-400 font-bold uppercase text-[10px] block">Motor</span>
                <span className="font-extrabold text-slate-900 text-sm truncate block">{vehicle.engine}</span>
              </div>
              <div className="p-3 rounded bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-slate-400 font-bold uppercase text-[10px] block">Combustible</span>
                <span className="font-extrabold text-slate-900 text-sm">{vehicle.fuel}</span>
              </div>
            </div>
          </div>

          {/* Legal and Inspection Specs */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase font-extrabold tracking-wider text-slate-700">
              Historial y Documentación
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <FileText className="w-4 h-4 text-[#E52528] shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 font-bold uppercase text-[10px] block">Facturación</span>
                  <span className="font-bold text-slate-800">{vehicle.specs.factura}</span>
                </div>
              </div>

              <div className="p-3.5 rounded bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <UserCheck className="w-4 h-4 text-[#E52528] shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 font-bold uppercase text-[10px] block">Propietarios</span>
                  <span className="font-bold text-slate-800">{vehicle.specs.duenos}</span>
                </div>
              </div>

              <div className="p-3.5 rounded bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#FF4D4D] shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 font-bold uppercase text-[10px] block">Garantía Mecánica</span>
                  <span className="font-bold text-slate-800">{vehicle.specs.garantia}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Equipment list */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase font-extrabold tracking-wider text-slate-700">
              Equipamiento y Confort Destacado
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {vehicle.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-700 py-1 border-b border-slate-100">
                  <Check className="w-4 h-4 text-[#E52528] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            Ubicación: <strong className="text-slate-800">Av. Río Consulado 1410</strong> • Previa cita para prueba de manejo
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="py-2.5 px-4 rounded border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-100 transition-colors w-1/3 sm:w-auto cursor-pointer"
            >
              Cerrar
            </button>
            <a
              href={`https://wa.me/${businessInfo.whatsappClean}?text=${whatsappInquiryMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-6 rounded bg-[#E52528] hover:bg-[#C81D25] text-white text-xs font-black flex items-center justify-center gap-2 transition-all shadow-md w-2/3 sm:w-auto cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Apartar por WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

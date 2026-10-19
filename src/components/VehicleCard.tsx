"use client";

import React from "react";
import Image from "next/image";
import { Vehicle, businessInfo } from "@/data/inventory";
import { 
  Gauge, 
  Settings2, 
  Fuel, 
  ShieldCheck, 
  ChevronRight
} from "lucide-react";
import { WhatsAppIcon } from "./Icons";

interface VehicleCardProps {
  vehicle: Vehicle;
  onOpenDetails: (v: Vehicle) => void;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, onOpenDetails }) => {
  const whatsappCarMessage = encodeURIComponent(
    `Hola Seminuevos Grupo Visión, me interesa cotizar este vehículo:\n\n` +
    `🚗 ${vehicle.make} ${vehicle.model} ${vehicle.version} (${vehicle.year})\n` +
    `💰 Precio: ${vehicle.priceFormatted}\n` +
    `📍 Kilometraje: ${vehicle.mileageFormatted}\n\n` +
    `¿Sigue disponible y cuáles son los requisitos de financiamiento?`
  );

  return (
    <div className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col hover:border-red-600/60 hover:shadow-lg transition-all duration-300 group">
      
      {/* Photo with Badges */}
      <div 
        className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-900 cursor-pointer"
        onClick={() => onOpenDetails(vehicle)}
      >
        <Image
          src={vehicle.image}
          alt={`${vehicle.make} ${vehicle.model}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
          <span className="px-2.5 py-1 rounded bg-[#1A1D20]/90 backdrop-blur-md text-[#FF4D4D] text-[11px] font-extrabold uppercase tracking-wider border border-red-600/40">
            {vehicle.badge || "Grupo Visión"}
          </span>
          <span className="px-2.5 py-1 rounded bg-black/75 backdrop-blur-md text-white text-xs font-bold">
            {vehicle.year}
          </span>
        </div>

        {/* Bottom Specs Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
        <div className="absolute bottom-2.5 left-3 text-white text-xs font-semibold flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-[#FF4D4D]" />
          <span>Garantía Legal & Mecánica</span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        <div>
          {/* Make and Model */}
          <div className="flex items-baseline justify-between gap-2">
            <h3 
              onClick={() => onOpenDetails(vehicle)}
              className="text-lg font-black text-slate-900 tracking-tight group-hover:text-[#E52528] transition-colors cursor-pointer"
            >
              {vehicle.make} {vehicle.model}
            </h3>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              {vehicle.bodyType}
            </span>
          </div>

          <p className="text-xs text-slate-500 font-medium line-clamp-1 mt-0.5">
            {vehicle.version}
          </p>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-100 text-xs text-slate-600">
            <div className="flex items-center gap-1.5">
              <Gauge className="w-3.5 h-3.5 text-[#E52528] shrink-0" />
              <span className="truncate">{vehicle.mileageFormatted}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Settings2 className="w-3.5 h-3.5 text-[#E52528] shrink-0" />
              <span className="truncate">{vehicle.transmission}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Fuel className="w-3.5 h-3.5 text-[#E52528] shrink-0" />
              <span className="truncate">{vehicle.fuel}</span>
            </div>
          </div>
        </div>

        {/* Price & Monthly Simulation */}
        <div className="pt-3 border-t border-slate-100">
          <div className="flex items-baseline justify-between gap-2">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">
                Precio de Contado
              </span>
              <span className="text-2xl font-black text-slate-900 tracking-tight">
                {vehicle.priceFormatted}
              </span>
            </div>

            <div className="text-right">
              <span className="text-[10px] uppercase tracking-wider text-[#E52528] font-extrabold block">
                Mensualidad Est.
              </span>
              <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded inline-block">
                {vehicle.monthlyFormatted}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            onClick={() => onOpenDetails(vehicle)}
            className="w-full py-2.5 px-3 rounded border border-slate-300 hover:border-slate-800 bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold flex items-center justify-center gap-1 transition-colors cursor-pointer"
          >
            <span>Ver Ficha</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

          <a
            href={`https://wa.me/${businessInfo.whatsappClean}?text=${whatsappCarMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-3 rounded bg-[#E52528] hover:bg-[#C81D25] text-white text-xs font-black flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
            <span>Apartar</span>
          </a>
        </div>

      </div>

    </div>
  );
};

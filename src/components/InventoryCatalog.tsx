"use client";

import React from "react";
import { Vehicle } from "@/data/inventory";
import { VehicleCard } from "./VehicleCard";
import { Car, ShieldCheck, RefreshCw } from "lucide-react";

interface InventoryCatalogProps {
  vehicles: Vehicle[];
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  onOpenDetails: (v: Vehicle) => void;
  onResetFilters: () => void;
}

const categories = [
  { id: "all", label: "Todo el Inventario" },
  { id: "SUV", label: "SUVs & Crossovers" },
  { id: "Sedán", label: "Sedanes Ejecutivos" },
  { id: "Pickup", label: "Pickups 4x4" },
  { id: "Hatchback", label: "Hatchbacks" },
];

export const InventoryCatalog: React.FC<InventoryCatalogProps> = ({
  vehicles,
  selectedCategory,
  setSelectedCategory,
  onOpenDetails,
  onResetFilters,
}) => {
  return (
    <section id="catalogo" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1A1D20] text-[#FF4D4D] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Inventario Físico Garantizado</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight uppercase">
              Catálogo de Vehículos Disponibles
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Todas nuestras unidades cuentan con dictamen legal, historial verificado sin reporte de robo y garantía por escrito respaldada por Grupo Visión Automotriz.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500 bg-white border border-slate-200 px-4 py-2 rounded">
            <span>Mostrando:</span>
            <span className="font-bold text-slate-900">{vehicles.length} unidades</span>
          </div>
        </div>

        {/* Category Tabs (Ref 3 DriveNest Style) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`py-2.5 px-5 rounded text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#E52528] text-white shadow-md border border-[#E52528]"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-slate-400 hover:bg-slate-50"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Vehicles Grid */}
        {vehicles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {vehicles.map((v) => (
              <VehicleCard
                key={v.id}
                vehicle={v}
                onOpenDetails={onOpenDetails}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white border border-slate-200 rounded-lg p-12 text-center max-w-xl mx-auto space-y-4 shadow-sm">
            <Car className="w-12 h-12 text-slate-400 mx-auto" />
            <h3 className="text-lg font-bold text-slate-900">
              No encontramos vehículos con los filtros aplicados
            </h3>
            <p className="text-sm text-slate-500">
              Prueba cambiando el rango de presupuesto o seleccionando otra categoría.
            </p>
            <button
              onClick={onResetFilters}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#E52528] text-white text-xs font-bold hover:bg-[#C81D25] transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Ver todos los vehículos</span>
            </button>
          </div>
        )}

        {/* Bottom Banner of Certification */}
        <div className="mt-14 p-6 sm:p-8 bg-white border border-slate-200 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-base sm:lg font-bold text-slate-900">
              ¿No encuentras el modelo o color específico que buscas?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Localizamos cualquier vehículo dentro de nuestra red de 7 agencias de Grupo Visión Automotriz en menos de 48 horas.
            </p>
          </div>
          <a
            href="https://wa.me/525550524068?text=Hola%20Seminuevos%20Grupo%20Visi%C3%B3n,%20busco%20un%20auto%20espec%C3%ADfico%20que%20no%20vi%20en%20su%20cat%C3%A1logo"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded bg-[#E52528] hover:bg-[#C81D25] text-white font-bold text-xs uppercase tracking-wider transition-colors shrink-0 shadow-sm"
          >
            Preguntar por WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};

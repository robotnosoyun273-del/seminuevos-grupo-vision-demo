"use client";

import React from "react";
import { Star, ShieldCheck } from "lucide-react";

const reviews = [
  {
    name: "Lic. Miguel Ángel Serrano",
    vehicle: "Compró Honda CR-V 2022",
    rating: 5,
    date: "Hace 3 semanas",
    comment:
      "Llevaba semanas buscando una CR-V que no tuviera sorpresas legales ni reporte de robo. En Seminuevos Grupo Visión me mostraron el dictamen legal completo y me entregaron garantía por escrito. El trato del equipo fue impecable.",
  },
  {
    name: "Claudia Navarrete",
    vehicle: "Compró Mazda CX-5 2022",
    rating: 5,
    date: "Hace 1 mes",
    comment:
      "Dejé mi auto anterior a cuenta y en menos de 2 horas ya teníamos la aprobación de crédito con Banorte. No tuve que arriesgarme vendiéndolo por mi cuenta en la calle. Excelente atención en su sucursal de Av. Río Consulado.",
  },
  {
    name: "Ing. Fernando Lozano",
    vehicle: "Compró Ford Lobo Lariat 2021",
    rating: 5,
    date: "Hace 2 meses",
    comment:
      "La camioneta venía tal como la anunciaron: factura original, servicios de agencia y en condiciones inmaculadas. Muy recomendable comprar en un grupo automotriz formal porque sabes que tu dinero e inversión están 100% protegidos.",
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-red-50 border border-red-200 text-xs font-bold text-[#E52528] uppercase tracking-wider">
            <div className="flex text-[#FF4D4D]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span>Calificación 4.9 en Google</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight uppercase">
            Experiencias Reales de Clientes en Tlalpan
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Una red de 7 agencias entregando vehículos seminuevos y construyendo relaciones de confianza duraderas en la CDMX.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-lg p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#FF4D4D]">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400">{r.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{r.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900">
                    {r.name}
                  </h4>
                  <span className="text-xs text-[#E52528] font-semibold block">
                    {r.vehicle}
                  </span>
                </div>
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

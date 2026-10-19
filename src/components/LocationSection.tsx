"use client";

import React, { useState } from "react";
import { businessInfo, vehicles } from "@/data/inventory";
import { 
  MapPin, 
  Phone, 
  Clock, 
  ExternalLink, 
  Navigation, 
  CheckCircle2,
  Train
} from "lucide-react";
import { WhatsAppIcon } from "./Icons";

export const LocationSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    model: vehicles[0]?.model || "Cualquier vehículo",
    date: "",
  });

  const [scheduled, setScheduled] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setScheduled(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hola Seminuevos Grupo Visión, quiero agendar una visita / prueba de manejo en su sucursal de Av. Río Consulado:\n\n` +
    `• Nombre: ${formData.name}\n` +
    `• Teléfono: ${formData.phone}\n` +
    `• Vehículo de interés: ${formData.model}\n` +
    `• Fecha / Horario estimado: ${formData.date || "Lo antes posible"}\n\n` +
    `¿Tienen disponibilidad?`
  );

  return (
    <section id="sucursal" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-[#E52528]" />
            <span>Sucursal CDMX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase">
            Agenda Tu Visita o Prueba de Manejo
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Visítanos en nuestra sala de exhibición sobre Av. Río Consulado. Conduce el vehículo que te interesa y recibe asesoría legal y financiera sin compromiso.
          </p>
        </div>

        {/* Contact Grid: Form on Left, Map and Info Card on Right (Clinicas Dentales Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Booking Form */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-lg p-7 sm:p-9 flex flex-col justify-between">
            {!scheduled ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">
                    Reserva tu cita hoy
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Tendremos la unidad limpia y lista para tu prueba de ruta y revisión de documentos.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Tu Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Roberto Morales"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E52528] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ej. 55 1234 5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E52528] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Vehículo de Interés
                      </label>
                      <select
                        value={formData.model}
                        onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded px-3.5 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#E52528] transition-colors cursor-pointer"
                      >
                        {vehicles.map((v) => (
                          <option key={v.id} value={`${v.make} ${v.model} (${v.year})`}>
                            {v.make} {v.model} ({v.year})
                          </option>
                        ))}
                        <option value="Aún decidiendo">Aún decidiendo / Ver varios</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Día Tentativo
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded px-3.5 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#E52528] transition-colors cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded bg-[#E52528] hover:bg-[#C81D25] text-white font-black text-sm uppercase tracking-wider transition-colors shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Confirmar Cita de Manejo</span>
                    <Navigation className="w-4 h-4 text-white" />
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Sin costo ni compromiso de compra</span>
                </div>
              </form>
            ) : (
              <div className="text-center py-10 space-y-5 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900">
                    ¡Cita Solicitada con Éxito!
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 max-w-sm mx-auto">
                    Para asegurar que el vehículo esté disponible y reservado a tu nombre, confirma el horario con nuestro asesor vía WhatsApp:
                  </p>
                </div>

                <a
                  href={`https://wa.me/${businessInfo.whatsappClean}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-4 px-8 rounded bg-[#E52528] hover:bg-[#C81D25] text-white font-black text-sm uppercase tracking-wider shadow-lg transition-all"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-white" />
                  <span>Enviar Confirmación a WhatsApp</span>
                </a>

                <div>
                  <button
                    onClick={() => setScheduled(false)}
                    className="text-xs text-slate-500 hover:text-slate-800 underline cursor-pointer"
                  >
                    Modificar datos de la cita
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Google Maps & Sharp Dark Info Card */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            
            {/* Map Container */}
            <div className="relative w-full h-72 sm:h-80 rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
              <iframe
                title="Ubicación de Seminuevos Grupo Visión en Google Maps"
                src="https://www.google.com/maps?q=Autos+Seminuevos+Grupo+VISION,+Av.+Rio+Consulado+1410,+Vallejo,+Gustavo+A.+Madero,+07870+Ciudad+de+Mexico&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-300"
              />
            </div>

            {/* Dark Location Info Card (Matching Valuación Transparente style - NO rounded pills) */}
            <div className="bg-[#1A1D20] border border-slate-700 rounded-lg p-6 text-white space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#FF4D4D]" />
                  <span className="font-extrabold text-sm uppercase tracking-wider text-white">
                    Seminuevos Grupo Visión
                  </span>
                </div>
                <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-[#FF4D4D] font-bold border border-slate-700">
                  Grupo Visión
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <Navigation className="w-4 h-4 text-[#FF4D4D] shrink-0 mt-0.5" />
                  <p className="text-slate-300">
                    <strong className="text-white block">{businessInfo.address}</strong>
                    <span className="text-slate-400 text-xs flex items-center gap-1 mt-0.5">
                      <Train className="w-3 h-3 text-[#FF4D4D]" />
                      {businessInfo.referenceLocation}
                    </span>
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#FF4D4D] shrink-0 mt-0.5" />
                  <div className="text-slate-300 text-xs">
                    <p>• Lun a Vie: 9:00 AM – 6:00 PM</p>
                    <p>• Sábados: 9:00 AM – 3:00 PM (Domingos cerrado)</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#FF4D4D] shrink-0" />
                  <div className="text-xs text-slate-300">
                    <span>{businessInfo.phone} / {businessInfo.phoneAlt}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={businessInfo.socials.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-600 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Cómo Llegar</span>
                </a>

                <a
                  href={`tel:${businessInfo.phoneClean}`}
                  className="py-2.5 px-3 rounded bg-[#E52528] hover:bg-[#C81D25] text-white text-xs font-black flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Llamar Ahora</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

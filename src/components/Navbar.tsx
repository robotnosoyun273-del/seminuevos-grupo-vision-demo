"use client";

import React, { useState } from "react";
import { businessInfo } from "@/data/inventory";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  Award
} from "lucide-react";
import { FacebookIcon, WhatsAppIcon } from "./Icons";
import { Logo } from "./Logo";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full shadow-sm bg-white">
      {/* Top Bar (Dark Charcoal with Wine Red Accents) */}
      <div className="bg-[#1A1D20] text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          {/* Location & Hours */}
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href={businessInfo.socials.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#FF4D4D]" />
              <span className="hidden sm:inline">{businessInfo.shortAddress}</span>
              <span className="sm:hidden">Vallejo, CDMX</span>
            </a>
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-[#FF4D4D]" />
              <span>Lun - Vie: 9:00 – 18:00 • Sáb: 9:00 – 15:00</span>
            </span>
            <span className="hidden lg:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 text-[10px] text-[#FF4D4D] font-bold border border-slate-700">
              <Award className="w-3 h-3" />
              Grupo Visión Automotriz
            </span>
          </div>

          {/* Contact & Socials */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${businessInfo.phoneClean}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-[#FF4D4D] transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF4D4D]" />
              <span>{businessInfo.phone}</span>
            </a>
            
            <div className="hidden sm:flex items-center gap-2.5 pl-3 border-l border-slate-700">
              <a
                href={businessInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de Seminuevos Grupo Visión"
                className="text-slate-400 hover:text-[#FF4D4D] transition-colors"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo brand */}
          <a href="#" className="flex items-center py-2">
            <Logo variant="dark" className="h-14 w-auto" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <a href="#catalogo" className="hover:text-[#E52528] transition-colors">
              Inventario
            </a>
            <a href="#simulador" className="hover:text-[#E52528] transition-colors">
              Financiamiento
            </a>
            <a href="#por-que-nosotros" className="hover:text-[#E52528] transition-colors">
              Garantía & Respaldo
            </a>
            <a href="#vender-auto" className="hover:text-[#E52528] transition-colors">
              Vender mi Auto
            </a>
            <a href="#sucursal" className="hover:text-[#E52528] transition-colors">
              Sucursal & Citas
            </a>
          </nav>

          {/* CTA Right */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#E52528] hover:bg-[#C81D25] text-white font-bold text-sm shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Contactar Asesor</span>
            </a>
          </div>

          {/* Mobile menu trigger button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden p-2 rounded bg-[#E52528] text-white"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5 fill-white" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          <nav className="flex flex-col gap-2 font-medium text-slate-800">
            <a
              href="#catalogo"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-slate-100 transition-colors"
            >
              Inventario de Autos
            </a>
            <a
              href="#simulador"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-slate-100 transition-colors"
            >
              Simulador de Crédito
            </a>
            <a
              href="#por-que-nosotros"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-slate-100 transition-colors"
            >
              Garantía por Escrito & Respaldo
            </a>
            <a
              href="#vender-auto"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-slate-100 transition-colors"
            >
              Vender mi Auto / Consignación
            </a>
            <a
              href="#sucursal"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-slate-100 transition-colors"
            >
              Ubicación & Cita de Manejo
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded bg-[#E52528] text-white font-bold text-sm shadow-sm"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Contactar por WhatsApp</span>
            </a>
            <a
              href={`tel:${businessInfo.phoneClean}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded border border-slate-300 text-slate-700 font-semibold text-sm"
            >
              <Phone className="w-4 h-4 text-[#E52528]" />
              <span>Llamar al {businessInfo.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

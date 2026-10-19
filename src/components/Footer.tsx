"use client";

import React from "react";
import { businessInfo } from "@/data/inventory";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ChevronRight,
  Award
} from "lucide-react";
import { FacebookIcon, WhatsAppIcon } from "./Icons";
import { Logo } from "./Logo";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111315] text-slate-300 border-t border-slate-800">
      
      {/* Top Banner: Quick Reassurance */}
      <div className="bg-[#1A1D20] border-b border-slate-800 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#111315] border border-red-600/40 text-[#FF4D4D] flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Grupo Visión Automotriz
              </h4>
              <p className="text-xs text-slate-400">
                Garantía legal y comercial respaldada por la Asociación Nacional de Comerciantes en Automóviles.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#E52528] hover:bg-[#C81D25] text-white text-xs font-black uppercase tracking-wider transition-colors shadow-sm"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Chatear por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" className="w-auto" />

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-2">
              Empresa líder en compra, venta y consignación de seminuevos garantizados en la Ciudad de México. Parte de Grupo Visión Automotriz, conglomerado de 7 agencias en CDMX y Zona Metropolitana, con transparencia, respaldo bancario y garantía legal por escrito.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={businessInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded bg-[#1A1D20] hover:bg-[#E52528] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-700"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={businessInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded bg-[#1A1D20] hover:bg-[#E52528] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-700"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-white">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#catalogo" className="hover:text-[#FF4D4D] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#FF4D4D]" />
                  <span>Inventario</span>
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-[#FF4D4D] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#FF4D4D]" />
                  <span>Simulador de Crédito</span>
                </a>
              </li>
              <li>
                <a href="#por-que-nosotros" className="hover:text-[#FF4D4D] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#FF4D4D]" />
                  <span>Garantía & Respaldo</span>
                </a>
              </li>
              <li>
                <a href="#vender-auto" className="hover:text-[#FF4D4D] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#FF4D4D]" />
                  <span>Vender mi Auto</span>
                </a>
              </li>
              <li>
                <a href="#sucursal" className="hover:text-[#FF4D4D] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#FF4D4D]" />
                  <span>Sucursal & Citas</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Vehicles by Type (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-white">
              Categorías
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#catalogo" className="hover:text-[#FF4D4D] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#FF4D4D]" />
                  <span>SUVs y Crossovers Garantizados</span>
                </a>
              </li>
              <li>
                <a href="#catalogo" className="hover:text-[#FF4D4D] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#FF4D4D]" />
                  <span>Sedanes Familiares y Ejecutivos</span>
                </a>
              </li>
              <li>
                <a href="#catalogo" className="hover:text-[#FF4D4D] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#FF4D4D]" />
                  <span>Pickups 4x4 de Trabajo y Lujo</span>
                </a>
              </li>
              <li>
                <a href="#catalogo" className="hover:text-[#FF4D4D] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#FF4D4D]" />
                  <span>Hatchbacks Juveniles y Eficientes</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-white">
              Sucursal & Atención
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FF4D4D] shrink-0 mt-0.5" />
                <span>{businessInfo.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FF4D4D] shrink-0" />
                <a href={`tel:${businessInfo.phoneClean}`} className="hover:text-white transition-colors">
                  {businessInfo.phone} / {businessInfo.phoneAlt}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FF4D4D] shrink-0" />
                <a href={`mailto:${businessInfo.email}`} className="hover:text-white transition-colors">
                  {businessInfo.email}
                </a>
              </p>
              <p className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#FF4D4D] shrink-0 mt-0.5" />
                <span>Lun - Vie: 9:00 - 18:00 | Sáb: 9:00 - 15:00</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} {businessInfo.legalName}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Aviso de Privacidad</span>
            <span>•</span>
            <span>Términos y Condiciones</span>
            <span>•</span>
            <span>Grupo Visión Automotriz</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

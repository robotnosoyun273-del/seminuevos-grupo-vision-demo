"use client";

import React, { useState } from "react";
import { businessInfo } from "@/data/inventory";
import { WhatsAppIcon } from "./Icons";
import { X, MessageCircle } from "lucide-react";

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="bg-[#1A1D20] text-white text-xs py-2 px-3.5 rounded shadow-xl border border-slate-700 flex items-center gap-2 max-w-xs animate-in fade-in slide-in-from-bottom-2">
          <span>
            ¿Buscas un auto o quieres cotizar? <strong className="text-[#FF4D4D]">¡Escríbenos!</strong>
          </span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white cursor-pointer ml-1"
            aria-label="Cerrar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={businessInfo.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 ring-4 ring-white/30"
      >
        <WhatsAppIcon className="w-7 h-7 fill-white" />
      </a>
    </div>
  );
};

"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light"; // dark = for light backgrounds, light = for dark backgrounds
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "dark",
  className = "h-14 w-auto",
  showText = true,
}) => {
  const isLight = variant === "light";

  if (isLight) {
    // Elegant, crisp badge for dark backgrounds (Footer)
    // Eliminates any white halos, fuzzy silhouettes or raster distortion
    return (
      <div className={`inline-flex items-center gap-3 select-none ${className}`}>
        <div className="bg-white px-3.5 py-2 rounded-xl shadow-md border border-slate-700/40 flex items-center">
          <Image
            src="/images/logo-vision-card.png"
            alt="Seminuevos Grupo Visión Automotriz"
            width={240}
            height={80}
            className="h-12 sm:h-13 w-auto object-contain"
            priority
          />
        </div>

        {showText && (
          <div className="hidden sm:flex flex-col pl-2 border-l border-slate-700">
            <span className="text-[11px] font-black uppercase tracking-widest text-[#FF4D4D]">
              Seminuevos
            </span>
            <span className="text-[9px] font-medium tracking-tight text-slate-400">
              7 Agencias CDMX
            </span>
          </div>
        )}
      </div>
    );
  }

  // Standard clean logo for light backgrounds (Navbar) - restored to original compact dimensions
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <div className="relative h-12 w-48 sm:h-14 sm:w-56 shrink-0 flex items-center">
        <Image
          src="/images/logo-vision-dark.png"
          alt="Seminuevos Grupo Visión Automotriz"
          width={280}
          height={80}
          className="object-contain object-left max-h-full w-auto"
          priority
        />
      </div>

      {showText && (
        <div className="hidden sm:flex flex-col pl-2 border-l border-slate-300">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#E52528]">
            Seminuevos
          </span>
          <span className="text-[9px] font-medium tracking-tight text-slate-500">
            7 Agencias CDMX
          </span>
        </div>
      )}
    </div>
  );
};

"use client";

import React, { useState, useMemo } from "react";
import { vehicles, Vehicle } from "@/data/inventory";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SearchFilterWidget } from "@/components/SearchFilterWidget";
import { BrandLogosStrip } from "@/components/BrandLogosStrip";
import { InventoryCatalog } from "@/components/InventoryCatalog";
import { VehicleDetailModal } from "@/components/VehicleDetailModal";
import { SellYourCar } from "@/components/SellYourCar";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { FinancingSimulator } from "@/components/FinancingSimulator";
import { Testimonials } from "@/components/Testimonials";
import { LocationSection } from "@/components/LocationSection";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function HomePage() {
  // Filter States
  const [selectedBody, setSelectedBody] = useState<string>("all");
  const [selectedMake, setSelectedMake] = useState<string>("all");
  const [maxPrice, setMaxPrice] = useState<number>(1000000);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Modal State
  const [activeVehicle, setActiveVehicle] = useState<Vehicle | null>(null);

  // Filtered vehicles calculation
  const filteredVehicles = useMemo(() => {
    return vehicles.filter((v) => {
      // Body filter
      if (selectedBody !== "all" && v.bodyType !== selectedBody) {
        return false;
      }
      // Make filter
      if (selectedMake !== "all" && v.make.toLowerCase() !== selectedMake.toLowerCase()) {
        return false;
      }
      // Price filter
      if (maxPrice < 1000000 && v.price > maxPrice) {
        return false;
      }
      // Search term filter
      if (searchTerm.trim() !== "") {
        const query = searchTerm.toLowerCase();
        const fullString = `${v.make} ${v.model} ${v.version} ${v.year}`.toLowerCase();
        if (!fullString.includes(query)) {
          return false;
        }
      }
      return true;
    });
  }, [selectedBody, selectedMake, maxPrice, searchTerm]);

  // Reset filters handler
  const handleResetFilters = () => {
    setSelectedBody("all");
    setSelectedMake("all");
    setMaxPrice(1000000);
    setSearchTerm("");
  };

  // Shortcut from BrandLogosStrip
  const handleSelectBrand = (brand: string) => {
    setSelectedMake(brand);
    const catalogElement = document.getElementById("catalogo");
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section (Ref 2 Style) */}
        <Hero />

        {/* Floating Quick Search Filter */}
        <SearchFilterWidget
          selectedBody={selectedBody}
          setSelectedBody={setSelectedBody}
          selectedMake={selectedMake}
          setSelectedMake={setSelectedMake}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onReset={handleResetFilters}
          totalFiltered={filteredVehicles.length}
        />

        {/* Brand Logos Strip */}
        <BrandLogosStrip onSelectBrand={handleSelectBrand} />

        {/* Inventory Catalog (Ref 3 Style Tabs & Cards) */}
        <InventoryCatalog
          vehicles={filteredVehicles}
          selectedCategory={selectedBody}
          setSelectedCategory={setSelectedBody}
          onOpenDetails={(v) => setActiveVehicle(v)}
          onResetFilters={handleResetFilters}
        />

        {/* Sell Your Car / Trade-In Valuation */}
        <SellYourCar />

        {/* Why Choose Us & Group Backing */}
        <WhyChooseUs />

        {/* Interactive Financing Simulator (A4 Requirement) */}
        <FinancingSimulator />

        {/* Buyer Testimonials */}
        <Testimonials />

        {/* Location & Visiting Hours (Clinicas Dentales Style) */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp />

      {/* Vehicle Detail Modal */}
      <VehicleDetailModal
        vehicle={activeVehicle}
        onClose={() => setActiveVehicle(null)}
      />
    </div>
  );
}

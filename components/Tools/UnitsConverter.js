"use client";

import React, { useState } from "react";

const UnitsConverter = () => {
  const [value, setValue] = useState("");
  const [activeCategory, setActiveCategory] = useState("length");
  const [fromUnit, setFromUnit] = useState("m");
  const [toUnit, setToUnit] = useState("km");

  const categories = {
    length: {
      name: "Length",
      units: { m: 1, km: 0.001, cm: 100, mm: 1000, inch: 39.3701, ft: 3.28084, mile: 0.000621371 },
      names: { m: "Meters", km: "Kilometers", cm: "Centimeters", mm: "Millimeters", inch: "Inches", ft: "Feet", mile: "Miles" }
    },
    weight: {
      name: "Weight",
      units: { kg: 1, g: 1000, mg: 1000000, lb: 2.20462, oz: 35.274 },
      names: { kg: "Kilograms", g: "Grams", mg: "Milligrams", lb: "Pounds", oz: "Ounces" }
    },
    temp: {
      name: "Temperature",
      units: "special",
      names: { c: "Celsius", f: "Fahrenheit", k: "Kelvin" }
    }
  };

  const convert = () => {
    if (!value || isNaN(value)) return "---";
    const v = parseFloat(value);
    
    if (activeCategory === "temp") {
      let celsius;
      if (fromUnit === "c") celsius = v;
      else if (fromUnit === "f") celsius = (v - 32) * 5/9;
      else celsius = v - 273.15;

      if (toUnit === "c") return celsius.toFixed(2);
      if (toUnit === "f") return (celsius * 9/5 + 32).toFixed(2);
      return (celsius + 273.15).toFixed(2);
    }

    const base = v / categories[activeCategory].units[fromUnit];
    const result = base * categories[activeCategory].units[toUnit];
    return result.toLocaleString(undefined, { maximumFractionDigits: 4 });
  };

  return (
    <div className="w-full relative z-10 animate-fade-in-up">
      <div className="max-w-4xl mx-auto mt-12 md:mt-16 bg-[#111113] border border-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden shadow-black/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center tracking-tight">Units Converter</h2>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.keys(categories).map(cat => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                const units = Object.keys(categories[cat].names);
                setFromUnit(units[0]);
                setToUnit(units[1]);
              }}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat 
                  ? "bg-[#975554] text-white" 
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5"
              }`}
            >
              {categories[cat].name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-4">
            <label className="text-gray-400 text-sm ml-1 font-medium italic">From</label>
            <div className="relative group">
              <input
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Enter value"
                className="w-full bg-black/40 border border-white/10 rounded-2xl p-5 text-white text-xl font-bold focus:border-[#975554] focus:ring-1 focus:ring-[#975554] outline-none transition-all placeholder:text-gray-700"
              />
              <select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
                className="absolute right-3 top-3 bottom-3 bg-white/5 border border-white/10 rounded-xl px-3 text-white text-sm outline-none cursor-pointer hover:bg-white/10 transition-colors"
              >
                {Object.keys(categories[activeCategory].names).map(u => (
                  <option key={u} value={u} className="bg-[#111113]">{categories[activeCategory].names[u]}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-4">
             <label className="text-gray-400 text-sm ml-1 font-medium italic">To</label>
             <div className="relative">
              <div className="w-full bg-black/60 border border-white/5 rounded-2xl p-5 text-white text-xl font-bold flex justify-between items-center shadow-inner min-h-[70px]">
                <span className={!value ? "text-gray-700" : "text-[#975554]"}>{convert()}</span>
                <select
                  value={toUnit}
                  onChange={(e) => setToUnit(e.target.value)}
                  className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white text-sm outline-none cursor-pointer hover:bg-white/10 transition-colors"
                >
                  {Object.keys(categories[activeCategory].names).map(u => (
                    <option key={u} value={u} className="bg-[#111113]">{categories[activeCategory].names[u]}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitsConverter;

'use client';

import { useState, useEffect } from 'react';
import { Calculator, Clock, DollarSign, TrendingUp } from 'lucide-react';

interface ROICalculatorProps {
  className?: string;
}

export default function ROICalculator({ className = '' }: ROICalculatorProps) {
  const [employees, setEmployees] = useState(50);
  const [avgSalary, setAvgSalary] = useState(6000);
  const [hoursSaved, setHoursSaved] = useState(0);
  const [moneySaved, setMoneySaved] = useState(0);
  const [efficiency, setEfficiency] = useState(0);

  useEffect(() => {
    // Obliczenia ROI
    // Zakładamy, że AI oszczędza średnio 10-20 godzin miesięcznie na pracownika
    const hoursPerEmployee = 15; // średnio 15h miesięcznie
    const totalHours = employees * hoursPerEmployee;
    const totalMoney = (totalHours * (avgSalary / 176)) * 12; // 176h = miesiąc roboczy
    
    setHoursSaved(totalHours);
    setMoneySaved(totalMoney);
    setEfficiency(Math.round((totalHours / (employees * 160)) * 100)); // 160h = roboczy miesiąc
  }, [employees, avgSalary]);

  return (
    <section className={`py-24 bg-white ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Kalkulator ROI</h2>
          <p className="text-slate-500">Sprawdź ile możesz zaoszczędzić z Infinity Tech</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Input Section */}
          <div className="space-y-8">
            <div className="bg-slate-50 rounded-2xl p-6">
              <label className="block text-sm font-medium text-slate-700 mb-3">
                Liczba pracowników: <span className="text-indigo-600 font-bold">{employees}</span>
              </label>
              <input
                type="range"
                min="5"
                max="500"
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-2">
                <span>5</span>
                <span>500</span>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6">
              <label className="block text-sm font-medium text-slate-700 mb-3">
                Średnie wynagrodzenie (netto): <span className="text-indigo-600 font-bold">{avgSalary.toLocaleString()} PLN</span>
              </label>
              <input
                type="range"
                min="3000"
                max="25000"
                step="1000"
                value={avgSalary}
                onChange={(e) => setAvgSalary(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-2">
                <span>3000 PLN</span>
                <span>25000 PLN</span>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="grid gap-4">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-6 h-6" />
                <span className="text-white/80">Oszczędność czasu rocznie</span>
              </div>
              <div className="text-4xl font-bold">
                {hoursSaved.toLocaleString()} <span className="text-xl">godzin</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="w-6 h-6" />
                <span className="text-white/80">Oszczędność rocznie</span>
              </div>
              <div className="text-4xl font-bold">
                {moneySaved.toLocaleString()} <span className="text-xl">PLN</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-6 h-6" />
                <span className="text-white/80">Wzrost efektywności</span>
              </div>
              <div className="text-4xl font-bold">
                {efficiency}%{/* Added closing tag for text-4xl */}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            * Kalkulacje są szacunkowe. Rzeczywiste wyniki zależą od specyfiki Twojej firmy.
          </p>
        </div>
      </div>
    </section>
  );
}

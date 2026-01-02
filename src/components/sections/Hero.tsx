"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.15),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            {t.hero.availability}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            {t.hero.title} <br />
            <span className="text-gradient">{t.hero.highlight}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#contact"
              className="px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] flex items-center gap-2 group"
            >
              {t.hero.cta_start}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#portfolio"
              className="px-8 py-4 bg-white/5 text-white font-medium rounded-full hover:bg-white/10 border border-white/10 transition-all backdrop-blur-sm flex items-center gap-2"
            >
              {t.hero.cta_portfolio}
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] pointer-events-none" />
    </section>
  );
}

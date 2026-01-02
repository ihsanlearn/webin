"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Blocks, Database, FileCode2, Palette, Sparkles, Server } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t.about.title} <br />
              <span className="text-gradient">{t.about.highlight}</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {t.about.p1}
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {t.about.p2}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.about.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-gray-300 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Abstract Visual Representation */}
            <div className="aspect-square rounded-full bg-linear-to-tr from-primary/20 to-purple-500/20 blur-3xl absolute inset-0 -z-10" />
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/10 rounded-full blur-2xl" />
               <div className="relative z-10 grid grid-cols-2 gap-6">
                 <div className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                   <Blocks className="w-10 h-10 text-white mb-2" />
                   <span className="text-sm text-gray-400">Next.js</span>
                 </div>
                 <div className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                   <Database className="w-10 h-10 text-emerald-400 mb-2" />
                   <span className="text-sm text-gray-400">Supabase</span>
                 </div>
                 <div className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                   <FileCode2 className="w-10 h-10 text-blue-400 mb-2" />
                   <span className="text-sm text-gray-400">TypeScript</span>
                 </div>
                 <div className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                   <Palette className="w-10 h-10 text-cyan-400 mb-2" />
                   <span className="text-sm text-gray-400">Tailwind</span>
                 </div>
                 <div className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                   <Sparkles className="w-10 h-10 text-purple-400 mb-2" />
                   <span className="text-sm text-gray-400">Framer</span>
                 </div>
                 <div className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                   <Server className="w-10 h-10 text-orange-400 mb-2" />
                   <span className="text-sm text-gray-400">PostgreSQL</span>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

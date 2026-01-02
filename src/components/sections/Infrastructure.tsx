"use client";

import { motion } from "framer-motion";
import { Globe, Cloud, Code2, Handshake } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Infrastructure() {
  const { t } = useLanguage();

  const icons = [
    <Globe key="1" className="w-8 h-8 text-primary" />,
    <Cloud key="2" className="w-8 h-8 text-primary" />,
    <Code2 key="3" className="w-8 h-8 text-primary" />,
    <Handshake key="4" className="w-8 h-8 text-primary" />,
  ];

  return (
    <section id="infrastructure" className="py-24 relative overflow-hidden bg-black/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            {t.infrastructure.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            {t.infrastructure.subtitle}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {t.infrastructure.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                {icons[index]}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

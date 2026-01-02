"use client";

import { motion } from "framer-motion";
import { Layout, Briefcase, UserCircle, Rocket } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  const icons = [
    <Briefcase key="1" className="w-8 h-8 text-indigo-400" />,
    <UserCircle key="2" className="w-8 h-8 text-purple-400" />,
    <Rocket key="3" className="w-8 h-8 text-pink-400" />,
    <Layout key="4" className="w-8 h-8 text-emerald-400" />,
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.services.title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all group"
            >
              <div className="mb-4 p-3 bg-white/5 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                {icons[index]}
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

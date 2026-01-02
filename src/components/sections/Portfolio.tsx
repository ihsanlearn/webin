"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import absnt from "@/../public/absnt.png"
import hackthic from "@/../public/hackthic.png"

const projectVisuals = [
  {
    gradient: "bg-gradient-to-br from-indigo-500 to-purple-600",
    tags: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS", "Framer Motion", "PostgreSQL"],
    link: "https://absnt.iihn.fun",
    hasImage: absnt
  },
  {
    gradient: "bg-gradient-to-br from-emerald-500 to-teal-600",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://hackthic.iihn.fun",
    hasImage: hackthic
  },
  {
    gradient: "bg-gradient-to-br from-orange-500 to-rose-600",
    tags: ["Development"],
    link: "#",
    hasImage: ""
  }
];

export default function Portfolio() {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="py-24 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.portfolio.title}</h2>
            <p className="text-gray-400">
              {t.portfolio.subtitle}
            </p>
          </div>
          <Link 
            href="https://github.com/ihsanlearn"
            className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            {t.portfolio.github} <Github className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.portfolio.items.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/5 hover:border-white/10 transition-all hover:-translate-y-1"
            >
              {/* Visual Placeholder */}
              <div className="h-48 w-full">
                {
                  (projectVisuals[index].hasImage != "") ? <Image className="object-contain" src={projectVisuals[index].hasImage} alt="" /> : <div className={`h-full w-full ${projectVisuals[index].gradient} opacity-80 group-hover:opacity-100 transition-opacity`} />
                }
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-medium text-primary mb-1 block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <Link 
                    href={projectVisuals[index].link}
                    target="_blank"
                    className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
                
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {projectVisuals[index].tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-white/5 text-xs text-gray-300 rounded-full border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link 
            href="#"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            {t.portfolio.github} <Github className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

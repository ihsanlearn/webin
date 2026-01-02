"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Sparkles, FolderInput, ClipboardCheck, Rocket, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { clsx } from "clsx";

export default function Process() {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0); // Desktop state (always 0-4)
  const [mobileStep, setMobileStep] = useState<number>(-1); // Mobile state (can be -1)

  const icons = [
    <MessageSquare key="1" className="w-6 h-6" />,
    <Sparkles key="2" className="w-6 h-6" />,
    <FolderInput key="3" className="w-6 h-6" />,
    <ClipboardCheck key="4" className="w-6 h-6" />,
    <Rocket key="5" className="w-6 h-6" />,
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-white/5 bg-opacity-5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.process.title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t.process.subtitle}
          </p>
        </div>

        {/* Mobile Accordion View (< 1024px) */}
        <div className="flex flex-col gap-4 lg:hidden">
          {t.process.steps.map((step, index) => (
            <div
              key={index}
              className={clsx(
                "rounded-2xl border transition-all duration-300 overflow-hidden",
                mobileStep === index
                  ? "bg-white/5 border-primary/50 shadow-[0_0_20px_rgba(99,102,241,0.1)]"
                  : "bg-transparent border-white/10"
              )}
            >
              <button
                onClick={() => setMobileStep(mobileStep === index ? -1 : index)}
                className="w-full flex items-center gap-4 p-4 text-left"
              >
                <div
                  className={clsx(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-colors shrink-0",
                    mobileStep === index ? "bg-primary text-white" : "bg-white/10 text-gray-400"
                  )}
                >
                  {icons[index]}
                </div>
                <div className="flex-1">
                  <h3 className={clsx("font-bold transition-colors", mobileStep === index ? "text-white" : "text-gray-400")}>
                    {step.title}
                  </h3>
                </div>
                <ChevronRight
                  className={clsx(
                    "w-5 h-5 transition-transform text-gray-500",
                    mobileStep === index ? "rotate-90 text-primary" : ""
                  )}
                />
              </button>

              <AnimatePresence>
                {mobileStep === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-4 pt-0 border-t border-white/5">
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed mt-4">
                        {step.description}
                      </p>

                      <div className="bg-black/20 rounded-xl p-4 border border-white/5">
                        <h4 className="text-primary text-sm font-bold mb-3 flex items-center gap-2">
                          <Sparkles className="w-3 h-3" />
                          {step.details.title}
                        </h4>
                        <div className="grid gap-3">
                          {step.details.items.map((item, i) => (
                            <div key={i} className="flex flex-col gap-1">
                              <span className="text-[10px] font-bold px-2 py-1 rounded bg-white/5 text-primary border border-primary/20 w-fit">
                                {item.label}
                              </span>
                              <span className="text-gray-300 text-xs pl-1">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Desktop Master-Detail View (>= 1024px) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-12">
          {/* Steps Navigation */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {t.process.steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={clsx(
                  "flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-300 group border",
                  activeStep === index
                    ? "bg-white/5 border-primary/50 shadow-[0_0_30px_rgba(99,102,241,0.1)]"
                    : "bg-transparent border-transparent hover:bg-white/5"
                )}
              >
                <div
                  className={clsx(
                    "w-12 h-12 rounded-full flex items-center justify-center transition-colors",
                    activeStep === index
                      ? "bg-primary text-white"
                      : "bg-white/10 text-gray-400 group-hover:bg-white/20 group-hover:text-white"
                  )}
                >
                  {icons[index]}
                </div>
                <div className="flex-1">
                  <h3
                    className={clsx(
                      "text-lg font-bold transition-colors",
                      activeStep === index ? "text-white" : "text-gray-400 group-hover:text-white"
                    )}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-1 group-hover:text-gray-400">
                    {step.description}
                  </p>
                </div>
                <ChevronRight
                  className={clsx(
                    "w-5 h-5 transition-transform text-gray-500",
                    activeStep === index ? "translate-x-1 text-primary" : "group-hover:text-gray-300"
                  )}
                />
              </button>
            ))}
          </div>

          {/* Active Detail View */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 relative overflow-hidden"
              >
                {/* Background Decor */}
                <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                      {icons[activeStep]}
                    </div>
                    <h3 className="text-2xl font-bold">{t.process.steps[activeStep].title}</h3>
                  </div>

                  <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    {t.process.steps[activeStep].description}
                  </p>

                  {/* Dynamic Details Rendering */}
                  <div className="bg-black/20 rounded-2xl p-6 border border-white/5">
                    <h4 className="text-primary font-bold mb-4 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      {t.process.steps[activeStep].details.title}
                    </h4>
                    <div className="grid gap-4">
                      {t.process.steps[activeStep].details.items.map((item, i) => (
                        <div key={i} className="flex gap-4 items-start group">
                          <span className="text-xs font-bold px-3 py-1.5 rounded bg-white/5 text-gray-400 border border-white/5 w-28 shrink-0 text-center group-hover:border-primary/20 group-hover:text-primary transition-colors">
                            {item.label}
                          </span>
                          <span className="text-gray-300 text-sm py-0.5">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

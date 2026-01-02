"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Code2, Globe, ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { useLanguage } from "@/context/LanguageContext";
import { type Language } from "@/lib/translations";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.services, href: "#services" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.portfolio, href: "#portfolio" },
    { name: t.nav.contact, href: "#contact" },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: "en", label: "English" },
    { code: "id", label: "Indonesia" },
  ];

  return (
    <nav
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "glass border-white/10 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
            <Code2 className="w-6 h-6 text-primary" />
          </div>
          <span className="text-xl font-bold text-transparent bg-linear-to-r from-white to-gray-400 bg-clip-text">
            WebIn
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors px-3 py-2 rounded-full hover:bg-white/5"
            >
              <Globe className="w-4 h-4" />
              <span>{languages.find(l => l.code === language)?.label}</span>
              <ChevronDown className={clsx("w-3 h-3 transition-transform", isLangOpen && "rotate-180")} />
            </button>

            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-40 bg-zinc-900 border border-white/10 rounded-xl shadow-xl overflow-hidden py-1"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangOpen(false);
                      }}
                      className="w-full text-left px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-white flex items-center justify-between group"
                    >
                      {lang.label}
                      {language === lang.code && <Check className="w-3.5 h-3.5 text-primary" />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="#contact"
            className="px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary/90 transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]"
          >
            {t.nav.started}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
         <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1 text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase">{language}</span>
            </button>
             <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-32 bg-zinc-900 border border-white/10 rounded-xl shadow-xl overflow-hidden py-1 z-50"
                >
                   {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangOpen(false);
                      }}
                      className="w-full text-left px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-white flex items-center justify-between"
                    >
                      {lang.label}
                      {language === lang.code && <Check className="w-3.5 h-3.5 text-primary" />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
         </div>
          
          <button
            className="text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-300 hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 w-full py-3 bg-primary text-center text-white font-bold rounded-lg"
              >
                {t.nav.started}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

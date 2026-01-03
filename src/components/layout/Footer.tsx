"use client";

import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, X } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const { t } = useLanguage();
  const [activeModal, setActiveModal] = useState<"privacy" | "terms" | null>(null);

  const icons = [
    <Facebook key="1" className="w-5 h-5" />,
    <Twitter key="2" className="w-5 h-5" />,
    <Instagram key="3" className="w-5 h-5" />,
    <Linkedin key="4" className="w-5 h-5" />,
  ];

  return (
    <>
      <footer className="bg-background border-t border-white/5 py-12 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold lowercase text-white">ambaweb</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              {t.footer.description}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold">{t.footer.services}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Landing Page</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Company Profile</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold">{t.footer.company}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#about" className="hover:text-primary transition-colors">{t.nav.about}</Link></li>
              <li><Link href="#portfolio" className="hover:text-primary transition-colors">{t.nav.portfolio}</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold">{t.footer.contact}</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>ambaweb@iihn.fun</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+62 856 5983 2988</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Yogyakarta, Indonesia</span>
              </li>
            </ul>
            <div className="flex gap-4 pt-2">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">{icons[0]}</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">{icons[1]}</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">{icons[2]}</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">{icons[3]}</Link>
            </div>
          </div>
        </div>

        <div className="container mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} ambaweb. {t.footer.rights}</p>
          <div className="flex gap-6">
            <button
              onClick={() => setActiveModal("privacy")}
              className="hover:text-primary transition-colors"
            >
              {t.footer.links.privacy}
            </button>
            <button
              onClick={() => setActiveModal("terms")}
              className="hover:text-primary transition-colors"
            >
              {t.footer.links.terms}
            </button>
          </div>
        </div>
      </footer>

      {/* Policy Modals */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-zinc-900 border border-white/10 rounded-2xl p-8 max-w-lg w-full shadow-2xl relative"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {t.footer.modals[activeModal].title}
              </h3>
              <div className="text-gray-400 leading-relaxed text-sm h-64 overflow-y-auto pr-2 custom-scrollbar">
                <p>{t.footer.modals[activeModal].content}</p>
              </div>
              <div className="mt-6 pt-6 border-t border-white/5 flex justify-end">
                <button
                  onClick={() => setActiveModal(null)}
                  className="px-6 py-2 bg-primary text-white rounded-full font-bold text-sm hover:bg-indigo-600 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

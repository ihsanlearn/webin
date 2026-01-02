"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-primary/5 blur-3xl -z-10 pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.contact.title}</h2>
            <p className="text-gray-400">
              {t.contact.subtitle}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">{t.contact.form.name}</label>
                  <input
                    name="name"
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">{t.contact.form.email}</label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-300">{t.contact.form.subject}</label>
                <div className="relative">
                  <select 
                    name="subject"
                    id="subject"
                    className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none"
                  >
                    <option className="bg-gray-900">{t.contact.form.options.general}</option>
                    <option className="bg-gray-900">{t.contact.form.options.project}</option>
                    <option className="bg-gray-900">{t.contact.form.options.support}</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">{t.contact.form.message}</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              {status === "success" && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl text-sm font-medium">
                  Send Message Success! We'll get back to you soon.
                </div>
              )}

              {status === "error" && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-sm font-medium">
                  Something went wrong. Please try again later.
                </div>
              )}

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      Sending...
                      <Loader2 className="w-4 h-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      {t.contact.form.submit}
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

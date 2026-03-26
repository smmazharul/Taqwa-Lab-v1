import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is Taqwa Lab completely free to use?",
      answer: "Yes, the core features including prayer times, Qibla compass, and basic Qur'an reading are completely free. We offer a premium subscription for advanced features like offline audio, multiple reciters, and detailed progress tracking."
    },
    {
      question: "How accurate are the prayer times?",
      answer: "Our prayer times are highly accurate. We use your device's GPS location combined with established calculation methods (like Muslim World League, ISNA, Umm al-Qura, etc.) which you can customize in the settings."
    },
    {
      question: "Is my personal data private and secure?",
      answer: "Absolutely. We take your privacy seriously. Your prayer tracking data and personal notes are stored securely. We do not sell your personal data to third parties, and you can delete your account and data at any time."
    },
    {
      question: "Can I use the app offline?",
      answer: "Yes! Once downloaded, you can access the Qur'an text, your saved bookmarks, and the Qibla compass offline. Audio recitations require an internet connection unless you download them for offline use (Premium feature)."
    },
    {
      question: "Which languages are supported?",
      answer: "The app interface is currently available in English, Arabic, French, Urdu, and Indonesian. Qur'an translations are available in over 40 languages."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[var(--surface)] border-t border-[var(--border)]">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[var(--text-muted)] text-lg"
          >
            Got questions? We've got answers to help you get started.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className="border border-[var(--border)] rounded-2xl overflow-hidden bg-[var(--background)] transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
              >
                <span className="font-semibold text-[var(--foreground)] pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`text-[var(--primary)] transition-transform duration-300 flex-shrink-0 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`} 
                  size={20} 
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-[var(--text-muted)] leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion, useScroll, useTransform } from 'motion/react';
import { Apple, Play } from 'lucide-react';

export default function CTA() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <section id="download" className="py-24 bg-[#1a3a30] relative overflow-hidden">
      {/* Animated Background Blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[var(--gold)] blur-[100px] pointer-events-none z-0"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          rotate: [0, -90, 0],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[var(--primary-light)] blur-[120px] pointer-events-none z-0"
      />

      {/* Background Pattern */}
      <motion.div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ 
             backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, #ffffff 35px, #ffffff 70px), repeating-linear-gradient(-45deg, transparent, transparent 35px, #ffffff 35px, #ffffff 70px)',
             y: yBg
           }}>
      </motion.div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Begin Your Journey Today
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light"
        >
          Join our growing community and experience Islam in a modern, accessible way. Available on all your devices.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://apps.apple.com/us/app/muslim-daily-prayer-quran/id6757372635" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-[#1a3a30] px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
          >
            <Apple size={24} />
            <span>App Store</span>
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#" 
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#1a3a30] transition-all"
          >
            <Play size={24} />
            <span>Google Play</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

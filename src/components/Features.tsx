import { motion, useScroll, useTransform } from 'motion/react';
import { BookOpen, Clock, Compass, Heart, Calendar, Moon } from 'lucide-react';
import { useRef } from 'react';

export default function Features() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const features = [
    {
      icon: <BookOpen size={32} />,
      title: "Interactive Qur'an",
      description: "Read, listen, and memorize with word-by-word highlighting, multiple reciters, and beautiful Mushaf-style fonts."
    },
    {
      icon: <Clock size={32} />,
      title: "Accurate Prayer Times",
      description: "Never miss a prayer with precise times based on your location, complete with customizable Adhan notifications."
    },
    {
      icon: <Heart size={32} />,
      title: "Digital Tasbih",
      description: "Keep track of your dhikr and daily remembrance with our elegant and easy-to-use digital counter."
    },
    {
      icon: <Compass size={32} />,
      title: "Qibla Compass",
      description: "Find the exact direction of the Kaaba from anywhere in the world with our GPS-powered accuracy."
    },
    {
      icon: <Moon size={32} />,
      title: "Essential Du'a",
      description: "Access a comprehensive collection of authentic supplications for every occasion and daily need."
    },
    {
      icon: <Calendar size={32} />,
      title: "Islamic Calendar",
      description: "Stay updated with important Islamic dates, Hijri calendar events, and spiritual reminders throughout the year."
    }
  ];

  return (
    <section ref={containerRef} id="features" className="py-24 bg-[var(--surface)] relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div style={{ y: y1 }} className="absolute top-20 left-10 w-32 h-32 bg-[var(--primary)] opacity-5 rounded-full blur-2xl pointer-events-none" />
      <motion.div style={{ y: y2 }} className="absolute bottom-20 right-10 w-48 h-48 bg-[var(--gold)] opacity-5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4"
          >
            Everything You Need for Your Spiritual Journey
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[var(--text-muted)] text-lg"
          >
            Thoughtfully designed features to help you grow closer to Allah and maintain your daily practices.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-[var(--background)] p-8 rounded-3xl border border-[var(--border)] shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">{feature.title}</h3>
              <p className="text-[var(--text-muted)] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion, useScroll, useTransform } from 'motion/react';
import { Quote } from 'lucide-react';
import { useRef } from 'react';

export default function Testimonials() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const testimonials = [
    {
      quote: "This app has transformed my relationship with the Qur'an. The word-by-word audio feature helps me understand and memorize verses beautifully. May Allah reward the developers.",
      author: "Amina Hassan",
      location: "London, UK",
      initial: "A"
    },
    {
      quote: "Never missed a prayer since I started using Nūr. The accurate prayer times and gentle notifications have made it so easy to stay consistent with my salah. Alhamdulillah!",
      author: "Yusuf Ahmed",
      location: "Toronto, Canada",
      initial: "Y"
    },
    {
      quote: "The design is so peaceful and respectful. It feels like the developers truly understand what Muslims need. The du'a collection is comprehensive and the interface is beautiful.",
      author: "Fatima Zahra",
      location: "Dubai, UAE",
      initial: "F"
    }
  ];

  return (
    <section ref={containerRef} id="testimonials" className="py-24 bg-[var(--background)] relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div style={{ y: y1 }} className="absolute top-40 left-0 w-64 h-64 bg-[var(--primary)] opacity-[0.03] rounded-full blur-3xl pointer-events-none" />
      <motion.div style={{ y: y2 }} className="absolute bottom-40 right-0 w-64 h-64 bg-[var(--gold)] opacity-[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4"
          >
            What Our Community Says
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[var(--text-muted)] text-lg"
          >
            Join thousands of Muslims strengthening their faith daily.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-[var(--surface)] p-8 rounded-3xl shadow-sm hover:shadow-2xl border border-[var(--border)] relative overflow-hidden transition-all duration-300 group"
            >
              <Quote className="absolute top-6 left-6 text-[var(--gold)] opacity-20 w-16 h-16 group-hover:scale-110 group-hover:opacity-30 transition-all duration-300" />
              
              <div className="relative z-10">
                <p className="text-[var(--foreground)] leading-relaxed mb-8 italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] text-white flex items-center justify-center font-bold text-lg shadow-md">
                    {testimonial.initial}
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--primary)]">{testimonial.author}</h4>
                    <p className="text-sm text-[var(--text-muted)]">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

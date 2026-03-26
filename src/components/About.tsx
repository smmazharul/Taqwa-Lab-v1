import { motion } from 'motion/react';
import { Heart, Globe, Shield, Users } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Heart className="text-[var(--gold)]" size={24} />,
      title: "Built with Ihsan",
      description: "We strive for excellence in every pixel and line of code, ensuring a seamless and beautiful experience."
    },
    {
      icon: <Globe className="text-[var(--gold)]" size={24} />,
      title: "Global Community",
      description: "Connecting Muslims worldwide through shared prayer times, Quranic recitation, and spiritual growth."
    },
    {
      icon: <Shield className="text-[var(--gold)]" size={24} />,
      title: "Privacy First",
      description: "Your data is yours. We respect your privacy and never sell your personal information or usage habits."
    },
    {
      icon: <Users className="text-[var(--gold)]" size={24} />,
      title: "For Everyone",
      description: "Designed to be accessible and intuitive for users of all ages and technological backgrounds."
    }
  ];

  return (
    <section id="about" className="py-24 bg-[var(--surface-hover)] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--primary)] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[var(--gold)] opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h2 className="text-sm font-bold text-[var(--gold)] uppercase tracking-wider mb-2">About Taqwa Lab</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-6">
              Empowering your spiritual journey through modern technology.
            </h3>
            <p className="text-lg text-[var(--text-muted)] mb-6 leading-relaxed">
              At Taqwa Lab, we believe that technology should serve our faith, not distract from it. Our mission is to build beautifully crafted, reliable, and privacy-focused tools that help Muslims around the world stay connected to their daily spiritual practices.
            </p>
            <p className="text-lg text-[var(--text-muted)] mb-8 leading-relaxed">
              Whether you are looking for accurate prayer times, a seamless Quran reading experience, or a way to track your daily habits, we are here to support you every step of the way.
            </p>
            
            <div className="flex gap-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-[var(--primary)]">2M+</span>
                <span className="text-sm text-[var(--text-muted)] font-medium">Active Users</span>
              </div>
              <div className="w-px bg-[var(--border)] mx-2"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-[var(--primary)]">4.9</span>
                <span className="text-sm text-[var(--text-muted)] font-medium">App Store Rating</span>
              </div>
              <div className="w-px bg-[var(--border)] mx-2"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-[var(--primary)]">150+</span>
                <span className="text-sm text-[var(--text-muted)] font-medium">Countries</span>
              </div>
            </div>
          </motion.div>

          {/* Values Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 grid sm:grid-cols-2 gap-6"
          >
            {values.map((value, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-[var(--surface)] p-6 rounded-2xl shadow-sm border border-[var(--border)]"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--background)] flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-[var(--foreground)] mb-2">{value.title}</h4>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

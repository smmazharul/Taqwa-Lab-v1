import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

function Counter({ value, suffix = '', label }: { value: number, suffix?: string, label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = value / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-md">
        {count}{suffix}
      </div>
      <div className="text-lg opacity-90 font-light">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full border-[40px] border-white"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full border-[40px] border-white"
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
            hidden: {}
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <Counter value={500} suffix="K+" label="Active Users" />
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <Counter value={150} suffix="+" label="Countries" />
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <Counter value={4.9} suffix="" label="App Rating" />
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <Counter value={10} suffix="M+" label="Prayers Tracked" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

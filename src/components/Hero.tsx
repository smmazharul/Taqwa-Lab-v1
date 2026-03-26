import { motion, useMotionValue, useTransform, useScroll } from 'motion/react';
import { Play, CheckCircle2, BookOpen, Compass, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
import DownloadDropdown from './DownloadDropdown';

export default function Hero() {
  const [activeWord, setActiveWord] = useState(0);
  const words = ['الْحَمْدُ', 'لِلَّهِ', 'رَبِّ', 'الْعَالَمِينَ'];

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x1 = useTransform(mouseX, [-500, 500], [-20, 20]);
  const y1 = useTransform(mouseY, [-500, 500], [-20, 20]);
  
  const x2 = useTransform(mouseX, [-500, 500], [20, -20]);
  const y2 = useTransform(mouseY, [-500, 500], [20, -20]);

  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);
  const yMockups = useTransform(scrollY, [0, 500], [0, 50]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % words.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col items-center justify-center">
      {/* Animated Background Blobs */}
      <motion.div 
        style={{ y: useTransform(scrollY, [0, 500], [0, 200]) }}
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[var(--primary)] blur-[100px] pointer-events-none z-0"
      />
      <motion.div 
        style={{ y: useTransform(scrollY, [0, 500], [0, -100]) }}
        animate={{ 
          scale: [1, 1.5, 1],
          rotate: [0, -90, 0],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[var(--gold)] blur-[120px] pointer-events-none z-0"
      />

      {/* Background Pattern */}
      <motion.div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" 
           style={{ 
             backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, var(--primary) 35px, var(--primary) 70px), repeating-linear-gradient(-45deg, transparent, transparent 35px, var(--primary) 35px, var(--primary) 70px)',
             y: useTransform(scrollY, [0, 500], [0, 100])
           }}>
      </motion.div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div style={{ y: yText, opacity: opacityText }} className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--primary)] mb-6 tracking-tight text-balance"
          >
            Your Complete Islamic Companion
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-[var(--text-muted)] font-light"
          >
            Experience the beauty of faith through modern technology with our beautifully crafted tools for your spiritual journey.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <DownloadDropdown 
              text="Download App" 
              icon={<Play size={20} fill="currentColor" />}
              buttonClassName="w-full sm:w-auto bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
            />
            <a href="#features" className="w-full sm:w-auto bg-[var(--surface)] text-[var(--primary)] border border-[var(--border)] px-8 py-4 rounded-full font-bold text-lg hover:bg-[var(--surface-hover)] transition-all flex items-center justify-center">
              Explore Features
            </a>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: yMockups }} className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Desktop Monitor Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ x: x1, y: y1 }}
            className="relative flex flex-col items-center w-full max-w-[600px]"
          >
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-2xl p-4 pb-6 shadow-2xl relative"
            >
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
              <div className="bg-white dark:bg-gray-50 rounded-lg overflow-hidden shadow-inner aspect-[16/10] flex flex-col">
                <div className="flex-1 p-8 flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-50 dark:from-gray-50 dark:to-gray-100">
                  <div className="text-center mb-8 pb-4 border-b-2 border-[var(--gold)] w-full max-w-sm">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Surah Al-Fatiha · Ayah 1-2</p>
                    <p className="font-arabic text-2xl text-gray-900" dir="rtl">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
                  </div>
                  
                  <div className="font-arabic text-4xl leading-loose text-center text-gray-900 mb-8" dir="rtl">
                    {words.map((word, idx) => (
                      <span 
                        key={idx} 
                        className={`inline-block mx-2 px-2 rounded transition-all duration-300 ${activeWord === idx ? 'text-[var(--gold)] scale-110 drop-shadow-md' : ''}`}
                      >
                        {word}
                      </span>
                    ))}
                  </div>

                  <div className="w-full max-w-md bg-gray-900 rounded-full p-3 px-5 flex items-center gap-4 shadow-xl">
                    <button className="w-10 h-10 bg-[var(--gold)] rounded-full flex items-center justify-center flex-shrink-0 pl-1">
                      <Play size={18} className="text-gray-900 fill-current" />
                    </button>
                    <div className="flex-1 flex items-center gap-3">
                      <span className="text-xs text-gray-300 font-medium">0:12</span>
                      <div className="flex-1 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[var(--gold)] to-yellow-300 w-[35%] rounded-full shadow-[0_0_10px_rgba(212,175,55,0.6)]"></div>
                      </div>
                      <span className="text-xs text-gray-300 font-medium">0:34</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="w-40 h-2 bg-gradient-to-b from-gray-700 to-gray-900 rounded-b-lg"></div>
            <div className="w-64 h-4 bg-gradient-to-b from-gray-800 to-gray-900 rounded-full mt-0 shadow-lg"></div>
            
            <div className="mt-8 text-center bg-[var(--surface)] p-6 rounded-2xl shadow-xl w-full max-w-md border border-[var(--border)]">
              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">eQuran Web</h3>
              <p className="text-sm text-[var(--text-muted)] mb-4">Immersive reading with word-by-word audio highlighting.</p>
              <a href="https://www.equran.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] hover:text-[var(--gold)] transition-colors">
                <BookOpen size={16} /> Explore Web App
              </a>
            </div>
          </motion.div>

          {/* Mobile iPhone Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ x: x2, y: y2 }}
            className="relative flex flex-col items-center"
          >
            <motion.a 
              href="https://apps.apple.com/us/app/muslim-daily-prayer-quran/id6757372635"
              target="_blank"
              rel="noopener noreferrer"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
              className="w-[300px] h-[620px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl relative border-4 border-gray-800 block hover:scale-[1.02] transition-transform"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-2xl z-20"></div>
              <div className="w-full h-full bg-[#0a1929] rounded-[2.25rem] overflow-hidden relative flex flex-col">
                {/* Replace src with your uploaded image path */}
                <img 
                  src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ea/aa/30/eaaa3064-0f75-5d39-4dda-eb8613225ffa/6.5_1.png/230x498bb.webp" 
                  alt="Muslim Daily App Screenshot" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.a>
            
            <div className="absolute -right-12 top-1/2 bg-[var(--surface)] p-4 rounded-xl shadow-xl border border-[var(--border)] max-w-[200px] hidden md:block pointer-events-none">
              <h3 className="text-sm font-bold text-[var(--primary)] mb-1">Muslim Daily</h3>
              <p className="text-xs text-[var(--text-muted)]">Your complete companion in your pocket.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

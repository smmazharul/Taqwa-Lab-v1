import { useState, useRef, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Apple, Play, Globe, ChevronDown, Download } from 'lucide-react';

interface DownloadDropdownProps {
  buttonClassName?: string;
  icon?: ReactNode;
  text?: string;
}

export default function DownloadDropdown({ 
  buttonClassName = "bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2",
  icon = <Download size={18} />,
  text = "Download"
}: DownloadDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const options = [
    { name: 'iOS App', icon: <Apple size={18} />, href: 'https://apps.apple.com/us/app/muslim-daily-prayer-quran/id6757372635' },
    { name: 'Android App', icon: <Play size={18} />, href: '#' },
    { name: 'Web App', icon: <Globe size={18} />, href: 'https://www.equran.com/' },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={buttonClassName}
      >
        {icon}
        <span>{text}</span>
        <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-48 bg-[var(--surface)] border border-[var(--border)] rounded-xl shadow-xl overflow-hidden z-50"
          >
            <div className="py-2">
              {options.map((option, idx) => (
                <a
                  key={idx}
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--surface-hover)] text-[var(--foreground)] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-[var(--primary)]">{option.icon}</span>
                  <span className="font-medium text-sm">{option.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

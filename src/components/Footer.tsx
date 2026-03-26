import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2c5f4f] to-[#86a587] flex items-center justify-center text-white font-bold">
                ☪
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Taqwa Lab
              </span>
            </div>
            <p className="text-slate-400 mb-8 max-w-sm leading-relaxed">
              Dedicated to making Islamic practice accessible, beautiful, and meaningful for Muslims worldwide.
            </p>
            
            {/* Newsletter */}
            <div className="mb-8">
              <h4 className="text-white font-semibold mb-3">Subscribe to our newsletter</h4>
              <form className="flex gap-2 max-w-sm" onSubmit={(e) => e.preventDefault()}>
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-[#86a587] transition-colors"
                  />
                </div>
                <button type="submit" className="bg-[#2c5f4f] hover:bg-[#1f4539] text-white px-4 py-2.5 rounded-lg transition-colors flex items-center justify-center">
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>

            <div className="flex gap-4">
              <motion.a whileHover={{ scale: 1.1, y: -2 }} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#2c5f4f] hover:text-white transition-colors">
                <Facebook size={18} />
              </motion.a>
              <motion.a whileHover={{ scale: 1.1, y: -2 }} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#2c5f4f] hover:text-white transition-colors">
                <Twitter size={18} />
              </motion.a>
              <motion.a whileHover={{ scale: 1.1, y: -2 }} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#2c5f4f] hover:text-white transition-colors">
                <Instagram size={18} />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#home" className="hover:text-[#86a587] transition-colors">Home</a></li>
              <li><a href="#features" className="hover:text-[#86a587] transition-colors">Features</a></li>
              <li><a href="#testimonials" className="hover:text-[#86a587] transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-[#86a587] transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Resources</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-[#86a587] transition-colors">Prayer Times</a></li>
              <li><a href="#" className="hover:text-[#86a587] transition-colors">Qibla Finder</a></li>
              <li><a href="#" className="hover:text-[#86a587] transition-colors">Islamic Calendar</a></li>
              <li><a href="#" className="hover:text-[#86a587] transition-colors">Du'a Collection</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Legal</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-[#86a587] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#86a587] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#86a587] transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#86a587] transition-colors">Support</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Taqwa Lab - Islamic Companion. All rights reserved. Made with ♥ for the Muslim Ummah.</p>
        </div>
      </div>
    </footer>
  );
}

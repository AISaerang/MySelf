import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Palette, Code, Leaf, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const iconMap = {
  Heart,
  Palette,
  Code,
  Leaf,
};

const Layout = ({ children, segments }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();
  const location = useLocation();

  const handleUnsupportedClick = () => {
    toast({
      title: "🚧 Fitur ini belum diimplementasikan",
      description: "Tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀",
    });
  };

  return (
    <>
      <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden relative">
        <div className="absolute inset-0 overflow-hidden -z-10">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        <nav className="fixed top-0 left-0 right-0 z-50 glass">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link to="/">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="font-display text-2xl font-bold gradient-text cursor-pointer"
                >
                  AISaerang
                </motion.div>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:bg-white/10"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </nav>
        
        <AnimatePresence>
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: "-100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "-100%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed inset-0 bg-[#0a0a0a]/95 backdrop-blur-lg z-40 pt-24 px-6"
                >
                    <div className="max-w-4xl mx-auto">
                        <ul className="flex flex-col items-center space-y-8">
                            {segments.map((segment) => {
                                const Icon = iconMap[segment.icon];
                                return (
                                    <li key={segment.id} onClick={() => setIsMenuOpen(false)}>
                                        <Link to={`/segment/${segment.id}`} className="group">
                                            <div className="flex items-center space-x-4">
                                                <Icon className={`w-8 h-8 ${segment.color} group-hover:scale-110 transition-transform`} />
                                                <span className="font-heading text-3xl text-white/80 group-hover:gradient-text transition-all">{segment.title}</span>
                                            </div>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>


        <main className="pt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
        
        <footer className="py-12 px-6 border-t border-white/10 mt-20">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="font-display text-2xl font-bold gradient-text mb-4">
                AISaerang.com
              </div>
              <p className="font-body text-white/60 mb-6">
                Where identity orbits purpose
              </p>
              <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 text-white/40">
                <span className="font-body text-sm">Christian Believer</span>
                <span>•</span>
                <span className="font-body text-sm">BI Consultant</span>
                <span>•</span>
                <span className="font-body text-sm">Musician</span>
                <span>•</span>
                <span className="font-body text-sm">Earth Enthusiast</span>
              </div>
            </motion.div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
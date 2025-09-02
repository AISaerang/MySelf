import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Palette, Code, Leaf, ArrowRight, Database, Globe, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';

const iconMap = {
  Heart,
  Palette,
  Code,
  Leaf,
};

const HomePage = ({ segments }) => {
  return (
    <>
      <Helmet>
        <title>AISaerang - Where Identity Orbits Purpose</title>
        <meta name="description" content="Ruang personal digital yang mengorbitkan karya, pemikiran, dan perjalanan hidup sebagai Christian Believer, Business Intelligence Consultant, Musician Composer, dan Earth Enthusiast." />
      </Helmet>

      {/* Hero Section */}
      <section className="min-h-[calc(100vh-80px)] w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 xl:px-24">
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] flex-shrink-0 mb-8 lg:mb-0 lg:-ml-24">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full glass glow-orange flex items-center justify-center pulse-glow">
              <div className="text-center">
                <div className="font-display text-xl font-bold gradient-text mb-1">AI</div>
                <div className="font-display text-lg gradient-text">Saerang</div>
              </div>
            </div>
          </motion.div>

          {segments.map((segment, index) => {
            const Icon = iconMap[segment.icon];
            return (
              <motion.div
                key={segment.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 orbit-${index + 1}`}
              >
                <Link to={`/segment/${segment.id}`}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-20 h-20 md:w-24 md:h-24 rounded-full glass ${segment.bgColor} cursor-pointer transition-all duration-300 hover:${segment.glowColor} flex items-center justify-center group`}
                  >
                    <div className="text-center">
                      <Icon className={`w-5 h-5 md:w-6 md:h-6 ${segment.color} mx-auto mb-1 group-hover:scale-110 transition-transform`} />
                      <div className="text-xs font-medium text-white/80">{segment.title}</div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center lg:text-left max-w-xl"
        >
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            "Where <span className="gradient-text">Identity</span> Orbits{' '}
            <span className="gradient-text-green">Purpose"</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
            Ruang personal digital yang mengorbitkan karya, pemikiran, dan perjalanan hidup.
          </p>
          <Link to={`/segment/life`}>
            <Button className="btn-orbit bg-gradient-to-r from-[#FF6A3D] to-[#E7C97E] hover:from-[#E7C97E] to-[#FF6A3D] text-black font-semibold px-8 py-3 rounded-full">
              Jelajahi Orbit <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Segments Overview */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Dalam 4 <span className="gradient-text">Dimensi</span> Kehidupan
            </h2>
            <p className="font-body text-lg text-white/70 max-w-3xl mx-auto">
              Setiap segmen adalah portal ke dalam semesta kecil yang penuh arah, kepekaan, dan panggilan hidup.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {segments.map((segment, index) => {
              const Icon = iconMap[segment.icon];
              return (
                <Link to={`/segment/${segment.id}`} key={segment.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="glass rounded-2xl p-6 cursor-pointer group hover:glow-orange transition-all duration-300 h-full flex flex-col"
                  >
                    <div className={`w-16 h-16 rounded-full ${segment.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform flex-shrink-0`}>
                      <Icon className={`w-8 h-8 ${segment.color}`} />
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-3 text-white group-hover:text-[#FF6A3D] transition-colors">
                      {segment.title}
                    </h3>
                    <p className="font-body text-white/70 text-sm leading-relaxed flex-grow">
                      {segment.fullDescription}
                    </p>
                    <div className="mt-4 flex items-center text-[#FF6A3D] text-sm font-medium group-hover:translate-x-2 transition-transform">
                      Jelajahi <ArrowRight className="ml-1 w-4 h-4" />
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">
              Ruang <span className="gradient-text-green">Kontemplatif</span> Digital
            </h2>
            <div className="glass rounded-3xl p-8 md:p-12">
              <p className="font-body text-lg md:text-xl text-white/80 leading-relaxed mb-6">
                Website ini bukan hanya tempat berbagi, tapi ruang untuk menyatukan dunia yang sering dianggap bertolak belakang:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                <div className="flex items-center justify-center space-x-3">
                  <Heart className="w-6 h-6 text-red-400" />
                  <span className="font-medium">Faith</span>
                  <span className="text-white/50">&</span>
                  <Database className="w-6 h-6 text-[#E7C97E]" />
                  <span className="font-medium">Data</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Globe className="w-6 h-6 text-blue-400" />
                  <span className="font-medium">Science</span>
                  <span className="text-white/50">&</span>
                  <Palette className="w-6 h-6 text-[#FF6A3D]" />
                  <span className="font-medium">Art</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Code className="w-6 h-6 text-[#E7C97E]" />
                  <span className="font-medium">Code</span>
                  <span className="text-white/50">&</span>
                  <Heart className="w-6 h-6 text-red-400" />
                  <span className="font-medium">Compassion</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Music className="w-6 h-6 text-[#FF6A3D]" />
                  <span className="font-medium">Creativity</span>
                  <span className="text-white/50">&</span>
                  <Leaf className="w-6 h-6 text-[#87A96B]" />
                  <span className="font-medium">Nature</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
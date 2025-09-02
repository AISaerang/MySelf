import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Palette, Code, Leaf, ArrowLeft, ArrowRight } from 'lucide-react';

const iconMap = {
  Heart,
  Palette,
  Code,
  Leaf,
};

const SegmentPage = ({ segments }) => {
  const { id } = useParams();
  const segment = segments.find((s) => s.id === id);

  if (!segment) {
    return <Navigate to="/" />;
  }

  const currentIndex = segments.findIndex(s => s.id === id);
  const prevSegment = segments[currentIndex - 1];
  const nextSegment = segments[currentIndex + 1];

  const Icon = iconMap[segment.icon];

  return (
    <>
      <Helmet>
        <title>{segment.title} - AISaerang</title>
        <meta name="description" content={segment.fullDescription} />
      </Helmet>

      <div className="min-h-[calc(100vh-80px)] px-6 py-12 md:px-12 md:py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`w-32 h-32 md:w-48 md:h-48 rounded-full ${segment.bgColor} flex items-center justify-center flex-shrink-0 glow-orange`}
              >
                <Icon className={`w-16 h-16 md:w-24 md:h-24 ${segment.color}`} />
              </motion.div>
              <div className="text-center md:text-left">
                <span className="font-body text-lg text-white/70">Segmen</span>
                <h1 className={`font-display text-5xl md:text-7xl font-bold ${segment.color} gradient-text`}>
                  {segment.title}
                </h1>
                <p className="font-body text-lg text-white/80 mt-2">{segment.fullDescription}</p>
              </div>
            </div>
            
            <div className="glass rounded-2xl p-8 md:p-12">
              <h2 className="font-heading text-2xl font-bold mb-6">Refleksi Mendalam</h2>
              <p className="font-body text-white/80 leading-relaxed whitespace-pre-line">
                {segment.longDescription}
              </p>
            </div>
            
            <div className="mt-12">
                <h3 className="text-center font-heading text-xl text-white/70 mb-6">Konten Terkait (Segera Hadir)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="glass rounded-xl p-6 text-center opacity-50">
                            <h4 className="font-heading font-bold text-lg mb-2">Proyek / Artikel {i + 1}</h4>
                            <p className="text-sm text-white/60">Deskripsi singkat akan muncul di sini saat konten sudah tersedia.</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-between items-center mt-16">
              {prevSegment ? (
                <Link to={`/segment/${prevSegment.id}`} className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  <span>{prevSegment.title}</span>
                </Link>
              ) : <div />}
              
              {nextSegment ? (
                <Link to={`/segment/${nextSegment.id}`} className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors">
                   <span>{nextSegment.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : <div />}
            </div>

          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SegmentPage;
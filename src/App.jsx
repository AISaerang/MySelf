import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import HomePage from '@/pages/HomePage';
import SegmentPage from '@/pages/SegmentPage';
import Layout from '@/components/Layout';

const segments = [
  {
    id: 'life',
    title: 'Life',
    icon: 'Heart',
    color: 'text-red-400',
    bgColor: 'bg-red-500/20',
    glowColor: 'glow-red',
    description: 'Kisah iman, refleksi eksistensial, prinsip hidup',
    fullDescription: 'Kisah iman, refleksi eksistensial, prinsip hidup, dan narasi personal yang membentuk fondasi nilai saya.',
    gradient: 'from-red-500/20 to-pink-500/20',
    longDescription: 'Di segmen "Life", saya berbagi perjalanan iman sebagai seorang Christian Believer, merenungkan pertanyaan-pertanyaan eksistensial, dan menguraikan prinsip-prinsip hidup yang menjadi kompas saya. Ini adalah ruang untuk narasi personal yang jujur, refleksi mendalam tentang makna, dan kisah-kisah yang membentuk fondasi nilai-nilai yang saya anut.'
  },
  {
    id: 'art',
    title: 'Art',
    icon: 'Palette',
    color: 'text-[#FF6A3D]',
    bgColor: 'bg-[#FF6A3D]/20',
    glowColor: 'glow-orange',
    description: 'Karya musik dan visual yang menggabungkan teknik & emosi',
    fullDescription: 'Karya musik dan visual yang menggabungkan teknik, emosi, dan impresi — dari komposisi instrumental hingga eksplorasi warna dan tekstur digital.',
    gradient: 'from-[#FF6A3D]/20 to-orange-500/20',
    longDescription: 'Segmen "Art" adalah kanvas digital saya. Di sini, Anda akan menemukan karya musik instrumental yang lahir dari perpaduan teknik dan emosi, serta eksplorasi visual dalam bentuk seni digital. Ini adalah wujud dari upaya saya menerjemahkan impresi, perasaan, dan cerita ke dalam harmoni nada, warna, dan tekstur.'
  },
  {
    id: 'tech',
    title: 'Tech',
    icon: 'Code',
    color: 'text-[#E7C97E]',
    bgColor: 'bg-[#E7C97E]/20',
    glowColor: 'glow-gold',
    description: 'Business Intelligence, Power BI, Python, SQL',
    fullDescription: 'Pemikiran dan proyek dalam Business Intelligence (Power BI, Python, SQL), dikemas secara edukatif dan interaktif — membuka ruang kolaborasi dan pembelajaran.',
    gradient: 'from-[#E7C97E]/20 to-yellow-500/20',
    longDescription: 'Selamat datang di dunia data dan teknologi. Segmen "Tech" adalah wadah saya untuk berbagi pemikiran, studi kasus, dan proyek-proyek terkait Business Intelligence. Saya akan membahas topik seperti Power BI, Python, dan SQL dengan pendekatan yang edukatif dan interaktif, dengan tujuan membuka ruang diskusi, kolaborasi, dan pembelajaran bersama.'
  },
  {
    id: 'nature',
    title: 'Nature',
    icon: 'Leaf',
    color: 'text-[#87A96B]',
    bgColor: 'bg-[#87A96B]/20',
    glowColor: 'glow-green',
    description: 'Kecintaan pada bumi, konservasi, bioteknologi',
    fullDescription: 'Kecintaan saya pada bumi, konservasi, bioteknologi, dan rekoneksi spiritual dengan alam — diwujudkan lewat dokumentasi perjalanan dan riset pribadi.',
    gradient: 'from-[#87A96B]/20 to-green-500/20',
    longDescription: 'Segmen "Nature" adalah ekspresi kecintaan saya pada bumi. Melalui dokumentasi perjalanan, riset pribadi, dan pemikiran tentang konservasi serta bioteknologi, saya mengajak Anda untuk merasakan kembali koneksi spiritual dengan alam. Ini adalah catatan tentang keagungan ciptaan dan tanggung jawab kita untuk menjaganya.'
  }
];

function App() {
  return (
    <Router>
      <Layout segments={segments}>
        <Routes>
          <Route path="/" element={<HomePage segments={segments} />} />
          <Route path="/segment/:id" element={<SegmentPage segments={segments} />} />
        </Routes>
        <Toaster />
      </Layout>
    </Router>
  );
}

export default App;
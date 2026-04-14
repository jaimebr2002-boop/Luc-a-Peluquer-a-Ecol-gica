import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf, Microscope, Scissors, Star, ChevronDown, Instagram, MapPin, Phone, Clock, CalendarCheck, Menu, X, Facebook } from 'lucide-react';

const servicesData = {
  "PELUQUERÍA": [
    { name: "Lavar y marcar", price: "desde 13,90 €" },
    { name: "Lavar, peinar y cortar", price: "33,90 €" },
    { name: "Cortar", price: "20,00 €" },
    { name: "Tinte", price: "41,26 €" },
    { name: "Tinte ecológico", price: "50,59 €" },
    { name: "Color 100% plantas", price: "66,90 €" },
    { name: "Mechas", price: "120,00 €" },
    { name: "Pocas mechas", price: "50,00 €" },
    { name: "Matizar mechas", price: "26,00 €" },
    { name: "GLOSS · Baño de color", price: "18,00 €" },
    { name: "Permanente", price: "65,90 €" },
    { name: "Alisados", price: "250,00 €" },
    { name: "Oxigenación", price: "35,00 €" },
    { name: "Oxidación Terapéutica", price: "45,00 €" }
  ],
  "RECOGIDOS": [
    { name: "Semi recogido", price: "31,00 €" },
    { name: "Recogidos", price: "36,00 €" }
  ],
  "ESTÉTICA": [
    { name: "Manicura", price: "10,00 €" },
    { name: "Pedicura", price: "18,00 €" },
    { name: "Maquillaje", price: "26,00 €" },
    { name: "Tinte de cejas", price: "8,47 €" },
    { name: "Depilación de hilo", price: "9,00 €" }
  ],
  "CABALLEROS": [
    { name: "Corte caballero", price: "12,00 €" },
    { name: "Corte solo máquina", price: "9,00 €" },
    { name: "Arreglo de barba", price: "3,00 €" }
  ]
};

const resultsData = [
  { image: "https://res.cloudinary.com/dfbsqy5ul/image/upload/q_auto/f_auto/v1776101078/500788975_18065451488473010_31014439788719268_n._eyy67t.webp" },
  { image: "https://res.cloudinary.com/dfbsqy5ul/image/upload/q_auto/f_auto/v1776101078/541947595_18075350246473010_248891708811864703_n._rmowc5.jpg" },
  { image: "https://res.cloudinary.com/dfbsqy5ul/image/upload/q_auto/f_auto/v1776101078/542705515_18076233431473010_6203503089647305844_n._oi5spb.jpg" }
];

const reviewsData = [
  { text: "¡Mi experiencia fue fantástica! El corte y el tratamiento superaron mis expectativas. Me encantó saber que usan productos sostenibles. Lucía es muy amable y profesional. ¡Cinco estrellas bien merecidas!", author: "Marta S.F." },
  { text: "Segunda vez que voy y las dos veces salgo encantada. Aplica productos naturales y duraderos. Es una auténtica emprendedora y trabajadora incansable.", author: "Paula E.O." },
  { text: "Lucía es una profesional con todas las letras. Atención impecable. Primera vez haciéndome las cejas con hilo y quedaron INCREÍBLES.", author: "Sonia F." },
  { text: "Peluquería de lujo en Oviedo con productos ecológicos de primera calidad. Encantada con las mechas. Sin duda un sitio al que acudir.", author: "AnaMaria S.M." },
  { text: "Toda una experiencia sensorial. Lucía es un encanto y el cabello agradece el mimo. Única en Oviedo.", author: "Celeste C.C." },
  { text: "¡Increíble servicio! Salí con un color espectacular y un brillo que no conseguía en otros sitios. Muy recomendable.", author: "Elena R." }
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState('PELUQUERÍA');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre Nosotros', href: '#sobre-nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Resultados', href: '#resultados' },
    { name: 'Reseñas', href: '#resenas' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <div className="min-h-screen relative selection:bg-brand-silver selection:text-brand-bg">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-bg/90 backdrop-blur-md shadow-lg py-4 border-b border-brand-border/20' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 font-display text-2xl tracking-widest text-gradient-silver z-50 relative">
            <img 
              src="https://res.cloudinary.com/dfbsqy5ul/image/upload/q_auto/f_auto/v1776099763/Captura_de_pantalla_2026-04-13_190145-removebg-preview_xxdemc.png" 
              alt="Logo Lucía" 
              className="w-16 h-12"
              referrerPolicy="no-referrer"
            />
            LUCÍA
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="font-sans text-sm tracking-widest uppercase text-brand-text-muted hover:text-brand-silver transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
            <a href="https://booksy.com/es-es/173411_lucia-peluqueria-ecologica_peluqueria_79758_oviedo#ba_s=seo" target="_blank" rel="noopener noreferrer" className="px-6 py-2 border border-brand-silver text-brand-silver font-sans uppercase tracking-[0.15em] text-xs transition-all duration-300 hover:bg-brand-silver hover:text-brand-bg">
              Reservar cita
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-brand-silver z-[60] relative" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-brand-bg/95 backdrop-blur-xl border-b border-brand-border/30 p-6 flex flex-col gap-6 md:hidden shadow-2xl"
            >
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="font-sans text-lg tracking-widest uppercase text-brand-text hover:text-brand-silver transition-colors">
                  {link.name}
                </a>
              ))}
              <a href="https://booksy.com/es-es/173411_lucia-peluqueria-ecologica_peluqueria_79758_oviedo#ba_s=seo" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-4 bg-gradient-silver text-brand-bg text-center font-sans uppercase tracking-[0.15em] text-sm font-medium mt-4">
                Reservar cita
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 radial-glow pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Logo */}
          <div className="flex flex-col items-center">
            <img 
              src="https://res.cloudinary.com/dfbsqy5ul/image/upload/q_auto/f_auto/v1776099763/Captura_de_pantalla_2026-04-13_190145-removebg-preview_xxdemc.png" 
              alt="Logo Lucía" 
              className="w-40 md:w-56 mb-6"
              referrerPolicy="no-referrer"
            />
            <h1 className="font-display text-5xl md:text-7xl tracking-widest text-gradient-silver mb-2">
              LUCÍA
            </h1>
            <p className="font-sans text-xs md:text-sm tracking-[0.2em] text-brand-text-muted uppercase mb-12">
              Peluquería Ecológica
            </p>
          </div>

          {/* Subtitle */}
          <p className="font-sans font-light text-lg md:text-xl text-brand-text-muted mb-10 max-w-2xl">
            Peluquería ecológica de lujo en Oviedo · Productos naturales · Diagnóstico capilar gratuito
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <a 
              href="https://booksy.com/es-es/173411_lucia-peluqueria-ecologica_peluqueria_79758_oviedo#ba_s=seo"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-silver text-brand-bg font-sans uppercase tracking-[0.15em] text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(192,192,192,0.4)] flex items-center justify-center"
            >
              Reservar cita
            </a>
            <a 
              href="#servicios"
              className="px-8 py-4 border border-brand-border text-brand-text font-sans uppercase tracking-[0.15em] text-sm transition-all duration-300 hover:bg-white/5 flex items-center justify-center"
            >
              Ver servicios
            </a>
          </div>
        </motion.div>

        {/* Floating Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 right-8 hidden md:flex items-center gap-3 glass-card px-6 py-3 rounded-full"
        >
          <div className="flex text-brand-gold">
            <Star className="w-4 h-4 fill-current" />
          </div>
          <span className="font-sans text-sm tracking-wide">
            <strong className="font-medium text-brand-text">4.7</strong> <span className="text-brand-text-muted">· Más de 50 reseñas en Google</span>
          </span>
        </motion.div>
        
        {/* Mobile Badge */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="md:hidden mt-12 flex items-center gap-2 text-sm"
        >
          <div className="flex text-brand-gold">
            <Star className="w-4 h-4 fill-current" />
          </div>
          <span className="font-sans tracking-wide">
            <strong className="font-medium text-brand-text">4.7</strong> <span className="text-brand-text-muted">· Más de 50 reseñas</span>
          </span>
        </motion.div>
      </section>

      {/* Sobre Nosotros Section */}
      <section id="sobre-nosotros" className="relative bg-brand-bg-alt py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-display text-4xl md:text-5xl text-brand-text mb-8">
                Más que una peluquería
              </h3>
              <p className="font-sans font-light text-lg md:text-xl text-brand-text-muted leading-relaxed">
                Lucía no solo cuida tu cabello — lo estudia, lo entiende y lo transforma con productos 100% ecológicos y naturales que respetan cada fibra. Con años de experiencia, diagnósticos capilares gratuitos y una atención personalizada que sus clientas describen como única en Oviedo, cada visita es un ritual de belleza consciente.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[3/2] rounded-sm overflow-hidden"
            >
              <img 
                src="https://res.cloudinary.com/dfbsqy5ul/image/upload/q_auto/f_auto/v1776101078/550368528_18077196047473010_7233506781291708493_n._h3ixht.webp" 
                alt="Lucía Peluquería Ecológica" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Productos Ecológicos",
                desc: "Sin químicos agresivos. Solo lo mejor de la naturaleza para tu cabello."
              },
              {
                icon: Microscope,
                title: "Diagnóstico Gratuito",
                desc: "Analizamos tu cuero cabelludo para recomendarte el tratamiento perfecto."
              },
              {
                icon: Scissors,
                title: "Profesionalidad",
                desc: "Más de 50 clientas satisfechas avalan nuestro trabajo en Oviedo."
              }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="glass-card p-8 rounded-sm group hover:-translate-y-2 transition-transform duration-500"
              >
                <pillar.icon className="w-10 h-10 text-brand-silver mb-6 stroke-[1.5]" />
                <h4 className="font-sans uppercase tracking-[0.15em] text-brand-text mb-4 text-sm font-medium">
                  {pillar.title}
                </h4>
                <p className="font-sans font-light text-brand-text-muted leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="relative py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h3 className="font-display text-4xl md:text-5xl text-brand-text mb-4">
              Nuestros Servicios
            </h3>
            <p className="font-sans font-light text-lg text-brand-text-muted tracking-wide">
              Ecología y lujo en cada tratamiento
            </p>
          </motion.div>

          {/* Desktop Tabs */}
          <div className="hidden md:block mb-16">
            <div className="flex justify-center gap-12 mb-12 border-b border-brand-border/50">
              {Object.keys(servicesData).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`pb-4 font-sans uppercase tracking-[0.15em] text-sm font-medium transition-colors relative ${
                    activeCategory === category ? 'text-brand-text' : 'text-brand-text-muted hover:text-brand-silver'
                  }`}
                >
                  {category}
                  {activeCategory === category && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-silver"
                    />
                  )}
                </button>
              ))}
            </div>
            
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {servicesData[activeCategory as keyof typeof servicesData]?.map((service, i) => (
                <div key={i} className="glass-card p-6 rounded-sm border border-brand-border/30 flex flex-col justify-between hover:border-brand-silver/40 transition-colors">
                  <span className="font-sans font-light text-brand-text mb-4 text-lg">{service.name}</span>
                  <span className="font-sans text-brand-gold text-xl">{service.price}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mobile Accordion */}
          <div className="md:hidden flex flex-col gap-4 mb-12">
            {Object.entries(servicesData).map(([category, services]) => (
              <div key={category} className="glass-card rounded-sm overflow-hidden border border-brand-border/30">
                <button 
                  onClick={() => setActiveCategory(activeCategory === category ? '' : category)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-sans uppercase tracking-[0.15em] text-brand-text text-sm font-medium"
                >
                  {category}
                  <ChevronDown className={`w-5 h-5 text-brand-silver transition-transform duration-300 ${activeCategory === category ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeCategory === category && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6"
                    >
                      <div className="flex flex-col gap-3 pt-4 border-t border-brand-border/30">
                        {services.map((service, i) => (
                          <div key={i} className="p-4 border border-brand-border/20 rounded-sm flex flex-col gap-2 bg-brand-bg/40">
                            <span className="font-sans font-light text-brand-text">{service.name}</span>
                            <span className="font-sans text-brand-gold">{service.price}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a 
              href="https://booksy.com/es-es/173411_lucia-peluqueria-ecologica_peluqueria_79758_oviedo#ba_s=seo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-8 py-4 bg-gradient-silver text-brand-bg font-sans uppercase tracking-[0.15em] text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(192,192,192,0.4)] items-center justify-center"
            >
              Reservar mi cita ahora
            </a>
          </div>
        </div>
      </section>

      {/* Resultados Section */}
      <section id="resultados" className="relative bg-brand-bg-alt py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h3 className="font-display text-4xl md:text-5xl text-brand-text mb-4">
              Resultados que hablan por sí solos
            </h3>
            <p className="font-sans font-light text-lg text-brand-text-muted tracking-wide">
              Cada clienta, una transformación
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12">
            {resultsData.slice(0, 3).map((result, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="aspect-[3/4] md:aspect-[4/5] rounded-sm relative overflow-hidden group border border-brand-border/20"
              >
                <img 
                  src={result.image}
                  alt="Resultado"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-bg/20 group-hover:bg-brand-bg/0 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="https://www.instagram.com/luciaespina.p.e/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-text-muted hover:text-brand-silver transition-colors font-sans font-light tracking-wide text-sm md:text-base"
            >
              <Instagram className="w-4 h-4" />
              Síguenos en Instagram para ver nuestros trabajos más recientes → <span className="font-medium">@luciaespina.p.e</span>
            </a>
          </div>
        </div>
      </section>

      {/* Reseñas Section */}
      <section id="resenas" className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 radial-glow pointer-events-none opacity-50" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h3 className="font-display text-4xl md:text-5xl text-brand-text mb-6">
              Lo que dicen nuestras clientas
            </h3>
            <div className="inline-flex items-center gap-2 glass-card px-6 py-2 rounded-full">
              <div className="flex text-brand-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="font-sans text-sm tracking-wide text-brand-text">
                <strong>4,7 de 5</strong> <span className="text-brand-text-muted">· Google Reviews</span>
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {reviewsData.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`glass-card p-8 rounded-sm border border-brand-border/30 flex flex-col justify-between ${i > 2 ? 'lg:hidden xl:flex' : ''} ${i === 4 ? 'md:hidden xl:flex' : ''}`}
              >
                <div>
                  <div className="flex text-brand-gold mb-6">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="font-sans font-light text-brand-text-muted leading-relaxed mb-8 italic">
                    "{review.text}"
                  </p>
                </div>
                <p className="font-sans font-medium text-brand-text tracking-wide uppercase text-sm">
                  — {review.author}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="https://www.google.es/maps/place/Luc%C3%ADa+Peluquer%C3%ADa+Ecol%C3%B3gica/@43.3631699,-5.8660849,17z/data=!4m18!1m9!3m8!1s0xd368da4bb00a519:0x5cf4e8ad5eaebdbc!2zTHVjw61hIFBlbHVxdWVyw61hIEVjb2zDs2dpY2E!8m2!3d43.3631699!4d-5.86351!9m1!1b1!16s%2Fg%2F11mvys6klp!3m7!1s0xd368da4bb00a519:0x5cf4e8ad5eaebdbc!8m2!3d43.3631699!4d-5.86351!9m1!1b1!16s%2Fg%2F11mvys6klp?hl=es&entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-8 py-4 border border-brand-border text-brand-text font-sans uppercase tracking-[0.15em] text-sm transition-all duration-300 hover:bg-white/5 items-center justify-center"
            >
              Deja tu reseña en Google
            </a>
          </div>
        </div>
      </section>

      {/* Visítanos Section */}
      <section id="contacto" className="relative py-32 md:py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-display text-5xl md:text-6xl text-brand-text mb-24 text-center">Encuéntranos en Oviedo</h3>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-12">
              <div className="flex items-start gap-6">
                <MapPin className="w-8 h-8 text-brand-silver shrink-0 mt-1" />
                <p className="font-sans text-xl text-brand-text-muted">C. de Pío XII, 10, bajo · 33013 Oviedo, Asturias</p>
              </div>
              <div className="flex items-start gap-6">
                <Phone className="w-8 h-8 text-brand-silver shrink-0 mt-1" />
                <a href="tel:659306659" className="font-sans text-xl text-brand-text-muted hover:text-brand-silver transition-colors">659 306 659</a>
              </div>
              <div className="flex items-start gap-6">
                <Clock className="w-8 h-8 text-brand-silver shrink-0 mt-1" />
                <div className="font-sans text-xl text-brand-text-muted space-y-2">
                  <p>Lunes: Cerrado</p>
                  <p>Martes a Viernes: 9:45–13:00 / 16:00–19:00</p>
                  <p>Sábado: 9:45–13:30</p>
                  <p>Domingo: 10:15–13:00</p>
                </div>
              </div>
              
              {/* RRSS */}
              <div className="flex gap-8 pt-8">
                <a href="https://www.instagram.com/luciaespina.p.e/" target="_blank" rel="noopener noreferrer" className="text-brand-text-muted hover:text-brand-silver transition-colors"><Instagram className="w-8 h-8" /></a>
                <a href="https://www.facebook.com/p/Luc%C3%ADa-Peluquer%C3%ADa-Ecol%C3%B3gica-100063913115992/?locale=es_ES" target="_blank" rel="noopener noreferrer" className="text-brand-text-muted hover:text-brand-silver transition-colors"><Facebook className="w-8 h-8" /></a>
              </div>
            </div>
            
            <div className="lg:col-span-7 flex justify-end">
              <div className="relative w-full lg:w-4/5 aspect-[4/3] rounded-sm overflow-hidden border border-brand-border/30">
                <iframe 
                  src="https://www.google.es/maps/embed?pb=!1m18!1m12!1m3!1d2898.123!2d-5.8660849!3d43.3631699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd368da4bb00a519%3A0x5cf4e8ad5eaebdbc!2zTHVjw61hIFBlbHVxdWVyw61hIEVjb2zDs2dpY2E!5e0!3m2!1ses!2ses!4v1"
                  className="w-full h-full"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="mt-20 text-center">
            <a href="https://www.google.es/maps/place/Luc%C3%ADa+Peluquer%C3%ADa+Ecol%C3%B3gica/@43.3631699,-5.8660849,17z/data=!4m16!1m9!3m8!1s0xd368da4bb00a519:0x5cf4e8ad5eaebdbc!2zTHVjw61hIFBlbHVxdWVyw61hIEVjb2zDs2dpY2E!8m2!3d43.3631699!4d-5.86351!9m1!1b1!16s%2Fg%2F11mvys6klp!3m5!1s0xd368da4bb00a519:0x5cf4e8ad5eaebdbc!8m2!3d43.3631699!4d-5.86351!16s%2Fg%2F11mvys6klp?hl=es&entry=ttu&g_ep=EgoyMDI2MDQwOC.0IKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="inline-flex px-12 py-5 border border-brand-border text-brand-text font-sans uppercase tracking-[0.15em] text-base transition-all duration-300 hover:bg-white/5">Cómo llegar</a>
          </div>
        </div>
      </section>

      {/* Reserva Section */}
      <section className="relative py-24 md:py-32 px-6 bg-gradient-to-b from-[#0D1B2A] to-[#1A2840]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-display text-4xl md:text-5xl text-brand-text mb-6">Tu transformación empieza aquí</h3>
          <p className="font-sans text-lg text-brand-text-muted mb-16">Reserva tu cita online en segundos. Sin esperas, sin llamadas.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full border border-brand-silver flex items-center justify-center text-brand-silver font-sans text-xl">1</div>
              <p className="font-sans text-brand-text">Elige tu servicio</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full border border-brand-silver flex items-center justify-center text-brand-silver font-sans text-xl">2</div>
              <p className="font-sans text-brand-text">Selecciona día y hora</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full border border-brand-silver flex items-center justify-center text-brand-silver font-sans text-xl">3</div>
              <p className="font-sans text-brand-text">¡Listo! Te esperamos</p>
            </div>
          </div>

          <a href="https://booksy.com/es-es/173411_lucia-peluqueri-ecologica_peluqueria_79758_oviedo#ba_s=seo" target="_blank" rel="noopener noreferrer" className="inline-flex px-12 py-6 bg-gradient-silver text-brand-bg font-sans uppercase tracking-[0.15em] font-medium transition-all duration-300 hover:scale-105 mb-8">Reservar mi cita en Booksy</a>
          <p className="font-sans text-brand-text-muted">O llámanos al <a href="tel:659306659" className="text-brand-silver hover:underline">659 306 659</a></p>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-20 pb-12 border-t border-brand-border bg-[#080F18]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Column */}
            <div className="space-y-6">
              <img 
                src="https://res.cloudinary.com/dfbsqy5ul/image/upload/q_auto/f_auto/v1776099763/Captura_de_pantalla_2026-04-13_190145-removebg-preview_xxdemc.png" 
                alt="Logo Lucía" 
                className="w-24 h-20"
                referrerPolicy="no-referrer"
              />
              <h2 className="font-display text-2xl tracking-widest text-gradient-silver">LUCÍA</h2>
              <p className="font-sans text-brand-text-muted text-sm leading-relaxed">
                Peluquería ecológica en Oviedo. Cuidamos tu cabello con productos 100% naturales y diagnósticos personalizados.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/luciaespina.p.e/" target="_blank" rel="noopener noreferrer" className="text-brand-text-muted hover:text-brand-silver transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="https://www.facebook.com/p/Luc%C3%ADa-Peluquer%C3%ADa-Ecol%C3%B3gica-100063913115992/?locale=es_ES" target="_blank" rel="noopener noreferrer" className="text-brand-text-muted hover:text-brand-silver transition-colors"><Facebook className="w-5 h-5" /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-sans uppercase tracking-[0.15em] text-brand-text mb-6 text-sm font-medium">Enlaces rápidos</h4>
              <ul className="space-y-4 font-sans text-sm text-brand-text-muted">
                <li><a href="#sobre-nosotros" className="hover:text-brand-silver transition-colors">Sobre nosotros</a></li>
                <li><a href="#servicios" className="hover:text-brand-silver transition-colors">Servicios</a></li>
                <li><a href="#resultados" className="hover:text-brand-silver transition-colors">Resultados</a></li>
                <li><a href="#resenas" className="hover:text-brand-silver transition-colors">Reseñas</a></li>
                <li><a href="#contacto" className="hover:text-brand-silver transition-colors">Contacto</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-sans uppercase tracking-[0.15em] text-brand-text mb-6 text-sm font-medium">Contacto</h4>
              <ul className="space-y-4 font-sans text-sm text-brand-text-muted">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-brand-silver shrink-0" />
                  <span>C. de Pío XII, 10, bajo<br />33013 Oviedo, Asturias</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand-silver shrink-0" />
                  <a href="tel:659306659" className="hover:text-brand-silver transition-colors">659 306 659</a>
                </li>
                <li className="pt-4">
                  <a 
                    href="https://booksy.com/es-es/173411_lucia-peluqueri-ecologica_peluqueria_79758_oviedo#ba_s=seo" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block px-6 py-3 border border-brand-silver text-brand-silver hover:bg-brand-silver hover:text-brand-bg transition-all duration-300 text-xs uppercase tracking-widest"
                  >
                    Reservar Cita
                  </a>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="font-sans uppercase tracking-[0.15em] text-brand-text mb-6 text-sm font-medium">Horario</h4>
              <ul className="space-y-2 font-sans text-sm text-brand-text-muted">
                <li className="flex justify-between"><span>Lunes:</span> <span className="text-brand-text">Cerrado</span></li>
                <li className="flex justify-between"><span>Mar - Vie:</span> <span className="text-brand-text">9:45–13:00 / 16:00–19:00</span></li>
                <li className="flex justify-between"><span>Sábado:</span> <span className="text-brand-text">9:45–13:30</span></li>
                <li className="flex justify-between"><span>Domingo:</span> <span className="text-brand-text">10:15–13:00</span></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-brand-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-xs text-brand-text-muted">© 2025 Lucía Peluquería Ecológica · Oviedo, Asturias</p>
            <div className="flex gap-6 font-sans text-xs text-brand-text-muted">
              <a href="#" className="hover:text-brand-silver transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-brand-silver transition-colors">Aviso Legal</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

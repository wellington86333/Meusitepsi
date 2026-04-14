import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Hero = () => {
    const { t } = useLanguage();
    const whatsappLink = 'https://api.whatsapp.com/send/?phone=447512130453&text=Olá! Gostaria de agendar uma sessão.&type=phone_number&app_absent=0';

    return (
        <section id="home" className="hero-mesh relative min-h-screen flex items-center pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-bg">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -z-10 skew-x-12 transform origin-top-right"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <motion.div className="lg:col-span-7 flex flex-col justify-center" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
                        <div className="flex flex-wrap gap-3 mb-8">
                            <span className="inline-block py-2 px-4 rounded-full border border-primary/20 text-primary text-xs font-display font-bold tracking-widest uppercase">
                                {t.hero.badge}
                            </span>
                            <span className="inline-block py-2 px-4 rounded-full bg-secondary/15 text-secondary text-xs font-display font-bold tracking-widest uppercase">
                                Tendência 2026: design humanizado e direto
                            </span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-display font-black text-primary leading-[0.9] mb-8 tracking-tighter">
                            {t.hero.title} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">{t.hero.titleHighlight}</span>
                        </h1>

                        <p className="text-lg text-textSecondary mb-10 leading-relaxed max-w-lg font-sans">{t.hero.description}</p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-bg bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg">
                                Agendar sessão
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-primary border-2 border-primary hover:bg-primary hover:text-bg transition-all duration-300">
                                Falar pelo WhatsApp
                                <MessageCircle className="ml-2 h-5 w-5" />
                            </a>
                        </div>
                        <p className="mt-4 text-sm font-semibold text-primary/80">Atendimento sigiloso e profissional.</p>
                        <div className="mt-6 grid sm:grid-cols-3 gap-3">
                            <div className="glass-card rounded-xl p-3 text-sm text-primary">Psicólogo com base psicanalítica</div>
                            <div className="glass-card rounded-xl p-3 text-sm text-primary">CRP 0215189</div>
                            <div className="glass-card rounded-xl p-3 text-sm text-primary">Foco em acolhimento</div>
                        </div>
                    </motion.div>

                    <motion.div className="lg:col-span-5 relative" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
                        <div className="relative z-10">
                            <div className="absolute inset-0 border-2 border-primary/60 rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
                            <img src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Pessoa em posição de autocuidado e equilíbrio emocional" className="w-full h-auto object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 ease-in-out" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

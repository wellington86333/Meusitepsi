import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-bg">
            {/* Abstract Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 -z-10 skew-x-12 transform origin-top-right"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* Text Content - Spans 7 columns */}
                    <motion.div
                        className="lg:col-span-7 flex flex-col justify-center"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block py-2 px-4 border border-primary/20 rounded-none text-primary text-sm font-display font-bold tracking-widest uppercase mb-8 w-max">
                            Psicologia Clínica & Psicanálise
                        </span>

                        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-display font-black text-primary leading-[0.9] mb-8 tracking-tighter">
                            ENCONTRE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">EQUILÍBRIO.</span>
                        </h1>

                        <motion.blockquote
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="text-xl sm:text-2xl font-serif italic text-textSecondary mb-10 pl-6 border-l-4 border-secondary"
                        >
                            "Out of your vulnerabilities will come your strength."
                            <footer className="text-sm font-sans not-italic mt-2 text-primary/60">— Sigmund Freud</footer>
                        </motion.blockquote>

                        <p className="text-lg text-textSecondary mb-10 leading-relaxed max-w-lg font-sans">
                            Um espaço seguro e acolhedor para sua jornada de autoconhecimento.
                            Atendimento especializado para ansiedade, depressão e desenvolvimento pessoal.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-bg bg-primary hover:bg-primary/90 transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]"
                            >
                                Agendar Consulta
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                            <a
                                href="#about"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-primary border-2 border-primary hover:bg-primary hover:text-bg transition-all duration-300"
                            >
                                Saiba Mais
                            </a>
                        </div>
                    </motion.div>

                    {/* Image Content - Spans 5 columns */}
                    <motion.div
                        className="lg:col-span-5 relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative z-10">
                            {/* Brutalist Image Frame */}
                            <div className="absolute inset-0 border-2 border-primary transform translate-x-4 translate-y-4 -z-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                alt="Equilíbrio e Bem-estar Emocional"
                                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                            />
                        </div>

                        {/* Floating Element */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="absolute -bottom-10 -left-10 bg-surface p-6 border border-primary/10 shadow-neu max-w-xs hidden sm:block"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-primary">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-display font-bold text-primary">Atendimento Online</p>
                                    <p className="text-sm text-textSecondary font-sans">e Presencial</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

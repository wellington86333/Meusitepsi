import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-100/50 via-slate-50 to-slate-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-teal-100 text-teal-700 text-sm font-semibold mb-6">
                            Psicologia Clínica & Psicanálise
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            Encontre equilíbrio e <span className="text-teal-600">bem-estar</span> emocional.
                        </h1>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                            Um espaço seguro e acolhedor para sua jornada de autoconhecimento.
                            Atendimento especializado para ansiedade, depressão e desenvolvimento pessoal.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-teal-600 rounded-full hover:bg-teal-700 transition-all duration-200 shadow-lg shadow-teal-600/20 hover:shadow-teal-600/30 hover:-translate-y-1"
                            >
                                Agendar Consulta
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                            <a
                                href="#about"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all duration-200"
                            >
                                Saiba Mais
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/5] lg:aspect-square bg-slate-200">
                            {/* Placeholder for Wellington Brito's photo */}
                            <img
                                src="/wellington-brito.jpg"
                                alt="Wellington Brito Psicólogo"
                                className="w-full h-full object-cover"
                                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                        </div>

                        {/* Floating Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden sm:block"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900">Atendimento Online</p>
                                    <p className="text-sm text-slate-500">e Presencial</p>
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

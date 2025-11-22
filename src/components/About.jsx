import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    const benefits = [
        "Abordagem Humanista e Acolhedora",
        "Sigilo e Ética Profissional",
        "Experiência em Ansiedade e Depressão",
        "Atendimento Personalizado"
    ];

    return (
        <section id="about" className="py-24 bg-bg relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-20 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1 relative"
                    >
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-secondary/30 -z-10 transform -translate-x-2 -translate-y-2"></div>
                            <motion.img
                                whileHover={{ scale: 1.01 }}
                                transition={{ duration: 0.3 }}
                                src="/wellington-brito-about.jpg"
                                alt="Wellington Brito - Psicólogo Clínico"
                                className="shadow-2xl w-full object-cover h-[600px] grayscale hover:grayscale-0 transition-all duration-500"
                            />

                            {/* Iceberg Quote Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="absolute bottom-8 right-8 left-8 bg-surface/80 backdrop-blur-md p-6 border border-white/20 shadow-neu"
                            >
                                <p className="font-serif italic text-lg text-primary">
                                    "The mind is like an iceberg, it floats with one-seventh of its bulk above water."
                                </p>
                                <p className="text-xs font-bold mt-2 text-secondary uppercase tracking-widest">Sigmund Freud</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2"
                    >
                        <h2 className="text-4xl sm:text-5xl font-display font-black text-primary mb-8 leading-tight">
                            SOBRE <br />
                            <span className="text-secondary">WELLINGTON BRITO</span>
                        </h2>

                        <div className="space-y-6 text-lg text-textSecondary font-sans leading-relaxed">
                            <p>
                                Olá, sou Wellington Brito. Como psicólogo clínico, dedico minha carreira a ajudar pessoas a encontrarem caminhos para uma vida mais plena e significativa.
                            </p>
                            <p>
                                Acredito que cada indivíduo possui uma história única e um potencial inato para o crescimento. Minha abordagem é baseada na escuta ativa, no respeito e na construção de um vínculo terapêutico sólido.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6 mt-10">
                            {benefits.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex items-center gap-3 group"
                                >
                                    <div className="p-1 rounded-full bg-secondary/20 group-hover:bg-secondary/40 transition-colors">
                                        <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                                    </div>
                                    <span className="text-primary font-medium">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

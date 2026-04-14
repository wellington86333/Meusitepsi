import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="sobre" className="py-24 bg-gradient-to-b from-bg to-white border-t border-primary/5">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-5xl font-display font-black text-primary mb-8"
                >
                    Sobre o profissional
                </motion.h2>

                <div className="mb-8">
                    <img
                        src="/wellington-brito-about.jpg"
                        alt="Psicólogo Wellington Brito em retrato profissional"
                        loading="eager"
                        className="w-full h-[320px] object-cover rounded-2xl shadow-lg border border-primary/10"
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-8 text-textSecondary leading-relaxed">
                    <div className="space-y-4 bg-surface p-6 border border-primary/10 rounded-2xl shadow-sm">
                        <p><strong className="text-primary">Nome completo:</strong> Wellington Brito</p>
                        <p><strong className="text-primary">Atuação:</strong> Psicólogo clínico com atendimento online.</p>
                        <p><strong className="text-primary">Abordagem clínica:</strong> Atendimento fundamentado na psicanálise.</p>
                        <p><strong className="text-primary">Público:</strong> Adultos brasileiros no Brasil e no exterior.</p>
                        <p><strong className="text-primary">Idioma:</strong> Sessões em português.</p>
                    </div>

                    <div className="space-y-4 bg-secondary/10 p-6 border-l-4 border-secondary rounded-2xl shadow-sm">
                        <h3 className="font-display font-bold text-primary text-xl">Transparência sobre escopo profissional</h3>
                        <p>
                            Sou <strong className="text-primary">psicólogo</strong>, com prática clínica orientada pela psicanálise.
                            O atendimento segue princípios de sigilo, ética profissional e escuta qualificada.
                        </p>
                        <p>
                            Registro profissional informado neste site: <strong className="text-primary">CRP 0215189</strong>.
                            Caso deseje, você pode solicitar informações adicionais antes de iniciar o acompanhamento.
                        </p>
                        <p className="text-primary font-semibold">Objetivo: oferecer um primeiro contato claro, acolhedor e sem promessas irreais de resultado.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

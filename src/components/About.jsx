import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="sobre" className="py-24 bg-bg border-t border-primary/5">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-5xl font-display font-black text-primary mb-8"
                >
                    Sobre o profissional
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8 text-textSecondary leading-relaxed">
                    <div className="space-y-4 bg-surface p-6 border border-primary/10">
                        <p><strong className="text-primary">Nome completo:</strong> Wellington Brito</p>
                        <p><strong className="text-primary">Atuação:</strong> Psicanalista clínico (atendimento online)</p>
                        <p><strong className="text-primary">Formação principal:</strong> Não informada publicamente neste site.</p>
                        <p><strong className="text-primary">Linha teórica:</strong> Psicanálise (escuta clínica orientada pela tradição freudiana, com abertura a autores contemporâneos).</p>
                        <p><strong className="text-primary">Experiência clínica:</strong> Tempo de atuação não informado publicamente nesta página.</p>
                    </div>

                    <div className="space-y-4 bg-secondary/10 p-6 border-l-4 border-secondary">
                        <h3 className="font-display font-bold text-primary text-xl">Transparência sobre escopo profissional</h3>
                        <p>
                            <strong className="text-primary">Psicanalista</strong> e <strong className="text-primary">psicólogo</strong> não são a mesma função.
                            O psicólogo é formado em Psicologia e, no Brasil, atua com registro profissional no CRP.
                        </p>
                        <p>
                            O psicanalista atua com formação em psicanálise e prática clínica de escuta. Nesta página,
                            não há número de conselho profissional de Psicologia publicado.
                        </p>
                        <p className="text-primary font-semibold">Se você busca atendimento psicológico regulamentado por conselho, solicite essa informação antes de iniciar.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

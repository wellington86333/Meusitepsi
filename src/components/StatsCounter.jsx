import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Users, Calendar, Star, Award } from 'lucide-react';

export default function StatsCounter() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3
    });

    const stats = [
        {
            icon: Calendar,
            value: 5,
            suffix: '+',
            label: 'Anos de Experiência',
            description: 'Em atendimento clínico',
            color: 'from-secondary to-accent'
        },
        {
            icon: Users,
            value: 100,
            suffix: '%',
            label: 'Dedicação',
            description: 'A cada paciente',
            color: 'from-accent to-secondary'
        },
        {
            icon: Star,
            value: 50,
            label: 'Minutos',
            description: 'Por sessão',
            color: 'from-secondary to-accent'
        },
        {
            icon: Award,
            value: 100,
            suffix: '%',
            label: 'Sigilo Profissional',
            description: 'Garantido pelo CRP',
            color: 'from-accent to-secondary'
        }
    ];

    return (
        <section ref={ref} className="py-20 bg-primary relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-black text-bg mb-4">
                        Compromisso com a Excelência
                    </h2>
                    <p className="text-xl text-bg/70 max-w-2xl mx-auto font-sans">
                        Atendimento profissional baseado em ética, sigilo e dedicação
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative group"
                            >
                                {/* Card — bordas retas, consistente com o restante do site */}
                                <div className="bg-white/10 backdrop-blur-lg p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:shadow-[4px_4px_0px_0px_rgba(230,184,162,0.6)]">
                                    {/* Icon */}
                                    <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="w-8 h-8 text-primary" />
                                    </div>

                                    {/* Number */}
                                    <div className="text-center mb-4">
                                        <div className="text-5xl md:text-6xl font-display font-black text-bg mb-2">
                                            {inView && (
                                                <CountUp
                                                    end={stat.value}
                                                    duration={2.5}
                                                    decimals={stat.decimals || 0}
                                                    decimal=","
                                                    suffix={stat.suffix || ''}
                                                />
                                            )}
                                        </div>
                                        <h3 className="text-lg font-display font-bold text-bg/90 mb-1">
                                            {stat.label}
                                        </h3>
                                        <p className="text-sm text-bg/60 font-sans">
                                            {stat.description}
                                        </p>
                                    </div>

                                    {/* Decorative Line */}
                                    <div className={`h-0.5 bg-gradient-to-r ${stat.color} mx-auto w-16 group-hover:w-full transition-all duration-300`}></div>
                                </div>

                                {/* Glow Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}></div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="inline-block bg-white/10 backdrop-blur-lg px-8 py-4 border border-white/20">
                        <p className="text-bg/90 text-lg font-sans">
                            <strong className="text-secondary">Registrado</strong> no Conselho Regional de Psicologia (CRP)
                            <span className="mx-2">•</span>
                            Atendimento <strong className="text-secondary">100% Online</strong>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

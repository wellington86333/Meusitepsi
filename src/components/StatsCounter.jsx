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
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: Users,
            value: 100,
            suffix: '%',
            label: 'Dedicação',
            description: 'A cada paciente',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: Star,
            value: 50,
            label: 'Minutos',
            description: 'Por sessão',
            color: 'from-yellow-500 to-orange-500'
        },
        {
            icon: Award,
            value: 100,
            suffix: '%',
            label: 'Sigilo Profissional',
            description: 'Garantido pelo CRP',
            color: 'from-green-500 to-emerald-500'
        }
    ];

    return (
        <section ref={ref} className="py-20 bg-gradient-to-br from-gray-900 via-primary to-gray-900 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-20">
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
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Compromisso com a Excelência
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
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
                                {/* Card */}
                                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                                    {/* Icon */}
                                    <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Number */}
                                    <div className="text-center mb-4">
                                        <div className="text-5xl md:text-6xl font-bold text-white mb-2">
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
                                        <h3 className="text-lg font-semibold text-white/90 mb-1">
                                            {stat.label}
                                        </h3>
                                        <p className="text-sm text-white/60">
                                            {stat.description}
                                        </p>
                                    </div>

                                    {/* Decorative Line */}
                                    <div className={`h-1 bg-gradient-to-r ${stat.color} rounded-full mx-auto w-16 group-hover:w-full transition-all duration-300`}></div>
                                </div>

                                {/* Glow Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}></div>
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
                    <div className="inline-block bg-white/10 backdrop-blur-lg rounded-xl px-8 py-4 border border-white/20">
                        <p className="text-white/90 text-lg">
                            <strong className="text-accent">Registrado</strong> no Conselho Regional de Psicologia (CRP)
                            <span className="mx-2">•</span>
                            Atendimento <strong className="text-accent">100% Online</strong>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

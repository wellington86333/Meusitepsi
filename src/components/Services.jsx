import React from 'react';
import { Brain, Heart, Users, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const Services = () => {
    const { t } = useLanguage();

    const icons = [Brain, Heart, Sparkles, Users];

    const services = t.services.items.map((item, index) => ({
        ...item,
        icon: icons[index]
    }));

    return (
        <section id="services" className="py-24 bg-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-secondary font-bold tracking-widest uppercase text-sm"
                    >
                        {t.services.badge}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl font-display font-black text-primary mt-4 mb-6"
                    >
                        {t.services.title} <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">{t.services.titleHighlight}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-textSecondary font-sans max-w-2xl mx-auto"
                    >
                        {t.services.description}
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-surface p-8 border-2 border-primary/5 hover:border-secondary transition-all duration-300 group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/5 rounded-bl-full -mr-10 -mt-10 transition-all group-hover:bg-secondary/20"></div>

                            <div className="w-14 h-14 bg-primary/5 rounded-none flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-bg transition-colors duration-300">
                                <service.icon size={28} strokeWidth={1.5} />
                            </div>

                            <h3 className="text-xl font-display font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-textSecondary font-sans leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

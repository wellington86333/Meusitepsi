import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const FAQ = () => {
    const { t } = useLanguage();
    const faqs = t.faq.items;

    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section id="faq" className="py-24 bg-surface">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary/10 rounded-full mb-6">
                        <HelpCircle className="w-4 h-4 text-secondary" />
                        <span className="text-xs font-bold uppercase tracking-widest text-primary">{t.faq.badge}</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-display font-black text-primary mb-4">
                        {t.faq.title}
                    </h2>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`bg-bg border-2 transition-all duration-300 ${openIndex === index ? 'border-primary shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]' : 'border-transparent hover:border-primary/20'
                                }`}
                        >
                            <button
                                className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className={`font-display font-bold text-lg ${openIndex === index ? 'text-primary' : 'text-textSecondary'
                                    }`}>{faq.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="text-secondary" />
                                ) : (
                                    <ChevronDown className="text-textSecondary" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-8 overflow-hidden"
                                    >
                                        <p className="text-textSecondary font-sans leading-relaxed pb-8 border-t border-primary/5 pt-4">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;

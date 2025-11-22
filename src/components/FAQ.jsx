import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
    const faqs = [
        {
            question: "Como funciona a primeira consulta?",
            answer: "A primeira consulta é um momento de acolhimento e conhecimento mútuo. Vamos conversar sobre suas queixas, expectativas e entender como a terapia pode te ajudar."
        },
        {
            question: "Qual a duração das sessões?",
            answer: "As sessões têm duração média de 50 minutos, realizadas semanalmente ou conforme a necessidade do paciente."
        },
        {
            question: "Aceita convênios?",
            answer: "Atendo principalmente particular, mas emito recibo para reembolso do seu plano de saúde. Consulte as condições do seu convênio."
        },
        {
            question: "O atendimento é sigiloso?",
            answer: "Sim, o sigilo é absoluto e garantido pelo Código de Ética Profissional do Psicólogo."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section id="faq" className="py-20 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                        Perguntas Frequentes
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
                            className={`bg-white rounded-xl shadow-sm overflow-hidden border transition-all duration-300 ${
                                openIndex === index ? 'border-teal-500 shadow-md' : 'border-slate-100'
                            }`}
                        >
                            <button
                                className={`w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none transition-colors ${
                                    openIndex === index ? 'bg-teal-50' : 'hover:bg-slate-50'
                                }`}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className={`font-medium text-lg ${
                                    openIndex === index ? 'text-teal-700' : 'text-slate-900'
                                }`}>{faq.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="text-teal-600" />
                                ) : (
                                    <ChevronDown className="text-slate-400" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-6 overflow-hidden"
                                    >
                                        <p className="text-slate-600 leading-relaxed pb-6">
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

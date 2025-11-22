import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

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
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                        Perguntas Frequentes
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100"
                        >
                            <button
                                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="font-medium text-slate-900 text-lg">{faq.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="text-teal-600" />
                                ) : (
                                    <ChevronDown className="text-slate-400" />
                                )}
                            </button>
                            <div
                                className={`px-6 transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p className="text-slate-600 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;

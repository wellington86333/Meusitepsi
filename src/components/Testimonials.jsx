import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Maria Silva",
            text: "O Dr. Wellington é um profissional excelente. Me ajudou muito a superar minha ansiedade e ver a vida de outra forma.",
            rating: 5
        },
        {
            name: "João Santos",
            text: "Profissional muito atencioso e competente. As sessões foram fundamentais para meu autoconhecimento.",
            rating: 5
        },
        {
            name: "Ana Oliveira",
            text: "Recomendo muito! Ambiente acolhedor e um profissional que realmente escuta e se importa.",
            rating: 5
        }
    ];

    return (
        <section id="testimonials" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                        O que dizem meus pacientes
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-slate-50 p-8 rounded-2xl relative">
                            <div className="flex gap-1 mb-4 text-yellow-400">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} fill="currentColor" size={20} />
                                ))}
                            </div>
                            <p className="text-slate-700 mb-6 italic">
                                "{testimonial.text}"
                            </p>
                            <div className="font-bold text-slate-900">
                                {testimonial.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

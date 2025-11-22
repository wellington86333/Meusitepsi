import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Maria Silva",
            text: "O Dr. Wellington é um profissional excelente. Me ajudou muito a superar minha ansiedade e ver a vida de outra forma.",
            rating: 5,
            image: "https://randomuser.me/api/portraits/women/65.jpg"
        },
        {
            name: "João Santos",
            text: "Profissional muito atencioso e competente. As sessões foram fundamentais para meu autoconhecimento.",
            rating: 5,
            image: "https://randomuser.me/api/portraits/men/45.jpg"
        },
        {
            name: "Ana Oliveira",
            text: "Recomendo muito! Ambiente acolhedor e um profissional que realmente escuta e se importa.",
            rating: 5,
            image: "https://randomuser.me/api/portraits/women/30.jpg"
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
                        <motion.div
                            key={index}
                            className="bg-slate-50 p-8 rounded-2xl relative flex flex-col items-center text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ scale: 1.03 }}
                        >
                            <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mb-4 object-cover" />
                            <div className="flex gap-1 mb-2 text-yellow-400">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} fill="currentColor" size={20} />
                                ))}
                            </div>
                            <p className="text-slate-700 mb-4 italic">
                                "{testimonial.text}"
                            </p>
                            <div className="font-bold text-slate-900">
                                {testimonial.name}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

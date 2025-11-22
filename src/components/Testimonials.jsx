import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const Testimonials = () => {
    const { t } = useLanguage();

    const testimonials = t.testimonials.items.map((item, index) => ({
        ...item,
        rating: 5,
        image: [
            "https://randomuser.me/api/portraits/women/65.jpg",
            "https://randomuser.me/api/portraits/men/45.jpg",
            "https://randomuser.me/api/portraits/women/30.jpg",
            "https://randomuser.me/api/portraits/men/32.jpg",
            "https://randomuser.me/api/portraits/women/44.jpg",
            "https://randomuser.me/api/portraits/men/52.jpg"
        ][index]
    }));

    return (
        <section id="testimonials" className="py-24 bg-bg relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-24 h-full bg-primary/5 -z-10 hidden lg:block"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-5xl font-display font-black text-primary mb-4"
                    >
                        {t.testimonials.title} <br /> {t.testimonials.titleHighlight}
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="bg-surface p-8 border border-primary/10 relative"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -5, boxShadow: "5px 5px 0px 0px rgba(26, 26, 26, 1)" }}
                        >
                            <Quote className="absolute top-6 right-6 text-secondary/20 w-10 h-10" />

                            <div className="flex gap-1 mb-6 text-secondary">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} fill="currentColor" size={16} />
                                ))}
                            </div>

                            <p className="text-textSecondary font-serif italic text-lg mb-8 leading-relaxed">
                                "{testimonial.text}"
                            </p>

                            <div className="flex items-center gap-4 border-t border-primary/5 pt-6">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover grayscale"
                                />
                                <div>
                                    <div className="font-display font-bold text-primary">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-sm text-textSecondary font-sans">
                                        {testimonial.location}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

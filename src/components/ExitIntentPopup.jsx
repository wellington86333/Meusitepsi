import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Gift, CheckCircle } from 'lucide-react';

export default function ExitIntentPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [hasShown, setHasShown] = useState(false);

    useEffect(() => {
        // Check if popup was already shown in this session
        const popupShown = sessionStorage.getItem('exitPopupShown');
        if (popupShown) {
            setHasShown(true);
            return;
        }

        const handleMouseLeave = (e) => {
            // Detect when mouse leaves from top of page
            if (e.clientY <= 0 && !hasShown) {
                setIsVisible(true);
                setHasShown(true);
                sessionStorage.setItem('exitPopupShown', 'true');
            }
        };

        // Add delay before activating exit intent
        const timer = setTimeout(() => {
            document.addEventListener('mouseleave', handleMouseLeave);
        }, 5000); // Wait 5 seconds before activating

        return () => {
            clearTimeout(timer);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [hasShown]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send to email marketing system
        console.log('Exit intent email captured:', email);

        // Google Analytics event
        if (window.gtag) {
            window.gtag('event', 'lead_capture', {
                event_category: 'engagement',
                event_label: 'exit_intent_popup',
                value: 1
            });
        }

        setIsSubmitted(true);

        // Close popup after 3 seconds
        setTimeout(() => {
            setIsVisible(false);
        }, 3000);
    };

    const handleClose = () => {
        setIsVisible(false);

        // Track popup dismissal
        if (window.gtag) {
            window.gtag('event', 'popup_dismissed', {
                event_category: 'engagement',
                event_label: 'exit_intent_popup'
            });
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                        onClick={handleClose}
                    />

                    {/* Popup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 50 }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl mx-4"
                    >
                        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                            {/* Close Button */}
                            <button
                                onClick={handleClose}
                                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
                            >
                                <X className="w-5 h-5 text-gray-600" />
                            </button>

                            {!isSubmitted ? (
                                <div className="p-8 md:p-12">
                                    {/* Icon */}
                                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Gift className="w-10 h-10 text-white" />
                                    </div>

                                    {/* Headline */}
                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
                                        Espere! Não vá embora ainda...
                                    </h2>

                                    {/* Subheadline */}
                                    <p className="text-xl text-gray-600 mb-6 text-center">
                                        Receba <strong className="text-primary">GRÁTIS</strong> nosso guia exclusivo:
                                    </p>

                                    {/* Offer Box */}
                                    <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 mb-6 border-2 border-primary/20">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                                            "7 Passos para o Autoconhecimento"
                                        </h3>
                                        <p className="text-gray-700 text-center mb-4">
                                            Um guia prático baseado em princípios psicanalíticos para você começar sua jornada de transformação pessoal
                                        </p>

                                        {/* Benefits */}
                                        <div className="grid md:grid-cols-2 gap-3">
                                            {[
                                                'Técnicas de autoanálise',
                                                'Exercícios práticos diários',
                                                'Interpretação de sonhos',
                                                'Identificação de padrões'
                                            ].map((benefit, index) => (
                                                <div key={index} className="flex items-center gap-2">
                                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                                                    <span className="text-sm text-gray-700">{benefit}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Form */}
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Digite seu melhor email"
                                            required
                                            className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-lg"
                                        />

                                        <button
                                            type="submit"
                                            className="w-full px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-bold text-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
                                        >
                                            <Download className="w-5 h-5" />
                                            Quero Receber o Guia Grátis
                                        </button>
                                    </form>

                                    {/* Trust Badge */}
                                    <p className="text-sm text-gray-500 text-center mt-4">
                                        🔒 Seus dados estão seguros. Não compartilhamos com terceiros.
                                    </p>

                                    {/* Social Proof */}
                                    <div className="mt-6 pt-6 border-t border-gray-200">
                                        <p className="text-sm text-gray-600 text-center">
                                            <strong className="text-primary">+2.847 pessoas</strong> já baixaram este guia
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <div className="p-8 md:p-12 text-center">
                                    {/* Success Icon */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                                    >
                                        <CheckCircle className="w-10 h-10 text-white" />
                                    </motion.div>

                                    {/* Success Message */}
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                        Perfeito! 🎉
                                    </h2>
                                    <p className="text-xl text-gray-600 mb-6">
                                        Enviamos o guia para <strong className="text-primary">{email}</strong>
                                    </p>
                                    <p className="text-gray-600">
                                        Verifique sua caixa de entrada (e também o spam, só por precaução)
                                    </p>

                                    {/* Additional CTA */}
                                    <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                                        <p className="text-gray-700 mb-4">
                                            Quer acelerar sua jornada de autoconhecimento?
                                        </p>
                                        <a
                                            href="#contact"
                                            onClick={handleClose}
                                            className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                                        >
                                            Agendar Primeira Consulta Gratuita
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

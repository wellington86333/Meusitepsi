import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const Contact = () => {
    const { t } = useLanguage();
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formState);
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-24 bg-bg relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm">
                            {t.contact.badge}
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-display font-black text-primary mt-4 mb-6">
                            {t.contact.title} <br /> {t.contact.titleHighlight}
                        </h2>
                        <p className="text-lg text-textSecondary font-sans mb-4 max-w-md">
                            {t.contact.description}
                        </p>
                        <p className="text-base text-secondary font-bold mb-12 max-w-md">
                            {t.contact.negotiableValues}
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-surface border border-primary/10 flex items-center justify-center text-secondary">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-display font-bold text-primary text-lg">{t.contact.phone}</h3>
                                    <p className="text-textSecondary font-sans">+44 7512 130453</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-surface border border-primary/10 flex items-center justify-center text-secondary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-display font-bold text-primary text-lg">{t.contact.email}</h3>
                                    <p className="text-textSecondary font-sans">wellington.brito@rocketmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-surface border border-primary/10 flex items-center justify-center text-secondary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-display font-bold text-primary text-lg">{t.contact.location}</h3>
                                    <p className="text-textSecondary font-sans">{t.contact.locationValue}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-surface border border-primary/10 flex items-center justify-center text-secondary">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="font-display font-bold text-primary text-lg">{t.contact.hours}</h3>
                                    <p className="text-textSecondary font-sans">{t.contact.hoursValue}</p>
                                    <p className="text-xs text-textSecondary/70 mt-1">{t.contact.timeZoneInfo}</p>
                                </div>
                            </div>

                            {/* Plataformas de Atendimento */}
                            <div className="pt-8 border-t border-primary/10">
                                <h3 className="font-display font-bold text-primary text-lg mb-4">{t.contact.platformsTitle}</h3>
                                <div className="flex flex-wrap gap-3">
                                    <div className="flex items-center gap-2 bg-surface px-4 py-2 border border-primary/10">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                        </svg>
                                        <span className="text-sm font-medium text-primary">Google Meet</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-surface px-4 py-2 border border-primary/10">
                                        <svg className="w-5 h-5 text-[#2D8CFF]" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M7.5 9.5C7.5 8.67 8.17 8 9 8h6c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5H9c-.83 0-1.5-.67-1.5-1.5v-5zm12 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-5zm-18 0C1.5 8.67 2.17 8 3 8s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-5z" />
                                        </svg>
                                        <span className="text-sm font-medium text-primary">Zoom</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-surface px-4 py-2 border border-primary/10">
                                        <svg className="w-5 h-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                        <span className="text-sm font-medium text-primary">WhatsApp</span>
                                    </div>
                                </div>
                            </div>

                            {/* Formas de Pagamento */}
                            <div className="pt-6">
                                <h3 className="font-display font-bold text-primary text-lg mb-4">{t.contact.paymentTitle}</h3>
                                <div className="flex flex-wrap gap-3">
                                    <div className="flex items-center gap-2 bg-surface px-4 py-2 border border-primary/10">
                                        <svg className="w-5 h-5 text-[#32BCAD]" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M4.5 7.5C4.5 6.67 5.17 6 6 6h12c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5H6c-.83 0-1.5-.67-1.5-1.5v-9zm3 3h9v3h-9v-3z" />
                                        </svg>
                                        <span className="text-sm font-medium text-primary">PIX</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-surface px-4 py-2 border border-primary/10">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20 8H4V6h16m0 12H4v-6h16m0-8H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2z" fill="#1A1A1A" />
                                        </svg>
                                        <span className="text-sm font-medium text-primary">Cartões</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-surface px-4 py-2 border border-primary/10">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M11.5 1L2 6v6.5C2 17.43 6.57 22 11.5 22S21 17.43 21 12.5V6l-9.5-5zM12 11.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" fill="#1A1A1A" />
                                        </svg>
                                        <span className="text-sm font-medium text-primary">Transferência</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-surface p-8 md:p-12 border-2 border-primary/5 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)]"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-primary uppercase tracking-wider mb-2">
                                    {t.contact.formName}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    placeholder={t.contact.formNamePlaceholder}
                                    className="w-full bg-bg border-2 border-primary/10 p-4 text-primary placeholder-primary/30 focus:border-secondary focus:outline-none transition-colors"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-primary uppercase tracking-wider mb-2">
                                    {t.contact.formEmail}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    placeholder={t.contact.formEmailPlaceholder}
                                    className="w-full bg-bg border-2 border-primary/10 p-4 text-primary placeholder-primary/30 focus:border-secondary focus:outline-none transition-colors"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-primary uppercase tracking-wider mb-2">
                                    {t.contact.formMessage}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder={t.contact.formMessagePlaceholder}
                                    className="w-full bg-bg border-2 border-primary/10 p-4 text-primary placeholder-primary/30 focus:border-secondary focus:outline-none transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-bg font-bold uppercase tracking-widest py-4 hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:translate-y-1 hover:shadow-none"
                            >
                                {t.contact.sendButton} <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

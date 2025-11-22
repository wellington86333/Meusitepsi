import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showLangMenu, setShowLangMenu] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t.nav.home, href: '#home' },
        { name: t.nav.about, href: '#about' },
        { name: t.nav.services, href: '#services' },
        { name: t.nav.blog, href: '#blog' },
        { name: t.nav.testimonials, href: '#testimonials' },
        { name: t.nav.faq, href: '#faq' },
        { name: t.nav.contact, href: '#contact' },
    ];

    const languages = [
        { code: 'pt', name: 'Português', flag: '🇧🇷' },
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'es', name: 'Español', flag: '🇪🇸' }
    ];

    const currentLang = languages.find(lang => lang.code === language);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-surface/70 backdrop-blur-lg border-b border-primary/5 py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <a href="#" className="text-2xl font-display font-black text-primary tracking-tighter">
                            Wellington Brito <span className="text-secondary">PSI</span>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-textPrimary hover:text-secondary font-sans font-medium transition-colors duration-200"
                            >
                                {link.name}
                            </a>
                        ))}

                        {/* Language Selector */}
                        <div className="relative">
                            <button
                                onClick={() => setShowLangMenu(!showLangMenu)}
                                className="flex items-center gap-2 px-3 py-2 border border-primary/20 hover:border-secondary transition-colors"
                            >
                                <Globe size={18} />
                                <span className="text-sm font-bold">{currentLang.flag} {currentLang.code.toUpperCase()}</span>
                            </button>

                            <AnimatePresence>
                                {showLangMenu && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute right-0 mt-2 w-48 bg-surface border-2 border-primary shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
                                    >
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => {
                                                    setLanguage(lang.code);
                                                    setShowLangMenu(false);
                                                }}
                                                className={`w-full text-left px-4 py-3 hover:bg-primary/5 transition-colors flex items-center gap-3 ${language === lang.code ? 'bg-secondary/10 font-bold' : ''
                                                    }`}
                                            >
                                                <span className="text-2xl">{lang.flag}</span>
                                                <span>{lang.name}</span>
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <a
                            href="#contact"
                            className="bg-primary text-bg px-6 py-2.5 font-display font-bold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:-translate-y-0.5"
                        >
                            {t.nav.bookAppointment}
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        {/* Mobile Language Selector */}
                        <button
                            onClick={() => setShowLangMenu(!showLangMenu)}
                            className="text-primary hover:text-secondary"
                        >
                            <Globe size={24} />
                        </button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-primary hover:text-secondary focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Language Menu */}
            <AnimatePresence>
                {showLangMenu && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-surface/95 backdrop-blur-xl border-t border-primary/10 overflow-hidden"
                    >
                        <div className="px-4 py-2">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => {
                                        setLanguage(lang.code);
                                        setShowLangMenu(false);
                                    }}
                                    className={`w-full text-left px-3 py-3 hover:bg-primary/5 transition-colors flex items-center gap-3 ${language === lang.code ? 'bg-secondary/10 font-bold' : ''
                                        }`}
                                >
                                    <span className="text-2xl">{lang.flag}</span>
                                    <span>{lang.name}</span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-surface/95 backdrop-blur-xl border-t border-primary/10 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-8 space-y-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-4 text-lg font-display font-medium text-primary hover:text-secondary hover:bg-primary/5 rounded-none transition-colors border-b border-primary/5"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-6 px-3">
                                <a
                                    href="#contact"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center bg-primary text-bg px-6 py-4 font-display font-bold hover:bg-primary/90 transition-colors"
                                >
                                    {t.nav.bookAppointment}
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Início', href: '#home' },
        { name: 'Sobre', href: '#about' },
        { name: 'Serviços', href: '#services' },
        { name: 'Depoimentos', href: '#testimonials' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Contato', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <a href="#" className="text-2xl font-bold text-slate-800 tracking-tight">
                            Wellington Brito <span className="text-teal-600">PSI</span>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-slate-600 hover:text-teal-600 font-medium transition-colors duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="bg-teal-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-teal-700 transition-all duration-200 shadow-lg shadow-teal-600/20 hover:shadow-teal-600/30 transform hover:-translate-y-0.5"
                        >
                            Agendar Consulta
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 hover:text-teal-600 focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-8 space-y-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-4 text-base font-medium text-slate-600 hover:text-teal-600 hover:bg-slate-50 rounded-lg transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-4 px-3">
                                <a
                                    href="#contact"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center bg-teal-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-teal-700 transition-colors shadow-lg shadow-teal-600/20"
                                >
                                    Agendar Consulta
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

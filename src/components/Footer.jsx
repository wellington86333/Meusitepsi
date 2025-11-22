import React from 'react';
import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-primary text-bg py-16 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12">
                    <div className="col-span-2">
                        <a href="#" className="text-2xl font-display font-black tracking-tighter text-bg mb-6 block">
                            Wellington Brito <span className="text-secondary">PSI</span>
                        </a>
                        <p className="text-bg/80 font-sans mb-8 max-w-md leading-relaxed">
                            {t.footer.description}
                        </p>
                        <div className="p-6 border border-white/20 bg-white/5 backdrop-blur-sm max-w-md">
                            <p className="font-serif italic text-lg text-bg/90">
                                "{t.footer.quote}"
                            </p>
                            <p className="text-xs font-bold mt-3 text-secondary uppercase tracking-widest">{t.footer.quoteAuthor}</p>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-display font-bold text-lg mb-6 text-secondary tracking-wider">{t.footer.quickLinks}</h4>
                        <ul className="space-y-3 font-sans">
                            <li><a href="#about" className="text-bg/70 hover:text-secondary transition-colors hover:pl-2 duration-300 block">{t.nav.about}</a></li>
                            <li><a href="#services" className="text-bg/70 hover:text-secondary transition-colors hover:pl-2 duration-300 block">{t.footer.services}</a></li>
                            <li><a href="#blog" className="text-bg/70 hover:text-secondary transition-colors hover:pl-2 duration-300 block">{t.nav.blog}</a></li>
                            <li><a href="#contact" className="text-bg/70 hover:text-secondary transition-colors hover:pl-2 duration-300 block">{t.footer.contact}</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display font-bold text-lg mb-6 text-secondary tracking-wider">{t.footer.contact}</h4>
                        <div className="space-y-4 font-sans">
                            <a href="https://wa.me/447512130453" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-bg/70 hover:text-secondary transition-colors group">
                                <div className="p-2 bg-white/5 rounded-full group-hover:bg-secondary/20 transition-colors">
                                    <Phone size={18} />
                                </div>
                                <span>+44 7512 130453</span>
                            </a>
                            <a href="mailto:wellington.brito@rocketmail.com" className="flex items-center gap-3 text-bg/70 hover:text-secondary transition-colors group">
                                <div className="p-2 bg-white/5 rounded-full group-hover:bg-secondary/20 transition-colors">
                                    <Mail size={18} />
                                </div>
                                <span>wellington.brito@rocketmail.com</span>
                            </a>
                            <div className="flex gap-4 mt-6">
                                <a href="#" className="p-3 bg-white/5 hover:bg-secondary hover:text-primary transition-all duration-300 rounded-none">
                                    <Instagram size={20} />
                                </a>
                                <a href="#" className="p-3 bg-white/5 hover:bg-secondary hover:text-primary transition-all duration-300 rounded-none">
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center">
                    <p>&copy; {new Date().getFullYear()} Wellington Brito Psicologia.</p>
                    <p className="mt-2 md:mt-0">Desenvolvido com <span className="text-red-500">❤</span> e Psicanálise.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

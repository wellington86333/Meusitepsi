import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary text-bg py-16 border-t border-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-accent to-secondary"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-12 gap-12 mb-16">
                    <div className="md:col-span-5">
                        <h3 className="text-3xl font-display font-black text-white mb-6">
                            Wellington Brito <span className="text-secondary">PSI</span>
                        </h3>
                        <p className="text-gray-400 max-w-sm mb-8 font-sans leading-relaxed">
                            Psicologia clínica com abordagem humanista. Seu bem-estar emocional é nossa prioridade.
                        </p>

                        <blockquote className="text-lg font-serif italic text-accent border-l-2 border-secondary pl-4 my-8">
                            "The goal of all life is death? No. The goal of all life is to live, and to live well."
                            <footer className="text-xs font-bold mt-2 text-gray-500 uppercase not-italic">— Sigmund Freud (Paraphrased)</footer>
                        </blockquote>
                    </div>

                    <div className="md:col-span-3">
                        <h4 className="text-lg font-bold text-white mb-6 font-display uppercase tracking-wider">Links Rápidos</h4>
                        <ul className="space-y-3">
                            <li><a href="#home" className="text-gray-400 hover:text-secondary transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-secondary rounded-full"></span> Início</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-secondary transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-secondary rounded-full"></span> Sobre</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-secondary transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-secondary rounded-full"></span> Serviços</a></li>
                            <li><a href="#blog" className="text-gray-400 hover:text-secondary transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-secondary rounded-full"></span> Blog</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-secondary transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-secondary rounded-full"></span> Contato</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-4">
                        <h4 className="text-lg font-bold text-white mb-6 font-display uppercase tracking-wider">Conecte-se</h4>
                        <div className="flex space-x-4 mb-8">
                            <a href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-none flex items-center justify-center hover:bg-secondary hover:text-primary hover:border-secondary transition-all duration-300">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-none flex items-center justify-center hover:bg-secondary hover:text-primary hover:border-secondary transition-all duration-300">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-none flex items-center justify-center hover:bg-secondary hover:text-primary hover:border-secondary transition-all duration-300">
                                <Facebook size={20} />
                            </a>
                        </div>

                        <div className="bg-white/5 p-6 border border-white/10">
                            <p className="text-sm text-gray-400 mb-2">Assine nossa newsletter</p>
                            <div className="flex">
                                <input type="email" placeholder="Seu e-mail" className="bg-transparent border-b border-gray-600 w-full py-2 text-white focus:outline-none focus:border-secondary transition-colors" />
                                <button className="text-secondary font-bold uppercase text-sm ml-2 hover:text-white transition-colors">OK</button>
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

import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Wellington Brito <span className="text-teal-500">PSI</span>
                        </h3>
                        <p className="text-slate-400 max-w-xs">
                            Psicologia clínica com abordagem humanista. Seu bem-estar emocional é nossa prioridade.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Links Rápidos</h4>
                        <ul className="space-y-2">
                            <li><a href="#home" className="hover:text-teal-400 transition-colors">Início</a></li>
                            <li><a href="#about" className="hover:text-teal-400 transition-colors">Sobre</a></li>
                            <li><a href="#services" className="hover:text-teal-400 transition-colors">Serviços</a></li>
                            <li><a href="#contact" className="hover:text-teal-400 transition-colors">Contato</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Redes Sociais</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Wellington Brito Psicologia. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary text-bg py-16 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-10">
                    <div>
                        <a href="#" className="text-2xl font-display font-black tracking-tighter text-bg mb-4 block">
                            Wellington Brito <span className="text-secondary">PSI</span>
                        </a>
                        <p className="text-bg/80">Atendimento online com escuta clínica em psicanálise, com foco em sigilo, ética e clareza de informações.</p>
                    </div>

                    <div>
                        <h4 className="font-display font-bold text-lg mb-4 text-secondary tracking-wider">Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#sobre" className="text-bg/80 hover:text-secondary">Sobre o profissional</a></li>
                            <li><a href="#credenciais" className="text-bg/80 hover:text-secondary">Credenciais</a></li>
                            <li><a href="#como-funciona" className="text-bg/80 hover:text-secondary">Como funciona</a></li>
                            <li><a href="/politica-de-privacidade" className="text-bg/80 hover:text-secondary">Política de Privacidade</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display font-bold text-lg mb-4 text-secondary tracking-wider">Contato profissional</h4>
                        <div className="space-y-3 text-bg/80">
                            <p className="flex items-center gap-2"><Phone size={16} /> WhatsApp: +44 7512 130453</p>
                            <p className="flex items-center gap-2"><Mail size={16} /> wellington.brito@rocketmail.com</p>
                            <p className="flex items-center gap-2"><MapPin size={16} /> Base: atendimento online para Brasil e exterior</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 mt-8 text-sm text-bg/70 text-center">
                    © {new Date().getFullYear()} Wellington Brito PSI. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

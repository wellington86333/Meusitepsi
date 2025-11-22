import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                            Entre em Contato
                        </h2>
                        <p className="text-lg text-slate-600 mb-8">
                            Estou à disposição para tirar suas dúvidas e agendar sua consulta.
                            Dê o primeiro passo em direção ao seu bem-estar.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 flex-shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">Telefone / WhatsApp</h3>
                                    <p className="text-slate-600">(11) 99999-9999</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 flex-shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">E-mail</h3>
                                    <p className="text-slate-600">contato@wellingtonbrito.com.br</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 flex-shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">Localização</h3>
                                    <p className="text-slate-600">Av. Paulista, 1000 - Bela Vista, São Paulo - SP</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 flex-shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">Horário de Atendimento</h3>
                                    <p className="text-slate-600">Segunda a Sexta: 08:00 - 20:00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-8 rounded-3xl shadow-sm border border-slate-100">
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Nome Completo</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all bg-white"
                                    placeholder="Seu nome"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">E-mail</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all bg-white"
                                    placeholder="seu@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Mensagem</label>
                                <textarea
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all bg-white resize-none"
                                    placeholder="Como posso ajudar?"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-teal-600 text-white font-medium py-4 rounded-xl hover:bg-teal-700 transition-colors shadow-lg shadow-teal-600/20"
                            >
                                Enviar Mensagem
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

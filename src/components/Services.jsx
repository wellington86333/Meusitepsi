import React from 'react';
import { Brain, Heart, Users, Sparkles } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: "Psicoterapia Individual",
            description: "Espaço para tratar ansiedade, depressão, traumas e questões pessoais em um ambiente seguro.",
            icon: Brain
        },
        {
            title: "Terapia de Casal",
            description: "Auxílio na resolução de conflitos, melhoria da comunicação e fortalecimento do vínculo.",
            icon: Heart
        },
        {
            title: "Orientação Profissional",
            description: "Suporte para decisões de carreira, transição profissional e desenvolvimento de competências.",
            icon: Sparkles
        },
        {
            title: "Grupos Terapêuticos",
            description: "Troca de experiências e crescimento coletivo com mediação profissional.",
            icon: Users
        }
    ];

    return (
        <section id="services" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                        Como posso ajudar você?
                    </h2>
                    <p className="text-lg text-slate-600">
                        Ofereço diferentes modalidades de atendimento para atender às suas necessidades específicas.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100"
                        >
                            <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-6">
                                <service.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

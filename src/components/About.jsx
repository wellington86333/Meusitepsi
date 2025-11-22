import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
    const benefits = [
        "Abordagem Humanista e Acolhedora",
        "Sigilo e Ética Profissional",
        "Experiência em Ansiedade e Depressão",
        "Atendimento Personalizado"
    ];

    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-100 rounded-full -z-10"></div>
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-slate-100 rounded-full -z-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Consultório de Psicologia"
                                className="rounded-3xl shadow-xl w-full object-cover h-[500px]"
                            />
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                            Sobre Wellington Brito
                        </h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            Olá, sou Wellington Brito. Como psicólogo clínico, dedico minha carreira a ajudar pessoas a encontrarem caminhos para uma vida mais plena e significativa.
                        </p>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Acredito que cada indivíduo possui uma história única e um potencial inato para o crescimento. Minha abordagem é baseada na escuta ativa, no respeito e na construção de um vínculo terapêutico sólido.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {benefits.map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle className="text-teal-600 w-5 h-5 flex-shrink-0" />
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

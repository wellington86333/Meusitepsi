import React from 'react';

const HowItWorks = () => {
    return (
        <section id="como-funciona" className="py-20 bg-bg">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-display font-black text-primary mb-6">Como funciona</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                    <article className="p-6 border border-primary/10 bg-surface">
                        <h3 className="font-bold text-primary mb-2">Duração</h3>
                        <p className="text-textSecondary">Cada sessão tem duração média de 50 minutos.</p>
                    </article>
                    <article className="p-6 border border-primary/10 bg-surface">
                        <h3 className="font-bold text-primary mb-2">Formato</h3>
                        <p className="text-textSecondary">Atendimento online, por videochamada, com foco em privacidade e continuidade.</p>
                    </article>
                    <article className="p-6 border border-primary/10 bg-surface">
                        <h3 className="font-bold text-primary mb-2">Frequência</h3>
                        <p className="text-textSecondary">Geralmente semanal, podendo ser ajustada conforme necessidade clínica e disponibilidade.</p>
                    </article>
                    <article className="p-6 border border-primary/10 bg-surface">
                        <h3 className="font-bold text-primary mb-2">Público atendido</h3>
                        <p className="text-textSecondary">Adultos brasileiros no Brasil e no exterior que buscam escuta psicanalítica em português.</p>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;

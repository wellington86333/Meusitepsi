import React from 'react';

const Credentials = () => {
    return (
        <section id="credenciais" className="py-20 bg-surface border-y border-primary/10">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-display font-black text-primary mb-6">Credenciais e transparência</h2>
                <div className="grid md:grid-cols-2 gap-6 text-textSecondary">
                    <div className="p-6 bg-bg border border-primary/10">
                        <h3 className="font-bold text-primary mb-3">Formação e cursos</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Formação detalhada em psicanálise: <strong>não informada publicamente</strong>.</li>
                            <li>Cursos relevantes: <strong>não informados publicamente</strong>.</li>
                            <li>Atualização técnica contínua recomendada em supervisão, seminários e estudo clínico.</li>
                        </ul>
                    </div>
                    <div className="p-6 bg-bg border border-primary/10">
                        <h3 className="font-bold text-primary mb-3">Supervisão e associação</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Supervisão clínica: <strong>não informada publicamente</strong>.</li>
                            <li>Associação profissional: <strong>não informada publicamente</strong>.</li>
                            <li>Número de conselho profissional (CRP): <strong>não exibido neste site</strong>.</li>
                        </ul>
                    </div>
                </div>
                <p className="mt-6 p-4 bg-secondary/10 border-l-4 border-secondary text-primary">
                    Aviso importante: a psicanálise é uma prática clínica de escuta e elaboração subjetiva. Ela não substitui
                    atendimento médico, psiquiátrico, psicológico de emergência ou serviços de crise.
                </p>
            </div>
        </section>
    );
};

export default Credentials;

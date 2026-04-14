import React from 'react';

const Testimonials = () => {
    const depoimentos = [
        {
            nome: 'Paciente A. (anônimo)',
            texto: '“Comecei o atendimento em um período de ansiedade intensa. O processo tem sido de compreensão gradual, sem fórmulas prontas, e com escuta respeitosa.”'
        },
        {
            nome: 'Paciente B. (anônimo)',
            texto: '“Morar fora me trouxe um sentimento de não pertencimento. As sessões em português me ajudaram a organizar emoções e rotina.”'
        },
        {
            nome: 'Exemplo de abordagem',
            texto: '“Na psicanálise, em vez de respostas rápidas, investigamos padrões de repetição e sentidos pessoais para ampliar consciência e autonomia.”'
        }
    ];

    return (
        <section id="testimonials" className="py-24 bg-gradient-to-b from-bg to-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-display font-black text-primary">Depoimentos e abordagem clínica</h2>
                    <p className="mt-4 text-textSecondary">Relatos anônimos, sem promessa de resultado garantido.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {depoimentos.map((item, index) => (
                        <article key={index} className="bg-surface p-6 border border-primary/10 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <p className="text-textSecondary italic leading-relaxed">{item.texto}</p>
                            <p className="mt-4 font-semibold text-primary">{item.nome}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

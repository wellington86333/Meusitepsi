import React from 'react';
import SEOHead from './SEOHead';

const PrivacyPolicyPage = () => {
    return (
        <>
            <SEOHead
                title="Política de Privacidade | Wellington Brito PSI"
                description="Política de privacidade e LGPD: coleta de dados, cookies, confidencialidade e armazenamento das informações."
                canonical="https://wellingtonbritopsi.com/politica-de-privacidade"
            />
            <main className="min-h-screen bg-bg py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-display font-black text-primary mb-8">Política de Privacidade (LGPD)</h1>

                    <div className="space-y-6 text-textSecondary leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-primary mb-2">1. Coleta de dados</h2>
                            <p>Coletamos dados fornecidos voluntariamente em formulários (nome, e-mail e mensagem) para responder contato e organizar agendamentos.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-primary mb-2">2. Uso de cookies</h2>
                            <p>Este site pode usar cookies técnicos e analíticos para melhorar navegação, desempenho e segurança. Você pode gerenciar cookies no seu navegador.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-primary mb-2">3. Confidencialidade das sessões</h2>
                            <p>O atendimento clínico é conduzido com sigilo profissional e respeito à privacidade. Informações compartilhadas em sessão não são divulgadas a terceiros, exceto em obrigações legais aplicáveis.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-primary mb-2">4. Armazenamento e proteção</h2>
                            <p>Dados de contato e registros administrativos são armazenados com acesso restrito e medidas de proteção compatíveis com o atendimento online.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-primary mb-2">5. Direitos do titular</h2>
                            <p>Você pode solicitar confirmação de tratamento, correção ou exclusão de dados pessoais pelos canais de contato publicados no site.</p>
                        </section>
                    </div>
                </div>
            </main>
        </>
    );
};

export default PrivacyPolicyPage;

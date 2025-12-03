import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, TrendingUp, TrendingDown, AlertCircle, CheckCircle2 } from 'lucide-react';
import CountUp from 'react-countup';

export default function AnxietyCalculator() {
    const [responses, setResponses] = useState({});
    const [showResult, setShowResult] = useState(false);

    const questions = [
        {
            id: 1,
            text: 'Sentir-se nervoso(a), ansioso(a) ou muito tenso(a)',
            category: 'nervosismo'
        },
        {
            id: 2,
            text: 'Não ser capaz de impedir ou controlar preocupações',
            category: 'controle'
        },
        {
            id: 3,
            text: 'Preocupar-se muito com diversas coisas',
            category: 'preocupacao'
        },
        {
            id: 4,
            text: 'Dificuldade para relaxar',
            category: 'relaxamento'
        },
        {
            id: 5,
            text: 'Ficar tão agitado(a) que se torna difícil permanecer sentado(a)',
            category: 'agitacao'
        },
        {
            id: 6,
            text: 'Ficar facilmente aborrecido(a) ou irritado(a)',
            category: 'irritabilidade'
        },
        {
            id: 7,
            text: 'Sentir medo como se algo horrível fosse acontecer',
            category: 'medo'
        }
    ];

    const options = [
        { value: 0, label: 'Nunca', color: 'bg-green-500' },
        { value: 1, label: 'Vários dias', color: 'bg-yellow-500' },
        { value: 2, label: 'Mais da metade dos dias', color: 'bg-orange-500' },
        { value: 3, label: 'Quase todos os dias', color: 'bg-red-500' }
    ];

    const handleResponse = (questionId, value) => {
        setResponses({ ...responses, [questionId]: value });
    };

    const calculateScore = () => {
        return Object.values(responses).reduce((sum, val) => sum + val, 0);
    };

    const getAnxietyLevel = (score) => {
        if (score <= 4) return {
            level: 'Mínima',
            description: 'Seus níveis de ansiedade estão dentro do esperado. Continue cuidando da sua saúde mental!',
            color: 'text-green-600',
            bgColor: 'bg-green-50',
            borderColor: 'border-green-200',
            icon: CheckCircle2,
            recommendations: [
                'Mantenha práticas de autocuidado',
                'Continue com atividades que lhe trazem prazer',
                'Pratique mindfulness ocasionalmente'
            ]
        };

        if (score <= 9) return {
            level: 'Leve',
            description: 'Você apresenta sinais leves de ansiedade. É importante começar a prestar atenção aos gatilhos.',
            color: 'text-yellow-600',
            bgColor: 'bg-yellow-50',
            borderColor: 'border-yellow-200',
            icon: AlertCircle,
            recommendations: [
                'Identifique os gatilhos de ansiedade',
                'Pratique técnicas de respiração',
                'Considere conversar com um profissional',
                'Estabeleça uma rotina de sono regular'
            ]
        };

        if (score <= 14) return {
            level: 'Moderada',
            description: 'Sua ansiedade está em nível moderado. Recomendamos buscar apoio profissional para desenvolver estratégias de enfrentamento.',
            color: 'text-orange-600',
            bgColor: 'bg-orange-50',
            borderColor: 'border-orange-200',
            icon: TrendingUp,
            recommendations: [
                'Busque acompanhamento psicológico',
                'Pratique exercícios físicos regularmente',
                'Evite cafeína e estimulantes',
                'Desenvolva uma rede de apoio social',
                'Considere técnicas de relaxamento guiado'
            ]
        };

        return {
            level: 'Severa',
            description: 'Você apresenta sinais de ansiedade severa. É fundamental buscar ajuda profissional imediatamente.',
            color: 'text-red-600',
            bgColor: 'bg-red-50',
            borderColor: 'border-red-200',
            icon: TrendingDown,
            recommendations: [
                'Procure um psicólogo ou psicanalista urgentemente',
                'Considere avaliação médica',
                'Evite isolamento social',
                'Não tome decisões importantes neste momento',
                'Busque apoio de familiares e amigos',
                'Em caso de crise, procure atendimento de emergência'
            ]
        };
    };

    const allQuestionsAnswered = questions.every(q => responses[q.id] !== undefined);
    const score = calculateScore();
    const result = showResult ? getAnxietyLevel(score) : null;
    const Icon = result?.icon;

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                        <Activity className="w-5 h-5 text-primary" />
                        <span className="text-primary font-medium">Avaliação GAD-7</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Calculadora de Ansiedade
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Baseado na escala GAD-7, utilizada por profissionais de saúde mental mundialmente
                    </p>
                </motion.div>

                {!showResult ? (
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                            <p className="text-lg text-gray-700 mb-8">
                                Nas últimas <strong>2 semanas</strong>, com que frequência você foi incomodado(a) pelos problemas abaixo?
                            </p>

                            <div className="space-y-8">
                                {questions.map((question, index) => (
                                    <motion.div
                                        key={question.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="pb-8 border-b border-gray-200 last:border-0"
                                    >
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                            {index + 1}. {question.text}
                                        </h3>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                                            {options.map((option) => (
                                                <button
                                                    key={option.value}
                                                    onClick={() => handleResponse(question.id, option.value)}
                                                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${responses[question.id] === option.value
                                                            ? `${option.color} text-white border-transparent shadow-lg scale-105`
                                                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                                        }`}
                                                >
                                                    <div className="text-center">
                                                        <div className="font-semibold mb-1">{option.label}</div>
                                                        <div className="text-sm opacity-75">{option.value} ponto{option.value !== 1 ? 's' : ''}</div>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <div className="text-center sm:text-left">
                                        <p className="text-sm text-gray-600">Pontuação atual</p>
                                        <p className="text-3xl font-bold text-primary">
                                            {score} / 21
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => setShowResult(true)}
                                        disabled={!allQuestionsAnswered}
                                        className={`px-8 py-4 rounded-lg font-semibold transition-all ${allQuestionsAnswered
                                                ? 'bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg'
                                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                            }`}
                                    >
                                        {allQuestionsAnswered ? 'Ver Resultado' : 'Responda todas as perguntas'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className={`bg-white rounded-2xl shadow-xl p-8 md:p-12 border-4 ${result.borderColor}`}>
                            {/* Score Display */}
                            <div className="text-center mb-8">
                                <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full ${result.bgColor} mb-6`}>
                                    {Icon && <Icon className={`w-16 h-16 ${result.color}`} />}
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    Sua pontuação:
                                </h3>
                                <div className={`text-6xl font-bold ${result.color} mb-4`}>
                                    <CountUp end={score} duration={2} />
                                    <span className="text-3xl text-gray-400"> / 21</span>
                                </div>

                                <div className={`inline-block px-6 py-3 rounded-full ${result.bgColor} ${result.color} font-bold text-xl mb-4`}>
                                    Ansiedade {result.level}
                                </div>

                                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                                    {result.description}
                                </p>
                            </div>

                            {/* Visual Progress Bar */}
                            <div className="mb-8">
                                <div className="flex justify-between text-sm text-gray-600 mb-2">
                                    <span>Mínima</span>
                                    <span>Leve</span>
                                    <span>Moderada</span>
                                    <span>Severa</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-4 relative overflow-hidden">
                                    <div className="absolute inset-0 flex">
                                        <div className="w-1/4 bg-green-500"></div>
                                        <div className="w-1/4 bg-yellow-500"></div>
                                        <div className="w-1/4 bg-orange-500"></div>
                                        <div className="w-1/4 bg-red-500"></div>
                                    </div>
                                    <motion.div
                                        className="absolute top-0 left-0 h-full w-1 bg-gray-900"
                                        initial={{ left: 0 }}
                                        animate={{ left: `${(score / 21) * 100}%` }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                    >
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap">
                                            Você está aqui
                                        </div>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Recommendations */}
                            <div className={`${result.bgColor} rounded-xl p-6 mb-8`}>
                                <h4 className={`text-xl font-bold ${result.color} mb-4 flex items-center gap-2`}>
                                    <Activity className="w-6 h-6" />
                                    Recomendações Personalizadas
                                </h4>
                                <ul className="space-y-3">
                                    {result.recommendations.map((rec, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-start gap-3"
                                        >
                                            <CheckCircle2 className={`w-5 h-5 ${result.color} flex-shrink-0 mt-0.5`} />
                                            <span className="text-gray-700">{rec}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA */}
                            <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-8 text-center text-white">
                                <h4 className="text-2xl font-bold mb-3">
                                    Pronto para dar o próximo passo?
                                </h4>
                                <p className="text-lg mb-6 opacity-90">
                                    A psicanálise pode ajudá-lo(a) a compreender as raízes da sua ansiedade e desenvolver recursos internos para lidar com ela.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href="#contact"
                                        className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:shadow-lg transition-all"
                                    >
                                        Agendar Consulta Gratuita
                                    </a>
                                    <a
                                        href="https://wa.me/5511987654321?text=Olá! Fiz o teste de ansiedade e gostaria de agendar uma consulta."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-8 py-4 bg-green-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                                    >
                                        Falar no WhatsApp
                                    </a>
                                </div>
                            </div>

                            {/* Disclaimer */}
                            <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <p className="text-sm text-gray-600 text-center">
                                    ⚠️ <strong>Importante:</strong> Este teste é apenas uma ferramenta de triagem e não substitui uma avaliação profissional.
                                    Se você está em crise, procure ajuda imediatamente através do CVV (188) ou serviços de emergência.
                                </p>
                            </div>

                            {/* Reset Button */}
                            <div className="text-center mt-6">
                                <button
                                    onClick={() => {
                                        setResponses({});
                                        setShowResult(false);
                                    }}
                                    className="text-primary hover:underline font-medium"
                                >
                                    Refazer o teste
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Info Box */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6"
                >
                    <h4 className="font-bold text-blue-900 mb-2">Sobre a Escala GAD-7</h4>
                    <p className="text-blue-800 text-sm">
                        O GAD-7 (Generalized Anxiety Disorder 7-item scale) é uma ferramenta validada cientificamente,
                        utilizada por profissionais de saúde mental em todo o mundo para avaliar a gravidade dos sintomas
                        de ansiedade generalizada. Desenvolvida por Spitzer et al. (2006), é amplamente reconhecida por
                        sua eficácia e simplicidade.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

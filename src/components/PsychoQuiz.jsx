import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, CheckCircle, ArrowRight, ArrowLeft, Download, Share2 } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

export default function PsychoQuiz() {
    const { language } = useLanguage();
    const t = translations[language];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [email, setEmail] = useState('');
    const [showEmailCapture, setShowEmailCapture] = useState(false);

    const questions = {
        pt: [
            {
                id: 1,
                question: 'Como você lida com situações de conflito?',
                options: [
                    { id: 'a', text: 'Evito ao máximo, prefiro não confrontar', points: { evitacao: 3 } },
                    { id: 'b', text: 'Enfrento diretamente, mesmo que seja difícil', points: { confronto: 3 } },
                    { id: 'c', text: 'Analiso a situação antes de agir', points: { reflexao: 3 } },
                    { id: 'd', text: 'Fico ansioso(a) e não sei como reagir', points: { ansiedade: 3 } }
                ]
            },
            {
                id: 2,
                question: 'Seus sonhos costumam ser:',
                options: [
                    { id: 'a', text: 'Vívidos e perturbadores', points: { inconsciente_ativo: 3 } },
                    { id: 'b', text: 'Raramente me lembro deles', points: { repressao: 3 } },
                    { id: 'c', text: 'Repetitivos, sempre os mesmos temas', points: { compulsao_repeticao: 3 } },
                    { id: 'd', text: 'Agradáveis e tranquilos', points: { equilibrio: 3 } }
                ]
            },
            {
                id: 3,
                question: 'Quando você se sente ansioso(a):',
                options: [
                    { id: 'a', text: 'Procuro me distrair com outras atividades', points: { evitacao: 2, ansiedade: 1 } },
                    { id: 'b', text: 'Tento entender o que está me causando ansiedade', points: { reflexao: 3 } },
                    { id: 'c', text: 'Sinto sintomas físicos (taquicardia, sudorese)', points: { somatizacao: 3 } },
                    { id: 'd', text: 'Busco conversar com alguém', points: { social: 3 } }
                ]
            },
            {
                id: 4,
                question: 'Suas relações afetivas geralmente são:',
                options: [
                    { id: 'a', text: 'Intensas e conflituosas', points: { intensidade: 3 } },
                    { id: 'b', text: 'Estáveis e duradouras', points: { equilibrio: 3 } },
                    { id: 'c', text: 'Difíceis de manter, sempre terminam', points: { compulsao_repeticao: 2, evitacao: 1 } },
                    { id: 'd', text: 'Evito me envolver profundamente', points: { evitacao: 3 } }
                ]
            },
            {
                id: 5,
                question: 'Quando pensa no passado, você:',
                options: [
                    { id: 'a', text: 'Sente nostalgia e saudade', points: { melancolia: 3 } },
                    { id: 'b', text: 'Prefere não pensar, foco no presente', points: { repressao: 2, evitacao: 1 } },
                    { id: 'c', text: 'Analisa para entender quem você é hoje', points: { reflexao: 3 } },
                    { id: 'd', text: 'Sente culpa ou arrependimento', points: { culpa: 3 } }
                ]
            },
            {
                id: 6,
                question: 'Sua maior dificuldade emocional é:',
                options: [
                    { id: 'a', text: 'Controlar a ansiedade', points: { ansiedade: 3 } },
                    { id: 'b', text: 'Lidar com a tristeza profunda', points: { melancolia: 3 } },
                    { id: 'c', text: 'Expressar o que sinto', points: { repressao: 3 } },
                    { id: 'd', text: 'Confiar nas pessoas', points: { desconfianca: 3 } }
                ]
            },
            {
                id: 7,
                question: 'Como você reage a mudanças?',
                options: [
                    { id: 'a', text: 'Com resistência e medo', points: { ansiedade: 2, evitacao: 1 } },
                    { id: 'b', text: 'Com curiosidade e abertura', points: { equilibrio: 3 } },
                    { id: 'c', text: 'Depende da mudança', points: { reflexao: 2 } },
                    { id: 'd', text: 'Sinto que perco o controle', points: { controle: 3 } }
                ]
            },
            {
                id: 8,
                question: 'Seus pensamentos intrusivos são:',
                options: [
                    { id: 'a', text: 'Frequentes e perturbadores', points: { obsessao: 3 } },
                    { id: 'b', text: 'Ocasionais, consigo controlar', points: { equilibrio: 2 } },
                    { id: 'c', text: 'Raramente tenho', points: { equilibrio: 3 } },
                    { id: 'd', text: 'Constantes, não consigo parar', points: { obsessao: 3, ansiedade: 2 } }
                ]
            }
        ],
        en: [
            {
                id: 1,
                question: 'How do you handle conflict situations?',
                options: [
                    { id: 'a', text: 'I avoid them as much as possible', points: { evitacao: 3 } },
                    { id: 'b', text: 'I face them directly, even if difficult', points: { confronto: 3 } },
                    { id: 'c', text: 'I analyze the situation before acting', points: { reflexao: 3 } },
                    { id: 'd', text: 'I get anxious and don\'t know how to react', points: { ansiedade: 3 } }
                ]
            },
            // ... (adicionar mais questões em inglês)
        ],
        es: [
            {
                id: 1,
                question: '¿Cómo manejas las situaciones de conflicto?',
                options: [
                    { id: 'a', text: 'Las evito al máximo, prefiero no confrontar', points: { evitacao: 3 } },
                    { id: 'b', text: 'Las enfrento directamente, aunque sea difícil', points: { confronto: 3 } },
                    { id: 'c', text: 'Analizo la situación antes de actuar', points: { reflexao: 3 } },
                    { id: 'd', text: 'Me pongo ansioso(a) y no sé cómo reaccionar', points: { ansiedade: 3 } }
                ]
            },
            // ... (adicionar mais questões em espanhol)
        ]
    };

    const profiles = {
        pt: {
            ansiedade: {
                title: 'Perfil Ansioso',
                description: 'Você apresenta características de ansiedade elevada. A psicanálise pode ajudá-lo(a) a compreender as raízes inconscientes dessa ansiedade e desenvolver mecanismos mais saudáveis de enfrentamento.',
                recommendations: [
                    'Análise do inconsciente para identificar causas profundas',
                    'Trabalho com sintomas somáticos',
                    'Desenvolvimento de recursos internos'
                ],
                color: 'from-red-500 to-orange-500'
            },
            reflexao: {
                title: 'Perfil Reflexivo',
                description: 'Você possui uma capacidade natural de autorreflexão. A psicanálise pode aprofundar esse autoconhecimento e revelar aspectos ainda não conscientes de sua psique.',
                recommendations: [
                    'Aprofundamento do autoconhecimento',
                    'Análise de padrões inconscientes',
                    'Desenvolvimento do potencial criativo'
                ],
                color: 'from-blue-500 to-purple-500'
            },
            evitacao: {
                title: 'Perfil Evitativo',
                description: 'Você tende a evitar conflitos e situações difíceis. A psicanálise pode ajudá-lo(a) a compreender os mecanismos de defesa e desenvolver formas mais adaptativas de lidar com desafios.',
                recommendations: [
                    'Trabalho com mecanismos de defesa',
                    'Fortalecimento do ego',
                    'Desenvolvimento de coragem emocional'
                ],
                color: 'from-yellow-500 to-green-500'
            },
            melancolia: {
                title: 'Perfil Melancólico',
                description: 'Você apresenta traços melancólicos, com tendência à tristeza profunda. A psicanálise pode ajudá-lo(a) a elaborar perdas e desenvolver uma relação mais saudável com o passado.',
                recommendations: [
                    'Elaboração de perdas e lutos',
                    'Trabalho com a culpa inconsciente',
                    'Ressignificação do passado'
                ],
                color: 'from-indigo-500 to-blue-500'
            },
            equilibrio: {
                title: 'Perfil Equilibrado',
                description: 'Você demonstra equilíbrio emocional. A psicanálise pode ser uma ferramenta de crescimento pessoal e aprofundamento do autoconhecimento.',
                recommendations: [
                    'Desenvolvimento pessoal contínuo',
                    'Prevenção de crises futuras',
                    'Maximização do potencial'
                ],
                color: 'from-green-500 to-teal-500'
            },
            compulsao_repeticao: {
                title: 'Perfil de Repetição',
                description: 'Você tende a repetir padrões, especialmente em relacionamentos. A psicanálise pode ajudá-lo(a) a quebrar esses ciclos e criar novas possibilidades.',
                recommendations: [
                    'Identificação de padrões repetitivos',
                    'Trabalho com compulsão à repetição',
                    'Criação de novos caminhos'
                ],
                color: 'from-purple-500 to-pink-500'
            }
        }
    };

    const handleAnswer = (optionId) => {
        const newAnswers = { ...answers, [currentQuestion]: optionId };
        setAnswers(newAnswers);

        if (currentQuestion < questions[language].length - 1) {
            setTimeout(() => {
                setCurrentQuestion(currentQuestion + 1);
            }, 300);
        } else {
            setShowEmailCapture(true);
        }
    };

    const calculateResults = () => {
        const scores = {};

        Object.entries(answers).forEach(([questionIndex, optionId]) => {
            const question = questions[language][questionIndex];
            const option = question.options.find(opt => opt.id === optionId);

            if (option && option.points) {
                Object.entries(option.points).forEach(([trait, points]) => {
                    scores[trait] = (scores[trait] || 0) + points;
                });
            }
        });

        // Find dominant profile
        const dominantTrait = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
        return profiles[language][dominantTrait] || profiles[language].equilibrio;
    };

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        // Aqui você enviaria o email para seu sistema de email marketing
        console.log('Email capturado:', email);
        setShowResults(true);
        setShowEmailCapture(false);

        // Google Analytics event
        if (window.gtag) {
            window.gtag('event', 'quiz_completed', {
                event_category: 'engagement',
                event_label: 'psycho_quiz'
            });
        }
    };

    const progress = ((currentQuestion + 1) / questions[language].length) * 100;
    const result = showResults ? calculateResults() : null;

    return (
        <section id="quiz" className="py-20 bg-gradient-to-br from-primary via-purple-900 to-secondary relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                        <Brain className="w-5 h-5 text-accent" />
                        <span className="text-white font-medium">Quiz Psicanalítico</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Descubra Seu Perfil Psíquico
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        Responda 8 perguntas e receba uma análise personalizada baseada em princípios psicanalíticos
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    <AnimatePresence mode="wait">
                        {!showEmailCapture && !showResults && (
                            <motion.div
                                key={currentQuestion}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
                            >
                                {/* Progress Bar */}
                                <div className="mb-8">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-medium text-gray-600">
                                            Pergunta {currentQuestion + 1} de {questions[language].length}
                                        </span>
                                        <span className="text-sm font-medium text-primary">
                                            {Math.round(progress)}%
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <motion.div
                                            className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${progress}%` }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </div>
                                </div>

                                {/* Question */}
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                                    {questions[language][currentQuestion].question}
                                </h3>

                                {/* Options */}
                                <div className="space-y-4">
                                    {questions[language][currentQuestion].options.map((option, index) => (
                                        <motion.button
                                            key={option.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            onClick={() => handleAnswer(option.id)}
                                            className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-300 ${answers[currentQuestion] === option.id
                                                    ? 'border-primary bg-primary/5 shadow-lg'
                                                    : 'border-gray-200 hover:border-primary/50 hover:bg-gray-50'
                                                }`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${answers[currentQuestion] === option.id
                                                        ? 'border-primary bg-primary'
                                                        : 'border-gray-300'
                                                    }`}>
                                                    {answers[currentQuestion] === option.id && (
                                                        <CheckCircle className="w-5 h-5 text-white" />
                                                    )}
                                                </div>
                                                <span className="text-lg text-gray-700 flex-1">{option.text}</span>
                                            </div>
                                        </motion.button>
                                    ))}
                                </div>

                                {/* Navigation */}
                                <div className="flex justify-between mt-8">
                                    <button
                                        onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                                        disabled={currentQuestion === 0}
                                        className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                    >
                                        <ArrowLeft className="w-5 h-5" />
                                        Anterior
                                    </button>

                                    {currentQuestion === questions[language].length - 1 && answers[currentQuestion] && (
                                        <button
                                            onClick={() => setShowEmailCapture(true)}
                                            className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:shadow-lg transition-all"
                                        >
                                            Ver Resultado
                                            <ArrowRight className="w-5 h-5" />
                                        </button>
                                    )}
                                </div>
                            </motion.div>
                        )}

                        {/* Email Capture */}
                        {showEmailCapture && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center"
                            >
                                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Brain className="w-10 h-10 text-white" />
                                </div>

                                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                    Quase lá!
                                </h3>
                                <p className="text-lg text-gray-600 mb-8">
                                    Deixe seu email para receber seu perfil psicanalítico completo e um guia exclusivo de autoconhecimento
                                </p>

                                <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="seu@email.com"
                                        required
                                        className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg mb-4 focus:border-primary focus:outline-none text-lg"
                                    />
                                    <button
                                        type="submit"
                                        className="w-full px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-lg transition-all text-lg"
                                    >
                                        Receber Meu Perfil
                                    </button>
                                </form>

                                <p className="text-sm text-gray-500 mt-4">
                                    🔒 Seus dados estão seguros. Não enviamos spam.
                                </p>
                            </motion.div>
                        )}

                        {/* Results */}
                        {showResults && result && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
                            >
                                <div className={`w-24 h-24 bg-gradient-to-br ${result.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                                    <Brain className="w-12 h-12 text-white" />
                                </div>

                                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
                                    {result.title}
                                </h3>

                                <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
                                    {result.description}
                                </p>

                                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                                        Recomendações Psicanalíticas:
                                    </h4>
                                    <ul className="space-y-3">
                                        {result.recommendations.map((rec, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700">{rec}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href="#contact"
                                        className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-lg transition-all text-center"
                                    >
                                        Agendar Consulta
                                    </a>
                                    <button
                                        onClick={() => {
                                            setCurrentQuestion(0);
                                            setAnswers({});
                                            setShowResults(false);
                                            setEmail('');
                                        }}
                                        className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-all"
                                    >
                                        Refazer Quiz
                                    </button>
                                </div>

                                <div className="flex justify-center gap-4 mt-8">
                                    <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                                        <Download className="w-5 h-5" />
                                        Baixar Resultado
                                    </button>
                                    <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                                        <Share2 className="w-5 h-5" />
                                        Compartilhar
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
